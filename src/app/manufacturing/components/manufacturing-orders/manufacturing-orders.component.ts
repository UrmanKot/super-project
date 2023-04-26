import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {BehaviorSubject, iif, Observable, switchMap} from 'rxjs';
import {OrderService} from '../../../procurement/services/order.service';
import {AdapterService} from '@shared/services/adapter.service';
import {filter, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';
import {Order} from '../../../procurement/models/order';
import {ModalService} from '@shared/services/modal.service';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';

@UntilDestroy()
@Component({
  selector: 'pek-manufacturing-orders',
  templateUrl: './manufacturing-orders.component.html',
  styleUrls: ['./manufacturing-orders.component.scss']
})
export class ManufacturingOrdersComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  searchForm: FormGroup = this.fb.group({
    order_root_list_id: [null],
    active_status__in: [null],
    created_after: [null],
    created_before: [null],
  });

  menuItems: MenuItem[] = [{
    label: 'Selected Order',
    items: [
      {
        label: 'Own Production Item',
        icon: 'pi pi-pencil',
        command: () => this.onGoToOderPage()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveOrder()
      }
    ]
  }];

  isStartFirstPage = false;
  isShowAll = false;

  finalStatusSelected = false;

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];
  isLoading = true;
  ordersCount = 0;

  selectedOrder: Order = null;

  isCreating = false;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  orders$: Observable<Order[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.orderService.getForPagination(this.query).pipe(
          tap(response => this.ordersCount = response.count),
          map(response => response.results),
          map(orders => this.transformOrders(orders))
        ),
        this.orderService.get(this.query).pipe(
          tap(orders => this.ordersCount = orders.length),
          map(orders => this.transformOrders(orders))
        )
      ),
    ),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly orderService: OrderService,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {

  }

  transformOrders(orders: Order[]): Order[] {
    orders.forEach(order => {
      order.order_products.forEach(prod => {
        if (prod.is_task_date_overdue) {
          order.isReceiptDateOverdue = true;
        }
      });
      if (order.statuses.length === 0) {
        order.statuses = [{status: {value: 'Empty'}}];
      }
      order.list_ids = [...new Set(order.list_ids)];
    });

    return orders;
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedOrder = null;

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'accounting_type', value: 3},
      {name: 'exclude_with_active_final_status', value: !this.finalStatusSelected},
      {name: 'page', value: this.currentPage},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true});
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null) {

        if (this.searchForm.controls[key].value instanceof Date) {
          this.query.push({
            name: key,
            value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
          });
        } else {
          this.query.push({
            name: key,
            value: this.searchForm.controls[key].value
          });
        }
      }
    }
  }

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  onShowAll(value: boolean) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1;
    }

    this.search$.next();
  }

  onSelectStatuses(ids: number[]) {
    this.searchForm.get('active_status__in').patchValue(ids?.join(',') || null);
    this.search$.next();
  }

  onSelectRootList(id: number) {
    this.searchForm.get('order_root_list_id').patchValue(id);
    this.search$.next();
  }

  onCreateOrder() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isCreating = true;
        this.orderService.create({accounting_type: 3, can_select_supplier: false}).subscribe(order => {
          this.isCreating = false;
          this.router.navigate(['/manufacturing/orders/order/', order.id]);
        });
      }
    });
  }

  private onRemoveOrder() {
    this.modalService.confirm('danger').pipe(
      filter(confirm => confirm),
      tap(() => this.isCreating = true),
      switchMap(() => this.orderService.delete(this.selectedOrder.id)),
      tap(() => this.isCreating = false),
      tap(() => this.search$.next())
    ).subscribe();
  }

  private onGoToOderPage() {
    window.open('/manufacturing/orders/order/' + this.selectedOrder?.id, '_blank');
  }
}

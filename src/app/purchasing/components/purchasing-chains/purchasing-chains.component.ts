import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Order} from '../../../procurement/models/order';
import {Nomenclature} from '@shared/models/nomenclature';
import {QuerySearch} from '@shared/models/other';
import {OrderService} from '../../../procurement/services/order.service';
import {Router} from '@angular/router';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {ListProduct} from '../../../warehouse/models/list-product';
import {BehaviorSubject, switchMap} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Table} from 'primeng/table';
import {OrderStatusesTableComponent} from '@shared/components/order-statuses-table/order-statuses-table.component';
import {OrderRequestType} from '../../../procurement/models/order-product';

@UntilDestroy()
@Component({
  selector: 'pek-purchasing-chains',
  templateUrl: './purchasing-chains.component.html',
  styleUrls: ['./purchasing-chains.component.scss']
})
export class PurchasingChainsComponent implements OnInit {
  @ViewChild('dt') dt: Table;
  @ViewChild(OrderStatusesTableComponent)
  orderStatusTableComponent: OrderStatusesTableComponent;

  isShowStatuses = false;

  menuItems: MenuItem[] = [{
    label: 'Selected Chain',
    items: [
      {
        label: 'Open Chain',
        icon: 'pi pi-pencil',
        command: () => this.onGoToOderPage()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveChain()
      }
    ]
  }];

  searchForm: FormGroup = this.fb.group({
    contains_nomenclature: [null],
    supplier: [null],
    order_root_list_id: [null],
    active_status__in: [null],
    created_after: [null],
    created_before: [null],
    root_production_list_products_root_categories: [null],
    contains_nomenclatures_by_categories: [null],
    contains_nomenclature_name: [null],
    contains_declined_payment: [null],
    purchase_categories: [null],
    contains_nomenclature_code: [null],
    id: [null],
  });

  orders: Order[] = [];
  selectedOrder: Order;

  isLoading = false;
  isHideFilters = false;

  nomenclaturesList: Nomenclature[] = [];
  rootLists: any[] = [];

  query: QuerySearch[] = [];

  tableScrollHeight = '29.625rem';

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  firstPage: number = 0;
  finalStatusSelected = false;

  isRootListShown: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly orderService: OrderService,
    private readonly router: Router,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.search$.pipe(
      tap(() => this.prepareForSearch()),
      switchMap(() => this.orderService.get(this.query)),
      map(orders => this.orderService.modifyOrders(orders)),
      tap(orders => {
        orders.forEach(order => {
          order.hasRequestedByMinimumValueProducts = order.order_products
            .some(product => product.request_type === OrderRequestType.REQUEST_BY_VOLUME);
          order.uniqueOrderProducts = [];

          order.order_products.forEach(product => {
            const existingInList = order.uniqueOrderProducts.find(unProduct =>
              unProduct.current_technology === product.current_technology &&
              unProduct.nomenclature.id === product.nomenclature.id);

            if (!existingInList) {
              order.uniqueOrderProducts.push(product);
            }
          });

          order.root_production_list_products.forEach((root) => {

            order.root_production_plans.forEach((plan: any) => {
              if (plan.list_product.id == root.id) {
                root.productionPlanId = plan.id;
              }
            });
            this.rootLists.push(root);
          });

          const lists: { list: ListProduct, count?: number, allLists: ListProduct[] }[] = [];
          order.root_production_list_products.forEach((res: ListProduct) => {
            const found = lists.find(el => el.list.nomenclature.name === res.nomenclature.name);
            if (found) {
              found.count++;
              found.allLists.push(res);
            } else {
              lists.push({list: res, count: 1, allLists: [res]});
            }
          });
          order.display_production_list_products = lists;
        });
        this.orders = orders;
      }),
      tap(() => this.generateNomenclaturesListAndRootLists()),
      tap(() => this.isLoading = false),
      untilDestroyed(this)
    ).subscribe();
  }

  generateNomenclaturesListAndRootLists() {
    this.orders.forEach(order => {
      if (order.activeStatusDate) {
        order.activeStatusDate = new Date(order.activeStatusDate);
      }

      order.order_products.forEach(orderProduct => {
        if (!this.nomenclaturesList.includes(orderProduct.nomenclature)) {
          this.nomenclaturesList.push(orderProduct.nomenclature);
        }
      });

      order.root_production_list_products.forEach(root => this.rootLists.push(root));

      this.rootLists = this.rootLists.map(root => {
        return {
          ...root,
          fullName: `(${root.id}) ${root.nomenclature.code}~${root.nomenclature.name}`
        };
      });
    });

    this.nomenclaturesList = this.adapterService.removeDuplicates(this.nomenclaturesList, x => x.id);
    this.rootLists = this.adapterService.removeDuplicates(this.rootLists, x => x.id);

    this.nomenclaturesList.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    this.rootLists.sort((a, b) => {
      if (a.fullName < b.fullName) return -1;
      if (a.fullName > b.fullName) return 1;
      return 0;
    });
  }

  getRootLists(rootLists: ListProduct[]): { list: ListProduct, count?: number }[] {
    const lists: { list: ListProduct, count?: number }[] = [];
    rootLists.forEach((res: ListProduct) => {
      const found = lists.find(el => el.list.nomenclature.name === res.nomenclature.name);
      if (found) {
        found.count++;
      } else {
        lists.push({list: res, count: 1});
      }
    });
    return lists;
  }

  private onGoToOderPage() {
    window.open('/purchasing/chains/order/' + this.selectedOrder?.id, '_blank');
  }

  onRemoveChain() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.orderService.delete(this.selectedOrder.id).subscribe(() => {
          this.orders = this.orders.filter(x => x.id !== this.selectedOrder.id);
          this.selectedOrder = null;

          setTimeout(() => {
            this.orderStatusTableComponent?.renderDates({first: this.firstPage});
          });
        });
      }
    });
  }

  private prepareForSearch() {
    this.isLoading = true;
    this.selectedOrder = null;
    this.orders = [];

    this.query = [
      {name: 'accounting_type', value: 1},
      {name: 'has_purchase_category', value: true},
    ];

    if (this.searchForm.get('id').value) {
      this.query.push(
        {name: 'exclude_with_active_final_status', value: false}
      );
    } else {
      this.query.push(
        {name: 'exclude_with_active_final_status', value: !this.finalStatusSelected}
      );
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

    this.firstPage = 0;

    this.orderStatusTableComponent?.renderDates({first: 0});
    this.orders = this.orders.map(o => o);
  }

  onSelectCompany(id: number) {
    this.searchForm.get('supplier').patchValue(id);
    this.search$.next();
  }

  onSelectStatuses(ids: number[]) {
    this.searchForm.get('active_status__in').patchValue(ids?.join(',') || null);
    this.search$.next();
  }

  onSelectRootCategories(ids: string) {
    this.searchForm.get('root_production_list_products_root_categories').patchValue(ids);
    this.search$.next();
  }

  onSelectCategories(ids: number[]) {
    this.searchForm.get('contains_nomenclatures_by_categories').patchValue(ids?.join(',') || null);
    this.search$.next();
  }

  onSelectPurchaseCategories(ids: number[]) {
    this.searchForm.get('purchase_categories').patchValue(ids?.join(',') || null);
    this.search$.next();
  }

  onCreatePurchaseChain() {
    this.orderService.openCreateEmptyPurchaseChainModal().subscribe(order => {
      if (order) {
        this.router.navigate(['/purchasing/chains/order', order.id])
      }
    })
  }

  onToggleStatuses() {
    this.isShowStatuses = !this.isShowStatuses;
  }

  onChangePage(page: number) {
    this.firstPage = page;
  }

  onPage(evt: any) {
    this.orderStatusTableComponent.renderDates(evt);
  }

  onSelectOrder() {
    this.orderStatusTableComponent.selectedOrder = this.selectedOrder;
  }

  onSelectionOrder(order: Order) {
    this.selectedOrder = order;
  }

  onShowAll(value: boolean) {
    this.dt.paginator = value;
  }
}

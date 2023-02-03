import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from 'primeng/paginator';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {OrderProduct} from '../../../procurement/models/order-product';
import {BehaviorSubject, iif, Observable, Subject, switchMap} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {AdapterService} from '@shared/services/adapter.service';
import {OrderService} from '../../../procurement/services/order.service';
import {Technology} from '../../../product-structure/models/technology';

@UntilDestroy()
@Component({
  selector: 'pek-outsourcing-requests',
  templateUrl: './outsourcing-requests.component.html',
  styleUrls: ['./outsourcing-requests.component.scss']
})
export class OutsourcingRequestsComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  statuses = [
    {label: 'ORDERED', value: 'ordered'},
    {label: 'NOT ORDERED', value: 'not_ordered'},
    {label: 'PARTLY ORDERED', value: 'partially_ordered'}
  ];

  searchForm: FormGroup = this.fb.group({
    nomenclature__name: [null],
    nomenclature__code: [null],
    request_date: [null],
    technologies_ids: [null],
    status: ['not_ordered']
  });

  isStartFirstPage = false;
  isShowAll = false;

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];
  isLoading = true;
  productsCount = 0;

  selectedProducts: OrderProduct[] = [];

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  name$: Subject<void> = new Subject<void>();
  code$: Subject<void> = new Subject<void>();

  orderProducts$: Observable<OrderProduct[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.orderProductService.getGroupedOutsourceForPagination(this.query).pipe(
          tap(response => this.productsCount = response.count),
          map(response => response.results.map(product => {
            product.status = this.setProductStatus(product);
            return product;
          })),
        ),
        this.orderProductService.getGroupedOutsource(this.query).pipe(
          tap(products => this.productsCount = products.length),
          map(products => products.map(product => {
            product.status = this.setProductStatus(product);
            return product;
          }))
        )
      ),
    ),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly orderProductService: OrderProductService,
    private readonly orderService: OrderService,
    private readonly adapterService: AdapterService,
  ) {
  }

  ngOnInit(): void {
    this.name$.pipe(
      debounceTime(150),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.code$.pipe(
      debounceTime(150),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();
  }

  setProductStatus(product: OrderProduct) {
    let status: string;

    if (product.ordered_quantity >= product.initial_quantity) {
      status = 'A0';
    } else if (product.ordered_quantity < product.initial_quantity && product.ordered_quantity > 0) {
      status = 'A1';
    } else {
      status = 'A2';
    }

    return status;
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedProducts = [];

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'page', value: this.currentPage},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true},)
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

  getSmallDescription(description: string) {
    if (description && description?.length > 40) return description.substring(0, 40) + '...';
    else return description;
  }

  onCreateRequest() {
    this.orderProductService.openAddOutsourcingRequestModal(null).subscribe(products => {
      if (products) {
        this.search$.next();
      }
    });
  }

  onSelectTechnologies(technologies: Technology[]) {
    this.searchForm.get('technologies_ids').patchValue(technologies?.map(t => t.id)?.join(',') || null);
    this.search$.next();
  }

  onShowAll(value: boolean) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1
    }

    this.search$.next()
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from 'primeng/paginator';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {OrderProduct, OrderRequestType} from '../../../procurement/models/order-product';
import {BehaviorSubject, iif, Observable, Subject, switchMap} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {AdapterService} from '@shared/services/adapter.service';
import {OrderService} from '../../../procurement/services/order.service';
import {ModalService} from '@shared/services/modal.service';
import {Router} from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'pek-purchasing-chain-creation-list',
  templateUrl: './purchasing-chain-creation-list.component.html',
  styleUrls: ['./purchasing-chain-creation-list.component.scss']
})
export class PurchasingChainCreationListComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  isCanOrder = false;
  isCanAddOrder = false;
  isShowAll = false;

  statuses = [
    {label: 'ORDERED', value: 'ordered'},
    {label: 'NOT ORDERED', value: 'not_ordered'},
    {label: 'PARTLY ORDERED', value: 'partially_ordered'}
  ];

  searchForm: FormGroup = this.fb.group({
    nomenclature__name: [null],
    categories_ids: [null],
    request_date: [null],
    status: ['not_ordered']
  });

  isStartFirstPage = false;

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];
  isLoading = true;
  productsCount = 0;

  selectedProducts: OrderProduct[] = [];
  OrderRequestType = OrderRequestType;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  name$: Subject<void> = new Subject<void>();

  orderProducts$: Observable<OrderProduct[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.orderProductService.getGroupedPurchasedForPagination(this.query).pipe(
          tap(response => this.productsCount = response.count),
          map(response => response.results.map(product => {
            product.status = this.setProductStatus(product);
            return product;
          })),
        ),
        this.orderProductService.getGroupedPurchased(this.query).pipe(
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
    private readonly adapterService: AdapterService,
    private readonly orderService: OrderService,
    private readonly modalService: ModalService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.name$.pipe(
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

    this.onCheckOrder();
    this.onCheckAddOrder();
    this.getIsCleanUnnecessary();
    this.getIsDeleted();

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'page', value: this.currentPage},
      {name: 'is_purchased_only', value: true},
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
    else return description
  }

  onCheckOrder() {
    this.isCanOrder = true;

    this.selectedProducts.forEach(element => {
      if (element.ordered_quantity >= element.initial_quantity) {
        this.isCanOrder = false;
      }
    });

    if (this.selectedProducts.length === 0) {
      this.isCanOrder = false;
    }
  }

  onCheckAddOrder() {
    this.isCanAddOrder = this.selectedProducts.every(node => node.status !== 'A0');
  }

  getIsCleanUnnecessary() {
    if (this.selectedProducts) {
      return this.selectedProducts.every(node => node.status === 'A1');
    }
  }

  getIsDeleted() {
    if (this.selectedProducts) {
      return this.selectedProducts.every(node => node.status === 'A2');
    }
  }

  onCloseOrders() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        const partlyOrderedProducts = this.selectedProducts.filter(n => n.status === 'A1');

        if (partlyOrderedProducts.length > 0) {

          console.log(partlyOrderedProducts);
          this.selectedProducts = [];
          this.orderProductService.closeOrders(partlyOrderedProducts).subscribe(() => this.search$.next());
        }
      }
    });
  }

  onDeleteOrders() {
    const deleteItems = this.selectedProducts.map(product => {
      return `${product.id} - ${product.nomenclature.code} ${product.nomenclature.name} Q(${product.initial_quantity})`;
    });
    this.modalService.confirmWithDetails(deleteItems, 'danger').subscribe(confirm => {
      if (confirm) {
        const notOrderedProducts = this.selectedProducts.filter(n => n.status === 'A2');

        if (notOrderedProducts.length > 0) {
          this.selectedProducts = [];
          this.orderProductService.deleteSeveral(notOrderedProducts).subscribe(() => this.search$.next());
        }
      }
    });
  }

  onCreateChain() {
    this.orderService.openCreateChainModal(this.selectedProducts, 'purchase').subscribe(order => {
      if (order) {
        this.router.navigate(['/purchasing/chains/order', order.id]);
      }
    });
  }

  onAddProductsToChain() {
    this.orderService.openAddProductsToChainModal(this.selectedProducts, 'purchase').subscribe(order => {
      if (order) {
        this.search$.next();
      }
    });
  }

  onSelectCategories(ids: number[]) {
    this.searchForm.get('categories_ids').patchValue(ids?.join(',') || null);
    this.search$.next();
  }

  onShowAll(value: boolean) {
    this.isShowAll = value;
    this.search$.next()

    if (!this.isShowAll) {
      this.currentPage = 1
    }
  }
}

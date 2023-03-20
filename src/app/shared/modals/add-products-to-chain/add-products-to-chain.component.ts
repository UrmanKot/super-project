import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrderService} from '../../../procurement/services/order.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderProduct} from '../../../procurement/models/order-product';
import {OrderType} from '@shared/components/order-page/order-page.component';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {finalize, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Order} from '../../../procurement/models/order';
import {AdapterService} from '@shared/services/adapter.service';
import {QuerySearch} from '@shared/models/other';
import {Paginator} from 'primeng/paginator';
import {OrderProductService} from '../../../procurement/services/order-product.service';

@UntilDestroy()
@Component({
  selector: 'pek-add-products-to-chain',
  templateUrl: './add-products-to-chain.component.html',
  styleUrls: ['./add-products-to-chain.component.scss']
})
export class AddProductsToChainComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  isSaving = false;
  isStartFirstPage = false;

  selectedOrder: Order;
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  searchForm: FormGroup = this.fb.group({
    with_free_product: [false]
  });

  currentPage = 1;

  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];
  isLoading = true;
  productsCount = 0;

  orders$: Observable<Order[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.orderService.getForPagination(this.query)),
    tap(response => this.productsCount = response.count),
    map(response => response.results),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly orderService: OrderService,
    private readonly orderProductService: OrderProductService,
    private readonly adapterService: AdapterService,
    private dialogRef: MatDialogRef<AddProductsToChainComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { products: OrderProduct[], orderType: OrderType }
  ) {
  }

  ngOnInit(): void {
    console.log('this.data.products', this.data.products);
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

    if (this.data.orderType === 'procurement') {
      this.query = [
        {name: 'paginated', value: true},
        {name: 'page', value: this.currentPage},
        {name: 'exclude_with_active_final_status', value: true},
        {name: 'accounting_type', value: 1},
        {name: 'has_purchase_category', value: false},
      ];
    }

    if (this.data.orderType === 'outsourcing') {
      this.query = [
        {name: 'paginated', value: true},
        {name: 'page', value: this.currentPage},
        {name: 'exclude_with_active_final_status', value: true},
        {name: 'accounting_type', value: 2},
      ];
    }

    if (this.data.orderType === 'purchase') {
      this.query = [
        {name: 'paginated', value: true},
        {name: 'page', value: this.currentPage},
        {name: 'exclude_with_active_final_status', value: true},
        {name: 'accounting_type', value: 1},
        {name: 'has_purchase_category', value: true},
      ];
    }

    if (this.searchForm.get('with_free_product').value) {
      this.query.push({name: 'with_free_product', value: this.data.products[0].nomenclature.id});
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

  onAdd() {
    this.isSaving = true;

    const send = this.data.products.map(p => {
      return {
        id: p.id,
        order: this.selectedOrder.id,
      };
    });

    this.orderProductService.addToOrder(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }
}

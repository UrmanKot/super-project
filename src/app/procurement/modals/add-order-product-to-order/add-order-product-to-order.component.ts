import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {debounceTime, distinctUntilChanged, finalize, map, tap} from 'rxjs/operators';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {QuerySearch} from '@shared/models/other';
import {Nomenclature} from '@shared/models/nomenclature';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';
import {AdapterService} from '@shared/services/adapter.service';
import {Category} from '../../../product-structure/models/category';
import {ProductStructureCategory} from '../../../product-structure/models/product-structure-category';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderProductService} from '../../services/order-product.service';

@UntilDestroy()
@Component({
  selector: 'pek-add-order-product-to-order',
  templateUrl: './add-order-product-to-order.component.html',
  styleUrls: ['./add-order-product-to-order.component.scss']
})
export class AddOrderProductToOrderComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  isSaving = false;

  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    root_categories: [null],
    category: [null],
  });

  createForm: FormGroup = this.fb.group({
    quantity: [0, [Validators.required, Validators.min(1)]],
    order: [this.data.orderId],
    nomenclature: [null, Validators.required],
  });

  isStartFirstPage = false;

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];

  isLoading = true;
  productsCount = 0;

  selectedProduct: Nomenclature;

  name$: Subject<void> = new Subject<void>();
  code$: Subject<void> = new Subject<void>();
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  products$: Observable<Nomenclature[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.nomenclatureService.getForPagination(this.query)),
    tap(response => this.productsCount = response.count),
    map(response => response.results),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
    private readonly adapterService: AdapterService,
    private readonly orderProductService: OrderProductService,
    private dialogRef: MatDialogRef<AddOrderProductToOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isPurchased: boolean, orderId: number }
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

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedProduct = null;

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'paginated', value: true},
      {name: 'page', value: this.currentPage},
      {name: 'type', value: 0}
    ];

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value) {
        this.query.push({
          name: key,
          value: this.searchForm.controls[key].value
        });
      }
    }
  }

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  onAddProduct() {
    if (this.createForm.value) {
      this.isSaving = true;

      if (this.data.isPurchased) {
        this.createForm.addControl('is_purchased_only', this.fb.control(true));
      }

      this.orderProductService.create(this.createForm.value).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(product => this.dialogRef.close(product));
    }
  }

  onSelectCategory(category: Category) {
    this.searchForm.get('category').patchValue(category?.name || null);
    this.search$.next();
  }

  onSelectRootCategory(category: ProductStructureCategory) {
    this.searchForm.get('root_categories').patchValue(category?.id || null);
    this.search$.next();
  }

  clearCreatForm() {
    this.createForm.get('quantity').patchValue(0);
    this.createForm.get('quantity').patchValue(0);
  }

  onSelectProduct() {
    this.createForm.get('nomenclature').patchValue(this.selectedProduct?.id || null);
  }
}

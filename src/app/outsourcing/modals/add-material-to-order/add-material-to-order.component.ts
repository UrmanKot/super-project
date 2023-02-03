import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Paginator} from 'primeng/paginator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {debounceTime, distinctUntilChanged, finalize, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {AdapterService} from '@shared/services/adapter.service';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Category} from '../../../product-structure/models/category';
import {RequestService} from '../../../warehouse/services/request.service';

@UntilDestroy()
@Component({
  selector: 'pek-add-material-to-order',
  templateUrl: './add-material-to-order.component.html',
  styleUrls: ['./add-material-to-order.component.scss']
})
export class AddMaterialToOrderComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  isSaving = false;

  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    root_categories: [null],
    category: [null],
    type: ['0']
  });

  createForm: FormGroup = this.fb.group({
    required_quantity: [0, [Validators.required, Validators.min(1)]],
    for_order_product: [null, Validators.required],
    material_nomenclature: [null, Validators.required],
    technology: [null]
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
    private readonly requestService: RequestService,
    private dialogRef: MatDialogRef<AddMaterialToOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { productId: number }
  ) { }

  ngOnInit(): void {
    this.createForm.get('for_order_product').patchValue(this.data.productId)

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

    this.createForm.get('required_quantity').patchValue(null);
    this.createForm.get('technology').patchValue(null);

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'paginated', value: true},
      {name: 'page', value: this.currentPage},
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

  onSelectCategory(category: Category) {
    this.searchForm.get('category').patchValue(category?.name || null);
    this.search$.next();
  }

  clearCreatForm() {
    this.createForm.get('required_quantity').patchValue(0);
  }

  onSelectProduct() {
    this.createForm.get('material_nomenclature').patchValue(this.selectedProduct?.id || null);
  }

  onAddMaterial() {
    this.isSaving = true;

    this.requestService.create(this.createForm.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => {
      this.dialogRef.close(true)
    })
  }

  onSelectNomenclatureType(type: ENomenclatureType) {
    this.searchForm.get('type').patchValue(type);
    this.search$.next();
  }

  onSelectRootCategories(ids: string) {
    this.searchForm.get('root_categories').patchValue(ids ?? null)
    this.search$.next();
  }
}

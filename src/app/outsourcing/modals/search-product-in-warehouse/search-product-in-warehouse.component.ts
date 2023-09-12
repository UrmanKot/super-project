import {Component, OnInit, ViewChild} from '@angular/core';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';
import {Paginator} from 'primeng/paginator';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {ENomenclatureApproval, ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {WarehouseProduct, WarehouseProducts} from '../../../warehouse/models/warehouse-product';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {AdapterService} from '@shared/services/adapter.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Category} from '../../../product-structure/models/category';

@UntilDestroy()
@Component({
  selector: 'pek-search-product-in-warehouse',
  templateUrl: './search-product-in-warehouse.component.html',
  styleUrls: ['./search-product-in-warehouse.component.scss']
})
export class SearchProductInWarehouseComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    warehouse: [null],
    locator: [null],
    type: [null],
    category: [null],
  });

  isStartFirstPage = false;

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];

  isLoading = true;
  productsCount = 0;

  selectedProduct: WarehouseProduct;

  name$: Subject<void> = new Subject<void>();
  code$: Subject<void> = new Subject<void>();
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  products$: Observable<WarehouseProduct[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.warehouseProductService.getGroupedPagination(this.query)),
    tap(response => this.productsCount = response.count),
    map(response => response.results),
    map(products => products.map((product, index) => {
      product.uid = index;
      if (typeof product.nomenclature !== 'number') {
        // @ts-ignore
        product.uom = product.nomenclature?.category ? product.nomenclature.category.unit_of_measure.symbol : 'Pcs';
      }
      return product
    })),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  )

  protected readonly ENomenclatureApproval = ENomenclatureApproval;
  protected readonly ENomenclatureType = ENomenclatureType;

  constructor(
    private readonly warehouseProductService: WarehouseProductService,
    private readonly adapterService: AdapterService,
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<SearchProductInWarehouseComponent>,
  ) { }

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
      {name: 'at_area', value: false},
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

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }


  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  onSelectCategory(category: Category) {
    this.searchForm.get('category').patchValue(category?.id || null);
    this.search$.next();
  }

  onPickProduct() {
    this.dialogRef.close(this.selectedProduct)
  }

  onSelectWarehouse(id: number) {
    this.searchForm.get('warehouse').patchValue(id);
    this.searchForm.get('locator').patchValue(null);
    this.search$.next()
  }

  onSelectLocator(id: number) {
    this.searchForm.get('locator').patchValue(id);
    this.search$.next();
  }

  onSelectNomenclatureType(type: ENomenclatureType) {
    this.searchForm.get('type').patchValue(type);
    this.search$.next()
  }
}

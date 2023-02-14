import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../../product-structure/models/category';
import {TreeNode} from 'primeng/api';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {Paginator} from 'primeng/paginator';
import {WarehouseProduct} from '../../../warehouse/models/warehouse-product';
import {fromEvent, Subject, takeUntil} from 'rxjs';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';
import {environment} from '@env/environment';
import {debounceTime, map, tap} from 'rxjs/operators';
import {InstrumentAndToolsModalsService} from '../../services/instrument-and-tools-modals.service';

@Component({
  selector: 'pek-instruments-and-tools-list',
  templateUrl: './instruments-and-tools-list.component.html',
  styleUrls: ['./instruments-and-tools-list.component.scss']
})
export class InstrumentsAndToolsListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;
  link = environment.link_url + 'dash/';

  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    description: [null],
    area: [null],
    category: [null],
    root_categories: [null],
    order_by_code: [null],
    order_by_name: [null],
    order_by_quantity: [null],
    order_by_category: [null],
    order_by_area: [null],
    order_by_locator: [null],
    exclude_zero: [null],
    area_locator: {value: null, disabled: true},
    type: [null],
    acceptedByInvoices: [null],
    page: [1],
  });

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true},
    {name: 'at_area', value: false}
  ];
  tableScrollHeight = '29.75rem';
  isHideFilters = false;
  isShowAll = false;
  isLoading = false;
  isStartOnePage = false;
  selectedProduct: WarehouseProduct[] = [];
  queryKey = 'name:null/code:null/description:null/type:null/acceptedByInvoices:null/area:null/area_locator:null/category:null';
  products: WarehouseProduct[] = [];

  countProducts: number = 0;
  private destroy$ = new Subject();
  constructor(
    private readonly fb: FormBuilder,
    private readonly warehouseProductService: WarehouseProductService,
    private instrumentAndToolsService: InstrumentAndToolsModalsService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    fromEvent(this.searchBoxName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedProduct = null),
        map(() => this.searchBoxName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });

    fromEvent(this.searchBoxCode.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedProduct = null),
        map(() => this.searchBoxCode.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });
  }

  onSelectCategory(category: Category) {
    if (category) {
      this.searchForm.get('category').patchValue(category.id);
    } else {
      this.searchForm.get('category').patchValue(null);
    }

    this.searchProducts();
  }

  searchProducts() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.selectedProduct = [];

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/description:${this.searchForm.get('description').value}/type:${this.searchForm.get('type').value}/acceptedByInvoices:${this.searchForm.get('acceptedByInvoices').value}/area:${this.searchForm.get('area').value}/area_locator:${this.searchForm.get('area_locator').value}/category:${this.searchForm.get('category').value}`;

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [];

    if (!this.isShowAll) {
      this.query = [
        {name: 'paginated', value: 'true'},
        {name: 'page', value: this.searchForm.get('page').value},
      ];
    }

    this.query.push({name: 'at_area', value: true});

    if (this.searchForm.get('name').value) this.query.push({
      name: 'name',
      value: this.searchForm.get('name').value.replace(/\+/g, '%2b')
    });

    if (this.searchForm.get('code').value) this.query.push({name: 'code', value: this.searchForm.get('code').value});

    if (this.searchForm.get('description').value) this.query.push({
      name: 'description',
      value: this.searchForm.get('description').value
    });

    if (this.searchForm.get('type').value) this.query.push({name: 'type', value: this.searchForm.get('type').value});

    if (this.searchForm.get('area').value) this.query.push({
      name: 'area',
      value: this.searchForm.get('area').value
    });

    if (this.searchForm.get('area_locator').value) this.query.push({
      name: 'area_locator',
      value: this.searchForm.get('area_locator').value
    });

    if (this.searchForm.get('category').value) this.query.push({
      name: 'category',
      value: this.searchForm.get('category').value
    });

    if (this.searchForm.get('root_categories').value) this.query.push({
      name: 'root_categories',
      value: this.searchForm.get('root_categories').value
    });

    if (this.searchForm.get('acceptedByInvoices').value !== null) this.query.push({
      name: 'accepted_by_invoices',
      value: this.searchForm.get('acceptedByInvoices').value
    });

    if (this.searchForm.get('exclude_zero').value !== null) this.query.push({
      name: 'exclude_zero',
      value: this.searchForm.get('exclude_zero').value
    });

    const ordering = this.prepareSortingField();
    if (ordering) {
      this.query.push({
        name: 'ordering',
        value: ordering
      });
    }
    if (!this.isShowAll) {
      this.getProductsForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getProducts();
    }
  }

  getProductsForPagination() {
    this.warehouseProductService.getGroupedPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {
      response.results.forEach((product: any, idx) => {
        if (!product.nomenclature) {
          product.nomenclature = {
            id: product.nomenclature_id,
            code: product.code,
            name: product.name,
            type: product.type,
            category: product.category,
            description: product.description,
          };
        }

        product.checkedForGeneration = false;
        product.uid = idx;
      });

      this.products = response.results;
      this.countProducts = response.count;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;

      this.isLoading = false;
    });
  }

  prepareSortingField(): string {
    let sorting = '';
    if (this.searchForm.get('order_by_code').value !== null) {
      if (this.searchForm.get('order_by_code').value) {
        sorting += '-nomenclature__code,';
      } else {
        sorting += 'nomenclature__code,';
      }
    }
    if (this.searchForm.get('order_by_name').value !== null) {
      if (this.searchForm.get('order_by_name').value) {
        sorting += '-nomenclature__name,';
      } else {
        sorting += 'nomenclature__name,';
      }
    }
    if (this.searchForm.get('order_by_category').value !== null) {
      if (this.searchForm.get('order_by_category').value) {
        sorting += '-nomenclature__category__name,';
      } else {
        sorting += 'nomenclature__category__name,';
      }
    }
    if (this.searchForm.get('order_by_area').value !== null) {
      if (this.searchForm.get('order_by_area').value) {
        sorting += '-area_locator__area__name,';
      } else {
        sorting += 'area_locator__area__name,';
      }
    }
    if (this.searchForm.get('order_by_locator').value !== null) {
      if (this.searchForm.get('order_by_locator').value) {
        sorting += '-area_locator__name,';
      } else {
        sorting += 'area_locator__name,';
      }
    }
    if (this.searchForm.get('order_by_quantity').value !== null) {
      if (this.searchForm.get('order_by_quantity').value) {
        sorting += '-total_area_locator_quantity,';
      } else {
        sorting += 'total_area_locator_quantity,';
      }
    }

    return sorting;
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;

    this.setTableScrollHeight();
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.875rem';
      return;
    }

    if (this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '18.25rem';
      return;
    }

    if (!this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '27.5rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '29.75rem';
      return;
    }
  }

  onSelectProductStructureCategory(ids: number[]) {
    if (ids) {
      this.searchForm.get('root_categories').patchValue(ids.join(','));
    } else {
      this.searchForm.get('root_categories').patchValue('');
    }

    this.searchProducts();
  }

  selectWarehouse(areaId: number) {
    let value = null;
    if (areaId) value = areaId;
    this.searchForm.get('area').patchValue(value);
    this.searchProducts();
  }

  onSelectLocator(id: number) {
    this.searchForm.get('area_locator').patchValue(id);
    this.searchProducts();
  }

  getProducts() {
    this.warehouseProductService.getGrouped(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {
      response.forEach((product: any, idx) => {
        if (!product.nomenclature) {
          product.nomenclature = {
            id: product.nomenclature_id,
            code: product.code,
            name: product.name,
            type: product.type,
            category: product.category,
            description: product.description,
          };
        }

        product.checkedForGeneration = false;
        product.uid = idx;
      });

      this.products = response;
      this.countProducts = response.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  onShowAll() {
    this.isShowAll = true;
    this.setTableScrollHeight();
    this.searchProducts();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.setTableScrollHeight();
    this.searchProducts();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchProducts();
    }
  }

  returnToQc() {
    this.instrumentAndToolsService.productWriteOfReturnModal(this.selectedProduct, 'warehouseReturn').subscribe(() => {
      this.selectedProduct = null;
      this.searchProducts();
    });
  }

  writeOff() {
    this.instrumentAndToolsService.productWriteOfReturnModal(this.selectedProduct, 'writeOff').subscribe(() => {
      this.selectedProduct = null;
      this.searchProducts();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onMoveProduct() {
    this.instrumentAndToolsService.productMoveToAreaLocatorModal(this.selectedProduct[0]).subscribe(response => {
      if (response) {
        this.searchProducts();
      }
    });
  }

  sorting(value: boolean, field: string) {
    this.resetAllSorting();
    if (value === null) {
      this.searchForm.get(field).patchValue(false);
    } else if (value === false) {
      this.searchForm.get(field).patchValue(true);
    } else if (value === true) {
      this.searchForm.get(field).patchValue(null);
    }
    this.searchProducts();
  }

  resetAllSorting() {
    this.searchForm.get('order_by_code').setValue(null);
    this.searchForm.get('order_by_name').setValue(null);
    this.searchForm.get('order_by_quantity').setValue(null);
    this.searchForm.get('order_by_category').setValue(null);
    this.searchForm.get('order_by_area').setValue(null);
    this.searchForm.get('order_by_locator').setValue(null);
  }
}

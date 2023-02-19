import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WarehouseProduct} from '../../models/warehouse-product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../../../product-structure/models/category';
import {fromEvent, Subject, takeUntil} from 'rxjs';
import {CategoriesService} from '../../../product-structure/services/categories.service';
import {TreeNode} from 'primeng/api';
import {WarehouseProductService} from '../../services/warehouse-product.service';
import {QuerySearch} from '@shared/models/other';
import {Paginator} from 'primeng/paginator';
import {debounceTime, map, tap} from 'rxjs/operators';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {environment} from '@env/environment';
import {QrCodeService} from '../../../qr-code/qr-code.service';
import {Technology} from '../../../product-structure/models/technology';

@Component({
  selector: 'pek-warehouse-items',
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.scss', './warehouse-items.mobile.component.scss']
})
export class WarehouseItemsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;
  @ViewChild('searchBoxDescription') searchBoxDescription;

  tableScrollHeight = '29.75rem';

  isHideFilters = false;
  isShowAll = false;
  isLoading = false;
  isStartOnePage = false;

  selectedProducts: WarehouseProduct[] = [];
  products: WarehouseProduct[] = [];
  countProducts: number = 0;

  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    description: [null],
    warehouse: [null],
    category: [null],
    root_categories: [null],
    locator: {value: null, disabled: true},
    type: [null],
    acceptedByInvoices: [null],
    order_by_code: [null],
    order_by_name: [null],
    order_by_category: [null],
    order_by_warehouse: [null],
    order_by_locator: [null],
    order_by_quantity: [null],
    exclude_zero: [null],
    exclude_empty: [null],
    technologies: [null],
    page: [1],
  });

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true},
    {name: 'at_area', value: false}
  ];

  queryKey = 'name:null/code:null/description:null/type:null/acceptedByInvoices:null/warehouse:null/locator:null/category:null';

  private destroy$ = new Subject();

  link = environment.link_url + 'dash/';
  isGenerating = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly productCategoriesService: CategoriesService,
    private readonly warehouseProductService: WarehouseProductService,
    private readonly qrCodeService: QrCodeService,
  ) {
  }

  ngAfterViewInit() {
    fromEvent(this.searchBoxName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedProducts = []),
        map(() => this.searchBoxName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });

    fromEvent(this.searchBoxCode.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedProducts = []),
        map(() => this.searchBoxCode.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });

    fromEvent(this.searchBoxDescription.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedProducts = []),
        map(() => this.searchBoxDescription.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });
  }

  ngOnInit(): void {
    // this.getProductsForPagination();
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

  searchProducts() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.selectedProducts = [];

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/description:${this.searchForm.get('description').value}/type:${this.searchForm.get('type').value}/acceptedByInvoices:${this.searchForm.get('acceptedByInvoices').value}/warehouse:${this.searchForm.get('warehouse').value}/locator:${this.searchForm.get('locator').value}/category:${this.searchForm.get('category').value}`;

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

    this.query.push({name: 'at_area', value: false});

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

    if (this.searchForm.get('warehouse').value) this.query.push({
      name: 'warehouse',
      value: this.searchForm.get('warehouse').value
    });

    if (this.searchForm.get('locator').value) this.query.push({
      name: 'locator',
      value: this.searchForm.get('locator').value
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

    if (this.searchForm.get('exclude_empty').value !== null) this.query.push({
      name: 'exclude_empty',
      value: this.searchForm.get('exclude_empty').value
    });

    if (this.searchForm.get('technologies').value !== null) this.query.push({
      name: 'current_technologies',
      value: this.searchForm.get('technologies').value
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

  onAddItem() {
    this.warehouseProductService.openCreateEditWarehouseProductModal('create').subscribe(response => {
      if (response) {
        this.searchProducts();
      }
    });
  }

  selectWarehouse(warehouseId: number) {
    let value = null;
    if (warehouseId) value = warehouseId;
    this.searchForm.get('warehouse').patchValue(value);
    this.searchProducts();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchProducts();
    }
  }

  onEditItem() {
    this.warehouseProductService.openCreateEditWarehouseProductModal('edit', this.selectedProducts[0].nomenclature.id).subscribe(response => {
      if (response) {
        this.searchProducts();
      }
    });
  }

  onMoveProduct() {
    this.warehouseProductService.openMoveWarehouseProductModal(this.selectedProducts[0]).subscribe(response => {
      if (response) {
        this.searchProducts();
      }
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

  onSelectLocator(id: number) {
    this.searchForm.get('locator').patchValue(id);
    this.searchProducts();
  }

  onSelectNomenclatureType(type: ENomenclatureType) {
    this.searchForm.get('type').patchValue(type);
    this.searchProducts();
  }

  onSelectAcceptedType(type: boolean) {
    this.searchForm.get('acceptedByInvoices').patchValue(type);
    this.searchProducts();
  }


  onSelectProductStructureCategory(ids: number[]) {
    if (ids) {
      this.searchForm.get('root_categories').patchValue(ids.join(','));
    } else {
      this.searchForm.get('root_categories').patchValue('');
    }

    this.searchProducts();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;

    this.setTableScrollHeight();
  }

  onSelectCategory(category: Category) {
    if (category) {
      this.searchForm.get('category').patchValue(category.id);
    } else {
      this.searchForm.get('category').patchValue(null);
    }

    this.searchProducts();
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

  showSerialsInfo() {
    if (this.selectedProducts) {
      this.warehouseProductService.openNomenclatureInfoModal(this.selectedProducts[0].extra_info, this.selectedProducts[0].nomenclature as Nomenclature).subscribe();
    }
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
    if (this.searchForm.get('order_by_warehouse').value !== null) {
      if (this.searchForm.get('order_by_warehouse').value) {
        sorting += '-locator__warehouse__name,';
      } else {
        sorting += 'locator__warehouse__name,';
      }
    }
    if (this.searchForm.get('order_by_locator').value !== null) {
      if (this.searchForm.get('order_by_locator').value) {
        sorting += '-locator__name,';
      } else {
        sorting += 'locator__name,';
      }
    }
    if (this.searchForm.get('order_by_quantity').value !== null) {
      if (this.searchForm.get('order_by_quantity').value) {
        sorting += '-total_locator_quantity,';
      } else {
        sorting += 'total_locator_quantity,';
      }
    }

    return sorting;
  }

  showIsReserved(items: any[]) {
    if (items) return items.some(i => i.reserved_by_opened_production_lists_quantity > 0)
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
    this.searchForm.get('order_by_category').setValue(null);
    this.searchForm.get('order_by_warehouse').setValue(null);
    this.searchForm.get('order_by_locator').setValue(null);
    this.searchForm.get('order_by_quantity').setValue(null);
  }

  onGenerateQrCodes() {
    // this.isGenerating = true;

    const send = {
      by_nomenclatures_list: [],
    };

    this.selectedProducts.forEach(p => {
      console.log('product', p);
      if (p.nomenclature.bulk_or_serial !== '1') {
        send.by_nomenclatures_list.push({
          nomenclature_id: p.nomenclature.id,
          serial_number_ids: [],
          order_product_ids: [],
          invoice_product_ids: [],
        });
      } else {
        send.by_nomenclatures_list.push({
          nomenclature_id: p.nomenclature.id,
          serial_number_ids: p.extra_info && p.extra_info.length > 0 ? p.extra_info.map(product => +product.serial_number_id) : [],
          order_product_ids: [],
          invoice_product_ids: [],
        });
      }
    });

    this.qrCodeService.generateQrCodes(send).subscribe(() => this.isGenerating = false);
  }

  isReservedDisable(): boolean {
    return Boolean(this.selectedProducts[0]?.extra_info.reduce((sum, item) => sum += item.quantity, 0) === this.selectedProducts[0]?.extra_info.reduce((sum, item) => sum += item.reserved_by_opened_production_lists_quantity, 0));
  }

  onSelectedTechnologies(technologies: Technology[]) {
    if (technologies) {
      this.searchForm.get('technologies').patchValue(technologies.map(technology => technology.id));
    } else {
      this.searchForm.get('technologies').patchValue('');
    }
    this.searchProducts();
  }
}

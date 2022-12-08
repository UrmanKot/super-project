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

@Component({
  selector: 'pek-warehouse-items',
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.scss']
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

  selectedProduct: WarehouseProduct;
  products: WarehouseProduct[] = [];
  countProducts: number = 0;

  categoriesTree: TreeNode<Category>[] = [];
  isLoadingCategories = true;

  categories: Category[];

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
    page: [1],
  });

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true},
    {name: 'at_area', value: false}
  ];

  queryKey = 'name:null/code:null/description:null/type:null/acceptedByInvoices:null/warehouse:null/locator:null/category:null';

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly productCategoriesService: CategoriesService,
    private readonly warehouseProductService: WarehouseProductService
  ) {
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

    fromEvent(this.searchBoxDescription.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedProduct = null),
        map(() => this.searchBoxDescription.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchProducts();
    });
  }

  ngOnInit(): void {
    this.getCategories();
    // this.getProductsForPagination();
  }

  getCategories() {
    this.productCategoriesService.get([{name: 'is_for_root', value: false}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.categories = categories;
      this.createTree();
      this.isLoadingCategories = false;
    });
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
    this.selectedProduct = null;

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

  createTree() {
    const getChildren = (nodes: TreeNode<Category>[]) => {
      nodes.forEach(node => {
        const children = this.categories.filter(c => c.parent === node.data.id);

        if (children.length > 0) {
          node.children = children.map(category => {
            return {
              label: category.name,
              data: category,
              children: []
            };
          });

          getChildren(node.children);
        }
      });
    };

    const tree: TreeNode<Category>[] = this.categories.filter(c => !c.parent).map(category => {
      return {
        label: category.name,
        data: <Category>category,
        children: [],
      };
    });

    getChildren(tree);
    this.categoriesTree = [...tree];
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
    this.warehouseProductService.openCreateEditWarehouseProductModal('edit', this.selectedProduct.nomenclature.id).subscribe(response => {
      if (response) {
        this.searchProducts();
      }
    });
  }

  onMoveProduct() {
    this.warehouseProductService.openMoveWarehouseProductModal(this.selectedProduct).subscribe(response => {
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

  onSelectCategory(node: TreeNode<Category>) {
    if (node) {
      this.searchForm.get('category').patchValue(node.data.id);
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
    if (this.selectedProduct) {
      this.warehouseProductService.openNomenclatureInfoModal(this.selectedProduct.extra_info, this.selectedProduct.nomenclature as Nomenclature).subscribe();
    }
  }
}

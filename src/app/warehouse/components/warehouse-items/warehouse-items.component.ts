import {Component, OnDestroy, OnInit} from '@angular/core';
import {WarehouseProduct} from '../../models/warehouse-product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Category} from '../../../product-structure/models/category';
import {Subject, takeUntil} from 'rxjs';
import {CategoriesService} from '../../../product-structure/services/categories.service';
import {TreeNode} from 'primeng/api';
import {WarehouseProductService} from '../../services/warehouse-product.service';
import {QuerySearch} from '@shared/models/other';
import {Nomenclature} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-warehouse-items',
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.scss']
})
export class WarehouseItemsComponent implements OnInit, OnDestroy {
  isLoading = true;
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
    accepted_by_invoices: [null],
    page: [1],
  });

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'at_area', value: false}
  ];

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly productCategoriesService: CategoriesService,
    private readonly warehouseProductService: WarehouseProductService
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProductsForPagination();
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
    ).subscribe( response => {
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
      this.isLoading = false;
    });
  }

  searchProducts() {
    this.isLoading = true;
    this.selectedProduct = null;

    this.destroy$.next(true);

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'at_area', value: false}
    ];

    this.getProductsForPagination();
  }

  onAddItem() {
    this.warehouseProductService.openCreateEditWarehouseProductModal('create').subscribe(response => {
      if (response) {
        this.searchProducts();
      }
    })
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

  getProductsAll() {

  }

  selectWarehouse(warehouseId: number) {
    let value = null;
    if (warehouseId) value = warehouseId;
    this.searchForm.get('warehouse').patchValue(value);
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchProducts();
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  onEditItem() {
    this.warehouseProductService.openCreateEditWarehouseProductModal('edit', this.selectedProduct.nomenclature.id).subscribe(response => {
      if (response) {
        this.searchProducts();
      }
    })
  }
}

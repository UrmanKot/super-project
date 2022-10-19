import {Component, OnInit} from '@angular/core';
import {WarehouseProduct} from '../../models/warehouse-product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductCategory} from '../../../product-structure/models/product-category';
import {Subject, takeUntil} from 'rxjs';
import {ProductCategoriesService} from '../../../product-structure/services/product-categories.service';
import {TreeNode} from 'primeng/api';
import {WarehouseProductService} from '../../services/warehouse-product.service';
import {QuerySearch} from '@shared/models/other';

@Component({
  selector: 'pek-warehouse-items',
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.scss']
})
export class WarehouseItemsComponent implements OnInit {
  isLoading = false;
  selectedProduct: WarehouseProduct;
  products: WarehouseProduct[] = [];

  categoriesTree: TreeNode<ProductCategory>[] = [];
  isLoadingCategories = true;

  categories: ProductCategory[];

  acceptedTypes: {name: string, value: boolean}[] = [
    {name: 'Invoices', value: true},
    {name: 'Orders', value: false}
  ];

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
    {name: 'at_area', value: false}
  ];

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly productCategoriesService: ProductCategoriesService,
    private readonly warehouseProductService: WarehouseProductService
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
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

  getProducts() {
    this.warehouseProductService.getGrouped(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe( products => {
      products.forEach((product: any) => {
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
      });
      this.products = products;
      this.products.forEach((product, idx) => {
        product.checkedForGeneration = false;
        product.uid = idx;
      });
      this.isLoading = false;
    });
  }

  onAddItem() {

  }

  createTree() {
    const getChildren = (nodes: TreeNode<ProductCategory>[]) => {
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

    const tree: TreeNode<ProductCategory>[] = this.categories.filter(c => !c.parent).map(category => {
      return {
        label: category.name,
        data: <ProductCategory>category,
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

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

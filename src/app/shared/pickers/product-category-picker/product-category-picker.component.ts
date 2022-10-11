import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ProductCategory} from '../../../product-structure/models/product-category';
import {ProductCategoriesService} from '../../../product-structure/services/product-categories.service';
import {TreeNode} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-product-category-picker',
  templateUrl: './product-category-picker.component.html',
  styleUrls: ['./product-category-picker.component.scss'],
})
export class ProductCategoryPickerComponent implements OnInit, OnDestroy {
  @Output() choiceCategory: EventEmitter<ProductCategory> = new EventEmitter<ProductCategory>();
  @Input() currentCategoryId: number;

  isLoading = true;
  categories: ProductCategory[] = [];
  categoriesTree: TreeNode<ProductCategory>[] = [];

  selectedCategory: TreeNode<ProductCategory> = null;

  private destroy$ = new Subject();

  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {
  }

  ngOnInit(): void {
    this.productCategoriesService.get([{name: 'is_for_root', value: false}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.categories = categories;
      this.createTree();
      this.findCategory();
      this.isLoading = false;
    });
  }

  findCategory() {
    const find = (nodes: TreeNode<ProductCategory>[]) => {
      nodes.forEach(node => {
        if (node.data.id === this.currentCategoryId) {
          this.selectedCategory = node;
          return
        } else if (node.children.length > 0) {
          find(node.children);
        }
      })
    }

    find(this.categoriesTree)
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

  onChoiceCategory() {
    this.choiceCategory.emit(this.selectedCategory?.data ? this.selectedCategory.data : null);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

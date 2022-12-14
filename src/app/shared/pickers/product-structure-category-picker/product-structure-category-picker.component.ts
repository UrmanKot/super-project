import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {ProductStructureCategoryService} from '../../../product-structure/services/product-structure-category.service';
import {TreeNode} from 'primeng/api';
import {ProductStructureCategory} from '../../../product-structure/models/product-structure-category';
import {Category} from '../../../product-structure/models/category';

@Component({
  selector: 'pek-product-structure-category-picker',
  templateUrl: './product-structure-category-picker.component.html',
  styleUrls: ['./product-structure-category-picker.component.scss']
})
export class ProductStructureCategoryPickerComponent implements OnInit, OnDestroy {
  @Output() choiceCategory: EventEmitter<ProductStructureCategory> = new EventEmitter<ProductStructureCategory>();
  @Output() choiceCategoryFolAllIds: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() isAllIds = false;
  @Input() currentCategoryId: number;
  @Input() ignoredCategoryId: number;
  @Input() isDisabled = false;

  isLoading = true;
  categories: ProductStructureCategory[] = [];
  categoriesTree: TreeNode<ProductStructureCategory>[] = [];

  selectedCategory: TreeNode<ProductStructureCategory> = null;

  private destroy$ = new Subject();

  constructor(
    private readonly productStructureCategoryService: ProductStructureCategoryService
  ) {
  }

  ngOnInit(): void {
    this.productStructureCategoryService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.categories = categories;

      if (this.ignoredCategoryId) {
        this.categories = this.categories.filter(c => c.id !== this.ignoredCategoryId);
      }

      this.createTree();
      this.findCategory();
      this.isLoading = false;
    });
  }

  findCategory() {
    const find = (nodes: TreeNode<ProductStructureCategory>[]) => {
      nodes.forEach(node => {
        if (node.data.id === this.currentCategoryId) {
          this.selectedCategory = node;
          return;
        } else if (node.children.length > 0) {
          find(node.children);
        }
      });
    };

    find(this.categoriesTree);
  }

  createTree() {
    const getChildren = (nodes: TreeNode<ProductStructureCategory>[]) => {
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

    const tree: TreeNode<ProductStructureCategory>[] = this.categories.filter(c => !c.parent).map(category => {
      return {
        label: category.name,
        data: <ProductStructureCategory>category,
        children: [],
      };
    });

    getChildren(tree);

    this.categoriesTree = [...tree];
  }

  onChoiceCategory() {
    if (!this.isAllIds) {
      this.choiceCategory.emit(this.selectedCategory?.data ? this.selectedCategory.data : null);
    } else {
      this.choiceProductForAllIds();
    }
  }

  choiceProductForAllIds() {
    if (!this.selectedCategory) {
      this.choiceCategoryFolAllIds.emit(null);
      return;
    }

    const ids = [];

    ids.push(this.selectedCategory.data.id);

    const find = (nodes: TreeNode<Category>[]) => {
      nodes.forEach(node => {
        ids.push(node.data.id);

        if (node.children.length > 0) {
          find(node.children);
        }
      });
    };

    find(this.selectedCategory.children);
    this.choiceCategoryFolAllIds.emit(ids);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

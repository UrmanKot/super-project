import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Category} from '../../../product-structure/models/category';
import {CategoriesService} from '../../../product-structure/services/categories.service';
import {TreeNode} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-product-category-picker',
  templateUrl: './product-category-picker.component.html',
  styleUrls: ['./product-category-picker.component.scss'],
})
export class ProductCategoryPickerComponent implements OnInit, OnDestroy, OnChanges {
  @Output() choiceCategory: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() choiceCategoryFolAllIds: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() isAllIds = false;
  @Input() ignoredCategoryId: number;
  @Input() currentCategoryId: number;

  isLoading = true;
  categories: Category[] = [];
  categoriesTree: TreeNode<Category>[] = [];

  selectedCategory: TreeNode<Category> = null;

  private destroy$ = new Subject();

  constructor(
    private readonly productCategoriesService: CategoriesService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.findCategory();
  }

  ngOnInit(): void {
    this.productCategoriesService.get().pipe(
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
    if (this.currentCategoryId) {
      const find = (nodes: TreeNode<Category>[]) => {
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
    } else {
      this.selectedCategory = null;
    }
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

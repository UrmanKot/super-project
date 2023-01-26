import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../product-structure/models/category';
import {TreeNode} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';
import {CategoriesService} from '../../../product-structure/services/categories.service';

@Component({
  selector: 'pek-multi-product-categories-picker',
  templateUrl: './multi-product-categories-picker.component.html',
  styleUrls: ['./multi-product-categories-picker.component.scss']
})
export class MultiProductCategoriesPickerComponent implements OnInit {
  @Output() choiceCategories: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() choiceCategoryFolAllIds: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() ignoredCategoryId: number;
  @Input() currentCategoryId: number;

  isLoading = true;
  categories: Category[] = [];
  categoriesTree: TreeNode<Category>[] = [];

  selectedCategories: TreeNode<Category>[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly productCategoriesService: CategoriesService,
  ) {
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
      this.isLoading = false;
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

  onChoiceCategories() {
    if (!this.selectedCategories) {
      this.selectedCategories = [];
    }

    this.choiceCategories.emit(this.selectedCategories.map(n => n?.data?.id));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

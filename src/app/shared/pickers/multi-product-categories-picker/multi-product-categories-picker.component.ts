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
  @Input() currentCategoryIds: number[] = [];
  @Input() isDisabled = false;

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

      this.fillSelected(this.currentCategoryIds)

      this.isLoading = false;
    });
  }

  fillSelected(ids: number[]) {
    if (!ids?.length) {
      this.selectedCategories = [];
      return
    }

    const fill = (nodes: TreeNode<any>[], id) => {
      const findCategory = nodes.find(n => n.data.id === id);

      if (findCategory) {
        this.selectedCategories.push(findCategory);
      } else {
        nodes.forEach(n => {
          if (n.children.length) {
            fill(n.children, id)
          }
        })
      }
    }

    if (ids?.length) {
      this.selectedCategories = [];

      ids.forEach(id => {
        fill(this.categoriesTree, id)
      })
    }
  }

  choiceProductForAllIds() {
    if (!this.selectedCategories?.length) {
      this.choiceCategoryFolAllIds.emit(null);
      return;
    }

    const find = (nodes: TreeNode<Category>[]) => {
      nodes.forEach(node => {
        ids.push(node.data.id);

        if (node.children.length > 0) {
          find(node.children);
        }
      });
    };


    const ids = [];

    this.selectedCategories.forEach(n => {
      ids.push(n.data.id);

      if (n.children.length) {
        find(n.children)
      }
    })
    this.choiceCategoryFolAllIds.emit(ids);
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

    this.choiceProductForAllIds();
    this.choiceCategories.emit(this.selectedCategories.map(n => n?.data?.id));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

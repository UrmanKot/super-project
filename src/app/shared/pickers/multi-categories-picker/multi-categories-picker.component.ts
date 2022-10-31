import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../product-structure/models/category';
import {TreeNode} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';
import {CategoriesService} from '../../../product-structure/services/categories.service';

@Component({
  selector: 'pek-multi-categories-picker',
  templateUrl: './multi-categories-picker.component.html',
  styleUrls: ['./multi-categories-picker.component.scss']
})
export class MultiCategoriesPickerComponent implements OnInit {
  @Output() choiceCategories: EventEmitter<string> = new EventEmitter<string>();

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
    if (!this.selectedCategories || this.selectedCategories.length === 0) {
      this.choiceCategories.next(null)
    } else {
      this.choiceCategories.next(this.selectedCategories.map(c => c.data.id).join(','))
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

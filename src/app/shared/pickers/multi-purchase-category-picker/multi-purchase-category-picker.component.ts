import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../product-structure/models/category';
import {TreeNode} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';
import {CategoriesService} from '../../../product-structure/services/categories.service';
import {PurchaseCategory} from '../../../purchasing/models/purchase-category';
import {PurchasingCategoryService} from '../../../purchasing/services/purchasing-category.service';

@Component({
  selector: 'pek-multi-purchase-category-picker',
  templateUrl: './multi-purchase-category-picker.component.html',
  styleUrls: ['./multi-purchase-category-picker.component.scss']
})
export class MultiPurchaseCategoryPickerComponent implements OnInit {
  @Output() choiceCategories: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() choiceCategoryFolAllIds: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() ignoredCategoryId: number;
  @Input() currentCategoryId: number;

  isLoading = true;
  categories: PurchaseCategory[] = [];
  categoriesTree: TreeNode<PurchaseCategory>[] = [];

  selectedCategories: TreeNode<PurchaseCategory>[] = [];

  constructor(
    private readonly purchaseCategoryService: PurchasingCategoryService,
  ) {
  }

  ngOnInit(): void {
    this.purchaseCategoryService.get().subscribe(categories => {
      this.categories = categories;

      if (this.ignoredCategoryId) {
        this.categories = this.categories.filter(c => c.id !== this.ignoredCategoryId);
      }

      this.createTree();
      this.isLoading = false;
    });
  }

  createTree() {
    const getChildren = (nodes: TreeNode<PurchaseCategory>[]) => {
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

    const tree: TreeNode<PurchaseCategory>[] = this.categories.filter(c => !c.parent).map(category => {
      return {
        label: category.name,
        data: <PurchaseCategory>category,
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

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductStructureCategory} from '../../../product-structure/models/product-structure-category';
import {TreeNode} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';
import {ProductStructureCategoryService} from '../../../product-structure/services/product-structure-category.service';
import {Category} from '../../../product-structure/models/category';

@Component({
  selector: 'pek-multi-product-structure-categories-picker',
  templateUrl: './multi-product-structure-categories-picker.component.html',
  styleUrls: ['./multi-product-structure-categories-picker.component.scss']
})
export class MultiProductStructureCategoriesPickerComponent implements OnInit {
  @Output() choiceCategories: EventEmitter<string> = new EventEmitter<string>();

  isLoading = true;
  categories: ProductStructureCategory[] = [];
  categoriesTree: TreeNode<ProductStructureCategory>[] = [];

  selectedCategories: TreeNode<ProductStructureCategory>[] = [];

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

      this.createTree();
      this.isLoading = false;
    });
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

  onChoiceCategories() {
    if (!this.selectedCategories || this.selectedCategories.length === 0) {
      this.choiceCategories.next(null)
    } else {
      this.choiceCategories.next(this.selectedCategories.map(c => c.data.id).join(','))
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

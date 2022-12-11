import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {Category} from '../../../product-structure/models/category';
import {Subject, takeUntil} from 'rxjs';
import {CategoriesService} from '../../../product-structure/services/categories.service';

@Component({
  selector: 'pek-categories-tree-picker',
  templateUrl: './categories-tree-picker.component.html',
  styleUrls: ['./categories-tree-picker.component.scss']
})
export class CategoriesTreePickerComponent implements OnInit, OnDestroy {
  categoriesTree: TreeNode<Category>[] = [];
  isLoadingCategories = true;
  @Output() categorySelected: EventEmitter<TreeNode<Category>> = new EventEmitter<TreeNode<Category>>();
  categories: Category[];
  @Input() isModal = false;

  private destroy$ = new Subject();

  constructor(
    private readonly productCategoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
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

  onSelectCategory(node: TreeNode<Category>) {
    this.categorySelected.emit(node);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

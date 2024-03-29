import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {Category} from '../../../product-structure/models/category';
import {Subject, takeUntil} from 'rxjs';
import {CategoriesService} from '../../../product-structure/services/categories.service';

@Component({
  selector: 'pek-categories-tree-picker',
  templateUrl: './categories-tree-picker.component.html',
  styleUrls: ['./categories-tree-picker.component.scss']
})
export class CategoriesTreePickerComponent implements OnInit, OnDestroy, OnChanges {
  categoriesTree: TreeNode<Category>[] = [];
  isLoadingCategories = true;
  @Output() categorySelected: EventEmitter<Category> = new EventEmitter<Category>();
  categories: Category[];
  @Input() isModal = false;
  @Input() currentCategoryId: number;

  private destroy$ = new Subject();
  selectedCategory: TreeNode<Category>;

  constructor(
    private readonly productCategoriesService: CategoriesService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.findCategory()
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productCategoriesService.get([{name: 'is_for_root', value: false}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.categories = categories;
      this.createTree();
      this.findCategory();
      this.isLoadingCategories = false;
    });
  }

  findCategory() {
    if (this.currentCategoryId) {

      const find = (nodes: TreeNode<Category>[]) => {
        nodes.forEach(node => {
          if (node.data.id === this.currentCategoryId) {
            this.selectedCategory = node;
            return;
          } else {
            find(node.children);
          }
        });
      };
      find(this.categoriesTree);
    } else {
      this.selectedCategory = null
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

  onSelectCategory(node: TreeNode<Category>) {
    if (node) {
      this.categorySelected.emit(node.data);
    } else {
      this.categorySelected.emit(null);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductStructureCategoryService} from '../../services/product-structure-category.service';
import {ModalService} from '@shared/services/modal.service';
import {ProductStructureCategory} from '../../models/product-structure-category';
import {MenuItem, TreeNode} from 'primeng/api';
import {cloneDeep} from 'lodash-es';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-product-structure-categories',
  templateUrl: './product-structure-categories.component.html',
  styleUrls: ['./product-structure-categories.component.scss']
})
export class ProductStructureCategoriesComponent implements OnInit, OnDestroy {
  categories: ProductStructureCategory[] = [];
  categoriesTree: TreeNode<ProductStructureCategory>[] = [];
  selectedCategory: TreeNode<ProductStructureCategory>;

  isLoading = true;
  isMovingDown = false;
  isMovingUp = false;

  menuItems: MenuItem[] = [{
    label: 'Selected Category',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditCategory()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveCategory()
      }
    ]
  }];

  private destroy$ = new Subject();

  constructor(
    private productStructureCategoryService: ProductStructureCategoryService,
    private modalService: ModalService,
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
    this.categoriesTree = this.categories.filter(cat => !cat.parent).map(cat => {
      return {
        data: cat,
        children: [],
        expanded: false,
      };
    });

    const addCategoriesToTree = (nodes: TreeNode<ProductStructureCategory>[]) => {
      nodes.forEach(node => {
        const categories = this.categories.filter(cat => cat.parent === node.data.id);

        if (categories.length > 0) {
          node.children = categories.map(cat => {
            return {
              data: cat,
              children: [],
              expanded: false,
            };
          });
        }


        if (node.children.length > 0) {
          addCategoriesToTree(node.children);
        }
      });
    };

    addCategoriesToTree(this.categoriesTree);
  }

  getMeasure(measure) {
    if (measure != null) {
      return measure.name + ' (' + measure.symbol + ')';
    } else {
      return '_';
    }
  }

  down() {

  }

  up() {

  }

  onCreateCategory() {
    this.productStructureCategoryService.createEditCategory('create').subscribe(category => {
      if (category) {
        this.categories.unshift(category);
        this.createTree();
      }
    });
  }

  onEditCategory() {
    this.productStructureCategoryService.createEditCategory('edit', this.selectedCategory.data).subscribe(category => {
      if (category) {
        const index = this.categories.findIndex(t => t.id === this.selectedCategory.data.id);
        this.categories[index] = category;
        this.createTree();
      }
    });
  }

  onRemoveCategory() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.productStructureCategoryService.delete(this.selectedCategory.data).subscribe(() => {
          const index = this.categories.findIndex(t => t.id === this.selectedCategory.data.id);
          this.categories.splice(index, 1);
          this.selectedCategory = null;
          this.createTree();
        })
      }
    })
  }

  onExpandAll(): void {
    const temp = cloneDeep(this.categoriesTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    this.categoriesTree = temp;
  }

  onCollapseAll(): void {
    const temp = cloneDeep(this.categoriesTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, false);
    });
    this.categoriesTree = temp;
    this.selectedCategory = null;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

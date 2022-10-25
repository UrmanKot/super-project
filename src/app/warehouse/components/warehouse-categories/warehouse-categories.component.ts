import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoriesService} from '../../../product-structure/services/categories.service';
import {Category} from '../../../product-structure/models/category';
import {MenuItem, TreeNode} from 'primeng/api';
import {cloneDeep} from 'lodash-es';
import {finalize, Subject, takeUntil} from 'rxjs';
import {TreeService} from '@shared/services/tree.service';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-warehouse-categories',
  templateUrl: './warehouse-categories.component.html',
  styleUrls: ['./warehouse-categories.component.scss']
})
export class WarehouseCategoriesComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [
    {
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
    }
  ];

  isMovingUp = false;
  isMovingDown = false;
  isLoading = true;

  private destroy$ = new Subject();

  categoriesTree: TreeNode<Category>[];
  selectedCategory: TreeNode<Category>;
  categories: Category[] = [];
  expanseMap = {};

  constructor(
    private categoriesService: CategoriesService,
    private readonly treeService: TreeService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(categories => {
      this.categories = categories;
      this.createTree();
      this.isLoading = false;
    });
  }

  onAddCategory() {
    this.categoriesService.createEditWarehouseCategoryModal('create').subscribe(category => {
      if (category) {
        this.categories.unshift(category);
        this.createTree();
      }
    });
  }

  onEditCategory() {
    this.categoriesService.createEditWarehouseCategoryModal('edit', this.selectedCategory.data).subscribe(category => {
      if (category) {
        const index = this.categories.findIndex(t => t.id === this.selectedCategory.data.id);
        this.categories[index] = category;
        this.createTree();
        this.selectedCategory = this.treeService.findSelectedNode(this.selectedCategory, this.categoriesTree);
      }
    });
  }

  onRemoveCategory() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.categoriesService.delete(this.selectedCategory.data).subscribe(() => {
          const index = this.categories.findIndex(t => t.id === this.selectedCategory.data.id);
          this.categories.splice(index, 1);
          this.selectedCategory = null;
          this.createTree();
        });
      }
    });
  }

  createTree() {
    if (this.categoriesTree) {
      this.treeService.mapExpansion(this.categoriesTree, this.expanseMap);
    }

    this.categoriesTree = this.treeService.createTree(this.categories, this.expanseMap);
  }

  getMeasure(measure) {
    if (measure != null) {
      return measure.name + ' (' + measure.symbol + ')';
    } else {
      return '_';
    }
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
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  down() {
    const node = this.selectedCategory;

    const index = this.findIndexToMove(node.data.id);

    if ((index < node.parent?.children.length - 1 || (!node.parent && index < this.categoriesTree.length - 1)) && !this.isMovingDown) {
      this.isMovingDown = true;
      const move = {
        parent: node.parent ? node.parent.children[index + 1].data.id : this.categoriesTree[index + 1].data.id,
        move_to: 'right'
      };
      this.categoriesService.move(move, node.data.id).pipe(
        finalize(() => this.isMovingDown = false)
      ).subscribe(category => {
        const index = this.categories.findIndex(c => c.id === node.data.id);
        this.categories[index] = category;

        this.productMoved(category, 'down');
      });
    }
  }

  up() {
    const node = this.selectedCategory;
    const index = this.findIndexToMove(node.data.id);

    if (index > 0 && !this.isMovingUp) {
      this.isMovingUp = true;
      const move = {
        parent: node.parent ? node.parent.children[index - 1].data.id : this.categoriesTree[index - 1].data.id,
        move_to: 'left'
      };
      this.categoriesService.move(move, node.data.id).pipe(
        finalize(() => this.isMovingUp = false)
      ).subscribe(category => {
        const index = this.categories.findIndex(c => c.id === node.data.id);
        this.categories[index] = category;

        this.productMoved(category, 'up');
      });
    }
  }

  findIndexToMove(selectedNodeId) {
    let index;

    const find = (nodes: TreeNode<Category>[]) => {
      nodes.forEach((node, i) => {
        if (node.data.id === selectedNodeId) {
          index = i;
          return;
        } else {
          find(node.children);
        }
      });
    };

    find(this.categoriesTree);
    return index;
  }

  productMoved(category: Category, direction: 'up' | 'down') {
    let findedProduct: TreeNode<Category>;
    let parentProduct: TreeNode<Category>;

    const findProduct = (nodes: TreeNode<Category>[]) => {
      nodes.forEach(node => {
        if (node.data.id === category.id) {
          findedProduct = node;
        } else {
          if (node.children && node.children.length > 0) {
            findProduct(node.children);
          }
        }
      });
    };

    const findParent = (nodes: TreeNode<Category>[]) => {
      nodes.forEach(node => {
        if (node.data.id === findedProduct.parent.data.id) {
          parentProduct = node;
        } else {
          if (node.children && node.children.length > 0) {
            findParent(node.children);
          }
        }
      });
    };

    findProduct(this.categoriesTree);

    if (findedProduct.parent) {
      findParent(this.categoriesTree);
    } else {
      parentProduct = findedProduct;
    }

    if (findedProduct.parent) {
      const index = parentProduct.children.findIndex(child => child.data.id === category.id);

      if (direction === 'down') {
        [parentProduct.children[index], parentProduct.children[index + 1]] = [parentProduct.children[index + 1], parentProduct.children[index]];
      } else {
        [parentProduct.children[index], parentProduct.children[index - 1]] = [parentProduct.children[index - 1], parentProduct.children[index]];
      }
    } else {
      const index = this.categoriesTree.findIndex(node => node.data.id === category.id);

      if (direction === 'down') {
        [this.categoriesTree[index], this.categoriesTree[index + 1]] = [this.categoriesTree[index + 1], this.categoriesTree[index]];
      } else {
        [this.categoriesTree[index], this.categoriesTree[index - 1]] = [this.categoriesTree[index - 1], this.categoriesTree[index]];
      }
    }

    this.categoriesTree = this.categoriesTree.map(node => node);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

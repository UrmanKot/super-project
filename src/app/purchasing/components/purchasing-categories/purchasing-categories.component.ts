import {Component, OnInit} from '@angular/core';
import {MenuItem, TreeNode} from 'primeng/api';
import {TreeService} from '@shared/services/tree.service';
import {ModalService} from '@shared/services/modal.service';
import {cloneDeep} from 'lodash-es';
import {PurchasingCategoryService} from '../../services/purchasing-category.service';
import {PurchaseCategory} from '../../models/purchase-category';

@Component({
  selector: 'pek-purchasing-categories',
  templateUrl: './purchasing-categories.component.html',
  styleUrls: ['./purchasing-categories.component.scss']
})
export class PurchasingCategoriesComponent implements OnInit {
  isLoading = true;
  purchasingCategories: PurchaseCategory[] = [];
  selectedNode: TreeNode<PurchaseCategory>;
  categoriesTree: TreeNode<PurchaseCategory>[] = [];

  expanseMap = {};

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

  constructor(
    private purchasingCategoryService: PurchasingCategoryService,
    private readonly treeService: TreeService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getPurchasingCategory();
  }

  getPurchasingCategory() {
    this.purchasingCategoryService.getAll().subscribe(categories => {
      this.purchasingCategories = categories;
      this.createTree();
      this.isLoading = false;
    });
  }

  createTree() {
    if (this.categoriesTree) {
      this.treeService.mapExpansion(this.categoriesTree, this.expanseMap);
    }

    this.categoriesTree = this.treeService.createTree(this.purchasingCategories, this.expanseMap);
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

  private onEditCategory() {
    this.purchasingCategoryService.createEditCategory('edit', this.selectedNode.data).subscribe(category => {
      if (category) {
        const index = this.purchasingCategories.findIndex(s => s.id === category.id);
        this.purchasingCategories[index] = category;
        this.selectedNode = null;
        this.createTree();
      }
    });
  }

  public onCreateCategory() {
    this.purchasingCategoryService.createEditCategory('create').subscribe(category => {
      if (category) {
        this.purchasingCategories.push(category);
        this.createTree();
      }
    });
  }

  private onRemoveCategory() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.purchasingCategoryService.delete(this.selectedNode.data.id).subscribe(() => {
          const removeChildren = (id: number) => {
            const ids: number[] = this.purchasingCategories.filter(p => p.parent === id).map(p => p.id);
            this.purchasingCategories = [...this.purchasingCategories.filter(p => p.parent !== id)];

            ids.forEach(id => {
              removeChildren(id);
            });
          };

          removeChildren(this.selectedNode.data.id);

          const index = this.purchasingCategories.findIndex(p => p.id === this.selectedNode.data.id);
          this.purchasingCategories.splice(index, 1);
          this.selectedNode = null;
          this.createTree();
        });
      }
    });
  }

}

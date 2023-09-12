import { Component, OnInit } from '@angular/core';
import {PurchasingCategoryService} from "../../../purchasing/services/purchasing-category.service";
import {TreeService} from "@shared/services/tree.service";
import {PurchaseCategory} from "../../../purchasing/models/purchase-category";
import {TreeNode} from "primeng/api";
import {cloneDeep} from 'lodash-es';

@Component({
  selector: 'pek-reports-purchase-categories-accounting-number',
  templateUrl: './reports-purchase-categories-accounting-number.component.html',
  styleUrls: ['./reports-purchase-categories-accounting-number.component.scss']
})
export class ReportsPurchaseCategoriesAccountingNumberComponent implements OnInit {

  isLoading = true;
  purchasingCategories: PurchaseCategory[] = [];
  selectedNode: TreeNode<PurchaseCategory>;
  categoriesTree: TreeNode<PurchaseCategory>[] = [];

  expanseMap = {};

  isSavingCategory = false;

  constructor(
    private purchasingCategoryService: PurchasingCategoryService,
    private readonly treeService: TreeService,
  ) { }

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

  onEditAccountingNumber() {
    this.purchasingCategoryService.editAccountingNumberCategory(this.selectedNode.data).subscribe(category => {
      if (category) {
        const index = this.purchasingCategories.findIndex(s => s.id === category.id);
        this.purchasingCategories[index] = category;
        this.selectedNode = null;
        this.createTree();
      }
    });
  }
}

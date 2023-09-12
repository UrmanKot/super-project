import { Component, OnInit } from '@angular/core';
import {PurchaseCategory} from "../../../purchasing/models/purchase-category";
import {TreeNode} from "primeng/api";
import {PurchasingCategoryService} from "../../../purchasing/services/purchasing-category.service";
import {TreeService} from "@shared/services/tree.service";
import {cloneDeep} from 'lodash-es';
import {BaseServicesService} from "../../../procurement/services/base-services.service";
import {BaseService} from "../../../procurement/models/base-service";

@Component({
  selector: 'pek-reports-auxiliary-invoices-accounting-number',
  templateUrl: './reports-auxiliary-invoices-accounting-number.component.html',
  styleUrls: ['./reports-auxiliary-invoices-accounting-number.component.scss']
})
export class ReportsAuxiliaryInvoicesAccountingNumberComponent implements OnInit {

  isLoading = true;
  baseServices: BaseService[] = [];
  selectedNode: TreeNode<BaseService>;
  categoriesTree: TreeNode<BaseService>[] = [];

  expanseMap = {};

  constructor(
    private readonly baseServicesService: BaseServicesService,
    private readonly treeService: TreeService,
  ) { }

  ngOnInit(): void {
    this.getPurchasingCategory();
  }

  getPurchasingCategory() {
    this.baseServicesService.get().subscribe(categories => {
      this.baseServices = categories;
      this.createTree();
      this.isLoading = false;
    });
  }

  createTree() {
    if (this.categoriesTree) {
      this.treeService.mapExpansion(this.categoriesTree, this.expanseMap);
    }

    this.categoriesTree = this.treeService.createTree(this.baseServices, this.expanseMap);
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
    this.baseServicesService.editAccountingNumberCategory(this.selectedNode.data).subscribe(category => {
      if (category) {
        const index = this.baseServices.findIndex(s => s.id === category.id);
        this.baseServices[index] = category;
        this.selectedNode = null;
        this.createTree();
      }
    });
  }

}

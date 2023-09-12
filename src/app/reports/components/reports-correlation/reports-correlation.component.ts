import {Component, OnInit} from '@angular/core';
import {PurchaseCategory} from "../../../purchasing/models/purchase-category";
import {TreeNode} from "primeng/api";
import {PurchasingCategoryService} from "../../../purchasing/services/purchasing-category.service";
import {TreeService} from "@shared/services/tree.service";
import {cloneDeep} from 'lodash-es';
import {AccountingCategoriesService} from "../../services/accounting-categories.service";
import {finalize} from "rxjs";
import {AccountingTypeService} from "../../services/accounting-type.service";
import {AccountingType} from "../../models/accounting-types";
import {filter} from "rxjs/operators";

@Component({
  selector: 'pek-reports-correlation',
  templateUrl: './reports-correlation.component.html',
  styleUrls: ['./reports-correlation.component.scss']
})
export class ReportsCorrelationComponent implements OnInit {
  tabIndex = 0;

  accountingTypes: AccountingType[] = [];
  selectedAccountingType: AccountingType;
  isLoadingAccountingTypes = true;


  isLoading = true;
  purchasingCategories: PurchaseCategory[] = [];
  selectedNode: TreeNode<PurchaseCategory>;
  categoriesTree: TreeNode<PurchaseCategory>[] = [];

  isSavingCategory = false;

  isSavingTypeCategory = false;

  expanseMap = {};

  constructor(
    private purchasingCategoryService: PurchasingCategoryService,
    private accountingTypesService: AccountingTypeService,
    private readonly accountingCategoriesService: AccountingCategoriesService,
    private readonly treeService: TreeService,
  ) {
  }

  ngOnInit(): void {
    this.getPurchasingCategory();
    this.getAccountingTypes();
  }

  getAccountingTypes() {
    this.accountingTypesService.getAccountingTypes().subscribe(accountingTypes => {
      this.accountingTypes = accountingTypes;
      this.accountingTypes = this.accountingTypes.filter(type => type.name !== 'Purchased');
      this.isLoadingAccountingTypes = false;
      this.selectedAccountingType = null;
    });
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

  onEditAccountingCategory() {
    this.accountingCategoriesService.openAccountingCategoryPicker(<any>this.selectedNode.data.accounting_category).pipe(
      filter(val => val !== false)
    ).subscribe(category => {
      this.isSavingCategory = true;

      const send = {
        accounting_category: category?.id ?? null
      }

      this.purchasingCategoryService.update(send, this.selectedNode.data.id).pipe(
        finalize(() => this.isSavingCategory = false)
      ).subscribe(newCategory => {
        const index = this.purchasingCategories.findIndex(s => s.id === newCategory.id);
        this.purchasingCategories[index].accounting_category = newCategory.accounting_category;
        this.selectedNode = null;
        this.createTree();
      })

    })
  }

  onEditAccountingTypeCategory() {
    this.accountingCategoriesService.openAccountingCategoryPicker(<any>this.selectedAccountingType.accounting_category).pipe(
      filter(val => val !== false)
    ).subscribe(category => {
      this.isSavingTypeCategory = true;

      const send = {
        accounting_category: category?.id ?? null,
        id: this.selectedAccountingType.id
      }

      this.accountingTypesService.updateAccountingType(<any>send).pipe(
        finalize(() => this.isSavingTypeCategory = false)
      ).subscribe(type => {
        const index = this.accountingTypes.findIndex(s => s.id === type.id);
        this.accountingTypes[index].accounting_category = type.accounting_category;
        this.selectedNode = null;
        this.createTree();
      })

    })
  }

}

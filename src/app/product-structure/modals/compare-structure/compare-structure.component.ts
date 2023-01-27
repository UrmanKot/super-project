import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TreeNode} from 'primeng/api';
import {ProductStructureCompare} from '../../models/product-structure-compare';
import {AuthService} from '../../../auth/auth.service';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'pek-compare-structure',
  templateUrl: './compare-structure.component.html',
  styleUrls: ['./compare-structure.component.scss']
})
export class CompareStructureComponent implements OnInit {
  currentProductsTree: TreeNode<ProductStructureCompare>[] = [];
  newProductsTree: TreeNode<ProductStructureCompare>[] = [];
  isLoading: any;
  hasCyclingProduct = false;
  hasChangedName = false;
  constructor(
    private dialogRef: MatDialogRef<CompareStructureComponent>,
    public auth: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: {
      newResult: TreeNode<ProductStructureCompare>[],
      oldResult: TreeNode<ProductStructureCompare>[],
      hasCyclingProduct: boolean,
      hasChangedName: boolean,
    },
  ) {
  }

  ngOnInit(): void {
    this.currentProductsTree = this.data.oldResult;
    this.newProductsTree = this.data.newResult;
    this.hasCyclingProduct = this.data.hasCyclingProduct;
    this.hasChangedName = this.data.hasChangedName;
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onContinueUpdate() {
    this.dialogRef.close(true);
  }

  expandAllNew() {
    const temp = cloneDeep(this.newProductsTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    this.newProductsTree = temp;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  collapseAllNew() {
    const temp = cloneDeep(this.newProductsTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, false);
    });
    this.newProductsTree = temp;
  }

  expandAllCurrent() {
    const temp = cloneDeep(this.currentProductsTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, true);
    });
    this.currentProductsTree = temp;
  }

  collapseAllCurrent() {
    const temp = cloneDeep(this.currentProductsTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, false);
    });
    this.currentProductsTree = temp;
  }
}

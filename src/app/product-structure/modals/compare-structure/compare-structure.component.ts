import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MenuItem, TreeNode} from 'primeng/api';
import {ProductStructureCompare} from '../../models/product-structure-compare';
import {AuthService} from '../../../auth/auth.service';
import * as cloneDeep from 'lodash/cloneDeep';
import {CompareChangedCodeName} from '../../models/compare-changed-code-name';
import {CompareImportServiceService} from '../../services/compare-import-service.service';
import {AncestorProductStructureCompare} from '../../models/product-structure-compare-result';
import {ProductService} from '../../services/product.service';
import {deepCopy} from 'deep-copy-ts';

@Component({
  selector: 'pek-compare-structure',
  templateUrl: './compare-structure.component.html',
  styleUrls: ['./compare-structure.component.scss'],
  providers: [CompareImportServiceService],
})
export class CompareStructureComponent implements OnInit {
  currentProductsTree: TreeNode<ProductStructureCompare>[] = [];
  newProductsTree: TreeNode<ProductStructureCompare>[] = [];
  isLoading: any;
  hasCyclingProduct = false;
  hasChangedName = false;
  changedCodeNamesList: CompareChangedCodeName[] = [];

  ancestorsProducts: AncestorProductStructureCompare[];

  newSelectedItem: TreeNode<ProductStructureCompare>;
  newMenuItems: MenuItem[] = [
    {
      label: 'Selected Product',
      items: [
        {
          label: 'Set New Name',
          icon: 'pi pi-refresh',
          command: () => this.onAcceptNewName(this.newSelectedItem.data),
        },
        {
          label: 'Set Current Name',
          icon: 'pi pi-replay',
          command: () => this.onAcceptCurrentName(this.newSelectedItem.data),
        },
        {
          label: 'Compare With Original',
          icon: 'pi pi-eye',
          command: () => this.onViewStructureDifference(this.newSelectedItem),
        }
      ]
    }
  ];
  newMenuOriginalTreeItems: MenuItem[] = [
    {
      label: 'Selected Product',
      items: [
        {
          label: 'Compare With Original',
          icon: 'pi pi-eye',
          command: () => this.onViewStructureDifference(this.newSelectedItem),
        }
      ]
    }
  ];

  currentSelectedItem: TreeNode<ProductStructureCompare>;
  currentMenuItems: MenuItem[] = [
    {
      label: 'Selected Product',
      items: [
        {
          label: 'Accept New Name',
          icon: 'pi pi-refresh',
          command: () => this.onAcceptNewName(this.currentSelectedItem.data),
        },
        {
          label: 'Accept Current Name',
          icon: 'pi pi-replay',
          command: () => this.onAcceptCurrentName(this.currentSelectedItem.data),
        }
      ]
    }
  ];

  constructor(
    public auth: AuthService,
    private productService: ProductService,
    private dialogRef: MatDialogRef<CompareStructureComponent>,
    private compareImportServiceService: CompareImportServiceService,
    @Inject(MAT_DIALOG_DATA) public data: {
      newResult: TreeNode<ProductStructureCompare>[],
      oldResult: TreeNode<ProductStructureCompare>[],
      hasCyclingProduct: boolean,
      hasChangedName: boolean,
      changedNamesList: CompareChangedCodeName[],
      ancestorsProducts: AncestorProductStructureCompare[],
      isCompareView: boolean
    },
  ) {
  }

  ngOnInit(): void {
    this.newProductsTree = this.data.newResult;
    this.currentProductsTree = this.data.oldResult;
    this.hasCyclingProduct = this.data.hasCyclingProduct;
    this.hasChangedName = this.data.hasChangedName;
    this.changedCodeNamesList = this.data.changedNamesList;
    this.ancestorsProducts = this.data.ancestorsProducts;
  }


  onCancel() {
    this.dialogRef.close(false);
  }

  onContinueUpdate() {
    this.dialogRef.close(this.changedCodeNamesList.map(name => {
      return {code: name.code, selected_name: name.selectedName};
    }));
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

  hasNameChanged(rowData: any) {
    return this.changedCodeNamesList.findIndex(name => name.code === rowData.code && !name.selectedName) > -1;
  }

  hasNameChangeDepend() {
    return this.changedCodeNamesList.some(name => !name.selectedName);
  }

  private onAcceptNewName(data) {
    const nameInList = this.changedCodeNamesList.find(name => name.code === data.code);

    nameInList.selectedName = nameInList.newName;
    this.updateNamesInNodes(nameInList);
    this.selectionChanged();
  }

  private onAcceptCurrentName(data) {
    const nameInList = this.changedCodeNamesList.find(name => name.code === data.code);

    nameInList.selectedName = nameInList.currentName;
    this.updateNamesInNodes(nameInList);
    this.selectionChanged();
  }

  updateNamesInNodes(nameInList) {
    this.newProductsTree.forEach(node => {
      node.children.forEach(child => {
        this.changedNames(child, nameInList.code, nameInList.selectedName);
      });
    });
    this.currentProductsTree.forEach(node => {
      node.children.forEach(child => {
        this.changedNames(child, nameInList.code, nameInList.selectedName);
      });
    });
  }


  changedNames(node: TreeNode<ProductStructureCompare>, code: string, newName: string) {
    if (node.data.code === code) {
      node.data.name = newName;
    }
    node.children.forEach(child => {
      this.changedNames(child, code, newName);
    });
  }

  hasNoMultipleNames(data) {
    return this.changedCodeNamesList.findIndex(name => name.code === data.code && !name.selectedName) < 0;
  }

  acceptNewForAll() {
    this.changedCodeNamesList.forEach(change => {
      change.selectedName = change.newName;
      this.updateNamesInNodes(change);
    });
  }

  acceptCurrentForAll() {
    this.changedCodeNamesList.forEach(change => {
      change.selectedName = change.currentName;
      this.updateNamesInNodes(change);
    });
  }

  getPossibleName(code: string, isNewStructure: boolean = false) {
    const name = this.changedCodeNamesList.find(name => name.code === code && !name.selectedName);
    if (name) {
      return isNewStructure ? name.currentName : name.newName;
    } else {
      return '';
    }
  }

  codeHasMoreThanOne(data) {
    return this.changedCodeNamesList.filter(change => change.code === data.code).length > 1;
  }

  moreThanOne() {
    return this.changedCodeNamesList.map(change => change.code).findIndex(el => {
      return this.changedCodeNamesList.filter(change => change.code === el).length > 1;
    }) > -1;
  }

  private onViewStructureDifference(data: TreeNode<ProductStructureCompare>) {
    const newStructure = this.compareImportServiceService.duplicateTreeDataForCompare(data.data);

    let treeData = this.compareImportServiceService.setDataToInitializeStructure(
      newStructure,
      deepCopy(data.data.existing_structure),
      this.ancestorsProducts
    );

    this.productService.openCompareStructureDialog(
      treeData.newProductsTree,
      treeData.currentProductsTree,
      this.hasCyclingProduct,
      this.hasChangedName,
      this.changedCodeNamesList,
      this.ancestorsProducts,
      true).subscribe(res => {
      this.compareImportServiceService.clearData();
    });
  }

  selectionChanged() {
    const disabledChangeNames = this.hasNoMultipleNames(this.newSelectedItem.data) ||
      this.codeHasMoreThanOne(this.newSelectedItem.data);
    this.newMenuItems[0].items[2].disabled = !this.newSelectedItem.data.existing_structure;
    this.newMenuItems[0].items[0].disabled = disabledChangeNames;
    this.newMenuItems[0].items[1].disabled = disabledChangeNames;
  }
}

import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductService} from '../../services/product.service';
import {Subject, takeUntil} from 'rxjs';
import {TreeNode} from 'primeng/api';
import {ProductStructureCompare} from '../../models/product-structure-compare';
import {AncestorProductStructureCompare} from '../../models/product-structure-compare-result';

@Component({
  selector: 'pek-upload-product-structure',
  templateUrl: './upload-product-structure.component.html',
  styleUrls: ['./upload-product-structure.component.scss']
})
export class UploadProductStructureComponent implements OnInit, OnDestroy {
  fileToUpload: File;
  isLoading = false;
  showErrorUpload = false;

  files: string[] = [];
  error: string;

  private destroy$ = new Subject();

  currentProductsTree: TreeNode<ProductStructureCompare>[] = [];
  newProductsTree: TreeNode<ProductStructureCompare>[] = [];
  hasCyclingProduct = false;
  hasChangedName = false;
  hasChanges = false;
  newStructure: ProductStructureCompare;
  currentStructure: ProductStructureCompare;
  ancestorsProducts: AncestorProductStructureCompare[];

  constructor(
    private dialogRef: MatDialogRef<UploadProductStructureComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: {productId: number, rootProductId: number},
  ) {
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.showErrorUpload = false;
    this.isLoading = false;
    this.fileToUpload = null;
    this.error = '';
  }

  previewStructure() {
    const dataFprStructurePreview = {
      file_xls: this.fileToUpload,
      root_product_id: this.data.productId,
      selected_product_id: this.data.productId
    };

    this.productService.compare_structure(dataFprStructurePreview)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe({
      next: res => {
        this.newStructure = res.data.new_structure;
        this.currentStructure = res.data.current_structure;
        this.ancestorsProducts = res.data.ancestors_products;
        this.checkForDifferences();
        if (this.hasCyclingProduct || this.hasChangedName || this.hasChanges) {
          this.productService.openCompareStructureDialog(this.newProductsTree, this.currentProductsTree, this.hasCyclingProduct, this.hasChangedName).subscribe(res => {
            if (res) {
              this.onUpload();
            } else {
              this.dialogRef.close(false);
            }
          });
        } else {
          this.onUpload();
        }
      },
      error: err => {
        if (err) {
          this.isLoading = false;
          this.error = err.error.data;
        }
      }
    });
  }

  onUpload(codes: string[] = []) {
    this.isLoading = true;

    const data = {
      file_xls: this.fileToUpload,
      root_product_id: this.data.productId,
      passed_codes: codes
    };

    this.productService.uploadProductStructure(data)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe({
      next: res => {
        this.dialogRef.close(true);
      },
      error: err => {
        if (err) {
          this.isLoading = false;
          this.error = err.error.data;
          this.processing(err.error.data);
        }
      }
    });
  }

  processing(arr: any) {
    const str: string = arr ? arr[0] : '';

    if (str.includes('Error in parsing items at position')) {
      this.showErrorUpload = true;
      const str2 = str.split('code:')[1];
      const str3 = str2.split(', Index:')[0];

      this.files.push(str3);
    } else {
      this.showErrorUpload = false;
      this.fileToUpload = null;
    }
  }

  onContinueUpdate() {
    this.onUpload(this.files);
  }

  selectFile(files: File[]) {
    this.error = '';
    this.fileToUpload = files[0];
  }

  removeFile() {
    this.fileToUpload = null;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  checkForDifferences() {
    this.compareOldVersion();
    this.compareNewVersion();
    this.prepareCurrentTree();
    this.prepareNewTree();
  }

  checkChangesInCurrentStructure(parent: ProductStructureCompare, parentIndex) {
    if (parent.children) {
      parent.children.forEach((element, index) => {
        element.isNew = true;
        this.hasChanges = true;
        if (element.children) {
          element.children.forEach((el, childIndex) => {
            el.isNew = true;
            this.hasChanges = true;
            this.checkChangesInCurrentStructure(el, index);
          });
        }
      });
    }
  }

  prepareCurrentTree() {
    this.currentProductsTree.push({
      data: this.currentStructure,
      expanded: false,
      parent: null,
      children: []
    });

    this.currentStructure.children?.forEach(child => {
      this.currentProductsTree[0].children.push(
        {
          data: child,
          expanded: false,
          parent: null,
          children: []
        }
      );
    });
    this.addProdStructureCurrent(this.currentProductsTree[0]);
  }

  addProdStructureCurrent(treeProduct: TreeNode<ProductStructureCompare>) {
    if (treeProduct.children) {
      treeProduct.children.forEach(child => {
        if (child.parent) {
          child.data.hasCycle = this.isCycle(child.data.parent, child.data.code);

          if (!child.data.hasCycle) {
            if (this.newStructure.parent_id) {
              const nextParent = this.ancestorsProducts.find(el => el.id === this.newStructure.parent_id);
              child.data.hasCycle = this.isCycleOnStructure(nextParent, child.data.code);
            }
          }
        }
        if (child.data.hasCycle) {
          this.hasCyclingProduct = true;
          this.hasChanges = true;
        }
        if (child.data && child.data.children) {
          child.data.children.forEach(innerChild => {
            if (innerChild.parent) {
              innerChild.hasCycle = this.isCycle(innerChild.parent, innerChild.code);

              if (!innerChild.hasCycle) {
                if (this.newStructure.parent_id) {
                  const nextParent = this.ancestorsProducts.find(el => el.id === this.newStructure.parent_id);
                  innerChild.hasCycle = this.isCycleOnStructure(nextParent, innerChild.code);
                }
              }
            }
            if (innerChild.hasCycle) {
              this.hasCyclingProduct = true;
              this.hasChanges = true;
            }
            child.children.push({
              data: innerChild,
              expanded: false,
              parent: null,
              children: []
            });
          });
          this.addProdStructureCurrent(child);
        }
      });
    }
  }

  prepareNewTree() {
    this.newProductsTree.push({
      data: this.newStructure,
      expanded: false,
      parent: null,
      children: []
    });

    this.newStructure.children.forEach(child => {
      if (child.parent) {
        child.hasCycle = this.isCycle(child.parent, child.code);

        if (!child.hasCycle) {
          if (this.newStructure.parent_id) {
            const nextParent = this.ancestorsProducts.find(el => el.id === this.newStructure.parent_id);
            child.hasCycle = this.isCycleOnStructure(nextParent, child.code);
          }
        }
      }
      if (child.hasCycle) {
        this.hasCyclingProduct = true;
        this.hasChanges = true;
      }
      this.newProductsTree[0].children.push(
        {
          data: child,
          expanded: false,
          parent: null,
          children: []
        }
      );
    });
    this.addProdStructureCurrent(this.newProductsTree[0]);

  }

  private compareOldVersion() {
    // if (this.currentStructure.children)
    this.currentStructure.children?.forEach((oldVersionProduct, index) => {
      const newVersionProduct = this.newStructure.children.find(el => el.code === oldVersionProduct.code);
      if (!newVersionProduct) {
        oldVersionProduct.isDeleted = true;
        this.hasChanges = true;
        if (oldVersionProduct.children) {
          this.markAsDeleted(oldVersionProduct);
        }
      }
      if (newVersionProduct) {
        if (newVersionProduct.quantity !== oldVersionProduct.quantity) {
          oldVersionProduct.hasQuantityChanged = true;
          this.hasChanges = true;
        }
        if (newVersionProduct.name !== oldVersionProduct.name) {
          oldVersionProduct.hasNameChanged = true;
          this.hasChanges = true;
        }
        if (oldVersionProduct.children && newVersionProduct.children) {
          this.recursiveFindChangesOld(oldVersionProduct, newVersionProduct);
        }
      }
    });
  }

  private recursiveFindChangesOld(oldProductStructure: ProductStructureCompare, newProductStructure: ProductStructureCompare) {
    oldProductStructure.children.forEach((oldVersionProduct, index) => {
      const newVersionProduct = newProductStructure.children.find(el => el.code === oldVersionProduct.code);
      if (!newVersionProduct) {
        oldVersionProduct.isDeleted = true;
        this.hasChanges = true;
        if (oldVersionProduct.children) {
          this.markAsDeleted(oldVersionProduct);
        }
      }
      if (newVersionProduct) {
        if (newVersionProduct.quantity !== oldVersionProduct.quantity) {
          oldVersionProduct.hasQuantityChanged = true;
          this.hasChanges = true;
        }
        if (newVersionProduct.name !== oldVersionProduct.name) {
          oldVersionProduct.hasNameChanged = true;
          this.hasChanges = true;
        }
        if (oldVersionProduct.children && newVersionProduct.children) {
          this.recursiveFindChangesOld(oldVersionProduct, newVersionProduct);
        }
      }
    });
  }

  markAsDeleted(productStructure: ProductStructureCompare) {
    productStructure.children.forEach(child => {
      child.isDeleted = true;
      this.hasChanges = true;
      if (child.children) {
        this.markAsDeleted(child);
      }
    });
  }

  private compareNewVersion() {
    this.newStructure.children.forEach((newVersionProduct, index) => {
      const oldVersionProduct = this.currentStructure.children?.find(el => el.code === newVersionProduct.code);
      newVersionProduct.parent = {
        code: this.newStructure.code,
        name: this.newStructure.name,
        quantity: null
      }
      if (!oldVersionProduct) {
        newVersionProduct.isNew = true;
        this.hasChanges = true;
        if (newVersionProduct.children) {
          this.markAsNew(newVersionProduct);
        }
      }
      if (oldVersionProduct) {
        if (newVersionProduct.quantity !== oldVersionProduct.quantity) {
          newVersionProduct.hasQuantityChanged = true;
          this.hasChanges = true;
        }
        if (newVersionProduct.name !== oldVersionProduct.name) {
          newVersionProduct.hasNameChanged = true;
          this.hasChanges = true;
        }
        if (newVersionProduct.hasNameChanged) {
          this.hasChangedName = true;
          this.hasChanges = true;
        }
        if (oldVersionProduct.children && newVersionProduct.children) {
          this.recursiveFindChangesNew(newVersionProduct, oldVersionProduct);
        }
      }
    });
  }

  private recursiveFindChangesNew(newVersionProductParent: ProductStructureCompare, oldProductStructure: ProductStructureCompare) {
    newVersionProductParent.children.forEach((newVersionProduct, index) => {
      newVersionProduct.parent = {
        code: newVersionProductParent.code,
        name: newVersionProductParent.name,
        parent: newVersionProductParent.parent,
        quantity: null
      }
      const oldVersionProduct = oldProductStructure.children.find(el => el.code === newVersionProduct.code);

      if (!oldVersionProduct) {
        newVersionProduct.isNew = true;
        this.hasChanges = true;
        if (newVersionProduct.children) {
          this.markAsNew(newVersionProduct);
        }
      }

      if (oldVersionProduct) {
        if (newVersionProduct.quantity !== oldVersionProduct.quantity) {
          newVersionProduct.hasQuantityChanged = true;
          this.hasChanges = true;
        }
        if (newVersionProduct.name !== oldVersionProduct.name) {
          newVersionProduct.hasNameChanged = true;
          this.hasChanges = true;
        }
        if (newVersionProduct.hasNameChanged) {
          this.hasChangedName = true;
          this.hasChanges = true;
        }
        if (newVersionProduct.children && oldVersionProduct.children) {
          this.recursiveFindChangesNew(newVersionProduct, oldVersionProduct);
        }
      }
    });
  }

  isCycle(parentProduct: ProductStructureCompare, code: string) {
    if (parentProduct.code === code) return true;
    if (parentProduct.parent) return this.isCycle(parentProduct.parent, code);
  }

  isCycleOnStructure(ancestorProduct: AncestorProductStructureCompare, code: string) {
    if (ancestorProduct.nomenclature__code === code) {
      return true;
    } else {
      if (!ancestorProduct.parent_id) {
        return false;
      }
      const nextParent = this.ancestorsProducts.find(el => el.id === ancestorProduct.parent_id);
      return this.isCycleOnStructure(nextParent, code)
    }
  }

  markAsNew(productStructure: ProductStructureCompare) {
    productStructure.children.forEach(child => {
      child.isNew = true;
      this.hasChanges = true;
      if (child.children) {
        this.markAsNew(child);
      }
    });
  }
}

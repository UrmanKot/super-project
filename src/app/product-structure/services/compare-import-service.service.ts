import {Injectable} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {ProductStructureCompare} from '../models/product-structure-compare';
import {AncestorProductStructureCompare} from '../models/product-structure-compare-result';
import {deepCopy} from 'deep-copy-ts';

@Injectable()
export class CompareImportServiceService {
  currentProductsTree: TreeNode<ProductStructureCompare>[] = [];
  newProductsTree: TreeNode<ProductStructureCompare>[] = [];

  hasCyclingProduct = false;
  hasChangedName = false;
  hasChanges = false;
  newStructure: ProductStructureCompare;
  currentStructure: ProductStructureCompare;
  ancestorsProducts: AncestorProductStructureCompare[];


  constructor() {
  }

  setDataToInitializeStructure(
    newStructure: ProductStructureCompare,
    currentStructure: ProductStructureCompare,
    ancestorsProducts: AncestorProductStructureCompare[]
  ): {
    newProductsTree: TreeNode<ProductStructureCompare>[],
    currentProductsTree: TreeNode<ProductStructureCompare>[],
    ancestorsProducts: AncestorProductStructureCompare[],
    hasCyclingProduct: boolean,
    hasChangedName: boolean,
    hasChanges: boolean,
  } {
    this.newStructure = newStructure;
    this.currentStructure = currentStructure;
    this.ancestorsProducts = ancestorsProducts;
    return this.checkForDifferences();
  }

  checkForDifferences(): {
    newProductsTree: TreeNode<ProductStructureCompare>[],
    currentProductsTree: TreeNode<ProductStructureCompare>[],
    ancestorsProducts: AncestorProductStructureCompare[],
    hasCyclingProduct: boolean,
    hasChangedName: boolean,
    hasChanges: boolean,
  } {
    this.compareOldVersion();
    this.compareNewVersion();
    this.prepareCurrentTree();
    this.prepareNewTree();

    return {
      newProductsTree: this.newProductsTree,
      currentProductsTree: this.currentProductsTree,
      ancestorsProducts: this.ancestorsProducts,
      hasCyclingProduct: this.hasCyclingProduct,
      hasChangedName: this.hasChangedName,
      hasChanges: this.hasChanges,
    };
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
            innerChild.unchangedStructure = deepCopy(innerChild);
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
      child.unchangedStructure = deepCopy(child);

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
      const newVersionProduct = this.newStructure.children.find(el => el.code === oldVersionProduct.code && !el.hasCheckedForQuantity);
      if (!newVersionProduct) {
        oldVersionProduct.isDeleted = true;
        this.hasChanges = true;
        if (oldVersionProduct.children) {
          this.markAsDeleted(oldVersionProduct);
        }
      }

      if (newVersionProduct) {
        if (newVersionProduct.quantity !== oldVersionProduct.quantity && !newVersionProduct.hasCheckedForQuantity) {
          oldVersionProduct.hasQuantityChanged = true;
          this.hasChanges = true;
        }
        newVersionProduct.hasCheckedForQuantity = true;

        if (oldVersionProduct.children && newVersionProduct.children) {
          this.recursiveFindChangesOld(oldVersionProduct, newVersionProduct);
        }
      }
    });
  }

  // Смотреть если уже находили этот элемент (чтою не смотреть первый попавшийся) Для этого эти поля сделал (низ)
  // hasCheckedForDeletion
  // hasCheckedForQuantity
  // hasCheckedForNew

  private recursiveFindChangesOld(oldProductStructure: ProductStructureCompare, newProductStructure: ProductStructureCompare) {
    oldProductStructure.children.forEach((oldVersionProduct, index) => {
      const newVersionProduct = newProductStructure.children.find(el => el.code === oldVersionProduct.code && !el.hasCheckedForQuantity);
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
        newVersionProduct.hasCheckedForQuantity = true;

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
      const oldVersionProduct = this.currentStructure.children?.find(el => el.code === newVersionProduct.code && !el.hasCheckedForQuantity);
      newVersionProduct.parent = {
        code: this.newStructure.code,
        name: this.newStructure.name,
        quantity: null
      };
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
        oldVersionProduct.hasCheckedForQuantity = true;
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
      };
      const oldVersionProduct = oldProductStructure.children.find(el => el.code === newVersionProduct.code && !el.hasCheckedForQuantity);

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
        oldVersionProduct.hasCheckedForQuantity = true;
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
      return this.isCycleOnStructure(nextParent, code);
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

  duplicateTreeDataForCompare(structure: ProductStructureCompare) {
    // Creating product structure for Compare view of Existing product
    const tempStructure = deepCopy(structure);
    tempStructure.existing_structure = null;
    return this.clearDuplicatedStructure(tempStructure);
  }

  clearDuplicatedStructure(structure: ProductStructureCompare) {
    structure.isNew = false;
    structure.isDeleted = false;
    structure.hasCheckedForDeletion = false;
    structure.hasCheckedForNew = false;

    if (structure.children?.length > 0) {
      structure.children.forEach(child => {
        return this.clearDuplicatedStructure(child);
      });
    }
    return structure;
  }

  clearData() {
    // Clearing data on Modal close for clearing data to not duplicating rows
    this.currentProductsTree = [];
    this.newProductsTree = [];
    this.hasCyclingProduct = false;
    this.hasChangedName = false;
    this.hasChanges = false;
    this.newStructure = null;
    this.currentStructure = null;
    this.ancestorsProducts = [];
  }
}

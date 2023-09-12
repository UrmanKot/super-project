import { Component, OnInit } from '@angular/core';
import {TreeNode} from "primeng/api";
import {Category} from "../../models/category";
import {ProductStructureCategory} from "../../models/product-structure-category";
import {ProductStructureCategoryService} from "../../services/product-structure-category.service";
import {UntilDestroy} from "@ngneat/until-destroy";
import {AdapterService} from "@shared/services/adapter.service";
import {MatDialogRef} from "@angular/material/dialog";

@UntilDestroy()
@Component({
  selector: 'pek-edit-sales-chains-categories',
  templateUrl: './edit-sales-chains-categories.component.html',
  styleUrls: ['./edit-sales-chains-categories.component.scss']
})
export class EditSalesChainsCategoriesComponent implements OnInit {

  categoriesTree: TreeNode<ProductStructureCategory>[] = [];
  selectedCategories: TreeNode<ProductStructureCategory>[] = [];
  categories: ProductStructureCategory[];

  isLoading = true;
  isSaving = false;

  constructor(
    private productStructureCategoryService: ProductStructureCategoryService,
    private readonly adapterService: AdapterService,
    private dialogRef: MatDialogRef<EditSalesChainsCategoriesComponent>,
  ) { }

  ngOnInit(): void {
    this.productStructureCategoryService.getNoCache().subscribe(categories => {
      this.categories = categories;
      this.categoriesTree = this.adapterService.treeAdapter(categories, false, false);

      const ids = categories.filter(cat => cat.is_for_sales_chain).map(cat => cat.id);
      this.choiceCategories(ids);

      this.isLoading = false;
    })
  }

  choiceCategories(ids) {
    const categoryNodes = [];

    ids.forEach(id => {
      this.categoriesTree.forEach(item => {
        searchTree(item, id);
      });
    });

    function searchTree(node, matchingTitle) {
      if (node.data.id === matchingTitle) {
        categoryNodes.push(node);
        return node;
      } else if (node.children) {
        let result = null;

        node.children.forEach(item => {
          result = searchTree(item, matchingTitle);
        });
      }
      return null;
    }

    this.selectedCategories = categoryNodes;
  }

  isActivated(node, matchingItem: Category) {
    if (node.data.id === matchingItem.id) {
      return node;
    }
    if (node.children) {
      let result = null;

      node.children.forEach(item => {
        result = this.isActivated(item, matchingItem);
      });
    }
  }

  onSave() {
    this.categories.forEach(cat => {
      this.categoriesTree.forEach(item => {
        this.isActivated(item, cat);
      });
    });

    const categoriesToUpdate: Category[] = [];

    this.categories.forEach(cat => {
      const isSelected = this.selectedCategories.findIndex(node => node.data.id === cat.id);
      categoriesToUpdate.push({
        id: cat.id,
        name: cat.name,
        description: cat.description,
        is_for_sales_chain: isSelected >= 0
      });
    });

    categoriesToUpdate.forEach(cat => {
      this.productStructureCategoryService.updatePartly(cat).subscribe();
    });
    this.dialogRef.close(true);
  }
}

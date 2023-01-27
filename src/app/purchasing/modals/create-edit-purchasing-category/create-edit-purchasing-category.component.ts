import {Component, Inject, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {FormBuilder, Validators} from '@angular/forms';
import {TreeService} from '@shared/services/tree.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {finalize} from 'rxjs/operators';
import {PurchaseCategory} from '../../models/purchase-category';
import {PurchasingCategoryService} from '../../services/purchasing-category.service';

@Component({
  selector: 'pek-create-edit-purchasing-category',
  templateUrl: './create-edit-purchasing-category.component.html',
  styleUrls: ['./create-edit-purchasing-category.component.scss']
})
export class CreateEditPurchasingCategoryComponent implements OnInit {
  isSaving = false;

  types = [
    {name: 'Tangible', value: true},
    {name: 'Intangible', value: false}
  ];

  isLoading = true;
  categories: PurchaseCategory[] = [];
  selectedNode: TreeNode<PurchaseCategory>;
  categoriesTree: TreeNode<PurchaseCategory>[] = [];

  form = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    is_material: [null, Validators.required],
    parent: [null],
    is_for_root: [true]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly treeService: TreeService,
    private dialogRef: MatDialogRef<CreateEditPurchasingCategoryComponent>,
    private purchasingCategoryService: PurchasingCategoryService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, category: PurchaseCategory }
  ) {
  }

  ngOnInit() {
    this.getCategories();

    if (this.data.type === 'edit') {
      this.form.patchValue(<any>this.data.category);

      if (this.data.category.parent) {
        this.form.get('is_for_root').patchValue(false);
      }
    }
  }

  findNode() {
    const find = (nodes: TreeNode<PurchaseCategory>[]) => {
      const foundNode = nodes.find(n => n.data.id === this.data.category.id);

      if (foundNode) {
        this.selectedNode = foundNode;
        return;
      } else {
        nodes.forEach(node => {
          node.expanded = true;
          if (node.children.length > 0) {
            find(node.children);
          }
        });
      }
    };

    find(this.categoriesTree);
  }

  getCategories() {
    this.purchasingCategoryService.getAll().subscribe(categories => {
      this.categories = categories;
      this.createTree();

      if (this.data.type === 'edit') {
        this.findNode();
      }

      this.isLoading = false;
    });
  }

  createTree() {
    if (this.categoriesTree) {
      this.treeService.mapExpansion(this.categoriesTree, {});
    }

    this.categoriesTree = this.treeService.createTree(this.categories, {});
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createCategory();
        break;
      }
      case 'edit': {
        this.editCategory();
        break;
      }
    }
  }

  onChange() {
    this.selectedNode = null;
    this.form.get('parent').patchValue(null);
  }

  editCategory() {
    this.purchasingCategoryService.update(<any>this.form.value, this.data.category.id).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(category => this.dialogRef.close(category));
  }

  createCategory() {
    const send = <any>this.form.value;

    this.purchasingCategoryService.create(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(category => this.dialogRef.close(category));
  }

  onSelection() {
    this.form.get('parent').patchValue(this.selectedNode?.data?.id || null);
  }

}

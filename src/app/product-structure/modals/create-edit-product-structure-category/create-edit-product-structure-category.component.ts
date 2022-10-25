import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {ProductStructureCategoryService} from '../../services/product-structure-category.service';
import {ProductStructureCategory} from '../../models/product-structure-category';

@Component({
  selector: 'pek-create-edit-product-structure-category',
  templateUrl: './create-edit-product-structure-category.component.html',
  styleUrls: ['./create-edit-product-structure-category.component.scss']
})
export class CreateEditProductStructureCategoryComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    unit_of_measure: [0],
    parent: [null],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly productStructureCategoryService: ProductStructureCategoryService,
    private dialogRef: MatDialogRef<CreateEditProductStructureCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, category: Partial<ProductStructureCategory> }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      const category = this.data.category;
      this.form.addControl('id' as any, new FormControl(category.id));
      this.form.get('name').patchValue(category.name);
      this.form.get('description').patchValue(category.description);
      this.form.get('parent').patchValue(category.parent);
      this.form.get('unit_of_measure').patchValue(this.data.category.unit_of_measure.id);
    }
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

  createCategory() {
    const send = <any>this.form.value;
    this.productStructureCategoryService.create(send).subscribe({
      next: category => this.dialogRef.close(category),
      error: () => this.isSaving = false,
    });
  }

  editCategory() {
    const send = <any>this.form.value;
    this.productStructureCategoryService.updatePartly(send).subscribe({
      next: category => this.dialogRef.close(category),
      error: () => this.isSaving = false,
    });
  }

  onSelectMeasureUnit(id: number) {
    this.form.get('unit_of_measure').patchValue(id);
  }

  onSelectCategory(category: ProductStructureCategory) {
    if (category) {
      this.form.get('parent').patchValue(category.id);
    } else {
      this.form.get('parent').patchValue(null);
    }
  }
}

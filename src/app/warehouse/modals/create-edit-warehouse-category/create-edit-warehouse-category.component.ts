import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {WarehouseService} from '../../services/warehouse.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {Warehouse} from '../../models/warehouse';
import {Category} from '../../../product-structure/models/category';
import {CategoriesService} from '../../../product-structure/services/categories.service';

@Component({
  selector: 'pek-create-edit-warehouse-category',
  templateUrl: './create-edit-warehouse-category.component.html',
  styleUrls: ['./create-edit-warehouse-category.component.scss']
})
export class CreateEditWarehouseCategoryComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    unit_of_measure: [null, Validators.required],
    parent: [null],
    is_for_root: [true]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly categoriesService: CategoriesService,
    private dialogRef: MatDialogRef<CreateEditWarehouseCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, category: Category }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.category.id));
      this.form.patchValue(<any>this.data.category);
      this.form.get('unit_of_measure').patchValue(<any>this.data.category.unit_of_measure.id);

      if (this.data.category.parent) {
        this.form.get('parent').patchValue(this.data.category.parent);
      } else {
        this.form.get('is_for_root').patchValue(true);
      }
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
    this.categoriesService.create(send).subscribe({
      next: category => this.dialogRef.close(category),
      error: () => this.isSaving = false,
    });
  }

  editCategory() {
    const send = <Partial<Warehouse>>this.form.value;
    this.categoriesService.updatePartly(send).subscribe({
      next: category => this.dialogRef.close(category),
      error: () => this.isSaving = false,
    });
  }

  onChoiceCategory(category: Category) {
    if (category) {
      this.form.get('parent').patchValue(category.id);
      this.form.get('is_for_root').patchValue(false);
    } else {
      this.form.get('parent').patchValue(null);
      this.form.get('is_for_root').patchValue(true);
    }
  }

  onSelectMeasureUnit(id: number) {
    this.form.get('unit_of_measure').patchValue(<any>id);
  }
}

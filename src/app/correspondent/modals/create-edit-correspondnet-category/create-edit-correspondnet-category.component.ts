import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {ProductStructureCategory} from '../../../product-structure/models/product-structure-category';
import {CorrespondentTypes} from '../../enum/correspondent-types.enum';
import {CorrespondentsCategoriesService} from '../../services/correspondents-category.service';
import {CorrespondentsCategory} from '../../models/correspondents-category';
import {take} from 'rxjs/operators';

@Component({
  selector: 'pek-create-edit-correspondnet-category',
  templateUrl: './create-edit-correspondnet-category.component.html',
  styleUrls: ['./create-edit-correspondnet-category.component.scss']
})
export class CreateEditCorrespondnetCategoryComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    type: [null],
    parent: [null],
  });

  correspondentType: CorrespondentTypes;
  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEditCorrespondnetCategoryComponent>,
    private categoriesService: CorrespondentsCategoriesService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, correspondentType: CorrespondentTypes, category: Partial<CorrespondentsCategory> }
  ) { }

  ngOnInit(): void {
    this.correspondentType = this.data.correspondentType;
    this.form.get('type').patchValue(this.correspondentType);

    if (this.data.type === 'edit') {
      const category = this.data.category;
      this.form.addControl('id' as any, new FormControl(category.id));
      this.form.get('name').patchValue(category.name);
      this.form.get('description').patchValue(category.description);
      this.form.get('parent').patchValue(category.parent);
    }
  }

  onSelectCategory(category: CorrespondentsCategory) {
    if (category) {
      this.form.get('parent').patchValue(category.id);
    } else {
      this.form.get('parent').patchValue(null);
    }
  }

  onSave() {
    if (this.data.type === 'edit') {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    if (this.form.valid) {
      this.categoriesService.create(this.form.value as CorrespondentsCategory).pipe(take(1)).subscribe(
        (response) => {
          this.dialogRef.close(response);
        }
      );
    }
  }

  update() {
    if (this.form.valid) {
      this.categoriesService.update(this.form.value as CorrespondentsCategory).pipe(take(1)).subscribe(
        res => { this.dialogRef.close(res); }
      );
    }
  }
}

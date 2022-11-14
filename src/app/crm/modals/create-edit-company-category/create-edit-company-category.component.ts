import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {CompanyCategoryService} from '../../services/company-category.service';
import {CompanyCategory, CompanyCategoryModule} from '../../models/company-category';

@Component({
  selector: 'pek-create-edit-company-category',
  templateUrl: './create-edit-company-category.component.html',
  styleUrls: ['./create-edit-company-category.component.scss']
})
export class CreateEditCompanyCategoryComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    name: [null, [Validators.required]],
    modules: [[]],
  });

  selectedModulesIds = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly companyCategoryService: CompanyCategoryService,
    private dialogRef: MatDialogRef<CreateEditCompanyCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, category: CompanyCategory }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.category.id));
      this.form.patchValue(<any>this.data.category);
      this.selectedModulesIds = this.data.category.modules.map(m => m.id);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createCompanyCategory();
        break;
      }
      case 'edit': {
        this.editCompanyCategory();
        break;
      }
    }
  }

  createCompanyCategory() {
    const send = <any>this.form.value;
    this.companyCategoryService.create(send).subscribe({
      next: category => this.dialogRef.close(category),
      error: () => this.isSaving = false,
    });
  }

  editCompanyCategory() {
    const send = <any>this.form.value;
    this.companyCategoryService.update(send).subscribe({
      next: category => this.dialogRef.close(category),
      error: () => this.isSaving = false,
    });
  }

  onSelectModule(modules: CompanyCategoryModule[]) {
    this.form.get('modules').patchValue(modules.map(m => m.id));
  }
}

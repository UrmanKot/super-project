import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {take} from 'rxjs/operators';
import {CrmDepartmentService} from '../../services/crm-department.service';
import {CrmDepartment} from '../../../business-trips/models/crm-department';

@Component({
  selector: 'pek-create-update-crm-department',
  templateUrl: './create-update-crm-department.component.html',
  styleUrls: ['./create-update-crm-department.component.scss']
})
export class CreateUpdateCrmDepartmentComponent implements OnInit {
  form: FormGroup;
  isSaving: boolean;
  constructor(
    private dialogRef: MatDialogRef<CreateUpdateCrmDepartmentComponent>,
    private fb: FormBuilder,
    private crmDepartmentService: CrmDepartmentService,
    @Inject(MAT_DIALOG_DATA) public data: { type: 'create' | 'edit', department: CrmDepartment }
  ) {

    this.form = this.fb.group({
      title: [null , [Validators.required]]
    });

    if (this.data.type === 'edit') {
      this.form.patchValue(this.data.department);
    }
  }

  ngOnInit(): void {
  }

  onSave() {
    if (this.data.type === 'create') {
      this.addDepartment();
    } else {
      this.editDepartment();
    }
  }

  addDepartment() {
    if (this.form.valid) {
      this.crmDepartmentService
        .create(this.form.value)
        .pipe(take(1))
        .subscribe((res) => {
          this.isSaving = true;
          this.dialogRef.close(res);
        });
    }
  }

  editDepartment() {
    if (this.form.valid) {
      this.form.value.id = this.data.department.id;
      this.crmDepartmentService
        .update( this.form.value.id, this.form.value)
        .pipe(take(1))
        .subscribe((res) => {
          this.isSaving = true;
          this.dialogRef.close(res);
        });
    }
  }
}

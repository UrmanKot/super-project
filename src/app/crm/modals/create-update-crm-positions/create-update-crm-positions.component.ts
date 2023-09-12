import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrmPositionsService} from '../../services/crm-positions.service';
import {take} from 'rxjs/operators';
import {CrmPosition} from '../../../business-trips/models/crm-position';
import {CrmDepartment} from '../../../business-trips/models/crm-department';

@Component({
  selector: 'pek-create-update-crm-positions',
  templateUrl: './create-update-crm-positions.component.html',
  styleUrls: ['./create-update-crm-positions.component.scss']
})
export class CreateUpdateCrmPositionsComponent implements OnInit {
  form: FormGroup;
  isSaving: boolean;

  constructor(
    private dialogRef: MatDialogRef<CreateUpdateCrmPositionsComponent>,
    private fb: FormBuilder,
    private crmPositionService: CrmPositionsService,
    @Inject(MAT_DIALOG_DATA) public data: { type: 'create' | 'edit', position: CrmPosition }
  ) {

    this.form = this.fb.group({
      title: [null, [Validators.required]],
      department: [null],
    });

    if (this.data.type === 'edit') {
      this.form.patchValue(this.data.position);
      if (this.data.position.department) {
        this.form.get('department').setValue(this.data.position.department.id);
      }
    }
  }

  ngOnInit(): void {
  }

  onSave() {
    if (this.data.type === 'create') {
      this.addPosition();
    } else {
      this.editPosition();
    }
  }

  addPosition() {
    if (this.form.valid) {
      this.crmPositionService
        .create(this.form.value)
        .pipe(take(1))
        .subscribe((res) => {
          this.isSaving = true;
          this.dialogRef.close(res);
        });
    }
  }

  editPosition() {
    if (this.form.valid) {
      this.form.value.id = this.data.position.id;
      this.crmPositionService
        .update(this.form.value.id, this.form.value)
        .pipe(take(1))
        .subscribe((res) => {
          this.isSaving = true;
          this.dialogRef.close(res);
        });
    }
  }

  setDepartment(department: CrmDepartment) {
    if (department) {
      this.form.get('department').setValue(department.id);
    } else {
      this.form.get('department').setValue(null);
    }
  }
}

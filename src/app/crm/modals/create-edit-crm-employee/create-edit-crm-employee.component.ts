import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {CrmEmployeeService} from '../../services/crm-employee.service';
import {CRMEmployee} from '../../models/crm-employee';

@Component({
  selector: 'pek-create-edit-crm-employee',
  templateUrl: './create-edit-crm-employee.component.html',
  styleUrls: ['./create-edit-crm-employee.component.scss']
})
export class CreateEditCrmEmployeeComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    position: [null],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly crmEmployeeService: CrmEmployeeService,
    private dialogRef: MatDialogRef<CreateEditCrmEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, employee: CRMEmployee }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.employee.id));
      this.form.patchValue(<any>this.data.employee);
      if (this.data.employee.position) {
        this.form.controls.position.patchValue(this.data.employee.position.id);
      }
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createEmployee();
        break;
      }

      case 'edit': {
        this.editEmployee();
        break;
      }
    }
  }

  createEmployee() {
    const send = <any>this.form.value;
    this.crmEmployeeService.create(send).subscribe({
      next: employee => this.dialogRef.close(employee),
      error: () => this.isSaving = false,
    });
  }

  editEmployee() {
    const send = <any>this.form.value;
    this.crmEmployeeService.update(send).subscribe({
      next: employee => this.dialogRef.close(employee),
      error: () => this.isSaving = false,
    });
  }

}

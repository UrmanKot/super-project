import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {EmployeeService} from '@shared/services/employee.service';
import {Employee} from '@shared/models/employee';
import {AdapterService} from '@shared/services/adapter.service';

@Component({
  selector: 'pek-create-edit-employee',
  templateUrl: './create-edit-employee.component.html',
  styleUrls: ['./create-edit-employee.component.scss']
})
export class CreateEditEmployeeComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    first_name: [null, [Validators.required]],
    last_name: [null, [Validators.required]],
    start_time: [null, [Validators.required]],
    position: [null, [Validators.required]],
    max_working_time: [null, [Validators.required, Validators.max(24), Validators.min(0)]]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly employeeService: EmployeeService,
    private readonly adapterService: AdapterService,
    private dialogRef: MatDialogRef<CreateEditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, employee: Employee }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, this.fb.control(this.data.employee.id));
      this.form.patchValue(<any>this.data.employee);
      this.form.get('position').patchValue(<any>this.data.employee.position.id);
      this.form.get('max_working_time').patchValue(<any>parseInt(this.data.employee.max_working_time, 10));
    }
  }

  onSave() {
    this.isSaving = true;

    const send = <any>{...this.form.value};
    console.log(send);

    if (typeof (send.start_time) !== 'string') {
      send.start_time = this.adapterService.msToTime(send.start_time.getTime());
    }

    send.max_working_time = send.max_working_time * 3600;

    switch (this.data.type) {
      case 'create': {
        this.createEmployee(send);
        break;
      }
      case 'edit': {
        this.editEmployee(send);
        break;
      }
    }
  }

  createEmployee(send: any) {
    this.employeeService.create(send).subscribe({
      next: employee => this.dialogRef.close(employee),
      error: () => this.isSaving = false,
    });
  }

  editEmployee(send: any) {
    this.employeeService.update(send).subscribe({
      next: employee => this.dialogRef.close(employee),
      error: () => this.isSaving = false,
    });
  }

  onSelectPosition(id: number) {
    this.form.get('position').patchValue(<any>id ?? null);
  }
}

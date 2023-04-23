import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from '@shared/services/employee.service';
import {AdapterService} from '@shared/services/adapter.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {Employee} from '@shared/models/employee';
import {MachineService} from '../../services/machine.service';
import {Machine} from '../../models/machine';

@Component({
  selector: 'pek-create-edit-machine',
  templateUrl: './create-edit-machine.component.html',
  styleUrls: ['./create-edit-machine.component.scss']
})
export class CreateEditMachineComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    max_working_time: [null, [Validators.required, Validators.max(24), Validators.min(0)]]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly machineService: MachineService,
    private readonly adapterService: AdapterService,
    private dialogRef: MatDialogRef<CreateEditMachineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, machine: Machine }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, this.fb.control(this.data.machine.id));
      this.form.patchValue(<any>this.data.machine);
      this.form.get('max_working_time').patchValue(<any>parseInt(this.data.machine.max_working_time, 10));
    }
  }

  onSave() {
    this.isSaving = true;

    const send = <any>{...this.form.value};

    send.max_working_time = send.max_working_time * 3600;

    switch (this.data.type) {
      case 'create': {
        this.createMachine(send);
        break;
      }
      case 'edit': {
        this.editMachine(send);
        break;
      }
    }
  }

  createMachine(send: any) {
    this.machineService.create(send).subscribe({
      next: machine => this.dialogRef.close(machine),
      error: () => this.isSaving = false,
    });
  }

  editMachine(send: any) {
    this.machineService.update(send).subscribe({
      next: machine => this.dialogRef.close(machine),
      error: () => this.isSaving = false,
    });
  }
}

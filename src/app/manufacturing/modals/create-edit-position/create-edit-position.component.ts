import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AdapterService} from '@shared/services/adapter.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {EmployeePosition} from '@shared/models/employee-position';
import {EmployeePositionService} from '@shared/services/employee-position.service';``

@Component({
  selector: 'pek-create-edit-position',
  templateUrl: './create-edit-position.component.html',
  styleUrls: ['./create-edit-position.component.scss']
})
export class CreateEditPositionComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    title: [null, [Validators.required]],
    rate: [null, [Validators.required, Validators.min(0)]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    private readonly employeePositionService: EmployeePositionService,
    private dialogRef: MatDialogRef<CreateEditPositionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, position: EmployeePosition }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, this.fb.control(this.data.position.id));
      this.form.patchValue(<any>this.data.position);
    }
  }

  onSave() {
    this.isSaving = true;

    const send = <any>{...this.form.value};

    switch (this.data.type) {
      case 'create': {
        this.createPosition(send);
        break;
      }
      case 'edit': {
        this.editPosition(send);
        break;
      }
    }
  }

  createPosition(send: any) {
    this.employeePositionService.create(send).subscribe({
      next: position => this.dialogRef.close(position),
      error: () => this.isSaving = false,
    });
  }

  editPosition(send: any) {
    this.employeePositionService.update(send).subscribe({
      next: position => this.dialogRef.close(position),
      error: () => this.isSaving = false,
    });
  }
}

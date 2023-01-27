import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CompanyCategoryService} from '../../../crm/services/company-category.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {Status} from '../../../procurement/models/status';
import {StatusService} from '../../../procurement/services/status.service';

@Component({
  selector: 'pek-create-edit-status',
  templateUrl: './create-edit-status.component.html',
  styleUrls: ['./create-edit-status.component.scss']
})
export class CreateEditStatusComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    value: ['', [Validators.required]],
    accounting_type: [<number>null, [Validators.required]],
    description: [''],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly statusService: StatusService,
    private dialogRef: MatDialogRef<CreateEditStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, statusType: number, isAutoStatus: boolean, status: Status }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.patchValue(<any>this.data.status);
      this.form.addControl(<any>'id', this.fb.control(this.data.status.id));
    }

    this.form.get('accounting_type').patchValue(this.data.statusType);
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createStatus();
        break;
      }
      case 'edit': {
        this.editStatus();
        break;
      }
    }
  }

  createStatus() {
    const send = <any>this.form.value;
    this.statusService.create(send).subscribe({
      next: status => this.dialogRef.close(status),
      error: () => this.isSaving = false,
    });
  }

  editStatus() {
    const send = <any>this.form.value;
    this.statusService.update(send).subscribe({
      next: status => this.dialogRef.close(status),
      error: () => this.isSaving = false,
    });
  }
}

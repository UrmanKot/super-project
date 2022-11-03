import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {SalesStatus} from '../../models/sales-chain';
import {SalesStatusService} from '../../services/sales-status.service';

@Component({
  selector: 'pek-create-edit-sales-status',
  templateUrl: './create-edit-sales-status.component.html',
  styleUrls: ['./create-edit-sales-status.component.scss']
})
export class CreateEditSalesStatusComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    name: ['', [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEditSalesStatusComponent>,
    private readonly salesStatusService: SalesStatusService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, status: SalesStatus }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.status.id));
      this.form.patchValue(this.data.status);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createSalesStatus();
        break;
      }
      case 'edit': {
        this.editSalesStatus();
        break;
      }
    }
  }

  createSalesStatus() {
    const send = <Partial<SalesStatus>>this.form.value;
    this.salesStatusService.create(send).subscribe({
      next: status => this.dialogRef.close(status),
      error: () => this.isSaving = false,
    });
  }

  editSalesStatus() {
    const send = <Partial<SalesStatus>>this.form.value;
    this.salesStatusService.update(send).subscribe({
      next: status => this.dialogRef.close(status),
      error: () => this.isSaving = false,
    });
  }

}

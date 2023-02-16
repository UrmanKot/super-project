import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SalesStatusService} from "../../services/sales-status.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {SalesChain} from "../../models/sales-chain";
import {AdapterService} from "@shared/services/adapter.service";
import {SalesChainService} from "../../services/sales-chain-service";

@Component({
  selector: 'pek-edit-statuses-modal',
  templateUrl: './edit-statuses-modal.component.html',
  styleUrls: ['./edit-statuses-modal.component.scss']
})
export class EditStatusesModalComponent implements OnInit {

  statuses;

  form = this.fb.group({
    status: [<number>null, Validators.required],
    date: [<Date>null, Validators.required],
    comment: ['', Validators.required]
  })
  isSaving:boolean = false;

  constructor(
    private fb: FormBuilder,
    private salesStatusService: SalesStatusService,
    private adapterService: AdapterService,
    private salesChainService: SalesChainService,
    private dialogRef: MatDialogRef<EditStatusesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, salesChain: SalesChain }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.salesStatusService.get().subscribe(status => {
        this.statuses = status
      })
      this.form.get('status').patchValue(this.data.salesChain.chain_status.status.id);
      this.form.get('date').patchValue(new Date(this.data.salesChain.chain_status.date))
      this.form.get('comment').patchValue(this.data.salesChain.comment);
      console.log(this.data)
    }
  }

  saveStatus() {
    if (this.form.valid) {
      this.isSaving = true;
      const send = {
        comment: this.form.get('comment').value,
        chain_status: {
          date: this.adapterService.dateAdapter(this.form.get('date').value),
          status: this.form.get('status').value
        }
      }
      this.salesChainService.updateStatus(this.data.salesChain.id, send).subscribe(res => this.dialogRef.close())
    }
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {FormBuilder, Validators} from "@angular/forms";
import {EventSalesChainService} from "../../services/event-sales-chain.service";
import {EventCompany} from "../../../crm/models/event-company";

@Component({
  selector: 'pek-edit-event-modal',
  templateUrl: './edit-event-modal.component.html',
  styleUrls: ['./edit-event-modal.component.scss']
})
export class EditEventModalComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    comment: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private eventSalesChainService: EventSalesChainService,
    private dialogRef: MatDialogRef<EditEventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, eventCompany: EventCompany }
  ) {
  }

  ngOnInit(): void {
    this.form.get('comment').patchValue(this.data.eventCompany.comment)
  }

  onSave() {
    if (this.form.valid) {
      this.isSaving = true;
      const send = {
        comment: this.form.get('comment').value
      }
      this.eventSalesChainService.updateComment(this.data.eventCompany.id, send).subscribe(res => this.dialogRef.close())
    }

  }
}

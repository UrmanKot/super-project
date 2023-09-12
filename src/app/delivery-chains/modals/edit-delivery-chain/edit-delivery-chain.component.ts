import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {User} from "../../../administration/models/user";
import {DeliveryChain} from "../../models/delivery-chain";
import {AdapterService} from "@shared/services/adapter.service";
import {DeliveryChainService} from "../../../warehouse/services/delivery-chain.service";
import {finalize} from "rxjs/operators";
import {Status} from "../../../procurement/models/status";

@Component({
  selector: 'pek-edit-delivery-chain',
  templateUrl: './edit-delivery-chain.component.html',
  styleUrls: ['./edit-delivery-chain.component.scss']
})
export class EditDeliveryChainComponent implements OnInit {
  isSaving = false;

  statuses: Status[] = [];
  isLoading = true;

  form: FormGroup = this.fb.group({
    status: [null, Validators.required],
    date: [null, Validators.required],
    comment: [null],
  });

  constructor(
    private dialogRef: MatDialogRef<EditDeliveryChainComponent>,
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    private readonly deliveryService: DeliveryChainService,
    @Inject(MAT_DIALOG_DATA) public data: { chain: DeliveryChain }
  ) { }

  ngOnInit(): void {
    this.form.get('status').patchValue(this.data.chain.status.id);
    if (this.data.chain.estimate_date) {
      this.form.get('date').patchValue(new Date(this.data.chain.estimate_date));
    }
    this.form.get('comment').patchValue(this.data.chain.comment);

    this.getStatuses();
  }

  getStatuses() {
    this.deliveryService.getStatuses().subscribe(statuses => {
      this.statuses = statuses;
      this.isLoading = false;
    });
  }

  onSave() {
    if (this.form.valid) {
      this.isSaving = true;
      const send = {
        comment: this.form.get('comment').value,
        estimate_date: this.adapterService.dateAdapter(this.form.get('date').value),
        status: {
          id: this.form.get('status').value,
        }
      };

      this.deliveryService
        .updateStatus(this.data.chain.id, send).pipe(
          finalize(() => this.isSaving = false)
      )
        .subscribe((res) => {
          this.dialogRef.close(res);
        });
    }
  }

}

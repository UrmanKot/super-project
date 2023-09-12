import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InvoiceService} from "../../../procurement/services/invoice.service";
import {finalize, tap} from "rxjs/operators";

@Component({
  selector: 'pek-distribute-invoice-price-modal',
  templateUrl: './distribute-invoice-price-modal.component.html',
  styleUrls: ['./distribute-invoice-price-modal.component.scss']
})
export class DistributeInvoicePriceModalComponent implements OnInit {

  isSaving = false;

  distributionForm: FormGroup = this.fb.group({
    distribution_price: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    public dialogRef: MatDialogRef<DistributeInvoicePriceModalComponent>,
    private readonly invoiceService: InvoiceService,
  ) {
  }

  ngOnInit(): void {
  }

  onSave() {
    this.isSaving = true;

    this.invoiceService.distribute(this.data.id, this.distributionForm.value).pipe(
      finalize(() => this.isSaving = false),
      tap(() => this.dialogRef.close(true))
    ).subscribe()
  }
}

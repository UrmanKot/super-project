import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InvoiceProduct} from "../../../procurement/models/invoice-product";
import {InvoiceProductService} from "../../../procurement/services/invoice-product.service";
import {AdapterService} from "@shared/services/adapter.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'pek-invoice-product-delivery-date',
  templateUrl: './invoice-product-delivery-date.component.html',
  styleUrls: ['./invoice-product-delivery-date.component.scss']
})
export class InvoiceProductDeliveryDateComponent implements OnInit {

  isSaving = false;
  isReset = false;

  form: FormGroup = this.fb.group({
    id: [null, Validators.required],
    rma_reception_date: [null, Validators.required],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public invoiceProduct: InvoiceProduct,
    private dialogRef: MatDialogRef<InvoiceProductDeliveryDateComponent>,
    private readonly fb: FormBuilder,
    private readonly invoiceProductService: InvoiceProductService,
    private readonly adapterService: AdapterService,
  ) { }

  ngOnInit(): void {
    this.form.get('id').patchValue(this.invoiceProduct.id);

    if (this.invoiceProduct.rma_reception_date) {
      this.form.get('reception_date').patchValue(new Date(this.invoiceProduct.rma_reception_date));
    }
  }

  save() {
    this.isSaving = true;

    const send = [];

    this.invoiceProduct.products.forEach(product => send.push({
      id: product.id,
      rma_reception_date: this.adapterService.dateAdapter(this.form.get('rma_reception_date').value)
    }));

    this.invoiceProductService.updateSeveralPartly(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  reset() {
    this.isReset = true;

    const send = [];

    this.invoiceProduct.products.forEach(product => send.push({
      id: product.id,
      rma_reception_date: null
    }));

    this.invoiceProductService.updateSeveralPartly(send).pipe(
      finalize(() => this.isReset = false)
    ).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

}

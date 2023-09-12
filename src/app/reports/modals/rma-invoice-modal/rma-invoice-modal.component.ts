import {Component, Inject, OnInit} from '@angular/core';
import {InvoiceProductService} from "../../../procurement/services/invoice-product.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalService} from "@shared/services/modal.service";
import {filter, finalize} from "rxjs/operators";

@Component({
  selector: 'pek-rma-invoice-modal',
  templateUrl: './rma-invoice-modal.component.html',
  styleUrls: ['./rma-invoice-modal.component.scss']
})
export class RmaInvoiceModalComponent implements OnInit {

  isSaving = false

  type: 'refund' | 'redelivery' = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { invoiceProducts: any },
    private dialogRef: MatDialogRef<RmaInvoiceModalComponent>,
    private readonly invoiceProductService: InvoiceProductService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
  }

  onSelect() {
    this.modalService.confirm('success').pipe(
      filter(Boolean)
    ).subscribe(() => {
      if (this.type === 'refund') {
        // действия на возврат денег
        this.isSaving = true;

        const ids = [];

        this.data.invoiceProducts.forEach(product => product.products.forEach(p => ids.push(p.id)));

        this.invoiceProductService.refund(ids).pipe(
          finalize(() => this.isSaving = false)
        ).subscribe(() => {
          this.dialogRef.close('refund');
        });
      } else {
        // если послали на возврат, то не давать нажать ределивери

        //   открывается модалка и спрашивается что делать с позицией, оставляем или отправляем назад
        this.invoiceProductService.redeliveryDialog(this.data.invoiceProducts).subscribe(value => {
          if (value) {
            this.isSaving = true;

            const sendData = {
              rma_status: 0,
              is_returned_to_supplier: false,
            };

            if (value === 'return') {

              sendData.is_returned_to_supplier = true;

              const send = [];

              this.data.invoiceProducts.forEach(product => product.products.forEach(p => send.push({
                id: p.id,
                ...sendData
              })));

              this.invoiceProductService.redelivery(send).pipe(
                finalize(() => this.isSaving = false)
              ).subscribe(res => {
                this.dialogRef.close('return');
              });
            } else {

              const send = [];

              this.data.invoiceProducts.forEach(product => product.products.forEach(p => send.push({
                id: p.id,
                ...sendData
              })));

              this.invoiceProductService.redelivery(send).pipe(
                finalize(() => this.isSaving = false)
              ).subscribe(res => {
                this.dialogRef.close('leave');
              });
            }
          }
        });
      }
    })
  }
}

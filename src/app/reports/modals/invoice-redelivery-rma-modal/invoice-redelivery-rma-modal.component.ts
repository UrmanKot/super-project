import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalService} from "@shared/services/modal.service";
import {InvoiceProduct} from "../../../procurement/models/invoice-product";

@Component({
  selector: 'pek-invoice-redelivery-rma-modal',
  templateUrl: './invoice-redelivery-rma-modal.component.html',
  styleUrls: ['./invoice-redelivery-rma-modal.component.scss']
})
export class InvoiceRedeliveryRmaModalComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<InvoiceRedeliveryRmaModalComponent>,
    private readonly modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: { invoiceProducts: InvoiceProduct[] },
  ) { }

  ngOnInit(): void {
  }

  redelivery(val: boolean) {
    this.modalService.confirm('success').subscribe(res => {
      if (res) {
        if (val) {
          this.dialogRef.close('return');
        } else {
          this.dialogRef.close('leave');
        }
      }
    });
  }

}

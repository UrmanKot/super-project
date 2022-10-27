import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseProduct} from '../../models/warehouse-product';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {OrderProduct} from '../../../procurement/models/order-product';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {finalize} from 'rxjs';
import {OrderProductService} from '../../../procurement/services/order-product.service';

@Component({
  selector: 'pek-qc-accept-to-warehouse',
  templateUrl: './qc-accept-to-warehouse.component.html',
  styleUrls: ['./qc-accept-to-warehouse.component.scss']
})
export class QcAcceptToWarehouseComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    locator: [null, Validators.required]
  });

  constructor(
    private readonly invoiceProductService: InvoiceProductService,
    private readonly orderProductService: OrderProductService,
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<QcAcceptToWarehouseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {items: InvoiceProduct[] | OrderProduct[], id: number, type: 'invoice' | 'order'},
  ) { }

  ngOnInit(): void {
  }

  onAccept() {
    if (this.data.type === 'invoice') {
      this.acceptInvoiceProducts();
    }

    if (this.data.type === 'order') {
      this.acceptOrderProducts();
    }
  }

  acceptOrderProducts() {
    this.isSaving = true;

    const send = this.data.items.map(item => {
      return {
        data: {
          order_product_id: item.id,
          quantity: item.passed_quantity,
          locator: this.form.get('locator').value
        }
      }
    })

    this.orderProductService.acceptSeveral(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }

  acceptInvoiceProducts() {
    this.isSaving = true;

    const send = this.data.items.map(item => {
      return {
        data: {
          invoice_product_id: item.id,
          quantity: item.passed_quantity,
          locator: this.form.get('locator').value
        }
      }
    })

    this.invoiceProductService.acceptSeveral(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }

  onSelectLocator(id: number) {
    this.form.get('locator').patchValue(<any>id);
  }
}

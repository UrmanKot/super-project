import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderProductService} from '../../services/order-product.service';
import {OrderProduct} from '../../models/order-product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';

@Component({
  selector: 'pek-edit-order-product-quantity',
  templateUrl: './edit-order-product-quantity.component.html',
  styleUrls: ['./edit-order-product-quantity.component.scss']
})
export class EditOrderProductQuantityComponent implements OnInit {
  isSaving = false;

  form: FormGroup = this.fb.group({
    id: [null, Validators.required],
    totalQuantity: [null, [Validators.required, Validators.min(0)]],
    request_date: [null, Validators.required],
  });
  initialQuantity: number;
  proformaInvoiceQuantity: number;
  invoiceQuantity: number;

  constructor(
    private readonly orderProductService: OrderProductService,
    private dialogRef: MatDialogRef<EditOrderProductQuantityComponent>,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public orderProduct: OrderProduct
  ) {
  }

  ngOnInit(): void {
    this.form.patchValue(this.orderProduct);
    this.initialQuantity = this.orderProduct.totalQuantity;
    this.proformaInvoiceQuantity = this.orderProduct.equal_order_products.reduce((sum, p) => sum + p.proforma_invoice_quantity, 0);
    this.invoiceQuantity = this.orderProduct.equal_order_products.reduce((sum, p) => sum + p.invoice_quantity, 0);
  }

  onSave() {
    this.isSaving = true;
    if (this.initialQuantity === this.form.get('totalQuantity').value) {
      this.dialogRef.close(this.orderProduct);
      return;
    }

    const isSubtract = this.initialQuantity > this.form.get('totalQuantity').value;
    let quantity = 0;
    if (isSubtract) {
      quantity = this.initialQuantity - this.form.get('totalQuantity').value;
    } else {
      quantity = this.form.get('totalQuantity').value - this.initialQuantity;
    }
    let productsToUpdateCalls: Observable<OrderProduct>[] = [];

    this.orderProduct.equal_order_products.sort((a, b) => new Date(b.request_date).getTime() - new Date(a.request_date).getTime()).forEach(product => {
      if (quantity > 0) {
        let dataToSend = {
          id: product.id,
          quantity: 0,
          order: product.order,
          reception_date: this.form.get('request_date').value
        };
        if (isSubtract) {
          const canSubtractInvoice = product.quantity - product.invoice_quantity;
          const canSubtractProformaInvoice = product.quantity - product.proforma_invoice_quantity;
          let canSubtractQuantity;
          if (canSubtractProformaInvoice > canSubtractInvoice) {
            canSubtractQuantity = canSubtractProformaInvoice;
          } else {
            canSubtractQuantity = canSubtractInvoice;
          }
          if (canSubtractQuantity >= quantity) {
            product.quantity -= quantity;
            quantity = 0;
            dataToSend.quantity = product.quantity;
          } else {
            quantity -= canSubtractQuantity;
            product.quantity = 0;
            dataToSend.quantity = product.quantity;
          }
        } else {
          product.quantity += quantity;
          quantity = 0;
          dataToSend.quantity = product.quantity;
        }
        if (dataToSend.quantity === 0) {
          dataToSend.order = null;
          dataToSend.quantity = product.initial_quantity;
        }
        productsToUpdateCalls.push(
          this.orderProductService.updatePartly(dataToSend as OrderProduct)
        );
      }
    });

    forkJoin([...productsToUpdateCalls]).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(orderProduct => {
      orderProduct[0].totalQuantity = this.form.get('totalQuantity').value
      this.dialogRef.close(orderProduct[0]);
    });
  }
}

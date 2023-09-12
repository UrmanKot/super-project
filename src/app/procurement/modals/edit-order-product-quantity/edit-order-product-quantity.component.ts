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
    request_date: [null],
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

    this.orderProductService.bulkUpdateQuantity({
      order_product_ids: this.orderProduct.equal_order_products.map(prod => prod.id),
      quantity_to_distribute: quantity,
      is_subtracted_from_free_quantity: isSubtract
    }).subscribe(() => {
      this.isSaving = false;
      this.orderProduct.totalQuantity = this.form.get('totalQuantity').value;
      this.dialogRef.close(this.orderProduct);
    });
  }
}

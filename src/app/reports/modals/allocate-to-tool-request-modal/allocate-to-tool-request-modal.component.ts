import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderProduct} from '../../../procurement/models/order-product';
import {OrderType} from '@shared/components/order-page/order-page.component';
import {InvoiceProduct, InvoiceProducts} from '../../../procurement/models/invoice-product';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';

@Component({
  selector: 'pek-allocate-to-tool-request-modal',
  templateUrl: './allocate-to-tool-request-modal.component.html',
  styleUrls: ['./allocate-to-tool-request-modal.component.scss']
})
export class AllocateToToolRequestModalComponent implements OnInit {

  isSaving = false;

  distributionForm: FormGroup = this.fb.group({
    distribution_price: [null, Validators.required],
  });

  form: FormGroup = this.fb.group({
    area_locator_id: [null, [Validators.required]],
    order_products: this.fb.array([]),
  });
  invoiceProducts: InvoiceProduct[] = [];

  constructor(
      private fb: FormBuilder,
      public dialogRef: MatDialogRef<AllocateToToolRequestModalComponent>,
      private invoiceProductService: InvoiceProductService,
      @Inject(MAT_DIALOG_DATA) public data: { products: InvoiceProduct[], orderType: OrderType }
  ) {
  }

  get products() {
    return this.form.get('order_products') as FormArray;
  }

  ngOnInit(): void {
    this.invoiceProducts = this.data.products.map(p => p);
    this.invoiceProducts.forEach(p => {
      console.log('p.totalFreeQuantity', p.totalFreeQuantity);
      console.log('product', p);

      const product = this.fb.group({
        id: p.id,
        allocate_quantity: [0, [Validators.required, Validators.min(1), Validators.max(p.totalFreeQuantity)]],
      });

      this.products.push(product);
    });
  }

  onSave() {
    const dataToSend: { invoice_product_id: number; quantity: number }[] = [];

    (this.products.value as { id: number, allocate_quantity: number }[]).forEach(invoiceProduct => {
      dataToSend.push({
        invoice_product_id: invoiceProduct.id,
        quantity: invoiceProduct.allocate_quantity
      });
    });
    this.isSaving = true;
    this.invoiceProductService.prepareInvoiceProductsForAllocation(
      {
        area_locator_id: this.form.get('area_locator_id').value,
        invoice_products:  dataToSend}).subscribe(() => {
          this.dialogRef.close(true);
    });
  }
}

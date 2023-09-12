import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {
  CombinedInvoiceProduct
} from '../../components/warehouse-isolator/components/warehouse-isolator-invoices/warehouse-isolator-invoices.component';
import {finalize} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'pek-isolator-write-off-invoice-product',
  templateUrl: './isolator-write-off-invoice-product.component.html',
  styleUrls: ['./isolator-write-off-invoice-product.component.scss']
})
export class IsolatorWriteOffInvoiceProductComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    id: [<number>null, Validators.required],
    quantity_to_write_off: [<number>0, [Validators.required, Validators.min(0), Validators.max(this.data.invoiceProduct.combinedNotPassedQuantity)]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<IsolatorWriteOffInvoiceProductComponent>,
    private readonly invoiceProductService: InvoiceProductService,
    @Inject(MAT_DIALOG_DATA) public data: { invoiceProduct: CombinedInvoiceProduct }
  ) {
  }

  ngOnInit(): void {
    this.form.get('id').patchValue(this.data.invoiceProduct.id);
    this.form.get('quantity_to_write_off').patchValue(this.data.invoiceProduct.quantity_to_write_off ?? 0);
  }

  onSave() {
    // this.isSaving = true;
    // this.invoiceProductService.updatePartly(this.form.value).pipe(
    //   finalize(() => this.isSaving = false),
    //   tap(invoiceProduct => this.dialogRef.close(invoiceProduct))
    // ).subscribe();

    // console.log(this.data.invoiceProduct.filteredInvoiceProducts);

    let quantity = +this.form.get('quantity_to_write_off').value;
    const send: {id: number, quantity_to_write_off: number}[] = [];

    const totalLimit = this.data.invoiceProduct.products.reduce((sum, item) => sum + item.not_passed_quantity, 0);

    if (quantity <= totalLimit) {
      let distributedValue = quantity;
      this.data.invoiceProduct.products.forEach(item => {
        if (distributedValue >= item.not_passed_quantity) {
          send.push({
            id: item.id,
            quantity_to_write_off: item.not_passed_quantity
          })
          distributedValue -= item.not_passed_quantity;
        } else {
          send.push({
            id: item.id,
            quantity_to_write_off: distributedValue
          })
          distributedValue = 0;
        }
      });
      this.data.invoiceProduct.products.forEach(item => {
        if (distributedValue > 0 && distributedValue > item.not_passed_quantity) {
          send.find(p => p.id === item.id).quantity_to_write_off += item.not_passed_quantity
          distributedValue -= item.not_passed_quantity;
        } else if (distributedValue > 0) {
          send.find(p => p.id === item.id).quantity_to_write_off += distributedValue
          distributedValue = 0;
        }
      })
    }

    this.isSaving = true;
    this.invoiceProductService.severalUpdatePartly(send).pipe(
      finalize(() => this.isSaving = false),
      tap(invoiceProduct => this.dialogRef.close(invoiceProduct))
    ).subscribe();
  }
}

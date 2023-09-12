import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {finalize} from 'rxjs';
import {tap} from 'rxjs/operators';
import {OrderProduct} from '../../../procurement/models/order-product';
import {OrderProductService} from '../../../procurement/services/order-product.service';

@Component({
  selector: 'pek-isolator-write-off-order-product',
  templateUrl: './isolator-write-off-order-product.component.html',
  styleUrls: ['./isolator-write-off-order-product.component.scss']
})
export class IsolatorWriteOffOrderProductComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    id: [<number>null, Validators.required],
    quantity_to_write_off: [<number>0, [Validators.required, Validators.min(0), Validators.max(this.data.orderProduct.not_passed_quantity)]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<IsolatorWriteOffOrderProductComponent>,
    private readonly orderProductService: OrderProductService,
    @Inject(MAT_DIALOG_DATA) public data: { orderProduct: OrderProduct }
  ) {
  }

  ngOnInit(): void {
    this.form.get('id').patchValue(this.data.orderProduct.id);
    this.form.get('quantity_to_write_off').patchValue(this.data.orderProduct.quantity_to_write_off ?? 0);
  }

  onSave() {
    this.isSaving = true;
    this.orderProductService.updatePartly(this.form.value).pipe(
      finalize(() => this.isSaving = false),
      tap(invoiceProduct => this.dialogRef.close(invoiceProduct))
    ).subscribe();
  }

}

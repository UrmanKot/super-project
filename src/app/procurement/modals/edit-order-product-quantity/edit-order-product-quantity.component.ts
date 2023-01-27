import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderProductService} from '../../services/order-product.service';
import {OrderProduct} from '../../models/order-product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'pek-edit-order-product-quantity',
  templateUrl: './edit-order-product-quantity.component.html',
  styleUrls: ['./edit-order-product-quantity.component.scss']
})
export class EditOrderProductQuantityComponent implements OnInit {
  isSaving = false;

  form: FormGroup = this.fb.group({
    id: [null, Validators.required],
    quantity: [null, [Validators.required, Validators.min(1)]],
    request_date: [null, Validators.required],
  });

  constructor(
    private readonly orderProductService: OrderProductService,
    private dialogRef: MatDialogRef<EditOrderProductQuantityComponent>,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public orderProduct: OrderProduct
  ) {
  }

  ngOnInit(): void {
    this.form.patchValue(this.orderProduct);
  }

  onSave() {
    this.isSaving = true;
    this.orderProductService.updatePartly(this.form.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(orderProduct => {
      this.dialogRef.close(orderProduct);
    });
  }
}

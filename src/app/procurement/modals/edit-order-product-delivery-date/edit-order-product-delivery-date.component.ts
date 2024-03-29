import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderProductService} from '../../services/order-product.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderProduct} from '../../models/order-product';
import {finalize} from 'rxjs/operators';
import {ModalService} from '@shared/services/modal.service';
import {forkJoin, Observable} from 'rxjs';

@Component({
  selector: 'pek-edit-order-product-delivery-date',
  templateUrl: './edit-order-product-delivery-date.component.html',
  styleUrls: ['./edit-order-product-delivery-date.component.scss']
})
export class EditOrderProductDeliveryDateComponent implements OnInit {
  isSaving = false;
  isReset = false;

  form: FormGroup = this.fb.group({
    id: [null, Validators.required],
    reception_date: [null, Validators.required],
  });

  constructor(
    private readonly orderProductService: OrderProductService,
    private dialogRef: MatDialogRef<EditOrderProductDeliveryDateComponent>,
    private readonly fb: FormBuilder,
    private readonly modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public orderProduct: OrderProduct
  ) {
  }

  ngOnInit(): void {
    this.form.get('id').patchValue(this.orderProduct.id);

    if (this.orderProduct.reception_date) {
      this.form.get('reception_date').patchValue(new Date(this.orderProduct.reception_date));
    }
  }

  onSave() {
    this.isSaving = true;
    this.save();
  }

  onReset() {
    this.modalService.confirm('danger', 'Reset').subscribe(confirm => {
      if (confirm) {
        this.isReset = true;
        this.form.get('reception_date').patchValue(null);
        this.save();
      }
    });
  }

  save() {
    let productsToUpdateCalls: Observable<OrderProduct>[] = [];
    this.orderProduct.equal_order_products.forEach(product => {
      const dataToSend = {
        id: product.id,
        reception_date: this.form.get('reception_date').value
      };
      productsToUpdateCalls.push(
        this.orderProductService.updatePartly(dataToSend as OrderProduct)
      );
    });
    forkJoin([...productsToUpdateCalls]).pipe(
      finalize(() => {
        this.isSaving = false;
        this.isReset = false;
      })
    ).subscribe(orderProduct => {
      this.dialogRef.close(orderProduct[0]);
    });
  }
}

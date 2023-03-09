import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {EInvoiceProductQualityControl} from '../../../procurement/models/invoice-product';

@Component({
  selector: 'pek-quality-control-modal',
  templateUrl: './quality-control-modal.component.html',
  styleUrls: ['./quality-control-modal.component.scss']
})
export class QualityControlModalComponent implements OnInit {
  form: FormGroup;
  quantity: number;
  isPending = false;

  constructor(
    private dialogRef: MatDialogRef<QualityControlModalComponent>,
    private fb: FormBuilder,
    private invoiceProductService: InvoiceProductService,
    private orderProductService: OrderProductService,
    @Inject(MAT_DIALOG_DATA) public data: { type: any, entity: any, isOwnProduction: boolean }
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.data.entity.id],
      passed_quantity: [this.data.entity.passed_quantity, [Validators.max(this.data.entity.quantity), Validators.min(0), Validators.required]],
      not_passed_quantity: [this.data.entity.not_passed_quantity, [Validators.max(this.data.entity.quantity), Validators.min(0), Validators.required]],
    });

    this.quantity = this.data.entity.quantity;
  }

  onComplete() {
    if (this.form.valid) {
      if (this.form.value.passed_quantity + this.form.value.not_passed_quantity === this.data.entity.quantity) {
        if (this.form.value.passed_quantity === this.data.entity.quantity) {
          this.form.addControl('quality_control', new FormControl(EInvoiceProductQualityControl.PASSED));
        } else if (this.form.value.not_passed_quantity === this.data.entity.quantity) {
          this.form.addControl('quality_control', new FormControl(EInvoiceProductQualityControl.NOT_PASSED));
        } else if (this.form.value.not_passed_quantity + this.form.value.passed_quantity === this.data.entity.quantity) {
          this.form.addControl('quality_control', new FormControl(EInvoiceProductQualityControl.PARTLY_PASSED));
        }
      }

      this.isPending = true;

      if (this.form.value.not_passed_quantity + this.form.value.passed_quantity === this.data.entity.quantity) {
        if (this.data.isOwnProduction) {
          this.orderProductService.updatePartly(this.form.value).subscribe(() => {
            this.isPending = false;
            this.dialogRef.close(true);
          });
        } else {
          this.invoiceProductService.updatePartly(this.form.value).subscribe(() => {
            this.isPending = false;
            this.dialogRef.close(true);
          });
        }
      }
    }
  }

  isDisableCompleteButton() {
    return +this.form.get('passed_quantity').value + +this.form.get('not_passed_quantity').value !== +this.quantity;
  }
}

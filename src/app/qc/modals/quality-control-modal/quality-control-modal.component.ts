import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {EInvoiceProductQualityControl} from '../../../procurement/models/invoice-product';
import {OrderProduct} from '../../../procurement/models/order-product';
import {forkJoin, Observable} from 'rxjs';

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
      passed_quantity: [this.data.entity.totalQuantityPassed, [Validators.max(this.data.entity.totalQuantity), Validators.min(0), Validators.required]],
      not_passed_quantity: [this.data.entity.totalQuantityNotPassed, [Validators.max(this.data.entity.totalQuantity), Validators.min(0), Validators.required]],
    });
    this.quantity = this.data.entity.totalQuantity;
  }

  onComplete() {
    if (this.form.valid) {
      let totalPassedQuantity = this.form.get('passed_quantity').value;
      let totalNotPassedQuantity = this.form.get('not_passed_quantity').value;
      const totalQuantity = this.quantity;
      let products;
      if (this.data.isOwnProduction) {
        products = this.data.entity.orderProducts;
      } else {
        products = this.data.entity.invoiceProducts;
      }
      const dataToSendCalls: Observable<any>[] = [];
      products.sort((a, b) => {
        return a.id - b.id;
      })
        .forEach(prod => {
          let passedQuantity = 0;
          let notPassedQuantity = 0;
          let canFillQuantity = prod.quantity;

          // Update accepted quantities
          if (totalPassedQuantity <= canFillQuantity) {
            canFillQuantity -= totalPassedQuantity;
            passedQuantity += totalPassedQuantity;
            totalPassedQuantity = 0;
          } else {
            totalPassedQuantity -= canFillQuantity;
            passedQuantity += canFillQuantity;
            canFillQuantity = 0;
          }

          // Update NOT accepted quantities
          if (totalNotPassedQuantity <= canFillQuantity) {
            canFillQuantity -= totalNotPassedQuantity;
            notPassedQuantity += totalNotPassedQuantity;
            totalNotPassedQuantity = 0;
          } else {
            totalNotPassedQuantity -= canFillQuantity;
            notPassedQuantity += canFillQuantity;
            canFillQuantity = 0;
          }

          const updateProduct = {
            id: prod.id,
            passed_quantity: passedQuantity,
            not_passed_quantity: notPassedQuantity
          };
          if (this.data.isOwnProduction) {
            dataToSendCalls.push(this.orderProductService.updatePartly(updateProduct as OrderProduct));
          } else {
            dataToSendCalls.push(this.invoiceProductService.updatePartly(updateProduct));
          }
          // dataToSend.push(updateProduct);
        });

      if (this.form.value.passed_quantity + this.form.value.not_passed_quantity === this.data.entity.totalQuantity) {
        if (this.form.value.passed_quantity === this.data.entity.totalQuantity) {
          this.form.addControl('quality_control', new FormControl(EInvoiceProductQualityControl.PASSED));
        } else if (this.form.value.not_passed_quantity === this.data.entity.totalQuantity) {
          this.form.addControl('quality_control', new FormControl(EInvoiceProductQualityControl.NOT_PASSED));
        } else if (this.form.value.not_passed_quantity + this.form.value.passed_quantity === this.data.entity.totalQuantity) {
          this.form.addControl('quality_control', new FormControl(EInvoiceProductQualityControl.PARTLY_PASSED));
        }
      }

      this.isPending = true;
      forkJoin([...dataToSendCalls]).subscribe(res => {
        this.isPending = false;
        this.dialogRef.close(true);
      });
      // if (this.form.value.passed_quantity + this.form.value.not_passed_quantity === this.data.entity.totalQuantity) {
      //   console.log('this.form.value', this.form.value);
      //
      //   if (this.data.isOwnProduction) {
      //     this.orderProductService.updatePartly(this.form.value).subscribe(() => {
      //       this.isPending = false;
      //       this.dialogRef.close(true);
      //     });
      //   } else {
      //     this.invoiceProductService.updatePartly(this.form.value).subscribe(() => {
      //       this.isPending = false;
      //       this.dialogRef.close(true);
      //     });
      //   }
      // }
    }
  }

  isDisableCompleteButton() {
    return +this.form.get('passed_quantity').value + +this.form.get('not_passed_quantity').value !== +this.quantity;
  }
}

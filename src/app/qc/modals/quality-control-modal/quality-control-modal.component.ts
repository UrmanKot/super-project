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
      if (this.data.isOwnProduction) {
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

            let updateProduct: { id: number, passed_quantity: number, not_passed_quantity: number, quality_control?: EInvoiceProductQualityControl } = {
              id: prod.id,
              passed_quantity: passedQuantity,
              not_passed_quantity: notPassedQuantity,
            };
            console.log('updateProduct.passed_quantity', updateProduct.passed_quantity);
            console.log('updateProduct.passed_quantity', prod.quantity);
            if (updateProduct.passed_quantity === 0 && updateProduct.not_passed_quantity === 0) {
              updateProduct.quality_control = null;
            } else {
              if (updateProduct.passed_quantity === prod.quantity) {
                updateProduct.quality_control = EInvoiceProductQualityControl.PASSED;
              } else if (updateProduct.not_passed_quantity === prod.quantity) {
                updateProduct.quality_control = EInvoiceProductQualityControl.NOT_PASSED;
              } else if (updateProduct.not_passed_quantity + updateProduct.passed_quantity === prod.quantity) {
                updateProduct.quality_control = EInvoiceProductQualityControl.PARTLY_PASSED;
              }
            }

            dataToSendCalls.push(this.orderProductService.updatePartly(updateProduct as OrderProduct));
          });

        this.isPending = true;
        forkJoin([...dataToSendCalls]).subscribe(res => {
          this.isPending = false;
          this.dialogRef.close(true);
        });
      } else {
        this.updateQualityControl();
      }
    }
  }

  updateQualityControl() {
    console.log(this.form.value);
    if (this.form.valid) {
      const currentQuantities = this.form.get('passed_quantity').value + this.form.get('not_passed_quantity').value;
      const totalQuantityOriginal = this.data.entity.invoiceProducts.reduce((sum, p) => sum + p.quantity, 0);
      const totalPassedQuantity = this.data.entity.invoiceProducts.reduce((sum, p) => sum + p.accepted_quantity, 0) + this.form.get('passed_quantity').value;
      let passedQuantity = this.form.get('passed_quantity').value;
      if (currentQuantities < totalQuantityOriginal) {
        // Учесть RMA accepted_quantities
        passedQuantity = totalPassedQuantity;
      }

      const dataToSend = {
        invoice_products_ids: this.data.entity.invoiceProducts.map(prod => prod.id),
        passed_quantity: passedQuantity,
        not_passed_quantity: this.form.get('not_passed_quantity').value
      }

      this.isPending = true;

      this.invoiceProductService.bulkUpdateQualityControl(dataToSend).subscribe(res => {
        this.isPending = false;
        this.dialogRef.close(true);
      });
    }

  }

  isDisableCompleteButton() {
    // Can allow if passed_quantity not_passed_quantity quantity is 0's or
    // passed_quantity + not_passed_quantity equals quantity

    const isNotFillingAll = +this.form.get('passed_quantity').value +
      +this.form.get('not_passed_quantity').value !== +this.quantity;

    const isSetToZeroes = +this.form.get('passed_quantity').value === 0 &&
      +this.form.get('not_passed_quantity').value === 0;

    return isNotFillingAll && !isSetToZeroes;
  }
}

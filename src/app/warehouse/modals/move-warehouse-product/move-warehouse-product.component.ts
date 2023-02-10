import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseProductService} from '../../services/warehouse-product.service';
import {WarehouseProduct} from '../../models/warehouse-product';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-move-warehouse-product',
  templateUrl: './move-warehouse-product.component.html',
  styleUrls: ['./move-warehouse-product.component.scss']
})
export class MoveWarehouseProductComponent implements OnInit {
  isSaving = false;

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<MoveWarehouseProductComponent>,
    private readonly warehouseProductService: WarehouseProductService,
    @Inject(MAT_DIALOG_DATA) public product: WarehouseProduct,
  ) {
  }

  ngOnInit(): void {
    if (this.product.serial_numbers) {
      this.form = this.fb.group({
        quantity: [0, [Validators.max(this.product.quantity ? this.product.quantity : this.product.total_locator_quantity), Validators.min(1), Validators.required]],
        nomenclature: [this.product.nomenclature.id, Validators.required],
        to_locator: [null, Validators.required],
        from_locator: [this.product.locator.id, Validators.required],
      });
    } else {
      this.form = this.fb.group({
        quantity: [0, [Validators.max(this.product.quantity ? this.product.quantity : this.product.total_locator_quantity), Validators.min(1), Validators.required]],
        to_locator: [null, Validators.required],
      });
    }
  }

  selectLocator(id: number) {
    this.form.get('to_locator').patchValue(<any>id);
  }

  onMoveProduct() {
    if (this.form.valid) {
      this.isSaving = true;

      if (this.product.serial_numbers) {
        this.warehouseProductService.moveSerial(<Partial<WarehouseProduct>>this.form.value).pipe(
          finalize(() => this.isSaving = false)
        ).subscribe(() => this.dialogRef.close(true));
      }
      if (!this.product.serial_numbers) {
        const send = [];
        let totalQuantity = this.form.get('quantity').value;

        this.product.extra_info.forEach(item => {
          let actualQuantity = 0;

          if (totalQuantity <= item.quantity && totalQuantity > 0) {
            actualQuantity = item.quantity - (item.quantity - totalQuantity);
            totalQuantity -= actualQuantity;
          } else if (totalQuantity > 0) {
            actualQuantity = item.quantity;
            totalQuantity -= item.quantity;
          }

          send.push({
            id: item.id,
            to_locator: this.form.get('to_locator').value,
            quantity: actualQuantity,
          });
        });

        this.warehouseProductService.moveWarehouseSeveralBulk(<Partial<WarehouseProduct>[]>send).pipe(
          finalize(() => this.isSaving = false)
        ).subscribe(() => this.dialogRef.close(true));
      }
    }
  }

  onChangeQuantity(value: any) {
    const maxQuantity = this.product.quantity ? this.product.quantity : this.product.total_locator_quantity;
    if (value > maxQuantity) {
      this.form.get('quantity').patchValue(maxQuantity);
    }
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseProductService} from '../../services/warehouse-product.service';
import {WarehouseProduct, WarehouseProducts} from '../../models/warehouse-product';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-move-warehouse-product',
  templateUrl: './move-warehouse-product.component.html',
  styleUrls: ['./move-warehouse-product.component.scss']
})
export class MoveWarehouseProductComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    quantity: [0, [Validators.max(this.product.quantity ? this.product.quantity : this.product.total_locator_quantity), Validators.min(1), Validators.required]],
    nomenclature: [this.product.nomenclature.id, Validators.required],
    to_locator: [null, Validators.required],
    from_locator: [this.product.locator.id, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<MoveWarehouseProductComponent>,
    private readonly warehouseProductService: WarehouseProductService,
    @Inject(MAT_DIALOG_DATA) public product: WarehouseProduct,
  ) {
  }

  ngOnInit(): void {
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
        this.warehouseProductService.moveBulk(<Partial<WarehouseProduct>>this.form.value).pipe(
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

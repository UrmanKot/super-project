import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseProduct} from '../../../warehouse/models/warehouse-product';
import {Product} from '../../../product-structure/models/product';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';

@Component({
  selector: 'pek-product-move-to-area-locator',
  templateUrl: './product-move-to-area-locator.component.html',
  styleUrls: ['./product-move-to-area-locator.component.scss']
})
export class ProductMoveToAreaLocatorComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public product: WarehouseProduct,
    private readonly dialogRef: MatDialogRef<ProductMoveToAreaLocatorComponent>,
    private warehouseProductService: WarehouseProductService,
  ) {
    this.form = this.fb.group({
      quantity: [0, [Validators.max(this.product.total_area_locator_quantity), Validators.min(1)]],
      nomenclature: [Number(this.product.nomenclature.id), Validators.required],
      to_area_locator: [null, Validators.required],
      from_area_locator: [Number(this.product.area_locator.id), Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('this.form', this.form.value);
  }

  onChangeQuantity(value) {
    const maxQuantity = this.product.total_area_locator_quantity;
    if (value > maxQuantity) {
      this.form.get('quantity').patchValue(maxQuantity);
    }
  }

  onMove() {
    if (this.form.valid) {
      this.warehouseProductService.moveBulk(this.form.value).subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }
}

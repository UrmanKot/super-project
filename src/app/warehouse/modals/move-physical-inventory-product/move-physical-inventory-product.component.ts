import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PhysicalInventoryService} from '../../services/physical-inventory.service';
import {Product} from '../../../product-structure/models/product';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-move-physical-inventory-product',
  templateUrl: './move-physical-inventory-product.component.html',
  styleUrls: ['./move-physical-inventory-product.component.scss']
})
export class MovePhysicalInventoryProductComponent implements OnInit {
  isSaving = false;

  form: FormGroup = this.fb.group({
    new_locator_id: [null, Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<MovePhysicalInventoryProductComponent>,
    private readonly physicalInventoryService: PhysicalInventoryService,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) {
  }

  ngOnInit(): void {
  }

  selectLocator(id: number) {
    this.form.get('new_locator_id').patchValue(id);
  }

  onMoveProduct() {
    this.isSaving = true;
    this.physicalInventoryService.movePhysicalInventoryProduct(this.data.id, this.form.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(() => this.dialogRef.close(true));
  }
}

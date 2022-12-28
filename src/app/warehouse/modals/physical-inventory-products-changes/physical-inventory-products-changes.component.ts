import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InventoryProduct} from '../../models/physical-inventory';

@Component({
  selector: 'pek-physical-inventory-products-changes',
  templateUrl: './physical-inventory-products-changes.component.html',
  styleUrls: ['./physical-inventory-products-changes.component.scss']
})
export class PhysicalInventoryProductsChangesComponent implements OnInit {
  nonScannedSerialNumbers: InventoryProduct[];
  notMatchingQuantity: InventoryProduct[];
  constructor(
    private readonly dialogRef: MatDialogRef<PhysicalInventoryProductsChangesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InventoryProduct[],
  ) { }

  ngOnInit(): void {
    // console.log('this.data', this.data);
    this.nonScannedSerialNumbers = this.data.filter(invProduct => invProduct.serial_number);
    this.notMatchingQuantity = this.data.filter(invProduct => !invProduct.serial_number);
  }

  onAcceptChanges() {
    this.dialogRef.close(true);
  }
}

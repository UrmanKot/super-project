import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../models/product';

@Component({
  selector: 'pek-serial-confirmation',
  templateUrl: './serial-confirmation.component.html',
  styleUrls: ['./serial-confirmation.component.scss']
})
export class SerialConfirmationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<SerialConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product, warehouseQuantity: number }
  ) {
  }

  ngOnInit(): void {
    console.log(this.data.warehouseQuantity);
  }

}

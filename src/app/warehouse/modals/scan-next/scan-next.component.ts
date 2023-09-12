import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WarehouseProductExtraInfo} from '../../models/warehouse-product';

@Component({
  selector: 'pek-scan-next',
  templateUrl: './scan-next.component.html',
  styleUrls: ['./scan-next.component.scss']
})
export class ScanNextComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public read: boolean,
    private readonly dialogRef: MatDialogRef<ScanNextComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {productFound: boolean},
  ) { }

  ngOnInit(): void {
  }

  scanNext() {
    this.dialogRef.close(true);
  }
}

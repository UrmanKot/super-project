import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Nomenclature} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-found-product-in-qc',
  templateUrl: './found-product-in-qc.component.html',
  styleUrls: ['./found-product-in-qc.component.scss']
})
export class FoundProductInQcComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FoundProductInQcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nomenclature: Nomenclature }
  ) { }

  ngOnInit(): void {
  }

  onAccept() {
    this.dialogRef.close(true)
  }
}

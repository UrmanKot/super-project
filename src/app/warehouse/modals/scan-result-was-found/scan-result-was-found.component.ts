import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'pek-scan-result-was-found',
  templateUrl: './scan-result-was-found.component.html',
  styleUrls: ['./scan-result-was-found.component.scss']
})
export class ScanResultWasFoundComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { nomenclature: { code: string, name: string } },
    private readonly dialogRef: MatDialogRef<ScanResultWasFoundComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  scanNext() {
    this.dialogRef.close(true);
  }
}

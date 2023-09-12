import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'pek-scan-result-no-result',
  templateUrl: './scan-result-no-result.component.html',
  styleUrls: ['./scan-result-no-result.component.scss']
})
export class ScanResultNoResultComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public read: boolean,
    private readonly dialogRef: MatDialogRef<ScanResultNoResultComponent>,
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

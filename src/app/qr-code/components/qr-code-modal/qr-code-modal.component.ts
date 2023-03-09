import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {QrCode, QrCodes} from '../../qr-code';

@Component({
  selector: 'pek-qr-code-modal',
  templateUrl: './qr-code-modal.component.html',
  styleUrls: ['./qr-code-modal.component.scss']
})
export class QrCodeModalComponent implements OnInit {

  qrCodes: QrCodes
  qrCodesWithOutSerial: QrCode[] = [];
  qrCodesWithSerial: QrCode[] = [];

  constructor(
    private dialogRef: MatDialogRef<QrCodeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {qrCodes: QrCodes, orderId: number, invoiceId: string}
  ) {
  }

  ngOnInit(): void {
    this.qrCodes = this.data.qrCodes;
    this.qrCodesWithOutSerial = this.qrCodes.without_serial;
    this.qrCodesWithSerial = this.qrCodes.with_serial;
  }

  onPrint() {
    window.print();
  }

}

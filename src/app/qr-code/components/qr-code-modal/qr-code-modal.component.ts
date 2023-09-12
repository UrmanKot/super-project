import {Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {QrCode, QrCodes} from '../../qr-code';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'pek-qr-code-modal',
  templateUrl: './qr-code-modal.component.html',
  styleUrls: ['./qr-code-modal.component.scss']
})
export class QrCodeModalComponent implements OnInit {
  @ViewChild('tt') tt: ElementRef

  qrCodes: QrCodes
  qrCodesWithOutSerial: QrCode[] = [];
  qrCodesWithSerial: QrCode[] = [];
  isPrintLoading = false;

  constructor(
    private dialogRef: MatDialogRef<QrCodeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {qrCodes: QrCodes, orderId: number, invoiceId: string},
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
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

  @HostListener('window:beforeprint', [])
  onWindowBeforePrint() {
    this.document.documentElement.classList.remove('cdk-global-scrollblock');

    const element = this.tt.nativeElement.cloneNode(true);

    while (element.classList.length > 0) {
      element.classList.remove(element.classList.item(0));
    }

    element.classList.add('qr-codes-print-box')

    document.body.classList.add('qr-codes-print')
    this.renderer.appendChild(document.body, element);
  }


  @HostListener('window:afterprint', [])
  onWindowAfterPrint() {
    const modalBox = document.body.querySelector('.qr-codes-print-box');
    document.body.removeChild(modalBox);

    while (document.body.classList.length > 0) {
      document.body.classList.remove(document.body.classList.item(0));
    }

    this.document.documentElement.classList.add('cdk-global-scrollblock');
  }

  ngOnDestroy(): void {
    this.document.documentElement.classList.remove('cdk-global-scrollblock');
  }
}

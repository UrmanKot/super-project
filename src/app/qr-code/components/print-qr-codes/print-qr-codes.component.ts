import {Component, Input, OnInit} from '@angular/core';
import {QrCodes} from '../../qr-code';

@Component({
  selector: 'pek-print-qr-codes',
  templateUrl: './print-qr-codes.component.html',
  styleUrls: ['./print-qr-codes.component.scss']
})
export class PrintQrCodesComponent implements OnInit {
  @Input() qrCodes: QrCodes;

  constructor() { }

  ngOnInit(): void {
  }

}

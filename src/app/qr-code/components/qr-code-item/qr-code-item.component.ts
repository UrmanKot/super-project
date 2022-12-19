import {Component, Input, OnInit} from '@angular/core';
import {QrCode, QrCodes} from '../../qr-code';

@Component({
  selector: 'pek-qr-code-item',
  templateUrl: './qr-code-item.component.html',
  styleUrls: ['./qr-code-item.component.scss']
})
export class QrCodeItemComponent implements OnInit {
  @Input() qrCode: QrCode;

  constructor() { }

  ngOnInit(): void {
  }

}

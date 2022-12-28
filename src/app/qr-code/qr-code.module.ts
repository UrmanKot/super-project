import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeModalComponent } from './components/qr-code-modal/qr-code-modal.component';
import {SharedModule} from '@shared/shared.module';
import { PrintQrCodesComponent } from './components/print-qr-codes/print-qr-codes.component';
import { QrCodeItemComponent } from './components/qr-code-item/qr-code-item.component';
import { QrCodeScannerComponent } from './components/qr-code-scanner/qr-code-scanner.component';



@NgModule({
  declarations: [
    QrCodeModalComponent,
    PrintQrCodesComponent,
    QrCodeItemComponent,
    QrCodeScannerComponent
  ],
  exports: [
    QrCodeScannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class QrCodeModule { }

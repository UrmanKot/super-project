import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {QrCodeModalComponent} from './components/qr-code-modal/qr-code-modal.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {map, tap} from 'rxjs/operators';
import {QrCodes} from './qr-code';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor(
    private readonly dialog: MatDialog,
    private readonly http: HttpClient,
    private domSanitizer: DomSanitizer,
  ) {
  }

  showQrCodeModal(qrCodes: QrCodes, orderId?: number, invoiceId?: string): Observable<void> {
    return this.dialog
      .open<QrCodeModalComponent>(QrCodeModalComponent, {
        width: '80rem',
        data: {qrCodes, orderId, invoiceId},
        height: 'auto',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  generateQrCodes(send: any, orderId?: number, invoiceId?: string): Observable<QrCodes> {
    return this.http.post<{ data: QrCodes }>(environment.base_url + 'warehouse/generate_qr_codes/', send).pipe(
      map(response => response.data),
      tap(qrCodes => {
        qrCodes.without_serial.forEach(code => {
          code.qr_src = this.domSanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,' + code.qr_src);
        });

        const newQrCodesSerials = [];

        qrCodes.with_serial.forEach(code => {
          // @ts-ignore
          code.qr_codes.forEach(c => {
            c.qr_src = this.domSanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,' + c.qr_src);
            newQrCodesSerials.push(c)
          })
        });

        qrCodes.with_serial = [...newQrCodesSerials];
      }),
      tap(qrCodes => this.showQrCodeModal(qrCodes, orderId, invoiceId))
    );
  }
}

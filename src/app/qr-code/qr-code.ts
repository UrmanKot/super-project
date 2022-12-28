import {SafeUrl} from '@angular/platform-browser';

export class QrCode {
  code: string;
  name: string;
  serial_number?: string;
  qr_src: string | SafeUrl;
}

export class QrCodes {
  with_serial: QrCode[];
  without_serial: QrCode[];
}

import {SafeUrl} from '@angular/platform-browser';

export class QrCode {
  code: string;
  name: string;
  serial_number?: string;
  qr_src: string | SafeUrl;
  root_list_id?: number;
  list_id?: number;
  lists_ids?: number[];
  total_quantity?: number;
}

export class QrCodes {
  with_serial: QrCode[];
  without_serial: QrCode[];
}

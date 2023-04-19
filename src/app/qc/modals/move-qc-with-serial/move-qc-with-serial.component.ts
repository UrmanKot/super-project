import {Component, Inject, OnInit} from '@angular/core';
import {SerialNumber} from '../../../procurement/models/invoice';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {QrCodeService} from '../../../qr-code/qr-code.service';
import {ProtocolService} from '../../services/protocol.service';
import {OrderProduct} from '../../../procurement/models/order-product';

@Component({
  selector: 'pek-move-qc-with-serial',
  templateUrl: './move-qc-with-serial.component.html',
  styleUrls: ['./move-qc-with-serial.component.scss']
})
export class MoveQcWithSerialComponent implements OnInit {
  isPending: any;

  currentCount: number;
  qrCode: any;
  serialNumbers: SerialNumber[] = [];
  defaultSerialNumbers: SerialNumber[] = [];

  form: FormGroup = this.fb.group({
    serial_number_id: [null, Validators.required],
    serial: [null, ],
    invoice_product_id: [null],
    order_product_id: [null],
    is_passed: [null],
    traversed: [null],
  });

  constructor(
    private fb: FormBuilder,
    private qrCodeService: QrCodeService,
    private dialogRef: MatDialogRef<MoveQcWithSerialComponent>,
    private readonly qcProtocolService: ProtocolService,
    @Inject(MAT_DIALOG_DATA) public data: {
      product: InvoiceProduct | OrderProduct,
      currentCount: number,
      count: number,
      type: 'invoice' | 'order'
    }
  ) { }

  ngOnInit(): void {
    if (this.data.currentCount > this.data.count) {
      this.data.currentCount = this.data.count;
    }

    this.serialNumbers = this.data.product.totalSerialNumbers;
    this.serialNumbers.forEach(serial => {
      serial.traversed = serial.is_passed !== null;
    });

    this.defaultSerialNumbers = JSON.parse(JSON.stringify(this.serialNumbers));
    this.serialNumbers.sort((a, b) => a.id - b.id);
    this.currentCount = JSON.parse(JSON.stringify(this.data.currentCount));

    const serialObject = this.serialNumbers[this.data.currentCount - 1];

    if (serialObject && serialObject?.type_with_number) {
      this.form.get('serial').patchValue(serialObject?.type_with_number);
    } else {
      this.form.get('serial').patchValue(serialObject?.id);
    }

    if (serialObject) {
      this.form.get('is_passed').patchValue(serialObject.is_passed);
      this.form.get('traversed').patchValue(serialObject.traversed);
      this.form.get('serial_number_id').patchValue(serialObject.id);
    }

    if (this.data.type === 'order') {
      this.form.get('order_product_id').patchValue(this.data.product.id);
    }

    if (this.data.type === 'invoice') {
      this.form.get('invoice_product_id').patchValue(this.data.product.id);
    }
  }

  saveSerialInfo() {
    const serialObject = this.serialNumbers[this.data.currentCount - 1];

    if (serialObject && serialObject?.type_with_number) {
      this.form.get('serial').patchValue(serialObject?.type_with_number);
    } else {
      this.form.get('serial').patchValue(serialObject?.id);
    }

    if (serialObject) {
      this.form.get('traversed').patchValue(serialObject.traversed);
      this.form.get('serial_number_id').patchValue(serialObject.id);
      this.form.get('is_passed').patchValue(serialObject.is_passed);
    }
  }

  nextSerial() {
    if (this.data.currentCount < this.data.count) {
      this.data.currentCount += 1;
      this.saveSerialInfo();
    }
  }

  prevSerial() {
    if (this.data.currentCount >= 1) {
      this.data.currentCount -= 1;
      this.saveSerialInfo();
    }
  }

  generateQrCode() {
    const send = {
      by_nomenclatures_list: [{
        // nomenclature_id: 13237,
        nomenclature_id: this.data.product.nomenclature.id,
        serial_number_ids: [parseInt(this.form.get('serial_number_id').value, 10)],
        // serial_number_ids: [184],
        order_product_ids: [],
        invoice_product_ids: [],
      }],
    };

    this.qrCodeService.generateQrCodes(send).subscribe(codes => {
      this.qrCode = codes.with_serial[0].code[0];
      // this.qrCode.serial_number = this.form.get('serial_number_id').value;
      // this.qrCode.qr_src = this.domSanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,' + this.qrCode.qr_src);
      // this.modalService.qrCodeModal(this.qrCode).subscribe();
    });
  }

  close() {
    if (JSON.stringify(this.defaultSerialNumbers) === JSON.stringify(this.serialNumbers)) {
      this.dialogRef.close(false);
    } else {
      this.dialogRef.close(true);
    }
  }

  changePassedTrue() {
    if (this.form.get('is_passed').value === true) {
      this.form.get('is_passed').patchValue(null);
    } else {
      this.form.get('is_passed').patchValue(true);
    }
  }

  changePassedFalse() {
    if (this.form.get('is_passed').value === false) {
      this.form.get('is_passed').patchValue(null);
    } else {
      this.form.get('is_passed').patchValue(false);
    }
  }

  beforeForSave() {
    const index = this.serialNumbers.findIndex(s => s.id === this.form.get('serial_number_id').value);
    this.serialNumbers[index].traversed = true;
    this.serialNumbers[index].is_passed = this.form.get('is_passed').value;
    this.nextSerial();
  }

  complete() {
    const send = {...this.form.value};

    delete send.serial;
    delete send.traversed;

    if (send.invoice_product_id) {
      const invoice_product = (this.data.product as InvoiceProduct).invoiceProducts.find(prod => {
        return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number_id) >= 0;
      });
      send.invoice_product_id = invoice_product.id;
      delete send.order_product_id;
    }

    if (send.order_product_id) {
      const invoice_product = (this.data.product as OrderProduct).orderProducts.find(prod => {
        return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number_id) >= 0;
      });
      send.order_product_id = invoice_product.id;
      delete send.invoice_product_id;
    }
    if (this.form.get('traversed').value === false) {
      this.qcProtocolService.qcSerial(send).subscribe(() => {
        if (this.data.currentCount === this.data.count) {
          this.dialogRef.close(true);
        } else {
          this.beforeForSave();
        }
      });
    } else {
      this.qcProtocolService.qcSerialUpdate(send).subscribe(() => {
        if (this.data.currentCount === this.data.count) {
          this.dialogRef.close(true);
        } else {
          this.beforeForSave();
        }
      });
    }
  }
}

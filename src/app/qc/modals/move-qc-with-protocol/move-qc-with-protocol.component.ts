import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {forkJoin} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProtocolService} from '../../services/protocol.service';
import {DomSanitizer} from '@angular/platform-browser';
import {QrCodeService} from '../../../qr-code/qr-code.service';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {environment} from '@env/environment';
import {SerialNumber} from '../../../procurement/models/invoice';
import {QcProtocol, QrProtocolParagraph} from '../../models/protocol';
import {OrderProduct} from '../../../procurement/models/order-product';

@Component({
  selector: 'pek-move-qc-with-protocol',
  templateUrl: './move-qc-with-protocol.component.html',
  styleUrls: ['./move-qc-with-protocol.component.scss']
})
export class MoveQcWithProtocolComponent implements OnInit {
  isLoading = true;
  protocol: QcProtocol;
  isGeneratedNumber = false;
  paragraphs: QrProtocolParagraph[] = [];
  currentCount: number;
  hasComplete = false;

  isLoadingFiles = true;

  files = [];

  serialNumbers: SerialNumber[] = [];
  defaultSerialNumbers: SerialNumber[] = [];

  qrCode: any;

  form: FormGroup = this.fb.group({
    serial_number: [null, Validators.required],
    invoice_product: [null],
    order_product: [null],
    protocol: [null],
    paragraphs: this.fb.array([]),
    serial: [null],
  });
  link = environment.image_path;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MoveQcWithProtocolComponent>,
    private readonly qcProtocolService: ProtocolService,
    private domSanitizer: DomSanitizer,
    private qrCodeService: QrCodeService,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: {
      product: InvoiceProduct | OrderProduct,
      currentCount: number,
      count: number,
      type: 'invoice' | 'order'
    }
  ) {
  }

  get answerParagraphs() {
    return this.form.get('paragraphs') as FormArray;
  }

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
      this.form.get('serial_number').patchValue(serialObject.id);
    }

    this.getFiles();
    this.getProtocol();
  }

  showButtonSave() {
    return Boolean(this.serialNumbers[this.data.currentCount - 1].warehouseproductqcprotocol_set.length === 0);
  }

  generateSerialNumber() {
    this.form.get('serial_number').patchValue('Serial Number');
    this.isGeneratedNumber = true;
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

  saveSerialInfo() {
    const serialObject = this.serialNumbers[this.data.currentCount - 1];

    if (serialObject && serialObject?.type_with_number) {
      this.form.get('serial').patchValue(serialObject?.type_with_number);
    } else {
      this.form.get('serial').patchValue(serialObject?.id);
    }

    if (serialObject) {
      this.form.get('paragraphs').value[0].is_passed = serialObject.is_passed;
      this.form.get('serial_number').patchValue(serialObject.id);
    }

    (this.form.get('paragraphs') as FormArray).controls[0].get('comment').patchValue(serialObject.warehouseproductqcprotocol_set.length > 0 ? serialObject.warehouseproductqcprotocol_set[0].paragraphs[0].comment : '');
    (this.form.get('paragraphs') as FormArray).controls[0].get('is_passed').patchValue(serialObject.is_passed);

    if ((this.form.get('paragraphs') as FormArray).controls[0].get('is_passed').value !== null) {
      this.hasComplete = true;
    }
  }

  getProtocol() {
    forkJoin({
      protocol: this.qcProtocolService.getOne(this.data.product.nomenclature.qc_protocol),
      paragraphs: this.qcProtocolService.getParagraphs([{name: 'protocol_ids', value: this.data.product.nomenclature.qc_protocol}])
    }).subscribe(({protocol, paragraphs}) => {
      this.protocol = protocol;
      this.paragraphs = paragraphs;
      if (this.data.type === 'invoice') {
        this.form.get('invoice_product').patchValue(this.data.product.id);
      }

      if (this.data.type === 'order') {
        this.form.get('order_product').patchValue(this.data.product.id);
      }

      this.form.get('protocol').patchValue(this.data.product.nomenclature.qc_protocol);

      this.updateParagraphs();

      if ((this.form.get('paragraphs') as FormArray).controls[0].get('is_passed').value !== null) {
        this.hasComplete = true;
      }

      this.isLoading = false;
    });
  }

  updateParagraphs() {
    const serialObject = this.serialNumbers[this.data.currentCount - 1];
    this.paragraphs.forEach(paragraph => {
      (this.form.get('paragraphs') as FormArray).push(this.fb.group({
        qc_protocol_paragraph: [paragraph.id],
        comment: [serialObject.warehouseproductqcprotocol_set.length > 0 ? serialObject.warehouseproductqcprotocol_set[0].paragraphs[0].comment : ''],
        is_passed: [serialObject.is_passed]
      }));
    });
  }

  getParagraphName(id: number) {
    let str = `${this.paragraphs.find(p => p.id === id).name}`;
    if (this.paragraphs.find(p => p.id === id).comment) {
      str += ` (${this.paragraphs.find(p => p.id === id).comment})`;
    }
    return str;
  }

  changePassedTrue(paragraph) {
    const index = this.form.get('paragraphs').value.findIndex(p => p.qc_protocol_paragraph === paragraph.value.qc_protocol_paragraph);
    if ((this.form.get('paragraphs') as FormArray).controls[index].get('is_passed').value) {
      (this.form.get('paragraphs') as FormArray).controls[index].get('is_passed').patchValue(null);
      this.hasComplete = false;
    } else {
      (this.form.get('paragraphs') as FormArray).controls[index].get('is_passed').patchValue(true);
      this.hasComplete = true;
    }
  }

  changePassedFalse(paragraph) {
    const index = this.form.get('paragraphs').value.findIndex(p => p.qc_protocol_paragraph === paragraph.value.qc_protocol_paragraph);
    if ((this.form.get('paragraphs') as FormArray).controls[index].get('is_passed').value === false) {
      (this.form.get('paragraphs') as FormArray).controls[index].get('is_passed').patchValue(null);
      this.hasComplete = false;
    } else {
      (this.form.get('paragraphs') as FormArray).controls[index].get('is_passed').patchValue(false);
      this.hasComplete = true;
    }
  }

  generateQrCode() {
    const send = {
      by_nomenclatures_list: [{
        // nomenclature_id: this.data.product.nomenclature.id,
        // serial_number_ids: [parseInt(this.form.get('serial_number').value, 10)],
        nomenclature_id: 13237,
        serial_number_ids: [46],
        order_product_ids: [],
        invoice_product_ids: [],
      }],
    };

    this.qrCodeService.generateQrCodes(send).subscribe(codes => {
      this.qrCode = codes.with_serial[0].code[0];
      // this.qrCode.serial_number = this.form.get('serial_number').value;
      this.qrCode.qr_src = this.domSanitizer.bypassSecurityTrustUrl('data:image/svg+xml;base64,' + this.qrCode.qr_src);
      // this.modalService.qrCodeModal(this.qrCode).subscribe();
    });
  }

  complete() {
    if (this.form.value) {
      const send = {...this.form.value};

      if (this.data.type === 'invoice') {
        const invoice_product = (this.data.product as InvoiceProduct).invoiceProducts.find(prod => {
          return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number) >= 0;
        });
        send.invoice_product = invoice_product.id;
        delete send.order_product;
      }

      if (this.data.type === 'order') {
        const invoice_product = (this.data.product as OrderProduct).orderProducts.find(prod => {
          return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number) >= 0;
        });
        send.order_product = invoice_product.id;
        delete send.invoice_product;
      }

      delete send.serial;
      send.serial_number = this.form.get('serial_number').value;

      // send.serial_number = 21;
      this.qcProtocolService.productsToQc(send).subscribe(() => {
        if (this.data.currentCount === this.data.count) {
          this.dialogRef.close(true);
        } else {
          this.hasComplete = false;
          this.data.currentCount++;
          // const serialObject = this.serialNumbers[this.data.currentCount - 1];
          //
          // if (serialObject.type_with_number) {
          //   this.form.get('serial_number').patchValue(serialObject.type_with_number);
          // } else {
          //   this.form.get('serial_number').patchValue(serialObject.id);
          // }
          //
          // this.form.get('serial').patchValue(serialObject?.id);
          //
          // (this.form.get('paragraphs') as FormArray).controls.forEach(p => {
          //   p.get('comment').patchValue('');
          //   p.get('is_passed').patchValue(null);
          // });

          this.saveSerialInfo();
        }
      });
    }
  }

  save() {
    const send = {...this.form.value};
    const id = this.serialNumbers[this.data.currentCount - 1].warehouseproductqcprotocol_set[0].id;

    if (this.data.type === 'invoice') {
      const invoice_product = (this.data.product as InvoiceProduct).invoiceProducts.find(prod => {
        return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number) >= 0;
      });
      send.invoice_product = invoice_product.id;
      delete send.order_product;
    }

    if (this.data.type === 'order') {
      const invoice_product = (this.data.product as OrderProduct).orderProducts.find(prod => {
        return prod.serial_numbers.findIndex(serial => serial.id === send.serial_number) >= 0;
      });
      send.order_product = invoice_product.id;
      delete send.invoice_product;
    }

    delete send.serial;

    send.serial_number = +this.form.get('serial_number').value;
    send.paragraphs[0].id = this.serialNumbers[this.data.currentCount - 1].warehouseproductqcprotocol_set[0].paragraphs[0].id

    this.qcProtocolService.updateProductProtocol(send, id).subscribe(() => {
      if (this.data.currentCount === this.data.count) {
        this.dialogRef.close(true);
      } else {
        this.hasComplete = false;
        this.data.currentCount++;
        this.saveSerialInfo();
      }
    });
  }

  downloadFile(file: any) {
    this.qcProtocolService.downloadFile(file.id).subscribe(response => {
      const filename = this.getFileName(file.file);
      this.adapterService.downloadFile(filename, response);
    });
  }

  close() {
    if (this.currentCount === this.data.currentCount) {
      this.dialogRef.close(false);
    } else {
      this.dialogRef.close(true);
    }
  }

  getFileName(fileName: string) {
    const name = fileName.split('/');
    return name[name.length - 1];
  }

  getFiles() {
    this.qcProtocolService.getFiles([{name: 'qc_protocol_id', value: this.data.product.nomenclature.qc_protocol}]).subscribe(files => {
      this.files = files;
      this.isLoadingFiles = false;
    });
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../../product-structure/models/product';
import {QrCodeService} from '../../../qr-code/qr-code.service';

@Component({
  selector: 'pek-physical-inventory-scan-result-modal',
  templateUrl: './physical-inventory-scan-result-modal.component.html',
  styleUrls: ['./physical-inventory-scan-result-modal.component.scss']
})
export class PhysicalInventoryScanResultModalComponent implements OnInit {
  isGenerating: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private readonly dialogRef: MatDialogRef<PhysicalInventoryScanResultModalComponent>,
    private readonly qrCodeService: QrCodeService,
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  setValue() {
    this.dialogRef.close({action: 'setValue'});
  }

  scanNext() {
    this.dialogRef.close({action: 'scanNext'});
  }

  onGenerateQrCodes() {
    this.isGenerating = true;

    const send = {
      by_nomenclatures_list: [],
    };

    send.by_nomenclatures_list.push({
      nomenclature_id: this.data.product.nomenclature.id,
      serial_number_ids:
        this.data.product.nomenclature.bulk_or_serial === '1' && this.data.product.serial_number ?
          [this.data.product.serial_number.id]
          : [],
      order_product_ids: [],
      invoice_product_ids: [],
    });

    this.qrCodeService.generateQrCodes(send).subscribe(() => this.isGenerating = false);
  }
}

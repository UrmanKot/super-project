import {Component, Inject, OnInit} from '@angular/core';
import {InvoiceFile} from '../../models/invoice';
import {environment} from '@env/environment';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceService} from '../../services/invoice.service';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {PaymentFile} from '../../../payments/models/payment';
import {finalize, takeUntil} from 'rxjs';
import {InvoiceProductRmaFilesService} from '../../services/invoice-product-rma-files.service';
import {InvoiceProductRmaFile} from '../../models/invoice-product-rma-file';
import {Correspondent} from '../../../correspondent/models/correspondent';
import {map} from 'rxjs/operators';

@Component({
  selector: 'pek-invoice-products-rma-files',
  templateUrl: './invoice-products-rma-files.component.html',
  styleUrls: ['./invoice-products-rma-files.component.scss']
})
export class InvoiceProductsRmaFilesComponent implements OnInit {
  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  invoiceId: number;

  files: InvoiceProductRmaFile[] = [];
  isLoading = true;
  isPending = false;
  link = environment.image_path;

  constructor(
    private readonly dialogRef: MatDialogRef<InvoiceProductsRmaFilesComponent>,
    private invoiceProductRmaFilesService: InvoiceProductRmaFilesService,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) private data: {files: InvoiceProductRmaFile[]},
  ) {
  }

  ngOnInit(): void {
    this.files = this.data.files;
    console.log('this. files', this.files);
    // this.getFiles();
  }


  getFileName(file: string) {
    let name = file.split('/');
    return name[name.length - 1];
  }

  onDownloadFile(file: InvoiceProductRmaFile) {
    this.addition.add(file.id);
    this.invoiceProductRmaFilesService.downloadFile(file.id).subscribe(response => {
      const filename = this.getFileName(file.file.toString());
      this.adapterService.downloadFile(filename, response);
    });
  }
  downloadFile(file: any, correspondent: Correspondent) {

  }
}

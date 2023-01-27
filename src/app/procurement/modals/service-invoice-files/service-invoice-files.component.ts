import {Component, Inject, OnInit} from '@angular/core';
import {Invoice, InvoiceFile} from '../../models/invoice';
import {environment} from '@env/environment';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceService} from '../../services/invoice.service';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {PaymentFile} from '../../../payments/models/payment';
import {finalize} from 'rxjs';
import {ServiceInvoiceService} from '@shared/services/service-invoice.service';

@Component({
  selector: 'pek-service-invoice-files',
  templateUrl: './service-invoice-files.component.html',
  styleUrls: ['./service-invoice-files.component.scss']
})
export class ServiceInvoiceFilesComponent implements OnInit {

  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  invoiceId: number;

  uploadFiles: File[] = [];
  files: InvoiceFile[] = [];
  isLoading = true;
  isPending = false;
  link = environment.image_path;

  constructor(
    private readonly dialogRef: MatDialogRef<ServiceInvoiceFilesComponent>,
    private readonly serviceInvoiceService: ServiceInvoiceService,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) private invoice: Invoice,
  ) {
  }

  ngOnInit(): void {
    console.log(this.invoice);
    this.invoiceId = this.invoice.id;
    this.getFiles();
  }

  getFiles() {
    this.serviceInvoiceService.getFiles(this.invoiceId).subscribe(files => {
      this.files = files;
      this.isLoading = false;
    });
  }

  fileAdded(file: File) {
    this.uploadFiles.push(file);
  }

  getFileName(file: string) {
    let name = file.split('/');
    return name[name.length - 1];
  }

  onDownloadFile(file: PaymentFile) {
    console.log(file);
    this.addition.add(file.id);
    this.serviceInvoiceService.downloadFile(file.id).subscribe(response => {
      const filename = this.getFileName(file.file);
      this.adapterService.downloadFile(filename, response);
      this.addition.clear();
    });
  }

  onSelectFiles(files: File[]) {
    this.uploadFiles = files;
  }

  onUploadFiles() {
    this.isPending = true;
    this.serviceInvoiceService.severalUploadFiles(this.invoiceId, this.uploadFiles)
      .pipe(
        finalize(() => this.isPending = false)
      )
      .subscribe(files => this.dialogRef.close(files));
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id);

        this.serviceInvoiceService.removeFile(id).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
          this.deletion.clear();
        });
      }
    });
  }
}

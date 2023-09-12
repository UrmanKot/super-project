import {Component, Inject, OnInit} from '@angular/core';
import {PaymentFile} from '../../../payments/models/payment';
import {environment} from '@env/environment';
import {Invoice, InvoiceFile} from '../../models/invoice';
import {InvoiceService} from '../../services/invoice.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-invoice-files',
  templateUrl: './invoice-files.component.html',
  styleUrls: ['./invoice-files.component.scss']
})
export class InvoiceFilesComponent implements OnInit {
  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  invoiceId: number;

  uploadFiles: File[] = [];
  files: InvoiceFile[] = [];
  isLoading = true;
  isPending = false;
  link = environment.image_path;

  constructor(
    private readonly dialogRef: MatDialogRef<InvoiceFilesComponent>,
    private readonly invoiceService: InvoiceService,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) private id: number,
  ) {
  }

  ngOnInit(): void {
    this.invoiceId = this.id;
    this.getFiles();
  }

  getFiles() {
    this.invoiceService.getFiles(this.invoiceId).subscribe(files => {
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
    this.addition.add(file.id);
    this.invoiceService.downloadFile(file.id).subscribe(response => {
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
    this.invoiceService.severalUploadFiles(this.invoiceId, this.uploadFiles)
      .pipe(
        finalize(() => this.isPending = false)
      )
      .subscribe(files => this.dialogRef.close(files));
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id);

        this.invoiceService.removeFile(id).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
          this.deletion.clear();
        });
      }
    });
  }
}

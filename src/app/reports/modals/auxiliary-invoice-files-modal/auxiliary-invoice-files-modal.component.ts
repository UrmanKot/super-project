import {Component, Inject, OnInit} from '@angular/core';
import {environment} from "@env/environment";
import {Invoice, InvoiceFile} from "../../../procurement/models/invoice";
import {ServiceInvoice, ServiceInvoiceFile} from "../../../procurement/models/service-invoice";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InvoiceService} from "../../../procurement/services/invoice.service";
import {ModalService} from "@shared/services/modal.service";
import {AdapterService} from "@shared/services/adapter.service";
import {Router} from "@angular/router";
import {ServiceInvoiceService} from "@shared/services/service-invoice.service";
import {finalize} from "rxjs";
import {ProductFile} from "../../../product-structure/models/product";

@Component({
  selector: 'pek-auxiliary-invoice-files-modal',
  templateUrl: './auxiliary-invoice-files-modal.component.html',
  styleUrls: ['./auxiliary-invoice-files-modal.component.scss']
})
export class AuxiliaryInvoiceFilesModalComponent implements OnInit {


  link = environment.image_path;

  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  uploadFiles: File[] = [];
  files: ServiceInvoiceFile[] = [];
  isLoading = true;
  isPending = false;

  constructor(
    private readonly dialogRef: MatDialogRef<AuxiliaryInvoiceFilesModalComponent>,
    private readonly serviceInvoiceService: ServiceInvoiceService,
    private readonly modalService: ModalService,
    private readonly adapterService: AdapterService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { invoice: ServiceInvoice },
  ) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles() {
    this.serviceInvoiceService.getFiles(this.data.invoice.id).subscribe(files => {
      this.files = files;
      this.isLoading = false;
    });
  }

  getFileName(file: string) {
    let name = file.split('/');
    return name[name.length - 1];
  }

  onUploadFiles(file: File = null) {
    this.isPending = true;
    const sendFiles = file ? [file] : this.uploadFiles;
    this.serviceInvoiceService.severalUploadFiles(this.data.invoice.id, sendFiles)
      .pipe(
        finalize(() => this.isPending = false)
      )
      .subscribe(files => {
        this.dialogRef.close({files, filesLength: this.files.length + this.uploadFiles.length})
      });
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

  onDownloadFile(file: ProductFile) {
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

  imageAdded(file: File) {
    this.onUploadFiles(file)
  }

}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdapterService} from "@shared/services/adapter.service";
import {ModalService} from "@shared/services/modal.service";
import {ServiceInvoicePayment, ServiceInvoicePaymentFile} from "../../../reports/models/service-invoice-payment";
import {ServiceInvoicePaymentService} from "../../../reports/services/service-invoice-payment.service";
import {finalize} from "rxjs";

@Component({
  selector: 'pek-service-payment-file-form',
  templateUrl: './service-payment-file-form.component.html',
  styleUrls: ['./service-payment-file-form.component.scss']
})
export class ServicePaymentFileFormComponent implements OnInit {
  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  uploadFiles: File[] = [];
  files: ServiceInvoicePaymentFile[] = []
  isLoading = true;
  isPending = false;

  constructor(
    private readonly dialogRef: MatDialogRef<ServicePaymentFileFormComponent>,
    private serviceInvoicePaymentService: ServiceInvoicePaymentService,
    private adapterService: AdapterService,
    private modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public paymentId: number) {
  }

  ngOnInit(): void {
    console.log(this.paymentId)
    this.getFiles()
  }

  getFiles() {

    this.serviceInvoicePaymentService.getAuxiliaryPaymentFiles(this.paymentId).subscribe(files => {
      console.log(`Files`,files)
      this.files = files;
      this.isLoading = false;
    });
  }

  getFileName(file: string) {
    let name = file.split('/');
    return name[name.length - 1];
  }

  onSelectFiles(files: File[]) {
    this.uploadFiles = files
  }

  onDownloadFile(file: ServiceInvoicePaymentFile) {
    this.addition.add(file.id)
    this.serviceInvoicePaymentService.downloadAuxiliaryPaymentFile(file.id).subscribe(response => {
      const fileName = this.getFileName(file.file)
      this.adapterService.downloadFile(fileName, response)
      this.addition.clear()
    })
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm =>{
      if (confirm) {
        this.deletion.add(id)

        this.serviceInvoicePaymentService.removeAuxiliaryPaymentFile(id).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id)
          this.files.splice(index, 1)
          this.deletion.clear()
        });
      }
    });
  }

  onUploadFiles() {
    this.isPending = true;
    this.serviceInvoicePaymentService.severalUploadFiles(this.paymentId, this.uploadFiles)
      .pipe(
        finalize(() => this.isPending = false)
      )
      .subscribe(files => this.dialogRef.close(files));
  }

}

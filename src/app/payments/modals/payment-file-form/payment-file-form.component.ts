import {Component, Inject, OnInit} from '@angular/core';
import {ProductFile} from "../../../product-structure/models/product";
import {PaymentService} from "../../services/payment.service";
import {AdapterService} from "@shared/services/adapter.service";
import {ModalService} from "@shared/services/modal.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {finalize} from "rxjs";
import {PaymentFile} from "../../models/payment";
import {environment} from '@env/environment';

@Component({
  selector: 'pek-payment-file-form',
  templateUrl: './payment-file-form.component.html',
  styleUrls: ['./payment-file-form.component.scss']
})
export class PaymentFileFormComponent implements OnInit {
  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();


  uploadFiles: File[] = [];
  files: PaymentFile[] = []
  isLoading = true;
  isPending = false;
  link = environment.image_path;

  constructor(
    private readonly dialogRef: MatDialogRef<PaymentFileFormComponent>,
    private paymentService: PaymentService,
    private adapterService: AdapterService,
    private modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public paymentId: number
  ) { }

  ngOnInit(): void {
    this.getFiles()
    console.log(this.paymentId)
  }

  getFiles() {
    this.paymentService.getPaymentFiles(this.paymentId).subscribe(files => {
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
    this.uploadFiles = files;
  }


  onDownloadFile(file: PaymentFile) {
    this.addition.add(file.id);
    this.paymentService.downloadPaymentFile(file.id).subscribe(response => {
      const filename = this.getFileName(file.file);
      this.adapterService.downloadFile(filename, response);
      this.addition.clear();
    });
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm =>{
      if (confirm) {
        this.deletion.add(id)

        this.paymentService.removePaymentFile(id).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id)
          this.files.splice(index, 1)
          this.deletion.clear()
        });
      }
    });
  }

  onUploadFiles() {
    this.isPending = true;
    this.paymentService.severalUploadFiles(this.paymentId, this.uploadFiles)
      .pipe(
        finalize(() => this.isPending = false)
      )
      .subscribe(files => this.dialogRef.close(files));
  }

  fileAdded(file: File) {
    this.uploadFiles.push(file);
  }
}

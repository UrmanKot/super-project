import {Component, Inject, OnInit} from '@angular/core';
import {PaymentFile} from '../../../payments/models/payment';
import {environment} from '@env/environment';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PaymentService} from '../../../payments/services/payment.service';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {finalize} from 'rxjs';
import {OrderService} from '../../../procurement/services/order.service';

@Component({
  selector: 'pek-add-file-to-order',
  templateUrl: './add-file-to-order.component.html',
  styleUrls: ['./add-file-to-order.component.scss']
})
export class AddFileToOrderComponent implements OnInit {

  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  uploadFiles: File[] = [];
  files: any[] = []
  isLoading = true;
  isPending = false;
  link = environment.image_path;

  constructor(
    private readonly dialogRef: MatDialogRef<AddFileToOrderComponent>,
    private orderService: OrderService,
    private adapterService: AdapterService,
    private modalService: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: {orderId: number}
  ) { }

  ngOnInit(): void {
    this.getFiles()
  }

  getFiles() {
    this.orderService.getFiles(this.data.orderId).subscribe(files => {
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
    this.orderService.downloadFile(file.id).subscribe(response => {
      const filename = this.getFileName(file.file);
      this.adapterService.downloadFile(filename, response);
      this.addition.clear();
    });
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm =>{
      if (confirm) {
        this.deletion.add(id)

        this.orderService.deleteFile(id).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id)
          this.files.splice(index, 1)
          this.deletion.clear()
        });
      }
    });
  }

  onUploadFiles() {
    this.isPending = true;
    this.orderService.severalUploadFiles(this.data.orderId, this.uploadFiles)
      .pipe(
        finalize(() => this.isPending = false)
      )
      .subscribe(files => this.dialogRef.close(files));
  }

  fileAdded(file: File) {
    this.uploadFiles.push(file);
  }
}

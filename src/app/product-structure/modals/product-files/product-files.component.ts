import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductFile} from '../../models/product';
import {finalize} from 'rxjs';
import {ModalService} from '@shared/services/modal.service';
import {AdapterService} from '@shared/services/adapter.service';

@Component({
  selector: 'pek-product-files',
  templateUrl: './product-files.component.html',
  styleUrls: ['./product-files.component.scss']
})
export class ProductFilesComponent implements OnInit {
  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  uploadFiles: File[] = [];
  files: ProductFile[] = [];
  isLoading = true;
  isPending = false;

  constructor(
    private readonly dialogRef: MatDialogRef<ProductFilesComponent>,
    private readonly productService: ProductService,
    private readonly modalService: ModalService,
    private readonly adapterService: AdapterService,
    @Inject(MAT_DIALOG_DATA) public productId: number,
  ) {
  }

  ngOnInit(): void {
    this.getFiles();
   }

  getFiles() {
    this.productService.getProductFiles(this.productId).subscribe(files => {
      this.files = files;
      this.isLoading = false;
    });
  }

  getFileName(file: string) {
    let name = file.split('/');
    return name[name.length - 1];
  }

  onUploadFiles() {
    this.isPending = true;
    this.productService.severalUploadFiles(this.productId, this.uploadFiles)
      .pipe(
        finalize(() => this.isPending = false)
      )
      .subscribe(files => this.dialogRef.close(files));
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id);

        this.productService.removeProductFile(id).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
          this.deletion.clear();
        });
      }
    });
  }

  onDownloadFile(file: ProductFile) {
    this.addition.add(file.id);
    this.productService.downloadProductFile(file.id).subscribe(response => {
      const filename = this.getFileName(file.file);
      this.adapterService.downloadFile(filename, response);
      this.addition.clear();
    });
  }

  onSelectFiles(files: File[]) {
    this.uploadFiles = files;
  }
}

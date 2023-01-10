import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductFile} from '../../models/product';
import {finalize} from 'rxjs';
import {ModalService} from '@shared/services/modal.service';
import {AdapterService} from '@shared/services/adapter.service';
import {Route, Router} from '@angular/router';
import {environment} from '@env/environment';

@Component({
  selector: 'pek-product-files',
  templateUrl: './product-files.component.html',
  styleUrls: ['./product-files.component.scss']
})
export class ProductFilesComponent implements OnInit {
  link = environment.image_path;
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
    private router: Router,
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

  onUploadFiles(file: File = null) {
    this.isPending = true;
    const sendFiles = file ? [file] : this.uploadFiles;
    this.productService.severalUploadFiles(this.productId, sendFiles)
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

  openFileInBrowser(file: ProductFile) {
    window.open(this.link + file.file, '_blank');
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

  imageAdded(file: File) {
    this.onUploadFiles(file)
  }
}

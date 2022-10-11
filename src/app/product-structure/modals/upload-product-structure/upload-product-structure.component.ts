import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductService} from '../../services/product.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-upload-product-structure',
  templateUrl: './upload-product-structure.component.html',
  styleUrls: ['./upload-product-structure.component.scss']
})
export class UploadProductStructureComponent implements OnInit, OnDestroy {
  fileToUpload: File;
  isLoading = false;
  showErrorUpload = false;

  files: string[] = [];
  error: string;

  private destroy$ = new Subject();

  constructor(
    private dialogRef: MatDialogRef<UploadProductStructureComponent>,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public productId: number,
  ) {
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.showErrorUpload = false;
    this.isLoading = false;
    this.fileToUpload = null;
    this.error = '';
  }

  onUpload(codes: string[] = []) {
    this.isLoading = true;

    const data = {
      file_xls: this.fileToUpload,
      root_product_id: this.productId,
      passed_codes: codes
    };

    this.productService.uploadProductStructure(data)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe({
      next: res => {
        console.log(res);
        this.dialogRef.close(true);
      },
      error: err => {
        if (err) {
          this.isLoading = false;
          this.error = err.error.data;
          this.processing(err.error.data);
        }
      }
    });
  }

  processing(arr: any) {
    const str: string = arr ? arr[0] : '';

    if (str.includes('Error in parsing items at position')) {
      this.showErrorUpload = true;
      const str2 = str.split('code:')[1];
      const str3 = str2.split(', Index:')[0];

      this.files.push(str3);
    } else {
      this.showErrorUpload = false;
      this.fileToUpload = null;
    }
  }

  onContinueUpdate() {
    this.onUpload(this.files);
  }

  selectFile(files: File[]) {
    this.error = '';
    this.fileToUpload = files[0];
  }

  removeFile() {
    this.fileToUpload = null;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

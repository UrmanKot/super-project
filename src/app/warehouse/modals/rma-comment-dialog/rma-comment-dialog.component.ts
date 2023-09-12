import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {finalize, forkJoin} from 'rxjs';
import {tap} from 'rxjs/operators';
import {
  CombinedInvoiceProduct
} from '../../components/warehouse-isolator/components/warehouse-isolator-invoices/warehouse-isolator-invoices.component';
import {InvoiceProductRmaFilesService} from '../../../procurement/services/invoice-product-rma-files.service';

@Component({
  selector: 'pek-rma-comment-dialog',
  templateUrl: './rma-comment-dialog.component.html',
  styleUrls: ['./rma-comment-dialog.component.scss']
})
export class RmaCommentDialogComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    id: [<number>null, Validators.required],
    rma_comment: [<string>'', [Validators.required]],
  });
  files: File[];

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<RmaCommentDialogComponent>,
    private readonly invoiceProductService: InvoiceProductService,
    private invoiceProductRmaFilesService: InvoiceProductRmaFilesService,
    @Inject(MAT_DIALOG_DATA) public data: { invoiceProduct: CombinedInvoiceProduct }
  ) {
  }

  ngOnInit(): void {
    this.form.get('id').patchValue(this.data.invoiceProduct.id);
  }

  onSave() {

    this.isSaving = true;
    if (this.files?.length > 0) {
      this.updateInvoiceProducts().subscribe(() => {
        this.updateFiles().pipe(
          finalize(() => this.isSaving = false),
          tap(invoiceProduct => this.dialogRef.close(invoiceProduct))
        ).subscribe();
      });
    } else {
      this.updateInvoiceProducts().pipe(
        finalize(() => this.isSaving = false),
        tap(invoiceProduct => this.dialogRef.close(invoiceProduct))
      ).subscribe();
    }
  }

  updateInvoiceProducts() {
    const send = {
      invoice_product_ids: this.data.invoiceProduct.products.map(p => {
        return p.id
      }),
      rma_comment: this.form.get('rma_comment').value
    };

    return this.invoiceProductService.sendToRma(send);
  }



  updateFiles() {
    const send$ = [];
    const firstInvoiceProductId = this.data.invoiceProduct.id;
      this.files.forEach(file => {
        const call = this.invoiceProductRmaFilesService.create({
          file: file,
          invoice_product: firstInvoiceProductId
        });
        send$.push(call);
      });

    return forkJoin([...send$])
  }

  filesChanged(files: File[]) {
    this.files = files;

  }
}

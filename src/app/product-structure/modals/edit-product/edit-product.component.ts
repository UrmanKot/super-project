import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../models/product';
import {FormBuilder} from '@angular/forms';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ProductService} from '../../services/product.service';
import {finalize, forkJoin} from 'rxjs';

@Component({
  selector: 'pek-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  isSaving: boolean = false;
  isFormInvalid: boolean = true;

  formValue: Partial<Product & Nomenclature>;
  quantity: number;

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
    private readonly productService: ProductService,
    private readonly dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
  ) {
  }

  ngOnInit(): void {
    if (this.product.nomenclature.type !== ENomenclatureType.PURCHASED) {
      this.dialogRef.updateSize('60rem', 'auto');
    }
  }

  onChangeFormValue(data: { invalid: boolean, formValue: Partial<Product & Nomenclature> }) {
    this.formValue = data.formValue;
    this.isFormInvalid = data.invalid;
  }

  onUploadImage(files: File[]) {
    files.forEach(newFile => {
      const send = {
        nomenclature: this.product.nomenclature.id,
        image: newFile,
      };

      this.nomenclatureService.uploadImage(send).subscribe(image => {
        this.product.nomenclature.images.push(image);
      });
    });
  }

  onRemoveImage(index: number) {
    this.nomenclatureService.removeImage(this.product.nomenclature.images[index].id).subscribe(() => {
      this.product.nomenclature.images.splice(index, 1);
    });
  }

  onUpdateProduct() {
    if (!this.isFormInvalid) {
      this.isSaving = true;

      const send: Partial<Nomenclature> = {
        id: this.product.nomenclature.id,
        name: this.formValue.name,
        code: this.formValue.code,
        description: this.formValue.description,
        type: this.formValue.type,
      };

      if (this.product.nomenclature.type === ENomenclatureType.PURCHASED) {
        send.category = this.formValue.category;
        send.bulk_or_serial = this.formValue.bulk_or_serial;
      } else {
        send.technologies = [...this.formValue.technologies];
        send.category = null;
      }

      const sendUpdateQuantity: Partial<Product> = {
        id: this.product.id,
        quantity: this.formValue.quantity,
      };

      if (this.product.parent && this.product.nomenclature.type !== ENomenclatureType.ASSEMBLY) {
        forkJoin({
          nomenclature: this.nomenclatureService.update(send),
          product: this.productService.updatePartly(sendUpdateQuantity),
        }).pipe(
          finalize(() => this.isSaving = false)
        ).subscribe(({nomenclature, product}) => {
          this.dialogRef.close(nomenclature);
        });
      } else {
        this.nomenclatureService.update(send).pipe(
          finalize(() => this.isSaving = false)
        ).subscribe(nomenclature => {
          this.dialogRef.close(nomenclature);
        });
      }
    }
  }
}

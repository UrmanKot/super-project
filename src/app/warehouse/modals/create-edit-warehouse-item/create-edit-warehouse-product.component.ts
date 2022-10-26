import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ENomenclatureType, Nomenclature, NomenclatureImage} from '@shared/models/nomenclature';
import {Product} from '../../../product-structure/models/product';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-create-edit-warehouse-product',
  templateUrl: './create-edit-warehouse-product.component.html',
  styleUrls: ['./create-edit-warehouse-product.component.scss']
})
export class CreateEditWarehouseProductComponent implements OnInit {
  isSaving = false;
  isLoading = true;
  nomenclatureType = ENomenclatureType;

  selectionTypeMode = true;

  product: Partial<Product> = {
    nomenclature: null
  };

  newProduct: Partial<Product> = {
    nomenclature: {
      id: null,
      category: null,
      technologies: [],
      images: [],
      type: null,
    }
  };

  isFormInvalid: boolean = false;
  formValue: Partial<Product & Nomenclature>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, nomenclatureId: number },
    private readonly nomenclatureService: NomenclatureService,
    private dialogRef: MatDialogRef<CreateEditWarehouseProductComponent>,
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.dialogRef.updateSize('50rem', 'auto');
      this.getProduct();
    } else {
      this.isLoading = false;
    }
  }

  getProduct() {
    this.nomenclatureService.getById(this.data.nomenclatureId).subscribe(nomenclature => {
      this.product.nomenclature = nomenclature;

      if (this.product.nomenclature.type !== ENomenclatureType.PURCHASED) {
        this.dialogRef.updateSize('60rem', 'auto');
      }

      this.isLoading = false;
    });
  }

  onChangeFormValue(data: { invalid: boolean, formValue: Partial<Product & Nomenclature> }) {
    this.formValue = data.formValue;
    this.isFormInvalid = data.invalid;
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createWarehouseProduct();
        break;
      }
      case 'edit': {
        this.editWarehouseProduct();
        break;
      }
    }
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

  onNewProductRemoveImage(idx: number) {
    this.newProduct.nomenclature.images.splice(idx, 1);
  }

  onNewProductUploadImage(files: File[]) {
    files.forEach(file => {
      const fileReader = new FileReader();

      fileReader.onload = (fileLoadedEvent) => {
        const srcData = fileLoadedEvent.target.result;

        const newImage: NomenclatureImage = {
          file,
          image: srcData,
          id: null
        };

        this.newProduct.nomenclature.images.push(newImage);
      };

      fileReader.readAsDataURL(file);
    });
  }

  createWarehouseProduct() {
    if (!this.isFormInvalid) {
      this.isSaving = true;

      const send: Partial<Nomenclature> = {
        name: this.formValue.name,
        code: this.formValue.code,
        description: this.formValue.description,
        type: this.formValue.type,
      };

      if (this.formValue.type === ENomenclatureType.PURCHASED) {
        send.category = this.formValue.category;
        send.bulk_or_serial = this.formValue.bulk_or_serial;
        delete send.code;
      } else {
        send.technologies = [...this.formValue.technologies];
        send.category = null;
      }

      this.nomenclatureService.create(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(nomenclature => {
        this.isSaving = true;

        const send = [];

        if (this.newProduct.nomenclature.images.length > 0) {
          this.newProduct.nomenclature.images.forEach(file => {
            send.push({
              nomenclature: nomenclature.id,
              image: file.file,
            });
          });

          this.nomenclatureService.uploadImagesSeveral(send).pipe(
            finalize(() => this.isSaving = false)
          ).subscribe(() => this.dialogRef.close(true));
        } else {
          this.dialogRef.close(true);
        }
      });
    }
  }

  editWarehouseProduct() {
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
        delete send.code;
      } else {
        send.technologies = [...this.formValue.technologies];
        send.category = null;
      }

      this.nomenclatureService.update(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  choiceType(type: ENomenclatureType) {
    this.newProduct.nomenclature.type = type;

    if (this.newProduct.nomenclature.type !== ENomenclatureType.PURCHASED) {
      this.dialogRef.updateSize('60rem', 'auto');
    } else {
      this.dialogRef.updateSize('50rem', 'auto');
    }

    this.selectionTypeMode = false;
  }
}

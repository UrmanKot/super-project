import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../models/product';
import {FormBuilder} from '@angular/forms';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ProductService} from '../../services/product.service';
import {finalize, forkJoin, of} from 'rxjs';
import {TechnicalEquipmentService} from '../../services/technical-equipment.service';
import {TechnicalEquipment} from '../../models/technical-equipment';

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
    private readonly technicalEquipmentService: TechnicalEquipmentService,
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
        delete send.code;
      } else {
        send.technologies = [...this.formValue.technologies];
        send.category = null;
      }

      const sendUpdateQuantity: Partial<Product> = {
        id: this.product.id,
        quantity: this.formValue.quantity,
      };

      const technicalEquipments = this.formValue.technical_equipments;
      const createUpdateTechnicalEquipments = {
        updated_created_technical_equipment: technicalEquipments.map(equipment => {
          return {
            id: equipment.id,
            used_by_nomenclature: equipment.used_by_nomenclature.id,
            quantity: equipment.quantity
          };
        }),
        deleted_technical_equipment_ids: this.formValue.deleted_technical_equipments_ids,
      };

      if (this.product.parent && this.product.nomenclature.type !== ENomenclatureType.ASSEMBLY) {
        forkJoin({
          nomenclature: this.nomenclatureService.update(send),
          product: this.productService.updatePartly(sendUpdateQuantity),
          technicalEquipment: this.product.nomenclature.type !== ENomenclatureType.PURCHASED ?
            this.nomenclatureService.bulkCreateUpdateTechnicalEquipments(this.product.nomenclature.id, createUpdateTechnicalEquipments) :
            of(true),
        }).pipe(
          finalize(() => this.isSaving = false)
        ).subscribe(({nomenclature, product, technicalEquipment}) => {
          this.dialogRef.close({nomenclature, product});
        });
      } else {
        forkJoin({
          nomenclature: this.nomenclatureService.update(send),
          technicalEquipment: this.product.nomenclature.type !== ENomenclatureType.PURCHASED ?
            this.nomenclatureService.bulkCreateUpdateTechnicalEquipments(this.product.nomenclature.id, createUpdateTechnicalEquipments) :
            of(true),
        }).pipe(
          finalize(() => this.isSaving = false)
        ).subscribe(({nomenclature, technicalEquipment}) => {
          this.dialogRef.close({nomenclature, product: null});
        });
      }
    }
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../models/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ENomenclatureBulk, ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ProductCategory} from '../../models/product-category';
import {finalize, forkJoin} from 'rxjs';
import {ProductService} from '../../services/product.service';
import {Technology} from '../../models/technology';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'pek-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  nomenclatureType = ENomenclatureType;
  quantityBefore: number;

  selectedTechnologiesIds: number[] = [];
  selectedTechnologies: Technology[] = [];

  bulkOrSerial = [
    {label: 'Bulk', value: ENomenclatureBulk.BULK},
    {label: 'With Serial Numbers', value: ENomenclatureBulk.SERIAL}
  ];

  nomenclatureTypes: { label: string, value: ENomenclatureType }[] = [
    {label: 'Purchased', value: ENomenclatureType.PURCHASED},
    {label: 'Assembly', value: ENomenclatureType.ASSEMBLY},
    {label: 'Manufactured', value: ENomenclatureType.MANUFACTURED}
  ];

  form: FormGroup = this.fb.group({
    type: [{value: null, disabled: true}],
    name: ['', Validators.required],
    code: ['', Validators.required],
    description: [''],
    quantity: [0, [Validators.required, Validators.min(1)]],
    category: [null],
    bulk_or_serial: [null, Validators.required],
    codeId: [{value: '', disabled: true}],
  });

  isSaving: boolean = false;

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

    if (this.product.nomenclature.technologies.length > 0) {
      this.selectedTechnologiesIds = this.product.nomenclature.technologies.map(t => t.id);
      this.selectedTechnologies = [...this.product.nomenclature.technologies]
    }

    this.form.patchValue(this.product.nomenclature);
    this.form.get('quantity').patchValue(this.product.quantity);
    this.form.get('codeId').patchValue(this.product.nomenclature.code);

    if (this.product.nomenclature.category) {
      this.form.get('category').patchValue(this.product.nomenclature.category.id);
    }
  }

  onUpdateProduct() {
    if (this.form.valid) {
      this.isSaving = true;

      const send: Partial<Nomenclature> = {
        id: this.product.nomenclature.id,
        name: this.form.get('name').value,
        description: this.form.get('description').value,
        type: this.form.get('type').value,
        code: this.form.get('code').value,
      };

      if (this.product.nomenclature.type === ENomenclatureType.PURCHASED) {
        send.category = this.form.get('category').value;
        send.bulk_or_serial = this.form.get('bulk_or_serial').value;
      } else {
        send.technologies = [...this.selectedTechnologies];
        send.category = null;
      }

      const sendUpdateQuantity: Partial<Product> = {
        id: this.product.id,
        quantity: this.form.get('quantity').value,
      };

      if (this.product.parent && this.product.nomenclature.type !== ENomenclatureType.ASSEMBLY) {
        forkJoin({
          nomenclature: this.nomenclatureService.update(send),
          product: this.productService.updatePartly(sendUpdateQuantity),
        }).pipe(
          finalize(() => this.isSaving = false)
        ).subscribe(({ nomenclature, product}) => {
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

  uploadImages(files: File[]) {
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

  onSelectCategory(category: ProductCategory) {
    if (category) {
      this.form.get('category').patchValue(category.id);
    } else {
      this.form.get('category').patchValue(null);
    }
  }

  removeImage(id: number) {
    this.nomenclatureService.removeImage(id).subscribe(() => {
      const index = this.product.nomenclature.images.findIndex(img => img.id === id);
      this.product.nomenclature.images.splice(index, 1);
    });
  }

  drop(event: CdkDragDrop<Technology[]>) {
    const technologies = this.selectedTechnologies.map(t => t);
    const technologiesIds = this.selectedTechnologiesIds;
    moveItemInArray(technologies, event.previousIndex, event.currentIndex);
    moveItemInArray(technologiesIds, event.previousIndex, event.currentIndex);
    this.selectedTechnologies = [...technologies];
    this.selectedTechnologiesIds = [...technologiesIds];
  }

  selectTechnology(technologies: Technology[]) {
    this.selectedTechnologies = technologies;
    this.selectedTechnologiesIds = technologies.map(t => t.id)
  }
}

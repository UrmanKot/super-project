import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../models/product';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {ProductService} from '../../services/product.service';
import {ModalActionType} from '@shared/models/modal-action';
import {finalize} from 'rxjs';
import {ProductStructureCategory} from '../../models/product-structure-category';
import {Nomenclature} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-create-edit-root-product',
  templateUrl: './create-edit-root-product.component.html',
  styleUrls: ['./create-edit-root-product.component.scss']
})
export class CreateEditRootProductComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    description: [''],
    type: [1],
    root_category: [null],
  });

  isCategoryDisabled: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
    private readonly productService: ProductService,
    private dialogRef: MatDialogRef<CreateEditRootProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, product: Partial<Product> }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type !== 'create') {
      const nomenclature: Partial<Nomenclature> = this.data.product.nomenclature;
      this.form.addControl('id' as any, new FormControl(this.data.product.id));
      // @ts-ignore
      this.form.patchValue(nomenclature);

      if (nomenclature.root_category) {
        this.form.get('root_category').patchValue(nomenclature.root_category.id);
      }
    }

    if (this.data.type === 'copy') {
      this.isCategoryDisabled = true;
      this.form.get('code').disable();
      this.form.get('description').disable();
    }
  }

  onSelectCategory(category: ProductStructureCategory) {
    if (category) {
      this.form.get('root_category').patchValue(category.id);
    } else {
      this.form.get('root_category').patchValue(null);
    }
  }

  onSave() {
    this.isSaving = true;
    const send: any = this.form.value;

    switch (this.data.type) {
      case 'create': {
        this.createProduct(send);
        break;
      }
      case 'edit': {
        this.editProduct(send);
        break;
      }
      case 'copy': {
        this.copyProduct();
        break;
      }
    }
  }

  createProduct(send: any) {
    this.nomenclatureService.create(send).subscribe({
      next: (nomenclature) => {
        if (nomenclature) {
          // @ts-ignore
          this.productService.addProduct({nomenclature: nomenclature.id}).pipe(
            finalize(() => this.isSaving = false)
          ).subscribe(products => this.dialogRef.close(products[0]));
        }
      },
      error: () => this.isSaving = false
    });
  }

  editProduct(send: any) {
    this.nomenclatureService.updatePartly(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(product => this.dialogRef.close(product));
  }

  copyProduct() {
    const send = {
      nomenclature_id: this.form.get('id').value,
      parent_id: null,
      name: this.form.get('name').value,
    };

    this.productService.copyStructure(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(products => this.dialogRef.close(products));
  }
}

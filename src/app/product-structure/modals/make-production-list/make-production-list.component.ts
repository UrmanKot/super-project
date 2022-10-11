import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductService} from '../../services/product.service';
import {Nomenclature} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-make-production-list',
  templateUrl: './make-production-list.component.html',
  styleUrls: ['./make-production-list.component.scss']
})
export class MakeProductionListComponent implements OnInit {
  isSaving: boolean = false;

  form: FormGroup = this.fb.group({
    nomenclature: [null],
    quantity: [1, [Validators.required, Validators.min(1)]],
    is_grouped: [false],
    root_nomenclature: [null]
  });

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<MakeProductionListComponent>,
    private readonly productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: { nomenclature: Nomenclature, rootId: number }
  ) { }

  ngOnInit(): void {
    this.form.get('is_grouped').disable();
    this.form.get('nomenclature').patchValue(this.data.nomenclature.id);
    this.form.get('root_nomenclature').patchValue(this.data.rootId);
  }

  onChangeQuantity() {
    if (this.form.get('quantity').value < 1) {
      this.form.get('quantity').patchValue(1);
    } else {
      if (this.form.get('quantity').value <= 1) {
        this.form.get('is_grouped').disable();
        this.form.get('is_grouped').patchValue(false);
      } else {
        this.form.get('is_grouped').enable();
      }
    }
  }

  onMakeProductionList(): void {
    this.isSaving = true;
    const send = {...this.form.value};
    this.productService.makeProductionList(send).subscribe({
      next: () => this.dialogRef.close(true),
      error: () => this.isSaving = false,
    });
  }
}

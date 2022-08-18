import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../models/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'pek-make-root-product',
  templateUrl: './make-root-product.component.html',
  styleUrls: ['./make-root-product.component.scss']
})
export class MakeRootProductComponent implements OnInit {
  isSaving: boolean = false;
  form: FormGroup = this.fb.group({
    category: [null, Validators.required]
  })

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<MakeRootProductComponent>,
    private readonly productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) { }

  ngOnInit(): void {
  }

  onSelectCategory(categoryId: number) {
    this.form.get('category').patchValue(categoryId);
  }

  onMakeRoot() {
    this.isSaving = true;
    this.productService.makeRoot(this.product.id, this.form.value).subscribe({
      next: () => this.dialogRef.close(true),
      error: () => this.isSaving = false,
    })
  }
}

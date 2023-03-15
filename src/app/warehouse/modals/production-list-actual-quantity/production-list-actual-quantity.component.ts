import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListService} from '../../services/list.service';
import {ListProduct} from '../../models/list-product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ListProductService} from '../../services/list-product.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'pek-production-list-actual-quantity',
  templateUrl: './production-list-actual-quantity.component.html',
  styleUrls: ['./production-list-actual-quantity.component.scss']
})
export class ProductionListActualQuantityComponent implements OnInit {
  isSaving = false;

  quantities: any[] = [];

  listProducts: ListProduct[] = [];
  listProduct: ListProduct;

  products: ListProduct[] = [];
  selected: any;

  form: FormGroup = this.fb.group({
    id: [<number>null],
    actual_quantity: [<number>null, [Validators.required, Validators.min(1)]],
  });

  constructor(
    private readonly dialogRef: MatDialogRef<ProductionListActualQuantityComponent>,
    private readonly listService: ListService,
    private readonly listProductService: ListProductService,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { listProduct: ListProduct },
  ) {
  }

  ngOnInit(): void {
    this.listProduct = Object.assign({}, this.data.listProduct);

    if (!this.listProduct.has_children) {
      this.form.get('id').patchValue(this.listProduct.id);
      this.form.get('actual_quantity').patchValue(0);
    } else {
      this.generateListProducts();
    }
  }

  generateListProducts() {
    const newProducts: ListProduct[] = [];

    this.listProduct.products.forEach(product => {
      if (!newProducts.find(p => p.technology.id === product.technology.id && p.nomenclature.id === product.nomenclature.id)) {
        product.children = this.listProduct.products.filter(p => p.technology.id === product.technology.id);
        newProducts.push(product);
      }
    });

    this.listProducts = newProducts;

    this.listProducts.forEach(product => this.quantities.push({
      id: product.id,
      products: product.children,
      quantity: 0,
    }))
  }

  onEditQuantity(evt: any, listProduct: ListProduct) {

    this.quantities.forEach(product => {
      if (product.products.find(p => p.id === listProduct.id)) {
        product.quantity = +evt.target.value;
      }
    })
  }

  onSave() {
    this.isSaving = true;
    if (!this.listProduct.has_children) {
      this.listProductService.updatePartly(this.form.value).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => this.dialogRef.close(true));
    } else {
      const send = [];

      this.quantities.forEach(product => {
        product.products.forEach((p, idx) => {
          if (idx <= product.quantity - 1) {
            send.push({
              id: p.id,
              actual_quantity: 1,
            })
          }
        })
      })

      this.listProductService.severalUpdatePartly(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => this.dialogRef.close(true));
    }
  }
}

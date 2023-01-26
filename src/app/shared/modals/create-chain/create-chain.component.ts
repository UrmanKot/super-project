import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderProduct} from '../../../procurement/models/order-product';
import {OrderType} from '@shared/components/order-page/order-page.component';
import {OrderService} from '../../../procurement/services/order.service';
import {finalize} from 'rxjs/operators';
import {PurchaseCategory} from '../../../purchasing/models/purchase-category';
import {PurchasingCategoryService} from '../../../purchasing/services/purchasing-category.service';

@Component({
  selector: 'pek-create-chain',
  templateUrl: './create-chain.component.html',
  styleUrls: ['./create-chain.component.scss']
})
export class CreateChainComponent implements OnInit {
  isSaving = false;
  isLoadingCategories = true;

  form: FormGroup = this.fb.group({
    supplier: [null, Validators.required],
    order_products_id: this.fb.array([]),
  });

  purchasingCategories: PurchaseCategory[] = [];
  selectedPurchasingCategoryId: number;

  orderProducts: OrderProduct[] = [];

  get products() {
    return this.form.get('order_products_id') as FormArray;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly orderService: OrderService,
    private dialogRef: MatDialogRef<CreateChainComponent>,
    private readonly purchasingCategoryService: PurchasingCategoryService,
    @Inject(MAT_DIALOG_DATA) public data: { products: OrderProduct[], orderType: OrderType }
  ) {
  }

  ngOnInit(): void {
    this.orderProducts = this.data.products.map(p => p);

    this.orderProducts.forEach(p => {
      const product = this.fb.group({
        id: p.id,
        quantity: [p.initial_quantity, [Validators.required, Validators.min(1), Validators.max(p.initial_quantity)]],
      });

      this.products.push(product);
    });

    if (this.data.orderType === 'purchase') {
      this.getPurchasingCategories();
    }
  }

  getPurchasingCategories() {
    this.purchasingCategoryService.getAll().subscribe(categories => {
      this.purchasingCategories = categories;
      this.isLoadingCategories = false;
    });
  }

  onCreate() {
    this.isSaving = true;

    const send = this.form.value;

    if (this.data.orderType === 'purchase') {
      Object.assign(send, {
        purchase_category: this.selectedPurchasingCategoryId,
        accounting_type: 1
      });
    }

    this.orderService.createChain(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(order => {
      this.dialogRef.close(order);
    });
  }

  onSelectCompany(id: number) {
    this.form.get('supplier').patchValue(id);
  }
}

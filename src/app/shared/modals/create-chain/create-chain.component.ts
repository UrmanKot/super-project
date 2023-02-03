import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderProduct} from '../../../procurement/models/order-product';
import {OrderType} from '@shared/components/order-page/order-page.component';
import {OrderService} from '../../../procurement/services/order.service';
import {finalize} from 'rxjs/operators';
import {PurchaseCategory} from '../../../purchasing/models/purchase-category';
import {PurchasingCategoryService} from '../../../purchasing/services/purchasing-category.service';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';

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

  selectedProducts = {};

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
    private readonly  warehouseProductService: WarehouseProductService,
    @Inject(MAT_DIALOG_DATA) public data: { products: OrderProduct[], orderType: OrderType }
  ) {
  }

  ngOnInit(): void {
    this.orderProducts = this.data.products.map(p => p);

    this.orderProducts.forEach(p => {
      const product = this.fb.group({
        id: p.id,
        quantity: [p.initial_quantity, [Validators.required, Validators.min(1)]],
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

  addControl(evt: { data: FormGroup }) {
    const formArray = [this.fb.group({id: [null, [Validators.required]], quantity: [1, [Validators.min(1)]]})];
    evt.data.addControl('warehouse_products', this.fb.array(formArray));
  }

  removeControl(evt: { data: FormGroup }) {
    evt.data.removeControl('warehouse_products');
  }

  addWarehouseControl(group: FormGroup) {
    console.log(group);
    const arr = group.get('warehouse_products') as FormArray;
    arr.push(this.fb.group({id: [null, [Validators.required]], quantity: [1, [Validators.min(1)]]}));
  }

  removeWarehouseControl(group: FormGroup, i: number) {
    const arr = group.get('warehouse_products') as FormArray;
    arr.removeAt(i);
  }

  onSearchProductsToWarehouse(item: FormControl) {
    this.warehouseProductService.openSearchInWarehouseModal().subscribe(product => {
      this.selectedProducts[product.id] = product;
      item.patchValue(product.id);
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {WarehouseProduct} from '../../models/warehouse-product';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'pek-warehouse-items',
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.scss']
})
export class WarehouseItemsComponent implements OnInit {
  isLoading = false;
  selectedProduct: WarehouseProduct;
  products: WarehouseProduct[] = [];

  searchForm: FormGroup = this.fb.group({
    warehouse: [null],
  });

  constructor(
    private readonly fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  onAddItem() {

  }

  getProducts() {

  }

  getProductsAll() {

  }

  selectWarehouse(warehouseId: number) {
    let value = null;
    if (warehouseId) value = warehouseId;
    this.searchForm.get('warehouse').patchValue(value);
  }
}

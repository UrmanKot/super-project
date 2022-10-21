import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhysicalInventoryService} from '../../../services/physical-inventory.service';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {InventoryList} from '../../../models/physical-inventory';
import {Product} from '../../../../product-structure/models/product';

@Component({
  selector: 'pek-physical-inventory-products',
  templateUrl: './physical-inventory-products.component.html',
  styleUrls: ['./physical-inventory-products.component.scss']
})
export class PhysicalInventoryProductsComponent implements OnInit, OnDestroy {

  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    description: [null],
    warehouse: [null],
    category: [null],
    locator: {value: null, disabled: true},
    type: [null],
    acceptedByInvoices: [null],
    page: [1],
    found_row_id: [null]
  });

  selectedInventoryProduct: Product;
  inventoryProducts: Product[] = [];

  isLoadingCurrentInventory = true;
  isLoadingInventoryList = true;

  query: QuerySearch[] = [
    {name: 'paginated', value: 'true'},
    {name: 'page', value: this.searchForm.get('page').value},
  ];

  countProducts = 0;
  inventoryId: number;
  currentInventory: any = [];

  private destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private physicalInventoryService: PhysicalInventoryService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.inventoryId = +id),
      switchMap(() => this.physicalInventoryService.getById(this.inventoryId)),
      takeUntil(this.destroy$)
    ).subscribe(inventory => {
      this.currentInventory = inventory;
      this.isLoadingCurrentInventory = false;
    });

    this.getInventoryProductsForPagination();
  }

  getInventoryProductsForPagination() {
    this.physicalInventoryService.getInventoryProductsListsForPagination(this.inventoryId, this.query).subscribe(inventoryLists => {
      inventoryLists.results.forEach(list => {
        list.products[0].countProducts = list.products.length;
        list.products[0].products = [...list.products];
        list.products[0].is_scanned_root = list.is_scanned;
        list.products[0].root_id = list.id;
        this.inventoryProducts.push(list.products[0]);
      });

      this.countProducts = inventoryLists.count;
      this.isLoadingInventoryList = false;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  selectWarehouse(warehouseId: number) {
    let value = null;
    if (warehouseId) value = warehouseId;
    this.searchForm.get('warehouse').patchValue(value);
  }

  paginate($event: any) {

  }
}

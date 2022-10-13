import {Component, OnDestroy, OnInit} from '@angular/core';
import {Warehouse} from '../../models/warehouse';
import {WarehouseService} from '../../services/warehouse.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-warehouse-warehouses',
  templateUrl: './warehouse-warehouses.component.html',
  styleUrls: ['./warehouse-warehouses.component.scss']
})
export class WarehouseWarehousesComponent implements OnInit, OnDestroy {

  warehouses: Warehouse[] = [];
  selectedWarehouse: Warehouse;
  isLoading = true;

  private destroy$ = new Subject();

  constructor(
    private readonly warehouseService: WarehouseService,
  ) {
  }

  ngOnInit(): void {
    this.getWarehouses();
  }

  getWarehouses() {
    this.warehouseService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(warehouses => {
      this.warehouses = warehouses;
      this.isLoading = false;
    });
  }

  onAddWarehouse() {

  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Warehouse} from '../../models/warehouse';
import {WarehouseService} from '../../services/warehouse.service';
import {Subject, takeUntil} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pek-warehouse-warehouses',
  templateUrl: './warehouse-warehouses.component.html',
  styleUrls: ['./warehouse-warehouses.component.scss']
})
export class WarehouseWarehousesComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [{
    label: 'Selected Warehouse',
    items: [
      {
        label: 'Locators',
        icon: 'pi pi-bars',
        command: () => this.onGoToWarehouseLocators()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditTechnology()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveTechnology()
      }
    ]
  }];

  warehouses: Warehouse[] = [];
  selectedWarehouse: Warehouse;
  isLoading = true;

  private destroy$ = new Subject();

  constructor(
    private readonly warehouseService: WarehouseService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
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

  onGoToWarehouseLocators() {
    this.router.navigate([ this.selectedWarehouse.id, 'locators'], {relativeTo: this.route})
  }

  onEditTechnology() {
    return undefined;
  }

  onRemoveTechnology() {
    return undefined;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

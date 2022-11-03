import {Component, OnDestroy, OnInit} from '@angular/core';
import {Warehouse} from '../../models/warehouse';
import {WarehouseService} from '../../services/warehouse.service';
import {Subject, takeUntil} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';

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
    private readonly modalService: ModalService,
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
    this.warehouseService.createEditWarehouseModal('create').subscribe(warehouse => {
      if (warehouse) {
        this.warehouses.unshift(warehouse);
      }
    });
  }

  onGoToWarehouseLocators() {
    this.router.navigate([this.selectedWarehouse.id, 'locators'], {relativeTo: this.route});
  }

  onEditTechnology() {
    this.warehouseService.createEditWarehouseModal('edit', this.selectedWarehouse).subscribe(warehouse => {
      if (warehouse) {
        const index = this.warehouses.findIndex(t => t.id === this.selectedWarehouse.id);
        this.warehouses[index] = warehouse;
        this.selectedWarehouse = this.warehouses[index];
      }
    });
  }

  onRemoveTechnology() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.warehouseService.delete(this.selectedWarehouse).subscribe(() => {
          const index = this.warehouses.findIndex(w => w.id === this.selectedWarehouse.id);
          this.warehouses.splice(index, 1);
          this.selectedWarehouse = null;
        });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

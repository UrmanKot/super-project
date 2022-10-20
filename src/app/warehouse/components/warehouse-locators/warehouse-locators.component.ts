import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {LocatorService} from '../../services/locator.service';
import {Locator} from '../../models/locator';
import {WarehouseService} from '../../services/warehouse.service';
import {Warehouse} from '../../models/warehouse';
import {MenuItem} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-warehouse-locators',
  templateUrl: './warehouse-locators.component.html',
  styleUrls: ['./warehouse-locators.component.scss']
})
export class WarehouseLocatorsComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = [{
    label: 'Selected Locator',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditLocator()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveLocator()
      }
    ]
  }];

  warehouseId: number;
  currentWarehouse: Warehouse;

  locators: Locator[] = [];
  selectedLocator: Locator;

  isLoading = true;
  isLoadingWarehouse = true;

  private destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private locatorService: LocatorService,
    private readonly warehouseService: WarehouseService,
  ) {
  }

  ngOnInit(): void {
    this.getLocators();
    this.getCurrentWarehouse();
  }

  getLocators() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.warehouseId = +id),
      switchMap(() => this.locatorService.get([{name: 'warehouse', value: this.warehouseId}])),
      takeUntil(this.destroy$)
    ).subscribe(locators => {
      this.locators = locators;
      this.isLoading = false;
    });
  }

  getCurrentWarehouse() {
    this.warehouseService.getById(this.warehouseId).subscribe(warehouse => {
      this.currentWarehouse = warehouse;
      this.isLoadingWarehouse = false;
    });
  }

  onAddLocator() {

  }

  onEditLocator() {
  }

  onRemoveLocator() {

  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

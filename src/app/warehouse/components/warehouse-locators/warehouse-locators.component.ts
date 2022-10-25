import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {LocatorService} from '../../services/locator.service';
import {Locator} from '../../models/locator';
import {WarehouseService} from '../../services/warehouse.service';
import {Warehouse} from '../../models/warehouse';
import {MenuItem} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';
import {ModalService} from '@shared/services/modal.service';

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
    private readonly modalService: ModalService,
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
    this.locatorService.createEditLocatorModal('create').subscribe(locator => {
      if (locator) {
        this.locators.unshift(locator);
      }
    });
  }

  onEditLocator() {
    this.locatorService.createEditLocatorModal('edit', this.selectedLocator).subscribe(locator => {
      if (locator) {
        const index = this.locators.findIndex(t => t.id === this.selectedLocator.id);
        this.locators[index] = locator;
        this.selectedLocator = this.locators[index];
      }
    });
  }

  onRemoveLocator() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.locatorService.delete(this.selectedLocator).subscribe(() => {
          const index = this.locators.findIndex(w => w.id === this.selectedLocator.id);
          this.locators.splice(index, 1);
            this.selectedLocator = null;
        });
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

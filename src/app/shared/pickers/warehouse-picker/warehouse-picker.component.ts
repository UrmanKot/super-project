import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {WarehouseService} from '../../../warehouse/services/warehouse.service';
import {Warehouse} from '../../../warehouse/models/warehouse';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-warehouse-picker',
  templateUrl: './warehouse-picker.component.html',
  styleUrls: ['./warehouse-picker.component.scss']
})
export class WarehousePickerComponent implements OnInit, OnChanges, OnDestroy {
  @Output() selectWarehouse: EventEmitter<number> = new EventEmitter<number>();
  @Input() isDisabled: boolean = false;
  @Input() acceptedWarehouseIds: number[] = [];
  @Input() selectedWarehouseId: number;

  selectWarehouseId: number;

  isLoading = true;
  warehouses: Warehouse[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly warehouseService: WarehouseService,
  ) {
  }

  ngOnInit(): void {
    this.getWarehouses();

    if (this.selectedWarehouseId) {
      this.selectWarehouseId = this.selectedWarehouseId;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('acceptedWarehouseIds' in changes) {
      this.filterWarehouses();
    }
  }

  filterWarehouses() {
    if (this.acceptedWarehouseIds.length > 0) {
      let newWarehouses: Warehouse[] = [];

      this.acceptedWarehouseIds.forEach(id => {
        newWarehouses = [...newWarehouses, ...this.warehouses.filter(w => w.id === id)];
      });

      this.warehouses = [...newWarehouses];
    }
  }

  getWarehouses() {
    this.warehouseService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(warehouses => {
      this.warehouses = warehouses;
      this.filterWarehouses();
      this.isLoading = false;
    });
  }

  onSelectWarehouse() {
    this.selectWarehouse.emit(this.selectWarehouseId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

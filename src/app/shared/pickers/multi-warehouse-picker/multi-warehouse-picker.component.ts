import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {WarehouseService} from '../../../warehouse/services/warehouse.service';
import {Subject, takeUntil} from 'rxjs';
import {Currency} from '../../../warehouse/models/warehouse';

@Component({
  selector: 'pek-multi-warehouse-picker',
  templateUrl: './multi-warehouse-picker.component.html',
  styleUrls: ['./multi-warehouse-picker.component.scss']
})
export class MultiWarehousePickerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() currentWarehousesIds: number[] = [];
  @Output() selectWarehouses: EventEmitter<Currency[]> = new EventEmitter<Currency[]>();

  isLoading = true;
  warehouses: Currency[] = [];
  selectedWarehouses: Currency[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly warehouseService: WarehouseService
  ) {
  }

  ngOnInit(): void {
    this.warehouseService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(warehouses => {
      this.warehouses = warehouses;
      this.findWarehouses();
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentWarehousesIds' in changes) {
      this.selectedWarehouses = [];
      this.findWarehouses();
    }
  }

  onSelectWarehouses(warehouses: Currency[]) {
    this.selectWarehouses.emit(warehouses);
  }

  findWarehouses() {
    if (this.currentWarehousesIds?.length > 0) {
      this.currentWarehousesIds.forEach(id => {
        const findWarehouses = this.warehouses.find(t => t.id === id);

        if (findWarehouses) {
          this.selectedWarehouses.push(findWarehouses);
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

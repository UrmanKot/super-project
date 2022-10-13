import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {WarehouseService} from '../../../warehouse/services/warehouse.service';
import {Warehouse} from '../../../warehouse/models/warehouse';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-warehouse-picker',
  templateUrl: './warehouse-picker.component.html',
  styleUrls: ['./warehouse-picker.component.scss']
})
export class WarehousePickerComponent implements OnInit, OnDestroy {
  @Output() selectWarehouse: EventEmitter<number> = new EventEmitter<number>();
  @Input() isDisabled: boolean = false;

  selectWarehouseId: number;

  isLoading = true;
  warehouses: Warehouse[];

  private destroy$ = new Subject();

  constructor(
    private readonly warehouseService: WarehouseService,
  ) { }

  ngOnInit(): void {
    this.getWarehouses();
  }

  getWarehouses() {
    this.warehouseService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(warehouses => {
      this.warehouses = warehouses;
      this.isLoading = false;
    })
  }

  onSelectWarehouse() {
    this.selectWarehouse.emit(this.selectWarehouseId)
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

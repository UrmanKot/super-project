import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Warehouse} from '../../../warehouse/models/warehouse';
import {Subject, takeUntil} from 'rxjs';
import {MeasureUnitService} from '../../../warehouse/services/measure-unit.service';
import {MeasureUnit} from '../../../product-structure/models/measure-unit';

@Component({
  selector: 'pek-unit-measure-picker',
  templateUrl: './unit-measure-picker.component.html',
  styleUrls: ['./unit-measure-picker.component.scss']
})
export class UnitMeasurePickerComponent implements OnInit {
  @Input() currentMeasureUnitId: number;
  @Output() selectMeasureUnit: EventEmitter<number> = new EventEmitter<number>();
  @Input() isDisabled: boolean = false;

  selectMeasureUnitId: number;

  isLoading = true;
  measureUnits: MeasureUnit[];

  private destroy$ = new Subject();

  constructor(
    private readonly measureUnitService: MeasureUnitService
  ) { }

  ngOnInit(): void {
    this.getMeasureUnit();

    if (this.currentMeasureUnitId) {
      this.selectMeasureUnitId = this.currentMeasureUnitId;
    }
  }

  getMeasureUnit() {
    this.measureUnitService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(measureUnits => {
      this.measureUnits = measureUnits;
      this.isLoading = false;
    })
  }

  onSelectWarehouse() {
    this.selectMeasureUnit.emit(this.selectMeasureUnitId)
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

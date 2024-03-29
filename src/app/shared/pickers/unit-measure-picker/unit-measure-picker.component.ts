import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Currency} from '../../../warehouse/models/warehouse';
import {Subject, takeUntil} from 'rxjs';
import {UnitMeasureService} from '../../../warehouse/services/unit-measure.service';
import {UnitMeasure} from '../../../product-structure/models/unit-measure';

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
  unitsMeasure: UnitMeasure[];

  private destroy$ = new Subject();

  constructor(
    private readonly measureUnitService: UnitMeasureService
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
    ).subscribe(unitsMeasure => {
      this.unitsMeasure = unitsMeasure;
      this.isLoading = false;
    })
  }

  onSelectWarehouse() {
    this.selectMeasureUnit.emit(this.selectMeasureUnitId)
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

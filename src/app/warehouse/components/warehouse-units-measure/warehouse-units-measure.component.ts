import {Component, OnDestroy, OnInit} from '@angular/core';
import {UnitMeasureService} from '../../services/unit-measure.service';
import {UnitMeasure} from '../../../product-structure/models/unit-measure';
import {MenuItem} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-warehouse-units-measure',
  templateUrl: './warehouse-units-measure.component.html',
  styleUrls: ['./warehouse-units-measure.component.scss']
})
export class WarehouseUnitsMeasureComponent implements OnInit, OnDestroy  {
  menuItems: MenuItem[] = [{
    label: 'Selected Unit',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditUnit()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveUnit()
      }
    ]
  }];

  isLoading = true;

  unitsMeasure: UnitMeasure[] = [];
  selectedUnitMeasure: UnitMeasure;

  private destroy$ = new Subject();

  constructor(
    private readonly unitMeasureService: UnitMeasureService
  ) { }

  ngOnInit(): void {
    this.getUnitsMeasure();
  }

  getUnitsMeasure() {
    this.unitMeasureService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(unitsMeasure => {
      this.unitsMeasure = unitsMeasure;
      this.isLoading = false;
    })
  }

  onAddUnit() {

  }

  onEditUnit() {
    return undefined;
  }

  onRemoveUnit() {
    return undefined;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

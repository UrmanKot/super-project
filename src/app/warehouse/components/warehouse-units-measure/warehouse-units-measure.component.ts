import {Component, OnDestroy, OnInit} from '@angular/core';
import {UnitMeasureService} from '../../services/unit-measure.service';
import {UnitMeasure} from '../../../product-structure/models/unit-measure';
import {MenuItem} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';
import {ModalService} from '@shared/services/modal.service';

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
    private readonly unitMeasureService: UnitMeasureService,
    private readonly modalService: ModalService,
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
    this.unitMeasureService.createEditUnitMeasureModal('create').subscribe(unitMeasure => {
      if (unitMeasure) {
        this.unitsMeasure.unshift(unitMeasure);
      }
    });
  }

  onEditUnit() {
    this.unitMeasureService.createEditUnitMeasureModal('edit', this.selectedUnitMeasure).subscribe(unitMeasure => {
      if (unitMeasure) {
        const index = this.unitsMeasure.findIndex(t => t.id === this.selectedUnitMeasure.id);
        this.unitsMeasure[index] = unitMeasure;
        this.selectedUnitMeasure = this.unitsMeasure[index];
      }
    });
  }

  onRemoveUnit() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.unitMeasureService.delete(this.selectedUnitMeasure).subscribe(() => {
          const index = this.unitsMeasure.findIndex(w => w.id === this.selectedUnitMeasure.id);
          this.unitsMeasure.splice(index, 1);
          this.selectedUnitMeasure = null;
        });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

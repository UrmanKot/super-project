import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TechnicalEquipment} from '../../../../models/technical-equipment';
import {TechnicalEquipmentService} from '../../../../services/technical-equipment.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-technical-equipments-table',
  templateUrl: './technical-equipments-table.component.html',
  styleUrls: ['./technical-equipments-table.component.scss']
})
export class TechnicalEquipmentsTableComponent implements OnInit, OnDestroy {
  @Input() technicalEquipments: TechnicalEquipment[] = [];
  @Output() isSelectedEquipmentEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() equipmentChanged: EventEmitter<{ index: number, technicalEquipment: TechnicalEquipment }>
    = new EventEmitter<{ index: number; technicalEquipment: TechnicalEquipment }>();
  @Output() deleteEquipmentIndex: EventEmitter<number> = new EventEmitter<number>();
  selectedTechnicalEquipment: TechnicalEquipment;
  private destroy$ = new Subject();

  constructor(
    private technicalEquipmentService: TechnicalEquipmentService
  ) {
  }

  ngOnInit(): void {
  }

  emitItemSelected(): void {
    this.isSelectedEquipmentEmitter.emit(!!this.selectedTechnicalEquipment);
  }

  emitDeletedIndex(): void {
    const index = this.technicalEquipments.findIndex(equipments => equipments === this.selectedTechnicalEquipment);
    this.deleteEquipmentIndex.emit(index);
    this.selectedTechnicalEquipment = null;
    this.emitItemSelected();
  }

  editTechnicalEquipment() {
    const index = this.technicalEquipments.findIndex(equipments => equipments === this.selectedTechnicalEquipment);
    this.technicalEquipmentService.openEditTechnicalEquipment(this.selectedTechnicalEquipment)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        if (res) {
          this.equipmentChanged.emit({index: index, technicalEquipment: res});
          this.selectedTechnicalEquipment = null;
          this.emitItemSelected();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

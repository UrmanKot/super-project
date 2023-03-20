import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {TechnicalEquipment} from '../../../../models/technical-equipment';
import {TechnicalEquipmentService} from '../../../../services/technical-equipment.service';
import {Subject, takeUntil} from 'rxjs';
import {Technology} from '../../../../models/technology';

@Component({
  selector: 'pek-technical-equipments-table',
  templateUrl: './technical-equipments-table.component.html',
  styleUrls: ['./technical-equipments-table.component.scss']
})
export class TechnicalEquipmentsTableComponent implements OnInit, OnDestroy, OnChanges {
  @Input() technicalEquipments: TechnicalEquipment[] = [];
  @Input() technologies: Technology[] = [];
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

  ngOnChanges(changes: SimpleChanges): void {
       if ('technologies' in changes) {
         if (changes['technologies'].previousValue && changes['technologies'].currentValue.length < changes['technologies'].previousValue.length ) {
           changes['technologies'].previousValue.forEach(technology => {
             const isDeleted = changes['technologies'].currentValue.findIndex(el => el.id === technology.id) < 0;
             if (isDeleted) {
               const toDeleteTE = this.technicalEquipments.filter(el => el.technology.id === technology.id);
               toDeleteTE.forEach((el, index) => {
                 const delIndex = this.technicalEquipments.findIndex(el2 => el2.id === el.id);
                 this.deleteEquipmentIndex.emit(delIndex);
               });
             }
           });
         }
       }
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
    this.technicalEquipmentService.openEditTechnicalEquipment(this.selectedTechnicalEquipment, this.technologies)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        if (res) {
          res.technology = this.technologies.find(el => el.id === res.technology.id);
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

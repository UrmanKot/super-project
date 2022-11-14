import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {CRMEmployee} from '../../models/crm-employee';
import {Subject, takeUntil} from 'rxjs';
import {CrmEmployeeService} from '../../services/crm-employee.service';
import {EventType} from '../../models/event-type';
import {EventTypesService} from '../../services/event-types.service';

@Component({
  selector: 'pek-crm-multi-event-types-picker',
  templateUrl: './crm-multi-event-types-picker.component.html',
  styleUrls: ['./crm-multi-event-types-picker.component.scss']
})
export class CrmMultiEventTypesPickerComponent implements OnInit {

  @Input() currentEventTypesIds: number[] = [];
  @Output() selectEventTypes: EventEmitter<EventType[]> = new EventEmitter<EventType[]>();

  isLoading = true;
  eventTypes: EventType[] = [];
  selectedEventType: EventType[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly crmEmployeeService: CrmEmployeeService,
    private readonly eventTypesService: EventTypesService,
  ) {
  }

  ngOnInit(): void {
    this.eventTypesService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(eventTypes => {
      this.eventTypes = eventTypes;
      this.findEventTypes();
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentEmployeeIds' in changes) {
      this.selectedEventType = [];
      this.findEventTypes();
    }
  }

  onSelectEventTypes(eventTypes: EventType[]) {
    this.selectEventTypes.emit(eventTypes);
  }

  findEventTypes() {
    if (this.currentEventTypesIds.length > 0) {
      this.currentEventTypesIds.forEach(id => {
        const findEventType = this.eventTypes.find(t => t.id === id);

        if (findEventType) {
          this.selectedEventType.push(findEventType);
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

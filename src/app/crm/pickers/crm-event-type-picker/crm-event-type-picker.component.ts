import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {EventType} from '../../models/event-type';
import {EventTypesService} from '../../services/event-types.service';

@Component({
  selector: 'pek-crm-event-type-picker',
  templateUrl: './crm-event-type-picker.component.html',
  styleUrls: ['./crm-event-type-picker.component.scss']
})
export class CrmEventTypePickerComponent implements OnInit {
  @Output() selectEventType: EventEmitter<number> = new EventEmitter<number>();
  @Input() currentEventTypeId: any;
  isLoading = true;
  eventTypes: EventType[] = [];
  selectedEventTypeId: number;

  private destroy$ = new Subject();

  constructor(
    private readonly eventTypeService: EventTypesService,
  ) {
  }

  ngOnInit(): void {
    this.eventTypeService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(eventTypes => {
      this.eventTypes = eventTypes;

      if (this.currentEventTypeId) {
        this.selectedEventTypeId = this.currentEventTypeId;
      }

      this.isLoading = false;
    });
  }

  onSelectEventType() {
    this.selectEventType.emit(this.selectedEventTypeId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

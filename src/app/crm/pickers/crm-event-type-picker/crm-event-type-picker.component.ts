import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {EventType} from '../../models/event-type';
import {EventTypesService} from '../../services/event-types.service';
import {QuerySearch} from '@shared/models/other';

@Component({
  selector: 'pek-crm-event-type-picker',
  templateUrl: './crm-event-type-picker.component.html',
  styleUrls: ['./crm-event-type-picker.component.scss']
})
export class CrmEventTypePickerComponent implements OnInit {
  @Output() selectEventType: EventEmitter<number> = new EventEmitter<number>();
  @Input() currentEventTypeId: any;
  @Input() filters: QuerySearch[] = [];
  isLoading = true;
  eventTypes: EventType[] = [];
  selectedEventTypeId: number;

  private destroy$ = new Subject();

  constructor(
    private readonly eventTypeService: EventTypesService,
  ) {
  }

  ngOnInit(): void {
    if (this.filters.length > 0) {
      this.eventTypeService.getByFilters(this.filters).pipe(
        takeUntil(this.destroy$)
      ).subscribe(eventTypes => {
        this.eventTypes = eventTypes;

        if (this.currentEventTypeId) {
          this.selectedEventTypeId = this.currentEventTypeId;
        }

        this.isLoading = false;
      });
    } else {
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
  }

  onSelectEventType() {
    this.selectEventType.emit(this.selectedEventTypeId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

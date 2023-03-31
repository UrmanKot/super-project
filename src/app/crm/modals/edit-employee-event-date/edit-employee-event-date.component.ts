import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventsListService} from '../../services/events-list.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {QuerySearch} from '@shared/models/other';
import {Subject} from 'rxjs';
import {AdapterService} from '@shared/services/adapter.service';
import {EventItem} from '../../models/event-item';
import {MenuItem, MessageService} from 'primeng/api';


@Component({
  selector: 'pek-edit-employee-event-date',
  templateUrl: './edit-employee-event-date.component.html',
  styleUrls: ['./edit-employee-event-date.component.scss']
})
export class EditEmployeeEventDateComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[] = [
    {
      label: 'Selected Event',
      items: [
        {
          label: 'Event Card',
          icon: 'pi pi-calendar',
          command: () => this.onGoEvent()
        },
        {
          label: 'Edit',
          icon: 'pi pi-pencil',
          command: () => this.onEditEvent()
        },
      ]
    }
  ];

  isLoading = false;

  form: FormGroup = this.fb.group({
    end: [null, [Validators.required]],
    start: [null, [Validators.required]],
    employee_ids: [[]],
    canOverlap: [false],
  });

  destroy$ = new Subject();

  query: QuerySearch[] = [];

  eventId: number;

  constructor(
    private eventsListService: EventsListService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditEmployeeEventDateComponent>,
    private messageService: MessageService,
    private readonly adapterService: AdapterService,
    @Inject(MAT_DIALOG_DATA) public data: { employeeIds: number[], event: EventItem },
  ) {
  }

  ngOnInit(): void {
    this.form.get('employee_ids').patchValue(this.data.employeeIds.join(','));
    if (this.data.event.id) {
      this.eventId = this.data.event.id;

    }
    if (this.data.event.start) {
      this.form.get('start').patchValue(this.data.event.start);
    }
    if (this.data.event.end) {
      this.form.get('end').patchValue(this.data.event.end);
    }
    this.search();
  }

  events: EventItem[] = [];
  selectedEvent: EventItem;

  search() {
    this.isLoading = true;
    this.selectedEvent = null;
    this.events = [];
    this.destroy$.next(true);

    this.query = [
      {name: 'employee_ids', value: this.form.get('employee_ids').value},
      {name: 'get_colliding_events_events', value: true},
    ];
    console.log('this.form.get(\'start\').value', this.form.get('start').value);
    if (this.form.get('start').value) {
      this.query.push({
        name: 'from_datetime',
        value: this.adapterService.dateTimeAdapter(this.form.get('start').value)
      });
    } else {
      this.query.push({
        name: 'from_datetime',
        value: this.adapterService.dateTimeAdapter(new Date())
      });
    }

    if (this.form.get('end').value) {
      this.query.push({name: 'to_datetime', value: this.adapterService.dateTimeAdapter(this.form.get('end').value)});
    }

    this.getEvents();
  }

  getEvents() {
    this.eventsListService.getShorts(this.query).subscribe(events => {
      this.events = events;

      this.events.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
      this.findCollidingAndSortEvents();
      this.isLoading = false;
    });
  }

  disableEmployees() {
    if (this.events.length === 0 && this.form.get('end').value && this.form.get('start').value) return false;

    if (this.events.some(e => e.isDatesColliding) && !this.form.get('canOverlap').value || !this.form.get('end').value || !this.form.get('start').value) {
      return true;
    }

    return false;
  }

  findCollidingAndSortEvents(): void {
    this.events  = this.events.filter(event => event.id !== this.eventId);
    this.events.forEach(event => {
      event.startDate = new Date(event.start);
      if (this.form.get('start').value) {
        const eventStartDate = new Date(event.start);
        const eventEndDate = new Date(event.end);
        event.isDatesColliding = this.form.get('start').value <= eventEndDate && this.form.get('end').value >= eventStartDate;
      } else {
        event.isDatesColliding = false;
      }
    });
  }

  onAccept() {
    if (this.events.filter(el => el.isDatesColliding).length > 0 && !this.form.get('canOverlap').value ) {
      this.messageService.add({severity: 'error', summary: 'Dates colliding.', detail: `Check for colliding dates!`});
      return;
    }

    this.dialogRef.close({start: this.form.get('start').value, end: this.form.get('end').value, canOverlap: this.form.get('canOverlap').value});
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private onEditEvent() {
    this.eventsListService.openCreateEventEventModal('edit', 'withEmployee', this.selectedEvent).subscribe(event => {
      if (event) {
        this.search();
      }
    });
  }

  private onGoEvent() {
    const link = 'crm/events/' + this.selectedEvent.id;
    window.open(link, '_blank');
  }

  onSetStartDate(date: Date) {
    this.form.get('start').patchValue(date);
    // this.search();
  }

  onSetEndDate(date: Date) {
    this.form.get('end').patchValue(date);
    // this.search();
  }

  onClearStartDate() {
    this.form.get('start').patchValue(null);
    this.search();
  }

  onClearEndDate() {
    this.form.get('end').patchValue(null);
    this.search();
  }

  onSelectStartDate(date: Date) {
    if (date instanceof Date) {
      this.form.get('start').patchValue(date);
      this.search();
    }
  }

  onSelectEndDate(date: Date) {
    if (date instanceof Date) {
      this.form.get('end').patchValue(date);
      this.search();
    }
  }

  onCloseStartDate(date: Date) {
    // this.form.get('start').patchValue(date);
    // this.search();
  }
}

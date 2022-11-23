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
  });

  destroy$ = new Subject();

  query: QuerySearch[] = [];

  constructor(
    private eventsListService: EventsListService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditEmployeeEventDateComponent>,
    private messageService: MessageService,
    private readonly adapterService: AdapterService,
    @Inject(MAT_DIALOG_DATA) public employeeIds: number[],
  ) {
  }

  ngOnInit(): void {
    this.form.get('employee_ids').patchValue(this.employeeIds.join(','));
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
    return this.events.some(e => e.isDatesColliding);
  }

  findCollidingAndSortEvents(): void {
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
    if (this.events.filter(el => el.isDatesColliding).length > 0) {
      this.messageService.add({severity: 'error', summary: 'Dates colliding.', detail: `Check for colliding dates!`});
      return;
    }

    this.dialogRef.close({start: this.form.get('start').value, end: this.form.get('end').value});
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
}

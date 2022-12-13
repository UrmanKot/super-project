import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CrmEmployeeService} from '../../services/crm-employee.service';
import {EventsListService} from '../../services/events-list.service';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {EventService} from '../../services/event.service';
import {EventItem} from '../../models/event-item';
import {QuerySearch} from '@shared/models/other';
import {Paginator} from 'primeng/paginator';
import {fromEvent, Subject, Subscription, takeUntil} from 'rxjs';
import {debounceTime, map, tap} from 'rxjs/operators';
import {MenuItem} from 'primeng/api';
import {CRMEmployee} from '../../models/crm-employee';
import {EventType} from '../../models/event-type';
import {AddEventModalType} from '../../models/company';

@Component({
  selector: 'pek-crm-events',
  templateUrl: './crm-events.component.html',
  styleUrls: ['./crm-events.component.scss']
})
export class CrmEventsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxDescription') searchBoxDescription;

  menuItems: MenuItem[] = [{
    label: 'Selected Event',
    items: [
      {
        label: 'Event Card',
        icon: 'pi pi-calendar',
        command: () => this.onGoEventCard()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditEvent(),
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveEvent()
      }
    ]
  }];

  isShowAll = false;

  tableScrollHeight = '29.625rem';
  isHideFilters = false;

  searchForm = this.fb.group({
    employee: [[]],
    description: [null],
    start: [null],
    end: [null],
    events: [[]],
    externalEvent: [[]],
  });

  destroy$ = new Subject();

  isLoading = false;

  query: QuerySearch[] = [];

  rangeCalendar: any = [new Date(), new Date()];
  minDateRange = null;

  eventsList: EventItem[] = [];
  selectedEventItem: EventItem;

  hideAutoEvents = true;

  minDate = null;
  maxDate = null;

  internal: any = {};
  external: any = {};
  autoEvents: any = {};

  dSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private crmEmployeesService: CrmEmployeeService,
    private eventsListService: EventsListService,
    private eventsService: EventService,
    private adapterService: AdapterService,
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.getEventsDays();
  }

  ngAfterViewInit() {
    this.dSub = fromEvent(this.searchBoxDescription.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedEventItem = null),
        map(() => this.searchBoxDescription.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
        this.search();
      });
  }

  getEvents() {
    this.eventsListService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(eventsList => {
      eventsList.sort((a, b) => {
        b.start = new Date(b.start);
        a.start = new Date(a.start);
        return b.start.getTime() - a.start.getTime();
      });

      this.eventsList = eventsList;
      this.isLoading = false;
    });
  }

  getEventsDays() {
    this.eventsListService.getByEventsDays().pipe(
      takeUntil(this.destroy$)
    ).subscribe(dayEvents => {
      dayEvents.forEach(x => {
        if (x.external_events > 0) {
          this.external[x.date] = x;
        }
        if (x.internal_events > 0) {
          this.internal[x.date] = x;
        }
        if (x.auto_events > 0) {
          this.autoEvents[x.date] = x;
        }
      });
    });
  }

  onEventsRange() {
    if (this.rangeCalendar[0] && this.rangeCalendar[1]) {
      this.searchForm.get('start').patchValue(this.rangeCalendar[0]);
      this.searchForm.get('end').patchValue(this.rangeCalendar[1]);
      this.search();
      this.minDateRange = null;
    } else if (this.rangeCalendar[0]) {
      this.minDateRange = this.rangeCalendar[0];
    }

    console.log(this.rangeCalendar);
  }

  search() {
    this.isLoading = true;
    this.eventsList = [];
    this.query = [];
    this.selectedEventItem = null;
    this.destroy$.next(true);

    if (this.searchForm.get('start').value) {
      this.query.push({
        name: 'from_datetime',
        value: this.adapterService.dateTimeAdapter(new Date(this.searchForm.get('start').value.setHours(0, 0, 0, 0))),
      });
    }

    if (this.searchForm.get('end').value) {
      this.query.push({
        name: 'to_datetime',
        value: this.adapterService.dateTimeAdapter(new Date(this.searchForm.get('end').value.setHours(23, 59, 59, 999))),
      });
    }

    if (this.searchForm.get('employee').value.length > 0) {
      this.query.push({
        name: 'employee_ids',
        value: this.searchForm.value.employee.join(','),
      });
    }

    if (this.searchForm.get('description').value) {
      this.query.push({
        name: 'description',
        value: this.searchForm.get('description').value,
      });
    }

    if (this.searchForm.get('events').value || this.searchForm.get('externalEvent').value) {
      const eventsIds: number[] = [];

      if (this.searchForm.get('events').value.length > 0) {
        this.searchForm.get('events').value.forEach(id => eventsIds.push(id));
      }

      if (this.searchForm.get('externalEvent').value.length > 0) {
        this.searchForm.get('externalEvent').value.forEach(id => eventsIds.push(id));
      }

      if (eventsIds.length > 0) {
        this.query.push({name: 'event_type_ids', value: eventsIds.join(',')});
      }
    }

    if (this.hideAutoEvents) {
      this.query.push({
        name: 'hide_auto_events',
        value: this.hideAutoEvents,
      });
    }

    this.getEvents();
  }

  getEventsCount(date) {
    const month = date.month < 9 ? `0${date.month + 1}` : date.month + 1;
    const day = date.day < 10 ? `0${date.day}` : date.day;
    const formatted = `${date.year}` + '-' + month + '-' + day;
    return this.internal[formatted]
      ? this.internal[formatted]['internal_events']
        ? this.internal[formatted]['internal_events']
        : false
      : false;
  }

  getExternalEventsCount(date) {
    const month = date.month < 9 ? `0${date.month + 1}` : date.month + 1;
    const day = date.day < 10 ? `0${date.day}` : date.day;
    const formatted = `${date.year}` + '-' + month + '-' + day;
    return this.external[formatted]
      ? this.external[formatted]['external_events']
        ? this.external[formatted]['external_events']
        : false
      : false;
  }

  getAutoStatusCount(date) {
    if (this.hideAutoEvents) {
      return false;
    }
    const month = date.month < 9 ? `0${date.month + 1}` : date.month + 1;
    const day = date.day < 10 ? `0${date.day}` : date.day;
    const formatted = `${date.year}` + '-' + month + '-' + day;

    return this.autoEvents[formatted]
      ? this.autoEvents[formatted]['auto_events']
        ? this.autoEvents[formatted]['auto_events']
        : false
      : false;
  }

  toggleAutoEvents() {
    this.hideAutoEvents = !this.hideAutoEvents;
    this.search();
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.875rem';
      return;
    }

    if (this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '18.75rem';
      return;
    }

    if (!this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '27.5rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '29.625rem';
      return;
    }
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
    // this.search();
  }

  changeRangeEventStart(startDate: Date) {
    this.minDate = startDate;
    this.rangeCalendar = [this.minDate, this.searchForm.get('end').value];
    this.search();
  }

  changeRangeEventEnd(endDate: Date) {
    this.maxDate = endDate;
    this.rangeCalendar = [this.searchForm.get('start').value, this.searchForm.get('end').value];
    this.search();
  }

  ngOnDestroy() {
    this.dSub.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSelectEmployees(ids: number[]) {
    if (ids) {
      this.searchForm.get('employee').patchValue(ids);
    } else {
      this.searchForm.get('employee').patchValue([]);
    }

    this.search();
  }

  onSelectEventType(ids: EventType[]) {
    if (ids) {
      this.searchForm.get('events').patchValue(ids);
    } else {
      this.searchForm.get('events').patchValue([]);
    }

    this.search();
  }

  onSelectExternalEventType(ids: EventType[]) {
    if (ids) {
      this.searchForm.get('externalEvent').patchValue(ids);
    } else {
      this.searchForm.get('externalEvent').patchValue([]);
    }

    this.search();
  }

  onRemoveEvent() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventsListService.delete(this.selectedEventItem.id).subscribe(() => {
          this.search();
          this.getEventsDays();
        });
      }
    });
  }

  onGoEventCard() {
    const link = `/crm/events/${this.selectedEventItem.id}`;
    window.open(link, '_blank');
  }

  onAddEvent(type: AddEventModalType) {
    this.eventsListService.openCreateEventEventModal('create', type).subscribe(event => {
      if (event) {
        this.search();
      }
    })
  }

  private onEditEvent() {
    const isWithEventWithEmployee = this.selectedEventItem.employee && this.selectedEventItem.employee.length > 0;
    this.eventsListService.openCreateEventEventModal('edit',
      isWithEventWithEmployee ? 'withEmployee' : 'withoutEmployee',
      this.selectedEventItem).subscribe(event => {
      if (event) {
        this.search();
      }
    })
  }
}

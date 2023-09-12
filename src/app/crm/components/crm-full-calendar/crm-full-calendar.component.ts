import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {EventItem} from '../../models/event-item';
import {CalendarOptions, EventInput} from '@fullcalendar/core';
import {EventsListService} from '../../services/events-list.service';
import tippy from 'tippy.js';
import {Router} from '@angular/router';
import {FullCalendarComponent} from '@fullcalendar/angular';
import {FCViewMode} from './fcview-mode';
import {Subject, takeUntil} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {QuerySearch} from '@shared/models/other';
import {FormBuilder} from '@angular/forms';
import {debounceTime, tap} from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'pek-crm-full-calendar',
  templateUrl: './crm-full-calendar.component.html',
  styleUrls: ['./crm-full-calendar.component.scss']
})
export class CrmFullCalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  @ViewChild('template') template: ElementRef;
  @Input() hideAutoEvents: boolean;

  @Input() description: string;
  @Input() employee: number[];
  @Input() eventsTypes: number[];
  @Input() externalEvent: number[];
  isLoading = false;

  startDate: Date;
  endDate: Date;


  eventList: EventItem[] = [];


  FCViewMode = FCViewMode;

  viewMode: FCViewMode = FCViewMode.DAY_GRID_MONTH;

  currentTitle: string;
  events: EventInput[] = [];
  currentEvent: EventItem;

  query: QuerySearch[] = [];

  fetchEvents: Subject<void> = new Subject<void>();


  calendarOptions: CalendarOptions = {
    height: 'auto',
    initialView: 'dayGridMonth',
    firstDay: 1,
    eventClick: this.handleDateClick.bind(this),
    eventMouseEnter: this.handleDateMouseEnter.bind(this),
    headerToolbar: false,
    eventDidMount: (info) => {
      const findEvent = this.findEvent(info.event._def.publicId);
      if (findEvent) {
        let str = `
      <a target="_blank" href="/crm/events/${findEvent.id}"><b>${findEvent.event_type.name}</b></a></br>
      Event Description:</br></br>`;
        if (findEvent.description) {
          str += `<p>${findEvent.description}</p></br>`;
        }
        str += `<p>List Of Companies:</p>`;

        if (findEvent.on_companies.length > 0) {
          findEvent.on_companies.forEach(company => {
            str += `<li>
            <a target="_blank" href="/crm/business-partners/company-page/${company.company_id}"><b>${company.company_name}</b></a>
        </li>`;
          });
        } else {
          str += `<li>
            <p>There are no companies</p>
        </li>`;
        }

        let content = ``;

        content = `
        <ol>${str}</ol>
        `;

        tippy(info.el, {
          content,
          allowHTML: true,
          interactive: true,
          duration: 0,
          placement: 'right',
          followCursor: true,
          popperOptions: {
            strategy: 'fixed',
            modifiers: [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: ['top-end', 'right'],
                },
              },
              {
                name: 'preventOverflow',
                options: {
                  altAxis: true,
                  tether: false,
                },
              },
            ],
          },
        });
      }
    },
    dateClick: this.handleDateClick.bind(this),
    eventMaxStack: 2,
    events: [],
  };

  constructor(
    private fb: FormBuilder,
    private adapterService: AdapterService,
    private eventsListService: EventsListService,
    private readonly eventS: EventsListService,
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    requestAnimationFrame(() => {
      this.updateInfoFromCalendar();
      this.search();
    });

    this.fetchEvents.pipe(
      debounceTime(200),
      untilDestroyed(this),)
      .subscribe(() => {
        this.search();
      });
  }

  updateInfoFromCalendar() {
    const calendar = this.calendarComponent.getApi();
    if (calendar) {
      this.clearEvents();
      const view = calendar.view;
      this.currentTitle = view.title;
      this.startDate = view.activeStart;
      this.endDate = view.activeEnd;
    }
  }

  handleDateClick(arg) {
    const findEvent = this.findEvent(arg.event._def.publicId);
    this.openCalendarEvent(findEvent);
  }

  handleDateMouseEnter(arg) {
    this.currentEvent = this.findEvent(arg.event._def.publicId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('description' in changes || 'employee' in changes ||
      'eventsTypes' in changes || 'externalEvent' in changes) {
      this.fetchEvents.next();
    }
  }

  openCalendarEvent(event) {
    window.open('/crm/events/' + event.id, '_blank');
  }

  prepareForView() {
    this.events = [];
    this.eventList.forEach(eventItem => {
      this.events.push({
        // @ts-ignore
        id: eventItem.id,
        title: `${eventItem.event_type.name}`,
        allDay: false,
        overlap: false,
        end: eventItem.end,
        start: eventItem.start,
        backgroundColor: eventItem.event_type.color_hex ? eventItem.event_type.color_hex : '#3788d8',
        borderColor: eventItem.event_type.color_hex ? eventItem.event_type.color_hex : '#3788d8',
      });
    });

    let date: string;

    if (this.startDate) {
      date = this.adapterService.dateAdapter(new Date(this.startDate));
    } else {
      date = this.adapterService.dateAdapter(new Date(Math.min(...this.eventList.filter(e => e.start).map(e => new Date(e.start).getTime()))));
    }

    if (date === '1970-01-01') {
      date = this.adapterService.dateAdapter(new Date());
    }

    this.calendarOptions.initialDate = date;
    this.calendarOptions.events = [...this.events];
  }

  findEvent(id) {
    return this.eventList.find(e => e.id === parseInt(id, 10));
  }

  changeView(view: FCViewMode) {
    this.viewMode = view;
    const calendar = this.calendarComponent.getApi();
    calendar.changeView(view);
    this.updateInfoFromCalendar();
    this.fetchEvents.next();
  }

  nextPeriod() {
    const calendar = this.calendarComponent.getApi();
    calendar.next();
    this.updateInfoFromCalendar();
    this.fetchEvents.next();
  }

  clearEvents() {
    const calendar = this.calendarComponent.getApi();
    calendar.removeAllEvents();
  }

  previousPeriod() {
    const calendar = this.calendarComponent.getApi();
    calendar.prev();
    this.updateInfoFromCalendar();
    this.fetchEvents.next();
  }

  todayPeriod() {
    const calendar = this.calendarComponent.getApi();
    calendar.today();
    this.updateInfoFromCalendar();
    this.fetchEvents.next();
  }

  getEvents() {
    this.isLoading = true;
    this.eventsListService.get(this.query).pipe(
      untilDestroyed(this),
    ).subscribe(eventsList => {
      eventsList.sort((a, b) => {
        b.start = new Date(b.start);
        a.start = new Date(a.start);
        return b.start.getTime() - a.start.getTime();
      });

      this.eventList = eventsList;
      this.prepareForView();
      this.isLoading = false;
    });
  }

  search() {
    this.eventList = [];
    this.query = [];

    this.query.push({
      name: 'start_end_range_after',
      value: this.adapterService.dateAdapter(this.startDate),
    });

    this.query.push({
      name: 'start_end_range_before',
      value: this.adapterService.dateAdapter(new Date(this.endDate)),
    });

    if (this.employee.length > 0) {
      this.query.push({
        name: 'employee_ids',
        value: this.employee.join(','),
      });
    }

    if (this.description) {
      this.query.push({
        name: 'description',
        value: this.description,
      });
    }

    if (this.eventsTypes) {
      const eventsIds: number[] = [];

      if (this.eventsTypes.length > 0) {
        this.eventsTypes.forEach(id => eventsIds.push(id));
      }

      if (eventsIds.length > 0) {
        this.query.push({name: 'event_type_ids', value: eventsIds.join(',')});
      }
    }

    if (this.externalEvent) {
      const eventsIds: number[] = [];

      if (this.externalEvent.length > 0) {
        this.externalEvent.forEach(id => eventsIds.push(id));
      }

      if (eventsIds.length > 0) {
        this.query.push({name: 'external_event_type_ids', value: eventsIds.join(',')});
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
}

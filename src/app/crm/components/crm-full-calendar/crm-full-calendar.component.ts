import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {EventItem} from '../../models/event-item';
import {CalendarOptions, EventInput} from '@fullcalendar/core';
import {EventsListService} from '../../services/events-list.service';
import tippy from 'tippy.js';
import {Router} from '@angular/router';

@Component({
  selector: 'pek-crm-full-calendar',
  templateUrl: './crm-full-calendar.component.html',
  styleUrls: ['./crm-full-calendar.component.scss']
})
export class CrmFullCalendarComponent implements OnInit {

  @ViewChild('template') template: ElementRef;
  @Input() eventList: EventItem[] = [];
  @Input() startDate: Date;
  @Input() endDate: Date;

  events: EventInput[] = [];

  currentEvent: EventItem;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    firstDay: 1,
    eventClick: this.handleDateClick.bind(this),
    eventMouseEnter: this.handleDateMouseEnter.bind(this),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,listWeek'
    },
    eventDidMount: (info) => {
      const findEvent = this.findEvent(info.event._def.publicId);

      let str = `Event Description:\n`;
      if (findEvent.description) {
        str += `<p>${findEvent.description}</p></br>`
      }
      str += `<p>List Of Companies:</p>`

      if (findEvent.on_companies.length > 0) {
        findEvent.on_companies.forEach(company => {
          str += `<li>
            <a target="_blank" href="/crm/business-partners/company-page/${company.company_id}">${company.company_name}</a>
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
      });
    },
    eventMaxStack: 2,
    events: [],
  };

  constructor(
    private adapterService: AdapterService,
    private readonly eventS: EventsListService,
    private modalService: ModalService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  handleDateClick(arg) {
    const findEvent = this.findEvent(arg.event._def.publicId);
    this.openCalendarEvent(findEvent);
  }

  handleDateMouseEnter(arg) {
    this.currentEvent = this.findEvent(arg.event._def.publicId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('eventList' in changes) {
      this.prepareForView();
    }
  }

  openCalendarEvent(event) {
    window.open('/crm/events/' + event.id, "_blank");
  }

  prepareForView() {
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

}

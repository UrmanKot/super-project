import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EventReport} from '../../models/event-report';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {EventsReportService} from '../../services/events-report.service';
import {Paginator} from 'primeng/paginator';
import {Table} from 'primeng/table';
import {EventType} from '../../models/event-type';
import {Subject, takeUntil} from 'rxjs';
import {AdapterService} from '@shared/services/adapter.service';
import {Country} from '@shared/models/country';
import {SubRegion} from '@shared/models/sub-region';
import {Region} from '@shared/models/region';
import {EventCompany, Impression} from '../../models/event-company';
import {debounceTime, filter} from 'rxjs/operators';
import {EventsListService} from '../../services/events-list.service';
import {Checkbox} from 'primeng/checkbox';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {MenuItem} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {EventCompanyService} from '../../services/event-company.service';
import {ModalService} from '@shared/services/modal.service';

@UntilDestroy()
@Component({
  selector: 'pek-crm-events-reports',
  templateUrl: './crm-events-reports.component.html',
  styleUrls: ['./crm-events-reports.component.scss']
})
export class CrmEventsReportsComponent implements OnInit, OnDestroy {
  @ViewChild('dt') dt: Table;
  Impression = Impression;
  @ViewChild('paginator') paginator: Paginator;

  private destroy$ = new Subject();
  private updateSearch: Subject<void> = new Subject<void>();

  isShowAll = false;
  isStartOnePage = false;
  reportsCount = 0;
  isLastDateDefaultFilterSelected = true;
  isNextDateDefaultFilterSelected = true;

  eventCompanyMenuItems: MenuItem[] = [{
    label: 'Selected Company Event',
    items: [
      {
        label: 'View Company',
        icon: 'pi pi-eye',
        command: () => this.onViewCompany()
      },
      {
        label: 'Create Linked Event',
        icon: 'pi pi-share-alt',
        command: () => this.onCreateLinkedEvent()
      },
      {
        label: 'Done',
        icon: 'pi pi-check',
        command: () => this.onDoneCompany()
      },
      {
        label: 'Edit comment',
        icon: 'pi pi-pencil',
        command: () => this.onEditCompany()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveTechnology()
      }
    ]
  }];

  dateFilters: { name: string, value: string }[] = [
    {
      name: 'Last Events Date Start',
      value: 'last_events_date_start'
    },
    {
      name: 'Last Events Date End',
      value: 'last_events_date_end'
    },
    {
      name: 'Future Events Date Start',
      value: 'future_events_date_start'
    },
    {
      name: 'Future Events Date End',
      value: 'future_events_date_end'
    },
  ];
  selectedFilters: any;

  lastAfterStartDateSelected: Date;
  lastBeforeStartDateSelected: Date;
  lastAfterEndDateSelected: Date;
  lastBeforeEndDateSelected: Date;

  featureAfterStartDateSelected: Date;
  featureBeforeStartDateSelected: Date;
  featureAfterEndDateSelected: Date;
  featureBeforeEndDateSelected: Date;

  isLastEventStartFilterOpen = false;
  isLastEventEndFilterOpen = false;

  isFeatureEventStartFilterOpen = false;
  isFeatureEventEndFilterOpen = false;
  isHideFilters = false;
  tableScrollHeight = '29.625rem';


  public dateRangeLimit: Date;


  searchForm: FormGroup = this.fb.group({
    page: [1],
    id: [null],
    id__in: [[]],
    company_category_ids: [null],
    countries: [null],
    regions: [null],
    sub_regions: [null],
    categories_ids: [null],
    chain_status_ids: [null],
    employees_ids: [null],
    is_null_chain_status: [null],
    order_by_name: [false],
    order_by_date: [true],
    order_by_date_end: [null],
    order_by_next_event_date: [null],
    order_by_next_event_date_end: [null],
    event_date_start: [null],
    event_date_end: [null],
    last_events_date_start: [null],
    last_events_date_end: [null],
    feature_events_date_start: [null],
    feature_events_date_end: [null],
    last_events_date_start_after: [null],
    last_events_date_start_before: [null],
    last_events_date_end_after: [null],
    last_events_date_end_before: [null],
    next_events_date_start_after: [null],
    next_events_date_start_before: [null],
    next_events_date_end_after: [null],
    next_events_date_end_before: [null],
    dateFilterType: [null],
    datesLastFilterType: [null],
    datesFutureFilterType: [null],
    autoEvents: [true],
    groupView: [false],
    enableColors: [false],
    intersect_last_event: [false],
    intersect_next_event: [false],
    event_id: [null],
  });

  rangeCalendar: any = [new Date(), new Date()];

  today: Date;
  isLoading = false;

  lastTenDays: Date;
  nextYear: Date;

  eventsReports: EventReport[];
  selectedEventsReport: EventReport;

  selectedFilterType = 'lastNextDate';

  queryKey = 'id:null/categories_ids:null/chain_status_ids:null/employees_ids:null/is_null_chain_status:null';

  dateLastFilterTypes = [
    {name: 'Last events date start', value: 'lastStart'},
    {name: 'Last events date end', value: 'lastEnd'}
  ];

  dateFutureFilterTypes = [
    {name: 'Future events date start', value: 'futureStart'},
    {name: 'Future events date end', value: 'futureEnd'}
  ];

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'ordering', value: '-last_event_start'},
    {name: 'test_method', value: 'true'},
  ];
  enableColors = false;
  isFilteredByEvent: boolean = false;
  selectedEventCompany: EventCompany;

  constructor(
    private readonly fb: FormBuilder,
    private readonly eventsReportService: EventsReportService,
    private readonly eventsListService: EventsListService,
    private readonly eventCompanyService: EventCompanyService,
    private readonly modalService: ModalService,
    private adapterService: AdapterService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.dateRangeLimit = new Date();
    let date = new Date();
    this.lastTenDays = new Date(date.setDate(date.getDate() - 10));
    date = new Date();
    this.nextYear = new Date(date.setDate(date.getDate() + 365.2422));
    this.today = new Date();

    this.updateSearch.pipe(debounceTime(200), untilDestroyed(this)).subscribe(() => {
      this.search();
    });

    this.updateSearch.next();
  }

  get() {
    this.eventsReportService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {
      this.eventsReports = response;
      this.eventsReports.forEach(event => {
        if (event.last_events.length > 0) {
          const tempEvents = [...event.last_events];
          const lastEvent = tempEvents.filter(ev => ev.is_done && ev.impression).sort((a, b) => {
            if (a && b) {
              b.start = new Date(b.start);
              a.start = new Date(a.start);
              return b.start.getTime() - a.start.getTime();
            }
          });
          if (lastEvent.length > 0) {
            event.lastEventImpressionByFilter = lastEvent[0].impression;
          }
        }
      });
      this.reportsCount = this.eventsReports.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;

      this.breakForGroupedEvents();
      this.sortEvents();
      this.isLoading = false;
    });
  }

  breakForGroupedEvents(): void {
    this.eventsReports.forEach(report => {
      report.groupedLastEvents = [];
      report.groupedNextEvents = [];
      this.createGroups(report);
      this.groupLastEvents(report);
      this.groupNextEvents(report);

      report.groupedLastEvents.filter(group => group.root_id >= 0).forEach(group => {
        const groupInNextEvents = report.groupedNextEvents.find(el => el.root_id === group.root_id);
        if (groupInNextEvents) {
          const groupedLastEventsAmount = group.events.length;
          const groupedNextEventsAmount = groupInNextEvents.events.length;
          if (groupedLastEventsAmount > groupedNextEventsAmount) {
            const difference = groupedLastEventsAmount - groupedNextEventsAmount;
            const emptyCell = Array(difference).fill(null);
            groupInNextEvents.events.push(...emptyCell);
          } else {
            const difference = groupedNextEventsAmount - groupedLastEventsAmount;
            const emptyCell = Array(difference).fill(null);
            group.events.push(...emptyCell);
          }
        }
      });

      report.groupedLastEvents.sort((a, b) => b.root_id - a.root_id);
      report.groupedNextEvents.sort((a, b) => b.root_id - a.root_id);
      report.groupedLastEvents.forEach(group => {
        group.events = group.events.sort((a, b) => {
          if (a && b) {
            b.start = new Date(b.start);
            a.start = new Date(a.start);
            return a.start.getTime() - b.start.getTime();
          }
        });
      });
      report.groupedNextEvents.forEach(group => {
        group.events = group.events.sort((a, b) => {
          if (a && b) {
            b.start = new Date(b.start);
            a.start = new Date(a.start);
            return a.start.getTime() - b.start.getTime();
          }
        });
      });
    });
  }

  createGroups(report: EventReport): void {
    const lastRootIds = report.last_events.map(event => event.root);
    const nextRootIds = report.next_events.map(event => event.root);
    const allIds = [...lastRootIds, ...nextRootIds];
    allIds.filter((id, index) =>
      allIds.findIndex(inId => inId === id) === index
    ).forEach(id => {
      const rootId = id ? id : -1;
      report.groupedLastEvents.push({
        root_id: rootId,
        label: rootId > -1 ? 'Connected Events' : 'Events',
        events: []
      });
      report.groupedNextEvents.push({
        root_id: rootId,
        label: rootId > -1 ? 'Connected Events' : 'Events',
        events: []
      });
    });
  }

  groupLastEvents(report: EventReport): void {
    // group by last event root id
    report.last_events.forEach(event => {
      const isGroupRootEvent = report.groupedLastEvents.find(el => el.root_id === event.id);
      if (!isGroupRootEvent) {
        const rootId = event.root ? event.root : -1;
        const isInListIndex = report.groupedLastEvents.findIndex(eventInside => eventInside.root_id === rootId);
        if (isInListIndex > -1) {
          report.groupedLastEvents[isInListIndex].events.push(event);
        }
      }
    });
    // find last event root if it is existing
    report.groupedLastEvents.forEach(group => {
      const groupRootEvent = report.last_events.find(event => event.id === group.root_id);
      if (groupRootEvent) {
        group.events.splice(0, 0, groupRootEvent);
      }
    });
  }

  groupNextEvents(report: EventReport): void {
    // group by next event root id
    report.next_events.forEach(event => {
      const isGroupRootEvent = report.groupedNextEvents.find(el => el.root_id === event.id);
      if (!isGroupRootEvent) {
        const rootId = event.root ? event.root : -1;
        const isInListIndex = report.groupedNextEvents.findIndex(eventInside => eventInside.root_id === rootId);
        if (isInListIndex > -1) {
          report.groupedNextEvents[isInListIndex].events.push(event);
        }
      }
    });
    // find event root if it is existing
    report.groupedNextEvents.forEach(group => {
      const groupRootEvent = report.next_events.find(event => event.id === group.root_id);
      if (groupRootEvent) {
        group.events.splice(0, 0, groupRootEvent);
      }
    });
  }

  getForPagination() {
    this.eventsReportService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(response => {
      this.eventsReports = response.results;
      this.eventsReports.forEach(event => {
        if (event.last_events.length > 0) {
          const tempEvents = [...event.last_events];
          const lastEvent = tempEvents.filter(ev => ev.is_done && ev.impression).sort((a, b) => {
            if (a && b) {
              b.start = new Date(b.start);
              a.start = new Date(a.start);
              return b.start.getTime() - a.start.getTime();
            }
          });
          if (lastEvent.length > 0) {
            event.lastEventImpressionByFilter = lastEvent[0].impression;
          }
        }
      });
      this.reportsCount = response.count;

      if (this.isStartOnePage) {
        this.paginator.changePage(0);
      }

      this.isStartOnePage = false;
      this.breakForGroupedEvents();

      this.sortEvents();

      this.isLoading = false;
    });
  }

  sortEvents() {
    if (this.searchForm.get('order_by_date').value !== null) {
      if (this.searchForm.get('order_by_date').value) {
        this.eventsReports.forEach(company => {
          company.last_events.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
        });
        this.eventsReports.forEach(company => {
          company.groupedLastEvents.forEach(group => {
            group.events.sort((a, b) => new Date(b?.start).getTime() - new Date(a?.start).getTime());
          });
        });
      } else {
        this.eventsReports.forEach(company => {
          company.last_events.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
        });
        this.eventsReports.forEach(company => {
          company.groupedLastEvents.forEach(group => {
            group.events.sort((a, b) => new Date(a?.start).getTime() - new Date(b?.start).getTime());
          });
        });
      }
    }

    if (this.searchForm.get('order_by_date_end').value !== null) {
      if (this.searchForm.get('order_by_date_end').value) {
        this.eventsReports.forEach(company => {
          company.last_events.sort((a, b) => new Date(b.end).getTime() - new Date(a.end).getTime());
        });
        this.eventsReports.forEach(company => {
          company.groupedLastEvents.forEach(group => {
            group.events.sort((a, b) => new Date(b?.end).getTime() - new Date(a?.end).getTime());
          });
        });
      } else {
        this.eventsReports.forEach(company => {
          company.last_events.sort((a, b) => new Date(a.end).getTime() - new Date(b.end).getTime());
        });
        this.eventsReports.forEach(company => {
          company.groupedLastEvents.forEach(group => {
            group.events.sort((a, b) => new Date(a?.end).getTime() - new Date(b?.end).getTime());
          });
        });
      }
    }

    if (this.searchForm.get('order_by_next_event_date').value !== null) {
      if (this.searchForm.get('order_by_next_event_date').value) {
        this.eventsReports.forEach(company => {
          company.next_events.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
        });
        this.eventsReports.forEach(company => {
          company.groupedNextEvents.forEach(group => {
            group.events.sort((a, b) => new Date(b?.start).getTime() - new Date(a?.start).getTime());
          });
        });
      } else {
        this.eventsReports.forEach(company => {
          company.next_events.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
        });
        this.eventsReports.forEach(company => {
          company.groupedNextEvents.forEach(group => {
            group.events.sort((a, b) => new Date(a?.start).getTime() - new Date(b?.start).getTime());
          });
        });
      }
    }

    if (this.searchForm.get('order_by_next_event_date_end').value !== null) {
      if (this.searchForm.get('order_by_next_event_date_end').value) {
        this.eventsReports.forEach(company => {
          company.next_events.sort((a, b) => new Date(b.end).getTime() - new Date(a.end).getTime());
        });
        this.eventsReports.forEach(company => {
          company.groupedNextEvents.forEach(group => {
            group.events.sort((a, b) => new Date(b?.end).getTime() - new Date(a?.end).getTime());
          });
        });
      } else {
        this.eventsReports.forEach(company => {
          company.next_events.sort((a, b) => new Date(a.end).getTime() - new Date(b.end).getTime());
        });
        this.eventsReports.forEach(company => {
          company.groupedNextEvents.forEach(group => {
            group.events.sort((a, b) => new Date(a?.end).getTime() - new Date(b?.end).getTime());
          });
        });
      }
    }
  }

  emitChange() {
    this.updateSearch.next();
  }

  search() {
    this.destroy$.next(true);
    const todayDate = this.adapterService.dateAdapter(new Date());
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();

    this.isLoading = true;
    this.eventsReports = [];
    this.selectedEventsReport = null;

    const newQueryKey = `id:${this.searchForm.get('id').value}/categories_ids:${this.searchForm.get('categories_ids').value}/chain_status_ids:${this.searchForm.get('chain_status_ids').value}/employees_ids:${this.searchForm.get('employees_ids').value}/is_null_chain_status:${this.searchForm.get('is_null_chain_status').value}`;
    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }


    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
    ];

    if (this.searchForm.get('id').value) this.query.push({name: 'id', value: this.searchForm.get('id').value});
    if (this.searchForm.get('categories_ids').value && this.searchForm.get('categories_ids').value.length > 0) {
      this.query.push({
        name: 'categories_ids',
        value: this.preSearch(this.searchForm.get('categories_ids').value)
      });
    }

    if (this.searchForm.get('chain_status_ids').value && this.searchForm.get('chain_status_ids').value.length > 0) {
      this.query.push({
        name: 'chain_status_ids',
        value: this.searchForm.get('chain_status_ids').value.join(',')
      });
    }

    let isCustomFilterByLastStartValues = false;
    let isCustomFilterByLastEndValues = false;


    if (this.isLastEventStartFilterOpen) {
      const selectedDate = this.adapterService.dateAdapter(new Date(this.searchForm.get('last_events_date_start_before').value));
      let hourBefore = 23;
      let minuteBefore = 59;
      if (selectedDate === todayDate) {
        hourBefore = hour;
        minuteBefore = minutes;
      }

      isCustomFilterByLastStartValues = this.fillDateFilter(
        'last_events_date_start_after',
        'last_events_date_start_before',
        '00',
        '00',
        this.padTo2Digits(hourBefore),
        this.padTo2Digits(minuteBefore));
    }

    if (this.isLastEventEndFilterOpen) {
      const selectedDate = this.adapterService.dateAdapter(new Date(this.searchForm.get('last_events_date_end_before').value));
      let hourBefore = 23;
      let minuteBefore = 59;
      if (selectedDate === todayDate) {
        hourBefore = hour;
        minuteBefore = minutes;
      }

      isCustomFilterByLastEndValues = this.fillDateFilter(
        'last_events_date_end_after',
        'last_events_date_end_before',
        '00',
        '00',
        this.padTo2Digits(hourBefore),
        this.padTo2Digits(minuteBefore));
    }

    if (this.isLastEventStartFilterOpen && this.isLastEventEndFilterOpen) {
      if (this.searchForm.get('intersect_last_event').value) {
        this.query.push({
          name: 'intersect_last_event',
          value: true
        });
      }
    }

    if (isCustomFilterByLastStartValues || isCustomFilterByLastEndValues) {
      this.isLastDateDefaultFilterSelected = false;
    } else {
      this.isLastDateDefaultFilterSelected = true;
    }

    if (!isCustomFilterByLastStartValues && !isCustomFilterByLastEndValues) {
      this.query.push({
        name: 'last_events_date_start_after',
        value: new Date(this.lastTenDays.setHours(hour, minutes)).toISOString()
      });
      this.query.push({
        name: 'last_events_date_start_before',
        value: new Date(this.today.setHours(hour, minutes)).toISOString()
      });
    }

    let isCustomFilterByFeatureStartValues = false;
    let isCustomFilterByFeatureEndValues = false;

    if (this.isFeatureEventStartFilterOpen) {
      const selectedDate = this.adapterService.dateAdapter(new Date(this.searchForm.get('next_events_date_start_after').value));
      let hourAfter = 0;
      let minuteAfter = 0;
      if (selectedDate === todayDate) {
        hourAfter = hour;
        minuteAfter = minutes;
      }
      isCustomFilterByFeatureStartValues = this.fillDateFilter(
        'next_events_date_start_after',
        'next_events_date_start_before',
        this.padTo2Digits(hourAfter),
        this.padTo2Digits(minuteAfter),
        23,
        59);
    }

    if (this.isFeatureEventEndFilterOpen) {
      const selectedDate = this.adapterService.dateAdapter(new Date(this.searchForm.get('next_events_date_end_after').value));
      let hourAfter = 0;
      let minuteAfter = 0;
      if (selectedDate === todayDate) {
        hourAfter = hour;
        minuteAfter = minutes;
      }
      isCustomFilterByFeatureEndValues = this.fillDateFilter(
        'next_events_date_end_after',
        'next_events_date_end_before',
        this.padTo2Digits(hourAfter),
        this.padTo2Digits(minuteAfter),
        23,
        59);
    }

    if (isCustomFilterByFeatureStartValues || isCustomFilterByFeatureEndValues) {
      this.isNextDateDefaultFilterSelected = false;
    } else {
      this.isNextDateDefaultFilterSelected = true;
    }

    if (this.isFeatureEventStartFilterOpen && this.isFeatureEventEndFilterOpen) {
      if (this.searchForm.get('intersect_next_event').value) {
        this.query.push({
          name: 'intersect_next_event',
          value: true
        });
      }
    }

    if (!isCustomFilterByFeatureStartValues && !isCustomFilterByFeatureEndValues) {
      this.query.push({
        name: 'next_events_date_start_after',
        value: new Date(this.today.setHours(hour, minutes)).toISOString()
      });
      this.query.push({
        name: 'next_events_date_start_before',
        value: new Date(this.nextYear.setHours(hour, minutes)).toISOString()
      });
    }

    const ordering = this.prepareSortingField();
    if (ordering) {
      this.query.push({
        name: 'ordering',
        value: ordering
      });
    }

    if (this.searchForm.get('autoEvents').value) {
      this.query.push({
        name: 'hide_auto_events',
        value: this.searchForm.get('autoEvents').value
      });
    }

    if (this.searchForm.get('employees_ids').value && this.searchForm.get('employees_ids').value.length > 0) {
      this.query.push({
        name: 'employees_ids',
        value: this.preSearch(this.searchForm.get('employees_ids').value)
      });
    }

    if (this.searchForm.get('is_null_chain_status').value !== null) this.query.push({
      name: 'is_null_chain_status',
      value: this.searchForm.get('is_null_chain_status').value
    });

    if (this.searchForm.get('company_category_ids').value !== null) this.query.push({
      name: 'company_category_ids',
      value: this.searchForm.get('company_category_ids').value
    });

    if (this.searchForm.get('countries').value !== null) this.query.push({
      name: 'countries',
      value: this.searchForm.get('countries').value.map(country => country.id)
    });

    if (this.searchForm.get('regions').value !== null) this.query.push({
      name: 'regions',
      value: this.searchForm.get('regions').value.map(region => region.id)
    });

    if (this.searchForm.get('sub_regions').value !== null) this.query.push({
      name: 'sub_regions',
      value: this.searchForm.get('sub_regions').value.map(region => region.id)
    });

    if (this.searchForm.get('id__in').value) {
      this.query.push({
        name: 'id__in',
        value: this.searchForm.get('id__in').value
      });
    }

    if (this.searchForm.get('event_id').value) {
      this.query.push({
        name: 'event_id',
        value: this.searchForm.get('event_id').value
      });
    }

    if (this.isShowAll) {
      this.searchForm.get('page').patchValue(1);
      this.get();
    } else this.getForPagination();
  }

  fillDateFilter(fieldAfter: string, fieldBefore: string, hourAfter, minutesAfter, hourBefore, minutesBefore): boolean {
    if (this.searchForm.get(fieldAfter).value && this.searchForm.get(fieldBefore).value) {

      const lastStartAfter = new Date(this.searchForm.get(fieldAfter)
        .value.setHours(hourAfter, minutesAfter)).toISOString();
      const lastStartBefore = new Date(this.searchForm.get(fieldBefore)
        .value.setHours(hourBefore, minutesBefore)).toISOString();

      this.query.push({
        name: fieldAfter,
        value: lastStartAfter
      });
      this.query.push({
        name: fieldBefore,
        value: lastStartBefore
      });
      return true;
    }
    return false;
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  preSearch(value: number[]) {
    if (value && value.length > 0) return value.join(',');
  }

  prepareSortingField(): string {
    let sorting = '';
    if (this.searchForm.get('order_by_name').value !== null) {
      if (this.searchForm.get('order_by_name').value) {
        sorting += '-name,';
      } else {
        sorting += 'name,';
      }
    }

    // if (this.searchForm.get('order_by_date').value !== null) {
    //   if (this.searchForm.get('order_by_date').value) {
    //     sorting += '-last_event_start,';
    //   } else {
    //     sorting += 'last_event_start,';
    //   }
    // }
    //
    // if (this.searchForm.get('order_by_next_event_date').value !== null) {
    //   if (this.searchForm.get('order_by_next_event_date').value) {
    //     sorting += '-next_event_start,';
    //   } else {
    //     sorting += 'next_event_start,';
    //   }
    // }
    //
    // if (this.searchForm.get('order_by_next_event_date_end').value !== null) {
    //   if (this.searchForm.get('order_by_next_event_date_end').value) {
    //     sorting += '-next_event_end,';
    //   } else {
    //     sorting += 'next_event_end,';
    //   }
    // }
    //
    // if (this.searchForm.get('order_by_date_end').value !== null) {
    //   if (this.searchForm.get('order_by_date_end').value) {
    //     sorting += '-last_event_end,';
    //   } else {
    //     sorting += 'last_event_end,';
    //   }
    // }

    return sorting;
  }

  sorting(value: boolean, field: string, updateFromDB = true) {
    if (value === null) {
      this.searchForm.get(field).patchValue(false);
    } else if (value === false) {
      this.searchForm.get(field).patchValue(true);
    } else if (value === true) {
      this.searchForm.get(field).patchValue(false);
    }

    if (updateFromDB) {
      this.emitChange();
    } else {
      this.sortEvents();
    }
  }

  removeSoring(field: string) {
    this.searchForm.get(field).patchValue(null);
    this.sortEvents();
  }


  searchByLastDate(): void {
    const startDateValue = this.searchForm.get('last_events_date_start').value;
    const endDateValue = this.searchForm.get('last_events_date_end').value;

    if (startDateValue && endDateValue) {
      this.rangeCalendar = [this.searchForm.get('event_date_start').value, this.searchForm.get('event_date_end').value];
      this.emitChange();
    }
  }

  filterByLastStartDate(): void {
    const startDateValue = this.searchForm.get('last_events_date_start_after').value;
    const endDateValue = this.searchForm.get('last_events_date_start_before').value;
    this.lastAfterStartDateSelected = startDateValue;
    this.lastBeforeStartDateSelected = endDateValue;
    if (startDateValue && endDateValue) {
      this.emitChange();
    }
  }

  filterByLastEndDate(): void {
    const startDateValue = this.searchForm.get('last_events_date_end_after').value;
    const endDateValue = this.searchForm.get('last_events_date_end_before').value;
    this.lastAfterEndDateSelected = startDateValue;
    this.lastBeforeEndDateSelected = endDateValue;
    if (startDateValue && endDateValue) {
      this.emitChange();
    }
  }

  filterByFeatureStartDate(): void {
    const startDateValue = this.searchForm.get('next_events_date_start_after').value;
    const endDateValue = this.searchForm.get('next_events_date_start_before').value;
    this.featureAfterStartDateSelected = startDateValue;
    this.featureBeforeStartDateSelected = endDateValue;
    if (startDateValue && endDateValue) {
      this.emitChange();
    }
  }

  filterByFeatureEndDate(): void {
    const startDateValue = this.searchForm.get('next_events_date_end_after').value;
    const endDateValue = this.searchForm.get('next_events_date_end_before').value;
    this.featureAfterEndDateSelected = startDateValue;
    this.featureBeforeEndDateSelected = endDateValue;
    if (startDateValue && endDateValue) {
      this.emitChange();
    }
  }

  getSmallComment(comment: string) {
    if (comment) return comment.substring(0, 13) + '...';
  }

  searchByFeatureDate(): void {
    const startDateValue = this.searchForm.get('feature_events_date_start').value;
    const endDateValue = this.searchForm.get('feature_events_date_end').value;

    if (startDateValue && endDateValue) {
      this.rangeCalendar = [this.searchForm.get('event_date_start').value, this.searchForm.get('event_date_end').value];
      this.emitChange();
    }
  }

  changeLastsDateFilterType(evt: any) {
    if (!evt.value) {
      this.searchForm.get('last_events_date_start').setValue(null);
      this.searchForm.get('last_events_date_end').setValue(null);
      this.emitChange();
    } else {
      this.searchByLastDate();
    }
  }

  changeFeatureDateFilterType(evt: any) {
    if (!evt.value) {
      this.searchForm.get('feature_events_date_start').setValue(null);
      this.searchForm.get('feature_events_date_end').setValue(null);
      this.emitChange();
    } else {
      this.searchByFeatureDate();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.dt.scrollable = true;
    this.emitChange();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.dt.scrollable = false;
    this.emitChange();
  }

  paginate(evt: any) {
    // Если начинаем с первой страницы, не выполняем запрос повторно, т.к. он и так выполняется
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.emitChange();
    }
  }

  onSelectCompany(id: number) {
    this.searchForm.get('id').patchValue(id);
    this.emitChange();
  }

  onSelectEventTypes(eventTypes: EventType[]) {
    if (eventTypes) {
      this.searchForm.get('categories_ids').patchValue(eventTypes);
    } else {
      this.searchForm.get('categories_ids').patchValue(null);
    }
    this.emitChange();
  }

  onSelectStatuses(ids: number[]) {
    this.searchForm.get('chain_status_ids').patchValue(ids);
    this.emitChange();
  }

  onSelectEmployees(ids: number[]) {
    if (ids) {
      this.searchForm.get('employees_ids').patchValue(ids);
    } else {
      this.searchForm.get('employees_ids').patchValue(null);
    }

    this.emitChange();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  filtersTypeChanged($event: any) {

  }

  updated(updateView: boolean = true) {
    this.isLastEventStartFilterOpen = this.selectedFilters.findIndex(el => el === 'last_events_date_start') > -1;
    this.isLastEventEndFilterOpen = this.selectedFilters.findIndex(el => el === 'last_events_date_end') > -1;
    this.isFeatureEventStartFilterOpen = this.selectedFilters.findIndex(el => el === 'future_events_date_start') > -1;
    this.isFeatureEventEndFilterOpen = this.selectedFilters.findIndex(el => el === 'future_events_date_end') > -1;

    if (!this.isLastEventStartFilterOpen) {
      this.searchForm.get('last_events_date_start_after').reset(null);
      this.searchForm.get('last_events_date_start_before').reset(null);
    }

    if (!this.isLastEventEndFilterOpen) {
      this.searchForm.get('last_events_date_end_after').reset(null);
      this.searchForm.get('last_events_date_end_before').reset(null);
    }

    if (!this.isFeatureEventStartFilterOpen) {
      this.searchForm.get('next_events_date_start_after').reset(null);
      this.searchForm.get('next_events_date_start_before').reset(null);
    }

    if (!this.isFeatureEventEndFilterOpen) {
      this.searchForm.get('next_events_date_end_after').reset(null);
      this.searchForm.get('next_events_date_end_before').reset(null);
    }

    if (!this.isLastEventStartFilterOpen && !this.isLastEventEndFilterOpen) {
      this.searchForm.get('intersect_last_event').reset(false);
    }

    if (!this.isFeatureEventStartFilterOpen && !this.isFeatureEventEndFilterOpen) {
      this.searchForm.get('intersect_next_event').reset(false);
    }
    if (updateView) {
      this.emitChange();
    }
  }

  onSelectCompanyCategory(companyCategoryIds: number[]) {
    this.searchForm.get('company_category_ids').setValue(companyCategoryIds);
    this.emitChange();
  }

  onSelectCountry(countries: Country[]) {
    if (countries) {
      this.searchForm.get('countries').setValue(countries);
    } else {
      this.searchForm.get('countries').setValue(null);
    }
    this.searchForm.get('sub_regions').setValue(null);
    this.searchForm.get('regions').setValue(null);
    this.emitChange();
  }

  onSelectRegion(regions: Region[]) {
    if (regions) {
      this.searchForm.get('regions').setValue(regions);
    } else {
      this.searchForm.get('regions').setValue(null);
    }
    this.searchForm.get('sub_regions').setValue(null);

    this.emitChange();
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
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

  regionSubSelected(subRegion: SubRegion[]) {
    if (subRegion) {
      this.searchForm.get('sub_regions').setValue(subRegion);
    } else {
      this.searchForm.get('sub_regions').setValue(null);
    }

    this.emitChange();
  }

  searchEvent(checkbox: Checkbox) {

    if (this.searchForm.get('id__in').value?.length <= 0) {
      this.eventsListService.openEventGetEventForFilter().subscribe(res => {
        if (res.event) {
          this.selectedFilters = [];

          const currentDateTime = new Date().getTime();
          const event_companies = res.event.on_companies.map(c => c.company_id);

          // Clearing filters if we have selected event from the list
          this.searchForm.get('id').setValue(null, {emitEvent: false, onlySelf: true});
          this.searchForm.get('id__in').setValue(event_companies, {emitEvent: false, onlySelf: true});
          this.searchForm.get('company_category_ids').patchValue(null, {emitEvent: false, onlySelf: true});
          this.searchForm.get('countries').setValue(null, {emitEvent: false, onlySelf: true});
          this.searchForm.get('regions').setValue(null, {emitEvent: false, onlySelf: true});
          this.searchForm.get('sub_regions').setValue(null, {emitEvent: false, onlySelf: true});
          this.searchForm.get('categories_ids').setValue(null, {emitEvent: false, onlySelf: true});
          this.searchForm.get('chain_status_ids').setValue(null, {emitEvent: false, onlySelf: true});
          this.searchForm.get('employees_ids').setValue(null, {emitEvent: false, onlySelf: true});
          this.searchForm.get('is_null_chain_status').setValue(null, {emitEvent: false, onlySelf: true});
          this.searchForm.get('event_id').setValue(res.event.id, {emitEvent: false, onlySelf: true});
          //
          // this.searchForm.get('page').setValue(1, {emitEvent: false, onlySelf: true});
          this.isFilteredByEvent = true;
          checkbox.writeValue(true);

          if (res.event.start.getTime() > currentDateTime) {
            this.selectedFilters.push('future_events_date_start');
            this.searchForm.get('next_events_date_start_after').setValue(new Date(currentDateTime), {
              emitEvent: false,
              onlySelf: true
            });
            this.searchForm.get('next_events_date_start_before').setValue(res.event.start, {
              emitEvent: false,
              onlySelf: true
            });
          } else {
            this.selectedFilters.push('last_events_date_start');
            this.searchForm.get('last_events_date_start_after').setValue(new Date(res.event.start), {
              emitEvent: false,
              onlySelf: true
            });
            this.searchForm.get('last_events_date_start_before').setValue(new Date(currentDateTime), {
              emitEvent: false,
              onlySelf: true
            });
          }
          this.updated();
        } else {
          this.isFilteredByEvent = false;
          checkbox.writeValue(false);
        }
      });
    } else {
      this.searchForm.get('id__in').setValue([]);
      this.searchForm.get('event_id').setValue(null);

      this.isFilteredByEvent = false;
      checkbox.writeValue(false);
      this.selectedFilters = [];
      this.updated();
    }
  }


  private onViewCompany() {
    // this.router.navigate(['/crm/business-partners/company-page/', this.selectedEventCompany.company.id]);
    window.open(`/crm/business-partners/company-page/${this.selectedEventCompany.company.id}`, '_blank');
  }

  onCreateLinkedEvent() {
    this.eventsListService.openCreateEventEventModal('create', 'withEmployee',
      this.selectedEventCompany.event,
      this.selectedEventCompany.company.id,
      true).subscribe(event => {
      if (event) {
        this.emitChange();
      }
    });
  }

  onDoneCompany() {
    this.eventsListService.openEventCompanySetStateModal(this.selectedEventCompany).subscribe(res => {
      if (res) {
        this.selectedEventCompany = null;
        this.emitChange();
      }
    });
  }

  onEditCompany() {
    if (this.selectedEventCompany) {
      this.eventCompanyService.openEditModal(this.selectedEventCompany).subscribe(company => {
        if (company) {
          this.selectedEventCompany = null;
          this.emitChange();
        }
      });
    }
  }

  onRemoveTechnology() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.eventCompanyService.delete(this.selectedEventCompany.id).subscribe(() => {
          this.selectedEventCompany = null;
          this.emitChange();
        });
      }
    });
  }

  selectedReport(event: any, company: any) {
    if (this.selectedEventCompany && this.selectedEventCompany.id == event.event_id) {
      this.selectedEventCompany = null;
    } else {
      this.selectedEventCompany = {
        comment: event.event_comment,
        id: event.event_id,
        impression: event.impression,
        is_done: event.is_done,
        company: company,
        event: event
      };
    }

  }
}

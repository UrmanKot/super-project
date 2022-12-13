import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventItem} from '../models/event-item';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {AddCompanyToEventComponent} from '../modals/add-company-to-event/add-company-to-event.component';
import {MatDialog} from '@angular/material/dialog';
import {
  AddContactPersonToEventComponent
} from '../modals/add-contact-person-to-event/add-contact-person-to-event.component';
import {EditEmployeeEventDateComponent} from '../modals/edit-employee-event-date/edit-employee-event-date.component';
import {ModalActionType} from '@shared/models/modal-action';
import {CreateEditEventComponent} from '../modals/create-edit-event/create-edit-event.component';
import {AddEventModalType} from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class EventsListService {

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'events_list/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getById(id): Observable<EventItem> {
    return this.httpClient.get<{ data: EventItem }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  get(query?: QuerySearch[]): Observable<EventItem[]> {
    let queryParams = '';

    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: EventItem[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getShorts(query?: QuerySearch[]): Observable<EventItem[]> {
    let queryParams = '';

    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '?' + element.name + '=' + element.value;
        }
      });
    }
    return this.httpClient.get<{ data: EventItem[] }>(this.API_URL + this.url + 'get_short_events_list/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getByEventsDays(): Observable<any[]> {
    return this.httpClient.get<{ data: any[] }>(this.API_URL + this.url + 'events_by_days/').pipe(
      map(response => response.data)
    );
  }

  create(event: EventItem): Observable<EventItem> {
    return this.httpClient.post<{ data: EventItem }>(this.API_URL + this.url, event).pipe(
      map(response => response.data)
    );
  }

  addCompany(id: number, event: Partial<EventItem>[]): Observable<EventItem> {
    return this.httpClient.post<{ data: EventItem }>(this.API_URL + this.url + id + '/add_companies/', event).pipe(
      map(response => response.data)
    );
  }

  addContact(id: number, event: Partial<EventItem>[]): Observable<EventItem> {
    return this.httpClient.post<{ data: EventItem }>(this.API_URL + this.url + id + '/add_contacts/', event).pipe(
      map(response => response.data)
    );
  }

  changeEvent(id: number, event: EventItem): Observable<EventItem> {
    return this.httpClient.patch<{ data: EventItem }>(this.API_URL + this.url + id + '/', event).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  createScheduleFromEvent(id: number, data: any): Observable<any> {
    return this.httpClient.post<{ data: EventItem }>(this.API_URL + 'schedule_from_event/' + id + '/', data).pipe(
      map(response => response.data)
    );
  }

  openAddCompanyToEventModal(eventId: number): Observable<EventItem> {
    return this.dialog
      .open<AddCompanyToEventComponent>(AddCompanyToEventComponent, {
        width: '35rem',
        height: 'auto',
        data: eventId,
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openAddContactPersonToEventModal(eventId: number): Observable<EventItem> {
    return this.dialog
      .open<AddContactPersonToEventComponent>(AddContactPersonToEventComponent, {
        width: '35rem',
        height: 'auto',
        data: eventId,
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openEditEmployeeEventDatesModal(employeeIds: number[], event: EventItem): Observable<{ start: Date, end: Date }> {
    return this.dialog
      .open<EditEmployeeEventDateComponent>(EditEmployeeEventDateComponent, {
        width: '64rem',
        height: 'auto',
        data: {employeeIds, event},
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openCreateEventEventModal(modalType: ModalActionType, type: AddEventModalType, event?: EventItem, companyId?: number): Observable<EventItem> {
    return this.dialog
      .open<CreateEditEventComponent>(CreateEditEventComponent, {
        width: '60rem',
        height: 'auto',
        data: {modalType, type, event, companyId},
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}


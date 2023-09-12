import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {CreateEditEventTypeComponent} from '../modals/create-edit-event-type/create-edit-event-type.component';
import {EventType} from '../models/event-type';
import {
  CreateEditExternalEventTypeComponent
} from '../modals/create-edit-external-event-type/create-edit-external-event-type.component';


@Injectable({
  providedIn: 'root'
})
export class EventTypesService {
  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'event_types/';

  eventTypes: EventType[];
  externalEventTypes: EventType[];

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query: QuerySearch[] = [], onlyInner = true): Observable<EventType[]> {
    if (onlyInner) {
      query.push({name: 'is_inner', value: true});
    }

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

    return this.httpClient.get<{ data: EventType[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => {
        const eventTypes = response.data;
        this.eventTypes = eventTypes;
        return eventTypes;
      }));
  }

  getNoneCache(query: QuerySearch[] = []): Observable<EventType[]> {

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

    return this.httpClient.get<{ data: EventType[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data));
  }

  getExternalEventTypes(query: QuerySearch[] = []): Observable<EventType[]> {
    if (this.externalEventTypes) {
      return of(this.externalEventTypes);
    }

    query.push({name: 'is_inner', value: false});

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

    return this.httpClient.get<{ data: EventType[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => {
        const eventTypes = response.data;
        this.externalEventTypes = eventTypes;
        return eventTypes;
      }));
  }

  getByFilters(query?: QuerySearch[]): Observable<EventType[]> {
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

    return this.httpClient.get<{ data: EventType[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }


  create(eventType: EventType): Observable<EventType> {
    return this.httpClient.post<{ data: EventType }>(this.API_URL + this.url, eventType).pipe(
      map(response => response.data)
    );
  }

  update(eventType: EventType): Observable<EventType> {
    return this.httpClient.patch<{ data: EventType }>(this.API_URL + this.url + eventType.id + '/', eventType).pipe(
      map(response => response.data)
    );
  }

  delete(eventType: EventType): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + eventType.id + '/');
  }

  addCalendarFromGoogle(eventType: Partial<EventType>): Observable<EventType> {
    return this.httpClient.post<{ data }>(this.API_URL + this.url + 'add_calendar_from_google/', eventType).pipe(
      map(response => response.data)
    );
  }

  createEditEventType(type: ModalActionType, eventType?: EventType): Observable<EventType> {
    return this.dialog
      .open<CreateEditEventTypeComponent>(CreateEditEventTypeComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, eventType},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  createEditExternalEventType(type: ModalActionType, eventType?: EventType): Observable<EventType> {
    return this.dialog
      .open<CreateEditExternalEventTypeComponent>(CreateEditExternalEventTypeComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, eventType},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventContactPerson} from '../models/event-contact-person';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {EventCompany} from '../models/event-company';
import {EditCrmEventCompanyComponent} from '../modals/edit-crm-event-company/edit-crm-event-company.component';
import {MatDialog} from '@angular/material/dialog';
import {
  EditCrmEventContactPersonComponent
} from '../modals/edit-crm-event-contact-person/edit-crm-event-contact-person.component';

@Injectable({
  providedIn: 'root'
})
export class EventContactPersonService {

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'event_contact_persons/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getById(id: number): Observable<EventContactPerson> {
    return this.httpClient.get<{ data: EventContactPerson }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  get(query?: QuerySearch[]): Observable<EventContactPerson[]> {
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
    return this.httpClient.get<{ data: EventContactPerson[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  create(person: EventContactPerson): Observable<EventContactPerson> {
    return this.httpClient.post<{ data: EventContactPerson }>(this.API_URL + this.url, person).pipe(
      map(response => response.data)
    );
  }

  update(eventId: number, person: Partial<EventContactPerson>): Observable<EventContactPerson> {
    return this.httpClient.patch<{ data: EventContactPerson }>(this.API_URL + this.url + eventId + '/', person).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  openEditModal(eventContactPerson: EventContactPerson): Observable<EventContactPerson> {
    return this.dialog
      .open<EditCrmEventContactPersonComponent>(EditCrmEventContactPersonComponent, {
        width: '35rem',
        height: 'auto',
        data: eventContactPerson,
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

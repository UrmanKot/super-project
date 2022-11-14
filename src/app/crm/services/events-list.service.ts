import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventItem} from '../models/event-item';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {AddCompanyToEventComponent} from '../modals/add-company-to-event/add-company-to-event.component';
import {MatDialog} from '@angular/material/dialog';

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

  addCompany(id: number, event: Partial<EventItem>[]): Observable<EventItem> {
    return this.httpClient.post<{ data: EventItem }>(this.API_URL + this.url + id + '/add_companies/', event).pipe(
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
}

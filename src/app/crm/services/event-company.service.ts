import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EventCompany} from '../models/event-company';
import {QuerySearch} from '@shared/models/other';
import {MatDialog} from '@angular/material/dialog';
import {EditCrmEventCompanyComponent} from '../modals/edit-crm-event-company/edit-crm-event-company.component';
import {CompanyActivity} from '../models/company-activity';
import {
  CrmEditCompanyActivityComponent
} from '../modals/crm-edit-company-activity-event/crm-edit-company-activity.component';

@Injectable({
  providedIn: 'root'
})
export class EventCompanyService {

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'event_companies/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<EventCompany[]> {
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

    return this.httpClient.get<{ data: EventCompany[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id): Observable<EventCompany> {
    return this.httpClient.get<{ data: EventCompany }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  create(company: Partial<EventCompany>): Observable<EventCompany> {
    return this.httpClient.post<{ data: EventCompany }>(this.API_URL + this.url, company).pipe(
      map(response => response.data)
    );
  }

  update(id: number, company: Partial<EventCompany>): Observable<EventCompany> {
    return this.httpClient.patch<{ data: EventCompany }>(this.API_URL + this.url + id + '/', company).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  openEditModal(eventCompany: EventCompany): Observable<EventCompany> {
    return this.dialog
      .open<EditCrmEventCompanyComponent>(EditCrmEventCompanyComponent, {
        width: '35rem',
        height: 'auto',
        data: eventCompany,
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openEditCompanyActivityModal(companyActivity: CompanyActivity): Observable<CompanyActivity> {
    return this.dialog
      .open<CrmEditCompanyActivityComponent>(CrmEditCompanyActivityComponent, {
        width: '35rem',
        height: 'auto',
        data: companyActivity,
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

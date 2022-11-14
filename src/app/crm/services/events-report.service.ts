import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {EventReport, EventsReports} from '../models/event-report';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsReportService {

  API_URL = environment.base_url + environment.business_partners_url;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getForPagination(query?: QuerySearch[]): Observable<EventsReports> {
    query.push({name: 'paginated', value: true});

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

    return this.httpClient
      .get<{ data: EventsReports }>(this.API_URL + 'events_reports/get_reports_events/' + queryParams)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  get(query?: QuerySearch[]): Observable<EventReport[]> {
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

    return this.httpClient
      .get<{ data: EventReport[] }>(this.API_URL + 'events_reports/get_reports_events/' + queryParams)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {CrmPosition} from '../models/crm-position';

@Injectable({
  providedIn: 'root'
})
export class CrmPositionsService {
  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'positions/';

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}
  get(query?: QuerySearch[]): Observable<CrmPosition[]> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }
    return this.httpClient
      .get<{ data: CrmPosition[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getById(id): Observable<CrmPosition> {
    return this.httpClient.get<{ data: CrmPosition }>(this.API_URL + this.url + id + '/').pipe(map(response => {
      return response.data;
    }));
  }

  create(entity) {
    return this.httpClient
      .post<{ data: CrmPosition }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity: CrmPosition) {
    return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: CrmPosition) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

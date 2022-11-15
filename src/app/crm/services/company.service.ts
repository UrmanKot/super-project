import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Companies, Company} from '../models/company';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {Technology} from '../../product-structure/models/technology';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  shortCompanies: Partial<Company>[];

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'companies/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(query?: QuerySearch[]): Observable<Company[]> {
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
    return this.httpClient.get<{ data: Company[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getForPagination(query?: QuerySearch[]): Observable<Companies> {
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
    return this.httpClient.get<{ data: Companies }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  getShorts() {
    if (this.shortCompanies) {
      return of(this.shortCompanies);
    }

    return this.httpClient.get<{ data: Partial<Company>[] }>(this.API_URL + this.url + 'get_short_companies_list/').pipe(
      map(response => {
        const shortCompanies = response.data;
        this.shortCompanies = shortCompanies;
        return shortCompanies;
      }));
  }
}

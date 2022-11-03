import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Country} from '@shared/models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'countries/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(query?: QuerySearch[]): Observable<Country[]> {
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

    return this.httpClient.get<{ data: Country[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }
}

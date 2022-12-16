import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {BusinessTripCountry} from '../models/business-trip-country';
import {QuerySearch} from '@shared/models/other';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessTripCountryService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips-countries/';
  constructor(private httpClient: HttpClient) { }

  get(query?: QuerySearch[]): Observable<BusinessTripCountry[]> {
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
      .get<{ data: BusinessTripCountry[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}

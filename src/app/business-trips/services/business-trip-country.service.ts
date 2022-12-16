import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {BusinessTripCountry} from '../models/business-trip-country';
import {QuerySearch} from '@shared/models/other';
import {environment} from '@env/environment';
import {Company} from '../../crm/models/company';

@Injectable({
  providedIn: 'root'
})
export class BusinessTripCountryService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips-countries/';
  countriesResult: ReplaySubject<BusinessTripCountry[]> = new ReplaySubject<BusinessTripCountry[]>();
  isLoadingCountries = false;
  constructor(private httpClient: HttpClient) { }

  get(query?: QuerySearch[]): Observable<BusinessTripCountry[]> {
    if (this.isLoadingCountries) {
      return this.countriesResult;
    } else {
      this.isLoadingCountries = true;
      return this.load(query);
    }
  }

  load(query?: QuerySearch[]) {
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
          this.countriesResult.next(response.data);
          return response.data;
        })
      );
  }
}

import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BusinessTripHotel} from '../models/business-trip-hotel';

@Injectable({
  providedIn: 'root'
})
export class BusinessTripHotelService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips-hotels/';

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

  get(query?: QuerySearch[]): Observable<BusinessTripHotel[]> {
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
      .get<{ data: BusinessTripHotel[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getById(id): Observable<BusinessTripHotel> {
    return this.httpClient
      .get<{ data: BusinessTripHotel }>(this.API_URL + this.url + id + '/')
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  create(entity) {
    return this.httpClient
      .post<{ data: BusinessTripHotel }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity: BusinessTripHotel) {
    return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: BusinessTripHotel) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

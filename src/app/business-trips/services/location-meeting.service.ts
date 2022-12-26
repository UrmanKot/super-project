import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {BusinessTripLocation} from '../models/business-trip-location';
import {map} from 'rxjs/operators';
import {BusinessTripLocationMeeting} from '../models/business-trip-location-meeting';
import {Vehicle} from '../models/vehicle';
import {QuerySearch} from '@shared/models/other';
import {BusinessTripPaginated} from '../models/business-trip';

@Injectable({
  providedIn: 'root'
})
export class LocationMeetingService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips-locations-meetings/';
  constructor(
    private httpClient: HttpClient, public dialog: MatDialog,
  ) { }

  get(query?: QuerySearch[]): Observable<BusinessTripLocationMeeting[]> {
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
      .get<{ data: BusinessTripLocationMeeting[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  create(entity): Observable<BusinessTripLocationMeeting> {
    return this.httpClient
      .post<{ data: BusinessTripLocationMeeting }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity) {
    return this.httpClient.patch<{ data: BusinessTripLocationMeeting }>(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: BusinessTripLocationMeeting) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

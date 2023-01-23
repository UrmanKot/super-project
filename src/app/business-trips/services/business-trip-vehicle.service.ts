import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {BusinessTripHotel} from '../models/business-trip-hotel';
import {map} from 'rxjs/operators';
import {BusinessTripVehicle} from '../models/business-trip-vehicle';

@Injectable({
  providedIn: 'root'
})
export class BusinessTripVehicleService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips-vehicles/';

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

  get(query?: QuerySearch[]): Observable<BusinessTripVehicle[]> {
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
      .get<{ data: BusinessTripVehicle[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getById(id): Observable<BusinessTripVehicle> {
    return this.httpClient
      .get<{ data: BusinessTripVehicle }>(this.API_URL + this.url + id + '/')
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  create(entity) {
    return this.httpClient
      .post<{ data: BusinessTripVehicle }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update_vehicle(id, entity: any) {
    return this.httpClient.post<{ data: BusinessTripVehicle }>(this.API_URL + this.url + 'update_business_trip_vehicle/', entity);
  }

  update(id, entity: any) {
    return this.httpClient.patch<{ data: BusinessTripVehicle }>(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: BusinessTripVehicle) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

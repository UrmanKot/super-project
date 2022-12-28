import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BusinessTripLocation} from '../models/business-trip-location';

@Injectable({
  providedIn: 'root'
})
export class BusinessLocationService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips-locations/';
  constructor(
    private httpClient: HttpClient, public dialog: MatDialog,
  ) { }

  create(entity): Observable<BusinessTripLocation> {
    return this.httpClient
      .post<{ data: BusinessTripLocation }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity) {
    return this.httpClient.patch<{ data: BusinessTripLocation }>(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: BusinessTripLocation) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

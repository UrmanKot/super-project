import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BusinessTripEmployee} from './business-trip-employee';

@Injectable({
  providedIn: 'root'
})
export class CustomEmployeesService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'custom-employees/';

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog) {
  }

  get(query?: [{ name: string; value: any }]): Observable<BusinessTripEmployee[]> {
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
      .get<{ data: BusinessTripEmployee[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}

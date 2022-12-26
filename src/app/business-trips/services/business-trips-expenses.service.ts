import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {BusinessTripLocation} from '../models/business-trip-location';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {environment} from '@env/environment';
import {BusinessTripExpense} from '../models/business-trip-expense';
import {QuerySearch} from '@shared/models/other';
import {BusinessTripLocationMeeting} from '../models/business-trip-location-meeting';
import {NomenclatureImage} from '@shared/models/nomenclature';

@Injectable({
  providedIn: 'root'
})
export class BusinessTripsExpensesService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips-expenses/';
  constructor(
    private httpClient: HttpClient, public dialog: MatDialog,
  ) { }

  get(query?: QuerySearch[]): Observable<BusinessTripExpense[]> {
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
      .get<{ data: BusinessTripExpense[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  create(entity): Observable<BusinessTripExpense> {
    return this.httpClient
      .post<{ data: BusinessTripExpense }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity) {
    return this.httpClient.patch<{ data: BusinessTripExpense }>(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: BusinessTripExpense) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }

  uploadImage(send: any, expenseId: number) {
    const formData = new FormData();

    for (const key in send) {
      if (send[key] !== null) {
        formData.append(key, send[key]);
      }
    }

    return this.httpClient.post(this.API_URL + this.url + expenseId + '/add_file_to_expense/', formData).pipe();
  }
}

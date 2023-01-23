import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {Expense, ExpensePaginated} from '../models/expense';
import {CreateEditExpenseComponent} from '../modals/create-edit-expense/create-edit-expense.component';
import {CreateUpdateExpenseComponent} from '../modals/create-update-expense/create-update-expense.component';
import {VehiclePaginated} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'expenses/';

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

  get(query?: QuerySearch[]): Observable<Expense[]> {
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
      .get<{ data: Expense[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getPaginated(query?: QuerySearch[]): Observable<ExpensePaginated> {
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
      .get<{ data: ExpensePaginated }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getById(id): Observable<Expense> {
    return this.httpClient
      .get<{ data: Expense }>(this.API_URL + this.url + id + '/')
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  create(entity) {
    return this.httpClient
      .post<{ data: Expense }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity: Expense) {
    return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: Expense) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }

  createChangeExpanseItem(entity = null, canVerify = false) {
    return this.dialog
      .open<CreateEditExpenseComponent>(CreateEditExpenseComponent, {
        width: '800px',
        data: {type: entity ? 'edit' : 'add', entity, canVerify },
        disableClose: true,
      })
      .afterClosed()
      .pipe();
  }

  createChangeExpense(entity: Expense = null) {
    return this.dialog
      .open<CreateUpdateExpenseComponent>(CreateUpdateExpenseComponent, {
        width: '800px',
        data: {type: entity ? 'edit' : 'add', entity},
        disableClose: true,
      })
      .afterClosed()
      .pipe();
  }
}

import {Injectable} from '@angular/core';
import {environment} from "@env/environment";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {QuerySearch} from "@shared/models/other";
import {AdditionalExpense} from "../models/additional-expense";
import {ModalActionType} from "@shared/models/modal-action";
import {
  CreateEditAdditionalExpensesComponent
} from "../modals/create-edit-additional-expenses/create-edit-additional-expenses.component";

@Injectable({
  providedIn: 'root'
})
export class AdditionalExpenseService {

  API_URL = environment.base_url + environment.accounting_url;
  readonly url = 'accounting_services/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<AdditionalExpense[]> {
    let queryParams = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value
        } else {
          queryParams += '?' + element.name + '=' + element.value
        }
      });
    }

    return this.httpClient.get<{ data: AdditionalExpense[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    )
  }

  create(entity: AdditionalExpense): Observable<AdditionalExpense> {
    return this.httpClient.post<{ data: AdditionalExpense }>(this.API_URL + this.url, entity).pipe(
      map(response => response.data)
    );
  }

  updatePartly(entity: AdditionalExpense): Observable<AdditionalExpense> {
    console.log(entity)
    return this.httpClient.patch<{ data: AdditionalExpense }>(this.API_URL + this.url + entity.id + '/', entity).pipe(
      map(response => response.data)
    );
  }

  createExpanse(send: any) {
    return this.httpClient.post<{ data: any }>(this.API_URL + 'accounting_services_to_list_products/', send).pipe(
      map(res => res.data)
    )
  }

  createExpanseTask(send: any) {
    return this.httpClient.post<{ data: any }>(this.API_URL + 'accounting_services_to_tasks/', send).pipe(
      map(res => res.data)
    )
  }

  removeExpanse(id: number) {
    return this.httpClient.delete(this.API_URL + `accounting_services_to_list_products/${id}/`)
  }

  removeExpanseTask(id: number) {
    return this.httpClient.delete(this.API_URL + `accounting_services_to_tasks/${id}/`)
  }

  delete(id: string) {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  createEditCurrencyModal(type: ModalActionType, additionalExpense?: AdditionalExpense): Observable<AdditionalExpense> {
    return this.dialog
      .open<CreateEditAdditionalExpensesComponent>(CreateEditAdditionalExpensesComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, additionalExpense},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {AccountingProduct, AccountingProducts} from "../models/accounting-product";
import {MatDialog} from "@angular/material/dialog";
import {ReportsFiltersModalComponent} from "../modals/reports-filters-modal/reports-filters-modal.component";
import {
  AdditionalExpensesModalComponent
} from "../modals/additional-expenses-modal/additional-expenses-modal.component";
import {AdditionalExpenseService} from "./additional-expense.service";

@Injectable({
  providedIn: 'root'
})
export class CostReportsService {

  API_URL = environment.base_url + environment.production_url;

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  costReportsPagination(query?: { name: string, value: any }[]): Observable<AccountingProducts> {
    let q_string = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          q_string += '&' + element.name + '=' + element.value;
        } else {
          q_string += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{
      data: AccountingProducts
    }>(this.API_URL + 'tasks/cost_reports_list/' + q_string).pipe(map(response => {
      return response.data;
    }));
  }

  costReports(query?: { name: string, value: any }[]): Observable<AccountingProduct[]> {
    let q_string = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          q_string += '&' + element.name + '=' + element.value;
        } else {
          q_string += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{
      data: AccountingProduct[]
    }>(this.API_URL + 'tasks/cost_reports_list/' + q_string).pipe(map(response => {
      return response.data;
    }));
  }

  getCostReport(id): Observable<AccountingProduct[]> {
    return this.httpClient.get<{
      data: AccountingProduct[]
    }>(this.API_URL + 'tasks/' + id + '/cost_report/').pipe(map(response => {

      return response.data;
    }));
  }

  additionalExpensesModal(type: 'old' | 'new', id: number, services: any[]) {
    return this.dialog
      .open<AdditionalExpensesModalComponent>(AdditionalExpensesModalComponent, {
        width: '50rem',
        height: 'auto',
        data: {type, id, services},
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

}

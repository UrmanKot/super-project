import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AccountingCategories, AccountingCategory} from "../models/accounting-category";
import {ModalActionType} from "@shared/models/modal-action";
import {Currency} from "@shared/models/currency";
import {CreateEditCurrencyComponent} from "../modals/create-edit-currency/create-edit-currency.component";
import {MatDialog} from "@angular/material/dialog";
import {
  CreateEditAccountingCategoryComponent
} from "../modals/create-edit-accounting-category/create-edit-accounting-category.component";
import {
  AccountingCategoryPickerComponent
} from "../modals/accounting-category-picker/accounting-category-picker.component";
import {QuerySearch} from "@shared/models/other";


@Injectable({
  providedIn: 'root'
})

export class AccountingCategoriesService {

  API_URL = environment.base_url + environment.accounting_url;
  readonly url = 'accounting_categories/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getForPagination(query: QuerySearch[] = []): Observable<AccountingCategories> {
    query.push({name: 'paginated', value: true});
    let queryString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryString += '&' + element.name + '=' + element.value;
        } else {
          queryString += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{data: AccountingCategories}>(this.API_URL + this.url + queryString).pipe(map(response => {
      return response.data;
    }));
  }

  get(query: QuerySearch[] = []): Observable<AccountingCategory[]> {
    let queryString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryString += '&' + element.name + '=' + element.value;
        } else {
          queryString += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{data: AccountingCategory[]}>(this.API_URL + this.url + queryString).pipe(map(response => {
      return response.data;
    }));
  }

  createAccountingCategory(accountingCategory: AccountingCategory): Observable<AccountingCategory> {
    return this.httpClient.post<{ data: AccountingCategory }>(this.API_URL + this.url, accountingCategory).pipe(map(response => {
      return response.data;
    }));
  }

  editAccountingCategory(accountingCategory: AccountingCategory): Observable<AccountingCategory> {
    return this.httpClient.patch<{ data: AccountingCategory }>(this.API_URL + this.url + accountingCategory.id + '/', accountingCategory)
      .pipe(map(response => {
      return response.data;
    }));
  }

  delete(accountingCategory: AccountingCategory) {
    return this.httpClient.delete<{ data: AccountingCategory }>(this.API_URL + this.url + accountingCategory.id + '/');
  }

  createEditCurrencyModal(type: ModalActionType, category?: AccountingCategory): Observable<AccountingCategory> {
    return this.dialog
      .open<CreateEditAccountingCategoryComponent>(CreateEditAccountingCategoryComponent, {
        width: '30rem',
        height: 'auto',
        data: {type, category},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openAccountingCategoryPicker(category: AccountingCategory): Observable<any> {
    return this.dialog
      .open<AccountingCategoryPickerComponent>(AccountingCategoryPickerComponent, {
        width: '30rem',
        height: 'auto',
        data: {category},
        autoFocus: false,
        enterAnimationDuration: '250ms',
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed();
  }

}

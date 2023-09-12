import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {
  DescendantCategoryData
} from "../../product-structure/modals/add-accounting-number-to-category/add-accounting-number-to-category.component";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AccountingType} from "../models/accounting-types";

@Injectable({
  providedIn: 'root'
})
export class AccountingTypeService {

  API_URL = environment.base_url + environment.accounting_url;
  readonly url = 'accounting_types/';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getAccountingTypes(): Observable<AccountingType[]> {
    return this.httpClient.get<{ data: AccountingType[] }>(this.API_URL + this.url).pipe(map(response => {
      return response.data;
    }));
  }

  updateAccountingType(accountingType: AccountingType): Observable<AccountingType> {
    return this.httpClient.patch<{ data: AccountingType }>(this.API_URL + this.url + accountingType.id + '/', accountingType)
      .pipe(map(response => response.data));
  }

  addAccountingNumberToCategory(categoryId: number, data: DescendantCategoryData) {
    return this.httpClient.post(environment.base_url + `product_structure/categories/${categoryId}/nomenclature_by_descendant_categories_bulk_update/`, data);
  }

}

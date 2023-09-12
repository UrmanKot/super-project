import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {QuerySearch} from "@shared/models/other";
import {ExcludePayment} from "./payment-checker";

@Injectable({
  providedIn: 'root'
})
export class PaymentCheckerService {

  API_URL = environment.base_url + environment.accounting_url;
  readonly url = 'accounting_services/';

  constructor(private httpClient: HttpClient) {

  }

  attachFiles(data, query: QuerySearch[]) {
    let queryParams = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '?' + element.name + '=' + element.value;
        }

      });
    }

    return this.httpClient.post<{
      data: any
    }>(environment.base_url + 'procurement/invoices/compare_db_with_xml/' + queryParams, data)
      .pipe(
        map(response => response.data)
      );
  }

  getExcludePayments(query?: QuerySearch[]) {
    let queryParams = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '?' + element.name + '=' + element.value;
        }

      });
    }

    return this.httpClient.get<{
      data: ExcludePayment[]
    }>(environment.base_url + 'procurement/payment_checker_exclude_companies/' + queryParams)
      .pipe(
        map(response => response.data)
      );
  }

  excludePayment(send: { name: string }) {
    return this.httpClient.post<{
      data: ExcludePayment
    }>(environment.base_url + 'procurement/payment_checker_exclude_companies/', send)
      .pipe(
        map(response => response.data)
      );
  }

  restoreExcludePayment(send: { id: number }) {
    return this.httpClient.delete<{
      data: ExcludePayment
    }>(environment.base_url + `procurement/payment_checker_exclude_companies/${send.id}/`)
      .pipe(
        map(response => response)
      );
  }
}

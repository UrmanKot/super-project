import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {Invoice} from '../models/invoice';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'invoices/';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  get(query?: QuerySearch[]): Observable<Invoice[]> {
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
    return this.httpClient.get<{ data: Invoice[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => response.data)
    );
  }
}

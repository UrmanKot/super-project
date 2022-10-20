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
    return this.httpClient.get<{ data: Invoice[] }>(this.API_URL + this.url + 'all/' + queryString).pipe(
      map(response => response.data)
    );
  }
}

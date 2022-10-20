import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {InvoiceProduct} from '../models/invoice-product';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceProductService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'invoice_products/';

  constructor(
    private httpClient: HttpClient
  ) {

  }

  get(query?: QuerySearch[]): Observable<InvoiceProduct[]> {
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

    return this.httpClient.get<{ data: InvoiceProduct[] }>(this.API_URL + this.url + 'all/' + queryString).pipe(
      map(response => response.data)
    );
  }
}

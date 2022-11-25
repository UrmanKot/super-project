import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {InvoiceProduct} from '../models/invoice-product';
import {concat, forkJoin, Observable} from 'rxjs';
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

    return this.httpClient.get<{ data: InvoiceProduct[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  acceptSeveral(send: any[]): Observable<any> {
    return concat(...send.map(product => this.httpClient.post(environment.base_url + environment.warehouse_url + 'invoice_product_to_warehouse/', [product.data]).pipe(
      map(response => response)
    )));
  }
}

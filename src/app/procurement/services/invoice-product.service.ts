import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {InvoiceProduct} from '../models/invoice-product';
import {forkJoin, Observable} from 'rxjs';
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

  severalUpdatePartly(invoices: Partial<InvoiceProduct>[]) {
    return forkJoin(...invoices.map(invoice => this.httpClient.patch(this.API_URL + this.url + invoice.id + '/', invoice)));
  }

  updatePartly(invoice: Partial<InvoiceProduct>): Observable<InvoiceProduct> {
    return this.httpClient.patch<{ data: InvoiceProduct }>(this.API_URL + this.url + invoice.id + '/', invoice).pipe(
      map(response => response.data)
    );
  }

  getInvoiceProducts(id: number): Observable<InvoiceProduct[]> {
    return this.httpClient.get<{ data: InvoiceProduct[] }>(this.API_URL + 'invoices/' + id + '/products_to_qc/').pipe(
      map(response => response.data)
    );
  }

  acceptSeveral(send: any[]): Observable<any> {
    return this.httpClient.post(environment.base_url + environment.warehouse_url + 'invoice_product_to_warehouse/', send).pipe(
      map(response => response)
    );
  }
}

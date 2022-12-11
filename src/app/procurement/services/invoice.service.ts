import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {Invoice} from '../models/invoice';
import {Observable} from 'rxjs';
import {InvoiceProduct} from '../models/invoice-product';
import {MatDialog} from '@angular/material/dialog';
import {
  QcAcceptToWarehouseComponent
} from '../../warehouse/modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'invoices/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
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

  getById(id: number): Observable<Invoice> {
    return this.httpClient.get<{ data: Invoice }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  getProductsToAccept(id: number): Observable<InvoiceProduct[]> {
    return this.httpClient.get<{ data: InvoiceProduct[] }>(this.API_URL + this.url + id + '/products_to_accept/').pipe(
      map(response => response.data)
    );
  }

  openAcceptToWarehouseModal(items: InvoiceProduct[], id: number, type = 'invoice'): Observable<any> {
    return this.dialog
      .open<QcAcceptToWarehouseComponent>(QcAcceptToWarehouseComponent, {
        width: '40rem',
        height: 'auto',
        data: {items, id, type},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

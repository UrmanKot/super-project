import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {Invoice, InvoiceFile} from '../models/invoice';
import {forkJoin, Observable} from 'rxjs';
import {InvoiceProduct} from '../models/invoice-product';
import {MatDialog} from '@angular/material/dialog';
import {
  QcAcceptToWarehouseComponent
} from '../../warehouse/modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component';
import {Order} from '../models/order';
import {InvoiceFilesComponent} from '../modals/invoice-files/invoice-files.component';
import {PaymentFile} from '../../payments/models/payment';

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
    return this.httpClient.get<{ data: Invoice[] }>(this.API_URL + this.url + queryParams).pipe(
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

  getFiles(id: number): Observable<InvoiceFile[]> {
    return this.httpClient.get<{ data: InvoiceFile[] }>(this.API_URL + 'invoice_files/' + id + '/').pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  downloadFile(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + 'invoice_file_download/' + id + '/', {responseType: 'blob'});
  }

  removeFile(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + 'invoice_file_delete/' + id + '/', null).pipe(
      map(response => response)
    );
  }

  severalUploadFiles(invoiceId: number, files: File[]): Observable<InvoiceFile[]> {
    const arrayFormData: FormData[] = [];

    files.forEach(file => {
      const formData = new FormData()
      formData.append('file', file);
      arrayFormData.push(formData)
    })
    return forkJoin(...arrayFormData.map(formData => this.httpClient.post<{data: InvoiceFile}>(this.API_URL + `invoice_files/${invoiceId}/`, formData).pipe(
      map(response => response.data)
    )));
  }

  openInvoiceFilesModal(invoice: Invoice): Observable<any> {
    return this.dialog
      .open<InvoiceFilesComponent>(InvoiceFilesComponent, {
        width: '40rem',
        height: 'auto',
        data: invoice,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
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

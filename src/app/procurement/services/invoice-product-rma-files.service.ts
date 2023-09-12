import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {HotelFiles} from '../../business-trips/models/hotel-files';
import {map} from 'rxjs/operators';
import {Correspondent} from '../../correspondent/models/correspondent';
import {InvoiceProductRmaFile} from '../models/invoice-product-rma-file';
import {
  InvoiceProductsRmaFilesComponent
} from '../modals/invoice-products-rma-files/invoice-products-rma-files.component';
import {InvoiceProduct} from '../models/invoice-product';

@Injectable({
  providedIn: 'root'
})
export class InvoiceProductRmaFilesService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'invoice_product_rma_files/';
  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) { }

  get(query?: QuerySearch[]): Observable<InvoiceProductRmaFile[]> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }
    return this.httpClient
      .get<{ data: InvoiceProductRmaFile[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  create(correspondent: InvoiceProductRmaFile) {
    const formData = new FormData();

    for (const key in correspondent) {
      if (correspondent[key] !== null) {
        formData.append(key, correspondent[key]);
      }
    }
    return this.httpClient.post<{ data: Correspondent }>(this.API_URL + this.url, formData);
  }

  delete(entity: InvoiceProductRmaFile) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
  downloadFile(fileId: number) {
  return this.httpClient.get(this.API_URL + this.url + fileId + '/download/', {responseType: 'blob'})
    .pipe(map(response => {
      return response;
    }));
  }

  invoiceProductsRmaFiles(files: InvoiceProductRmaFile[]) {
    return this.dialog
      .open<InvoiceProductsRmaFilesComponent>(InvoiceProductsRmaFilesComponent, {
        width: '32rem',
        panelClass: 'modal-overflow-visible',
        disableClose: false,
        data: {files},
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }
}

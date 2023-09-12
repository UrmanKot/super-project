import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ServiceInvoiceProduct} from "../models/service";
import {ModalActionType} from "@shared/models/modal-action";
import {Currency} from "@shared/models/currency";
import {CreateEditCurrencyComponent} from "../modals/create-edit-currency/create-edit-currency.component";
import {MatDialog} from "@angular/material/dialog";
import {
  CreateEditInvoiceServiceComponent
} from "../modals/create-edit-invoice-service/create-edit-invoice-service.component";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'services/';
  constructor(
    private http: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: { name: string, value: any }[]): Observable<ServiceInvoiceProduct[]> {
    let q_string = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          q_string += '&' + element.name + '=' + element.value
        } else {
          q_string += '?' + element.name + '=' + element.value
        }

      });
    }
    return this.http.get<{data:ServiceInvoiceProduct[]}>(this.API_URL + this.url + q_string).pipe(map(response => {
      return response.data;
    }))
  }

  get_files(paymentId: number) {
    return this.http.get<{data:any}>(this.API_URL + 'payment_files/' + paymentId + '/').pipe(map(response => {
      return response.data;
    }));
  }

  attach(file: FormData, paymentId: number) {
    return this.http.post<{data:any}>(this.API_URL + 'payment_files/' + paymentId + '/', file).pipe(map(response => {
      return response.data;
    }));
  }

  create(entity) {
    return this.http.post<{data:ServiceInvoiceProduct}>(this.API_URL + this.url, entity).pipe(map(response => {
      return response.data;
    }));
  }

  update(entity: ServiceInvoiceProduct) {
    return this.http.put(this.API_URL + this.url + entity.id + '/', entity);
  }

  updatePartly(entity: ServiceInvoiceProduct) {
    return this.http.patch(this.API_URL + this.url + entity.id + '/', entity);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + this.url + id + '/');
  }

  createEditServiceModal(type: ModalActionType, invoiceId: number, invoiceType: 'service' | 'invoice', service?: ServiceInvoiceProduct): Observable<ServiceInvoiceProduct> {
    return this.dialog
      .open<CreateEditInvoiceServiceComponent>(CreateEditInvoiceServiceComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, invoiceId, invoiceType, service},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

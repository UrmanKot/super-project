import { Injectable } from '@angular/core';
import {environment} from "@env/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Invoice} from "../../procurement/models/invoice";
import {map} from "rxjs/operators";
import {ModalActionType} from "@shared/models/modal-action";
import {Payment} from "../../payments/models/payment";
import {
  CreateEditPaymentFormComponent
} from "../../payments/modals/create-edit-payment-form/create-edit-payment-form.component";

@Injectable({
  providedIn: 'root'
})
export class ServiceInvoicesService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'service_invoices/';
  constructor(private httpClient: HttpClient) {

  }

  get(query?: { name: string, value: any }[]): Observable<Invoice[]> {
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
    return this.httpClient.get<{ data: Invoice[] }>(this.API_URL + this.url + 'all/' + q_string).pipe(map(response => {
      return response.data;
    }))
  }
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {ServiceInvoicePayment} from '../models/service-invoice-payment';

@Injectable({
  providedIn: 'root'
})
export class ServiceInvoicePaymentService {
  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'service_invoice_payments/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getConfirmationPayments(): Observable<ServiceInvoicePayment[]> {
    return this.httpClient.get<{ data: ServiceInvoicePayment[] }>(this.API_URL + this.url + 'confirmation_list/').pipe(
      map(response => response.data));
  }

  severalConfirm(ids: number[]): Observable<any[]> {
    return forkJoin(...ids.map(id => this.httpClient.post<{ data: ServiceInvoicePayment }>(this.API_URL + this.url + `confirm/${id}/`, null)));
  }

  severalDecline(ids: number[]): Observable<any[]> {
    return forkJoin(...ids.map(id => this.httpClient.post<{ data: ServiceInvoicePayment }>(this.API_URL + this.url + `decline/${id}/`, null)));
  }
}

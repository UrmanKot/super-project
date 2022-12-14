import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {forkJoin, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Payment} from '../models/payment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'payments/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getConfirmationPayments(): Observable<Payment[]> {
    return this.httpClient.get<{ data: Payment[] }>(this.API_URL + this.url + 'confirmation_list/').pipe(
      map(response => response.data));
  }

  severalConfirm(ids: number[]): Observable<any[]> {
    return forkJoin(...ids.map(id => this.httpClient.post<{ data: Payment }>(this.API_URL + this.url + `confirm/${id}/`, null).pipe(
      catchError(() => of(null)),
    )));
  }

  severalDecline(ids: number[]): Observable<any[]> {
    return forkJoin(...ids.map(id => this.httpClient.post<{ data: Payment }>(this.API_URL + this.url + `decline/${id}/`, null).pipe(
      catchError(() => of(null)),
    )));
  }

  getLimit(): Observable<{ id: number; value: string }[]> {
    return this.httpClient.get<{ data: { id: number; value: string }[] }>(this.API_URL + 'maximum_confirmed_payment_amount/').pipe(
      map(response => response.data)
    );
  }

  setLimit(limit: { id: number, value: string }): Observable<any> {
    return this.httpClient.patch(this.API_URL + 'maximum_confirmed_payment_amount/' + limit.id + '/', limit);
  }
}

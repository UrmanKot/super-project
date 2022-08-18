import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Payment} from '../models/payment';
import {map} from 'rxjs/operators';

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
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderSupplier, OrderSupplierConfirmation} from '../models/order-supplier';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderSupplierService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'order_supplier_confirmation/';
  readonly orderSupplierUrl = 'order_supplier_confirmation_list_item/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getConfirmations(): Observable<OrderSupplierConfirmation[]> {
    return this.httpClient.get<{ data: OrderSupplierConfirmation[] }>(this.API_URL + `${this.url}?sent_to_confirmation=true`).pipe(
      map(response => response.data)
    );
  }

  getOrderSuppliers(orderId: number): Observable<OrderSupplier[]> {
    return this.httpClient.get<{ data: OrderSupplier[] }>(this.API_URL + `${this.orderSupplierUrl}?list_id=${orderId}`).pipe(
      map(response => response.data)
    );
  }

  declineOrderSupplier(orderId: number): Observable<OrderSupplier> {
    return this.httpClient.post<{ data: OrderSupplier }>(this.API_URL + `${this.orderSupplierUrl}${orderId}/decline_supplier/`, null).pipe(
      map(response => response.data)
    );
  }

  confirmOrderSupplier(orderId: number): Observable<OrderSupplier> {
    return this.httpClient.post<{ data: OrderSupplier }>(this.API_URL + `${this.orderSupplierUrl}${orderId}/confirm_supplier/`, null).pipe(
      map(response => response.data)
    );
  }

  declineAll(id: number): Observable<any> {
    return this.httpClient.post<{ data: OrderSupplierConfirmation[] }>(this.API_URL + `${this.url}${id}/decline_all_suppliers/`, null).pipe(
      map(response => response.data)
    );
  }
}

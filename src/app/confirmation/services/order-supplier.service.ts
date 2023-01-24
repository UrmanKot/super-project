import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderSupplier, OrderSupplierConfirmation} from '../models/order-supplier';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {
  AddSupplierToOrderComponent
} from '../../outsourcing/modals/add-supplier-to-order/add-supplier-to-order.component';
import {EditOrderSupplierComponent} from '../../outsourcing/modals/edit-order-supplier/edit-order-supplier.component';

@Injectable({
  providedIn: 'root'
})
export class OrderSupplierService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'order_supplier_confirmation/';
  readonly orderSupplierUrl = 'order_supplier_confirmation_list_item/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
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

  getOrderSupplierListForOrder(id: number): Observable<OrderSupplier[]> {
    return this.httpClient.get<{ data: OrderSupplier[] }>(this.API_URL + `order_supplier_confirmation_list_item/?order_id=${id}`).pipe(
      map(response => response.data)
    );
  }

  getOrderSupplierListForList(id: number): Observable<OrderSupplier[]> {
    return this.httpClient.get<{ data: OrderSupplier[] }>(this.API_URL + `order_supplier_confirmation_list_item/?list_id=${id}`).pipe(
      map(response => response.data)
    );
  }

  addSupplierToOrder(data: any): Observable<OrderSupplier> {
    return this.httpClient.post<{ data: OrderSupplier }>(this.API_URL + `order_supplier_confirmation_list_item/`, data).pipe(
      map(response => response.data)
    );
  }

  updateSupplier(data: Partial<OrderSupplier>) {
    return this.httpClient.patch<{ data: OrderSupplier }>(this.API_URL + `order_supplier_confirmation_list_item/${data.id}/`, data).pipe(
      map(response => response.data)
    );
  }

  orderSupplierConfirm(id: number): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url + `${id}/send_to_confirmation/`, null).pipe(
      map(response => response.data)
    );
  }

  deleteSupplier(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + `order_supplier_confirmation_list_item/${id}/`);
  }

  openAddSupplierToOrderModal(id: number): Observable<OrderSupplier> {
    return this.dialog
      .open<AddSupplierToOrderComponent>(AddSupplierToOrderComponent, {
        width: '40rem',
        data: {id},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  getOrderSupplierConfirmation(id: number): Observable<OrderSupplierConfirmation[]> {
    return this.httpClient.get<{ data: OrderSupplierConfirmation[] }>(this.API_URL + this.url + `?order=${id}`).pipe(
      map(response => response.data)
    );
  }

  openEditSupplierModal(orderSupplier: OrderSupplier): Observable<OrderSupplier> {
    return this.dialog
      .open<EditOrderSupplierComponent>(EditOrderSupplierComponent, {
        width: '40rem',
        data: {orderSupplier},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

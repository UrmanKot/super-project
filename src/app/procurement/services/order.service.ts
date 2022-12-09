import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {Order, Orders} from '../models/order';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {OrderProduct} from '../models/order-product';
import {
  QcAcceptToWarehouseComponent
} from '../../warehouse/modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component';
import {MatDialog} from '@angular/material/dialog';
import {OrderTechnicalEquipment} from '../../warehouse/models/order-technical-equipment';
import {
  QcAcceptTechnicalEquipmentComponent
} from '../../warehouse/modals/qc-accept-technical-equipment/qc-accept-technical-equipment.component';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'orders/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<Order[]> {
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

    return this.httpClient.get<{ data: Order[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getForPagination(query?: QuerySearch[]): Observable<Orders> {
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

    return this.httpClient.get<{ data: Orders }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<Order> {
    return this.httpClient.get<{ data: Order }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  getProductsToAccept(id: number): Observable<OrderProduct[]> {
    return this.httpClient.get<{ data: OrderProduct[] }>(this.API_URL + this.url + id + '/products_to_accept/').pipe(
      map(response => response.data)
    );
  }

  getTechnicalEquipmentToAccept(id: number): Observable<OrderTechnicalEquipment[]> {
    return this.httpClient.get<{ data: OrderTechnicalEquipment[] }>(this.API_URL + this.url + id + '/order_technical_equipment_to_accept/').pipe(
      map(response => response.data)
    );
  }

  openAcceptToWarehouseModal(items: OrderProduct[], id: number, type = 'order'): Observable<any> {
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

  openAcceptToWarehouseModalTechnicalEquipment(items: OrderTechnicalEquipment[], id: number): Observable<any> {
    return this.dialog
      .open<QcAcceptTechnicalEquipmentComponent>(QcAcceptTechnicalEquipmentComponent, {
        width: '40rem',
        height: 'auto',
        data: {items, id},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

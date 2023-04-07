import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {OrderProduct, OrderProducts} from '../models/order-product';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {
  EditOrderProductQuantityComponent
} from '../modals/edit-order-product-quantity/edit-order-product-quantity.component';
import {
  EditOrderProductDeliveryDateComponent
} from '../modals/edit-order-product-delivery-date/edit-order-product-delivery-date.component';
import {
  AddOrderProductToOrderComponent
} from '../modals/add-order-product-to-order/add-order-product-to-order.component';
import {
  CreateOutsourcingRequestComponent
} from '../../outsourcing/modals/create-outsourcing-request/create-outsourcing-request.component';
import {
  AddMaterialToOrderComponent
} from '../../outsourcing/modals/add-material-to-order/add-material-to-order.component';
import {OrderTechnicalEquipment} from '../../warehouse/models/order-technical-equipment';
import {ListProduct} from '../../warehouse/models/list-product';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'order_products/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<OrderProduct[]> {
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

    return this.httpClient.get<{ data: OrderProduct[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getQc(id: number): Observable<OrderProduct[]> {
    return this.httpClient.get<{ data: OrderProduct[] }>(this.API_URL + 'orders/' + id + '/products_to_qc/').pipe(
      map(response => response.data)
    );
  }


  getFiltered(query?: QuerySearch[]): Observable<OrderProduct[]> {
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

    return this.httpClient.get<{ data: OrderProduct[] }>(this.API_URL + this.url + 'get_minimal_order_products/' + queryParams).pipe(map(response => {
      return response.data;
    }));
  }

  getGroupedPurchasedForPagination(query?: { name: string, value: any }[]): Observable<OrderProducts> {
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
    return this.httpClient.get<{ data: OrderProducts }>(this.API_URL + this.url + 'purchased_grouped_by_nomenclature_request_id/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getGroupedPurchased(query?: { name: string, value: any }[]): Observable<OrderProduct[]> {
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
    return this.httpClient.get<{ data: OrderProduct[] }>(this.API_URL + this.url + 'purchased_grouped_by_nomenclature_request_id/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getGroupedOutsourceForPagination(query?: { name: string, value: any }[]): Observable<OrderProducts> {
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
    return this.httpClient.get<{ data: OrderProducts }>(this.API_URL + this.url + 'other_grouped_by_nomenclature_request_id/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  reworkOrderProduct(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + `${id}/to_initial_state/`, null);
  }

  getGroupedOutsource(query?: { name: string, value: any }[]): Observable<OrderProduct[]> {
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
    return this.httpClient.get<{ data: OrderProduct[] }>(this.API_URL + this.url + 'other_grouped_by_nomenclature_request_id/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  acceptSeveral(send: any[]): Observable<any> {
    return this.httpClient.post(environment.base_url + environment.warehouse_url + 'order_product_to_warehouse/', send).pipe(
      map(response => response)
    );
  }

  create(send: Partial<OrderProduct>): Observable<OrderProduct> {
    return this.httpClient.post<{ data: OrderProduct }>(this.API_URL + this.url, send).pipe(
      map(response => response.data)
    );
  }

  severalUpdatePartly(send: Partial<OrderProduct[]>): Observable<OrderProduct[]> {
    return forkJoin(...send.map(product => this.httpClient.patch<{ data: OrderProduct }>(this.API_URL + this.url + product.id + '/', product).pipe(
      map(response => response.data)))
    );
  }

  deleteSeveral(orderProducts: OrderProduct[]): Observable<OrderProduct[]> {
    return forkJoin(...orderProducts.map(orderProduct => this.httpClient.delete<OrderProduct>(this.API_URL + this.url + orderProduct.not_ordered_product_id + '/')));
  }

  closeOrders(orderProducts: OrderProduct[]): Observable<OrderProduct[]> {
    return forkJoin(...orderProducts.map(orderProduct => this.httpClient.post<OrderProduct>(this.API_URL + this.url + orderProduct.not_ordered_product_id + '/clean_unnecessary/', orderProduct.not_ordered_product_id)));
  }

  addToOrder(send: { id: number; order: number }[]): Observable<OrderProduct[]> {
    return forkJoin(...send.map(send => this.httpClient.patch<OrderProduct>(this.API_URL + this.url + send.id + '/', send)));
  }

  updatePartly(orderProduct: OrderProduct): Observable<OrderProduct> {
    return this.httpClient.patch<{ data: OrderProduct }>(this.API_URL + this.url + orderProduct.id + '/', orderProduct).pipe(
      map(response => response.data)
    );
  }

  reworkOrder(ids: number[]): Observable<any> {
    return forkJoin(...ids.map(id => this.httpClient.post(this.API_URL + this.url + `${id}/to_initial_state/`, null)));
  }

  removeFromOrder(orderProduct: OrderProduct): Observable<any> {
    return this.httpClient.post<{ data: OrderProduct }>(this.API_URL + this.url + orderProduct.id + '/remove_from_order/', orderProduct);
  }

  getTechnicalEquipmentToQC(id): Observable<OrderTechnicalEquipment[]> {
    return this.httpClient.get<{ data: OrderTechnicalEquipment[] }>(this.API_URL + 'orders/' + id + '/technical_equipment_to_qc/').pipe(
      map(response => response.data)
    );
  }

  openAddOutsourcingRequestModal(orderId: number): Observable<OrderProduct> {
    return this.dialog
      .open<CreateOutsourcingRequestComponent>(CreateOutsourcingRequestComponent, {
        width: '70rem',
        height: 'auto',
        data: {orderId},
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  editOrderProductQuantity(orderProduct: OrderProduct): Observable<OrderProduct> {
    return this.dialog
      .open<EditOrderProductQuantityComponent>(EditOrderProductQuantityComponent, {
        width: '40rem',
        height: 'auto',
        data: orderProduct,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  editOrderProductDeliveryDate(orderProduct: OrderProduct): Observable<OrderProduct> {
    return this.dialog
      .open<EditOrderProductDeliveryDateComponent>(EditOrderProductDeliveryDateComponent, {
        width: '40rem',
        height: 'auto',
        data: orderProduct,
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openAddProductToOrderModal(isPurchased: boolean, orderId: number): Observable<OrderProduct> {
    return this.dialog
      .open<AddOrderProductToOrderComponent>(AddOrderProductToOrderComponent, {
        width: '80%',
        maxHeight: '80%',
        data: {isPurchased, orderId},
        panelClass: 'modal-picker',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openAddPMaterialToOrder(productId: number): Observable<OrderProduct> {
    return this.dialog
      .open<AddMaterialToOrderComponent>(AddMaterialToOrderComponent, {
        width: '80%',
        maxHeight: '80%',
        data: {productId},
        panelClass: 'modal-picker',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

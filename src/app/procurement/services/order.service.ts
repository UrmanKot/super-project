import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {Order, Orders} from '../models/order';
import {forkJoin, Observable, Subject} from 'rxjs';
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
import {EditOrderComponent} from '@shared/modals/edit-order/edit-order.component';
import {OrderType} from '@shared/components/order-page/order-page.component';
import {CreateChainComponent} from '@shared/modals/create-chain/create-chain.component';
import {AddProductsToChainComponent} from '@shared/modals/add-products-to-chain/add-products-to-chain.component';
import {
  CreateOutsourcingRequestComponent
} from '../../outsourcing/modals/create-outsourcing-request/create-outsourcing-request.component';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  filesModal$: Subject<void> = new Subject<void>();
  editOrderModal$: Subject<void> = new Subject<void>();

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

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  updatePartly(order: any) {
    return this.httpClient.patch<{ data: Order }>(this.API_URL + this.url + order.id + '/', order).pipe(
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

  getFiles(orderId: number): Observable<any> {
    return this.httpClient.get<{ data: any }>(this.API_URL + 'order_files/' + orderId + '/').pipe(
      map(response => response.data)
    );
  }

  getTechnicalEquipmentToAccept(id: number): Observable<OrderTechnicalEquipment[]> {
    return this.httpClient.get<{ data: OrderTechnicalEquipment[] }>(this.API_URL + this.url + id + '/order_technical_equipment_to_accept/').pipe(
      map(response => response.data)
    );
  }

  createProformaInvoice(id: number): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url + id + '/proforma_invoice_with_products_create/', null).pipe(
      map(response => response.data)
    );
  }

  createInvoice(id: number): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url + id + '/invoice_with_products_create/', null).pipe(
      map(response => response.data)
    );
  }

  downloadFile(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + 'order_file_download/' + id + '/', {responseType: 'blob'});
  }

  deleteFile(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + 'order_file_delete/' + id + '/', null);
  }

  create(data: any): Observable<Order> {
    return this.httpClient.post<{ data: Order }>(this.API_URL + this.url, data).pipe(
      map(response => response.data)
    );
  }

  createChain(order: any): Observable<Order> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url + 'order_bulk_products_create/', order).pipe(
      map(response => response.data)
    );
  }

  severalUploadFiles(id: number, files: File[]): Observable<any[]> {
    const arrayFormData: FormData[] = [];

    files.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      arrayFormData.push(formData);
    });
    return forkJoin(...arrayFormData.map(formData => this.httpClient.post<{ data: any }>(this.API_URL + `order_files/${id}/`, formData).pipe(
      map(response => response.data)
    )));
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

  openEditOrderModal(order: Order, orderType: OrderType): Observable<Order> {
    return this.dialog
      .open<EditOrderComponent>(EditOrderComponent, {
        width: '54rem',
        height: 'auto',
        data: {order, orderType},
        autoFocus: false,
        panelClass: 'modal-picker',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openCreateChainModal(products: OrderProduct[], orderType: OrderType): Observable<Order> {
    return this.dialog
      .open<CreateChainComponent>(CreateChainComponent, {
        width: '64rem',
        height: 'auto',
        data: {products, orderType},
        autoFocus: false,
        panelClass: 'modal-picker',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openAddProductsToChainModal(products: OrderProduct[], orderType: OrderType): Observable<Order> {
    return this.dialog
      .open<AddProductsToChainComponent>(AddProductsToChainComponent, {
        width: '50rem',
        height: 'auto',
        data: {products, orderType},
        autoFocus: false,
        panelClass: 'modal-picker',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

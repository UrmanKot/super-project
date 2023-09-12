import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, map, Observable} from 'rxjs';
import {Product, ProductFile} from '../../product-structure/models/product';
import {InvoiceProduct} from '../../procurement/models/invoice-product';
import {environment} from '@env/environment';
import {MatDialog} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {AddIsolatorProductComponent} from '../modals/add-isolator-product/add-isolator-product.component';
import {IsolatorAcceptToWarehouseComponent} from '../modals/isolator-accept-to-warehouse/isolator-accept-to-warehouse.component';

@Injectable({
    providedIn: 'root'
  })
export class IsolatorService {

    API_URL = environment.base_url + environment.warehouse_url;
    formData = new FormData();

    constructor(
        private readonly httpClient: HttpClient,
        private readonly dialog: MatDialog,
    ) {
    }

    addIsolatorProduct(): Observable<any> {
        return this.dialog
        .open<AddIsolatorProductComponent>(AddIsolatorProductComponent, {
            width: 'auto',
            height: 'auto',
            panelClass: 'modal-overflow-visible',
            data: null,
            autoFocus: false,
            enterAnimationDuration: '250ms'
        })
        .afterClosed();
    }

    openAcceptToWarehouseModal(items: any): Observable<any> {
      return this.dialog
        .open<IsolatorAcceptToWarehouseComponent>(IsolatorAcceptToWarehouseComponent, {
          width: '40rem',
          height: 'auto',
          data: {items},
          panelClass: 'modal-overflow-visible',
          autoFocus: false,
          enterAnimationDuration: '250ms'
        })
        .afterClosed();
    }

    getIsolatorProducts(): Observable<InvoiceProduct[]> {
        return this.httpClient.get<{ data: InvoiceProduct[] }>(this.API_URL + 'isolator_products/').pipe(
            map(response=>response.data)
        );
    }

    addProduct(send: any): Observable<Product[]> {
        return this.httpClient.post<{ data: Product[] }>(this.API_URL + 'isolator_products/', send).pipe(
          map(response => response.data)
        );
      }
    
    defectiveProductToWarehouse(send: any): Observable<Product[]> {
      return this.httpClient.post<{ data: any }>(this.API_URL + 'defective_product_to_warehouse/', send).pipe(
        map(response => response.data)
      );
    }
}
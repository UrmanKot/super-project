import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {WarehouseProduct, WarehouseProducts} from '../models/warehouse-product';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {ModalActionType} from '@shared/models/modal-action';
import {Technology} from '../../product-structure/models/technology';
import {
  CreateEditTechnologyComponent
} from '../../product-structure/modals/create-edit-technology/create-edit-technology.component';
import {
  CreateEditWarehouseProductComponent
} from '../modals/create-edit-warehouse-item/create-edit-warehouse-product.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class WarehouseProductService {
  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'products/';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<WarehouseProduct[]> {
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
    return this.httpClient.get<{ data: WarehouseProduct[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getReservations(): Observable<WarehouseProduct[]> {
    return this.httpClient.get<{ data: WarehouseProduct[] }>(this.API_URL + 'warehouse_products_reservations/').pipe(
      map(response => response.data)
    );
  }

  getGrouped(query?: { name: string, value: any }[]): Observable<WarehouseProduct[]> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{ data: WarehouseProduct[] }>(this.API_URL + this.url + 'grouped_by_warehouse_locator/' + qString).pipe(map(response => {
      return response.data;
    }));
  }

  getGroupedPagination(query?: { name: string, value: any }[]): Observable<WarehouseProducts> {
    query.push({name: 'paginated', value: true});
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{ data: WarehouseProducts }>(this.API_URL + this.url + 'grouped_by_warehouse_locator/' + qString).pipe(map(response => {
      return response.data;
    }));
  }

  severalUpdateReservations(ids: number[], send: {is_confirmed: boolean}): Observable<any> {
    return forkJoin(...ids.map(id => this.httpClient.patch(this.API_URL + `warehouse_products_reservations/${id}/`, send)));
  }

  severalWriteOff(ids: number[]): Observable<WarehouseProduct[]> {
    return forkJoin(...ids.map(id => this.httpClient.post<{ data: WarehouseProduct }>(this.API_URL + this.url + id + '/write_off/', null).pipe(
      map(response => response.data)
    )));
  }

  openCreateEditWarehouseProductModal(type: ModalActionType, nomenclatureId?: number): Observable<Technology> {
    return this.dialog
      .open<CreateEditWarehouseProductComponent>(CreateEditWarehouseProductComponent, {
        width: 'auto',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, nomenclatureId},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

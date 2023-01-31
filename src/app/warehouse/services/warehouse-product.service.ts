import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {WarehouseProduct, WarehouseProductExtraInfo, WarehouseProducts} from '../models/warehouse-product';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {ModalActionType} from '@shared/models/modal-action';
import {Technology} from '../../product-structure/models/technology';
import {
  CreateEditWarehouseProductComponent
} from '../modals/create-edit-warehouse-item/create-edit-warehouse-product.component';
import {MatDialog} from '@angular/material/dialog';
import {MoveWarehouseProductComponent} from '../modals/move-warehouse-product/move-warehouse-product.component';
import {Nomenclature} from '@shared/models/nomenclature';
import {NomenclatureSerialInfoComponent} from '../modals/nomenclature-serial-info/nomenclature-serial-info.component';

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

  severalUpdateReservations(ids: number[], send: { is_confirmed: boolean }): Observable<any> {
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
        data: {type, nomenclatureId},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openMoveWarehouseProductModal(product: WarehouseProduct) {
    return this.dialog
      .open<MoveWarehouseProductComponent>(MoveWarehouseProductComponent, {
        width: '40rem',
        height: 'auto',
        data: product,
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  moveBulk(product: Partial<WarehouseProduct>): Observable<any> {
    return this.httpClient.post(this.API_URL + 'bulk_move_bulk_products/', product);
  }

  moveSerial(product: Partial<WarehouseProduct>): Observable<any> {
    return this.httpClient.post(this.API_URL + 'bulk_move_serial_products/', product);
  }

  return_to_qc(entity) {
    return this.httpClient.post(this.API_URL + this.url + 'return_to_qc/', entity).pipe(map(response => {
      return response;
    }));
  }

  write_off_confirmation(entity) {
    return this.httpClient.post(this.API_URL + this.url + 'send_to_write_off_confirmation/', entity).pipe(map(response => {
      return response;
    }));
  }

  openNomenclatureInfoModal(extraInfo: WarehouseProductExtraInfo[], nomenclature: Nomenclature) {
    return this.dialog
      .open<NomenclatureSerialInfoComponent>(NomenclatureSerialInfoComponent, {
        width: '650px',
        height: 'auto',
        data: {extraInfo, nomenclature},
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }
}

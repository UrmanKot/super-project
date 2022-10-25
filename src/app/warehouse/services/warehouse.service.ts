import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {Warehouse} from '../models/warehouse';
import {HttpClient} from '@angular/common/http';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {CreateEditWarehouseComponent} from '../modals/create-edit-warehouse/create-edit-warehouse.component';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'warehouses/';

  warehouses: Warehouse[];

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(): Observable<Warehouse[]> {
    if (this.warehouses) {
      return of(this.warehouses);
    }

    return this.httpClient.get<{ data: Warehouse[] }>(this.API_URL + this.url).pipe(
      map(response => {
        const warehouses = response.data;
        this.warehouses = warehouses;
        return warehouses;
      }));
  }

  getById(id: number): Observable<Warehouse> {
    if (this.warehouses) {
      return of(this.warehouses.find(w => w.id === id));
    }

    return this.httpClient.get<{ data: Warehouse }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  create(warehouse: Partial<Warehouse>): Observable<Warehouse> {
    return this.httpClient.post<{ data: Warehouse }>(this.API_URL + this.url, warehouse).pipe(
      map(response => response.data)
    );
  }

  update(warehouse: Partial<Warehouse>): Observable<Warehouse> {
    return this.httpClient.put<{ data: Warehouse }>(this.API_URL + this.url + `${warehouse.id}/`, warehouse).pipe(
      map(response => response.data)
    );
  }

  delete(warehouse: Warehouse): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${warehouse.id}/`);
  };

  createEditWarehouseModal(type: ModalActionType, warehouse?: Warehouse): Observable<Warehouse> {
    return this.dialog
      .open<CreateEditWarehouseComponent>(CreateEditWarehouseComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, warehouse},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

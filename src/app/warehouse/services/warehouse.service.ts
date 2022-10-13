import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Technology} from '../../product-structure/models/technology';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {Warehouse} from '../models/warehouse';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'warehouses/';

  warehouses: Warehouse[];

  constructor(
    private httpClient: HttpClient
  ) { }

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
}

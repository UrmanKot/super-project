import {Injectable} from '@angular/core';
import {QuerySearch} from '@shared/models/other';
import {InventoryLists, PhysicalInventories, PhysicalInventory} from '../models/physical-inventory';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class PhysicalInventoryService {

  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'physical_inventory/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getForPagination(query?: QuerySearch[]): Observable<PhysicalInventories> {
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

    return this.httpClient.get<{ data: PhysicalInventories }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<PhysicalInventory> {
    return this.httpClient.get<{ data: PhysicalInventory }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  getInventoryProductsListsForPagination(id: number, query?: QuerySearch[]): Observable<InventoryLists> {
    let queryParams = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '&' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: InventoryLists}>(this.API_URL + 'physical_inventory_products_lists/?physical_inventory_id=' + id + queryParams).pipe(
      map(response => response.data)
    );
  }
}

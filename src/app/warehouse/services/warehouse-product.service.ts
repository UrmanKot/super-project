import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {WarehouseProduct} from '../models/warehouse-product';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';

@Injectable({
  providedIn: 'root'
})
export class WarehouseProductService {
  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'products/';

  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  get(query?: QuerySearch[]): Observable<WarehouseProduct[]> {
    let queryString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryString += '&' + element.name + '=' + element.value;
        } else {
          queryString += '?' + element.name + '=' + element.value;
        }
      });
    }
    return this.httpClient.get<{ data: WarehouseProduct[] }>(this.API_URL + this.url + queryString).pipe(
      map(response => response.data)
    );
  }

  severalWriteOff(ids: number[]): Observable<WarehouseProduct[]> {
    return forkJoin(...ids.map(id => this.httpClient.post<{ data: WarehouseProduct }>(this.API_URL + this.url + id + '/write_off/', null).pipe(
      map(response => response.data)
    )));
  }
}

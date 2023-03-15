import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {ListProduct} from '../models/list-product';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';

@Injectable({
  providedIn: 'root'
})
export class ListProductService {

  API_URL = environment.base_url + environment.production_url;
  readonly url = 'list_products/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPartly(ids: number[]): Observable<ListProduct[][]> {
    return forkJoin(...ids.map(id => this.httpClient.get<{ data: ListProduct[] }>(this.API_URL + this.url + `?list=${id}`).pipe(
      map(response => response.data)
    )));
  }

  get(query?: QuerySearch[]): Observable<ListProduct[]> {
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

    return this.httpClient.get<{ data: ListProduct[] }>(this.API_URL + this.url + queryParams).pipe(map(response => {
      return response.data;
    }));
  }

  updatePartly(listProduct: ListProduct): Observable<ListProduct> {
    return this.httpClient.patch<{ data: ListProduct }>(this.API_URL + this.url + listProduct.id + '/', listProduct).pipe(
      map(response => response.data)
    );
  }

  severalUpdatePartly(sends: Partial<ListProduct>[]): Observable<ListProduct[]> {
    return forkJoin(...sends.map(send => this.httpClient.patch<{ data: ListProduct }>(this.API_URL + this.url + send.id + '/', send).pipe(
      map(response => response.data)
    )))
  }
}

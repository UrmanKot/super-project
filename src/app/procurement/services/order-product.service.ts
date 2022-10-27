import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {OrderProduct} from '../models/order-product';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'order_products/';

  constructor(
    private httpClient: HttpClient
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

  acceptSeveral(send: any[]): Observable<any> {
    return forkJoin(...send.map(product => this.httpClient.post(environment.base_url + environment.warehouse_url + 'order_product_to_warehouse/', [product.data]).pipe(
      map(response => response)
    )));
  }
}

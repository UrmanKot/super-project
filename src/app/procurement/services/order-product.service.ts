import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {OrderProduct} from '../models/order-product';
import {Observable} from 'rxjs';
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

    return this.httpClient.get<{ data: OrderProduct[] }>(this.API_URL + this.url + 'all/' + queryString).pipe(
      map(response => response.data)
    );
  }
}

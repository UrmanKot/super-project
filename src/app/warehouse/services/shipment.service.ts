import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {SerialType} from '../models/serial-type';
import {map} from 'rxjs/operators';
import {Shipment} from '../models/shipment';
import {ShipmentProduct} from '../models/shipment-product';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  API_URL = environment.base_url + environment.delivery_url;
  readonly url = 'procurement-chains/';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  get(query?: QuerySearch[]): Observable<Shipment[]> {
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

    return this.httpClient.get<{ data: Shipment[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getProducts(id: number): Observable<ShipmentProduct[]> {
    return this.httpClient.get<{ data: ShipmentProduct[] }>(this.API_URL + this.url + `${id}/items/`).pipe(
      map(response => response.data)
    );
  }
}

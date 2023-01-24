import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeliveryChain} from '../models/delivery-chain';
import {environment} from '@env/environment';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';

@Injectable({
  providedIn: 'root'
})
export class DeliveryChainService {

  API_URL = environment.base_url + environment.delivery_url;
  readonly url = 'procurement-chains/';
  readonly filesUrl = 'files/';

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  get(query?: QuerySearch[]): Observable<DeliveryChain[]> {
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

    return this.httpClient.get<{ data: DeliveryChain[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id): Observable<DeliveryChain> {
    return this.httpClient.get<{ data: DeliveryChain }>(this.API_URL + this.url + `${id}/`).pipe(
      map(response => response.data)
    );
  }

  getDeliveryItems(id: number): Observable<any[]> {
    return this.httpClient.get<{ data: any[] }>(this.API_URL + this.url + id + '/items/').pipe(
      map(response => response.data)
    );
  }

  complete(id: number): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url + id + '/complete/', null).pipe(
      map(response => response.data)
    );
  }
}

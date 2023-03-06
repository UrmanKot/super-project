import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {ToolOrder, ToolOrderPaginated} from '../models/tool-order';
import {map} from 'rxjs/operators';
import {SerialType} from '../../product-structure/models/serial-type';

@Injectable({
  providedIn: 'root'
})
export class ToolOrderService {
  API_URL = environment.base_url + environment.production_url;
  readonly url = 'tool_orders/';

  constructor(
    private httpClient: HttpClient
  ) {
  }


  get(query?: QuerySearch[]): Observable<ToolOrder[]> {
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

    return this.httpClient.get<{ data: ToolOrder[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  create(entity): Observable<ToolOrder> {
    return this.httpClient.post<{ data: ToolOrder }>(this.API_URL + this.url, entity).pipe(map(response => {
      return response.data;
    }));
  }

  update(entity: ToolOrder): Observable<ToolOrder> {
    return this.httpClient.put<{ data: ToolOrder }>(this.API_URL + this.url + entity.id + '/', entity).pipe(
      map(response => response.data)
    );
  }

  get_paginated(query?: QuerySearch[]): Observable<ToolOrderPaginated> {
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

    return this.httpClient.get<{ data: ToolOrderPaginated }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<ToolOrder> {
    return this.httpClient.get<{ data: ToolOrder }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  complete(id: number): Observable<ToolOrder> {
    return this.httpClient.post<{ data: ToolOrder }>(this.API_URL + this.url + id + '/complete/', null).pipe(map(response => {
      return response.data;
    }));
  }

  delete(entity: ToolOrder) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

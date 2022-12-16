import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Currency} from '@shared/models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'currencies/';
  constructor(private httpClient: HttpClient) {

  }

  get(query?: { name: string, value: any }[]): Observable<Currency[]> {
    let q_string = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          q_string += '&' + element.name + '=' + element.value
        } else {
          q_string += '?' + element.name + '=' + element.value
        }
      });
    }
    return this.httpClient.get<{data:Currency[]}>(this.API_URL + this.url + q_string).pipe(map(response => {
      return response.data;
    }))
  }

  create(entity) {
    return this.httpClient.post<{data:Currency}>(this.API_URL + this.url, entity).pipe(map(response => {
      return response.data;
    }));
  }

  update(entity: Currency, last: string) {
    return this.httpClient.put(this.API_URL + this.url + last + '/', entity);
  }

  updatePartly(entity: Currency, last: string) {
    return this.httpClient.patch(this.API_URL + this.url + last + '/', entity);
  }

  delete(entity: Currency) {
    return this.httpClient.delete(this.API_URL + this.url + entity.code + '/');
  }
}

import { Injectable } from '@angular/core';
import {AreaLocator} from '../../warehouse/models/area-locator';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaLocatorsService {
  API_URL = environment.base_url + environment.production_url;
  readonly url = 'area_locators/';
  constructor(private httpClient: HttpClient) {

  }
  get(query?: { name: string, value: any }[]): Observable<AreaLocator[]> {
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
    return this.httpClient.get<{ data: AreaLocator[] }>(this.API_URL + this.url + q_string).pipe(map(response => {
      return response.data;
    }))
  }

  create(entity) {
    return this.httpClient.post<{ data: AreaLocator }>(this.API_URL + this.url, entity).pipe(map(response => {
      return response.data;
    }));
  }

  update(entity: AreaLocator) {
    return this.httpClient.put(this.API_URL + this.url + entity.id + '/', entity);
  }

  delete(entity: AreaLocator) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

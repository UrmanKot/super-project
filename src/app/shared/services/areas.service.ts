import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {Area, AreaLocator, AreaPaginated} from '../../warehouse/models/area-locator';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {QuerySearch} from '@shared/models/other';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  count: number = -1;
  API_URL = environment.base_url + environment.production_url;
  readonly url = 'areas/';

  constructor(private httpClient: HttpClient) {

  }

  get(): Observable<Area[]> {
    return this.httpClient.get<{ data: Area[] }>(this.API_URL + this.url).pipe(map(response => {
      return response.data;
    }));
  }

  get_paginated(query?: QuerySearch[]): Observable<AreaPaginated> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }
    return this.httpClient
      .get<{ data: AreaPaginated }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getLocators(): Observable<AreaLocator[]> {
    return this.httpClient.get<{ data: AreaLocator[] }>(this.API_URL + 'area_locators/').pipe(map(response => {
      return response.data;
    }));
  }

  getById(id): Observable<Area> {
    return this.httpClient.get<{ data: Area }>(this.API_URL + this.url + id + '/').pipe(map(response => {
      return response.data;
    }));
  }

  create(entity) {
    return this.httpClient.post<{ data: Area }>(this.API_URL + this.url, entity).pipe(map(response => {
      return response.data;
    }));
  }

  update(entity: Area) {
    return this.httpClient.put(this.API_URL + this.url + entity.id + '/', entity);
  }

  delete(entity: Area) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

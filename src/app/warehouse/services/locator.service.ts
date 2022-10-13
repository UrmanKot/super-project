import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Locator} from '../models/locator';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocatorService {

  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'locators/';

  constructor(private httpClient: HttpClient) {

  }

  get(query?: QuerySearch[]): Observable<Locator[]> {
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

    return this.httpClient.get<{ data: Locator[] }>(this.API_URL + this.url + queryString).pipe(
      map(response => response.data)
    );
  }
}

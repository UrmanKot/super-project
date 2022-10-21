import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {ToolOrder} from '../models/tool-order';
import {map} from 'rxjs/operators';

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

  getById(id: number): Observable<ToolOrder> {
    return this.httpClient.get<{ data: ToolOrder }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }
}

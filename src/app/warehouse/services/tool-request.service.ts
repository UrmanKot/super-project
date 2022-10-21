import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {ToolRequest} from './tool-request';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolRequestService {

  API_URL = environment.base_url + environment.production_url;
  readonly url = 'tool_requests/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(query?: QuerySearch[]): Observable<ToolRequest[]> {
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

    return this.httpClient.get<{ data: ToolRequest[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

}

import {Injectable} from '@angular/core';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {Region} from '@shared/models/region';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'regions/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(query?: QuerySearch[]): Observable<Region[]> {
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

    return this.httpClient.get<{ data: Region[] }>(this.API_URL + this.url + queryParams).pipe(
        map(response => response.data)
      );
  }
}

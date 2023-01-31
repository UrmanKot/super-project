import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Country} from '@shared/models/country';
import {SubRegion} from '@shared/models/sub-region';

@Injectable({
  providedIn: 'root'
})
export class SubRegionService {
  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'sub_regions/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(query?: QuerySearch[]): Observable<SubRegion[]> {
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

    return this.httpClient.get<{ data: SubRegion[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  create(entity: Partial<SubRegion>) {
    return this.httpClient.post<{ data: Country }>(this.API_URL + this.url, entity).pipe(map(response => {
      return response.data;
    }));
  }

  update(entity: Partial<SubRegion>) {
    return this.httpClient.put(this.API_URL + this.url + entity.id + '/', entity);
  }

  delete(entity: Partial<SubRegion>) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

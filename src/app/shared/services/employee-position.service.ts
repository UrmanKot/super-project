import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {EmployeePosition} from '@shared/models/employee-position';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeePositionService {
  API_URL = environment.base_url + environment.staff_url;
  readonly url = 'positions/';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  get(query?: { name: string, value: any }[]): Observable<EmployeePosition[]> {
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
    return this.httpClient.get<{ data: EmployeePosition[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }
}

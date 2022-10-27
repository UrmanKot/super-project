import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Employee} from '@shared/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URL = environment.base_url + environment.staff_url;
  readonly url = 'employees/';

  employees: Employee[];

  constructor(
    private httpClient: HttpClient
  ) {

  }

  get(query?: QuerySearch[]): Observable<Employee[]> {
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

    return this.httpClient.get<{ data: Employee[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getAll(): Observable<Employee[]> {
    if (this.employees) {
      return of(this.employees);
    }

    return this.httpClient.get<{ data: Employee[] }>(this.API_URL + this.url).pipe(
      map(response => {
        const employees = response.data;
        employees.forEach(e => e.fullName = `${e.first_name} ${e.last_name}`);
        this.employees = employees;
        return employees;
      })
    );
  }
}

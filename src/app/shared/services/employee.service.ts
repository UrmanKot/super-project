import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Employee} from '@shared/models/employee';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditEmployeeComponent
} from '../../manufacturing/modals/create-edit-employee/create-edit-employee.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URL = environment.base_url + environment.staff_url;
  readonly url = 'employees/';

  employees: Employee[];

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
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

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  create(employee: Partial<Employee>): Observable<Employee> {
    return this.httpClient.post<{ data: Employee }>(this.API_URL + this.url, employee).pipe(
      map(response => response.data)
    );
  }

  update(employee: Partial<Employee>): Observable<Employee> {
    return this.httpClient.put<{ data: Employee }>(this.API_URL + this.url + employee.id + '/', employee).pipe(
      map(response => response.data)
    );
  }

  createEditEmployeeModal(type: ModalActionType, employee?: Employee): Observable<Employee> {
    return this.dialog
      .open<CreateEditEmployeeComponent>(CreateEditEmployeeComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, employee},
        autoFocus: false,
        enterAnimationDuration: '250ms',
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed();
  }
}

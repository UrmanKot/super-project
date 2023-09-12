import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {QuerySearch} from '@shared/models/other';
import {CRMEmployee} from '../models/crm-employee';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {EventType} from '../models/event-type';
import {CreateEditEventTypeComponent} from '../modals/create-edit-event-type/create-edit-event-type.component';
import {CreateEditCrmEmployeeComponent} from '../modals/create-edit-crm-employee/create-edit-crm-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CrmEmployeeService {

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'employees/';

  employees: CRMEmployee[];

  constructor(
    private httpClient: HttpClient,
    private dialog: MatDialog
  ) {
  }

  get(query?: QuerySearch[]): Observable<CRMEmployee[]> {
    // if (this.employees) {
    //   return of(this.employees);
    // }

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

    return this.httpClient.get<{ data: CRMEmployee[] }>(this.API_URL + this.url  + queryParams).pipe(
      map(response => {
        const employees = response.data.map(e => {
          return {
            ...e,
            fullName: `${e.first_name} ${e.last_name}`
          };
        });
        this.employees = employees;
        return employees;
      }));
  }

  getById(id): Observable<CRMEmployee> {
    return this.httpClient
      .get<{ data: CRMEmployee }>(this.API_URL + this.url + id + '/')
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  create(employee: Partial<CRMEmployee>): Observable<CRMEmployee> {
    return this.httpClient.post<{ data: CRMEmployee }>(this.API_URL + this.url, employee).pipe(
      map(response => response.data)
    );
  }

  update(employee: Partial<CRMEmployee>): Observable<CRMEmployee> {
    return this.httpClient.patch<{ data: CRMEmployee }>(this.API_URL + this.url + employee.id + '/', employee).pipe(
      map(response => response.data)
    );
  }

  delete(employee: CRMEmployee): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + employee.id + '/');
  }

  createEditEmployeeModal(type: ModalActionType, employee?: CRMEmployee): Observable<CRMEmployee> {
    return this.dialog
      .open<CreateEditCrmEmployeeComponent>(CreateEditCrmEmployeeComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, employee},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

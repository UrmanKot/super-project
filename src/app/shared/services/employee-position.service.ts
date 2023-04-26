import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {EmployeePosition} from '@shared/models/employee-position';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {Employee} from '@shared/models/employee';
import {
  CreateEditEmployeeComponent
} from '../../manufacturing/modals/create-edit-employee/create-edit-employee.component';
import {
  CreateEditPositionComponent
} from '../../manufacturing/modals/create-edit-position/create-edit-position.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeePositionService {
  API_URL = environment.base_url + environment.staff_url;
  readonly url = 'positions/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
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

  create(position: EmployeePosition): Observable<EmployeePosition> {
    return this.httpClient.post<{ data: EmployeePosition }>(this.API_URL + this.url, position).pipe(
      map(response => response.data)
    );
  }

  update(position: EmployeePosition): Observable<EmployeePosition> {
    return this.httpClient.put<{ data: EmployeePosition }>(this.API_URL + this.url + position.id + '/', position).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  createEditPositionModal(type: ModalActionType, position?: EmployeePosition): Observable<EmployeePosition> {
    return this.dialog
      .open<CreateEditPositionComponent>(CreateEditPositionComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, position},
        autoFocus: false,
        enterAnimationDuration: '250ms',
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed();
  }
}

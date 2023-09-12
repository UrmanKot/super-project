import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {CrmDepartment} from '../../business-trips/models/crm-department';
import {
  CreateUpdateCrmDepartmentComponent
} from '../modals/create-update-crm-department/create-update-crm-department.component';

@Injectable({
  providedIn: 'root'
})
export class CrmDepartmentService {
  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'departments/';

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

  get(query?: QuerySearch[]): Observable<CrmDepartment[]> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }
    return this.httpClient
      .get<{ data: CrmDepartment[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getById(id): Observable<CrmDepartment> {
    return this.httpClient.get<{ data: CrmDepartment }>(this.API_URL + this.url + id + '/').pipe(map(response => {
      return response.data;
    }));
  }

  create(entity: CrmDepartment) {
    return this.httpClient
      .post<{ data: CrmDepartment }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity: CrmDepartment) {
    return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: CrmDepartment) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }

  createEditCrmDepartmentModal(type: ModalActionType, department?: CrmDepartment) {
    return this.dialog
      .open<CreateUpdateCrmDepartmentComponent>(CreateUpdateCrmDepartmentComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, department},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Machine} from '../models/machine';
import {environment} from '@env/environment';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {EmployeePosition} from '@shared/models/employee-position';
import {CreateEditPositionComponent} from '../modals/create-edit-position/create-edit-position.component';
import {MatDialog} from '@angular/material/dialog';
import {CreateEditMachineComponent} from '../modals/create-edit-machine/create-edit-machine.component';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  API_URL = environment.base_url + environment.production_url;
  readonly url = 'machines/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: { name: string, value: any }[]): Observable<Machine[]> {
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

    return this.httpClient.get<{ data: Machine[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  create(machine: Machine): Observable<Machine> {
    return this.httpClient.post<{ data: Machine }>(this.API_URL + this.url, machine).pipe(
      map(response => response.data)
    );
  }

  update(machine: Machine): Observable<Machine> {
    return this.httpClient.put<{ data: Machine }>(this.API_URL + this.url + machine.id + '/', machine).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  createEditMachineModal(type: ModalActionType, machine?: Machine): Observable<Machine> {
    return this.dialog
      .open<CreateEditMachineComponent>(CreateEditMachineComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, machine},
        autoFocus: false,
        enterAnimationDuration: '250ms',
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed();
  }
}

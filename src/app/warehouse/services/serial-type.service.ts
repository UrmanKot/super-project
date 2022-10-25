import {Injectable} from '@angular/core';
import {QuerySearch} from '@shared/models/other';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SerialType} from '../models/serial-type';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {Warehouse} from '../models/warehouse';
import {CreateEditWarehouseComponent} from '../modals/create-edit-warehouse/create-edit-warehouse.component';
import {MatDialog} from '@angular/material/dialog';
import {CreateEditSerialTypeComponent} from '../modals/create-edit-serial-type/create-edit-serial-type.component';

@Injectable({
  providedIn: 'root'
})
export class SerialTypeService {

  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'serial_number_types/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<SerialType[]> {
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

    return this.httpClient.get<{ data: SerialType[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  create(serialType: Partial<SerialType>): Observable<SerialType> {
    return this.httpClient.post<{ data: SerialType }>(this.API_URL + this.url, serialType).pipe(
      map(response => response.data)
    );
  }

  updatePartly(serialType: Partial<SerialType>): Observable<SerialType> {
    return this.httpClient.patch<{ data: SerialType }>(this.API_URL + this.url + serialType.id + '/', serialType).pipe(
      map(response => response.data)
    );
  }

  update(serialType: Partial<SerialType>): Observable<SerialType> {
    return this.httpClient.put<{ data: SerialType }>(this.API_URL + this.url + serialType.id + '/', serialType).pipe(
      map(response => response.data)
    );
  }

  delete(serialType: SerialType): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + serialType.id + '/');
  }

  createEditSerialTypeModal(type: ModalActionType, serialType?: SerialType): Observable<SerialType> {
    return this.dialog
      .open<CreateEditSerialTypeComponent>(CreateEditSerialTypeComponent, {
        width: '65rem',
        height: 'auto',
        data: {type, serialType},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

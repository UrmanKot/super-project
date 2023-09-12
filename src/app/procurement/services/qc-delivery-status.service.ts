import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {Status} from '../models/status';
import {MatDialog} from '@angular/material/dialog';
import {CreateEditStatusComponent} from '@shared/modals/create-edit-status/create-edit-status.component';
import {ModalActionType} from '@shared/models/modal-action';

@Injectable({
  providedIn: 'root'
})
export class QcDeliveryStatusService {
  API_URL = environment.base_url + environment.production_url;
  readonly url = 'qc_delivery_statuses/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(): Observable<Status[]> {
    return this.httpClient.get<{ data: Status[] }>(this.API_URL + this.url).pipe(
      map(response => response.data)
    );
  }

  create(status: Partial<Status>): Observable<Status> {
    return this.httpClient.post<{ data: Status }>(this.API_URL + this.url, status).pipe(
      map(response => response.data)
    );
  }

  update(status: Partial<Status>): Observable<Status> {
    return this.httpClient.put<{ data: Status }>(this.API_URL + this.url + `${status.id}/`, status).pipe(
      map(response => response.data)
    );
  }

  updatePartly(status: Partial<Status>): Observable<Status> {
    return this.httpClient.patch<{ data: Status }>(this.API_URL + this.url + `${status.id}/`, status).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  createEditStatusModal(type: ModalActionType, statusType: number, isAutoStatus: boolean, status?: Status): Observable<Status> {
    return this.dialog
      .open<CreateEditStatusComponent>(CreateEditStatusComponent, {
        width: '45rem',
        height: 'auto',
        data: {type, statusType, isAutoStatus, status},
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

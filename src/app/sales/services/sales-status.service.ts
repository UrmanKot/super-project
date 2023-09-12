import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {Observable, of} from 'rxjs';
import {SalesChainStatus, SalesStatus} from '../models/sales-chain';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {CreateEditSalesStatusComponent} from '../modals/create-edit-sales-status/create-edit-sales-status.component';

@Injectable({
  providedIn: 'root'
})
export class SalesStatusService {

  statuses: SalesChainStatus[];

  API_URL = environment.base_url + environment.sales_url;
  readonly url = 'status/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<SalesChainStatus[]> {
    if (this.statuses) {
      return of(this.statuses);
    }

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

    return this.httpClient.get<{ data: SalesChainStatus[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => {
        const statuses = response.data;
        this.statuses = statuses;
        return statuses;
      }));
  }

  create(status: Partial<SalesChainStatus>): Observable<SalesChainStatus> {
    return this.httpClient.post<{ data: SalesChainStatus }>(this.API_URL + this.url, status).pipe(
      map(response => response.data)
    );
  }

  update(status: Partial<SalesChainStatus>): Observable<SalesChainStatus> {
    return this.httpClient.put<{ data: SalesChainStatus }>(this.API_URL + this.url + status.id + '/', status).pipe(
      map(response => response.data)
    );
  }

  delete(status: SalesChainStatus): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + status.id + '/');
  }

  changeOrder(status: SalesStatus, order: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + status.id + '/change_order/', {
      new_order: order,
    });
  }

  createEditSalesStatusModal(type: ModalActionType, status?: SalesChainStatus): Observable<SalesChainStatus> {
    return this.dialog
      .open<CreateEditSalesStatusComponent>(CreateEditSalesStatusComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, status},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {SalesChain, SalesChains} from '../models/sales-chain';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {CreateSalesChainComponent} from '../modals/create-sales-chain/create-sales-chain.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SalesChainService {

  API_URL = environment.base_url + environment.sales_url;

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<SalesChain[]> {
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

    return this.httpClient.get<{ data: SalesChain[] }>(this.API_URL + 'sales_chains/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getForPagination(query?: QuerySearch[]): Observable<SalesChains> {
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

    return this.httpClient.get<{ data: SalesChains }>(this.API_URL + 'sales_chains/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  create(salesChain: Partial<SalesChain>): Observable<SalesChain> {
    return this.httpClient
      .post<{ data: SalesChain }>(this.API_URL + 'sales_chains/', salesChain).pipe(
        map(response => response.data)
      );
  }

  delete(salesChain: SalesChain): Observable<any> {
    return this.httpClient.delete(this.API_URL + 'sales_chains/' + salesChain.id + '/');
  }

  createEditSalesChainModal(): Observable<SalesChain> {
    return this.dialog
      .open<CreateSalesChainComponent>(CreateSalesChainComponent, {
        width: '35rem',
        height: 'auto',
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {concat, forkJoin, Observable, toArray} from 'rxjs';
import {List, Lists} from '../models/list';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {MatDialog} from '@angular/material/dialog';
import {
  SetProductionListLocatorComponent
} from '../modals/set-production-list-locator/set-production-list-locator.component';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  API_URL = environment.base_url + environment.production_url;
  readonly url = 'lists/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<List[]> {
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

    return this.httpClient.get<{ data: List[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  setQuantities(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + id + '/set_actual_quantities/', null);
  }

  make_deficit(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + id + '/deficit_request/', null);
  }

  makeRequestsForAll(list: List): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + list.id + '/bulk_deficit_request/', list.id);
  }

  makeDeficitOne(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + `list_products/${id}/deficit_request/`, null);
  }

  makeProductionList(entity: Partial<List>): Observable<any> {
    return this.httpClient.post(this.API_URL + 'list_creation_requests/', entity).pipe(
        map(response => response
      ));
  }

  canceledActualQuantity(id: number): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + `list_products/${id}/set_actual_quantity_null/`, null).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<List> {
    return this.httpClient.get<{ data: List }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  getForPagination(query?: QuerySearch[]): Observable<Lists> {
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

    return this.httpClient.get<{ data: Lists }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getProductionLists(): Observable<List[]> {
    return this.httpClient.get<{ data: List[] }>(this.API_URL + 'list_creation_requests/').pipe(
      map(response => response.data)
    );
  }

  updatePartly(list: Partial<List>): Observable<List> {
    return this.httpClient.patch<{ data: List }>(this.API_URL + this.url + list.id + '/', list).pipe(
      map(response => response.data)
    );
  }

  process(list: Partial<List>, id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + id + '/process/', list);
  }

  updateListSeveral(lists: List[]): Observable<any> {
    return concat(...lists.map(list => this.httpClient.patch<{ data: List }>(this.API_URL + 'list_creation_requests/' + list.id + '/', list))).pipe(
      toArray()
    )
  }

  getNomenclatureInfo(id: number): Observable<any> {
    return this.httpClient.get<{ data: any }>(environment.base_url + `product_structure/nomenclatures/${id}/available_on_stock/`).pipe(
      map(response => response.data)
    );
  }

  openSetProductionListLocatorModal(id: number): Observable<any> {
    return this.dialog
      .open<SetProductionListLocatorComponent>(SetProductionListLocatorComponent, {
        width: '40rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: id,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

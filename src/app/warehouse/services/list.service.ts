import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {concat, Observable, toArray} from 'rxjs';
import {List, Lists} from '../models/list';
import {map} from 'rxjs/operators';
import {HttpClient, HttpContext} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {MatDialog} from '@angular/material/dialog';
import {
  SetProductionListLocatorComponent
} from '../modals/set-production-list-locator/set-production-list-locator.component';
import {ScanResult} from '../../qr-code/models/scan-result';
import {IS_SCANNING_ENABLED} from '@shared/interceptors/error-interceptor';
import {
  ProductionListAccountingType,
  ProductionListPositionType
} from '../components/production-lists/production-lists.component';
import {
  ProductionListChainsStatisticsComponent
} from '../modals/production-list-chains-statistics/production-list-chains-statistics.component';
import {ListProduct} from '../models/list-product';
import {
  ProductionListSetActualQuantityDialogComponent
} from '../modals/production-list-set-actual-quantity-dialog/production-list-set-actual-quantity-dialog.component';
import {ScanNextComponent} from '../modals/scan-next/scan-next.component';
import {Nomenclature} from '@shared/models/nomenclature';

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

  getListProducts(id: number): Observable<ListProduct[]> {
    return this.httpClient.get<{ data: ListProduct[] }>(this.API_URL + this.url + `${id}/with_descendant_list_products/`).pipe(
      map(response => response.data)
    );
  }

  getFullList(id: number): Observable<ListProduct[]> {
    return this.httpClient.get<{ data: ListProduct[] }>(this.API_URL + this.url + `${id}/with_descendant_list_products/`).pipe(
      map(response => response.data)
    );
  }

  setQuantities(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + id + '/set_actual_quantities/', null);
  }

  makeDeficit(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + id + '/deficit_request/', null);
  }

  makeRequestsForAll(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + id + '/bulk_deficit_request/', id);
  }

  makeDeficitOne(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + `list_products/${id}/deficit_request/`, null);
  }

  getProductListsParentIds(id: number, productList = null): Observable<any> {
    return this.httpClient.get<{data: number[], productList}>(this.API_URL + `list_products/${id}/get_lists_ids_by_same_list_product/`)
      .pipe(map(res => {
        return {data: res.data, productList: productList};
      }));
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
    );
  }

  getNomenclatureInfo(id: number): Observable<any> {
    return this.httpClient.get<{ data: any }>(environment.base_url + `product_structure/nomenclatures/${id}/available_on_stock/`).pipe(
      map(response => response.data)
    );
  }

  openSetProductionListLocatorModal(id: number): Observable<List> {
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

  getForFilter(): Observable<List[]> {
    return this.httpClient.get<{ data: List[] }>(this.API_URL + this.url + 'for_filter/?level=0').pipe(map(response => {
      return response.data;
    }));
  }

  getScanned(listId, scanData: ScanResult): Observable<{ ids_found: number[] }> {
    return this.httpClient.post<{ data: { ids_found: number[] } }>(this.API_URL + this.url + listId + '/scan_list_product/', scanData, {
      context: new HttpContext().set(IS_SCANNING_ENABLED, true)
    }).pipe(map(response => {
      return response.data;
    }));
  }

  getChainsStatisticsForProductionList(id: number, send: any): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url + `${id}/ordered_products_info/`, send).pipe(
      map(response => response.data)
    );
  }

  getFullStatistics(ids: string): Observable<any[]> {
    return this.httpClient.get<{ data: any[] }>(this.API_URL + this.url + `full_statistic/?ids=${ids}`).pipe(
      map(response => response.data)
    );
  }

  showStatisticsForChainsModal(
    id: number,
    send: {
      accounting_type: ProductionListAccountingType,
      positions_type: ProductionListPositionType
    }
  ): Observable<any> {
    return this.dialog
      .open<ProductionListChainsStatisticsComponent>(ProductionListChainsStatisticsComponent, {
        width: '90rem',
        height: 'auto',
        panelClass: '',
        data: {id, send},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  setActualQuantityDialog(listProduct: ListProduct, parent: ListProduct, isOldList: boolean, products: ListProduct[],
                          sendGenerateData, treeSimplifiedPath: Nomenclature[]): Observable<ListProduct[]> {
    /*
    * treeSimplifiedPath: Simply array of elements from parent in array form
    * */
    return this.dialog
      .open<ProductionListSetActualQuantityDialogComponent>(ProductionListSetActualQuantityDialogComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {listProduct, parent, isOldList, products, sendGenerateData, treeSimplifiedPath},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  scanNextQr(productFound: boolean = true): Observable<boolean> {
    return this.dialog
      .open<ScanNextComponent>(ScanNextComponent, {
        width: '50rem',
        height: 'auto',
        data: {productFound},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

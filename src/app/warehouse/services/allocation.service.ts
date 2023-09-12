import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {AllocateItemsComponent} from "@shared/modals/allocate-items/allocate-items.component";
import {InvoiceProduct} from '../../procurement/models/invoice-product'
import {ListProduct} from "../models/list-product";
import {map} from "rxjs/operators";
import {OrderProduct} from "../../procurement/models/order-product";
import {QuerySearch} from "@shared/models/other";

@Injectable({
  providedIn: 'root'
})
export class AllocationService {
  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'products/';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }


  openAllocateItemModal(type: ModalActionType, invoiceId: number, invoiceProduct?: InvoiceProduct | OrderProduct): Observable<AllocateItemsComponent> {

    return this.dialog
      .open<AllocateItemsComponent>(AllocateItemsComponent, {
        width: '110rem',
        height: '65rem',
        data: {type, invoiceProduct, invoiceId}, // invoice_product_id?
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  getQueryString(query: QuerySearch[]) {
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
    return qString;
  }

  getRequiredByListProducts(nomId: number, query: QuerySearch[]): Observable<ListProduct[]> {
    let qString = this.getQueryString(query);
    return this.httpClient
      .get<{
        data: ListProduct[]
      }>(environment.base_url + 'product_structure/nomenclatures/' + nomId + '/required_by_listproducts/' + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getReservedByListProducts(nomId: number, query: QuerySearch[]): Observable<any> {
    let qString = this.getQueryString(query);
    return this.httpClient
      .get<{
        data: any[]
      }>(environment.base_url + 'product_structure/nomenclatures/' + nomId + '/reserved_by_listproducts/' + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  acceptSeveral(items: any): Observable<any> {
    return this.httpClient.post(environment.base_url + 'product_structure/nomenclatures/allocate_items_by_production_lists/', items).pipe(
      map(response => response)
    );
  }
}

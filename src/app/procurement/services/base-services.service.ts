import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseService} from '../models/base-service';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditAuxiliaryInvoiceTypeComponent
} from '../modals/create-edit-auxiliary-invoice-type/create-edit-auxiliary-invoice-type.component';
import {PurchaseCategory} from "../../purchasing/models/purchase-category";
import {
  EditPurchasingCategoryAccountingNumberComponent
} from "../../purchasing/modals/edit-purchasing-category-accounting-number/edit-purchasing-category-accounting-number.component";
import {
  EditAuxiliaryInvoicesAccountingNumberComponent
} from "../modals/edit-auxiliary-invoices-accounting-number/edit-auxiliary-invoices-accounting-number.component";

@Injectable({
  providedIn: 'root'
})
export class BaseServicesService {
  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'base_services/';

  baseService: BaseService[];

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getById(id): Observable<BaseService> {
    return this.httpClient.get<{ data: BaseService }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  get(): Observable<BaseService[]> {
    return this.httpClient.get<{ data: BaseService[] }>(this.API_URL + this.url + 'all/').pipe(
      map(response => response.data)
    );
  }

  create(baseService): Observable<BaseService> {
    return this.httpClient.post<{ data: BaseService }>(this.API_URL + this.url, baseService).pipe(
      map(response => response.data)
    );
  }

  update(baseService: Partial<BaseService>, id: number): Observable<BaseService> {
    return this.httpClient.patch<{ data: BaseService }>(this.API_URL + this.url + id + '/', baseService).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  createEditBaseService(type: ModalActionType, service?: BaseService): Observable<BaseService> {
    return this.dialog
      .open<CreateEditAuxiliaryInvoiceTypeComponent>(CreateEditAuxiliaryInvoiceTypeComponent, {
        width: '54rem',
        height: 'auto',
        data: {type, service},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  editAccountingNumberCategory(baseService?: BaseService): Observable<BaseService> {
    return this.dialog
      .open<EditAuxiliaryInvoicesAccountingNumberComponent>(EditAuxiliaryInvoicesAccountingNumberComponent, {
        width: '30rem',
        height: 'auto',
        data: {baseService},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {InvoiceFilter} from "../models/invoice-filter";
import {ModalActionType} from "@shared/models/modal-action";
import {Currency} from "@shared/models/currency";
import {CreateEditCurrencyComponent} from "../modals/create-edit-currency/create-edit-currency.component";
import {MatDialog} from "@angular/material/dialog";
import {
  CreateEditInvoiceFilterComponent
} from "../modals/create-edit-invoice-filter/create-edit-invoice-filter.component";

@Injectable({
  providedIn: 'root'
})
export class InvoiceFilterService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'invoice_filters/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getFilters(): Observable<InvoiceFilter[]> {
    return this.httpClient.get<{ data: InvoiceFilter[] }>(this.API_URL + this.url).pipe(
      map(response => response.data)
    );
  }

  createFilter(filter: InvoiceFilter): Observable<InvoiceFilter> {
    return this.httpClient.post<{ data: InvoiceFilter }>(this.API_URL + this.url, filter).pipe(
      map(response => response.data)
    );
  }

  deleteFilter(filter: InvoiceFilter) {
    return this.httpClient.delete(this.API_URL + this.url + `${filter.id}/`);
  }

  updateFilter(filter: InvoiceFilter): Observable<InvoiceFilter> {
    return this.httpClient.patch<{ data: InvoiceFilter }>(this.API_URL + this.url + `${filter.id}/`, filter).pipe(
      map(response => response.data)
    );
  }

  createEditInvoiceFilter(type: ModalActionType, invoiceFilter?: InvoiceFilter): Observable<InvoiceFilter> {
    return this.dialog
      .open<CreateEditInvoiceFilterComponent>(CreateEditInvoiceFilterComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, invoiceFilter},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

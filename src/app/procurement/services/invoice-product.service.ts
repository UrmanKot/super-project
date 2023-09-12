import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {InvoiceProduct, InvoiceProducts} from '../models/invoice-product';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  IsolatorWriteOffInvoiceProductComponent
} from '../../warehouse/modals/isolator-write-off-invoice-product/isolator-write-off-invoice-product.component';
import {MatDialog} from '@angular/material/dialog';
import {RmaCommentDialogComponent} from '../../warehouse/modals/rma-comment-dialog/rma-comment-dialog.component';
import {ModalActionType} from "@shared/models/modal-action";
import {
  CreateEditInvoiceProductComponent
} from "../../reports/modals/create-edit-invoice-product/create-edit-invoice-product.component";
import {RmaInvoiceModalComponent} from "../../reports/modals/rma-invoice-modal/rma-invoice-modal.component";
import {
  InvoiceRedeliveryRmaModalComponent
} from "../../reports/modals/invoice-redelivery-rma-modal/invoice-redelivery-rma-modal.component";
import {
  InvoiceProductDeliveryDateComponent
} from "../../reports/modals/invoice-product-delivery-date/invoice-product-delivery-date.component";

@Injectable({
  providedIn: 'root'
})
export class InvoiceProductService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'invoice_products/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {

  }

  get(query?: QuerySearch[]): Observable<InvoiceProduct[]> {
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

    return this.httpClient.get<{ data: InvoiceProduct[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getProductsInIsolator(): Observable<InvoiceProduct[]> {

    return this.httpClient.get<{ data: InvoiceProduct[] }>(this.API_URL + this.url + "products_in_isolator").pipe(
      map(response => response.data)
    );
  }

  getForPagination(query?: QuerySearch[]): Observable<InvoiceProducts> {
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

    return this.httpClient.get<{ data: InvoiceProducts }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  severalUpdatePartly(invoiceProducts: Partial<InvoiceProduct>[]) {
    return forkJoin(...invoiceProducts.map(invoice => this.httpClient.patch(this.API_URL + this.url + invoice.id + '/', invoice)));
  }

  updateSeveralPartly(send: any[]): Observable<any[]> {
    return forkJoin(...send.map(orderProduct => this.httpClient.patch(this.API_URL + this.url + orderProduct.id + '/', orderProduct)));
  }

  updatePartly(invoice: Partial<InvoiceProduct>): Observable<InvoiceProduct> {
    return this.httpClient.patch<{ data: InvoiceProduct }>(this.API_URL + this.url + invoice.id + '/', invoice).pipe(
      map(response => response.data)
    );
  }

  create(product: Partial<InvoiceProduct>): Observable<InvoiceProduct> {
    return this.httpClient.post<{ data: InvoiceProduct }>(this.API_URL + this.url, product).pipe(
      map(response => response.data)
    );
  }

  bulkUpdateQualityControl(qualityControllInfo: {
    invoice_products_ids: number[],
    passed_quantity: number,
    not_passed_quantity: number
  }): Observable<InvoiceProduct> {
    return this.httpClient.post<{
      data: InvoiceProduct
    }>(this.API_URL + this.url + 'bulk_update_passed_not_passed/', qualityControllInfo).pipe(
      map(response => response.data)
    );
  }

  getInvoiceProducts(id: number): Observable<InvoiceProduct[]> {
    return this.httpClient.get<{ data: InvoiceProduct[] }>(this.API_URL + 'invoices/' + id + '/products_to_qc/').pipe(
      map(response => response.data)
    );
  }

  acceptSeveral(send: any[]): Observable<any> {
    return this.httpClient.post(environment.base_url + environment.warehouse_url + 'invoice_product_to_warehouse/', send).pipe(
      map(response => response)
    );
  }

  sendToRma(data: {invoice_product_ids: number[], rma_comment: string}) {
    return this.httpClient.post(this.API_URL + this.url + 'bulk_send_to_rma/', data).pipe(
      map(response => response)
    );
  }

  writeOffInvoiceProductDialog(invoiceProduct: InvoiceProduct): Observable<InvoiceProduct> {
    return this.dialog
      .open<IsolatorWriteOffInvoiceProductComponent>(IsolatorWriteOffInvoiceProductComponent, {
        width: '30rem',
        height: 'auto',
        data: {invoiceProduct},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  getTariffsConfirmation(data) {
    return this.httpClient.post(this.API_URL + this.url + "confirm_tariffs/", data);
  }

  severalWriteOff(ids: number[]): Observable<any> {
    return forkJoin(...ids.map(id => this.httpClient.post<any>(this.API_URL + this.url + `${id}/write_off/`, null).pipe(
      catchError(() => of(null)),
    )));
  }

  setRMACommentDialog(invoiceProduct: InvoiceProduct) {
    return this.dialog
      .open<RmaCommentDialogComponent>(RmaCommentDialogComponent, {
        width: '30rem',
        height: 'auto',
        data: {invoiceProduct},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  createEditInvoiceProductModal(type: ModalActionType, invoiceId: number, invoiceProduct?: InvoiceProduct) {
    return this.dialog
      .open<CreateEditInvoiceProductComponent>(CreateEditInvoiceProductComponent, {
        width: '50rem',
        height: 'auto',
        data: {type, invoiceId, invoiceProduct},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  appendQuantityToInvoice(id: number, data: { add_quantity: number }) {
    return this.httpClient.post(this.API_URL + this.url + id + '/append_invoice_products_new_quantity/', data).pipe(map(response => {
      return response;
    }));
  }


  prepareInvoiceProductsForAllocation(data: {
    area_locator_id: number,
    invoice_products: {invoice_product_id: number, quantity: number}[]
  }) {
    return this.httpClient.post(this.API_URL + this.url + 'prepare_invoice_products_for_area_locator_allocation/', data).pipe(map(response => {
      return response;
    }));
  }

  delete(id: number) {
    return this.httpClient.delete(this.API_URL + this.url + `${id}/`);
  }

  rma(invoiceProducts: InvoiceProduct[]) {
    return this.dialog
      .open<RmaInvoiceModalComponent>(RmaInvoiceModalComponent, {
        width: '24rem',
        data: {invoiceProducts},
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }

  refund(ids: number[]) {
    return this.httpClient.post(this.API_URL + this.url + `bulk_refund/`, ids);
  }

  redelivery(send) {
    return forkJoin(...send.map(orderProduct => this.httpClient.patch(this.API_URL + this.url + orderProduct.id + '/', orderProduct)));
  }

  redeliveryDialog(invoiceProducts: InvoiceProduct[]) {
    return this.dialog
      .open<InvoiceRedeliveryRmaModalComponent>(InvoiceRedeliveryRmaModalComponent, {
        width: '37rem',
        disableClose: true,
        data: invoiceProducts,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }

  deliveryDate(invoiceProduct: InvoiceProduct) {
    return this.dialog
      .open<InvoiceProductDeliveryDateComponent>(InvoiceProductDeliveryDateComponent, {
        width: '32rem',
        panelClass: 'modal-overflow-visible',
        disableClose: true,
        data: invoiceProduct,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {ServiceInvoicePayment, ServiceInvoicePaymentFile} from '../models/service-invoice-payment';
import {Payment} from "../models/payment";
import {ModalActionType} from "@shared/models/modal-action";
import {MatDialog} from "@angular/material/dialog";
import {
  CreateEditServicePaymentFormComponent
} from "../modals/create-edit-service-payment-form/create-edit-service-payment-form.component";
import {
  ServicePaymentFileFormComponent
} from "../modals/service-payment-file-form/service-payment-file-form.component";

@Injectable({
  providedIn: 'root'
})
export class ServiceInvoicePaymentService {
  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'service_invoice_payments/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getConfirmationPayments(): Observable<ServiceInvoicePayment[]> {
    return this.httpClient.get<{ data: ServiceInvoicePayment[] }>(this.API_URL + this.url + 'confirmation_list/').pipe(
      map(response => response.data));
  }

  severalConfirm(ids: number[]): Observable<any[]> {
    return forkJoin(...ids.map(id => this.httpClient.post<{ data: ServiceInvoicePayment }>(this.API_URL + this.url + `confirm/${id}/`, null)));
  }

  severalDecline(ids: number[]): Observable<any[]> {
    return forkJoin(...ids.map(id => this.httpClient.post<{ data: ServiceInvoicePayment }>(this.API_URL + this.url + `decline/${id}/`, null)));
  }

  create(payment: any): Observable<ServiceInvoicePayment> {
    return this.httpClient.post<{ data: ServiceInvoicePayment }>(this.API_URL + this.url, payment).pipe(
      map(response => response.data)
    )
  }

  update(payment: any): Observable<ServiceInvoicePayment> {
    return this.httpClient.patch<{ data: ServiceInvoicePayment }>(this.API_URL + this.url + `${payment.id}/`, payment).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${id}/`)
  };

  get(query?: { name: string, value: any }[]): Observable<ServiceInvoicePayment[]> {
    let q_string = '';

    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          q_string += '&' + element.name + '=' + element.value
        } else {
          q_string += '?' + element.name + '=' + element.value
        }

      });
    }
    return this.httpClient.get<{ data: ServiceInvoicePayment[] }>(this.API_URL + this.url + 'all/' + q_string).pipe
    (map(response => response.data))
  }

  downloadAuxiliaryPaymentFile(fileId): Observable<Blob> {
    return this.httpClient.get(this.API_URL + `service_invoice_payment_file_download/${fileId}/`, {responseType: 'blob'})
  }

  removeAuxiliaryPaymentFile(fileId: number): Observable<any> {
    return this.httpClient.post(this.API_URL + `service_invoice_payment_file_delete/${fileId}/`, null)
  }

  getAuxiliaryPaymentFiles(paymentId: number): Observable<ServiceInvoicePaymentFile[]> {
    return this.httpClient.get<{ data: ServiceInvoicePaymentFile[] }>(this.API_URL + `service_invoice_payment_files/${paymentId}/`).pipe(
      map(response => response.data)
    )
  }

  severalUploadFiles(paymentId: number, files: File[]): Observable<ServiceInvoicePaymentFile[]> {
    const arrayFormData: FormData[] = [];

    files.forEach(file => {
      const formData = new FormData()
      formData.append('file', file);
      arrayFormData.push(formData)
    })
    return forkJoin(...arrayFormData.map(formData => this.httpClient.post<{ data: ServiceInvoicePaymentFile }>(this.API_URL + `service_invoice_payment_files/${paymentId}/`, formData).pipe(
      map(response => response.data)
    )));
  }

  pay(payment: any): Observable<Payment> {
    return this.httpClient.patch<{ data: Payment }>(this.API_URL + this.url + `${payment.id}/`, payment).pipe(
      map(response => response.data)
    )
  }

  openCreateEditServicePaymentForm(type: ModalActionType, payment?: ServiceInvoicePayment, companyId?: number, orderId?: number): Observable<ServiceInvoicePayment[]> {
    return this.dialog
      .open<CreateEditServicePaymentFormComponent>(CreateEditServicePaymentFormComponent, {
        width: '55rem',
        height: 'auto',
        data: {type, payment, companyId, orderId},
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }


  showAuxiliaryPaymentFiles(paymentId: number): Observable<void> {
    return this.dialog
      .open<ServicePaymentFileFormComponent>(ServicePaymentFileFormComponent, {
        width: '40rem',
        height: 'auto',
        data: paymentId,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

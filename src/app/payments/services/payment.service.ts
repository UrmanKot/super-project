import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable, of} from 'rxjs';
import {environment} from "@env/environment";
import {Payment, PaymentFile} from "../models/payment";
import {catchError, map} from 'rxjs/operators';
import {QuerySearch} from "@shared/models/other";
import {ModalActionType} from "@shared/models/modal-action";
import {MatDialog} from "@angular/material/dialog";
import {CreateEditPaymentFormComponent} from "../modals/create-edit-payment-form/create-edit-payment-form.component";
import {PaymentFileFormComponent} from "../modals/payment-file-form/payment-file-form.component";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'payments/';

  constructor(
    private http: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<Payment[]> {
    let queryParams = '';

    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value
        } else {
          queryParams += '?' + element.name + '=' + element.value
        }

      });
    }
    return this.http.get<{ data: Payment[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => response.data)
    )
  }

  create(payment: any): Observable<Payment> {
    return this.http.post<{ data: Payment }>(this.API_URL + this.url, payment).pipe(
      map(response => response.data)
    )
  }

  update(payment: any): Observable<Payment> {
    return this.http.patch<{ data: Payment }>(this.API_URL + this.url + `${payment.id}/`, payment).pipe(
      map(response => response.data)
    );
  }

  delete(payment: Payment): Observable<any> {
    return this.http.delete(this.API_URL + this.url + `${payment.id}/`)
  };

  pay(payment: any): Observable<Payment> {
    return this.http.patch<{ data: Payment }>(this.API_URL + this.url + `${payment.id}/`, payment).pipe(
      map(response => response.data)
    )
  }

  downloadPaymentFile(fileId: number): Observable<Blob> {
    return this.http.get(this.API_URL + `payment_file_download/${fileId}/`, {responseType: 'blob'})
  }

  removePaymentFile(fileId: number): Observable<any> {
    return this.http.post(this.API_URL + `payment_file_delete/${fileId}/`, null)
  }

  getPaymentFiles(paymentId: number): Observable<PaymentFile[]> {
    return this.http.get<{data: PaymentFile[]}>(this.API_URL + `payment_files/${paymentId}/`).pipe(
      map(response => response.data)
    )
  }

  getConfirmationPayments(): Observable<Payment[]> {
    return this.http.get<{ data: Payment[] }>(this.API_URL + this.url + 'confirmation_list/').pipe(
      map(response => response.data));
  }

  severalConfirm(ids: number[]): Observable<any[]> {
    return forkJoin(...ids.map(id => this.http.post<{ data: Payment }>(this.API_URL + this.url + `confirm/${id}/`, null).pipe(
      catchError(() => of(null)),
    )));
  }

  severalDecline(ids: number[]): Observable<any[]> {
    return forkJoin(...ids.map(id => this.http.post<{ data: Payment }>(this.API_URL + this.url + `decline/${id}/`, null).pipe(
      catchError(() => of(null)),
    )));
  }

  getLimit(): Observable<{ id: number; value: string }[]> {
    return this.http.get<{ data: { id: number; value: string }[] }>(this.API_URL + 'maximum_confirmed_payment_amount/').pipe(
      map(response => response.data)
    );
  }

  setLimit(limit: { id: number, value: string }): Observable<any> {
    return this.http.patch(this.API_URL + 'maximum_confirmed_payment_amount/' + limit.id + '/', limit);
  }

  severalUploadFiles(paymentId: number, files: File[]): Observable<PaymentFile[]> {
    const arrayFormData: FormData[] = [];

    files.forEach(file => {
      const formData = new FormData()
      formData.append('file', file);
      arrayFormData.push(formData)
    })
    return forkJoin(...arrayFormData.map(formData => this.http.post<{data: PaymentFile}>(this.API_URL + `payment_files/${paymentId}/`, formData).pipe(
      map(response => response.data)
    )));
  }

  openCreateEditPaymentForm(type: ModalActionType, payment?: Payment, companyId?: number, orderId?: number): Observable<Payment[]> {
    return this.dialog
      .open<CreateEditPaymentFormComponent>(CreateEditPaymentFormComponent, {
        width: '39rem',
        height: 'auto',
        data: {type, payment, companyId, orderId},
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  showPaymentFiles(paymentId: number): Observable<void> {
    return this.dialog
      .open<PaymentFileFormComponent>(PaymentFileFormComponent, {
        width: '40rem',
        height: 'auto',
        data: paymentId,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

}

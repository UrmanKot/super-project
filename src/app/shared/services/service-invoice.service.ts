import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {Invoice, InvoiceFile} from '../../procurement/models/invoice';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {
  ServiceInvoiceFilesComponent
} from '../../procurement/modals/service-invoice-files/service-invoice-files.component';
import {
  CreateAuxiliaryInvoiceModalComponent
} from "../../reports/modals/create-auxiliary-invoice-modal/create-auxiliary-invoice-modal.component";
import {ServiceInvoice, ServiceInvoiceFile} from "../../procurement/models/service-invoice";
import {
  AuxiliaryInvoiceFilesModalComponent
} from "../../reports/modals/auxiliary-invoice-files-modal/auxiliary-invoice-files-modal.component";
import {
  SelectBindInvoiceModalComponent
} from "../../reports/modals/select-bind-invoice-modal/select-bind-invoice-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ServiceInvoiceService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'service_invoices/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {

  }

  get(query?: { name: string, value: any }[]): Observable<ServiceInvoice[]> {
    let q_string = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          q_string += '&' + element.name + '=' + element.value;
        } else {
          q_string += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{
      data: ServiceInvoice[]
    }>(this.API_URL + this.url + 'all/' + q_string).pipe(map(response => {
      return response.data;
    }));
  }

  getById(id): Observable<Invoice> {
    return this.httpClient.get<{ data: Invoice }>(this.API_URL + this.url + id + '/').pipe(map(response => {
      return response.data;
    }))
  }

  create(invoice: Partial<any>): Observable<Invoice> {
    return this.httpClient.post<{ data: Invoice }>(this.API_URL + this.url, invoice).pipe(
      map(response => response.data)
    );
  }

  updatePartly(invoice: Partial<Invoice>): Observable<Invoice> {
    return this.httpClient.patch<{ data: Invoice }>(this.API_URL + this.url + invoice.id + '/', invoice).pipe(
      map(response => response.data)
    );
  }


  getFiles(invoiceId: number): Observable<ServiceInvoiceFile[]> {
    return this.httpClient.get<{
      data: ServiceInvoiceFile[]
    }>(this.API_URL + 'service_invoice_files/' + invoiceId + '/').pipe(
      map(response => response.data)
    );
  }

  severalUploadFiles(invoiceId: number, files: File[]): Observable<InvoiceFile[]> {
    const arrayFormData: FormData[] = [];

    files.forEach(file => {
      const formData = new FormData()
      formData.append('file', file);
      arrayFormData.push(formData)
    })
    return forkJoin(...arrayFormData.map(formData => this.httpClient.post<{
      data: InvoiceFile
    }>(this.API_URL + `service_invoice_files/${invoiceId}/`, formData).pipe(
      map(response => response.data)
    )));
  }

  downloadFile(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + 'service_invoice_file_download/' + id + '/', {responseType: 'blob'});
  }

  removeFile(fileId: number): Observable<any> {
    return this.httpClient.post(this.API_URL + 'service_invoice_file_delete/' + fileId + '/', null);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  cancellation(entity: Partial<Invoice>) {
    return this.httpClient.patch<{ data: Invoice }>(this.API_URL + this.url + entity.id + '/', entity).pipe(map(response => {
      return response.data;
    }));
  }

  openInvoiceFilesModal(invoiceId: number): Observable<any> {
    return this.dialog
      .open<ServiceInvoiceFilesComponent>(ServiceInvoiceFilesComponent, {
        width: '40rem',
        height: 'auto',
        data: {invoiceId},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openCreateModal(isProforma: boolean) {
    return this.dialog
      .open<CreateAuxiliaryInvoiceModalComponent>(CreateAuxiliaryInvoiceModalComponent, {
        width: '40rem',
        height: 'auto',
        data: {isProforma},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  serviceInvoiceFiles(invoice: ServiceInvoice): Observable<{ files: ServiceInvoiceFile[], invoiceLength: number }> {
    return this.dialog
      .open<AuxiliaryInvoiceFilesModalComponent>(AuxiliaryInvoiceFilesModalComponent, {
        width: '40rem',
        height: 'auto',
        data: {invoice},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  bindInvoice(id, data) {
    return this.httpClient.patch<{data: any}>(this.API_URL + this.url + id + '/', data).pipe(map(response => {
      return response.data;
    }));
  }

  bindInvoiceModal(isProforma: boolean) {
    return this.dialog
      .open<SelectBindInvoiceModalComponent>(SelectBindInvoiceModalComponent, {
        width: '80%',
        maxHeight: '80%',
        panelClass: 'modal-picker',
        autoFocus: false,
        data: {isProforma},
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

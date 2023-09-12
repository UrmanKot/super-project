import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {Invoice, InvoiceFile, Invoices} from '../models/invoice';
import {forkJoin, Observable} from 'rxjs';
import {InvoiceProduct} from '../models/invoice-product';
import {MatDialog} from '@angular/material/dialog';
import {
  QcAcceptToWarehouseComponent
} from '../../warehouse/modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component';
import {InvoiceFilesComponent} from '../modals/invoice-files/invoice-files.component';
import {ScanResult} from '../../qr-code/models/scan-result';
import {InvoiceFilter} from "../../reports/models/invoice-filter";
import {InvoiceFiltersModalComponent} from "../../reports/modals/invoice-filters-modal/invoice-filters-modal.component";
import {InvoiceFilesModalComponent} from "../../reports/modals/invoice-files-modal/invoice-files-modal.component";
import * as Excel from 'exceljs/dist/exceljs.min.js';
import {AdapterService} from "@shared/services/adapter.service";
import {MoneyFormatPipe} from "@shared/pipes/money-format.pipe";
import {DecimalPipe} from "@angular/common";
import {ReportGenerateXmlComponent} from "../../reports/modals/report-generate-xml/report-generate-xml.component";
import {
  EditInvoiceGenerateXmlComponent
} from "../../reports/modals/edit-invoice-generate-xml/edit-invoice-generate-xml.component";
import {
  GenerateIntrastatXmlComponent
} from "../../reports/modals/generate-intrastat-xml/generate-intrastat-xml.component";
import {
  DistributeInvoicePriceModalComponent
} from "../../reports/modals/distribute-invoice-price-modal/distribute-invoice-price-modal.component";
import {
  NewInvoiceProductModalComponent
} from "../../reports/modals/new-invoice-product-modal/new-invoice-product-modal.component";
import {
  AllocateToToolRequestModalComponent
} from '../../reports/modals/allocate-to-tool-request-modal/allocate-to-tool-request-modal.component';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'invoices/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
    private adapterService: AdapterService,
    private moneyFormatPipe: MoneyFormatPipe,
    private decimalPipe: DecimalPipe,
  ) {
  }

  get(query?: QuerySearch[]): Observable<Invoice[]> {
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
    return this.httpClient.get<{ data: Invoice[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getForPagination(query: QuerySearch[]): Observable<Invoices> {
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
    return this.httpClient.get<{ data: Invoices }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<Invoice> {
    return this.httpClient.get<{ data: Invoice }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  getProductsToAccept(id: number): Observable<InvoiceProduct[]> {
    return this.httpClient.get<{ data: InvoiceProduct[] }>(this.API_URL + this.url + id + '/products_to_accept/').pipe(
      map(response => response.data)
    );
  }

  getFiles(id: number): Observable<InvoiceFile[]> {
    return this.httpClient.get<{ data: InvoiceFile[] }>(this.API_URL + 'invoice_files/' + id + '/').pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  downloadFile(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + 'invoice_file_download/' + id + '/', {responseType: 'blob'});
  }

  removeFile(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + 'invoice_file_delete/' + id + '/', null).pipe(
      map(response => response)
    );
  }

  cancellation(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + id + '/cancellation/', null);
  }

  cancel_allocation_for_area_locator(id: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + id + '/cancel_allocation_for_area_locator/', null);
  }

  updatePartly(invoice: Partial<Invoice>): Observable<Invoice> {
    return this.httpClient.patch<{ data: Invoice }>(this.API_URL + this.url + invoice.id + '/', invoice).pipe(
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
    }>(this.API_URL + `invoice_files/${invoiceId}/`, formData).pipe(
      map(response => response.data)
    )));
  }

  scanInvoiceProductInQc(scannedInfo: ScanResult, id: number): Observable<{ found_id: number }> {
    return this.httpClient.post<{
      data: any
    }>(this.API_URL + this.url + +id + '/scan_product_in_qc/', scannedInfo).pipe(
      map(response => response.data)
    );
  }

  openInvoiceFilesModal(id: number): Observable<any> {
    return this.dialog
      .open<InvoiceFilesComponent>(InvoiceFilesComponent, {
        width: '40rem',
        height: 'auto',
        data: id,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openAcceptToWarehouseModal(items: InvoiceProduct[], id: number, type = 'invoice'): Observable<any> {
    return this.dialog
      .open<QcAcceptToWarehouseComponent>(QcAcceptToWarehouseComponent, {
        width: '40rem',
        height: 'auto',
        data: {items, id, type},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openFilterModal(): Observable<InvoiceFilter> {
    return this.dialog
      .open<InvoiceFiltersModalComponent>(InvoiceFiltersModalComponent, {
        width: '98vw',
        height: 'auto',
        data: {},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  invoiceFiles(invoice: Invoice): Observable<{ files: InvoiceFile[], invoiceLength: number }> {
    return this.dialog
      .open<InvoiceFilesModalComponent>(InvoiceFilesModalComponent, {
        width: '40rem',
        height: 'auto',
        data: {invoice},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  generateExel(invoices: Invoice[]) {
    // Создаем книгу Excel
    const workbook = new Excel.Workbook();

    let worksheet: any;

    // Создаем лист Excel
    worksheet = workbook.addWorksheet('Invoices Report');

    const allProducts = [];

    worksheet.columns = [
      {header: '#', key: 'index', width: 10},
      {header: 'Creation Date', key: 'creationDate', width: 15},
      {header: 'Invoice Date', key: 'invoiceDate', width: 15},
      {header: 'Invoice Reception', key: 'invoiceReception', width: 20},
      {header: 'Items Reception', key: 'itemsReception', width: 20},
      {header: 'Invoice Number', key: 'invoiceNumber', width: 20},
      {header: 'Company', key: 'company', width: 30},
      {header: 'Supplier Serial Num', key: 'supplierSerialNum', width: 35},
      {header: 'Purchase Category', key: 'purchaseCategory', width: 36},
      {header: 'Total Price', key: 'totalPrice', width: 20},
      {header: 'Pure Total Price', key: 'pureTotalPrice', width: 20},
      {header: 'Other Currency', key: 'otherCurrency', width: 18},
      {header: 'Order ID', key: 'orderID', width: 15},
      {header: 'Related', key: 'related', width: 18},
      {header: 'Payment', key: 'payment', width: 15},
      {header: 'Payment Amount', key: 'paymentAmount', width: 20},
      {header: 'Completed', key: 'completed', width: 15},
    ];

    const cols = 16;

    // Задаем форматирование
    let idx = 1;
    while (idx <= cols) {
      worksheet.getColumn(idx).alignment = {vertical: 'middle', horizontal: 'center'};
      worksheet.getColumn(idx).font = {
        name: 'Calibri',
        size: 12,
      };
      idx++;
    }

    worksheet.getRow(1).font = {
      name: 'Calibri',
      size: 13,
      bold: true
    };

    invoices.forEach((invoice, index) => {
      let relatedTo = 'Not Related';
      if (invoice.proformas.length > 0) {
        relatedTo = invoice.proformas.map(num => num.self_serial_number).join(', ');
      }
      worksheet.addRow({
        index: index + 1,
        creationDate: this.adapterService.dateToExcelStringDate(new Date(invoice.system_creation_date)),
        invoiceDate: this.adapterService.dateToExcelStringDate(new Date(invoice.invoice_date)),
        invoiceReception: this.adapterService.dateToExcelStringDate(new Date(invoice.invoice_reception_date)),
        itemsReception: this.adapterService.dateToExcelStringDate(new Date(invoice.items_reception_date)),
        invoiceNumber: invoice.self_serial_number,
        company: invoice.supplier ? invoice.supplier.name : '',
        supplierSerialNum: invoice.supplier_serial_number ? invoice.supplier_serial_number : '',
        purchaseCategory: invoice.purchase_category ? invoice.purchase_category.name : '',
        totalPrice: this.moneyFormatPipe.transform(invoice.total_price_converted) + '€',
        pureTotalPrice: this.moneyFormatPipe.transform(invoice.pure_total_price_converted) + '€',
        otherCurrency: invoice.otherCurrency ? this.moneyFormatPipe.transform(invoice.otherCurrency) + invoice.currency?.symbol : null,
        orderID: invoice.order ? invoice.order.id : 'Manual Invoice',
        related: relatedTo,
        payment: invoice.payment_status,
        paymentAmount: this.decimalPipe.transform(invoice.paid_interest ? invoice.paid_interest : '0', '1.2-2') + '%',
        completed: invoice.completed ? 'YES' : 'NO'
      });
    });

    // worksheet.getColumn(2).alignment = {vertical: 'middle', horizontal: 'left'};
    // worksheet.getColumn(3).alignment = {vertical: 'middle', horizontal: 'left'};
    // worksheet.getColumn(9).alignment = {vertical: 'middle', horizontal: 'left'};
    // worksheet.getColumn(11).alignment = {vertical: 'middle', horizontal: 'left'};
    // worksheet.getColumn(13).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
    // worksheet.getColumn(14).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
    // worksheet.getColumn(15).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
    // worksheet.getColumn(16).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';

    // Вызываем скрипт скачивания документы
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = `Invoices Report.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  generateXML(xmlInvoices): Observable<any> {
    return this.httpClient.post<{
      data: Invoice
    // @ts-ignore
    }>(this.API_URL + this.url + 'generate_xml/', xmlInvoices, {responseType: 'text', observe: 'body'});
  }

  generateNoDdvXML(xmlInvoices): Observable<any> {
    return this.httpClient.post<{
      data: Invoice
    // @ts-ignore
    }>(this.API_URL + this.url + 'old_generate_xml/', xmlInvoices, {responseType: 'text', observe: 'body'});
  }

  generateIntrastatXML(xmlInvoices): Observable<any> {
    // @ts-ignore
    return this.httpClient.post<{
      data: Invoice
    // @ts-ignore
    }>(this.API_URL + this.url + 'generate_intrastat_xml/', xmlInvoices, {responseType: 'text', observe: 'body'});
  }

  downloadXmlFile(data, name = '') {
    const filename = name ? 'xml-report-' + name + '.xml' : 'xml-report.xml';
    const pom = document.createElement('a');
    const bb = new Blob([data], {type: 'text/plain'});
    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);
    // @ts-ignore
    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');
    pom.click();
  }

  renderXML(): Observable<string> {
    return this.dialog
      .open<ReportGenerateXmlComponent>(ReportGenerateXmlComponent, {
        width: '25rem',
        height: 'auto',
        data: {},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  editInvoiceToGenerateXml(error: Error): Observable<any> {
    return this.dialog
      .open<EditInvoiceGenerateXmlComponent>(EditInvoiceGenerateXmlComponent, {
        width: '32rem',
        height: 'auto',
        data: {error},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  renderIntrastatXML(invoice_ids: number[]) {
    return this.dialog
      .open<GenerateIntrastatXmlComponent>(GenerateIntrastatXmlComponent, {
        width: '63rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: invoice_ids,
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }

  distributeModal(id: number) {
    return this.dialog
      .open<DistributeInvoicePriceModalComponent>(DistributeInvoicePriceModalComponent, {
        width: '30rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {id},
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }

  allocateToToolRequestModal(products: InvoiceProduct[]) {
    return this.dialog
      .open<AllocateToToolRequestModalComponent>(AllocateToToolRequestModalComponent, {
        width: '80rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {products},
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }

  distribute(id, send) {
    return this.httpClient.post<{
      data: any
    }>(this.API_URL + this.url + `${id}/distribute_price/`, send).pipe(map(response => {
      return response.data;
    }));
  }


  addInvoiceProductModal(id: number) {
    return this.dialog
      .open<NewInvoiceProductModalComponent>(NewInvoiceProductModalComponent, {
        width: '80%',
        maxHeight: '80%',
        panelClass: 'modal-picker',
        data: {id},
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }
}

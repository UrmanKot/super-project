import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as Excel from 'exceljs/dist/exceljs.min.js';
import {AdapterService} from "@shared/services/adapter.service";
import {AccountingProduct, BalanceProduct} from "../models/accounting-product";
import {MatDialog} from "@angular/material/dialog";
import {ReportsFiltersModalComponent} from "../modals/reports-filters-modal/reports-filters-modal.component";
import {ReportFilter} from "../models/report-filter";

export type AccountingType = 'in' | 'out' | 'wh-balance';

@Injectable({
  providedIn: 'root'
})

export class AccountingProductsService {

  API_URL = environment.base_url + environment.accounting_url;
  readonly url = 'accounting_products/';

  constructor(
    private httpClient: HttpClient,
    private adapterService: AdapterService,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: { name: string, value: any }[]): Observable<AccountingProduct[]> {
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
      data: AccountingProduct[]
    }>(this.API_URL + this.url + 'all/' + q_string).pipe(map(response => {
      return response.data;
    }));
  }

  roots(query?: { name: string, value: any }[]): Observable<AccountingProduct[]> {
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
      data: AccountingProduct[]
    }>(this.API_URL + 'accounting_products_roots/' + q_string).pipe(map(response => {
      return response.data;
    }));
  }

  balance(query?: { name: string, value: any }[]): Observable<BalanceProduct[]> {
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
    return this.httpClient.get<{ data: BalanceProduct[] }>(this.API_URL + 'stock_balances/' + q_string).pipe(
      map(response => {
        return response.data;
      }));
  }

  out(query?: { name: string, value: any }[]): Observable<BalanceProduct[]> {
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
    return this.httpClient.get<{ data: BalanceProduct[] }>(this.API_URL + 'out/' + q_string).pipe(map(response => {

      return response.data;
    }));
  }

  in(query?: { name: string, value: any }[]): Observable<BalanceProduct[]> {
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
    return this.httpClient.get<{ data: BalanceProduct[] }>(this.API_URL + 'in/' + q_string).pipe(map(response => {
      return response.data;
    }));
  }

  history(id): Observable<any> {
    return this.httpClient.get<{
      data: any
    }>(this.API_URL + 'warehouse_products/' + id + '/history/').pipe(map(response => {
      return response.data;
    }));
  }

  getById(id): Observable<AccountingProduct> {
    return this.httpClient.get<{ data: AccountingProduct }>(this.API_URL + this.url + id + '/').pipe(map(response => {

      return response.data;
    }));
  }

  tree(id): Observable<AccountingProduct[]> {
    return this.httpClient.get<{ data: AccountingProduct[] }>(this.API_URL + 'tree/' + id + '/').pipe(map(response => {

      return response.data;
    }));
  }

  async exportToExcel(products: BalanceProduct[], type: AccountingType) {
    let reportType = '';
    // Создаем книгу Excel
    const workbook = new Excel.Workbook();

    let worksheet: any;

    // Создаем лист Excel
    switch (type) {
      case 'in':
        worksheet = workbook.addWorksheet('Report In');
        reportType = 'In';
        break;
      case 'wh-balance':
        worksheet = workbook.addWorksheet('Report Warehouse Balance');
        reportType = 'Warehouse Balance';
        break;
      case 'out':
        worksheet = workbook.addWorksheet('Report Out');
        reportType = 'Out';
        break;
    }

    const allProducts = [];

    if (type === 'out') {
      worksheet.columns = [
        {header: '#', key: 'index', width: 10},
        {header: 'Code', key: 'code', width: 40},
        {header: 'Name', key: 'name', width: 40},
        {header: 'Quantity', key: 'quantity', width: 20},
        {header: 'UOM', key: 'uom', width: 15},
        {header: 'Order', key: 'order', width: 15},
        {header: 'Invoice', key: 'invoice', width: 15},
        {header: 'Technology', key: 'technology', width: 20},
        {header: 'Supplier', key: 'supplier', width: 36},
        {header: 'Purchase Category', key: 'purchaseCategory', width: 28},
        {header: 'Written For List', key: 'writtenForList', width: 36},
        {header: 'Date', key: 'date', width: 18},
        {header: 'Unit Price', key: 'unitPrice', width: 15},
        {header: 'Total Price', key: 'totalPrice', width: 15},
        {header: 'Unit Cost', key: 'unitCost', width: 15},
        {header: 'Total Cost', key: 'totalCost', width: 15},
      ];
    } else {
      worksheet.columns = [
        {header: '#', key: 'index', width: 10},
        {header: 'Code', key: 'code', width: 40},
        {header: 'Name', key: 'name', width: 40},
        {header: 'Total Quantity', key: 'quantity', width: 20},
        {header: 'UOM', key: 'uom', width: 15},
        {header: 'Order', key: 'order', width: 15},
        {header: 'Invoice', key: 'invoice', width: 15},
        {header: 'Technology', key: 'technology', width: 20},
        {header: 'Supplier', key: 'supplier', width: 36},
        {header: 'Purchase Category', key: 'purchaseCategory', width: 28},
        {header: 'Date', key: 'date', width: 18},
        {header: 'Quantity', key: 'acceptedQuantity', width: 15},
        {header: 'Unit Price', key: 'unitPrice', width: 15},
        {header: 'Total Price', key: 'totalPrice', width: 15},
        {header: 'Unit Cost', key: 'unitCost', width: 15},
        {header: 'Total Cost', key: 'totalCost', width: 15},
      ];
    }

    if (type === 'wh-balance') {
      products.forEach(product => {
        const newProduct = {
          code: product.code,
          name: product.name,
          quantity: product.total_quantity,
          category: product.category,
          // @ts-ignore
          order: product.type === 'physical-inventory' ? product.order.id : product.order,
          // @ts-ignore
          invoice: product.invoice ? product.invoice.self_serial_number : 'None',
          technology: product.current_technology,
          supplier: product.supplier,
          purchaseCategory: product.purchase_category,
          date: new Date(product.document_creation_date),
          acceptedQuantity: product.quantity,
          supplierTotalCost: product.supplier_total_cost,
          supplierTotalPrice: product.supplier_total_price,
          supplierUnitCost: product.supplier_unit_cost,
          supplierUnitPrice: product.supplier_unit_price
        };

        allProducts.push(newProduct);
      });
    } else if (type === 'in') {

      products.forEach(product => {
        const newProduct = {
          code: product.code,
          name: product.name,
          // @ts-ignore
          quantity: product.totalQuantity,
          category: product.category,
          order: product.order,
          invoice: product?.invoice ? product.invoice : 'None',
          technology: product.current_technology,
          supplier: product.supplier,
          purchaseCategory: product.purchase_category,
          date: new Date(product.document_creation_date),
          acceptedQuantity: product.quantity,
          supplierTotalCost: product.supplier_total_cost,
          supplierTotalPrice: product.supplier_total_price,
          supplierUnitCost: product.supplier_unit_cost,
          supplierUnitPrice: product.supplier_unit_price
        };

        allProducts.push(newProduct);
      })

      // products.forEach(product => {
      //   // if (product.accepted_by_invoices) {
      //   product.accepted_by_invoices.forEach(acceptedProduct => {
      //     const newProduct = {
      //       code: product.code,
      //       name: product.name,
      //       quantity: product.quantity,
      //       category: product.category,
      //       order: acceptedProduct.order,
      //       invoice: acceptedProduct.invoice,
      //       technology: acceptedProduct.current_technology,
      //       supplier: acceptedProduct.supplier,
      //       purchaseCategory: product.purchase_category,
      //       date: new Date(acceptedProduct.document_creation_date),
      //       acceptedQuantity: acceptedProduct.accepted_quantity,
      //       supplierTotalCost: acceptedProduct.supplier_total_cost,
      //       supplierTotalPrice: acceptedProduct.supplier_total_price,
      //       supplierUnitCost: acceptedProduct.supplier_unit_cost,
      //       supplierUnitPrice: acceptedProduct.supplier_unit_price
      //     };
      //
      //     allProducts.push(newProduct);
      //   });
      // // }
      // });
    } else if (type === 'out') {
      products.forEach(product => {
        const newProduct = {
          code: product.nomenclature.code,
          name: product.nomenclature.name,
          quantity: product.quantity,
          category: product.nomenclature.category,
          order: product.order,
          invoice: product.invoice,
          technology: product.current_technology,
          supplier: product.supplier,
          purchaseCategory: product.purchase_category,
          writtenForList: product.written_off_for_list,
          date: new Date(product.document_creation_date),
          supplierTotalCost: product.supplier_total_cost,
          supplierTotalPrice: product.supplier_total_price,
          supplierUnitCost: product.supplier_unit_cost,
          supplierUnitPrice: product.supplier_unit_price
        };
        allProducts.push(newProduct);
      });
    }

    let cols = 16;
    if (type === 'out') {
      cols = 16;
    }

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

    if (type === 'out') {
      allProducts.forEach((product, index) => {
        worksheet.addRow({
          index: index + 1,
          name: product.name,
          code: product.code,
          quantity: product.quantity,
          uom: product.category ? product.category.unit_of_measure?.symbol : 'Pcs',
          order: product.order,
          invoice: product.invoice ? product.invoice.self_serial_number : 'None',
          technology: product.technology ? product.technology : 'None',
          supplier: product.supplier,
          purchaseCategory: product.purchaseCategory && product.purchaseCategory?.name ? product.purchaseCategory.name : 'None',
          writtenForList: product.writtenForList,
          date: this.adapterService.dateToExcelStringDate(product.date),
          unitPrice: product.supplierUnitPrice,
          totalPrice: product.supplierTotalPrice,
          unitCost: product.supplierUnitCost,
          totalCost: product.supplierTotalCost,
        });
      });

      worksheet.getColumn(2).alignment = {vertical: 'middle', horizontal: 'left'};
      worksheet.getColumn(3).alignment = {vertical: 'middle', horizontal: 'left'};
      worksheet.getColumn(9).alignment = {vertical: 'middle', horizontal: 'left'};
      worksheet.getColumn(11).alignment = {vertical: 'middle', horizontal: 'left'};
      worksheet.getColumn(13).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
      worksheet.getColumn(14).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
      worksheet.getColumn(15).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
      worksheet.getColumn(16).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
    } else {

      if (type === 'in') {
        allProducts.forEach((product, index) => {
          worksheet.addRow({
            index: index + 1,
            name: product.name,
            code: product.code,
            quantity: product.quantity,
            uom: product.category,
            order: product.order,
            invoice: product?.invoice,
            technology: product.technology ? product.technology : 'None',
            supplier: product.supplier,
            purchaseCategory: product.purchaseCategory,
            date: this.adapterService.dateToExcelStringDate(product.date),
            acceptedQuantity: product.acceptedQuantity,
            unitPrice: product.supplierUnitPrice,
            totalPrice: product.supplierTotalPrice,
            unitCost: product.supplierUnitCost,
            totalCost: product.supplierTotalCost,
          });
        });
      } else {
        allProducts.forEach((product, index) => {
          worksheet.addRow({
            index: index + 1,
            name: product.name,
            code: product.code,
            quantity: product.quantity,
            uom: product.category,
            order: product.order,
            invoice: product.invoice,
            technology: product.technology ? product.technology : 'None',
            supplier: product.supplier,
            purchaseCategory: product.purchaseCategory && product.purchaseCategory?.name ? product.purchaseCategory.name : 'None',
            date: this.adapterService.dateToExcelStringDate(product.date),
            acceptedQuantity: product.acceptedQuantity,
            unitPrice: product.supplierUnitPrice,
            totalPrice: product.supplierTotalPrice,
            unitCost: product.supplierUnitCost,
            totalCost: product.supplierTotalCost,
          });
        });
      }

      worksheet.getColumn(2).alignment = {vertical: 'middle', horizontal: 'left'};
      worksheet.getColumn(3).alignment = {vertical: 'middle', horizontal: 'left'};
      worksheet.getColumn(9).alignment = {vertical: 'middle', horizontal: 'left'};
      worksheet.getColumn(13).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
      worksheet.getColumn(14).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
      worksheet.getColumn(15).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
      worksheet.getColumn(16).numFmt = '#,##0.00" €";[Red]\-#,##0.00" €"';
    }

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
      a.download = `Report ${reportType}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  openFilterModal(): Observable<ReportFilter> {
    return this.dialog
      .open<ReportsFiltersModalComponent>(ReportsFiltersModalComponent, {
        width: '95vw',
        height: 'auto',
        data: {},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}


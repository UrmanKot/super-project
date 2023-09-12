import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {Invoice} from '../../../procurement/models/invoice';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {OrderService} from '../../../procurement/services/order.service';
import {IsolatorService} from '../../services/isolator.service';
import {BehaviorSubject, iif, Observable, Subject, switchMap, takeUntil} from 'rxjs';
import {InvoiceProductService} from '../../../procurement/services/invoice-product.service';
import {InvoiceProduct} from '../../../procurement/models/invoice-product';
import {QuerySearch} from '@shared/models/other';
import {filter, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {CombinedInvoiceProduct} from './components/warehouse-isolator-invoices/warehouse-isolator-invoices.component';

@UntilDestroy()
@Component({
  selector: 'pek-warehouse-isolator',
  templateUrl: './warehouse-isolator.component.html',
  styleUrls: ['./warehouse-isolator.component.scss']
})
export class WarehouseIsolatorComponent implements OnInit, OnDestroy {
  isLoadingInvoices = true;
  isLoadingOrders = true;
  isLoadingDefectiveInvoice = true;

  invoicesQuery: QuerySearch[] = [];
  invoicesPage = 1;
  invoicesCount = 0;

  isStartFirstPage = false;

  searchInvoices$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  invoices$: Observable<Invoice[]> = this.searchInvoices$.pipe(
    tap(() => this.prepareInvoiceProductsForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAllInvoices,
        this.invoiceService.getForPagination(this.invoicesQuery).pipe(
          tap(response => this.invoicesCount = response.count),
          map(response => response.results),
        ),
        this.invoiceService.get(this.invoicesQuery).pipe(
          tap(products => this.invoicesCount = products.length),
        )
      ),
    ),
    tap(() => this.isLoadingInvoices = false),
    untilDestroyed(this),
  );

  isShowAllInvoices = false;
  defectiveInvoices: InvoiceProduct[] = [];
  defectiveProducts: InvoiceProduct[] = [];
  orders: Order[] = [];

  selectedInvoice: Invoice;
  selectedDefectiveInvoice: InvoiceProduct;
  selectedOrder: Order;
  selectedProduct: any;
  products: any[];

  private destroy$ = new Subject();

  constructor(
    private invoiceService: InvoiceService,
    private orderService: OrderService,
    private readonly isolatorService: IsolatorService,
    private readonly invoiceProductService: InvoiceProductService,
  ) {
  }

  prepareInvoiceProductsForSearch() {
    this.isLoadingInvoices = true;
    this.invoicesCount = 0;
    this.selectedInvoice = null;

    this.invoicesQuery = [
      {name: 'contains_isolated_products', value: true},
      {name: 'exclude_fully_rma', value: true},
    ];

    if (!this.isShowAllInvoices) {
      this.invoicesQuery.push({name: 'paginated', value: true});
      this.invoicesQuery.push({name: 'page', value: this.invoicesPage});
    }
  }

  ngOnInit(): void {
    // this.getInvoices();
    this.getOrders();
    this.getDefectiveInvoices();
  }

  getInvoices() {
    this.invoiceService.get([
      {name: 'contains_isolated_products', value: true},
      {name: 'exclude_fully_rma', value: true},
    ]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(invoices => {
      // this.invoices = invoices;
      this.isLoadingInvoices = false;
    });
  }

  getOrders() {
    this.orderService.get([{name: 'contains_isolated_products', value: true}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(orders => {
      this.orders = orders;
      this.isLoadingOrders = false;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getDefectiveInvoices() {
    this.defectiveInvoices = [];
    this.defectiveProducts = [];
    this.isLoadingDefectiveInvoice = true;

    this.invoiceProductService.getProductsInIsolator().pipe(
      takeUntil(this.destroy$)
    ).subscribe(invoiceProducts => {
      invoiceProducts.forEach(invoiceProduct => {
        invoiceProduct.quantity = invoiceProduct.isolator_quantity
        invoiceProduct.comment = invoiceProduct.rma_comment
        invoiceProduct.status = "Auto"
        let defective_product = this.defectiveInvoices.find(p => p.nomenclature.id === invoiceProduct.nomenclature.id && p.current_technology?.id === invoiceProduct.current_technology?.id && p.rma_comment === invoiceProduct.rma_comment)
        if (!defective_product) {
          this.defectiveInvoices.push(new CombinedInvoiceProduct(invoiceProduct, invoiceProducts.filter(p => p.nomenclature.id === invoiceProduct.nomenclature.id)))
        } else {
          defective_product.quantity += invoiceProduct.isolator_quantity;
        }

      });
      this.defectiveInvoices = this.defectiveInvoices.map(p => p);

      this.isLoadingDefectiveInvoice = false;
    });
    this.isolatorService.getIsolatorProducts().pipe(
      takeUntil(this.destroy$)
    ).subscribe(isolatorProducts => {
      isolatorProducts.forEach(isolatorProduct => {
        isolatorProduct.status = "Manual"
        let defective_product = this.defectiveProducts.find(p => (p.nomenclature.id === isolatorProduct.nomenclature.id) && (p.current_technology?.id === isolatorProduct.current_technology?.id && p.comment === isolatorProduct.comment))
        // console.log(isolatorProduct)
        if (!defective_product) {
          this.defectiveProducts.push(new CombinedInvoiceProduct(isolatorProduct, isolatorProducts.filter(p => p.nomenclature.id === isolatorProduct.nomenclature.id)))
        } else {
          defective_product.quantity += isolatorProduct.quantity;
        }

      });
      this.defectiveInvoices = this.defectiveProducts.map(p => p);
      this.isLoadingDefectiveInvoice = false;
    });
  }

  onShowAllInvoices(isShowAll: boolean) {
    this.isShowAllInvoices = isShowAll;

    if (this.isShowAllInvoices) {
      this.invoicesPage = 1;
    }

    this.searchInvoices$.next();
  }

  paginateInvoiceProducts(event: any) {
    if (!this.isStartFirstPage) {
      this.invoicesPage = event.page + 1;
      this.searchInvoices$.next();
    }
  }

  onWriteOff() {
    this.invoiceProductService.writeOffInvoiceProductDialog(this.selectedDefectiveInvoice).pipe(
      filter(response => !!response),
      tap(() => this.getDefectiveInvoices())
    ).subscribe();
  }

  onAddProduct() {
    this.isolatorService.addIsolatorProduct().subscribe(response => {
      if (response) {
        this.getDefectiveInvoices()
      }
    });
  }

  onAcceptToWarehouse() {
    this.isolatorService.openAcceptToWarehouseModal(this.selectedDefectiveInvoice).subscribe(response => {
      if (response) {
        this.getDefectiveInvoices()
      }
    });
  }
}

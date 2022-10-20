import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {Invoice} from '../../../procurement/models/invoice';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {OrderService} from '../../../procurement/services/order.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-warehouse-insulator',
  templateUrl: './warehouse-insulator.component.html',
  styleUrls: ['./warehouse-insulator.component.scss']
})
export class WarehouseInsulatorComponent implements OnInit, OnDestroy {
  isLoadingInvoices = true;
  isLoadingOrders = true;

  invoices: Invoice[] = [];
  orders: Order[] = [];

  selectedInvoice: Invoice;
  selectedOrder: Order;

  private destroy$ = new Subject();

  constructor(
    private invoiceService: InvoiceService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getInvoices();
    this.getOrders();
  }

  getInvoices() {
    this.invoiceService.get([{name: 'contains_isolated_products', value: true}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(invoices => {
      this.invoices = invoices;
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
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvoiceProduct} from '../../../../../procurement/models/invoice-product';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {InvoiceProductService} from '../../../../../procurement/services/invoice-product.service';
import {InvoiceService} from '../../../../../procurement/services/invoice.service';
import {OrderTechnicalEquipment} from '../../../../models/order-technical-equipment';
import {TechnicalEquipmentsInUseService} from '../../../../services/technical-equipments-in-use.service';
import {OrderTechnicalEquipmentsService} from '../../../../services/order-technical-equipments.service';

@Component({
  selector: 'pek-warehouse-isolator-invoices',
  templateUrl: './warehouse-isolator-invoices.component.html',
  styleUrls: ['./warehouse-isolator-invoices.component.scss']
})
export class WarehouseIsolatorInvoicesComponent implements OnInit, OnDestroy {
  invoiceId: number;
  isLoading = true;
  invoiceProducts: InvoiceProduct[] = [];

  orderId: number;
  orderTechnicalEquipments: OrderTechnicalEquipment[] = [];
  isLoadingTechnicalEquipment = true;
  private destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly invoiceProductService: InvoiceProductService,
    private readonly invoiceService: InvoiceService,
    private orderTechnicalEquipmentsService: OrderTechnicalEquipmentsService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      takeUntil(this.destroy$)
    ).subscribe(invoiceId => {
      this.invoiceId = +invoiceId;
      this.loadInvoiceProducts();
      this.getInvoiceInfo();
    });
  }

  loadInvoiceProducts() {
    this.invoiceProductService.get(
      [
        {name: 'invoice', value: this.invoiceId},
        {name: 'not_passed_quantity__gt', value: 0}
      ]
    ).pipe(takeUntil(this.destroy$)).subscribe(invoiceProducts => {
      this.invoiceProducts = invoiceProducts;
      this.isLoading = false;
    });
  }

  getInvoiceInfo() {
    this.invoiceService.getById(this.invoiceId).subscribe(invoice => {
      if (invoice.order.id) {
        this.orderId = invoice.order.id;
        this.getOrderTechnicalEquipments();
      }
    });
  }

  getOrderTechnicalEquipments() {
    this.orderTechnicalEquipmentsService.get([
      {name: 'order', value: this.orderId},
      {name: 'not_passed_quantity__gt', value: 0},
    ]).pipe(take(1), takeUntil(this.destroy$)).subscribe(technicalEquipments => {
      this.orderTechnicalEquipments = technicalEquipments;
      this.isLoadingTechnicalEquipment = false;
    });
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

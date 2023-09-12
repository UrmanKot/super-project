import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvoiceProduct} from '../../../../../procurement/models/invoice-product';
import {filter, map, take, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {InvoiceProductService} from '../../../../../procurement/services/invoice-product.service';
import {InvoiceService} from '../../../../../procurement/services/invoice.service';
import {OrderTechnicalEquipment} from '../../../../models/order-technical-equipment';
import {OrderTechnicalEquipmentsService} from '../../../../services/order-technical-equipments.service';

export class CombinedInvoiceProduct extends InvoiceProduct {
  products: InvoiceProduct[];
  combinedQuantity = 0;
  combinedNotPassedQuantity = 0;
  combinedPassedQuantity = 0;
  combinedWriteOffQuantity = 0;

  constructor(config: Partial<InvoiceProduct>, products: InvoiceProduct[]) {
    super();
    Object.assign(this, config);

    this.products = products;
    this.combinedQuantity = this.products.reduce((sum, p) => sum += p.quantity, 0);
    this.combinedNotPassedQuantity = this.products.reduce((sum, p) => sum += p.not_passed_quantity, 0);
    this.combinedPassedQuantity = this.products.reduce((sum, p) => sum += p.passed_quantity, 0);
    this.combinedWriteOffQuantity = this.products.reduce((sum, p) => sum += p.quantity_to_write_off, 0);
  }


}

@Component({
  selector: 'pek-warehouse-isolator-invoices',
  templateUrl: './warehouse-isolator-invoices.component.html',
  styleUrls: ['./warehouse-isolator-invoices.component.scss']
})
export class WarehouseIsolatorInvoicesComponent implements OnInit, OnDestroy {
  invoiceId: number;
  isLoading = true;
  invoiceProducts: CombinedInvoiceProduct[] = [];

  orderId: number;
  orderTechnicalEquipments: OrderTechnicalEquipment[] = [];
  isLoadingTechnicalEquipment = true;
  private destroy$ = new Subject();
  selectedInvoiceProduct: CombinedInvoiceProduct;

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
    this.isLoading = true;
    this.invoiceProducts = [];
    this.invoiceProductService.get(
      [
        {name: 'invoice', value: this.invoiceId},
        {name: 'not_passed_quantity__gt', value: 0},
        {name: 'exclude_fully_sent_to_write_off', value: true},
        // {name: 'rma_comment__isnull', value: true},
      ]
    ).pipe(takeUntil(this.destroy$)).subscribe(invoiceProducts => {
      invoiceProducts.forEach(invoiceProduct => {
        if (!this.invoiceProducts.find(p => p.nomenclature.id === invoiceProduct.nomenclature.id)) {
          this.invoiceProducts.push(new CombinedInvoiceProduct(invoiceProduct, invoiceProducts.filter(p => p.nomenclature.id === invoiceProduct.nomenclature.id)))
        }
      });
      this.invoiceProducts = this.invoiceProducts.map(p => p);
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

  onWriteOff() {
    this.invoiceProductService.writeOffInvoiceProductDialog(this.selectedInvoiceProduct).pipe(
      filter(response => !!response),
      tap(() => this.loadInvoiceProducts())
    ).subscribe();
  }

  onSetRMAComment() {
    this.invoiceProductService.setRMACommentDialog(this.selectedInvoiceProduct).pipe(
      filter(response => !!response),
      tap(() => this.loadInvoiceProducts())
    ).subscribe();
  }
}

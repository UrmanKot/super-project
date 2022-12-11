import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvoiceProduct} from '../../../../../procurement/models/invoice-product';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {InvoiceProductService} from '../../../../../procurement/services/invoice-product.service';
import {map, switchMap, take} from 'rxjs/operators';
import {OrderProduct} from '../../../../../procurement/models/order-product';
import {OrderProductService} from '../../../../../procurement/services/order-product.service';
import {OrderTechnicalEquipment} from '../../../../models/order-technical-equipment';
import {OrderTechnicalEquipmentsService} from '../../../../services/order-technical-equipments.service';

@Component({
  selector: 'pek-warehouse-isolator-orders',
  templateUrl: './warehouse-isolator-orders.component.html',
  styleUrls: ['./warehouse-isolator-orders.component.scss']
})
export class WarehouseIsolatorOrdersComponent implements OnInit, OnDestroy {

  isLoading = true;
  orderProducts: OrderProduct[] = [];
  technicalEquipments: OrderTechnicalEquipment[] = [];
  isLoadingTechnicalEquipment = true;
  private destroy$ = new Subject();

  orderId: number;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderProductService: OrderProductService,
    private orderTechnicalEquipmentsService: OrderTechnicalEquipmentsService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      takeUntil(this.destroy$)
    ).subscribe(orderId => {
      this.orderId = +orderId;
      this.loadIsolatedProducts();
      this.getOrderTechnicalEquipments();
    });
  }

  loadIsolatedProducts() {
    this.orderProductService.get(
      [
        {name: 'not_passed_quantity__gt', value: '0'},
        {name: 'order', value: this.orderId}
      ]
    ).pipe(takeUntil(this.destroy$)).subscribe(orderProducts => {
      this.orderProducts = orderProducts;
      this.isLoading = false;
    })
  }

  getOrderTechnicalEquipments() {
    this.orderTechnicalEquipmentsService.get([
      {name: 'order_id', value: this.orderId},
      {name: 'not_passed_quantity__gt', value: 0},
    ]).pipe(take(1), takeUntil(this.destroy$)).subscribe(technicalEquipments => {
      this.technicalEquipments = technicalEquipments;
      this.isLoadingTechnicalEquipment = false;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

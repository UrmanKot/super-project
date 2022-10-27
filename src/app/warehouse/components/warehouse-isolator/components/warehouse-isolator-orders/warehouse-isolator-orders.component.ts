import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvoiceProduct} from '../../../../../procurement/models/invoice-product';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {InvoiceProductService} from '../../../../../procurement/services/invoice-product.service';
import {map, switchMap} from 'rxjs/operators';
import {OrderProduct} from '../../../../../procurement/models/order-product';
import {OrderProductService} from '../../../../../procurement/services/order-product.service';

@Component({
  selector: 'pek-warehouse-isolator-orders',
  templateUrl: './warehouse-isolator-orders.component.html',
  styleUrls: ['./warehouse-isolator-orders.component.scss']
})
export class WarehouseIsolatorOrdersComponent implements OnInit, OnDestroy {

  isLoading = true;
  orderProducts: OrderProduct[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderProductService: OrderProductService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.orderProductService.get(
        [
          {name: 'not_passed_quantity__gt', value: '0'},
          {name: 'order', value: id}
        ]
      )),
      takeUntil(this.destroy$)
    ).subscribe(orderProducts => {
      this.orderProducts = orderProducts;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

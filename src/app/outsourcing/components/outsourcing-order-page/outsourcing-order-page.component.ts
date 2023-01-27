import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../procurement/services/order.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'pek-outsourcing-order-page',
  templateUrl: './outsourcing-order-page.component.html',
  styleUrls: ['./outsourcing-order-page.component.scss']
})
export class OutsourcingOrderPageComponent implements OnInit {

  orderId: number;
  isOrderLoading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.orderId = +id),
    ).subscribe()
  }

  openOrderFiles() {
    this.orderService.filesModal$.next();
  }

  editOrder() {
    this.orderService.editOrderModal$.next()
  }

  loaded() {
    this.isOrderLoading = false;
  }

}

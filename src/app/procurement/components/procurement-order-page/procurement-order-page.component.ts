import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'pek-procurement-order-page',
  templateUrl: './procurement-order-page.component.html',
  styleUrls: ['./procurement-order-page.component.scss']
})
export class ProcurementOrderPageComponent implements OnInit {
  orderId: number;
  isOrderLoading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderService: OrderService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.orderId = +id),
    ).subscribe();
  }

  openOrderFiles() {
    this.orderService.filesModal$.next();
  }

  editOrder() {
    this.orderService.editOrderModal$.next();
  }

  loaded() {
    this.isOrderLoading = false;
  }
}

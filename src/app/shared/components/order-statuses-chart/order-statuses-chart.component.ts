import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {Router} from '@angular/router';
import {OrderService} from '../../../procurement/services/order.service';
import {QuerySearch} from '@shared/models/other';

@Component({
  selector: 'pek-order-statuses-chart',
  templateUrl: './order-statuses-chart.component.html',
  styleUrls: ['./order-statuses-chart.component.scss']
})
export class OrderStatusesChartComponent implements OnInit, OnDestroy {

  orders: Order[] = [];
  queryParams: QuerySearch[];
  constructor(
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.queryParams = JSON.parse(localStorage.getItem('queryParamsForInWindowView'));
    if (!this.queryParams) {
      this.orders = JSON.parse(localStorage.getItem('orders'));

      if (!this.orders || this.orders.length === 0) {
        this.router.navigateByUrl('/');
        return;
      } else {
        this.orders.forEach(o => {
          o.statuses.forEach(s => {
            s.estimated_date = new Date(s.estimated_date);
          })
        })
      }
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('orders');
  }
}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ListProduct} from '../../../warehouse/models/list-product';
import {Order, Orders} from '../../../procurement/models/order';
import {Table} from 'primeng/table';
import {OrderService} from '../../../procurement/services/order.service';
import {QuerySearch} from '@shared/models/other';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, switchMap} from 'rxjs';
import {untilDestroyed} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';

@Component({
  selector: 'pek-order-statuses-table',
  templateUrl: './order-statuses-table.component.html',
  styleUrls: ['./order-statuses-table.component.scss']
})
export class OrderStatusesTableComponent implements OnInit, OnChanges {
  @ViewChild('st') st: Table;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Input() isLoading = true;
  @Input() orders: Order[] = [];
  @Input() isChart: boolean = false;
  @Input() isPaginatedOutside: boolean = false;
  @Input() isPaginated = true;
  @Input() searchQueryParams: QuerySearch[];
  isShowAll = false;
  dateWidth = '150px';

  dates: any = [];
  first = 0;

  isExpandChart = false;
  selectedOrder: Order;

  countOrders;
  isStartOnePage;

  constructor(
    private readonly orderService: OrderService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.searchQueryParams) {

    } else {
      if ('orders' in changes) {
        if (!this.isChart) {
          this.modifyOrders();
        }
      }
    }
  }
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  @ViewChild('paginator') paginator: Paginator;
  ngOnInit(): void {
    if (this.isChart) {
      setTimeout(() => {
        this.renderDates();
      }, 0);
    }

    this.search$.pipe(
      tap(() => this.prepareForSearch()),
      switchMap(() => this.isShowAll ? this.orderService.getForPagination(this.searchQueryParams) : this.orderService.get(this.searchQueryParams)),
      map(orders => {
        if (!this.isShowAll) {
          this.countOrders = (orders as Orders).count;
        } else {
          this.countOrders = (orders as Order[]).length;
        }
        if (this.isStartOnePage) {
          this.paginator?.changePage(0);
        }

        this.isStartOnePage = false;
        return this.orderService.modifyOrders(this.isShowAll ? (orders as Order[]) : (orders as Orders).results);
      }),
      tap(orders => this.orders = orders),
      // tap(() => this.generateNomenclaturesListAndRootLists()),
      // tap(() => this.collectOrderedProductsTechnologies()),
      tap(() => {
        this.isLoading = false;
      }),
      untilDestroyed(this)
    ).subscribe();
  }

  modifyOrders() {
    // this.isShowAll = this.orders.length > 0;
    this.orders.forEach(order => {
      order.statuses.forEach((stat, index) => {
        stat.estimated_date = new Date(stat.estimated_date);
        if (order.dates.indexOf(stat.estimated_date) === -1) {
          this.dates.push(stat.estimated_date);
        }

        if (stat.is_active === false) {
          order.statuses.splice(index, 1);
        }
      });

      if (order.statuses.length > 0) {
        let start = order.statuses[0].estimated_date;

        let end = order.statuses[order.statuses.length - 1].estimated_date;
        let ins = start;
        order.dates.push(ins);
        while (ins < end) {
          ins = this.addDays(ins, 1);
          order.dates.push(ins);
        }
      }
    });

    this.renderDates();
  }

  renderDates(evt?) {
    const page = evt?.first;

    if (page >= 0) {
      this.changePage.next(page);
    }

    this.dates = [];

    let start = 0;
    let end = 9;
    if (evt) {
      this.first = evt.first;
      if (evt.first !== 0) {
        start = evt.first - 1;
        end = evt.first + 10 - 1;
      }
    }

    if (this.st) {
      if (this.st.filteredValue) {
        this.st.filteredValue.forEach((order, idx) => {
          if (idx >= start && idx <= end) {
            order.statuses.forEach(status => {
              status.estimated_date = new Date(status.estimated_date);
              this.dates.push(new Date(status.estimated_date));
            });
          }
        });
      } else {
        this.orders.forEach((order, idx) => {
          if (idx >= start && idx <= end) {
            order.statuses.forEach(status => {
              status.estimated_date = new Date(status.estimated_date);
              this.dates.push(new Date(status.estimated_date));
            });
          }
        });
      }
    }

    this.dates.sort((a, b) => a.getTime() - b.getTime());
    const endDate = this.dates[this.dates.length - 1];
    let ins = this.dates[0];

    const allDates = [];
    allDates.push(ins);

    while (ins < endDate) {
      ins = this.addDays(ins, 1);
      allDates.push(ins);
    }

    this.dates = allDates;
    let count = 0;
    this.orders.forEach(o => {
      o.statuses.forEach(s => {
        count++;
      });
    });

    console.log(this.orders);
  }

  addDays(date: string, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  getRootListsFilled(rootLists: ListProduct[]): { list: ListProduct, count?: number }[] {
    const lists: { list: ListProduct, count?: number }[] = [];
    rootLists.forEach((res: ListProduct) => {
      const found = lists.find(el => el.list.nomenclature.name === res.nomenclature.name);
      if (found) {
        found.count++;
      } else {
        lists.push({list: res, count: 1});
      }
    });
    return lists;
  }

  onSelectOrder() {
    this.selectOrder.emit(this.selectedOrder);
  }

  showAllDates() {
    this.dates = [];

    if (this.st.filteredValue) {
      this.st.filteredValue.forEach((order, idx) => {
        order.statuses.forEach(status => {
          this.dates.push(new Date(status.estimated_date));
        });
      });
    } else {
      this.orders.forEach((order, idx) => {
        order.statuses.forEach(status => {
          this.dates.push(new Date(status.estimated_date));
        });
      });
    }

    this.dates.sort((a, b) => a.getTime() - b.getTime());
    const endDate = this.dates[this.dates.length - 1];
    const startDate = this.dates[0];
    let ins = startDate;
    const allDates = [];
    allDates.push(ins);
    while (ins < endDate) {
      ins = this.addDays(ins, 1);
      allDates.push(ins);
    }
    this.dates = allDates;
  }

  onOpenChartInWindow() {
    if (!this.isPaginatedOutside) {
      localStorage.removeItem('queryParamsForInWindowView');
    }
    const orders = JSON.parse(JSON.stringify(this.orders));
    console.log(orders);
    this.orderService.openOrderStatusesChartWindow(orders);
  }

  public onShowAll(value: boolean) {
    console.log('onShowAll', value);
    this.isPaginated = value;
    // this.st.paginator = value;
    if (!value) {
      this.showAllDates();
    } else {
      this.renderDates({first: this.first});
    }
  }


  private prepareForSearch() {

  }
}

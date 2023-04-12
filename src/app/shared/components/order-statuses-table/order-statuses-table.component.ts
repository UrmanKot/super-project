import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ListProduct} from '../../../warehouse/models/list-product';
import {Order, Orders} from '../../../procurement/models/order';
import {Table} from 'primeng/table';
import {OrderService} from '../../../procurement/services/order.service';
import {QuerySearch} from '@shared/models/other';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, switchMap} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';
import {FormBuilder, FormGroup} from '@angular/forms';
import {deepCopy} from 'deep-copy-ts';
import {Nomenclature} from '@shared/models/nomenclature';
import {AdapterService} from '@shared/services/adapter.service';

@UntilDestroy()
@Component({
  selector: 'pek-order-statuses-table',
  templateUrl: './order-statuses-table.component.html',
  styleUrls: ['./order-statuses-table.component.scss']
})
export class OrderStatusesTableComponent implements OnInit, OnChanges {
  @ViewChild('paginator') paginator: Paginator;
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
  nomenclaturesList: Nomenclature[] = [];
  rootLists: any[] = [];
  dates: any = [];
  first = 0;

  isExpandChart = false;
  selectedOrder: Order;

  countOrders;
  isStartOnePage;

  query: QuerySearch[] = [];
  searchForm: FormGroup = this.fb.group({
    page: [1],
  });

  firstPage: number = 0;
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  constructor(
    private readonly orderService: OrderService,
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
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

  ngOnInit(): void {
    if (this.isChart) {
      setTimeout(() => {
        this.renderDates();
      }, 0);
    }



    if (this.searchQueryParams) {
      this.search$.pipe(
        tap(() => this.prepareForSearch()),
        switchMap(() => this.isShowAll ? this.orderService.getForPagination(this.query) : this.orderService.get(this.query)),
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
        tap(() => this.generateNomenclaturesListAndRootLists()),
        tap(() => this.collectOrderedProductsTechnologies()),
        tap(() => {
          this.isLoading = false;
          this.renderDates();
        }),
        untilDestroyed(this)
      ).subscribe();

      this.search$.next();
    }
  }

  generateNomenclaturesListAndRootLists() {
    this.orders.forEach(order => {
      if (order.activeStatusDate) {
        order.activeStatusDate = new Date(order.activeStatusDate);
      }

      order.order_products.forEach(orderProduct => {
        if (!this.nomenclaturesList.includes(orderProduct.nomenclature)) {
          this.nomenclaturesList.push(orderProduct.nomenclature);
        }
      });

      order.root_production_list_products.forEach(root => this.rootLists.push(root));

      this.rootLists = this.rootLists.map(root => {
        return {
          ...root,
          fullName: `(${root.id}) ${root.nomenclature.code}~${root.nomenclature.name}`
        };
      });
    });

    this.nomenclaturesList = this.adapterService.removeDuplicates(this.nomenclaturesList, x => x.id);
    this.rootLists = this.adapterService.removeDuplicates(this.rootLists, x => x.id);

    this.nomenclaturesList.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    this.rootLists.sort((a, b) => {
      if (a.fullName < b.fullName) return -1;
      if (a.fullName > b.fullName) return 1;
      return 0;
    });
  }

  collectOrderedProductsTechnologies() {
    this.orders.forEach(order => {
      order.ordered_products_unique_technologies = [];
      order.order_products?.forEach(product => {
        const needToAdd = order.ordered_products_unique_technologies.findIndex(tech => tech.id === product?.current_technology.id) < 0;
        if (needToAdd) {
          order.ordered_products_unique_technologies.push(product?.current_technology);
        }
      });
    });
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

  onShowAll(value: boolean) {
    this.isPaginated = value;
    if (!value) {
      this.showAllDates();
    } else {
      this.renderDates({first: this.first});
    }
  }

  private prepareForSearch() {
    this.isLoading = true;
    this.selectedOrder = null;
    this.orders = [];
    this.query = [];
    this.query = deepCopy(this.searchQueryParams);

    if (!this.isShowAll) {
      this.query.push(
        {name: 'paginated', value: true},
        {name: 'page', value: this.searchForm.get('page').value},
      );
    } else {
      this.searchForm.get('page').patchValue(1);
    }
    this.firstPage = 0;
    this.renderDates({first: 0});
    this.orders = this.orders.map(o => o);
  }

  onPage(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.search$.next();
    }
  }

  onShowPartialOnSelfPaginate() {
    this.isShowAll = false;
    this.search$.next();
  }

  onShowAllSelfPaginate() {
    this.isShowAll = true;
    this.search$.next();
  }
}

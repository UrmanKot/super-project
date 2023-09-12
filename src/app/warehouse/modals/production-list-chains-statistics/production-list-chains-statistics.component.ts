import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  ProductionListAccountingType,
  ProductionListPositionType
} from '../../components/production-lists/production-lists.component';
import {ListService} from '../../services/list.service';
import {tap} from 'rxjs/operators';
import {Order} from '../../../procurement/models/order';
import {environment} from '@env/environment';
import {Table} from 'primeng/table';

export class OrderedProductInfo {
  code: string;
  name: string;
  created: Date;
  latest_order_status_date: string;
  ordered_quantity: number;
  technology: string;
  order: {
    id: string;
    accounting_type: number;
  }
  orders: {
    id: string;
    accounting_type: number;
  }[];
  children?: OrderedProductInfo[];
}

@Component({
  selector: 'pek-production-list-chains-statistics',
  templateUrl: './production-list-chains-statistics.component.html',
  styleUrls: ['./production-list-chains-statistics.component.scss']
})
export class ProductionListChainsStatisticsComponent implements OnInit {
  isLoading = true;
  accountingType: string;
  positionType: string;

  link = environment.link_url + 'dash/';

  orders: OrderedProductInfo[] = [];
  isShowAll: boolean;

  constructor(
    private dialogRef: MatDialogRef<ProductionListChainsStatisticsComponent>,
    private readonly listService: ListService,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number,
      send: {
        accounting_type: ProductionListAccountingType,
        positions_type: ProductionListPositionType
      }
    },
  ) {
  }

  ngOnInit(): void {
    this.getAccountingType();
    this.getPositionType();
    this.getStatistics();
  }

  getStatistics() {
    if (this.data.send.accounting_type === 'purchased') {
      delete this.data.send.positions_type;
    }
    this.listService.getChainsStatisticsForProductionList(this.data.id, this.data.send).pipe(
      tap((orders: OrderedProductInfo[]) => {
        orders.forEach(order => {
          const isInList = this.orders.findIndex(el => el.code.trim() === order.code.trim() &&
                                                 el.technology?.trim() === order.technology?.trim()) > -1;
          if (!isInList) {
            order.ordered_quantity = orders.filter(p => p.code.trim() === order.code.trim() &&
              p.technology?.trim() === order.technology?.trim()).reduce((sum, p) => sum + p.ordered_quantity, 0);
            order.orders = orders.filter(p => p.code.trim() === order.code.trim() &&
              p.technology?.trim() === order.technology?.trim()).map(el => el.order);
            order.orders = order.orders.filter(this.onlyUniqueById);
            this.orders.push(order);
          }
        });
        this.orders = [...this.orders];
      }),
      tap(() => this.isLoading = false)
    ).subscribe();
  }

  onlyUniqueById(value, index, self) {
    return self.findIndex(innerValue => innerValue?.id === value?.id) === index;
  }

  getPositionType() {
    switch (this.data.send.positions_type) {
      case 'assembly':
        this.positionType = 'Assembly';
        break;
      case 'not assembly':
        this.positionType = 'Items';
        break;
    }
  }

  getAccountingType() {
    switch (this.data.send.accounting_type) {
      case 'outsource':
        this.accountingType = 'Outsource';
        break;
      case 'purchased':
        this.accountingType = 'Purchased';
        break;
      case 'own':
        this.accountingType = 'Own Production';
        break;
    }
  }

  goToOrder(order: Partial<Order>) {
    let link: string;

    switch (order.accounting_type) {
      case 1:
        link = '/procurement/chains/order/' + order.id;
        break;
      case 2:
        link = '/outsourcing/chains/order/' + order.id;
        break;
      case 3:
        link = `/manufacturing/orders/order/` + order.id;
        break;
    }

    window.open(link, '_blank')
  }

  paginate($event: any, table: Table) {
    console.log('event', $event);
    console.log('table', table);
  }

  onShowAll() {
    this.isShowAll = true;
  }

  onShowPartial() {
    this.isShowAll = false;
  }
}

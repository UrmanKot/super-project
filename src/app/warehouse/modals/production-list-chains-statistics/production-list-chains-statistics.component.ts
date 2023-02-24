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

  orders: any[] = [];

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
      tap(orders => this.orders = orders),
      tap(() => this.isLoading = false)
    ).subscribe();
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
      case 0:
        link = '/outsourcing/chains/order/' + order.id;
        break;
      case 1:
        link = '/procurement/chains/order/' + order.id;
        break;
      case 2:
        link = `${this.link}production/orders/order/8501` + order.id;
        break;
    }

    window.open(link, '_blank')
  }
}

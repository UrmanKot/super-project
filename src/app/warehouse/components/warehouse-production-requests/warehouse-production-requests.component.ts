import { Component, OnInit } from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {OrderService} from '../../../procurement/services/order.service';
import {QuerySearch} from '@shared/models/other';
import {ViewMode} from '../production-lists/production-lists.component';

@Component({
  selector: 'pek-warehouse-production-requests',
  templateUrl: './warehouse-production-requests.component.html',
  styleUrls: ['./warehouse-production-requests.component.scss']
})
export class WarehouseProductionRequestsComponent implements OnInit {
  viewModeType = ViewMode;
  viewMode: ViewMode = ViewMode.LIST;

  isLoading = true;
  orders: Order[] = [];
  selectedOrder: Order;

  query: QuerySearch[] = [
    {name: 'accounting_type__in', value: '2,3'},
    {name: 'is_prepared', value: false}
  ];

  constructor(
    private readonly orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.get(this.query).subscribe(orders => {
      this.orders = orders;
      this.isLoading = false;
    })
  }

  showProductionLists(plans: any[]): void {
  }

  getRootLists(rootLists: any[]): { list: any, count?: number }[] {
    const lists: { list: any, count?: number }[] = [];

    if (rootLists) {
      rootLists.forEach((res: any) => {
        if (res) {
          const found = lists.find(el => el.list.root_nomenclature?.id === res.root_nomenclature?.id);
          if (found) {
            found.count++;
          } else {
            lists.push({list: res, count: 1});
          }
        }
      });
    }
    return lists;
  }

  onChoiceViewType(mode: ViewMode) {
    this.viewMode = mode;
    this.selectedOrder = null;
  }
}

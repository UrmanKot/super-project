import { Component, OnInit } from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {OrderService} from '../../../procurement/services/order.service';
import {QuerySearch} from '@shared/models/other';
import {ViewMode} from '../production-lists/production-lists.component';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'pek-warehouse-production-requests',
  templateUrl: './warehouse-production-requests.component.html',
  styleUrls: ['./warehouse-production-requests.component.scss']
})
export class WarehouseProductionRequestsComponent implements OnInit {
  viewModeType = ViewMode;
  viewMode: ViewMode = ViewMode.LIST;

  isShowAll = false;

  tableScrollHeight = '29.625rem';
  isHideFilters = false;

  isLoading = true;
  orders: Order[] = [];
  selectedOrder: Order;

  query: QuerySearch[] = [
    {name: 'accounting_type__in', value: '2,3'},
    {name: 'is_prepared', value: false}
  ];

  searchForm: FormGroup = this.fb.group({
    created_after: [null],
    created_before: [null],
    production_requests_fully_completed_after: [null],
    production_requests_fully_completed_before: [null],
    category__in: [null],
    root_categories: [null],
    accounting_type: null,
    is_production_requests_fully_completed: null,
  });

  constructor(
    private readonly orderService: OrderService,
    private readonly fb: FormBuilder,
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

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.875rem';
      return;
    }

    if (this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '18.75rem';
      return;
    }

    if (!this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '27.5rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '29.625rem';
      return;
    }
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;

    this.setTableScrollHeight();
  }
}

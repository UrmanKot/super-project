import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../../procurement/models/order';
// import {ListProduct} from '../../../warehouse/models/list-product';
import {OrderService} from '../../../procurement/services/order.service';
import { DeliveryChainService } from '@shared/services/delivery.service';
import {QuerySearch} from '@shared/models/other';
import {ViewMode} from '../production-lists/production-lists.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {EAccountingType} from '@shared/pickers/accounting-type-picker/accounting-type-picker.component';
import {Paginator} from 'primeng/paginator';
import {AdapterService} from '@shared/services/adapter.service';
import {environment} from '@env/environment';
import {
  logExperimentalWarnings
} from '@angular-devkit/build-angular/src/builders/browser-esbuild/experimental-warnings';

class ProductRequestListOrder extends Order {
  ordered_items_technologies?: string[];
}

@Component({
  selector: 'pek-warehouse-delivery-requests',
  templateUrl: './warehouse-delivery-requests.component.html',
  styleUrls: ['./warehouse-delivery-requests.component.scss']
})
export class WarehouseDeliveryRequestsComponent implements OnInit, OnDestroy {
  link = environment.link_url + 'dash/';

  @ViewChild('paginator') paginator: Paginator;

  viewModeType = ViewMode;
  viewMode: ViewMode = ViewMode.LIST;

  isShowAll = false;
  isStartOnePage = false;
  count = 0;

  rootLists: any[] = [];

  tableScrollHeight = '29.625rem';
  isHideFilters = false;

  isLoadingOrders = true;
  isLoadingChains = true;

  orders: ProductRequestListOrder[] = [];
  deliveryChains: any[] = [];
  selectedOrder: ProductRequestListOrder;
  selectedDeliveryChain: any;

  searchForm: FormGroup = this.fb.group({
    page: 1,
    created_after: [null],
    created_before: [null],
    closing_date_after: [null],
    closing_date_before: [null],
    category__in: [null],
    root_categories: [null],
    accounting_type: [null],
    is_closed: [false],
    is_production_requests_fully_completed: [null],
  });

  queryKey = 'created_after:null/created_before:null/closing_date_after:null/closing_date_before:null/category__in:null/root_categories:null/accounting_type:null/is_production_requests_fully_completed:null';

  query: QuerySearch[] = [
    {name: 'accounting_type__in', value: '2'},
    {name: 'is_prepared', value: false},
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value}
  ];

  requestsTypes = [
    {name: 'Open Requests', value: false},
    {name: 'Closed Requests', value: true},
  ];

  private destroy$ = new Subject();

  constructor(
    private readonly orderService: OrderService,
    private deliveryService: DeliveryChainService,
    private readonly fb: FormBuilder,
    private adapterService: AdapterService,
  ) {
  }

  ngOnInit(): void {
    this.getDeviveryChainsForPagination();
    this.getOrdersForPagination();
  }

  getDeviveryChainsForPagination() {
    this.deliveryService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(deliveryChains => {
      this.count = deliveryChains.count;
      this.deliveryChains = deliveryChains.results;
      this.prepareOrderItems();

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoadingChains = false;
    });
  }

  getOrdersForPagination() {
    this.orderService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(orders => {
      this.count = orders.count;
      this.orders = orders.results;
      this.prepareOrderItems();

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoadingOrders = false;
    });
  }

  getOrders() {
    this.orderService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(orders => {
      this.count = orders.length;
      this.orders = orders;

      this.prepareOrderItems();

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;

      this.isLoadingOrders = false;
    });
  }

  prepareOrderItems() {
    this.orders.forEach(order => {
      order.ordered_items_technologies = [];
      order.order_products.forEach(product => {
        if (product.current_technology) {
          const canAddTechnology = order.ordered_items_technologies
            .findIndex(el => el === product.current_technology.name) < 0;
          if (canAddTechnology) {
            order.ordered_items_technologies.push(product.current_technology.name);
          }
        }
      });

      order.root_production_plans.forEach(plan => {
        if (order.root_production_plans_display) {
          const index = order.root_production_plans_display.findIndex(el =>
            el.root_list.list_product.nomenclature.id === plan.list_product.nomenclature.id);
          if (index >= 0) {
            order.root_production_plans_display[index].list.push(plan);
          } else {
            order.root_production_plans_display.push({root_list: plan, list: [plan]});
          }
        } else {
          order.root_production_plans_display = [
            {root_list: plan, list: [plan]}
          ];
        }
      });
    });
  }

  searchProducts() {
    this.isLoadingOrders = true;
    this.isLoadingChains = true;
    this.destroy$.next(true);
    this.selectedOrder = null;

    const newQueryKey = `created_after:${this.searchForm.get('created_after').value}/created_before:${this.searchForm.get('created_before').value}/closing_date_after:${this.searchForm.get('closing_date_after').value}/closing_date_before:${this.searchForm.get('closing_date_before').value}/category__in:${this.searchForm.get('category__in').value}/root_categories:${this.searchForm.get('root_categories').value}/accounting_type:${this.searchForm.get('accounting_type').value}/is_production_requests_fully_completed:${this.searchForm.get('is_production_requests_fully_completed').value}`;

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [
      {name: 'accounting_type__in', value: '2'},
      {name: 'is_prepared', value: false},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: 'true'});
      this.query.push({name: 'page', value: this.searchForm.get('page').value});
    }

    if (this.searchForm.get('accounting_type').value !== null) {
      this.query.push({name: 'accounting_type', value: this.searchForm.get('accounting_type').value});
    }

    if (this.searchForm.get('is_closed').value === false) {
      this.query.push({name: 'is_prepared', value: false});
    } else {
      this.query.push({name: 'is_prepared', value: true});
    }

    if (this.searchForm.get('category__in').value) {
      this.query.push({name: 'category__in', value: this.searchForm.get('category__in').value});
    }

    if (this.searchForm.get('root_categories').value) {
      this.query.push({name: 'root_categories', value: this.searchForm.get('root_categories').value});
    }

    if (this.searchForm.get('root_categories').value) {
      this.query.push({name: 'root_categories', value: this.searchForm.get('root_categories').value});
    }

    if (this.searchForm.get('root_categories').value) {
      this.query.push({name: 'root_categories', value: this.searchForm.get('root_categories').value});
    }

    if (this.searchForm.get('created_after').value) {
      this.query.push({
        name: 'created_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('created_after').value)
      });
    }

    if (this.searchForm.get('created_before').value) {
      this.query.push({
        name: 'created_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('created_before').value)
      });
    }

    if (this.searchForm.get('closing_date_after').value) {
      this.query.push({
        name: 'closing_date_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('closing_date_after').value)
      });
      this.query.push({name: 'is_prepared', value: true});
    }

    if (this.searchForm.get('closing_date_before').value) {
      this.query.push({
        name: 'closing_date_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('closing_date_before').value)
      });
      this.query.push({name: 'is_prepared', value: true});
    }

    if (!this.isShowAll) {
      this.getOrdersForPagination();
      this.getDeviveryChainsForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getOrders();
    }
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

  onChoiceAccountingType(value: EAccountingType) {
    this.searchForm.get('accounting_type').patchValue(value);
    this.searchProducts();
  }

  onChoiceCategories(ids: string) {
    this.searchForm.get('category__in').patchValue(ids);
    this.searchProducts();
  }

  onChoiceProductStructureCategories(ids: string) {
    this.searchForm.get('root_categories').patchValue(ids);
    this.searchProducts();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchProducts();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.setTableScrollHeight();
    this.searchProducts();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.setTableScrollHeight();
    this.searchProducts();
  }

  goProductionList(id: number) {
    const link = `/manufacturing/plans/plan/${id}`;
    window.open(link, '_blank');
  }

  onGoToDeliveryChainLink(deliveryChainId: number) {
    window.open(`/delivery-chains/chains/${deliveryChainId}`);
  }

  onGoToSalesChainLink(salesChainId: number) {
    window.open(`/sales/sales-procurement-chains/chain-page/${salesChainId}`);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

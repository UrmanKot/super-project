import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {OrderService} from '../../../procurement/services/order.service';
import {QuerySearch} from '@shared/models/other';
import {ViewMode} from '../production-lists/production-lists.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {EAccountingType} from '@shared/pickers/accounting-type-picker/accounting-type-picker.component';
import {Paginator} from 'primeng/paginator';
import {AdapterService} from '@shared/services/adapter.service';
import {environment} from '@env/environment.prod';

@Component({
  selector: 'pek-warehouse-production-requests',
  templateUrl: './warehouse-production-requests.component.html',
  styleUrls: ['./warehouse-production-requests.component.scss']
})
export class WarehouseProductionRequestsComponent implements OnInit, OnDestroy {
  link = environment.link_url + 'dash/';

  @ViewChild('paginator') paginator: Paginator;

  viewModeType = ViewMode;
  viewMode: ViewMode = ViewMode.LIST;

  isShowAll = false;
  isStartOnePage = false;
  count = 0;

  tableScrollHeight = '29.625rem';
  isHideFilters = false;

  isLoading = true;
  orders: Order[] = [];
  selectedOrder: Order;

  searchForm: FormGroup = this.fb.group({
    page: 1,
    created_after: [null],
    created_before: [null],
    category__in: [null],
    root_categories: [null],
    accounting_type: [null],
    is_production_requests_fully_completed: [null],
  });

  queryKey = 'created_after:null/created_before:null/category__in:null/root_categories:null/accounting_type:null/is_production_requests_fully_completed:null'

  query: QuerySearch[] = [
    {name: 'accounting_type__in', value: '2,3'},
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
    private readonly fb: FormBuilder,
    private adapterService: AdapterService,
  ) {
  }

  ngOnInit(): void {
    this.getOrdersForPagination();
  }

  getOrdersForPagination() {
    this.orderService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(orders => {
      this.count = orders.count;
      this.orders = orders.results;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  getOrders() {
    this.orderService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(orders => {
      this.orders = orders;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;

      this.isLoading = false;
    });
  }

  searchProducts() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.selectedOrder = null;

    const newQueryKey = `created_after:${this.searchForm.get('created_after').value}/created_before:${this.searchForm.get('created_before').value}/category__in:${this.searchForm.get('category__in').value}/root_categories:${this.searchForm.get('root_categories').value}/accounting_type:${this.searchForm.get('accounting_type').value}/is_production_requests_fully_completed:${this.searchForm.get('is_production_requests_fully_completed').value}`;

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [
      {name: 'accounting_type__in', value: '2,3'},
      {name: 'is_prepared', value: false},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: 'true'})
      this.query.push({name: 'page', value: this.searchForm.get('page').value})
    }

    if (this.searchForm.get('accounting_type').value !== null) {
      this.query.push({name: 'accounting_type', value: this.searchForm.get('accounting_type').value});
    }

    if (this.searchForm.get('category__in').value) {
      this.query.push({name: 'category__in', value: this.searchForm.get('category__in').value});
    }

    if (this.searchForm.get('is_production_requests_fully_completed').value !== null) {
      this.query.push({
        name: 'is_production_requests_fully_completed',
        value: this.searchForm.get('is_production_requests_fully_completed').value
      });
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

    if (!this.isShowAll) {
      console.log(this.query);
      this.getOrdersForPagination();
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
    const link = `${this.link}production/plan/tasks/${id}`;
    window.open(link, '_blank')
  }


  onGoProd(id: number) {
    window.open(`${this.link}production/plan/tasks/` + id, '_blank');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

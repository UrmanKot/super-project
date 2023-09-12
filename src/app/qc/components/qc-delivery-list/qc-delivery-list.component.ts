import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Invoice} from '../../../procurement/models/invoice';
import {TreeNode} from 'primeng/api';
import {Order} from '../../../procurement/models/order';
import {DeliveryChainService} from '@shared/services/delivery.service';
import {OrderService} from '../../../procurement/services/order.service';
import {ProductStructureCategoryService} from '../../../product-structure/services/product-structure-category.service';
import {Category} from '../../../product-structure/models/category';
import {AdapterService} from '@shared/services/adapter.service';
import {QcDeliveryStatus} from '../../../procurement/models/qc-delivery-status';
import {QcDeliveryStatusService} from '../../../procurement/services/qc-delivery-status.service';
import {BehaviorSubject, Subject, takeUntil} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import * as cloneDeep from 'lodash/cloneDeep';
import {environment} from '@env/environment';
import {DeliveryChain} from "../../../delivery-chains/models/delivery-chain";

type ViewType = 'list' | 'hierarchy'

@Component({
  selector: 'pek-qc-delivery-list',
  templateUrl: './qc-delivery-list.component.html',
  styleUrls: ['./qc-delivery-list.component.scss']
})
export class QcDeliveryListComponent implements OnInit {
  @Output() selectedQcDeliveryStatuses: EventEmitter<number[]> = new EventEmitter<number[]>();
  orders: Order[];
  deliveryChains: DeliveryChain[] = [];
  qcDeliveryStatus: QcDeliveryStatus[];
  link = environment.link_url + 'dash/';

  statusesIds: any;

  selectedOrderNode: TreeNode<Order>;

  invoicesOrderType: ViewType = 'list';

  isLoadingOrders = true;
  isLoadingChains = true;
  isLoadingStatuses = true;

  showClosedOrders = false;
  showClosedChains = false;

  ordersList: Order[] = [];
  deliveryChainsList: DeliveryChain[] = [];

  selectedOrderItem: Order;
  selectedDeliveryChain: DeliveryChain;

  expanseMap = {};

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  private destroyOrders$ = new Subject();
  private destroyChains$ = new Subject();
  private destroyQcDeliveryStatuses$ = new Subject();

  ordersQuery: QuerySearch[] = [
    {name: 'needs_delivery_qc', value: true},
    {name: 'by_qc_module_permission', value: true}
  ];

  chainsQuery: QuerySearch[] = [
    {name: 'needs_delivery_qc', value: true},
    {name: 'by_qc_module_permission', value: true}
  ];

  searchForm: FormGroup = this.fb.group({
    supplier: [null],
    qc_closed_date_after: [null],
    qc_closed_date_before: [null],
    qc_delivery_started_date_after: [null],
    qc_delivery_started_date_before: [null],
    qc_delivery_closed_date_after: [null],
    qc_delivery_closed_date_before: [null],
    accounting_type: [null],
    material_or_service: [null],
    purchase_categories: [null],
    qc_delivery_status: [null],
    qc_delivery_status__in: [null],
  });
  isLoading: boolean;

  constructor(
    private deliveryService: DeliveryChainService,
    private orderService: OrderService,
    private productStructureCategoryService: ProductStructureCategoryService,
    private adapterService: AdapterService,
    private qcDeliveryStatusService: QcDeliveryStatusService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.getQcDeliveryStatuses();
    this.getDeliveryChains();
    this.getServices();

  }

  searchItems() {
    this.searchChains();
    this.searchServices();
  }

  searchChains() {
    this.isLoadingOrders = true;
    this.destroyOrders$.next(true);
    this.orders = [];
    this.selectedOrderItem = null;
    this.chainsQuery = [
      {name: 'by_qc_module_permission', value: true}
    ];

    if (!this.searchForm.get('qc_delivery_closed_date_after').value
        && !this.searchForm.get('qc_delivery_closed_date_before').value) {
      this.chainsQuery.push({
        name: 'needs_delivery_qc', value: true
      })
      this.showClosedChains = false;
    } else {
      this.showClosedChains = true;
    }

    if (this.searchForm.get('qc_delivery_started_date_after').value) {
      this.chainsQuery.push({
        name: 'qc_delivery_started_date_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_started_date_after').value)
      });
    }

    if (this.searchForm.get('qc_delivery_started_date_before').value) {
      this.chainsQuery.push({
        name: 'qc_delivery_started_date_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_started_date_before').value)
      });
    }

    if (this.searchForm.get('qc_delivery_closed_date_after').value) {
      this.chainsQuery.push({
        name: 'qc_delivery_closed_date_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_closed_date_after').value)
      });
    }

    if (this.searchForm.get('qc_delivery_closed_date_before').value) {
      this.chainsQuery.push({
        name: 'qc_delivery_closed_date_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_closed_date_before').value)
      });
    }

    if (this.searchForm.get('qc_delivery_status__in').value) {
      this.chainsQuery.push({
        name: 'qc_delivery_status__in',
        value: this.searchForm.get('qc_delivery_status__in').value
      });
    }
    this.getDeliveryChains();
  }

  searchServices() {
    this.isLoadingOrders = true;
    this.destroyOrders$.next(true);
    this.orders = [];
    this.selectedOrderItem = null;
    this.ordersQuery = [
      {name: 'by_qc_module_permission', value: true}
    ];

    if (!this.searchForm.get('qc_delivery_closed_date_after').value
        && !this.searchForm.get('qc_delivery_closed_date_before').value) {
      this.ordersQuery.push({
        name: 'needs_delivery_qc', value: true
      })
      this.showClosedOrders = false;
    } else {
      this.showClosedOrders = true;
    }

    if (this.searchForm.get('qc_delivery_started_date_after').value) {
      this.ordersQuery.push({
        name: 'qc_delivery_started_date_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_started_date_after').value)
      });
    }

    if (this.searchForm.get('qc_delivery_started_date_before').value) {
      this.ordersQuery.push({
        name: 'qc_delivery_started_date_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_started_date_before').value)
      });
    }

    if (this.searchForm.get('qc_delivery_closed_date_after').value) {
      this.ordersQuery.push({
        name: 'qc_delivery_closed_date_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_closed_date_after').value)
      });
    }

    if (this.searchForm.get('qc_delivery_closed_date_before').value) {
      this.ordersQuery.push({
        name: 'qc_delivery_closed_date_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('qc_delivery_closed_date_before').value)
      });
    }

    if (this.searchForm.get('qc_delivery_status__in').value) {
      this.ordersQuery.push({
        name: 'qc_delivery_status__in',
        value: this.searchForm.get('qc_delivery_status__in').value
      });
    }

    this.getServices();
  }

  onChoiceQcDeliveryStatuses(statuses: number[]) {
    this.searchForm.get('qc_delivery_status__in').patchValue(statuses?.join(',') || null);
    this.searchItems();
  }

  getQcDeliveryStatuses() {
    this.qcDeliveryStatusService.get().pipe(
      takeUntil(this.destroyQcDeliveryStatuses$)
    ).subscribe(qcDeliveryStatus => {
      this.qcDeliveryStatus = qcDeliveryStatus;
      this.isLoadingStatuses = false;
    });
  }

  getDeliveryChains(): void {
    this.deliveryService.get(this.chainsQuery).pipe(
      takeUntil(this.destroyChains$)
    ).subscribe(chains => {
      // this.count = orders.length;
      this.deliveryChains = chains;

      // this.prepareOrderItems();

      // if (this.isStartOnePage) {
      //   this.paginator?.changePage(0);
      // }

      // this.isStartOnePage = false;
      this.resetChainsList(),

      this.isLoadingChains = false;
    });
  }

  getServices(): void {
    this.orderService.get(this.ordersQuery).pipe(
      takeUntil(this.destroyOrders$)
    ).subscribe(orders => {
      this.orders = orders;
      this.makeUniqueProductionPlans(),
      // this.fillOwnProductionWithData(),
      this.resetOrdersList(),
      this.isLoadingOrders = false

      this.orders.forEach(order => {
        order.ordered_products_unique_technologies = [];
        order.order_products.forEach(product => {
          if (product.current_technology) {
            const canAddTechnology = order.ordered_products_unique_technologies
              .findIndex(el => el === product.current_technology.name) < 0;
            if (canAddTechnology) {
              order.ordered_products_unique_technologies.push(product.current_technology.name);
            }
          }
        });
      })

    });
  }

  resetOrdersList(): void {
    this.ordersList = this.orders;
  }

  resetChainsList(): void {
    this.deliveryChainsList = this.deliveryChains;
  }

  makeUniqueProductionPlans(): void {
    this.orders.forEach(order => {
      order.unique_root_production_plans = [];
      order.root_production_plans.forEach(plan => {
        if (plan.root_nomenclature) {
          const nomenclatureId = plan.root_nomenclature.id;
          const existingIndex =
            order.unique_root_production_plans
              .findIndex(unPlan => unPlan.root_nomenclature.id === nomenclatureId);

          if (existingIndex < 0) {
            order.unique_root_production_plans.push(plan);
          }
        }
      });
    });
  }

  onSelectOrderType(view: ViewType) {
    this.invoicesOrderType = view;
  }

  onGoToDeliveryChainLink(deliveryChainId: number) {
    window.open(`/delivery-chains/chains/${deliveryChainId}`);
  }

  onGoToSalesChainLink(salesChainId: number) {
    window.open(`/sales/sales-procurement-chains/chain-page/${salesChainId}`);
  }
}

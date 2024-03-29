import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Order, Orders} from '../../../procurement/models/order';
import {Nomenclature} from '@shared/models/nomenclature';
import {QuerySearch} from '@shared/models/other';
import {OrderService} from '../../../procurement/services/order.service';
import {Router} from '@angular/router';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {ListProduct} from '../../../warehouse/models/list-product';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, switchMap} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {MenuItem} from 'primeng/api';
import {OrderStatusesTableComponent} from '@shared/components/order-statuses-table/order-statuses-table.component';
import {Table} from 'primeng/table';
import {Paginator} from 'primeng/paginator';
import {deepCopy} from 'deep-copy-ts';

@UntilDestroy()
@Component({
  selector: 'pek-outsourcing-chains',
  templateUrl: './outsourcing-chains.component.html',
  styleUrls: ['./outsourcing-chains.component.scss']
})
export class OutsourcingChainsComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('orderTable') orderTable: OrderStatusesTableComponent;
  @ViewChild('dt') dt: Table;
  @ViewChild(OrderStatusesTableComponent)
  orderStatusTableComponent: OrderStatusesTableComponent;
  firstPage: number = 0;
  isCreating = false;

  isShowStatuses = false;

  menuItems: MenuItem[] = [{
    label: 'Selected Chain',
    items: [
      {
        label: 'Open Chain',
        icon: 'pi pi-pencil',
        command: () => this.onGoToOderPage()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveChain()
      }
    ]
  }];

  finalStatusSelected = false;


  searchForm: FormGroup = this.fb.group({
    contains_nomenclature: [null],
    supplier: [null],
    order_root_list_id: [null],
    active_status__in: [null],
    created_after: [null],
    created_before: [null],
    contains_declined_payment: [null],
    contains_nomenclature_name: [null],
    page: [1],
    contains_nomenclature_code: [null],
    id: [null],
  });

  orders: Order[] = [];
  selectedOrder: Order;

  isLoading = false;
  isHideFilters = false;

  nomenclaturesList: Nomenclature[] = [];
  rootLists: any[] = [];
  productionPlanLinkBase = "/manufacturing/plans/plan/";

  query: QuerySearch[] = [];
  queryProdList: QuerySearch[] = [];
  queryNomenclatureList: QuerySearch[] = [];
  tableScrollHeight = '29.625rem';

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  isShowAll = false;
  isStartOnePage = false;
  countOrders: any;

  loadedIdsQuery: QuerySearch[];

  isRootListShown: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly orderService: OrderService,
    private readonly router: Router,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.search$.pipe(
      tap(() => this.prepareForSearch()),
      tap(() => this.getOrdersIds()),
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
        let fetchedOrders = this.isShowAll ? (orders as Order[]) : (orders as Orders).results;
        fetchedOrders.forEach(order => {
          order.uniqueOrderProducts = [];

          order.order_products.forEach(product => {
            const existingInList = order.uniqueOrderProducts.find(unProduct =>
              unProduct.current_technology === product.current_technology &&
              unProduct.nomenclature.id === product.nomenclature.id);

            if (!existingInList) {
              order.uniqueOrderProducts.push(product);
            }
          });

          order.root_production_list_products.forEach((root) => {

            order.root_production_plans.forEach((plan: any) => {
              if (plan.list_product.id == root.id) {
                root.productionPlanId = plan.id;
              }
            });
            this.rootLists.push(root);
          });

          const lists: { list: ListProduct, count?: number, allLists: ListProduct[] }[] = [];
          order.root_production_list_products.forEach((res: ListProduct) => {
            const found = lists.find(el => el.list.nomenclature.name === res.nomenclature.name);
            if (found) {
              found.count++;
              found.allLists.push(res);
            } else {
              lists.push({list: res, count: 1, allLists: [res]});
            }
          });
          order.display_production_list_products = lists;
        });
        this.isStartOnePage = false;
        return this.orderService.modifyOrders(fetchedOrders);
      }),
      tap(orders => this.orders = orders),
      tap(() => this.generateNomenclaturesListAndRootLists()),
      tap(() => this.collectOrderedProductsTechnologies()),
      tap(() => {
        this.isLoading = false;

      }),
      untilDestroyed(this)
    ).subscribe(() => {
    });

    this.prepareForSearch();
    this.getOrdersIds();
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

      order.root_production_list_products.forEach((root) => {

        order.root_production_plans.forEach((plan: any) => {
          if (plan.list_product.id == root.id) {
            root.productionPlanId = plan.id
          }
        })
        this.rootLists.push(root);
      });

      order.root_lists_display = this.getRootLists(order.root_production_list_products);

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

  getRootLists(rootLists: ListProduct[]): { root_list: ListProduct, list: ListProduct[], count: number, total_quantity: number }[] {
    const lists: { root_list: ListProduct, list: ListProduct[], count: number, total_quantity: number }[] = [];
    rootLists.forEach((res: ListProduct) => {
      const index = lists.findIndex(el => el.root_list.nomenclature.name === res.nomenclature.name);
      if (index >= 0) {
        lists[index].list.push(res);
        lists[index].count++;
        lists[index].total_quantity += res.required_quantity;

      } else {
        lists.push({root_list: res, list: [res], count: 1, total_quantity: res.required_quantity });
      }
    });
    return lists;
  }

  private onGoToOderPage() {
    window.open('/outsourcing/chains/order/' + this.selectedOrder?.id, '_blank');
  }

  onRemoveChain() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.orderService.delete(this.selectedOrder.id).subscribe(() => {
          this.orders = this.orders.filter(x => x.id !== this.selectedOrder.id);
          this.selectedOrder = null;

          setTimeout(() => {
            this.orderStatusTableComponent?.renderDates({first: this.firstPage});
          });
        });
      }
    });
  }

  onCreateChain() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isCreating = true;
        this.orderService.create({accounting_type: 2, can_select_supplier: true}).subscribe(order => {
          this.isCreating = false;
          this.router.navigate(['/outsourcing/chains/order/', order.id]);
        });
      }
    });
  }

  private prepareForSearch() {
    this.isLoading = true;
    this.selectedOrder = null;
    this.orders = [];

    this.query = [
      {name: 'accounting_type', value: 2},
    ];

    if (this.searchForm.get('id').value) {
      this.query.push(
        {name: 'exclude_with_active_final_status', value: false}
      );
    } else {
      this.query.push(
        {name: 'exclude_with_active_final_status', value: !this.finalStatusSelected}
      );
    }

    if (!this.isShowAll) {
      this.query.push(
        {name: 'paginated', value: true}
      );
    } else {
      this.searchForm.get('page').patchValue(1);
    }


    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null) {

        if (this.searchForm.controls[key].value instanceof Date) {
          this.query.push({
            name: key,
            value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
          });
        } else {
          this.query.push({
            name: key,
            value: this.searchForm.controls[key].value
          });
        }
      }
    }
    const queryToLocalStorage = deepCopy(this.query);
    const pagePosIndex = this.query.findIndex(el => el.name === 'page');
    const paginatedPosIndex = this.query.findIndex(el => el.name === 'paginated');
    if (pagePosIndex >= 0) {
      queryToLocalStorage.splice(pagePosIndex, 1);
    }
    if (paginatedPosIndex >= 0) {
      queryToLocalStorage.splice(paginatedPosIndex, 1);
    }

    localStorage.setItem('queryParamsForInWindowView', JSON.stringify(queryToLocalStorage));
    this.firstPage = 0;
    this.orderStatusTableComponent?.renderDates({first: 0});
    this.orders = this.orders.map(o => o);
  }

  getOrdersIds() {
    const tempQuery = deepCopy(this.query);

    const listIndex = tempQuery.findIndex(el => el.name === 'order_root_list_id');
    if (listIndex >= 0) {
      tempQuery.splice(listIndex, 1);
    }
    const nomenclatureIndex = tempQuery.findIndex(el => el.name === 'contains_nomenclature');
    if (nomenclatureIndex >= 0) {
      tempQuery.splice(nomenclatureIndex, 1);
    }
    const pageIndex = tempQuery.findIndex(el => el.name === 'page');
    if (pageIndex >= 0) {
      tempQuery.splice(pageIndex, 1);
    }

    if (JSON.stringify(this.loadedIdsQuery) !== JSON.stringify(tempQuery)) {
      this.loadedIdsQuery = tempQuery;
      return this.orderService.getFilteredOrderIds(tempQuery).subscribe(orderIds => {
        if (orderIds.ids.length > 0) {
          this.queryProdList = [
            {
              name: 'level',
              value: 0,
            },
            {
              name: 'order_accounting_type',
              value: 2
            },
            {
              name: 'order_id__in',
              value: orderIds.ids
            }
          ];
          this.queryNomenclatureList = [
            {
              name: 'order_accounting_type',
              value: 2
            },
            {
              name: 'order_id__in',
              value: orderIds.ids
            }
          ];
        }
      });
    }
  }

  onSelectCompany(id: number) {
    this.resetPage();
    this.searchForm.get('supplier').patchValue(id);
    this.search$.next();
  }

  onSelectStatuses(ids: number[]) {
    this.resetPage();
    this.searchForm.get('active_status__in').patchValue(ids?.join(',') || null);
    this.search$.next();
  }

  onToggleStatuses() {
    this.isShowStatuses = !this.isShowStatuses;
  }

  onChangePage(page: number) {
    this.firstPage = page;
  }

  onPage(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.search$.next();
    }
  }

  onSelectOrder() {
    this.orderStatusTableComponent.selectedOrder = this.selectedOrder;
  }

  onSelectionOrder(order: Order) {
    this.selectedOrder = order;
  }

  onShowAll() {
    this.isShowAll = true;
    this.search$.next();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.search$.next();
  }

  resetPage() {
    this.searchForm.get('page').patchValue(1);
    this.search$.next();
  }


  setOrderProduct($event: number) {
    this.searchForm.get('order_root_list_id').setValue($event);
    this.resetPage();
  }

  setOrderNomenclature($event: number) {
    this.searchForm.get('contains_nomenclature').setValue($event);
    this.resetPage();
  }

  goProductionList(id: number) {
    const link = `${this.productionPlanLinkBase}${id}`;
    window.open(link, '_blank');
  }
}

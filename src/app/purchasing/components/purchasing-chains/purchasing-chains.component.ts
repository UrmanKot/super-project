import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Order} from '../../../procurement/models/order';
import {Nomenclature} from '@shared/models/nomenclature';
import {QuerySearch} from '@shared/models/other';
import {OrderService} from '../../../procurement/services/order.service';
import {Router} from '@angular/router';
import {AdapterService} from '@shared/services/adapter.service';
import {ModalService} from '@shared/services/modal.service';
import {ListProduct} from '../../../warehouse/models/list-product';

@Component({
  selector: 'pek-purchasing-chains',
  templateUrl: './purchasing-chains.component.html',
  styleUrls: ['./purchasing-chains.component.scss']
})
export class PurchasingChainsComponent implements OnInit {

  menuItems: MenuItem[] = [{
    label: 'Selected Chain',
    items: [
      {
        label: 'Edit',
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

  searchForm: FormGroup = this.fb.group({
    page: [1],
    name: [''],
    code: [''],
    responsible_employee_id: [null],
    date_created_after: [null],
    date_created_before: [null],
    category_ids: null,
    root_categories: null,
  });

  orders: Order[] = [];
  selectedOrder: Order;

  isLoading = false;
  isHideFilters = false;

  nomenclaturesList: Nomenclature[] = [];
  rootLists: any[] = [];

  query: QuerySearch[] = [
    {name: 'accounting_type', value: 1},
    {name: 'has_purchase_category', value: true},
    {name: 'exclude_with_active_final_status', value: true}
  ];

  tableScrollHeight = '29.625rem';

  constructor(
    private readonly fb: FormBuilder,
    private readonly orderService: OrderService,
    private readonly router: Router,
    private readonly adapterService: AdapterService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.isLoading = true;

    this.orderService.get(this.query).subscribe(orders => {
      this.orders = orders;

      this.orders.map(x => {
        x.created = new Date(x.created);
        x.created_to = x.created;
        x.status = x.statuses.filter(stat => stat.is_active)[0]?.status;
        x.activeStatusDate = x.statuses.filter(stat => stat.is_active)[0]?.estimated_date;
      });

      this.generateNomenclaturesListAndRootLists();

      this.isLoading = false;
    });
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

  getRootLists(rootLists: ListProduct[]): { list: ListProduct, count?: number }[] {
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

  private onGoToOderPage() {
    this.router.navigate(['/purchasing/chains/order', this.selectedOrder?.id]);
  }

  onRemoveChain() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.orderService.delete(this.selectedOrder.id).subscribe(() => {
          this.orders = this.orders.filter(x => x.id !== this.selectedOrder.id);
          this.selectedOrder = null;
        });
      }
    });
  }
}

import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {AuthService} from '../../../auth/auth.service';
import {OrderService} from '../../../procurement/services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {RequestService} from '../../services/request.service';
import {Table} from 'primeng/table';
import {MenuItem, TreeNode} from 'primeng/api';
import {Request} from '../../models/request';
import {List} from '../../models/list';
import * as cloneDeep from 'lodash/cloneDeep';
import {Task} from '@shared/models/task';
import {TaskService} from '@shared/services/task.service';
import {environment} from '@env/environment.prod';
import {Subject, takeUntil} from 'rxjs';

enum ViewMode {
  LIST = 0,
  HIERARCHY = 1,
  DETAILED_HIERARCHY = 2,
}

@Component({
  selector: 'pek-warehouse-production-request',
  templateUrl: './warehouse-production-request.component.html',
  styleUrls: ['./warehouse-production-request.component.scss']
})
export class WarehouseProductionRequestComponent implements OnInit, OnDestroy {
  link = environment.link_url + 'dash/';
  viewModes = ViewMode;
  viewMode: ViewMode = ViewMode.LIST;
  @ViewChild('dt') dateTable: Table;

  isShowPrint = true;

  destroy$ = new Subject();

  requestNodeMenuItems: MenuItem[] = [{
    label: 'Selected Request',
    items: [
      {
        label: 'Show Images',
        icon: 'pi pi-images',
        command: () => this.showImages(this.selectedRequestNode.data.request.list_product)
      },
      {
        label: 'Cancel',
        icon: 'pi pi-times',
        command: () => this.onCancelItem(this.selectedRequestNode.data.request)
      }
    ]
  }];

  requestMenuItems: MenuItem[] = [{
    label: 'Selected Request',
    items: [
      {
        label: 'Show Images',
        icon: 'pi pi-images',
        command: () => this.showImages(this.selectedRequest.list_product)
      },
      {
        label: 'Cancel',
        icon: 'pi pi-times',
        command: () => this.onCancelItem(this.selectedRequest)
      }
    ]
  }];

  rootList: any = null;
  currentDate: Date = new Date();
  selectedRequest: Request;
  currentReqDate: Date = null;

  isLoading = true;
  requests: Request[] = [];
  order: Order;
  orderId = this.route.snapshot.paramMap.get('id');

  requestTree: TreeNode[] = [];
  selectedRequestNode: TreeNode;

  detailedRequestTree: TreeNode[] = [];
  selectedDetailedRequestNode: TreeNode;

  constructor(
    private requestsService: RequestService,
    public readonly auth: AuthService,
    private ordersService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly modalService: ModalService,
    private readonly tasksService: TaskService,
  ) {
  }

  ngOnInit(): void {
    this.getOrderInfo(+this.orderId);
    this.getRequests();
  }

  onCancel() {
    this.modalService.confirm('danger', 'Confirm').subscribe(res => {
      if (res) {
        this.requestsService.cancel(+this.orderId).subscribe();
      }
    });
  }

  getOrderInfo(orderId: number): void {
    this.ordersService.getById(orderId).pipe(
      takeUntil(this.destroy$)
    ).subscribe(order => {
      this.order = order;
      this.prepareDetailedCategoryTree();
    });
  }

  prepareDetailedCategoryTree(): void {
    const categoriesTemp: {
      id: number,
      level: number,
      parentId: number,
      name: string,
      serialNumber: string,
      planId?: number,
      code?: number
    }[] = [];

    this.order.root_production_plans.forEach(plan => {
      const isAdded = categoriesTemp.findIndex(el => el.id === plan.list_product.id);
      const hasSerialNumber = plan.serial_numbers.length > 0;
      let serialNumber;
      if (hasSerialNumber) {
        const planInfo = plan.serial_numbers[0];
        serialNumber = planInfo.type_with_number ? planInfo.type_with_number : planInfo.id;
      }
      if (isAdded < 0) {
        categoriesTemp.push({
          name: plan.list_product.nomenclature.name,
          code: plan.list_product.nomenclature.code,
          serialNumber,
          id: plan.list_product.id,
          planId: plan.id,
          level: 0,
          parentId: null
        });
      }
    });

    this.detailedRequestTree = [];
    categoriesTemp.forEach(cat => {
      this.detailedRequestTree.push({
        data: cat,
        children: [{
          data: {loading: 'Loading data ...'}
        }],
        expanded: false,
        parent: null
      });
    });
    console.log('this.detailedRequestTree');
    this.detailedRequestTree.forEach(node => {
      console.log('node', node);
      // this.loadPlanInfo(node);
    });

  }

  changeView(view: ViewMode) {
    this.selectedRequest = null;
    this.selectedRequestNode = null;
    this.viewMode = view;
  }

  getRequests() {
    this.isLoading = true;
    this.requests = [];
    // this.requestTree = [];

    this.requestsService.getByOrder(+this.orderId).pipe(
      takeUntil(this.destroy$)
    ).subscribe(requests => {
      this.isLoading = false;
      this.requests = requests;
      this.prepareTreeCategories();
      if (this.requests.length > 0) {
        this.rootList = this.requests[0].root_production_list_products[0];
        this.currentReqDate = this.requests[0].created;
      }
    });
  }

  expandCollapseAllOrders(isToExpand = true): void {
    const temp = cloneDeep(this.requestTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.requestTree = temp;
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  prepareTreeCategories(): void {
    const categoriesTemp: { id: number, level: number, parentId: number, name: string }[] = [];

    this.requests.forEach(request => {
      if (request.for_order_product) {
        const parentProducts = request.for_order_product.nomenclature;
        const isAdded = categoriesTemp.findIndex(el => el.id === parentProducts.id);
        if (isAdded < 0) {
          categoriesTemp.push({name: parentProducts.name, id: parentProducts.id, level: 0, parentId: null});
        }
      } else if (request.list_product) {
        const parentProducts = request.list_product.list as List;
        const isAdded = categoriesTemp.findIndex(el => el.id === parentProducts.nomenclature.id);
        if (isAdded < 0) {
          categoriesTemp.push({
            name: parentProducts.nomenclature.name,
            id: parentProducts.nomenclature.id,
            level: 0,
            parentId: null
          });
        }
      }
    });

    this.requestTree = [];
    categoriesTemp.forEach(cat => {
      this.requestTree.push({
        data: cat,
        expanded: false,
        parent: null
      });
    });

    this.fillTree();
  }

  fillTree(): void {
    this.requestTree = this.requestTree.map(node => {
      return {
        ...node,
        children: []
      };
    });

    this.requests.forEach(request => {
      this.requestTree.forEach(node => {
        let parentNomenclature;
        if (request.for_order_product) {
          parentNomenclature = request.for_order_product.nomenclature;
        } else if (request.list_product) {
          // @ts-ignore
          parentNomenclature = request.list_product.list.nomenclature;
        }

        if (node.data.id === parentNomenclature.id) {
          node.children.push({
            data: {request, level: 4},
            expanded: false,
            children: []
          });
        }
      });
    });

    console.log('this.requestTree Filled', this.requestTree);
  }

  onNodeExpand($event: any) {
    if ($event.node.data.level === 0 && $event.node.children.length === 1) {
      this.loadPlanInfo($event.node);
    }
  }

  loadPlanInfo(rowNode: any) {
    const planId = rowNode.data.planId;
    this.loadRootListTree(planId);
  }

  loadRootListTree(planId: number) {
    this.tasksService.get([{name: 'for_root', value: planId}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.buildDetailedPlanTree(res, planId);
    });
  }

  buildDetailedPlanTree(tasks: Task[], planId: number): void {
    const planIndex = this.detailedRequestTree.findIndex(el => el.data.planId === planId);
    this.detailedRequestTree[planIndex].children = [];
    tasks.sort((a, b) => a.list_product.level - b.list_product.level);
    tasks.filter(task => task.list_product.level !== 0).forEach(task => {
      this.findLevelParent(task.list_product.level - 1, task);
    });

    // this.detailedRequestTree = [...this.detailedRequestTree];
  }

  findLevelParent(level: number, task: Task): void {
    const temp = cloneDeep(this.detailedRequestTree);
    temp.forEach(node => {
      this.addToParentTree(node, level, task);
    });
    this.detailedRequestTree = temp;
  }

  addToParentTree(node: TreeNode, level: number, task: Task): void {
    if (node.data.level === level && node.data.id === task.list_product.parent) {
      const existingIndex = node.children.findIndex(el => el.data.id === task.list_product.id);
      if (existingIndex < 0) {
        // const foundInRequest = this.requests.find(el => el.task === task.id);
        const foundInRequest = this.requests.find(el => el.list_product.id === task.list_product.id);
        // if (task.list_product.nomenclature.name .includes('Washer 6 DIN 125 Zn')) {
        //   console.log('foundInRequest', foundInRequest);
        //   console.log('task', task);
        //   console.log('this.requests', this.requests);
        // }


        node.children.push({
          data: {
            id: task.list_product.id,
            code: task.list_product.nomenclature.code,
            name: task.list_product.nomenclature.name,
            level: task.list_product.level,
            request: foundInRequest
          },
          children: []
        });
      }
    } else if (node.children) {
      node.children.forEach(childNode => {
        this.addToParentTree(childNode, level, task);
      });
    }
  }

  onCancelItem(node) {
    const requestId = node.id;
    this.modalService.confirm('danger', 'Confirm').subscribe(res => {
      if (res) {
        this.requestsService.cancelRequest(requestId).subscribe(() => {
          this.selectedRequest = null;
        });
      }
    });
  }

  expandCollapseDetailedView(isToExpand = true): void {
    const temp = cloneDeep(this.detailedRequestTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.detailedRequestTree = temp;
  }

  showImages(node) {
    console.log(node);
    const nomenclatureId = node.nomenclature.id;
    this.modalService.showImageGallery([], nomenclatureId, 1).subscribe();
  }

  complete() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isLoading = false;
        this.requestsService.complete(+this.orderId).subscribe(() => this.router.navigate(['../'], {relativeTo: this.route}));
      }
    });
  }

  onGoProd(id: number) {
    window.open(`${this.link}production/plan/tasks/` + id, '_blank');
  }

  goOrder(type, id) {
    let link = '';

    if (type == 1) {
      link = `${this.link}procurement/orders/products/` + id;
    }

    if (type == 2) {
      link = `${this.link}outsource/outsource-chain/products/` + id;
    }

    if (type == 3) {
      link = `${this.link}production/orders/order/` + id;
    }

    window.open(link, '_blank');
  }

  goToOrder() {
    let link = '';

    if (this.order.accounting_type == 1) {
      link = `${this.link}procurement/orders/products/` + this.order.id;
    }

    if (this.order.accounting_type == 2) {
      link = `${this.link}outsource/outsource-chain/products/` + this.order.id;
    }

    if (this.order.accounting_type == 3) {
      link = `${this.link}production/orders/order/` + this.order.id;
    }

    window.open(link, '_blank');
  }

  printPage() {
    this.isShowPrint = true;
    setTimeout(() => {
      window.print();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

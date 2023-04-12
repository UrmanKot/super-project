import {Component, HostListener, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {AuthService} from '../../../auth/auth.service';
import {OrderService} from '../../../procurement/services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {RequestService} from '../../services/request.service';
import {Table} from 'primeng/table';
import {MenuItem, TreeNode} from 'primeng/api';
import {List} from '../../models/list';
import * as cloneDeep from 'lodash/cloneDeep';
import {Task} from '@shared/models/task';
import {TaskService} from '@shared/services/task.service';
import {environment} from '@env/environment';
import {forkJoin, Subject, takeUntil} from 'rxjs';
import {OrderTechnicalEquipment} from '../../models/order-technical-equipment';
import {OrderTechnicalEquipmentsService} from '../../services/order-technical-equipments.service';
import {take, tap} from 'rxjs/operators';
import {Nomenclature, Nomenclatures} from '@shared/models/nomenclature';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ScanResult} from '../../../qr-code/models/scan-result';
import {GroupedRequest} from '../../models/grouped-request';
import {AlbumService} from '@shared/services/album.service';
import {
  OrderProduct,
  OrderProductGroupedForPrint
} from '../../../procurement/models/order-product';
import {DOCUMENT} from '@angular/common';


enum ViewMode {
  LIST = 0,
  HIERARCHY = 1,
  DETAILED_HIERARCHY = 2,
}

class ProductRequestListOrder extends Order {
  ordered_items_technologies?: string[];
}

@UntilDestroy()
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
  formGroupedOrderedProducts: Subject<void> = new Subject<void>();

  isShowPrint = false;
  isShowPrintGrouped = false;

  destroy$ = new Subject();
  lastScannedId: number;

  isAlbumPrint = false;

  requestNodeMenuItems: MenuItem[] = [{
    label: 'Selected Request',
    items: [
      {
        label: 'Show Images',
        icon: 'pi pi-images',
        command: () => this.showImages(this.selectedRequestNode.data.request)
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
        command: () => this.showImages(this.selectedRequest as GroupedRequest)
      },
      {
        label: 'Cancel',
        icon: 'pi pi-times',
        command: () => this.onCancelItem(this.selectedRequest as GroupedRequest)
      }
    ]
  }];

  printMenuItems: MenuItem[] = [{
    label: 'Print Options',
    items: [
      {
        label: 'Print (default)',
        icon: 'pi pi-print',
        command: () => this.printPage()
      },
      {
        label: 'Print Grouped by Order Product',
        icon: 'pi pi-print',
        command: () => this.printPageGrouped()
      }
    ]
  }];

  rootList: any = null;
  currentDate: Date = new Date();
  selectedRequest: GroupedRequest | GroupedRequest[] | any;
  currentReqDate: Date = null;

  isLoading = true;
  requests: GroupedRequest[] = [];
  listRequests: GroupedRequest[] = [];
  hierarchyRequests: GroupedRequest[] = [];
  order: ProductRequestListOrder;
  orderId = this.route.snapshot.paramMap.get('id');

  requestTree: TreeNode[] = [];
  selectedRequestNode: TreeNode;

  detailedRequestTree: TreeNode[] = [];
  selectedDetailedRequestNode: TreeNode;
  orderedProductsForPrint: OrderProductGroupedForPrint[] = [];

  technicalEquipments: OrderTechnicalEquipment[] = [];
  isLoadingTree = true;
  elementsRowsIds: any[] = [];
  isScanned = false;
  scanningEnd: boolean;
  currentDisplayRowId: null;
  foundRowsIds: any[] = [];
  firstPage = 0;

  constructor(
    private requestsService: RequestService,
    public readonly auth: AuthService,
    private ordersService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly modalService: ModalService,
    private readonly tasksService: TaskService,
    private orderTechnicalEquipmentsService: OrderTechnicalEquipmentsService,
    public readonly albumService: AlbumService,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  ngOnInit(): void {
    this.getOrderInfo(+this.orderId);
    this.getRequests();
    this.getOrderTechnicalEquipments();
    this.formGroupedOrderedProducts.pipe(untilDestroyed(this)).subscribe(() => {
      if (this.hierarchyRequests.length > 0 && this.orderedProductsForPrint.length > 0) {
        this.orderedProductsForPrint.forEach(el => {
          el.children = this.hierarchyRequests.filter(child => child.for_order_product.id === el.id || child.for_order_ids.findIndex(child_ids => child_ids === el.id) >= 0);
        });
      }
    });
  }

  getOrderTechnicalEquipments() {
    const query = [{name: 'order', value: +this.orderId}, {name: 'in_use', value: false}];
    this.orderTechnicalEquipmentsService.get(query).pipe(take(1), untilDestroyed(this)).subscribe(technicalEquipments => {
      this.technicalEquipments = technicalEquipments;
    });
  }

  onCancel() {
    this.modalService.confirm('danger', 'Confirm').subscribe(res => {
      if (res) {
        this.requestsService.cancel(+this.orderId).pipe(untilDestroyed(this)).subscribe();
      }
    });
  }

  getOrderInfo(orderId: number): void {
    this.ordersService.getById(orderId).pipe(
      takeUntil(this.destroy$)
    ).pipe(untilDestroyed(this)).subscribe(order => {
      this.order = order;
      this.order.ordered_items_technologies = [];
      this.order.order_products.forEach(product => {
        // console.log('this.order.order_products', this.order.order_products);
        if (product.current_technology) {
          const canAddTechnology = this.order.ordered_items_technologies
            .findIndex(el => el === product.current_technology.name) < 0;
          if (canAddTechnology) {
            this.order.ordered_items_technologies.push(product.current_technology.name);
          }
        }

        const productInList = this.orderedProductsForPrint.find(el => el.nomenclature.id === product.nomenclature.id &&
          el.current_technology?.id === product.current_technology?.id);
        if (productInList) {
          productInList.quantity += product.quantity;
        } else {
          this.orderedProductsForPrint.push(product);
        }
      });
      this.formGroupedOrderedProducts.next();
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
  }

  changeView(view: ViewMode) {
    this.selectedRequest = [];

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
      this.listRequests = JSON.parse(JSON.stringify(this.requests));
      this.hierarchyRequests = JSON.parse(JSON.stringify(this.requests));
      this.listRequests.sort((a, b) => this.getCodeAndNameId(a).id - this.getCodeAndNameId(b).id).forEach(request => {
        request.requests = this.listRequests
          .filter(req => !req.material_nomenclature)
          .filter(req => !req.reserved_serial_products || req.reserved_serial_products.length === 0)
          .filter(req => {
            return this.getSameRequests(req, request) && req.id !== request.id;
          });

        request.ids = request.requests.map(req => req.id);

        request.all_reserved_serial_products = [];
        request.unique_locators = [...request.locators];
        if (request.is_reserved && request.requests
          .every(req => req.is_reserved)) {
          request.available_quantity_sum = request.requests.map(req => req.required_quantity)
            .reduce((sum, quantity) => sum + quantity, request.required_quantity);
        } else {
          if (request.ids.length === 0) {
            if (!request.is_reserved) {
              request.available_quantity_sum = request.warehouse_quantity;
            } else {
              request.available_quantity_sum = request.required_quantity;
            }
          } else {
            if (!request.is_reserved) {
              request.available_quantity_sum = request.warehouse_quantity;
            } else {
              request.available_quantity_sum = request.requests
                .find(req => !req.is_reserved).warehouse_quantity;
            }
          }
        }
        if (request.reserved_serial_products) {
          request.all_reserved_serial_products.push(...request.reserved_serial_products.map(serial_number => serial_number.serial_number));
        }
        request.requests.forEach(req => {
          if (req.reserved_serial_products?.length > 0) {
            request.all_reserved_serial_products.push(...req.reserved_serial_products.map(serial_number => serial_number.serial_number));
          }
          request.unique_locators.push(...req.locators);
        });
        request.total_required_quantity = request.requests.reduce(
          (accumulator, currentValue) => accumulator + currentValue.required_quantity, request.required_quantity
        );
        request.unique_locators = request.unique_locators.filter((locator, index, self) => self.findIndex(innerLocator => innerLocator.id === locator.id) === index);

        request.ids.forEach(id => {
          const index = this.listRequests.findIndex(req => req.id === id);
          this.listRequests.splice(index, 1);
        });
      });

      this.hierarchyRequests.sort((a, b) => this.getCodeAndNameId(a).id - this.getCodeAndNameId(b).id).forEach(hierRequest => {
        hierRequest.requests = this.hierarchyRequests
          .filter(req => !req.material_nomenclature)
          .filter(req => req.for_order_product?.nomenclature.id === hierRequest.for_order_product?.nomenclature.id)
          .filter(req => !req.reserved_serial_products || req.reserved_serial_products.length === 0)
          .filter(req => {
            return this.getSameRequests(req, hierRequest) && req.id !== hierRequest.id &&
              (req.for_order_product?.nomenclature.id === hierRequest.for_order_product?.nomenclature.id ||
                req.list_product?.nomenclature.id === hierRequest.list_product?.nomenclature.id);
          });

        hierRequest.ids = hierRequest.requests.map(req => req.id);
        hierRequest.for_order_ids = [];
        if (hierRequest.for_order_product.length > 0) {
          hierRequest.for_order_ids.push(hierRequest.for_order_product.id);
        }
        hierRequest.for_order_ids.push(...hierRequest.requests.filter(req => req.for_order_product).map(req => req.for_order_product?.id));
        if (hierRequest.is_reserved && hierRequest.requests
          .every(req => req.is_reserved)) {
          hierRequest.available_quantity_sum = hierRequest.requests.map(req => req.required_quantity)
            .reduce((sum, quantity) => sum + quantity, hierRequest.required_quantity);
        } else {
          if (hierRequest.ids.length === 0) {
            if (!hierRequest.is_reserved) {
              hierRequest.available_quantity_sum = hierRequest.warehouse_quantity;
            } else {
              hierRequest.available_quantity_sum = hierRequest.required_quantity;
            }
          } else {
            if (!hierRequest.is_reserved) {
              hierRequest.available_quantity_sum = hierRequest.warehouse_quantity;
            } else {
              hierRequest.available_quantity_sum = hierRequest.requests
                .find(req => !req.is_reserved).warehouse_quantity;
            }
          }
        }

        hierRequest.unique_locators = [...hierRequest.locators];
        hierRequest.requests.forEach(req => {
          hierRequest.unique_locators.push(...req.locators);
        });

        hierRequest.unique_locators = hierRequest.unique_locators.filter((locator, index, self) =>
          self.findIndex(innerLocator => innerLocator.id === locator.id) === index);

        hierRequest.total_required_quantity = hierRequest.requests.reduce(
          (accumulator, currentValue) => accumulator + currentValue.required_quantity, hierRequest.required_quantity
        );

        hierRequest.ids.forEach(id => {
          const index = this.hierarchyRequests.findIndex(req => req.id === id);
          this.hierarchyRequests.splice(index, 1);
        });
      });
      this.formGroupedOrderedProducts.next();

      this.prepareTreeCategories();
      if (this.listRequests.length > 0) {
        const haveRootProduction = this.listRequests.find(el => el.root_production_list_products.length > 0);
        this.rootList = haveRootProduction.root_production_list_products[0];
        this.currentReqDate = haveRootProduction.created;
      }
      const material = this.listRequests.filter(el => el.material_nomenclature).sort((a, b) => {
        return b.id - a.id;
      });
      const non_material = this.listRequests.filter(el => !el.material_nomenclature).sort((a, b) => {
        return b.id - a.id;
      });
      this.listRequests = [...material, ...non_material];
    });
  }

  getSameRequests(req: GroupedRequest, request: GroupedRequest): boolean {
    let codeName = this.getCodeAndNameId(req);

    let codeNameSecond = this.getCodeAndNameId(request);
    return (codeName.code === codeNameSecond.code
      && codeName.name === codeNameSecond.name
      && (!req.reserved_serial_products || req.reserved_serial_products?.length === 0 || !req.material_nomenclature));
  }

  getCodeAndNameId(request: GroupedRequest): { name: string, code: string, id: number } {
    let codeSecond = '';
    let nameSecond = '';
    let id;
    if (request.order_product_nomenclature) {
      codeSecond = request.order_product_nomenclature.code;
      nameSecond = request.order_product_nomenclature.name;
      id = request.order_product_nomenclature.id;
    } else if (!request.material_nomenclature && !request.order_product_nomenclature) {
      codeSecond = request.list_product.nomenclature.code;
      nameSecond = request.list_product.nomenclature.name;
      id = request.list_product.nomenclature.id;
    }
    return {code: codeSecond, name: nameSecond, id: id};
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
    const categoriesTemp: { id: number, level: number, parentId: number, name: string, for_order_product?: any, listProduct?: any }[] = [];

    this.hierarchyRequests.forEach(request => {
      if (request.for_order_product) {
        const parentProducts = request.for_order_product.nomenclature;
        const isAdded = categoriesTemp.findIndex(el => el.id === parentProducts.id);
        if (isAdded < 0) {
          categoriesTemp.push({name: parentProducts.name, id: parentProducts.id, level: 0, parentId: null, for_order_product: request.for_order_product});
        }
      } else if (request.list_product) {
        const parentProducts = request.list_product.list as List;
        const isAdded = categoriesTemp.findIndex(el => el.id === parentProducts.nomenclature.id);
        if (isAdded < 0) {
          categoriesTemp.push({
            name: parentProducts.nomenclature.name,
            id: parentProducts.nomenclature.id,
            level: 0,
            parentId: null,
            listProduct: request.list_product
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

    this.hierarchyRequests.forEach(request => {
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
    this.requestTree.forEach(node => {
      const materialChild = node.children.filter(child => child.data.request.material_nomenclature).sort((a, b) => {
        return b.data.request.id - a.data.request.id;
      });
      const nonMaterialChild = node.children.filter(child => !child.data.request.material_nomenclature).sort((a, b) => {
        return b.data.request.id - a.data.request.id;
      });
      node.children = [...materialChild, ...nonMaterialChild]
    });
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
      const existingIndex = node.children.findIndex(el => el.data.id === task.list_product?.id);
      if (existingIndex < 0) {
        const foundInRequest = this.requests.find(el => el.list_product?.id === task.list_product?.id);

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

  onCancelItem(request: GroupedRequest) {
    const requestId = request.id;
    this.modalService.confirm('danger', 'Confirm').subscribe(res => {
      if (res) {
        const call = [];
        const ids = request.ids ? request.ids : [];
        const requestIds = [requestId, ...ids];
        requestIds.forEach(id => {
          call.push(this.requestsService.cancelRequest(id).pipe(tap(response  => {
          })));
        });

        forkJoin([
          ...call
        ]).pipe(untilDestroyed(this)).subscribe((result) => {
          if (result) {
            let lastFreeValue = 0;
            result.forEach((data, index) => {
              if (data) {
                let changeRequest = index === 0 ? request : request.requests.find(req => req.id === data.id);
                changeRequest.required_quantity = data.required_quantity;
                changeRequest.warehouse_quantity = data.warehouse_quantity;
                if (!changeRequest.is_reserved) {
                  if (data.warehouse_quantity > lastFreeValue) {
                    lastFreeValue = data.warehouse_quantity;
                  }
                }
              }
            });

            if (request.is_reserved && request.requests
              .every(req => req.is_reserved)) {
              request.available_quantity_sum = request.requests.map(req => req.warehouse_quantity)
                .reduce((sum, quantity) => sum + quantity, request.warehouse_quantity);
            } else {
              if (request.ids.length === 0) {
                request.available_quantity_sum = request.warehouse_quantity;
              } else {
                if (!request.is_reserved) {
                  request.available_quantity_sum = lastFreeValue;
                } else {
                  request.available_quantity_sum = lastFreeValue;
                }
              }
            }
            request.total_required_quantity = request.requests.reduce(
              (accumulator, currentValue) => accumulator + currentValue.required_quantity, request.required_quantity
            );
          }
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

  showImages(request: GroupedRequest) {
    let nomenclature: Nomenclature;

    if (request.material_nomenclature) {
      nomenclature = request.material_nomenclature;
    } else if (request.order_product_nomenclature) {
      nomenclature = request.order_product_nomenclature;
    } else if (!request.material_nomenclature && !request.order_product_nomenclature) {
      nomenclature = request.list_product.nomenclature;
    }
    const nomenclatureId = nomenclature.id;
    this.modalService.showImageGallery([], nomenclatureId, 1).pipe(untilDestroyed(this)).subscribe();
  }

  complete() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isLoading = false;
        this.requestsService.complete(+this.orderId).pipe(untilDestroyed(this)).subscribe(() => this.router.navigate(['../'], {relativeTo: this.route}));
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

  printPageGrouped() {
    this.isShowPrintGrouped = true;
    setTimeout(() => {
      window.print();
    });
  }

  @HostListener("window:afterprint", [])
  onWindowAfterPrint() {
    this.isShowPrintGrouped = false;
    this.isShowPrint = false;
  }

  @HostListener('afterprint') printClosed() {
    this.isShowPrintGrouped = false;
    this.isShowPrint = false;
  }

  printAlbum() {
    this.albumService.getNomenclaturesImages((<GroupedRequest[]>this.selectedRequest).map(r => {
      if (r.material_nomenclature) {
        return r.material_nomenclature;
      } else if (r.order_product_nomenclature) {
        return r.order_product_nomenclature;
      } else if (!r.material_nomenclature && !r.order_product_nomenclature) {
        return r.list_product?.nomenclature;
      }
    }));
  }

  togglePrintAlbumMode() {
    this.selectedRequest = [];
    this.isAlbumPrint = !this.isAlbumPrint;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onStartScanning() {
    this.clearQrResults();
    this.expandCollapseAllOrders();

    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row-]`);
      elements.forEach((element) => {
        this.elementsRowsIds.push(element.id);
      });
    });
    this.isScanned = true;
    this.scanningEnd = false;
  }

  clearQrResults() {
    this.currentDisplayRowId = null;
    this.foundRowsIds = [];
  }

  onScanned(data: any) {
    this.scanningEnd = true;
    this.isScanned = false;
    this.scanForListProduct(data);
  }

  onCancelScanned() {
    this.scanningEnd = true;
    this.isScanned = false;
  }

  scanForListProduct(data: ScanResult = null) {
    this.expandCollapseAllOrders();
    this.lastScannedId = null;

    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row-]`);
      elements.forEach((element) => {
        this.elementsRowsIds.push(element.id);
      });
    });

    if (this.viewMode === ViewMode.HIERARCHY) {
      this.expandCollapseAllOrders();
    }

    this.requestsService.sendDataProductionRequests(this.orderId, data).pipe(untilDestroyed(this)).subscribe(res => {
      this.testFoundIdsOnScan(res);
    });
  }

  testFoundIdsOnScan(res) {
    const ids = res.map(el => el.item_id_changed);

    let elementIndex;
    this.listRequests.forEach((request, index) => {
      const isMainIdChecked = ids.findIndex(id => id === request.id) > -1;
      if (isMainIdChecked) {
        request.is_scanned = true;
        elementIndex = index;
        this.lastScannedId = request.id;
      }
      request.requests.forEach(req => {
        if (ids.findIndex(id => id === req.id) > -1) {
          req.is_scanned = true;
          elementIndex = index;
          this.lastScannedId = request.id;
        }
      });
    });

    if (this.viewMode === ViewMode.LIST) {

      if (elementIndex) {
        this.firstPage = Math.floor(elementIndex / 10) * 10;
      }
    }

    this.requestTree.forEach(node => {
      node.children.forEach(child => {
        const request = child.data.request;
        const isMainIdChecked = ids.findIndex(id => id === request.id) > -1;
        if (isMainIdChecked) {
          request.is_scanned = true;
          this.lastScannedId = request.id;
        }
        request.requests?.forEach(req => {
          if (ids.findIndex(id => id === req.id) > -1) {
            req.is_scanned = true;
            this.lastScannedId = request.id;
          }
        });
      });
    });
    if (this.viewMode === ViewMode.HIERARCHY) {

      if (this.lastScannedId) {
        this.scrollToElement('row-' + this.lastScannedId);
      }
    }
  }

  scrollToElement(rowId: string): void {
    const element = document.getElementById(rowId);
    element.scrollIntoView({behavior: 'smooth', block: 'center'});
  }

  isFullyScanned(request: any) {
    if (request.requests?.length === 0) {
      return request.is_scanned;
    }
    const mainScanned = request.is_scanned;
    const allInnerScanned = !(request.requests?.findIndex(req => !req.is_scanned) > -1);
    return mainScanned && allInnerScanned;
  }

  isPartlyScanned(request: any) {
    if (request?.requests?.length === 0) {
      return false;
    }
    const mainScanned = request.is_scanned;
    const innerNeedScan = request.requests?.findIndex(req => !req.is_scanned) > -1;
    return !this.isFullyScanned(request) && (mainScanned || !innerNeedScan);
  }
}

import {Component, HostListener, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {AuthService} from '../../../auth/auth.service';
import {OrderService} from '../../../procurement/services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {RequestService} from '../../../warehouse/services/request.service';
import {Table} from 'primeng/table';
import {MenuItem, TreeNode} from 'primeng/api';
import {List} from '../../../warehouse/models/list';
import * as cloneDeep from 'lodash/cloneDeep';
import {Task} from '@shared/models/task';
import {TaskService} from '@shared/services/task.service';
import {environment} from '@env/environment';
import {forkJoin, Subject, takeUntil} from 'rxjs';
import {OrderTechnicalEquipment} from '../../../warehouse/models/order-technical-equipment';
import {OrderTechnicalEquipmentsService} from '../../../warehouse/services/order-technical-equipments.service';
import {filter, map, take, tap} from 'rxjs/operators';
import {Nomenclature, Nomenclatures} from '@shared/models/nomenclature';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ScanResult} from '../../../qr-code/models/scan-result';
import {GroupedRequest} from '../../../warehouse/models/grouped-request';
import {AlbumService} from '@shared/services/album.service';
import {
  OrderProduct,
  OrderProductGroupedForPrint
} from '../../../procurement/models/order-product';
import {DOCUMENT} from '@angular/common';


class ProductRequestListOrder extends Order {
  ordered_items_technologies?: string[];
  qc_delivery_status?: any;
}

@UntilDestroy()
@Component({
  selector: 'pek-qc-delivery',
  templateUrl: './qc-delivery.component.html',
  styleUrls: ['./qc-delivery.component.scss']
})
export class QcDeliveryComponent implements OnInit, OnDestroy {
  @ViewChild('dt') dateTable: Table;
  formGroupedOrderedProducts: Subject<void> = new Subject<void>();

  isShowPrint = false;
  isShowPrintGrouped = false;

  destroy$ = new Subject();
  lastScannedId: number;

  isAlbumPrint = false;

  qc_delivery_status: any;

  QC_STAGES = {
    "qty_control": 1,
    "packing_control": 2,
    "done": 3
  };


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
  selectedRequest: GroupedRequest | GroupedRequest[] | any = null;
  currentReqDate: Date = null;

  isLoading = true;
  requests: GroupedRequest[] = [];
  listRequests: GroupedRequest[] = [];
  hierarchyRequests: GroupedRequest[] = [];
  order: ProductRequestListOrder;
  orderId = this.route.snapshot.paramMap.get('id');
  isCompletingMaterials = false;

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
    this.ordersService.getMinimalById(orderId).pipe(
      takeUntil(this.destroy$)
    ).pipe(untilDestroyed(this)).subscribe(order => {
      this.order = order;
      this.order.ordered_items_technologies = [];
      this.order.order_products.forEach(product => {
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
    });
  }

  getRequests() {
    this.isLoading = true;
    this.requests = [];
    this.selectedRequest = [];

    this.requestsService.getDeliveryByOrder(+this.orderId).pipe(
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



  complete() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isLoading = false;
        this.requestsService.completeMaterialQc(+this.orderId).pipe(untilDestroyed(this)).subscribe(() => this.router.navigate(['../'], {relativeTo: this.route}));
      }
    });
  }

  onUpdateItems(request: GroupedRequest, qc_stage: number, confirmation_flag: boolean) {
    let listId = []
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      listId.push(request.id, ...request.ids);
      const requestData = {
        "production_request_ids": listId,
        "order_qc_delivery_status_id": this.order.qc_delivery_status.id,
        "confirmation_flag": confirmation_flag,
        "qc_stage": qc_stage
      }
      this.requestsService.updateMaterial(requestData).pipe(untilDestroyed(this)).subscribe(() => {
        this.getOrderInfo(+this.orderId);
        this.getRequests();
      });
    })
  }

  onResetConfirmation() {
    let listId = []
    this.selectedRequest.forEach(request => {
      listId.push(request.id, ...request.ids);
    });
    const requestData = {
      "production_request_ids": listId,
    }
    this.requestsService.resetConfirmation(requestData).pipe(untilDestroyed(this)).subscribe(() => {
      this.getOrderInfo(+this.orderId);
      this.getRequests();
    });
  }

  onCompleteMaterialQcList(qc_stage: number) {
    let listId = []
    this.modalService.confirm('success').pipe(
      filter(confirm => confirm)
    ).subscribe(() => {
      this.selectedRequest.forEach(request => {
        listId.push(request.id, ...request.ids);
      });
      const requestData = {
        "production_request_ids": listId,
        "qc_stage": qc_stage,
      }
      this.requestsService.updateMaterial(requestData).pipe(untilDestroyed(this)).subscribe(() => {
        this.getOrderInfo(+this.orderId);
        this.getRequests();
      });
    })
  }

  onGoProd(id: number) {
    window.open(`/manufactoring/plan/plan/` + id, '_blank');
  }

  goOrder(type, id) {
    let link = '';

    if (type == 1) {
      link = `/procurement/chains/order/` + id;
    }

    if (type == 2) {
      link = `/outsourcing/chains/order/` + id;
    }

    if (type == 3) {
      link = `/manufacturing/orders/order/` + id;
    }

    window.open(link, '_blank');
  }

  goToOrder() {
    let link = '';

    if (this.order.accounting_type == 1) {
      link = `/procurement/chains/order/` + this.order.id;
    }

    if (this.order.accounting_type == 2) {
      link = `/outsourcing/chains/order/` + this.order.id;
    }

    if (this.order.accounting_type == 3) {
      link = `/manufacturing/orders/order/` + this.order.id;
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
    this.lastScannedId = null;

    requestAnimationFrame(() => {
      this.elementsRowsIds = [];
      const elements = document.querySelectorAll(`[id^=row-]`);
      elements.forEach((element) => {
        this.elementsRowsIds.push(element.id);
      });
    });

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

    if (elementIndex) {
      this.firstPage = Math.floor(elementIndex / 10) * 10;
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

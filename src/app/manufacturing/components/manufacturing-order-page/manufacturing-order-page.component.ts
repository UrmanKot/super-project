import {Component, HostListener, OnInit} from '@angular/core';
import {concatMap, delay, finalize, map, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Order} from '../../../procurement/models/order';
import {OrderService} from '../../../procurement/services/order.service';
import {OrderMachine, OrderMaterial, OrderProduct} from '../../../procurement/models/order-product';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {OrderTechnicalEquipment} from '../../../warehouse/models/order-technical-equipment';
import {OrderTechnicalEquipmentsService} from '../../../warehouse/services/order-technical-equipments.service';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {RequestService} from '../../../warehouse/services/request.service';
import {from} from 'rxjs';

@Component({
  selector: 'pek-manufacturing-order-page',
  templateUrl: './manufacturing-order-page.component.html',
  styleUrls: ['./manufacturing-order-page.component.scss']
})
export class ManufacturingOrderPageComponent implements OnInit {
  productMenuItems: MenuItem[] = [{
    label: 'Selected Item',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditOrderProductQuantity(),
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveOrderProduct(),
      }
    ]
  }];

  orderId: number;
  order: Order;
  isOrderLoading = true;
  isMovingToQC = false;

  isShowPrint = false;

  isCancellation = false;

  selectedProduct: OrderProduct;
  products: OrderProduct[] = [];
  isLoadingProducts = true;
  isLoadingTechnicalEquipments = true;

  orderMaterials: OrderMaterial[] = [];
  machines: OrderMachine[] = [];

  technicalEquipments: OrderTechnicalEquipment[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly orderService: OrderService,
    private readonly orderProductService: OrderProductService,
    private readonly orderTechnicalEquipmentService: OrderTechnicalEquipmentsService,
    private readonly modalService: ModalService,
    private readonly requestService: RequestService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.orderId = +id),
      tap(() => this.getOrder()),
      tap(() => this.getOrderTechnicalEquipments()),
    ).subscribe();
  }

  getOrder() {
    this.orderService.getById(this.orderId).subscribe(order => {
      order.statuses.map(x => x.estimated_date_sort = new Date(x.estimated_date));
      order.statuses.sort((a, b) => a.estimated_date_sort - b.estimated_date_sort || a.is_active - b.is_active);
      this.order = order;
      this.isOrderLoading = false;

      this.getProducts();
    });
  }

  onEditOrder() {
    this.orderService.openEditOrderModal(this.order, 'manufacturing').subscribe(confirm => {
      if (confirm) {
        this.getOrder();
      }
    });
  }

  getProducts() {
    this.machines = [];
    this.orderMaterials = [];
    this.products = [];

    this.orderProductService.get([
      {name: 'order', value: this.orderId}
    ]).subscribe(products => {
      products.forEach((product, idx) => {
        product.details = this.order.order_products[idx];
        product.isReady = product.is_technology_ready ? product.is_technology_ready : false;

        if (product.details.task_materials && product.details.task_materials.length > 0) {
          product.details.task_materials.forEach(m => {
            let nomenclatureId: number;
            let currentTechnology: string;
            if (m.material_nomenclature) {
              nomenclatureId = m.material_nomenclature.id;
              currentTechnology = m.technology;
            }
            if (m.order_product_nomenclature) {
              nomenclatureId = m.order_product_nomenclature.id;
              currentTechnology = m.technology;
            }
            if (m.list_product) {
              nomenclatureId = m.list_product.nomenclature.id;
              currentTechnology = m.technology;
            }
            const inMaterials = this.orderMaterials.find(material => {
              if (material.material_nomenclature) {
                return material.material_nomenclature.id === nomenclatureId && material.technology === currentTechnology;
              }
              if (material.order_product_nomenclature) {
                return material.order_product_nomenclature.id === nomenclatureId && material.technology === currentTechnology;
              }
              if (material.list_product) {
                return material.list_product.nomenclature.id === nomenclatureId && material.technology === currentTechnology;
              }
            });
            if (inMaterials) {
              inMaterials.allIds.push(m.id);
              inMaterials.totalInitialQuantity += m.initial_quantity;
              inMaterials.totalRequiredQuantity += m.required_quantity;
            } else {
              m.allIds = [m.id];
              m.totalInitialQuantity = m.initial_quantity;
              m.totalRequiredQuantity = m.required_quantity;
              this.orderMaterials.push(m);
            }
          });
        }

        if (product.details.task_machines && product.details.task_machines.length > 0) {
          product.details.task_machines.forEach(m => {
            this.machines.push(m);
          });
        }
      });

      const newProducts = [];

      products.forEach(product => {
        const newProduct = {...product};

        const findProduct = newProducts.find(p =>
          p.nomenclature.id === product.nomenclature.id &&
          p.current_technology.id === product.current_technology.id
        );

        if (!findProduct) {
          newProduct.quantity = products.filter(p =>
            p.nomenclature.id === product.nomenclature.id &&
            p.current_technology.id === product.current_technology.id
          ).reduce((sum, p) => sum + p.quantity, 0);

          newProduct.ids = products.filter(p =>
            p.nomenclature.id === product.nomenclature.id &&
            p.current_technology.id === product.current_technology.id
          ).map(p => p.id);

          newProducts.push(newProduct);
        }
      });
      this.products = [...newProducts];
      this.machines = this.machines.map(m => m);
      this.orderMaterials = [...this.orderMaterials];

      this.isLoadingProducts = false;
    });
  }

  toggleAllReady(evt: any) {
    this.products.forEach(product => {
      if (!product.is_technology_ready) {
        product.isReady = evt.checked;
      }
    });
  }

  getOrderTechnicalEquipments() {
    this.orderTechnicalEquipmentService.get([{name: 'order', value: this.orderId}]).subscribe(technicalEquipments => {
      this.technicalEquipments = technicalEquipments;
      this.isLoadingTechnicalEquipments = false;
    });
  }

  onAddProduct() {
    this.orderProductService.openAddOutsourcingRequestModal(this.orderId).subscribe(product => {
      if (product) {
        this.getProducts();
      }
    });
  }

  private onRemoveOrderProduct() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.orderProductService.removeFromOrder(this.selectedProduct).subscribe(() => {
          this.products = this.products.filter(p => p.id !== this.selectedProduct.id);
          this.selectedProduct = null;
        });
      }
    });
  }

  onEditOrderProductQuantity() {
    this.orderProductService.editOrderProductQuantity(<OrderProduct>this.selectedProduct).subscribe(orderProduct => {
      if (orderProduct) {
        this.selectedProduct.quantity = orderProduct.quantity;
      }
    });
  }

  onCancelOrderMaterials() {
    this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
      if (confirm) {
        this.isCancellation = true;
        this.requestService.cancel(this.orderId).pipe(
          finalize(() => this.isCancellation = false)
        ).subscribe(() => {
          this.orderMaterials = [];
          this.products = [];
          this.machines = [];
          this.selectedProduct = null;
          this.isLoadingProducts = true;
          this.getOrder();
        });
      }
    });
  }

  onPrintPage() {
    this.isShowPrint = true;
    setTimeout(() => {
      window.print();
    });
  }

  @HostListener('window:afterprint', [])
  onWindowAfterPrint() {
    this.isShowPrint = false;
  }

  moveToQc() {
    this.isMovingToQC = true;
    const orderData = {
      id: this.order.id,
      order: {
        completed: true
      }
    };
    this.orderService.moveToQc(orderData).subscribe(() => {
      if (productsUpdateToSend.length === 0) {
        this.isMovingToQC = false;
      }
    });

    const productsUpdateToSend = [];
    this.products.forEach((product) => {
      if (product.isReady && !product.is_technology_ready && !product.quality_control) {
        product.ids.forEach(id => {
          const productData = {
            id,
            product: {
              is_technology_ready: true
            }
          };
          productsUpdateToSend.push(productData);
        });
      }
    });

    from(productsUpdateToSend).pipe(
      concatMap(data => this.makeRequest(data)),
    ).subscribe(
      value => this.isMovingToQC = false,
      error => this.isMovingToQC = false
    );
  }

  makeRequest(productData) {
    return this.orderProductService.moveToQc(productData).pipe(delay(200), tap(res => {
      const prod = this.products.find(el => el.ids.findIndex(id => id === res.id) > -1);
      if (prod) {
        prod.is_technology_ready = true;
      }
    }));
  }

  onAddMaterial() {
    this.orderProductService.openAddPMaterialToOrder(this.selectedProduct.id).subscribe(request => {
      if (request) {
        this.getOrder();
      }
    });
  }
}

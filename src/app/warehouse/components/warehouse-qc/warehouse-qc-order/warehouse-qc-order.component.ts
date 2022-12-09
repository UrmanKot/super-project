import {Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {OrderProduct} from '../../../../procurement/models/order-product';
import {OrderService} from '../../../../procurement/services/order.service';
import {QcListModalService} from '../../../services/qc-list-modal.service';
import {OrderTechnicalEquipmentsService} from '../../../services/order-technical-equipments.service';
import {OrderTechnicalEquipment} from '../../../models/order-technical-equipment';
import {TechnicalEquipmentsInUseService} from '../../../services/technical-equipments-in-use.service';
import {WarehouseProduct} from '../../../models/warehouse-product';
import {Nomenclature} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-warehouse-qc-order',
  templateUrl: './warehouse-qc-order.component.html',
  styleUrls: ['./warehouse-qc-order.component.scss']
})
export class WarehouseQcOrderComponent implements OnInit {

  isLoading = true;

  orderId: number;
  orderProducts: OrderProduct[] = [];
  selectedOrderProducts: OrderProduct[] = [];

  orderTechnicalEquipments: OrderTechnicalEquipment[] = [];
  selectedOrderTechnicalEquipment: OrderTechnicalEquipment[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly orderService: OrderService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly modalService: ModalService,
    private qcListModalService: QcListModalService,
    private technicalEquipmentsInUseService: TechnicalEquipmentsInUseService,
  ) {
  }

  ngOnInit(): void {
    this.getInvoices();

    this.qcListModalService.notCompatibleItems$
      .pipe(takeUntil(this.destroy$)).subscribe(items => {
      items.forEach(item => {
        const foundIndex = this.selectedOrderProducts.findIndex(product => product.id === item.id);
        if (foundIndex > -1) {
          this.selectedOrderProducts.splice(foundIndex, 1);
          this.selectedOrderProducts = [...this.selectedOrderProducts];
        }
      });
    });

    this.qcListModalService.notCompatibleTechnicalEquipments$
      .pipe(takeUntil(this.destroy$)).subscribe(items => {
      items.forEach(item => {
        const foundIndex = this.selectedOrderTechnicalEquipment.findIndex(product => product.id === item.id);
        if (foundIndex > -1) {
          this.selectedOrderTechnicalEquipment.splice(foundIndex, 1);
          this.selectedOrderTechnicalEquipment = [...this.selectedOrderTechnicalEquipment];
        }
      });
    });
  }

  getInvoices() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.orderId = +id),
      switchMap(() => this.orderService.getProductsToAccept(this.orderId)),
      takeUntil(this.destroy$)
    ).subscribe(orderProducts => {
      this.orderProducts = orderProducts;
      this.isLoading = false;
      this.loadTechnicalEquipments();
    });
  }

  loadTechnicalEquipments() {
    this.orderService.getTechnicalEquipmentToAccept(this.orderId).subscribe(technicalProducts => {
      this.orderTechnicalEquipments = technicalProducts;
      this.loadTechnicalEquipmentInUse();
    });
  }

  loadTechnicalEquipmentInUse() {
    const query = [{name: 'order_id', value: this.orderId}, {name: 'need_qc', value: true}]
    this.technicalEquipmentsInUseService.get(query).subscribe(equipmentForQc => {
      this.orderTechnicalEquipments.forEach(equipment => {

        equipment.in_use_product_id = [];
        const nomenclatureId = (equipment.nomenclature as Nomenclature).id;
        let requiredQuantity = equipment.passed_quantity;
        equipmentForQc.forEach(forQcEquipment => {
          const canProcees = (forQcEquipment.warehouse_product as WarehouseProduct).nomenclature === nomenclatureId
            && requiredQuantity > 0 && forQcEquipment.quantity > 0;
          if (canProcees) {
            const quantity = forQcEquipment.quantity;
            if (quantity >= requiredQuantity) {
              forQcEquipment.quantity -= requiredQuantity;
              equipment.in_use_product_id.push({technicalEquipment: forQcEquipment, quantity: requiredQuantity, isolated_quantity: 0});

              requiredQuantity = 0;
            } else {
              forQcEquipment.quantity -= quantity;
              requiredQuantity -= quantity;
              equipment.in_use_product_id.push({technicalEquipment: forQcEquipment, quantity: quantity, isolated_quantity: 0});
            }
          }
        });

        let isolateQuantity = equipment.not_passed_quantity;
        equipmentForQc.forEach(forQcEquipment => {
          const canProcees = (forQcEquipment.warehouse_product as WarehouseProduct).nomenclature === nomenclatureId
            && isolateQuantity > 0 && forQcEquipment.quantity > 0;
          if (canProcees) {
            const quantity = forQcEquipment.quantity;
            if (quantity >= isolateQuantity) {
              forQcEquipment.quantity -= isolateQuantity;
              equipment.in_use_product_id.push({technicalEquipment: forQcEquipment, quantity: 0, isolated_quantity: isolateQuantity});

              isolateQuantity = 0;
            } else {
              forQcEquipment.quantity -= quantity;
              isolateQuantity -= quantity;
              equipment.in_use_product_id.push({technicalEquipment: forQcEquipment, quantity: 0, isolated_quantity: isolateQuantity});
            }
          }
        });
      });
    });
  }

  onAcceptToWarehouse() {
    this.orderService.openAcceptToWarehouseModal(this.selectedOrderProducts, this.orderId).subscribe(response => {
      if (response) {
        this.selectedOrderProducts.forEach(product => {
          this.orderProducts = this.orderProducts.filter(p => p.id !== product.id);
        });

        if (this.orderProducts.length === 0 && this.orderTechnicalEquipments.length === 0) {
          this.router.navigate(['../../'], {relativeTo: this.route});
        }

        this.selectedOrderProducts = [];
      }
    });
  }

  onAcceptTechnicalEquipmentToWarehouse() {
    this.orderService.openAcceptToWarehouseModalTechnicalEquipment(this.selectedOrderTechnicalEquipment, this.orderId).subscribe(response => {
      if (response) {
        this.selectedOrderTechnicalEquipment.forEach(product => {
          this.orderTechnicalEquipments = this.orderTechnicalEquipments.filter(p => p.id !== product.id);
        });

        if (this.orderTechnicalEquipments.length === 0 && this.orderProducts.length === 0) {
          this.router.navigate(['../../'], {relativeTo: this.route});
        }

        this.selectedOrderTechnicalEquipment = [];
      }
    });
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedOrderProducts[0].nomenclature.id, 1).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

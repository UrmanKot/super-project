import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvoiceProduct} from '../../../../procurement/models/invoice-product';
import {InvoiceService} from '../../../../procurement/services/invoice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {ModalService} from '@shared/services/modal.service';
import {QcListModalService} from '../../../services/qc-list-modal.service';
import {Nomenclature} from '@shared/models/nomenclature';
import {WarehouseProduct} from '../../../models/warehouse-product';
import {OrderService} from '../../../../procurement/services/order.service';
import {TechnicalEquipmentsInUseService} from '../../../services/technical-equipments-in-use.service';
import {OrderTechnicalEquipment} from '../../../models/order-technical-equipment';

@Component({
  selector: 'pek-warehouse-qc-invoice',
  templateUrl: './warehouse-qc-invoice.component.html',
  styleUrls: ['./warehouse-qc-invoice.component.scss']
})
export class WarehouseQcInvoiceComponent implements OnInit, OnDestroy {
  isLoading = true;

  invoiceId: number;
  invoiceProducts: InvoiceProduct[] = [];
  selectedInvoiceProducts: InvoiceProduct[] = [];

  orderTechnicalEquipments: OrderTechnicalEquipment[] = [];
  selectedOrderTechnicalEquipment: OrderTechnicalEquipment[] = [];
  orderId;

  private destroy$ = new Subject();

  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly modalService: ModalService,
    private qcListModalService: QcListModalService,
    private readonly orderService: OrderService,
    private technicalEquipmentsInUseService: TechnicalEquipmentsInUseService,
  ) {
  }

  ngOnInit(): void {
    this.getInvoices();


    this.qcListModalService.notCompatibleItems$
      .pipe(takeUntil(this.destroy$)).subscribe(items => {
      items.forEach(item => {
        const foundIndex = this.selectedInvoiceProducts.findIndex(product => product.id === item.id);
        if (foundIndex > -1) {
          this.selectedInvoiceProducts.splice(foundIndex, 1);
          this.selectedInvoiceProducts = [...this.selectedInvoiceProducts];
        }
      });
    });
  }

  getInvoices() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.invoiceId = +id),
      switchMap(() => this.invoiceService.getProductsToAccept(this.invoiceId)),
      takeUntil(this.destroy$)
    ).subscribe(invoiceProducts => {
      this.invoiceProducts = invoiceProducts;
      this.isLoading = false;
      this.getInvoiceInfo();
    });
  }

  getInvoiceInfo() {
    this.invoiceService.getById(this.invoiceId).subscribe(invoice => {
      if (invoice.order.id) {
        this.orderId = invoice.order.id;
        this.loadTechnicalEquipments();
      }
    });
  }

  onAcceptToWarehouse() {
    this.invoiceService.openAcceptToWarehouseModal(this.selectedInvoiceProducts, this.invoiceId).subscribe(response => {
      if (response) {
        this.selectedInvoiceProducts.forEach(product => {
          this.invoiceProducts = this.invoiceProducts.filter(p => p.id !== product.id);
        });

        if (this.invoiceProducts.length === 0 && this.orderTechnicalEquipments.length === 0) {
          this.router.navigate(['../../'], {relativeTo: this.route});
        }

        this.selectedInvoiceProducts = [];
      }
    });
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedInvoiceProducts[0].nomenclature.id, 1).subscribe();
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

  onAcceptTechnicalEquipmentToWarehouse() {
    this.orderService.openAcceptToWarehouseModalTechnicalEquipment(this.selectedOrderTechnicalEquipment, this.orderId).subscribe(response => {
      if (response) {
        this.selectedOrderTechnicalEquipment.forEach(product => {
          this.orderTechnicalEquipments = this.orderTechnicalEquipments.filter(p => p.id !== product.id);
        });

        if (this.orderTechnicalEquipments.length === 0 && this.invoiceProducts.length === 0) {
          this.router.navigate(['../../'], {relativeTo: this.route});
        }

        this.selectedOrderTechnicalEquipment = [];
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

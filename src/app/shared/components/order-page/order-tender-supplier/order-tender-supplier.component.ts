import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderSupplier, OrderSupplierConfirmation} from '../../../../confirmation/models/order-supplier';
import {MenuItem} from 'primeng/api';
import {OrderSupplierService} from '../../../../confirmation/services/order-supplier.service';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-order-tender-supplier',
  templateUrl: './order-tender-supplier.component.html',
  styleUrls: ['./order-tender-supplier.component.scss']
})
export class OrderTenderSupplierComponent implements OnInit {

  @Input() orderSupplierConfirmation: OrderSupplierConfirmation;

  isLoadingSuppliers: boolean;

  @Input() isSuppliersConfirmed: boolean;

  orderSuppliers: OrderSupplier[];


  @Output() selectionChange = new EventEmitter<OrderSupplier>();

  selectedOrderSupplier: OrderSupplier;

  orderSupplierMenuItems: MenuItem[] = [{
    label: 'Selected Supplier',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditOrderSupplier()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveOrderSupplier()
      }
    ]
  }];
  @Input() orderId: number;

  constructor(
    private readonly orderSupplierService: OrderSupplierService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getOrderSuppliers();
  }

  onEditOrderSupplier() {
    this.orderSupplierService.openEditSupplierModal(this.selectedOrderSupplier).subscribe(orderSupplier => {
      if (orderSupplier) {
        this.getOrderSuppliers();
        this.selectedOrderSupplier = null;
      }
    });
  }

  getOrderSuppliers() {
    this.orderSupplierService.getOrderSupplierListForOrder(this.orderId).subscribe(orderSuppliers => {
      this.orderSuppliers = orderSuppliers;
      this.isSuppliersConfirmed = orderSuppliers.some(c => c.confirm_status === 2);
      this.isLoadingSuppliers = false;
    });

    this.orderSupplierService.getOrderSupplierConfirmation(this.orderId).subscribe(orderSuppliers => {
      this.orderSupplierConfirmation = orderSuppliers[0];
    });
  }

  openAddSupplier() {
    this.orderSupplierService.openAddSupplierToOrderModal(this.orderSupplierConfirmation.id).subscribe(orderSupplier => {
      if (orderSupplier) {
        this.getOrderSuppliers();
        this.selectedOrderSupplier = null;
      }
    });
  }

  onOrderSupplierConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.orderSupplierService.orderSupplierConfirm(this.orderSupplierConfirmation.id).subscribe();
        this.selectedOrderSupplier = null;
        this.orderSupplierConfirmation.sent_to_confirmation = true;
      }
    });
  }

  onRemoveOrderSupplier() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.orderSupplierService.deleteSupplier(this.selectedOrderSupplier.id).subscribe(() => {
          this.getOrderSuppliers();
          this.selectedOrderSupplier = null;
        });
      }
    });
  }

  getConfirmStatus(status: number) {
    switch (status) {
      case 0:
        return 'Untached';
      case 1:
        return 'Declined';
      case 2:
        return 'Confirmed';
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {EOrderSupplierConfirmStatus, OrderSupplier, OrderSupplierConfirmation} from '../../models/order-supplier';
import {OrderSupplierService} from '../../services/order-supplier.service';
import {ListProduct} from '../../../warehouse/models/list-product';
import {ModalService} from '@shared/services/modal.service';
import {finalize, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-supplier-confirmation',
  templateUrl: './supplier-confirmation.component.html',
  styleUrls: ['./supplier-confirmation.component.scss']
})
export class SupplierConfirmationComponent implements OnInit {
  orderSupplierConfirmStatus = EOrderSupplierConfirmStatus;

  selectedOrder: OrderSupplierConfirmation;

  selectedOrderSupplierConfirmation: OrderSupplierConfirmation;
  selectedOrderSupplier: OrderSupplier;

  orderSupplierConfirmations: OrderSupplierConfirmation[] = [];
  orderSuppliers: OrderSupplier[] = [];

  isLoading = true;
  isLoadingOrderSuppliers = false;

  isPendingConfirm = false;
  isPendingDecline = false;
  isPendingDeclineAll = false;

  private destroy$ = new Subject();

  constructor(
    private readonly orderSupplierService: OrderSupplierService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getConfirmations();
  }

  getConfirmations() {
    this.orderSupplierService.getConfirmations().pipe(
      takeUntil(this.destroy$),
    ).subscribe(confirmations => {
      this.orderSupplierConfirmations = confirmations;
      this.isLoading = false;
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

  getConfirmStatus(status: EOrderSupplierConfirmStatus) {
    switch (status) {
      case EOrderSupplierConfirmStatus.UNTACHED:
        return 'Untached';
      case EOrderSupplierConfirmStatus.DECLINED:
        return 'Declined';
      case EOrderSupplierConfirmStatus.CONFIRMED:
        return 'Confirmed';
    }
  }

  getOrderSuppliers() {
    this.orderSuppliers = [];
    this.isLoadingOrderSuppliers = true;
    this.orderSupplierService.getOrderSuppliers(this.selectedOrder.id).pipe(
      takeUntil(this.destroy$),
    ).subscribe(orderSuppliers => {
      this.orderSuppliers = orderSuppliers;
      this.isLoadingOrderSuppliers = false;
    });
  }

  onSelectOrder() {
    if (this.selectedOrderSupplierConfirmation) {
      this.selectedOrder = this.selectedOrderSupplierConfirmation;
      this.getOrderSuppliers();
    } else {
      this.orderSuppliers = [];
      this.selectedOrder = null;
    }
  }

  onConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isPendingConfirm = true;
        this.orderSupplierService.confirmOrderSupplier(this.selectedOrderSupplier.id)
          .pipe(
            finalize(() => this.isPendingConfirm = false)
          ).subscribe(() => this.clear());
      }
    });
  }

  onDecline() {
    this.modalService.confirm('danger', 'Decline').subscribe(confirm => {
      if (confirm) {
        this.isPendingDecline = true;
        this.orderSupplierService.declineOrderSupplier(this.selectedOrderSupplier.id)
          .pipe(
            finalize(() => this.isPendingDecline = false)
          ).subscribe(() => {
          const index = this.orderSuppliers.findIndex(c => c.id === this.selectedOrderSupplier.id);
          this.orderSuppliers[index].confirm_status = EOrderSupplierConfirmStatus.DECLINED;
          this.selectedOrderSupplier = null;

          if (this.orderSuppliers.every(item => item.confirm_status === EOrderSupplierConfirmStatus.DECLINED)) {
            this.declineAll();
          }
        });
      }
    });
  }

  onDeclineAll() {
    this.modalService.confirm('danger', 'Decline').subscribe(confirm => {
      if (confirm) {
        this.declineAll();
      }
    });
  }

  declineAll() {
    this.isPendingDeclineAll = true;
    this.orderSupplierService.declineAll(this.selectedOrderSupplierConfirmation.id)
      .pipe(
        finalize(() => this.isPendingDeclineAll = false)
      ).subscribe(() => this.clear());
  }

  clear() {
    this.orderSupplierConfirmations = [...this.orderSupplierConfirmations.filter(o => o.id !== this.selectedOrderSupplierConfirmation.id)];
    this.orderSuppliers = [];
    this.selectedOrder = null;
    this.selectedOrderSupplier = null;
    this.selectedOrderSupplierConfirmation = null;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

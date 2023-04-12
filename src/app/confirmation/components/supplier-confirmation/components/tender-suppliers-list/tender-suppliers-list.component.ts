import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EOrderSupplierConfirmStatus, OrderSupplier, OrderSupplierConfirmation} from '../../../../models/order-supplier';
import {finalize, Subject, takeUntil} from 'rxjs';
import {OrderSupplierService} from '../../../../services/order-supplier.service';
import {ModalService} from '@shared/services/modal.service';
import {ListProduct} from '../../../../../warehouse/models/list-product';
import {QuerySearch} from '@shared/models/other';

@Component({
  selector: 'pek-tender-suppliers-list',
  templateUrl: './tender-suppliers-list.component.html',
  styleUrls: ['./tender-suppliers-list.component.scss']
})
export class TenderSuppliersListComponent implements OnInit {
  @Input() query: QuerySearch[];
  @Output() confirmationsCount: EventEmitter<string> = new EventEmitter<string>();
  orderSupplierConfirmStatus = EOrderSupplierConfirmStatus;

  selectedOrder: OrderSupplierConfirmation;

  outsourceSelectedOrderSupplierConfirmation: OrderSupplierConfirmation;
  selectedOutsourceOrderSupplier: OrderSupplier;

  outsourceOrderSupplierConfirmations: OrderSupplierConfirmation[] = [];
  outsourceOrderSuppliers: OrderSupplier[] = [];

  isLoading = true;
  isLoadingOrderSuppliers = false;

  isPendingConfirm = false;
  isPendingDecline = false;
  isPendingDeclineAll = false;

  private destroy$ = new Subject();
  constructor(
    private readonly orderSupplierService: OrderSupplierService,
    private readonly modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.getConfirmations();
  }

  getConfirmations() {
    this.orderSupplierService.getConfirmations(this.query).pipe(
      takeUntil(this.destroy$),
    ).subscribe(confirmations => {
      this.outsourceOrderSupplierConfirmations = confirmations;
      this.confirmationsCount.emit(this.outsourceOrderSupplierConfirmations.length.toString());
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
    this.outsourceOrderSuppliers = [];
    this.isLoadingOrderSuppliers = true;
    this.orderSupplierService.getOrderSuppliers(this.selectedOrder.id).pipe(
      takeUntil(this.destroy$),
    ).subscribe(orderSuppliers => {
      this.outsourceOrderSuppliers = orderSuppliers;
      this.isLoadingOrderSuppliers = false;
    });
  }

  onSelectOutsourceOrder() {
    if (this.outsourceSelectedOrderSupplierConfirmation) {
      this.selectedOrder = this.outsourceSelectedOrderSupplierConfirmation;
      this.getOrderSuppliers();
    } else {
      this.outsourceOrderSuppliers = [];
      this.selectedOrder = null;
    }
  }

  onConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isPendingConfirm = true;
        this.orderSupplierService.confirmOrderSupplier(this.selectedOutsourceOrderSupplier.id)
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
        this.orderSupplierService.declineOrderSupplier(this.selectedOutsourceOrderSupplier.id)
          .pipe(
            finalize(() => this.isPendingDecline = false)
          ).subscribe(() => {
          const index = this.outsourceOrderSuppliers.findIndex(c => c.id === this.selectedOutsourceOrderSupplier.id);
          this.outsourceOrderSuppliers[index].confirm_status = EOrderSupplierConfirmStatus.DECLINED;
          this.selectedOutsourceOrderSupplier = null;

          if (this.outsourceOrderSuppliers.every(item => item.confirm_status === EOrderSupplierConfirmStatus.DECLINED)) {
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
    this.orderSupplierService.declineAll(this.outsourceSelectedOrderSupplierConfirmation.id)
      .pipe(
        finalize(() => this.isPendingDeclineAll = false)
      ).subscribe(() => this.clear());
  }

  clear() {
    this.outsourceOrderSupplierConfirmations = [...this.outsourceOrderSupplierConfirmations.filter(o => o.id !== this.outsourceSelectedOrderSupplierConfirmation.id)];
    this.confirmationsCount.emit(this.outsourceOrderSupplierConfirmations.length.toString());
    this.outsourceOrderSuppliers = [];
    this.selectedOrder = null;
    this.selectedOutsourceOrderSupplier = null;
    this.outsourceSelectedOrderSupplierConfirmation = null;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

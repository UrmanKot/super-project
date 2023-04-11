import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {OrderService} from '../../services/order.service';
import {OrderPageComponent} from '@shared/components/order-page/order-page.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {Order} from '../../models/order';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-procurement-order-page',
  templateUrl: './procurement-order-page.component.html',
  styleUrls: ['./procurement-order-page.component.scss']
})
export class ProcurementOrderPageComponent implements OnInit {
  @ViewChild('orderPage') orderPage: OrderPageComponent;

  form: FormGroup = this.fb.group({
    can_select_supplier: [false]
  });
  orderId: number;
  isOrderLoading = true;

  constructor(
    private readonly fb: FormBuilder,
    private messageService: MessageService,
    private readonly route: ActivatedRoute,
    private readonly orderService: OrderService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.form.get('can_select_supplier').disable();
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.orderId = +id),
    ).subscribe();
  }

  openOrderFiles() {
    this.orderService.filesModal$.next();
  }

  editOrder() {
    this.orderService.editOrderModal$.next();
  }

  loaded(order: Order) {
    console.log('this.order loaded()', order);
    if (!order.can_select_supplier) {
      this.form.get('can_select_supplier').enable();
    } else {
      this.form.get('can_select_supplier').setValue(true);
      this.form.get('can_select_supplier').disable();
    }
    this.isOrderLoading = false;
  }

  tenderToggle($event: any) {
    this.modalService.confirm('danger', 'confirm').subscribe(confirm => {
      if (confirm) {
        const isBlocked = this.orderPage.checkIfIsBlockedToTenderTransform();
        if (isBlocked) {
          this.messageService.add({severity: 'error', summary: `Existing Invoice or Proforma Invoices`,
            detail: `Can't turn to tender with existing Invoice or Proforma Invoices!\n Remove before turning to tender`});
          this.form.get('can_select_supplier').setValue(false);
        } else {

          this.orderService.activateTenderSuppliers(this.orderId).subscribe(() => {
            this.orderPage.clearSupplierRelatedFields();
            this.form.get('can_select_supplier').setValue(true);
            this.form.get('can_select_supplier').disable();
          });
        }
      } else {
        this.form.get('can_select_supplier').setValue(false);
      }
    });
  }
}

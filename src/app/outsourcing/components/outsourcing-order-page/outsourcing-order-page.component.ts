import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../procurement/services/order.service';
import {map, tap} from 'rxjs/operators';
import {Order} from '../../../procurement/models/order';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrderPageComponent} from '@shared/components/order-page/order-page.component';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'pek-outsourcing-order-page',
  templateUrl: './outsourcing-order-page.component.html',
  styleUrls: ['./outsourcing-order-page.component.scss']
})
export class OutsourcingOrderPageComponent implements OnInit {
  @ViewChild('orderPage') orderPage: OrderPageComponent;

  form: FormGroup = this.fb.group({
    can_select_supplier: [false]
  });

  orderId: number;
  isOrderLoading = true;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly orderService: OrderService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.form.get('can_select_supplier').disable();
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.orderId = +id),
    ).subscribe()
  }

  openOrderFiles() {
    this.orderService.filesModal$.next();
  }

  editOrder() {
    this.orderService.editOrderModal$.next()
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
  }
}

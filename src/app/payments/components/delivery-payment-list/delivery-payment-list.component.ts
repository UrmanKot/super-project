import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {Payment} from "../../models/payment";
import {QuerySearch} from "@shared/models/other";
import {AdapterService} from "@shared/services/adapter.service";
import {PaymentService} from "../../services/payment.service";
import {MenuItem} from "primeng/api";
import {ModalService} from "@shared/services/modal.service";

@Component({
  selector: 'pek-delivery-payment-list',
  templateUrl: './delivery-payment-list.component.html',
  styleUrls: ['./delivery-payment-list.component.scss']
})
export class DeliveryPaymentListComponent implements OnInit {

  private destroy$ = new Subject();
  isLoading = true;
  payments: Payment[] = []; //delivery
  todayDate = new Date()
  selectedPayment: Payment;
  statusPayment = ['DECLINED', 'PAID', 'CONFIRMED', 'WAITING'];

  menuItems: MenuItem[] = [{
    label: 'Selected Payment',
    items: [
      {
        label: 'Pay',
        icon: 'pi pi-check',
        command: () => this
        // disabled: true
      },
      {
        label: 'Go to Order',
        icon: 'pi pi-angle-double-right',
        command: () => this
      },
      {
        label: 'Go to Invoice',
        icon: 'pi pi-angle-double-right',
        command: () => this
      },
      {
        label: 'Files',
        icon: 'pi pi-file',
        command: () => this
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this
      }
    ]
  }];

  query: QuerySearch[] = [
    {
      name: 'payment_date_after',
      value: this.adapterService.dateAdapter(new Date(this.todayDate.setMonth(this.todayDate.getMonth() - 1)))
    },
    {
      name: 'payment_date_before',
      value: this.adapterService.dateAdapter(new Date())
    },
    {
      name: 'for_delivery',
      value: true
    }
  ]

  searchDeliveryForm: FormGroup = this.fb.group({
    supplier: [null],
    payment_date_after: [new Date(this.todayDate.setMonth(this.todayDate.getMonth() - 1))],
    payment_date_before: [new Date()],
    accounting_type: [null],
    material_or_service: [null],
    purchase_categories: [null],
    status: [null]
  })

  constructor(
    private fb: FormBuilder,
    private adapterService: AdapterService,
    private paymentService: PaymentService,
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.getPayments()
  }

  getPayments() {
    this.paymentService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(payments => {
      this.payments = payments
      this.payments.forEach(p => p.payment_date = new Date(p.payment_date))
      this.isLoading = false
    });
  }

  selectedCompany(id: number) {
    this.searchDeliveryForm.get('supplier').patchValue(id);
    this.searchPayments()
  }

  searchPayments() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.payments = []
    this.selectedPayment = null
    this.query = [
      {
        name: 'for_delivery',
        value: true
      }
    ]

    if (this.searchDeliveryForm.get('supplier').value) {
      this.query.push({
        name: 'supplier',
        value: this.searchDeliveryForm.get('supplier').value
      })
    }

    if (this.searchDeliveryForm.get('payment_date_after').value) {
      this.query.push({
        name: 'payment_date_after',
        value: this.adapterService.dateAdapter(this.searchDeliveryForm.get('payment_date_after').value)
      })
    }

    if (this.searchDeliveryForm.get('payment_date_before').value) {
      this.query.push({
        name: 'payment_date_before',
        value: this.adapterService.dateAdapter(this.searchDeliveryForm.get('payment_date_before').value)
      })
    }
    if (this.searchDeliveryForm.get('status').value) {
      this.query.push({
        name: 'status',
        value: this.searchDeliveryForm.get('status').value
      })
    }
    this.getPayments()
  }

  onSelectPayment() {
    if (this.selectedPayment) {
      this.menuItems[0].items[0].disabled = this.selectedPayment.status !== 'CONFIRMED'
    }
    if (this.selectedPayment) {
      this.menuItems[0].items[2].disabled = this.selectedPayment.status === 'PAID'
    }
  }

  onCreate() {
    this.paymentService.openCreateEditPaymentForm('create').subscribe(payment => {
      if (payment) {
        this.getPayments()
      }
    })
  }
}

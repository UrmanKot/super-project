import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../../services/payment.service';
import {ModalService} from '@shared/services/modal.service';
import {Payment} from '../../models/payment';
import {ServiceInvoicePaymentService} from '../../services/service-invoice-payment.service';
import {ServiceInvoicePayment} from '../../models/service-invoice-payment';
import {MenuItem} from 'primeng/api';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdapterService} from '@shared/services/adapter.service';
import {Subject, takeUntil} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {environment} from '@env/environment';
import {Invoice} from '../../../procurement/models/invoice';
import {Order} from '../../../procurement/models/order';


@Component({
  selector: 'pek-payment-lists',
  templateUrl: './payment-lists.component.html',
  styleUrls: ['./payment-lists.component.scss']
})
export class PaymentListsComponent implements OnInit {
  link = environment.link_url + 'dash/';

  menuItems: MenuItem[] = [{
    label: 'Selected Payment',
    items: [
      {
        label: 'Pay',
        icon: 'pi pi-check',
        command: () => this.onPayPayment(),
        disabled: true
      },
      {
        label: 'Files',
        icon: 'pi pi-file',
        command: () => this.onShowFilesPayment()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditPayment()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemovePayment()
      }
    ]
  }];
  menuItemsAux: MenuItem[] = [{
    label: 'Selected Auxiliary Payment',
    items: [
      {
        label: 'Pay',
        icon: 'pi pi-check',
        command: () => this.onPayAuxiliaryPayment(),
        disabled: true
      },
      {
        label: 'Go to Order',
        icon: 'pi pi-angle-double-right',
      },
      {
        label: 'Go to Invoice',
        icon: 'pi pi-angle-double-right',
      },
      {
        label: 'File',
        icon: 'pi pi-file',
        command: () => this.onShowFilesAuxiliaryPayments()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEdit()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemovePaymentAuxiliary()
      }
    ]
  }];

  payments: Payment[] = [];
  servicePayments: ServiceInvoicePayment[] = [];

  isLoadingPayments = true;
  isLoadingAuxPayments = true;

  statusPayment = ['DECLINED', 'PAID', 'CONFIRMED', 'WAITING'];

  selectedPayment: Payment;
  selectedServicePayment: ServiceInvoicePayment;
  tabIndex = 0;
  todayDate = new Date();

  private destroy$ = new Subject();

  paymentsQuery: QuerySearch[] = [
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
      value: false
    }
  ];

  auxiliaryPaymentsQuery: QuerySearch[] = [
    {
      name: 'payment_date_after',
      value: this.adapterService.dateAdapter(new Date(this.todayDate.setMonth(this.todayDate.getMonth())))
    },
    {
      name: 'payment_date_before',
      value: this.adapterService.dateAdapter(new Date())
    },
    {
      name: 'for_delivery',
      value: false
    }
  ];

  searchPaymentsForm: FormGroup = this.fb.group({
    supplier: [null],
    payment_date_after: [new Date(this.todayDate.setMonth(this.todayDate.getMonth()))],
    payment_date_before: [new Date()],
    accounting_type: [null],
    material_or_service: [null],
    purchase_categories: [null],
    status: [null]
  });

  searchPaymentsAuxiliaryForm: FormGroup = this.fb.group({
    supplier: [null],
    payment_date_after: [new Date(this.todayDate.setMonth(this.todayDate.getMonth()))],
    payment_date_before: [new Date()],
    accounting_type: [null],
    material_or_service: [null],
    purchase_categories: [null],
    status: [null]
  });

  constructor(
    private paymentService: PaymentService,
    private modalService: ModalService,
    private serviceInvoicePaymentService: ServiceInvoicePaymentService,
    private adapterService: AdapterService,
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.getAllPayments();
  }

  getPayments() {
    this.paymentService.get(this.paymentsQuery).pipe(
      takeUntil(this.destroy$)
    ).subscribe(payments => {
      this.payments = payments;
      this.payments.forEach(p => p.payment_date = new Date(p.payment_date));
      this.isLoadingPayments = false;
    });
  }

  getServiceInvoicePayments() {
    this.serviceInvoicePaymentService.get(this.auxiliaryPaymentsQuery).pipe(
      takeUntil(this.destroy$)
    ).subscribe(payments => {
      this.servicePayments = payments;
      this.servicePayments.forEach(p => p.payment_date = new Date(p.payment_date));
      this.isLoadingAuxPayments = false;
    });
  }

  getAllPayments() {
    this.getPayments();
    this.getServiceInvoicePayments();
  }

  createPayment() {
    this.paymentService.openCreateEditPaymentForm('create').subscribe(payment => {
      if (payment) {
        this.getPayments();
      }
    });
  }

  onCreate() {
    if (this.tabIndex === 0) {
      this.createPayment();
    } else {
      this.createServicePayment();
    }
  }

  onEdit() {
    if (this.tabIndex === 0) {
      this.onEditPayment();
    } else {
      this.onEditPaymentAuxiliary();
    }
  }

  onEditPayment() {
    this.paymentService.openCreateEditPaymentForm('edit', this.selectedPayment).subscribe(payment => {
      if (payment) {
        this.getPayments();
      }
    });
  }

  onEditPaymentAuxiliary() {
    this.serviceInvoicePaymentService.openCreateEditServicePaymentForm('edit', this.selectedServicePayment).subscribe(payment => {
      if (payment) {
        this.getServiceInvoicePayments();
      }
    });
  }

  onRemovePayment() {
    this.modalService.confirm('danger').subscribe((confirm) => {
      if (confirm) {
        this.paymentService.delete(this.selectedPayment).subscribe(() => {
          this.payments = this.payments.filter(p => p.id != this.selectedPayment.id);
        });
      }
    });
  }

  onRemovePaymentAuxiliary() {
    this.modalService.confirm('danger').subscribe((confirm) => {
      if (confirm) {
        this.serviceInvoicePaymentService.delete(this.selectedServicePayment.id).subscribe(() => {
          this.servicePayments = this.servicePayments.filter(p => p.id != this.selectedServicePayment.id);
        });
      }
    });
  }

  createServicePayment() {
    this.serviceInvoicePaymentService.openCreateEditServicePaymentForm('create', null).subscribe(paymentService => {
      console.log(paymentService);
      if (paymentService) {
        this.getServiceInvoicePayments();
      }
    });
  }

  onPayPayment() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.paymentService.pay(
          {
            id: this.selectedPayment.id,
            is_paid: true
          }).subscribe(payment => {
          if (payment) {
            this.searchPayments();
          }
        });
      }
    });
  }

  onPayAuxiliaryPayment() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.serviceInvoicePaymentService.pay(
          {
            id: this.selectedServicePayment.id,
            is_paid: true
          }).subscribe(payment => {
          if (payment) {
            this.searchAuxiliaryPayments();
          }
        });
      }
    });
  }

  onShowFilesPayment() {
    this.paymentService.showPaymentFiles(this.selectedPayment.id).subscribe();
  }

  onShowFilesAuxiliaryPayments() {
    this.serviceInvoicePaymentService.showAuxiliaryPaymentFiles(this.selectedServicePayment.id).subscribe();
  }

  searchPayments() {
    this.isLoadingPayments = true;
    this.destroy$.next(true);
    this.payments = [];
    this.selectedPayment = null;
    this.paymentsQuery = [
      {
        name: 'for_delivery',
        value: false
      }
    ];

    console.log(this.searchPaymentsForm.get('status').value);

    if (this.searchPaymentsForm.get('supplier').value) {
      this.paymentsQuery.push({
        name: 'supplier',
        value: this.searchPaymentsForm.get('supplier').value
      });
    }

    if (this.searchPaymentsForm.get('payment_date_after').value) {
      this.paymentsQuery.push({
        name: 'payment_date_after',
        value: this.adapterService.dateAdapter(this.searchPaymentsForm.get('payment_date_after').value)
      });
    }

    if (this.searchPaymentsForm.get('payment_date_before').value) {
      this.paymentsQuery.push({
        name: 'payment_date_before',
        value: this.adapterService.dateAdapter(this.searchPaymentsForm.get('payment_date_before').value)
      });
    }
    if (this.searchPaymentsForm.get('status').value) {
      this.paymentsQuery.push({
        name: 'status',
        value: this.searchPaymentsForm.get('status').value
      });
    }
    this.getPayments();
  }

  selectedCompany(id: number) {
    this.searchPaymentsForm.get('supplier').patchValue(id);
    this.searchPayments();
  }

  selectedAuxPaymentCompany(id: number) {
    this.searchPaymentsAuxiliaryForm.get('supplier').patchValue(id);
    this.searchAuxiliaryPayments();
  }

  searchAuxiliaryPayments() {
    this.isLoadingAuxPayments = true;
    this.destroy$.next(true);
    this.servicePayments = [];
    this.selectedServicePayment = null;
    this.auxiliaryPaymentsQuery = [
      {
        name: 'for_delivery',
        value: false
      }
    ];

    if (this.searchPaymentsAuxiliaryForm.get('supplier').value) {
      this.auxiliaryPaymentsQuery.push({
        name: 'supplier',
        value: this.searchPaymentsAuxiliaryForm.get('supplier').value
      });
    }
    if (this.searchPaymentsAuxiliaryForm.get('payment_date_after').value) {
      this.auxiliaryPaymentsQuery.push(
        {
          name: 'payment_date_after',
          value: this.adapterService.dateAdapter(this.searchPaymentsForm.get('payment_date_after').value)
        }
      );
    }
    if (this.searchPaymentsAuxiliaryForm.get('payment_date_before').value) {
      this.auxiliaryPaymentsQuery.push(
        {
          name: 'payment_date_before',
          value: this.adapterService.dateAdapter(this.searchPaymentsForm.get('payment_date_before').value)
        }
      );
    }
    if (this.searchPaymentsAuxiliaryForm.get('status').value && this.searchPaymentsAuxiliaryForm.get('status').value !== 'All') {
      this.auxiliaryPaymentsQuery.push(
        {
          name: 'status',
          value: this.searchPaymentsAuxiliaryForm.get('status').value
        }
      );
    }
    this.getServiceInvoicePayments();
  }

  onSelectPayment() {
    if (this.selectedPayment) {
      this.menuItems[0].items[0].disabled = this.selectedPayment.status !== 'CONFIRMED';
    }
    if (this.selectedPayment) {
      this.menuItems[0].items[5].disabled = this.selectedPayment.status === 'PAID';
    }
  }

  onSelectAuxiliaryPayment() {
    if (this.selectedServicePayment) {
      this.menuItemsAux[0].items[0].disabled = this.selectedServicePayment.status !== 'CONFIRMED';
    }
    if (this.selectedServicePayment) {
      this.menuItemsAux[0].items[5].disabled = this.selectedServicePayment.status === 'PAID';
    }
  }

  goToPaymentOrder() {
    if (this.selectedPayment.invoices[0].order.accounting_type === 1) {
      window.open(`${this.link}procurement/orders/products/` + this.selectedPayment.invoices[0].order.id);
    }

    if (this.selectedPayment.invoices[0].order.accounting_type === 2) {
      window.open(`${this.link}outsource/outsource-chain/products/` + this.selectedPayment.invoices[0].order.id);
    }
  }

  goToPaymentInvoice() {
    window.open(`${this.link}accounting/invoices/products/` + this.selectedPayment.invoices[0].id);
  }

  goToServicePaymentInvoice() {
    window.open(`${this.link}accounting/invoices/service-invoice/` + this.selectedServicePayment.service_invoices[0].id);
  }

  goToServicePaymentOrder() {
    if (this.selectedServicePayment.service_invoices[0].order.accounting_type === 1) {
      window.open(`${this.link}procurement/orders/products/` + this.selectedServicePayment.service_invoices[0].order.id);
    }

    if (this.selectedServicePayment.service_invoices[0].order.accounting_type === 2) {
      window.open(`${this.link}outsource/outsource-chain/products/` + this.selectedServicePayment.service_invoices[0].order.id);
    }
  }

  goToLinkPaymentInvoice(invoice: Invoice) {
    window.open(`${this.link}accounting/invoices/products/` + invoice.id);
  }

  goToLinkServicePaymentInvoice(invoice: Invoice) {
    window.open(`${this.link}accounting/invoices/service-invoice/` + invoice.id);
  }

  goToLinkPaymentOrder(order: Order) {
    if (order.accounting_type === 1) {
      window.open(`${this.link}procurement/orders/products/` + order.id);
    }

    if (order.accounting_type === 2) {
      window.open(`${this.link}outsource/outsource-chain/products/` + order.id);
    }
  }
}

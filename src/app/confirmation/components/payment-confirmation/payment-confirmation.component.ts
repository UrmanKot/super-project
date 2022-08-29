import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../../../reports/services/payment.service';
import {Payment} from '../../../reports/models/payment';
import {ServiceInvoicePaymentService} from '../../../reports/services/service-invoice-payment.service';
import {ServiceInvoicePayment} from '../../../reports/models/service-invoice-payment';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent implements OnInit {
  paymentTotals = {
    totalPricePayments: 0,
    totalPriceServiceInvoicePayments: 0,
    totalAmountPayments: 0,
    totalAmountServiceInvoicePayments: 0
  };

  isLoadingPayments = true;
  isLoadingServiceInvoicePayments = true;

  serviceInvoicePayments: ServiceInvoicePayment[] = [];
  payments: Payment[] = [];

  selectedPayments: Payment[] = [];
  selectedServiceInvoicePayments: ServiceInvoicePayment[] = [];

  constructor(
    private readonly paymentService: PaymentService,
    private readonly serviceInvoicePaymentService: ServiceInvoicePaymentService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getPayments();
    this.getServiceInvoicePayments();
  }

  getPayments() {
    this.paymentService.getConfirmationPayments().subscribe(payments => {
      this.payments = payments;
      this.countPaymentsTotals();
      this.isLoadingPayments = false;
    });
  }

  getServiceInvoicePayments() {
    this.serviceInvoicePaymentService.getConfirmationPayments().subscribe(serviceInvoicePayments => {
      this.serviceInvoicePayments = serviceInvoicePayments;
      this.countServiceInvoicePaymentsTotals();
      this.isLoadingServiceInvoicePayments = false;
    });
  }

  countPaymentsTotals() {
    this.paymentTotals.totalPricePayments = 0;
    this.paymentTotals.totalAmountPayments = 0;

    this.payments.forEach(payment => {
      this.paymentTotals.totalPricePayments += payment.invoice_total_price;
      this.paymentTotals.totalAmountPayments += parseFloat(payment.payment_amount);
    });
  }

  countServiceInvoicePaymentsTotals() {
    this.paymentTotals.totalPriceServiceInvoicePayments = 0;
    this.paymentTotals.totalAmountServiceInvoicePayments = 0;

    this.serviceInvoicePayments.forEach(payment => {
      this.paymentTotals.totalPriceServiceInvoicePayments += payment.service_invoice_total_price;
      this.paymentTotals.totalAmountServiceInvoicePayments += parseFloat(payment.service_invoice_payment_amount);
    });
  }

  confirmPayments() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        const ids = this.selectedPayments.map(payment => payment.id);
        this.paymentService.severalConfirm(ids).subscribe(() => {
          ids.forEach(id => this.payments = this.payments.filter(p => p.id !== id));
          this.countPaymentsTotals();
          this.selectedPayments = [];
        })
      }
    });
  }

  declinePayments() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        const ids = this.selectedPayments.map(payment => payment.id);
        this.paymentService.severalDecline(ids).subscribe(() => {
          ids.forEach(id => this.payments = this.payments.filter(p => p.id !== id));
          this.countPaymentsTotals();
          this.selectedPayments = [];
        })
      }
    });
  }

  confirmServiceInvoicePayments() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        const ids = this.selectedServiceInvoicePayments.map(payment => payment.id);
        this.serviceInvoicePaymentService.severalConfirm(ids).subscribe(() => {
          ids.forEach(id => this.serviceInvoicePayments = this.serviceInvoicePayments.filter(p => p.id !== id));
          this.countServiceInvoicePaymentsTotals();
          this.selectedServiceInvoicePayments = [];
        })
      }
    });
  }

  declineServiceInvoicePayments() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        const ids = this.selectedServiceInvoicePayments.map(payment => payment.id);
        this.serviceInvoicePaymentService.severalDecline(ids).subscribe(() => {
          ids.forEach(id => this.serviceInvoicePayments = this.serviceInvoicePayments.filter(p => p.id !== id));
          this.countServiceInvoicePaymentsTotals();
          this.selectedServiceInvoicePayments = [];
        })
      }
    });
  }

  onEditConfirmationLimit() {
    // TODO доделать
  }
}

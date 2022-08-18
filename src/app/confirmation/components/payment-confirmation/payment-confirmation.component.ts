import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../../../reports/services/payment.service';
import {Payment} from '../../../reports/models/payment';

@Component({
  selector: 'pek-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent implements OnInit {
  paymentTotals = {
    totalPriceInvoicesPayments: 0,
    totalPriceAuxiliaryInvoicesPayments: 0,
    totalAmountInvoicesPayments: 0,
    totalAmountAuxiliaryInvoicesPayments: 0
  };

  isLoadingPayments = true;
  payments: Payment[] = [];
  selectedPayments: Payment[] = [];

  constructor(
    private readonly paymentService: PaymentService,
  ) { }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments() {
    this.paymentService.getConfirmationPayments().subscribe(payments => {
      this.payments = payments;

      this.payments.forEach(payment => {
        this.paymentTotals.totalPriceInvoicesPayments += payment.invoice_total_price;
        this.paymentTotals.totalAmountInvoicesPayments += parseFloat(payment.payment_amount);
      });

      this.isLoadingPayments = false;
    })
  }
}

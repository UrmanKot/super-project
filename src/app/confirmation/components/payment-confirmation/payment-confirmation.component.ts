import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServiceInvoicePaymentService} from '../../../payments/services/service-invoice-payment.service';
import {ServiceInvoicePayment} from '../../../payments/models/service-invoice-payment';
import {ModalService} from '@shared/services/modal.service';
import {TreeNode} from 'primeng/api';
import {finalize, forkJoin, Subject, takeUntil} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {
  PaymentConfirmationLimitComponent
} from '../../modals/payment-confirmation-limit/payment-confirmation-limit.component';
import {environment} from '@env/environment';
import {Payment} from '../../../payments/models/payment';
import {PaymentService} from '../../../payments/services/payment.service';

@Component({
  selector: 'pek-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent implements OnInit, OnDestroy {
  link = environment.link_url + 'dash/';

  selectedPaymentsTotals = {
    totalPricePayments: 0,
    totalPriceServiceInvoicePayments: 0,
    totalAmountPayments: 0,
    totalAmountServiceInvoicePayments: 0
  };

  paymentTotals = {
    totalPricePayments: 0,
    totalPriceServiceInvoicePayments: 0,
    totalAmountPayments: 0,
    totalAmountServiceInvoicePayments: 0
  };

  isPendingPaymentsDecline = false;
  isPendingPaymentsConfirm = false;

  isPendingServiceInvoicePaymentsDecline = false;
  isPendingServiceInvoicePaymentsConfirm = false;

  isLoadingPayments = true;
  payments: Payment[] = [];
  paymentTree: TreeNode<Payment | { name: string, id: number }>[] = [];
  selectedPayments: TreeNode<Payment>[] = [];

  isLoadingServiceInvoicePayments = true;
  serviceInvoicePayments: ServiceInvoicePayment[] = [];
  serviceInvoicePaymentsTree: TreeNode<ServiceInvoicePayment | { name: string, id: number }>[] = [];
  selectedServiceInvoicePayments: TreeNode<ServiceInvoicePayment>[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly paymentService: PaymentService,
    private readonly serviceInvoicePaymentService: ServiceInvoicePaymentService,
    private readonly modalService: ModalService,
    private readonly dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    // this.getPayments();
    this.getAllPayments();
  }

  getAllPayments() {
    forkJoin({
      payments: this.paymentService.getConfirmationPayments(),
      serviceInvoicePayments: this.serviceInvoicePaymentService.getConfirmationPayments()
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe(({payments, serviceInvoicePayments}) => {
      this.payments = payments.filter(payment => payment.invoice.order).filter(payment => !payment.invoice.order.purchase_category);
      // @ts-ignore
      this.serviceInvoicePayments.push(...payments.filter(payment => payment.invoice.order).filter(payment => payment.invoice.order.purchase_category));
      this.serviceInvoicePayments.push(...serviceInvoicePayments);

      this.countPaymentsTotals();
      this.createPaymentsTree();

      this.countServiceInvoicePaymentsTotals();
      this.createServiceInvoicePaymentsTree();

      this.isLoadingPayments = false;
      this.isLoadingServiceInvoicePayments = false;

    });
  }

  createPaymentsTree() {
    this.paymentTree = [];

    const tree: TreeNode<Payment | { name: string, id: number }>[] = [];
    const categories: { name: string, id: number }[] = [];

    this.payments.forEach(payment => {
      if (payment.invoice.order.accounting_type === 1) {
        const isAdded = categories.findIndex(el => el.id === 1);
        if (isAdded < 0) {
          categories.push({name: 'Manufacturing Procurement', id: 1});
        }
      }
      if (payment.invoice.order.accounting_type === 2) {
        const isAdded = categories.findIndex(el => el.id === 2);
        if (isAdded < 0) {
          categories.push({name: 'Outsourcing', id: 2});
        }
      }
    });

    categories.forEach(category => {
      tree.push({
        data: category,
        expanded: true,
        parent: null,
        children: []
      });
    });

    tree.forEach(node => {
      this.payments.forEach(payment => {
        if (payment.invoice.order.accounting_type === node.data.id) {
          node.children.push({
            data: payment,
            expanded: false,
            children: []
          });
        }
      });
    });

    this.paymentTree = [...tree];
  }

  createServiceInvoicePaymentsTree() {
    this.serviceInvoicePaymentsTree = [];

    const tree: TreeNode<ServiceInvoicePayment | { name: string, id: number }>[] = [];
    const categories: { name: string, id: number }[] = [];
    this.serviceInvoicePayments.forEach(payment => {
      let purchaseCategory = null;

      if (payment.serviceinvoice) {
        purchaseCategory = payment.serviceinvoice.order?.purchase_category;
      }

      // @ts-ignore
      if (payment.invoice) {
        // @ts-ignore
        purchaseCategory = payment.invoice.order?.purchase_category;
      }

      if (purchaseCategory) {
        const isAdded = categories.findIndex(el => el.id === purchaseCategory.id);
        if (isAdded < 0) {
          categories.push({name: purchaseCategory.name, id: purchaseCategory.id});
        }
      } else {
        const isAdded = categories.findIndex(el => el.id === -2);
        if (isAdded < 0) {
          categories.push({name: 'Manufacturing Procurement And Outsourcing Auxiliary Invoices', id: -2});
        }
      }
    });

    categories.forEach(category => {
      tree.push({
        data: category,
        expanded: true,
        children: [],
        parent: null
      });
    });

    tree.forEach(node => {
      this.serviceInvoicePayments.forEach(product => {
        if (product.serviceinvoice) {
          const purchaseCategory = product.serviceinvoice.order?.purchase_category;
          if (purchaseCategory) {
            if (purchaseCategory.id === node.data.id) {
              node.children.push({
                data: product,
                expanded: false,
                children: []
              });
            }
          } else {
            if (node.data.id === -2) {
              node.children.push({
                data: product,
                expanded: false,
                children: []
              });
            }
          }
        }

        // @ts-ignore
        if (product.invoice) {
          // @ts-ignore
          const purchaseCategory = product.invoice.order.purchase_category;

          if (purchaseCategory) {
            if (purchaseCategory.id === node.data.id) {
              node.children.push({
                data: product,
                expanded: false,
                children: []
              });
            }
          }
        }
      });
    });

    this.serviceInvoicePaymentsTree = [...tree];
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
      this.paymentTotals.totalPriceServiceInvoicePayments += payment.service_invoice_total_price ? payment.service_invoice_total_price : payment.invoice_total_price;
      this.paymentTotals.totalAmountServiceInvoicePayments += payment.service_invoice_payment_amount ? parseFloat(payment.service_invoice_payment_amount) : parseFloat(payment.payment_amount);
    });
  }

  onConfirmPayments() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isPendingPaymentsConfirm = true;
        const ids = this.selectedPayments.filter(payment => payment.data.invoice).map(payment => payment.data.id);
        this.paymentService.severalConfirm(ids).pipe(
          finalize(() => this.isPendingPaymentsConfirm = false)
        ).subscribe(() => {
          ids.forEach(id => this.payments = [...this.payments.filter(p => p.id !== id)]);
          this.countPaymentsTotals();
          this.createPaymentsTree();
          this.selectedPayments = [];
        });
      }
    });
  }

  onDeclinePayments() {
    this.modalService.confirm('danger', 'Decline').subscribe(confirm => {
      if (confirm) {
        this.isPendingPaymentsDecline = true;
        const ids = this.selectedPayments.filter(payment => payment.data.invoice).map(payment => payment.data.id);
        this.paymentService.severalDecline(ids).pipe(
          finalize(() => this.isPendingPaymentsDecline = false)
        ).subscribe(() => {
          ids.forEach(id => this.payments = [...this.payments.filter(p => p.id !== id)]);
          this.countPaymentsTotals();
          this.createPaymentsTree();
          this.selectedPayments = [];
        });
      }
    });
  }

  onConfirmServiceInvoicePayments() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isPendingServiceInvoicePaymentsConfirm = true;


        const serviceInvoicePaymentIds = this.selectedServiceInvoicePayments.filter(payment => payment.data.serviceinvoice).map(payment => payment.data.id);
        // @ts-ignore
        const paymentIds = this.selectedServiceInvoicePayments.filter(payment => payment.data.invoice).map(payment => payment.data.id);

        if (paymentIds.length > 0 && serviceInvoicePaymentIds.length > 0) {
          forkJoin({
            serviceInvoicePaymentIds: this.serviceInvoicePaymentService.severalConfirm(serviceInvoicePaymentIds),
            paymentsIds: this.paymentService.severalConfirm(paymentIds)
          }).pipe(
            finalize(() => this.isPendingServiceInvoicePaymentsConfirm = false)
          ).subscribe(() => {
            serviceInvoicePaymentIds.forEach(id => this.serviceInvoicePayments = [...this.serviceInvoicePayments.filter(p => p.id !== id)]);
            paymentIds.forEach(id => this.serviceInvoicePayments = [...this.serviceInvoicePayments.filter(p => p.id !== id)]);
            this.countServiceInvoicePaymentsTotals();
            this.createServiceInvoicePaymentsTree();
            this.selectedServiceInvoicePayments = [];
          });
        } else if (serviceInvoicePaymentIds.length > 0 && paymentIds.length === 0) {
          this.serviceInvoicePaymentService.severalConfirm(serviceInvoicePaymentIds).pipe(
            finalize(() => this.isPendingServiceInvoicePaymentsConfirm = false)
          ).subscribe(() => {
            serviceInvoicePaymentIds.forEach(id => this.serviceInvoicePayments = [...this.serviceInvoicePayments.filter(p => p.id !== id)]);
            this.countServiceInvoicePaymentsTotals();
            this.createServiceInvoicePaymentsTree();
            this.selectedServiceInvoicePayments = [];
          });
        } else if (paymentIds.length > 0 && serviceInvoicePaymentIds.length === 0) {
          this.paymentService.severalConfirm(paymentIds).pipe(
            finalize(() => this.isPendingServiceInvoicePaymentsConfirm = false)
          ).subscribe(() => {
            paymentIds.forEach(id => this.serviceInvoicePayments = [...this.serviceInvoicePayments.filter(p => p.id !== id)]);
            this.countServiceInvoicePaymentsTotals();
            this.createServiceInvoicePaymentsTree();
            this.selectedServiceInvoicePayments = [];
          });
        }
      }
    });
  }

  onDeclineServiceInvoicePayments() {
    this.modalService.confirm('danger', 'Decline').subscribe(confirm => {
      if (confirm) {
        this.isPendingServiceInvoicePaymentsDecline = true;

        const serviceInvoicePaymentIds = this.selectedServiceInvoicePayments.filter(payment => payment.data.serviceinvoice).map(payment => payment.data.id);
        // @ts-ignore
        const paymentIds = this.selectedServiceInvoicePayments.filter(payment => payment.data.invoice).map(payment => payment.data.id);

        if (serviceInvoicePaymentIds.length > 0 && paymentIds.length > 0) {
          forkJoin({
            serviceInvoicePaymentIds: this.serviceInvoicePaymentService.severalDecline(serviceInvoicePaymentIds),
            paymentsIds: this.paymentService.severalDecline(paymentIds)
          }).pipe(
            finalize(() => this.isPendingServiceInvoicePaymentsDecline = false)
          ).subscribe(() => {
            serviceInvoicePaymentIds.forEach(id => this.serviceInvoicePayments = [...this.serviceInvoicePayments.filter(p => p.id !== id)]);
            paymentIds.forEach(id => this.serviceInvoicePayments = [...this.serviceInvoicePayments.filter(p => p.id !== id)]);
            this.countServiceInvoicePaymentsTotals();
            this.createServiceInvoicePaymentsTree();
            this.selectedServiceInvoicePayments = [];
          });
        } else if (serviceInvoicePaymentIds.length > 0 && paymentIds.length === 0) {
          this.serviceInvoicePaymentService.severalDecline(serviceInvoicePaymentIds).pipe(
            finalize(() => this.isPendingServiceInvoicePaymentsDecline = false)
          ).subscribe(() => {
            serviceInvoicePaymentIds.forEach(id => this.serviceInvoicePayments = [...this.serviceInvoicePayments.filter(p => p.id !== id)]);
            this.countServiceInvoicePaymentsTotals();
            this.createServiceInvoicePaymentsTree();
            this.selectedServiceInvoicePayments = [];
          });
        } else if (paymentIds.length > 0 && serviceInvoicePaymentIds.length === 0) {
          this.paymentService.severalDecline(paymentIds).pipe(
            finalize(() => this.isPendingServiceInvoicePaymentsDecline = false)
          ).subscribe(() => {
            paymentIds.forEach(id => this.serviceInvoicePayments = [...this.serviceInvoicePayments.filter(p => p.id !== id)]);
            this.countServiceInvoicePaymentsTotals();
            this.createServiceInvoicePaymentsTree();
            this.selectedServiceInvoicePayments = [];
          });
        }
      }
    });
  }

  onEditConfirmationLimit() {
    return this.dialog
      .open<PaymentConfirmationLimitComponent>(PaymentConfirmationLimitComponent, {
        width: '30rem',
        height: 'auto',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  // TODO пофиксить

  onGoToPaymentInvoice(payment: Payment) {
    window.open(`/reports/invoices/invoice/` + payment.invoice.id);
  }

  onGoToPaymentServiceInvoice(payment: Payment) {
    window.open(`/reports/invoices/service-invoice/` + payment.invoice.id);
  }

  onGoToServicePaymentInvoice(servicePayment: ServiceInvoicePayment) {
    window.open(`/reports/invoices/service-invoice/` + servicePayment.serviceinvoice.id);
  }

  onGoToPaymentOrder(payment: Payment) {
    let link = '';

    if (payment.invoice.order.accounting_type === 1) {
      link = `/purchasing/chains/order/` + payment.invoice.order.id;
    } else if (payment.invoice.order.accounting_type === 2) {
      link = `/outsourcing/chains/order/` + payment.invoice.order.id;
    }

    window.open(link);
  }

  onGoToServiceOrder(servicePayment: ServiceInvoicePayment) {
    let link = '';

    if (servicePayment.serviceinvoice.order.accounting_type === 1) {
      link = `/purchasing/chains/order/` + servicePayment.serviceinvoice.order.id;
    } else if (servicePayment.serviceinvoice.order.accounting_type === 2) {
      link = `/outsourcing/chains/order/` + servicePayment.serviceinvoice.order.id;
    }

    window.open(link);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onCountSelectedPaymentsTotal() {
    this.selectedPaymentsTotals.totalPricePayments = 0;
    this.selectedPaymentsTotals.totalAmountPayments = 0;

    this.selectedPayments.forEach(node => {
      if (node.data?.invoice_total_price) {
        this.selectedPaymentsTotals.totalPricePayments += node.data.invoice_total_price;
      }
      if (node.data?.payment_amount) {
        this.selectedPaymentsTotals.totalAmountPayments += parseFloat(node.data.payment_amount);
      }
    });
  }

  countSelectedServiceInvoicePaymentsTotal() {
    this.selectedPaymentsTotals.totalPriceServiceInvoicePayments = 0;
    this.selectedPaymentsTotals.totalAmountServiceInvoicePayments = 0;

    this.selectedServiceInvoicePayments.filter(node => node.data).forEach(node => {

      if (node.data.service_invoice_total_price || node.data.invoice_total_price) {
        this.selectedPaymentsTotals.totalPriceServiceInvoicePayments += node.data.service_invoice_total_price ? node.data.service_invoice_total_price : node.data.invoice_total_price;
      }
      if (node.data.service_invoice_payment_amount || node.data.payment_amount) {
        this.selectedPaymentsTotals.totalAmountServiceInvoicePayments += node.data.service_invoice_payment_amount ? parseFloat(node.data.service_invoice_payment_amount) : parseFloat(node.data.payment_amount);
      }
    });
  }
}

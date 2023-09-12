import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../../services/payment.service';
import {ModalService} from '@shared/services/modal.service';
import {Payment, PaymentStatus} from '../../models/payment';
import {ServiceInvoicePaymentService} from '../../services/service-invoice-payment.service';
import {ServiceInvoicePayment} from '../../models/service-invoice-payment';
import {MenuItem, TreeNode} from 'primeng/api';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AdapterService} from '@shared/services/adapter.service';
import {forkJoin, Observable, Subject, takeUntil} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {environment} from '@env/environment';
import {Invoice} from '../../../procurement/models/invoice';
import {Order} from '../../../procurement/models/order';
import * as cloneDeep from 'lodash/cloneDeep';

enum ViewMode {
  LIST = 0,
  HIERARCHY = 1
}

@Component({
  selector: 'pek-payment-lists',
  templateUrl: './payment-lists.component.html',
  styleUrls: ['./payment-lists.component.scss']
})
export class PaymentListsComponent implements OnInit {
  link = environment.link_url + 'dash/';
  ViewMode = ViewMode;
  viewMode = ViewMode.LIST;
  viewServiceInvoiceMode = ViewMode.LIST;

  menuItems: MenuItem[] = [{
    label: 'Selected Payment',
    items: [
      {
        label: 'Payment Card',
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
        label: 'Payment Card',
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
  selectedPayment: Payment;
  servicePayments: ServiceInvoicePayment[] = [];
  selectedServicePayments: ServiceInvoicePayment;

  isLoadingPayments = true;
  isLoadingAuxPayments = true;

  statusPayment = ['DECLINED', 'PAID', 'CONFIRMED', 'WAITING'];

  paymentMethod = ['Card', 'Invoice'];

  tabIndex = 0;
  todayDate = new Date();

  private destroy$ = new Subject();
  private serviceDestroy$ = new Subject();

  paymentsQuery: QuerySearch[] = [
    {
      name: 'payment_date_after',
      value: this.adapterService.dateAdapter(new Date(this.todayDate.setDate(this.todayDate.getDate() - 10)))
    },
    {
      name: 'payment_date_before',
      value: this.adapterService.dateAdapter(new Date())
    },
    {
      name: 'for_delivery',
      value: false
    },
    {
      name: 'without_purchase_categories',
      value: true
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
    },
    {
      name: 'without_purchase_categories',
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
    payment_method: [null],
    status: [null]
  });

  searchPaymentsAuxiliaryForm: FormGroup = this.fb.group({
    supplier: [null],
    payment_date_after: [new Date(this.todayDate.setMonth(this.todayDate.getMonth()))],
    payment_date_before: [new Date()],
    accounting_type: [null],
    material_or_service: [null],
    purchase_categories: [null],
    payment_method: [null],
    status: [null]
  });

  paymentTree: TreeNode<Payment | { name: string, id: number }>[] = [];
  selectedTreePayment: TreeNode<Payment>;
  paymentsTotalAmountConfirmed = 0;
  paymentsTotalAmountPaid = 0;
  paymentsTotalAmountWaiting = 0;
  paymentsTotalAmountDeclined = 0;

  serviceInvoicePayments: ServiceInvoicePayment[] = [];
  serviceInvoicePaymentsTree: TreeNode<ServiceInvoicePayment | { name: string, id: number }>[] = [];
  selectedServiceInvoiceTreePayments: TreeNode<ServiceInvoicePayment>;
  serviceInvoicesTotalAmountConfirmed = 0;
  serviceInvoicesTotalAmountPaid = 0;
  serviceInvoicesTotalAmountWaiting = 0;
  serviceInvoicesTotalAmountDeclined = 0;

  paymentsCount: number = 0;
  paymentsServiceCount: number = 0;

  constructor(
    private paymentService: PaymentService,
    private modalService: ModalService,
    private serviceInvoicePaymentService: ServiceInvoicePaymentService,
    private adapterService: AdapterService,
    private readonly fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.searchUpdatePayments();
    this.searchUpdateServicePayments();
  }

  searchUpdatePayments() {
    this.isLoadingPayments = true;
    this.payments = [];
    this.paymentTree = [];
    this.destroy$.next(true);
    this.selectedTreePayment = null;
    this.paymentService.get(this.paymentsQuery).pipe(
      takeUntil(this.destroy$)
    ).subscribe(payments => {
      payments.forEach(p => {
        p.payment_date = new Date(p.payment_date);
        p.unique_root_plans = [];
        p.invoices.forEach(invoice => {
          invoice.order.unique_root_production_plans = [];
          invoice?.order?.root_production_list_products?.forEach(plan => {
            const existingPlan = p.unique_root_plans.find(uPlan => uPlan.planName === plan.nomenclature.name);
            if (existingPlan) {
              existingPlan.count++;
            } else {
              p.unique_root_plans.push({
                planName: plan.nomenclature.name,
                count: 1
              });
            }
          });
        });
      });

      this.payments = payments.filter(payment =>
        payment.invoices.findIndex(invoice => invoice.order) > -1)
        .filter(payment => payment.invoices.findIndex(invoice => !invoice.order.purchase_category) > -1);
      this.paymentsCount = this.payments.length;

      this.countPaymentsTotals();
      this.createPaymentsTree();

      this.isLoadingPayments = false;
    });
  }

  searchUpdateServicePayments() {
    this.isLoadingAuxPayments = true;
    this.selectedServiceInvoiceTreePayments = null;
    this.serviceInvoicePaymentsTree = [];
    this.serviceInvoicePayments = [];
    this.serviceDestroy$.next(true);
    forkJoin({
      payments: this.paymentService.get(this.auxiliaryPaymentsQuery),
      serviceInvoicePayments: this.serviceInvoicePaymentService.get(this.auxiliaryPaymentsQuery)
    }).pipe(
      takeUntil(this.serviceDestroy$)
    ).subscribe(({payments, serviceInvoicePayments}) => {
      serviceInvoicePayments.forEach(p => {
        p.payment_date = new Date(p.payment_date);
        p.unique_root_plans = [];
        p.service_invoices.forEach(invoice => {
          invoice.order.unique_root_production_plans = [];
          invoice?.order?.root_production_list_products?.forEach(plan => {
            const existingPlan = p.unique_root_plans.find(uPlan => uPlan.planName === plan.nomenclature.name);
            if (existingPlan) {
              existingPlan.count++;
            } else {
              p.unique_root_plans.push({
                planName: plan.nomenclature.name,
                count: 1
              });
            }
          });
        });
      });

      // @ts-ignore
      this.serviceInvoicePayments.push(...payments.filter(payment =>
        payment.invoices.findIndex(invoice => invoice.order) > -1)
        .filter(payment => payment.invoices.findIndex(invoice => invoice.order.purchase_category) > -1)
      );

      this.serviceInvoicePayments.push(...serviceInvoicePayments);
      this.paymentsServiceCount = this.serviceInvoicePayments.length;
      this.serviceInvoicePayments = [...this.serviceInvoicePayments];
      this.createServiceInvoicePaymentsTree();

      this.isLoadingAuxPayments = false;
    });
  }

  countPaymentsTotals() {
    this.paymentsTotalAmountConfirmed = this.payments.filter(payment => payment.status === PaymentStatus.CONFIRMED)
      .reduce((a, b) => a + (+b.amount), 0);

    this.paymentsTotalAmountPaid = this.payments.filter(payment => payment.status === PaymentStatus.PAID)
      .reduce((a, b) => a + (+b.amount), 0);

    this.paymentsTotalAmountWaiting = this.payments.filter(payment => payment.status === PaymentStatus.WAITING)
      .reduce((a, b) => a + (+b.amount), 0);

    this.paymentsTotalAmountDeclined = this.payments.filter(payment => payment.status === PaymentStatus.DECLINED)
      .reduce((a, b) => a + (+b.amount), 0);
  }

  countServiceInvoicePaymentsTotals() {
    this.serviceInvoicesTotalAmountPaid = this.serviceInvoicePayments.filter(payment =>
      payment.status === PaymentStatus.CONFIRMED)
      .reduce((a, b) => a + (+b.amount), 0);

    this.serviceInvoicesTotalAmountConfirmed = this.serviceInvoicePayments.filter(payment =>
      payment.status === PaymentStatus.PAID)
      .reduce((a, b) => a + (+b.amount), 0);

    this.serviceInvoicesTotalAmountWaiting = this.serviceInvoicePayments.filter(payment =>
      payment.status === PaymentStatus.WAITING)
      .reduce((a, b) => a + (+b.amount), 0);

    this.serviceInvoicesTotalAmountDeclined = this.serviceInvoicePayments.filter(payment =>
      payment.status === PaymentStatus.DECLINED)
      .reduce((a, b) => a + (+b.amount), 0);
  }

  createPaymentsTree() {
    this.paymentTree = [];

    const tree: TreeNode<Payment | { name: string, id: number }>[] = [];
    const categories: { name: string, id: number }[] = [];

    this.payments.forEach(payment => {
      const invoicesCount = payment.invoices.length;
      if (invoicesCount > 0) {
        const order = payment.invoices.map(invoice => invoice.order)[invoicesCount - 1];

        if (order.accounting_type === 1) {
          const isAdded = categories.findIndex(el => el.id === 1);
          if (isAdded < 0) {
            categories.push({name: 'Manufacturing Procurement', id: 1});
          }
        }
        if (order.accounting_type === 2) {
          const isAdded = categories.findIndex(el => el.id === 2);
          if (isAdded < 0) {
            categories.push({name: 'Outsourcing', id: 2});
          }
        }
      }
    });

    categories.forEach(category => {
      tree.push({
        data: category,
        expanded: false,
        parent: null,
        children: []
      });
    });

    tree.forEach(node => {
      this.payments.forEach(payment => {
        const invoicesCount = payment.invoices.length;
        if (invoicesCount > 0) {
          const order = payment.invoices.map(invoice => invoice.order)[invoicesCount - 1];
          if (order.accounting_type === node.data.id) {
            node.children.push({
              data: payment,
              expanded: false,
              children: []
            });
          }
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

      if (payment.service_invoices) {
        const invoicesCount = payment.service_invoices.length;
        const firstOrder = payment.service_invoices.map(sInvoice => sInvoice.order)[invoicesCount - 1];
        purchaseCategory = firstOrder?.purchase_category;
      }

      if (payment.invoices) {
        const invoicesCount = payment.invoices.length;
        const firstOrder = payment.invoices.map(invoice => invoice.order)[invoicesCount - 1];
        purchaseCategory = firstOrder?.purchase_category;
      }

      if (purchaseCategory) {
        const isAdded = categories.findIndex(el => el.id === purchaseCategory.id);
        if (isAdded < 0) {
          if (!purchaseCategory.id) {
            purchaseCategory.name = 'Without order';
          }
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
        expanded: false,
        children: [],
        parent: null
      });
    });

    tree.forEach(node => {
      this.serviceInvoicePayments.forEach(product => {
        if (product.service_invoices) {
          const invoicesCount = product.service_invoices.length;
          const firstOrder = product.service_invoices.map(sInvoice => sInvoice.order)[invoicesCount - 1];
          const purchaseCategory = firstOrder?.purchase_category;
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

        if (product.invoices) {
          const invoicesCount = product.invoices.length;
          const firstOrder = product.invoices.map(invoice => invoice.order)[invoicesCount - 1];
          const purchaseCategory = firstOrder.purchase_category;

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

  createPayment() {
    this.paymentService.openCreateEditPaymentForm('create').subscribe(payment => {
      if (payment) {
        this.searchUpdatePayments();
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
    this.paymentService.openCreateEditPaymentForm('edit', this.selectedTreePayment.data).subscribe(payment => {
      if (payment) {
        const paymentMethod = this.searchPaymentsForm.get('payment_method').value;
        let hideFromList = false;
        if (paymentMethod) {
          if (payment.is_paid && paymentMethod === 'Invoice') {
            hideFromList = true;
          }
          if (!payment.is_paid && paymentMethod === 'Card') {
            hideFromList = true;
          }
        }
        const paymentDate = new Date(payment.payment_date);

        if (paymentMethod) {
          this.selectedTreePayment.data.payment_method = paymentMethod;
          this.selectedPayment.payment_method = paymentMethod;
        }
        this.selectedTreePayment.data.payment_date = paymentDate;
        this.selectedTreePayment.data.paid_by_card = payment.paid_by_card;

        this.selectedPayment.payment_date = paymentDate;
        this.selectedPayment.paid_by_card = payment.paid_by_card;

        if (hideFromList) {
          this.removeFromListPayment();
        }

        const paymentFilterStatus = this.searchPaymentsForm.get('status').value;
        if (paymentFilterStatus) {
          this.removeFromListPayment();
        } else {
          if (Boolean(payment.is_paid) !== Boolean(this.selectedPayment.is_paid)) {
            this.updatePaidInfo();
            this.selectedTreePayment.data.is_paid = payment.is_paid;
            this.selectedTreePayment.data.status = payment.is_paid ? PaymentStatus.PAID : (PaymentStatus.CONFIRMED);
            this.selectedPayment.is_paid = payment.is_paid;
            this.selectedPayment.status = payment.is_paid ? PaymentStatus.PAID : (PaymentStatus.CONFIRMED);
            this.updatePaidInfo(true);
          }
        }

      }
    });
  }

  removeFromListPayment() {
    this.updatePaidInfo();

    const removeId = this.selectedTreePayment.data.id;
    const indexToHide = this.selectedTreePayment.parent.children.findIndex(el => el.data.id === removeId);
    this.selectedTreePayment.parent.children.splice(indexToHide, 1);
    this.selectedTreePayment = null;

    const listIndexToHide = this.payments.findIndex(el => el.id === removeId);
    this.payments.splice(listIndexToHide, 1);
    this.selectedPayment = null;

    this.paymentsCount--;
    this.paymentTree = [...this.paymentTree];
    this.payments = [...this.payments];
  }

  removeFromListServicePayment() {
    this.updateServicePaidInfo();

    const removeId = this.selectedServiceInvoiceTreePayments.data.id;
    const indexToHide = this.selectedServiceInvoiceTreePayments.parent.children.findIndex(el => el.data.id === removeId);
    this.selectedServiceInvoiceTreePayments.parent.children.splice(indexToHide, 1);

    const listIndexToHide = this.serviceInvoicePayments.findIndex(el => el.id === removeId);
    this.serviceInvoicePayments.splice(listIndexToHide, 1);
    this.selectedServicePayments = null;

    this.selectedServiceInvoiceTreePayments = null;
    this.paymentsServiceCount--;
    this.serviceInvoicePaymentsTree = [...this.serviceInvoicePaymentsTree];
  }

  onEditPaymentAuxiliary() {
    let call: Observable<any>;
    if (this.selectedServiceInvoiceTreePayments.data.service_invoices) {
      call = this.serviceInvoicePaymentService.openCreateEditServicePaymentForm('edit', this.selectedServiceInvoiceTreePayments.data);
    } else {
      // @ts-ignore
      call = this.paymentService.openCreateEditPaymentForm('edit', this.selectedServiceInvoiceTreePayments.data);
    }

    call.subscribe(payment => {
      if (payment) {
        const paymentMethod = this.searchPaymentsAuxiliaryForm.get('payment_method').value;
        let hideFromList = false;
        if (paymentMethod) {
          if (payment.is_paid && paymentMethod === 'Invoice') {
            hideFromList = true;
          }
          if (!payment.is_paid && paymentMethod === 'Card') {
            hideFromList = true;
          }
        }
        const paymentDate = new Date(payment.payment_date);

        if (paymentMethod) {
          this.selectedServiceInvoiceTreePayments.data.payment_method = paymentMethod;
          this.selectedServicePayments.payment_method = paymentMethod;
        }
        this.selectedServiceInvoiceTreePayments.data.payment_date = paymentDate;
        this.selectedServiceInvoiceTreePayments.data.paid_by_card = payment.paid_by_card;
        this.selectedServicePayments.payment_date = paymentDate;
        this.selectedServicePayments.paid_by_card = payment.paid_by_card;

        if (hideFromList) {
          this.removeFromListServicePayment();
        }

        const paymentFilterStatus = this.searchPaymentsAuxiliaryForm.get('status').value;
        if (paymentFilterStatus) {
          this.removeFromListServicePayment();
        } else {
          if (Boolean(payment.is_paid) !== Boolean(this.selectedServicePayments.is_paid)) {
            this.updateServicePaidInfo();
            this.selectedServiceInvoiceTreePayments.data.is_paid = payment.is_paid;
            this.selectedServiceInvoiceTreePayments.data.status = payment.is_paid ? PaymentStatus.PAID : (PaymentStatus.CONFIRMED);
            this.selectedServicePayments.is_paid = payment.is_paid;
            this.selectedServicePayments.status = payment.is_paid ? PaymentStatus.PAID : (PaymentStatus.CONFIRMED);
            this.updateServicePaidInfo(true);
          }
        }
      }
    });
  }

  onRemovePayment() {
    this.modalService.confirm('danger').subscribe((confirm) => {
      if (confirm) {
        this.paymentService.delete(this.selectedTreePayment.data).subscribe(() => {
          this.removeFromListPayment();
        });
      }
    });
  }

  onRemovePaymentAuxiliary() {
    this.modalService.confirm('danger').subscribe((confirm) => {
      if (confirm) {
        if (this.selectedServiceInvoiceTreePayments.data.service_invoices) {
          this.serviceInvoicePaymentService.delete(this.selectedServiceInvoiceTreePayments.data.id).subscribe(() => {
            this.removeFromListServicePayment();
          });
        } else {
          // @ts-ignore
          this.paymentService.delete(this.selectedServiceInvoiceTreePayments.data as Payment).subscribe(() => {
            this.removeFromListServicePayment();
          });
        }

      }
    });
  }

  createServicePayment() {
    this.serviceInvoicePaymentService.openCreateEditServicePaymentForm('create', null).subscribe(paymentService => {
      if (paymentService) {
        this.searchUpdateServicePayments();
      }
    });
  }

  updatePaidInfo(addAmount = false) {
    const status = this.selectedTreePayment.data.status;
    switch (status) {
      case PaymentStatus.PAID:
        if (addAmount) {
          this.paymentsTotalAmountPaid += (+this.selectedTreePayment.data.amount);
        } else {
          this.paymentsTotalAmountPaid -= this.selectedTreePayment.data.amount;
        }
        break;
      case PaymentStatus.DECLINED:
        if (addAmount) {
          this.paymentsTotalAmountDeclined += (+this.selectedTreePayment.data.amount);
        } else {
          this.paymentsTotalAmountDeclined -= this.selectedTreePayment.data.amount;
        }
        break;
      case PaymentStatus.CONFIRMED:
        if (addAmount) {
          this.paymentsTotalAmountConfirmed += (+this.selectedTreePayment.data.amount);
        } else {
          this.paymentsTotalAmountConfirmed -= this.selectedTreePayment.data.amount;
        }
        break;
      case PaymentStatus.WAITING:
        if (addAmount) {
          this.paymentsTotalAmountWaiting += (+this.selectedTreePayment.data.amount);
        } else {
          this.paymentsTotalAmountWaiting -= this.selectedTreePayment.data.amount;
        }
        break;
    }
  }

  updateServicePaidInfo(addAmount = false) {
    const status = this.selectedServiceInvoiceTreePayments.data.status;
    switch (status) {
      case PaymentStatus.PAID:
        if (addAmount) {
          this.serviceInvoicesTotalAmountPaid += (+this.selectedServiceInvoiceTreePayments.data.amount);
        } else {
          this.serviceInvoicesTotalAmountPaid -= this.selectedServiceInvoiceTreePayments.data.amount;
        }
        break;
      case PaymentStatus.DECLINED:
        if (addAmount) {
          this.serviceInvoicesTotalAmountDeclined += (+this.selectedServiceInvoiceTreePayments.data.amount);
        } else {
          this.serviceInvoicesTotalAmountDeclined -= this.selectedServiceInvoiceTreePayments.data.amount;
        }
        break;
      case PaymentStatus.CONFIRMED:
        if (addAmount) {
          this.serviceInvoicesTotalAmountConfirmed += (+this.selectedServiceInvoiceTreePayments.data.amount);
        } else {
          this.serviceInvoicesTotalAmountConfirmed -= this.selectedServiceInvoiceTreePayments.data.amount;
        }
        break;
      case PaymentStatus.WAITING:
        if (addAmount) {
          this.serviceInvoicesTotalAmountWaiting += (+this.selectedServiceInvoiceTreePayments.data.amount);
        } else {
          this.serviceInvoicesTotalAmountWaiting -= this.selectedServiceInvoiceTreePayments.data.amount;
        }
        break;
    }
  }

  onShowFilesPayment() {
    this.paymentService.showPaymentFiles(this.selectedTreePayment.data.id).subscribe();
  }

  onShowFilesAuxiliaryPayments() {
    if (this.selectedServiceInvoiceTreePayments.data.service_invoices) {
      this.serviceInvoicePaymentService.showAuxiliaryPaymentFiles(this.selectedServiceInvoiceTreePayments.data.id).subscribe();
    } else {
      this.paymentService.showPaymentFiles(this.selectedServiceInvoiceTreePayments.data.id).subscribe();
    }
  }

  searchPayments() {
    this.paymentsQuery = [
      {
        name: 'for_delivery',
        value: false
      },
      {
        name: 'without_purchase_categories',
        value: true
      }
    ];

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
    if (this.searchPaymentsForm.get('payment_method').value) {
      this.paymentsQuery.push({
        name: 'payment_method',
        value: this.searchPaymentsForm.get('payment_method').value
      });
    }
    this.searchUpdatePayments();
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
    this.auxiliaryPaymentsQuery = [
      {
        name: 'for_delivery',
        value: false
      },
      {
        name: 'without_purchase_categories',
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
          value: this.adapterService.dateAdapter(this.searchPaymentsAuxiliaryForm.get('payment_date_after').value)
        }
      );
    }
    if (this.searchPaymentsAuxiliaryForm.get('payment_date_before').value) {
      this.auxiliaryPaymentsQuery.push(
        {
          name: 'payment_date_before',
          value: this.adapterService.dateAdapter(this.searchPaymentsAuxiliaryForm.get('payment_date_before').value)
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
    if (this.searchPaymentsAuxiliaryForm.get('payment_method').value) {
      this.auxiliaryPaymentsQuery.push(
        {
          name: 'payment_method',
          value: this.searchPaymentsAuxiliaryForm.get('payment_method').value
        }
      );
    }
    this.searchUpdateServicePayments();
  }

  onSelectPayment() {
    if (this.selectedTreePayment) {
      this.menuItems[0].items[1].disabled = this.selectedTreePayment.data.status === 'PAID';

      this.selectedPayment = this.payments.find(el => el.id === this.selectedTreePayment.data.id);
    } else {
      this.selectedPayment = null;
    }
  }

  onSelectAuxiliaryPayment() {
    if (this.selectedServiceInvoiceTreePayments) {
      this.menuItemsAux[0].items[1].disabled = this.selectedServiceInvoiceTreePayments.data.status === 'PAID';

      this.selectedServicePayments = this.serviceInvoicePayments.find(el => el.id === this.selectedServiceInvoiceTreePayments.data.id);

    } else {
      this.selectedServicePayments = null;
    }
  }

  goToPaymentOrder() {
    if (this.selectedTreePayment.data.invoices[0].order.accounting_type === 1) {
      window.open(`procurement/chains/order/` + this.selectedTreePayment.data.invoices[0].order.id);
    }

    if (this.selectedTreePayment.data.invoices[0].order.accounting_type === 2) {
      window.open(`outsourcing/chains/order/` + this.selectedTreePayment.data.invoices[0].order.id);
    }
  }

  goToPaymentInvoice() {
    window.open(`/reports/invoices/invoice/` + this.selectedTreePayment.data.invoices[0].id);
  }

  goToPaymentCompany() {
    window.open(`/crm/business-partners/company-page/` + this.selectedTreePayment.data.invoices[0].supplier.id);
  }

  goToServicePaymentInvoice() {
    let invoiceId;
    let link;
    if (this.selectedServiceInvoiceTreePayments.data.service_invoices) {
      invoiceId = this.selectedServiceInvoiceTreePayments.data.service_invoices[0].id;
      link = '/reports/invoices/service-invoice/';
    } else {
      invoiceId = this.selectedServiceInvoiceTreePayments.data.invoices[0].id;
      link = '/reports/invoices/invoice/';
    }
    window.open(`${link}` + invoiceId);
  }

  goToServicePaymentCompany() {
    let supplierId;
    if (this.selectedServiceInvoiceTreePayments.data.service_invoices) {
      supplierId = this.selectedServiceInvoiceTreePayments.data.service_invoices[0].supplier.id;
    } else {
      supplierId = this.selectedServiceInvoiceTreePayments.data.invoices[0].supplier.id;
    }
    window.open(`/crm/business-partners/company-page/` + supplierId,);
  }

  goToServicePaymentOrder() {
    let orderId;
    let orderType;
    if (this.selectedServiceInvoiceTreePayments.data.service_invoices) {
      orderId = this.selectedServiceInvoiceTreePayments.data.service_invoices[0].order.id;
      orderType = this.selectedServiceInvoiceTreePayments.data.service_invoices[0].order.accounting_type;
    } else {
      orderId = this.selectedServiceInvoiceTreePayments.data.invoices[0].order.id;
      orderType = this.selectedServiceInvoiceTreePayments.data.invoices[0].order.accounting_type;
    }
    if (orderType === 1) {
      window.open(`procurement/chains/order/` + orderId);
    }

    if (orderType === 2) {
      window.open(`outsourcing/chains/order/` + orderId);
    }
  }

  goToLinkPaymentInvoice(invoice: Invoice) {
    window.open(`/reports/invoices/invoice/` + invoice.id);
  }

  goToLinkServicePaymentInvoice(invoice: Invoice) {
    window.open(`/reports/invoices/service-invoice/` + invoice.id);
  }

  goToLinkPaymentOrder(order: Order) {
    if (order.accounting_type === 1) {
      window.open(`procurement/chains/order/` + order.id);
    }

    if (order.accounting_type === 2) {
      window.open(`outsourcing/chains/order/` + order.id);
    }
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  expandCollapse(isToExpand = true): void {
    const temp = cloneDeep(this.serviceInvoicePaymentsTree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.serviceInvoicePaymentsTree = temp;
  }

  isDisabledServiceInvoiceBtn() {
    const invoices = this.selectedServiceInvoiceTreePayments.data.service_invoices ?
      this.selectedServiceInvoiceTreePayments.data.service_invoices : this.selectedServiceInvoiceTreePayments.data.invoices;
    return ((invoices.length !== 1));
  }

  selectPaymentTreeData() {
    if (this.selectedPayment) {
      this.paymentTree.forEach(payment => {
        payment.children.forEach(el => {
          if (el.data.id === this.selectedPayment.id) {
            el.parent = payment;
            this.selectedTreePayment = el as TreeNode<Payment>;
          }
        });
      });
      this.onSelectPayment();
    } else {
      this.selectedTreePayment = null;
    }
  }

  listAuxiliaryPaymentSelected() {
    if (this.selectedServicePayments) {
      this.serviceInvoicePaymentsTree.forEach(payment => {
        payment.children.forEach(el => {
          if (el.data.id === this.selectedServicePayments.id) {
            el.parent = payment;
            this.selectedServiceInvoiceTreePayments = el as TreeNode<ServiceInvoicePayment>;
          }
        });
      });
      this.onSelectAuxiliaryPayment();
    } else {
      this.selectedServiceInvoiceTreePayments = null;
    }
  }
}

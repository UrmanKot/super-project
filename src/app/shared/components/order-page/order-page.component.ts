import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {OrderService} from '../../../procurement/services/order.service';
import {ListProduct} from '../../../warehouse/models/list-product';
import {OrderProduct} from '../../../procurement/models/order-product';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {Invoice} from '../../../procurement/models/invoice';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {PaymentService} from '../../../payments/services/payment.service';
import {Payment} from '../../../payments/models/payment';
import {ServiceInvoiceService} from '@shared/services/service-invoice.service';
import {ServiceInvoicePayment} from '../../../payments/models/service-invoice-payment';
import {ServiceInvoicePaymentService} from '../../../payments/services/service-invoice-payment.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'pek-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  @Input() orderId: number;

  productMenuItems: MenuItem[] = [{
    label: 'Selected Item',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Date of Delivery',
        icon: 'pi pi-calendar',
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
      }
    ]
  }];

  proformaInvoiceMenuItems: MenuItem[] = [{
    label: 'Selected Proforma Invoice',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Files',
        icon: 'pi pi pi-file',
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
      }
    ]
  }];

  invoiceMenuItems: MenuItem[] = [{
    label: 'Selected Invoice',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Files',
        icon: 'pi pi pi-file',
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
      }
    ]
  }];

  serviceProformaInvoiceMenuItems: MenuItem[] = [{
    label: 'Selected Auxiliary Proforma Invoice',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Files',
        icon: 'pi pi pi-file',
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
      }
    ]
  }];

  serviceInvoiceMenuItems: MenuItem[] = [{
    label: 'Selected Auxiliary Invoice',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Files',
        icon: 'pi pi pi-file',
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
      }
    ]
  }];

  isLoading = true;
  isLoadingProducts = true;
  isLoadingInvoices = true;
  isLoadingPayments = true;
  isLoadingServiceInvoices = true;
  isLoadingServicePayments = true;
  isLoadingFiles = true;

  products: OrderProduct[] = [];
  proformaInvoices: Invoice[] = [];
  invoices: Invoice[] = [];
  payments: Payment[] = [];
  files: any[] = [];

  serviceProformaInvoices: Invoice[] = [];
  serviceInvoices: Invoice[] = [];
  servicePayments: ServiceInvoicePayment[] = [];

  selectedInvoice: Invoice;
  selectedProduct: OrderProduct;
  selectedProformaInvoice: Invoice;
  selectedPayment: Payment;
  selectedServiceProformaInvoice: Invoice;
  selectedServiceInvoice: Invoice;
  selectedServicePayment: ServiceInvoicePayment;
  selectedFile: any;

  order: Order;

  constructor(
    private readonly orderService: OrderService,
    private readonly invoiceService: InvoiceService,
    private readonly orderProductService: OrderProductService,
    private readonly serviceInvoiceService: ServiceInvoiceService,
    private readonly paymentService: PaymentService,
    private readonly servicePaymentService: ServiceInvoicePaymentService,
  ) {
  }

  ngOnInit(): void {
    this.getOrder();
    this.getProducts();
    this.getInvoices();
    this.getPayments();
    this.getServiceInvoices();
    this.getServicePayments();
    this.getFiles();
  }

  getOrder() {
    this.orderService.getById(this.orderId).subscribe(order => {
      order.statuses.map(x => x.estimated_date_sort = new Date(x.estimated_date));
      order.statuses.sort((a, b) => a.estimated_date_sort - b.estimated_date_sort || a.is_active - b.is_active );
      this.order = order;
      this.isLoading = false;
    });
  }

  getProducts() {
    this.orderProductService.get([
      {name: 'order', value: this.orderId}
    ]).subscribe(products => {
      products.forEach(product => {
        if (!this.products.find(p => p.nomenclature.id === product.nomenclature.id)) {
          product.quantity = products.filter(p => p.nomenclature.id === product.nomenclature.id).reduce((sum, p) => sum + p.quantity, 0);

          const rootLists = products
            .filter(p => p.nomenclature.id === product.nomenclature.id && product.root_production_list_products.length > 0);
          const rootProducts = [];
          rootLists.forEach(roots => {
            if (roots.root_production_list_products.length > 0) {
              roots.root_production_list_products.forEach(el => {
                rootProducts.push(el);
              });
            }
          });

          if (rootProducts) {
            product.root_production_list_products = rootProducts;
          }
          this.products.push(product);
        }
      });

      this.products = this.products.map(p => p);

      this.isLoadingProducts = false;
    });
  }

  getInvoices() {
    this.invoiceService.get([{name: 'order', value: this.orderId}]).subscribe(invoices => {
      this.invoices = invoices.filter(el => el.is_proforma === false);
      this.proformaInvoices = invoices.filter(el => el.is_proforma === true);
      this.isLoadingInvoices = false;
    });
  }

  getPayments() {
    this.paymentService.get([{name: 'order', value: this.orderId}]).subscribe(payments => {
      this.payments = payments;
      this.isLoadingPayments = false;
    });
  }

  getServiceInvoices() {
    this.serviceInvoiceService.get([{name: 'order', value: this.orderId}]).subscribe(serviceInvoices => {
      this.serviceInvoices = serviceInvoices.filter(el => el.is_proforma === false);
      this.serviceProformaInvoices = serviceInvoices.filter(el => el.is_proforma === true);
      this.isLoadingServiceInvoices = false;
    });
  }

  getServicePayments() {
    this.servicePaymentService.get([{name: 'order', value: this.orderId}]).subscribe(servicePayments => {
      this.servicePayments = servicePayments;
      this.isLoadingServicePayments = false;
    });
  }

  getRootLists(rootLists: ListProduct[]): {list: ListProduct, count?: number}[] {
    const lists: {list: ListProduct, count?: number}[] = [];
    rootLists.forEach((res: ListProduct) => {
      if (res) {
        const found = lists.find(el => el.list.nomenclature.name === res.nomenclature.name);
        if (found) {
          found.count++;
        } else {
          lists.push({list: res, count: 1});
        }
      }

    });
    return lists;
  }

  getFiles() {
    this.orderService.getFiles(+this.orderId).subscribe(files => {
      this.files = files;
      this.isLoadingFiles = false;
    });
  }

  onAddProduct() {

  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {OrderService} from '../../../procurement/services/order.service';
import {ListProduct} from '../../../warehouse/models/list-product';
import {OrderMaterial, OrderProduct} from '../../../procurement/models/order-product';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {Invoice} from '../../../procurement/models/invoice';
import {InvoiceService} from '../../../procurement/services/invoice.service';
import {PaymentService} from '../../../payments/services/payment.service';
import {Payment} from '../../../payments/models/payment';
import {ServiceInvoiceService} from '@shared/services/service-invoice.service';
import {ServiceInvoicePayment} from '../../../payments/models/service-invoice-payment';
import {ServiceInvoicePaymentService} from '../../../payments/services/service-invoice-payment.service';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {environment} from '@env/environment';
import {AdapterService} from '@shared/services/adapter.service';
import {finalize} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {OrderSupplier, OrderSupplierConfirmation} from '../../../confirmation/models/order-supplier';
import {OrderSupplierService} from '../../../confirmation/services/order-supplier.service';
import {RequestService} from '../../../warehouse/services/request.service';
import {OrderTechnicalEquipment} from '../../../warehouse/models/order-technical-equipment';
import {OrderTechnicalEquipmentsService} from '../../../warehouse/services/order-technical-equipments.service';
import {PurchaseCategory} from '../../../purchasing/models/purchase-category';
import {PurchasingCategoryService} from '../../../purchasing/services/purchasing-category.service';

export type OrderType = 'procurement' | 'outsourcing' | 'purchase';

@UntilDestroy()
@Component({
  selector: 'pek-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  @Input() orderId: number;
  @Input() orderType: OrderType;
  @Output() loaded: EventEmitter<void> = new EventEmitter<void>();

  orderSuppliers: OrderSupplier[] = [];
  selectedOrderSupplier: OrderSupplier = null;

  link = environment.link_url + 'dash/';

  productMenuItems: MenuItem[] = [{
    label: 'Selected Item',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditOrderProductQuantity(),
      },
      {
        label: 'Date of Delivery',
        icon: 'pi pi-calendar',
        command: () => this.onEditOrderProductDeliveryDate(),
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveOrderProduct(),
      }
    ]
  }];

  proformaInvoiceMenuItems: MenuItem[] = [{
    label: 'Selected Proforma Invoice',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onGoToProformaInvoicePage()
      },
      {
        label: 'Files',
        icon: 'pi pi pi-file',
        command: () => this.openProformaInvoiceFilesModal()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveProformaInvoice()
      }
    ]
  }];

  invoiceMenuItems: MenuItem[] = [{
    label: 'Selected Invoice',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onGoToInvoicePage()
      },
      {
        label: 'Files',
        icon: 'pi pi pi-file',
        command: () => this.openInvoiceFilesModal()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveInvoice()
      }
    ]
  }];

  serviceProformaInvoiceMenuItems: MenuItem[] = [{
    label: 'Selected Auxiliary Proforma Invoice',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onGoToProformaServiceInvoicePage()
      },
      {
        label: 'Files',
        icon: 'pi pi pi-file',
        command: () => this.openServiceProformaInvoiceFilesModal()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveProformaServiceInvoice()
      }
    ]
  }];

  serviceInvoiceMenuItems: MenuItem[] = [{
    label: 'Selected Auxiliary Invoice',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onGoToServiceInvoicePage()
      },
      {
        label: 'Files',
        icon: 'pi pi pi-file',
        command: () => this.openServiceInvoiceFilesModal()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveServiceInvoice()
      }
    ]
  }];

  orderSupplierMenuItems: MenuItem[] = [{
    label: 'Selected Supplier',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditOrderSupplier()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveOrderSupplier()
      }
    ]
  }];

  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  isSuppliersConfirmed = false;

  isLoading = true;
  isLoadingProducts = true;
  isLoadingInvoices = true;
  isLoadingPayments = true;
  isLoadingServiceInvoices = true;
  isLoadingServicePayments = true;
  isLoadingFiles = true;
  isLoadingSuppliers = true;
  isLoadingTechnicalEquipments = true;
  isLoadingPurchasingCategories = true;

  products: OrderProduct[] = [];
  proformaInvoices: Invoice[] = [];
  invoices: Invoice[] = [];
  payments: Payment[] = [];
  orderMaterials: OrderMaterial[] = [];
  technicalEquipments: OrderTechnicalEquipment[] = [];
  purchasingCategories: PurchaseCategory[] = [];
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
  orderSupplierConfirmation: OrderSupplierConfirmation;
  selectedPurchasingCategoryId: number;

  constructor(
    private readonly orderService: OrderService,
    private readonly invoiceService: InvoiceService,
    private readonly orderProductService: OrderProductService,
    private readonly serviceInvoiceService: ServiceInvoiceService,
    private readonly paymentService: PaymentService,
    private readonly modalService: ModalService,
    private readonly adapterService: AdapterService,
    private readonly servicePaymentService: ServiceInvoicePaymentService,
    private readonly orderSupplierService: OrderSupplierService,
    private readonly requestService: RequestService,
    private readonly orderTechnicalEquipmentService: OrderTechnicalEquipmentsService,
    private readonly purchasingCategoryService: PurchasingCategoryService,
  ) {
  }

  ngOnInit(): void {
    this.getOrder();
    this.getInvoices();
    this.getPayments();
    this.getServiceInvoices();
    this.getServicePayments();
    this.getFiles();

    if (this.orderType === 'outsourcing') {
      this.getOrderSuppliers();
      this.getOrderTechnicalEquipments();
    }

    this.orderService.filesModal$.pipe(
      untilDestroyed(this),
    ).subscribe(() => this.openOrderFilesModal());

    this.orderService.editOrderModal$.pipe(
      untilDestroyed(this),
    ).subscribe(() => this.openEditOrderModal());
  }

  getOrderSuppliers() {
    this.orderSupplierService.getOrderSupplierListForOrder(this.orderId).subscribe(orderSuppliers => {
      this.orderSuppliers = orderSuppliers;
      this.isSuppliersConfirmed = orderSuppliers.some(c => c.confirm_status === 2);
      this.isLoadingSuppliers = false;
    });

    this.orderSupplierService.getOrderSupplierConfirmation(this.orderId).subscribe(orderSuppliers => {
      this.orderSupplierConfirmation = orderSuppliers[0];
    });
  }

  getOrder() {
    this.orderService.getById(this.orderId).subscribe(order => {
      order.statuses.map(x => x.estimated_date_sort = new Date(x.estimated_date));
      order.statuses.sort((a, b) => a.estimated_date_sort - b.estimated_date_sort || a.is_active - b.is_active);
      this.order = order;
      this.loaded.next();
      this.isLoading = false;

      if (this.orderType !== 'purchase') {
        this.getProducts();
      }

      if (this.orderType === 'purchase') {
        this.getPurchasingCategories();
      }
    });
  }

  getProducts() {
    this.orderProductService.get([
      {name: 'order', value: this.orderId}
    ]).subscribe(products => {
      products.forEach((product, idx) => {

        product.details = this.order.order_products[idx];
        product.isReady = product.is_technology_ready ? product.is_technology_ready : false;

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

      if (this.orderType === 'outsourcing') {
        const materials = [];

        products.forEach(product => {
          if (product.details.task_materials.length > 0) {
            product.details.task_materials.forEach(m => {
              materials.push(m);
            });
          }
        });

        this.orderMaterials = materials.map(m => m);
      }

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

      if (this.selectedPayment) this.selectedPayment = this.payments.find(p => p.id === this.selectedPayment.id);

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

  getRootLists(rootLists: ListProduct[]): { list: ListProduct, count?: number }[] {
    const lists: { list: ListProduct, count?: number }[] = [];
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

  onEditOrderProductQuantity() {
    this.orderProductService.editOrderProductQuantity(this.selectedProduct).subscribe(orderProduct => {
      if (orderProduct) {
        this.selectedProduct.quantity = orderProduct.quantity;
      }
    });
  }

  onEditOrderProductDeliveryDate() {
    this.orderProductService.editOrderProductDeliveryDate(this.selectedProduct).subscribe(orderProduct => {
      if (orderProduct) {
        this.selectedProduct.reception_date = orderProduct.reception_date;
      }
    });
  }

  onRemoveOrderProduct() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.orderProductService.removeFromOrder(this.selectedProduct).subscribe(() => {
          this.products = this.products.filter(p => p.id !== this.selectedProduct.id);
          this.selectedProduct = null;
        });
      }
    });
  }

  onAddProduct() {
    if (this.orderType === 'procurement') {
      this.orderProductService.openAddProductToOrderModal(false, this.orderId).subscribe(product => {
        if (product) {
          this.getProducts();
        }
      });
    }

    if (this.orderType === 'outsourcing') {
      this.orderProductService.openAddOutsourcingRequestModal(this.orderId).subscribe(product => {
        if (product) {
          this.getProducts();
        }
      })
    }
  }

  onCreateProformaInvoice() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.orderService.createProformaInvoice(this.orderId).subscribe(() => this.getInvoices());
      }
    });
  }

  onGoToProformaInvoicePage() {
    window.open(`${this.link}accounting/invoices/products/${this.selectedProformaInvoice?.id}`);
  }

  openProformaInvoiceFilesModal() {
    this.invoiceService.openInvoiceFilesModal(this.selectedProformaInvoice).subscribe();
  }

  onRemoveProformaInvoice() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.invoiceService.delete(this.selectedProformaInvoice.id).subscribe(() => {
          this.selectedProformaInvoice = null;
          this.getInvoices();
        });
      }
    });
  }

  onCreateInvoice() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.orderService.createInvoice(this.orderId).subscribe(() => this.getInvoices());
      }
    });
  }

  onGoToInvoicePage() {
    window.open(`${this.link}accounting/invoices/products/${this.selectedInvoice?.id}`);
  }

  openInvoiceFilesModal() {
    this.invoiceService.openInvoiceFilesModal(this.selectedInvoice).subscribe();
  }

  onRemoveInvoice() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.invoiceService.delete(this.selectedInvoice.id).subscribe(() => {
          this.selectedInvoice = null;
          this.getInvoices();
        });
      }
    });
  }

  onCreatePayment() {
    this.paymentService.openCreateEditPaymentForm('create', null, this.order.supplier.id).subscribe(payment => {
      if (payment) {
        this.getPayments();
      }
    });
  }

  onEditPayment() {
    this.paymentService.openCreateEditPaymentForm('edit', this.selectedPayment).subscribe(payment => {
      if (payment) {
        this.getPayments();
      }
    });
  }

  onCreateProformaServiceInvoice() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.serviceInvoiceService.create({
          order: this.orderId,
          supplier: this.order.supplier.id,
          is_proforma: true,
        }).subscribe(invoice => {
          this.getServiceInvoices();
          window.open(`${this.link}accounting/invoices/service-invoice/${invoice.id}`);
        });
      }
    });
  }

  onCreateServiceInvoice() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.serviceInvoiceService.create({
          order: this.orderId,
          supplier: this.order.supplier.id,
          is_proforma: false,
        }).subscribe(invoice => {
          this.getServiceInvoices();
          window.open(`${this.link}accounting/invoices/service-invoice/${invoice.id}`);
        });
      }
    });
  }

  onRemoveProformaServiceInvoice() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.serviceInvoiceService.delete(this.selectedServiceProformaInvoice?.id).subscribe(() => {
          this.getServiceInvoices();
          this.selectedServiceProformaInvoice = null;
        });
      }
    });
  }

  onRemoveServiceInvoice() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.serviceInvoiceService.delete(this.selectedServiceInvoice?.id).subscribe(() => {
          this.getServiceInvoices();
          this.selectedServiceInvoice = null;
        });
      }
    });
  }

  openServiceProformaInvoiceFilesModal() {
    this.serviceInvoiceService.openInvoiceFilesModal(this.selectedServiceProformaInvoice).subscribe();
  }

  openServiceInvoiceFilesModal() {
    this.serviceInvoiceService.openInvoiceFilesModal(this.selectedServiceInvoice).subscribe();
  }

  onGoToProformaServiceInvoicePage() {
    window.open(`${this.link}accounting/invoices/service-invoice/${this.selectedServiceProformaInvoice?.id}`);
  }

  onGoToServiceInvoicePage() {
    window.open(`${this.link}accounting/invoices/service-invoice/${this.selectedServiceInvoice?.id}`);
  }

  onCreateServicePayment() {
    this.servicePaymentService.openCreateEditServicePaymentForm('create', null, this.order.supplier.id).subscribe(confirm => {
      if (confirm) {
        this.getServicePayments();
      }
    });
  }

  onEditServicePayment() {
    this.servicePaymentService.openCreateEditServicePaymentForm('edit', this.selectedServicePayment).subscribe(payment => {
      if (payment) {
        this.getPayments();
      }
    });
  }

  getFileName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  openOrderFilesModal() {
    this.modalService.openAddFileToOrderModal(this.orderId).subscribe(confirm => {
      this.getFiles();
    });
  }

  openEditOrderModal() {
    this.orderService.openEditOrderModal(this.order, this.orderType).subscribe(confirm => {
      if (confirm) {
        this.getOrder();
      }
    });
  }

  onDownloadFile(file: any) {
    this.addition.add(file.id);
    this.orderService.downloadFile(file.id).pipe(
      finalize(() => this.addition.delete(file.id))
    ).subscribe(response => {
      const filename = this.getFileName(file.file);
      this.adapterService.downloadFile(filename, response);
    });
  }

  getConfirmStatus(status: number) {
    switch (status) {
      case 0:
        return 'Untached';
      case 1:
        return 'Declined';
      case 2:
        return 'Confirmed';
    }
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id);

        this.orderService.deleteFile(id).pipe(
          finalize(() => this.deletion.delete(id))
        ).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
        });
      }
    });
  }

  openAddSupplier() {
    this.orderSupplierService.openAddSupplierToOrderModal(this.orderSupplierConfirmation.id).subscribe(orderSupplier => {
      if (orderSupplier) {
        this.getOrderSuppliers();
        this.selectedOrderSupplier = null;
      }
    });
  }

  onOrderSupplierConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.orderSupplierService.orderSupplierConfirm(this.orderSupplierConfirmation.id).subscribe();
        this.selectedOrderSupplier = null;
        this.orderSupplierConfirmation.sent_to_confirmation = true;
      }
    });
  }

  onEditOrderSupplier() {
    this.orderSupplierService.openEditSupplierModal(this.selectedOrderSupplier).subscribe(orderSupplier => {
      if (orderSupplier) {
        this.getOrderSuppliers();
        this.selectedOrderSupplier = null;
      }
    });
  }

  onRemoveOrderSupplier() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.orderSupplierService.deleteSupplier(this.selectedOrderSupplier.id).subscribe(() => {
          this.getOrderSuppliers();
          this.selectedOrderSupplier = null;
        });
      }
    });
  }

  onCancelOrderMaterials() {
    this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
      if (confirm) {
        this.requestService.cancel(this.orderId).subscribe();
      }
    });
  }

  getOrderTechnicalEquipments() {
    this.orderTechnicalEquipmentService.get([{name: 'order', value: this.orderId}]).subscribe(technicalEquipments => {
      this.technicalEquipments = technicalEquipments;
      this.isLoadingTechnicalEquipments = false;
    });
  }

  getPurchasingCategories() {
    this.purchasingCategoryService.get([{
      name: 'is_material', value: true
    }]).subscribe(categories => {
      this.purchasingCategories = categories;
      this.selectedPurchasingCategoryId = this.purchasingCategories.find(c => c.id === this.order.purchase_category?.id)?.id;
      this.isLoadingPurchasingCategories = false;
    });
  }

  onSelectPurchaseCategory() {
   const send = {
     purchase_category: this.selectedPurchasingCategoryId,
     id: this.order.id
   }

    // this.order.purchase_category = purchasedCategory;
    this.orderService.updatePartly(send).subscribe();
  }
}

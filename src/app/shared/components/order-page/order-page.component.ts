import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../../procurement/models/order';
import {OrderService} from '../../../procurement/services/order.service';
import {ListProduct} from '../../../warehouse/models/list-product';
import {OrderMaterial, OrderProduct, OrderRequestType} from '../../../procurement/models/order-product';
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
import {OrderSupplierConfirmation} from '../../../confirmation/models/order-supplier';
import {OrderSupplierService} from '../../../confirmation/services/order-supplier.service';
import {RequestService} from '../../../warehouse/services/request.service';
import {OrderTechnicalEquipment} from '../../../warehouse/models/order-technical-equipment';
import {OrderTechnicalEquipmentsService} from '../../../warehouse/services/order-technical-equipments.service';
import {PurchaseCategory} from '../../../purchasing/models/purchase-category';
import {PurchasingCategoryService} from '../../../purchasing/services/purchasing-category.service';
import {AlbumService} from '@shared/services/album.service';
import {forkJoin} from 'rxjs';
import {deepCopy} from 'deep-copy-ts';
import {Router} from "@angular/router";
import {QuerySearch} from '@shared/models/other';

export type OrderType = 'procurement' | 'outsourcing' | 'purchase' | 'manufacturing';

@UntilDestroy()
@Component({
  selector: 'pek-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  @Input() orderId: number;
  @Input() orderType: OrderType;
  @Output() loaded: EventEmitter<Order> = new EventEmitter<Order>();

  isCreatingProformaInvoice = false;
  isCreatingInvoice = false;
  isCreatingServiceInvoice = false;
  isCreatingProformaServiceInvoice = false;

  isPurchaseOrderNonMaterial = false;
  OrderRequestType = OrderRequestType;

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
  isLoadingTechnicalEquipments = true;
  isLoadingPurchasingCategories = true;
  isCancellation = false;

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
  selectedProduct: any;
  selectedProformaInvoice: Invoice;
  selectedPayment: Payment;
  selectedServiceInvoice: Invoice;
  selectedServicePayment: ServiceInvoicePayment;
  selectedFile: any;

  autoStatuses: any;
  manualStatuses: any;

  order: Order;
  orderSupplierConfirmation: OrderSupplierConfirmation;
  selectedPurchasingCategoryId: number;

  isAlbumPrint = false;

  isRootListShown: boolean = false;

  expectedDeliveryDate: Date = null;

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
    public readonly albumService: AlbumService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getOrder(true);
    this.getInvoices();
    this.getPayments();
    this.getServiceInvoices();
    this.getServicePayments();
    this.getFiles();

    if (this.orderType === 'outsourcing') {
      this.getOrderTechnicalEquipments();
    }

    this.orderService.filesModal$.pipe(
      untilDestroyed(this),
    ).subscribe(() => this.openOrderFilesModal());

    this.orderService.editOrderModal$.pipe(
      untilDestroyed(this),
    ).subscribe(() => this.openEditOrderModal());
  }

  printAlbum() {
    this.albumService.getNomenclaturesImages((<OrderProduct[]>this.selectedProduct).map(p => p.nomenclature));
  }

  getOrderProducts() {
    this.orderMaterials = [];
    this.products = [];
    this.isLoadingProducts = true;

    this.orderProductService.getOrderProducts(this.orderId).subscribe(products => {
      products.forEach((tempProduct, idx) => {
        const product = new OrderProduct(tempProduct);
        product.generateUniqueToolRequests()
        product.isReady = product.is_technology_ready ? product.is_technology_ready : false;

        if (!this.products.find(p => p.nomenclature.id === product.nomenclature.id &&
          p.current_technology?.id === product.current_technology?.id
          && p.request_type === product.request_type)) {
          product.totalQuantity = products.filter(p =>
            p.nomenclature.id === product.nomenclature.id &&
            p.current_technology?.id === product.current_technology?.id &&
            p.request_type === product.request_type)
            .reduce((sum, p) => sum + p.quantity, 0);

          const orderProducts = products
            .filter(p => p.nomenclature.id === product.nomenclature.id && p.request_type === product.request_type &&
              p.current_technology?.id === product.current_technology?.id
              && product.root_production_list_products.length > 0);
          const rootProducts = [];

          orderProducts.forEach(product => {
            if (product.root_production_list_products.length > 0) {
              product.root_production_list_products.forEach(el => {
                rootProducts.push(el);
              });
            }
          });
          product.equal_order_products = deepCopy(products.filter(p =>
            p.nomenclature.id === product.nomenclature.id &&
            p.current_technology?.id === product.current_technology?.id &&
            p.request_type === product.request_type));

          if (rootProducts) {
            product.root_production_list_products = rootProducts;
          }

          const toolOrders = [];

          products.filter(p =>
            p.nomenclature.id === product.nomenclature.id &&
            p.current_technology?.id === product.current_technology?.id &&
            p.request_type === product.request_type).forEach(product => {
            product.tool_requests?.forEach(request => {
              const addedToolOrder = toolOrders?.find(toolRequest => toolRequest.tool_order.id === request.tool_order.id)
              if (!addedToolOrder) {
                toolOrders.push(request);
              }
            });
          });

          if (toolOrders) {
            product.uniqueToolOrders = toolOrders;
            console.log('product.tool_requests', product.uniqueToolOrders);

          }

          product.root_production_list_products.forEach((root) => {

            this.order.root_production_plans.forEach((plan: any) => {
              if (plan.list_product.id == root.id) {
                root.productionPlanId = plan.id;
              }
            });
          });

          const lists: { list: ListProduct, count?: number, allLists: ListProduct[] }[] = [];
          product.root_production_list_products.forEach((res: ListProduct) => {
            const found = lists.find(el => el.list.nomenclature.name === res.nomenclature.name);
            if (found) {
              found.count++;
              found.allLists.push(res);
            } else {
              lists.push({list: res, count: 1, allLists: [res]});
            }
          });
          product.display_production_list_products = lists;
          this.products.push(product);
        }
      });
      this.products = this.products.map(p => p);

      if (this.orderType === 'outsourcing') {
        const materials = [];

        products.forEach(product => {
          if (product?.task_materials?.length > 0) {
            product?.task_materials.forEach(m => {
              let nomenclatureId: number;
              let currentTechnology: string;
              if (m.material_nomenclature) {
                nomenclatureId = m.material_nomenclature.id;
                currentTechnology = m.technology;
              }
              if (m.order_product_nomenclature) {
                nomenclatureId = m.order_product_nomenclature.id;
                currentTechnology = m.technology;
              }
              if (m.list_product) {
                nomenclatureId = m.list_product.nomenclature.id;
                currentTechnology = m.technology;
              }
              const inMaterials = materials.find(material => {
                if (material.material_nomenclature) {
                  return material.material_nomenclature.id === nomenclatureId && material.technology === currentTechnology;
                }
                if (material.order_product_nomenclature) {
                  return material.order_product_nomenclature.id === nomenclatureId && material.technology === currentTechnology;
                }
                if (material.list_product) {
                  return material.list_product.nomenclature.id === nomenclatureId && material.technology === currentTechnology;
                }
              });
              if (inMaterials) {
                inMaterials.allIds.push(m.id);
                inMaterials.totalInitialQuantity += m.initial_quantity;
                inMaterials.totalRequiredQuantity += m.required_quantity;
              } else {
                m.allIds = [m.id];
                m.totalInitialQuantity = m.initial_quantity;
                m.totalRequiredQuantity = m.required_quantity;
                materials.push(m);
              }
            });
          }
        });

        this.orderMaterials = materials.map(m => m);
      }

      this.isLoadingProducts = false;
    });
  }

  togglePrintAlbumMode() {
    this.selectedProduct = [];
    this.isAlbumPrint = !this.isAlbumPrint;
  }


  getOrder(getProducts: boolean = false) {
    this.orderService.getById(this.orderId).subscribe(order => {
      order.statuses.map(x => x.estimated_date_sort = new Date(x.estimated_date));
      order.statuses.sort((a, b) => a.estimated_date_sort - b.estimated_date_sort || a.is_active - b.is_active);
      this.order = order;
      this.loaded.next(this.order);
      this.isLoading = false;

      if (!this.order.purchase_category?.is_material) {
        this.isPurchaseOrderNonMaterial = true;
      }

      this.autoStatuses = order.statuses.filter(el => el.status.is_auto_status === true);
      this.manualStatuses = order.statuses.filter(el => el.status.is_auto_status === false);

      if (this.orderType === 'purchase') {
        this.getPurchasingCategories();
      }
      if (getProducts) {
        this.getOrderProducts();
      }
      if (order.expected_delivery_date) {
        this.expectedDeliveryDate = new Date(order.expected_delivery_date);
      }
    });
  }

  getInvoices() {
    this.invoices = [];
    this.isLoadingInvoices = true;
    this.invoiceService.get([{name: 'order', value: this.orderId}]).subscribe(invoices => {
      this.invoices = invoices.filter(el => el.is_proforma === false);
      this.proformaInvoices = invoices.filter(el => el.is_proforma === true);
      this.isLoadingInvoices = false;
    });
  }

  getPayments() {
    this.payments = [];
    this.selectedPayment = null;
    this.isLoadingPayments = true;
    this.paymentService.get([{name: 'order', value: this.orderId}]).subscribe(payments => {
      this.payments = payments;

      if (this.selectedPayment) this.selectedPayment = this.payments.find(p => p.id === this.selectedPayment.id);

      this.isLoadingPayments = false;
    });
  }

  getServiceInvoices() {
    this.isLoadingServiceInvoices = true;
    this.serviceProformaInvoices = [];
    this.serviceInvoices = [];
    this.serviceInvoiceService.get([{name: 'order', value: this.orderId}]).subscribe(serviceInvoices => {
      this.serviceInvoices = serviceInvoices.filter(el => el.is_proforma === false);
      this.serviceProformaInvoices = serviceInvoices.filter(el => el.is_proforma === true);
      this.isLoadingServiceInvoices = false;
    });
  }

  getServicePayments() {
    this.servicePayments = [];
    this.selectedServicePayment = null;
    this.isLoadingServicePayments = true;
    this.servicePaymentService.get([{name: 'order', value: this.orderId}]).subscribe(servicePayments => {
      this.servicePayments = servicePayments;
      this.isLoadingServicePayments = false;
    });
  }

  getRootLists(products: OrderProduct[]): { list: ListProduct, count?: number }[] {
    const lists: { list: ListProduct, count?: number }[] = [];

    // root_production_list_products
    products.forEach(prod => {
      prod.root_production_list_products.forEach((res: ListProduct) => {
        if (res) {
          const found = lists.find(el => el.list.nomenclature.name === res.nomenclature.name);
          if (found) {
            found.count++;
          } else {
            lists.push({list: res, count: 1});
          }
        }

      });
    });

    return lists;
  }

  getFiles() {
    this.files = [];
    this.isLoadingFiles = true;
    this.orderService.getFiles(+this.orderId).subscribe(files => {
      this.files = files;
      this.isLoadingFiles = false;
    });
  }

  clickExpectedDeliveryDateOutside() {
    if (this.order.expected_delivery_date){
      this.expectedDeliveryDate = new Date(this.order.expected_delivery_date);
    } else {
      this.expectedDeliveryDate = null;
    }
  }

  setExpectedDeliveryDate() {
    const send = {id: this.order.id, expected_delivery_date: this.adapterService.dateAdapter(this.expectedDeliveryDate)};
      this.orderService.updatePartly(send).subscribe(() => {
        this.order.expected_delivery_date = this.expectedDeliveryDate;
      });
  }

  clear() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.expectedDeliveryDate = null;
        this.setExpectedDeliveryDate();
      }
    })
  }

  onEditOrderProductQuantity() {
    this.orderProductService.editOrderProductQuantity(<OrderProduct>this.selectedProduct).subscribe(orderProduct => {
      if (orderProduct) {
        this.getOrderProducts();
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
        const deleteCall = [];
        this.selectedProduct.equal_order_products.forEach(product => {
          deleteCall.push(this.orderProductService.removeFromOrder(product));
        });
        forkJoin([...deleteCall]).subscribe(res => {
          this.products = this.products.filter(p => p.id !== this.selectedProduct.id);
          this.selectedProduct = null;
        });
      }
    });
  }

  onAddProduct() {
    if (this.orderType !== 'outsourcing') {
      this.orderProductService.openAddProductToOrderModal(false, this.orderId).subscribe(product => {
        if (product) {
          this.getOrderProducts();
        }
      });
    } else {
      this.orderProductService.openAddOutsourcingRequestModal(this.orderId).subscribe(product => {
        if (product) {
          this.getOrderProducts();
        }
      });
    }
  }

  onCreateProformaInvoice() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isCreatingProformaInvoice = true;
        this.orderService.createProformaInvoice(this.orderId).pipe(
          finalize(() => this.isCreatingProformaInvoice = false)
        ).subscribe(() => this.getInvoices());
      }
    });
  }

  onGoToProformaInvoicePage() {
    window.open(`/reports/invoices/invoice/${this.selectedProformaInvoice?.id}`, '_blank');
  }

  openProformaInvoiceFilesModal() {
    this.invoiceService.openInvoiceFilesModal(this.selectedProformaInvoice.id).subscribe();
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
        this.isCreatingInvoice = true;
        this.orderService.createInvoice(this.orderId).pipe(
          finalize(() => this.isCreatingInvoice = false)
        ).subscribe(() => this.getInvoices());
      }
    });
  }

  onGoToInvoicePage() {
    window.open(`/reports/invoices/invoice/${this.selectedInvoice?.id}`, '_blank');
  }

  openInvoiceFilesModal() {
    this.invoiceService.openInvoiceFilesModal(this.selectedInvoice.id).subscribe();
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
    this.paymentService.openCreateEditPaymentForm('create', null, this.order.supplier?.id, this.orderId).subscribe(payment => {
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

  onCreateServiceInvoice(isProforma: boolean) {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {

        if (isProforma) {
          this.isCreatingProformaServiceInvoice = true;
        } else {
          this.isCreatingServiceInvoice = true;
        }

        this.serviceInvoiceService.create({
          order: this.orderId,
          supplier: this.order.supplier?.id,
          is_proforma: isProforma,
        }).pipe(
          finalize(() => {
            this.isCreatingServiceInvoice = false
            this.isCreatingProformaServiceInvoice = false
          })
        ).subscribe(invoice => {
          this.getServiceInvoices();
          this.router.navigate([`/reports/invoices/service-invoice/${invoice.id}`])
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

  openServiceInvoiceFilesModal() {
    this.serviceInvoiceService.openInvoiceFilesModal(this.selectedServiceInvoice.id).subscribe();
  }

  onGoToServiceInvoicePage() {
    this.router.navigate([`/reports/invoices/service-invoice/${this.selectedServiceInvoice?.id}`])
  }

  onCreateServicePayment() {
    this.servicePaymentService.openCreateEditServicePaymentForm('create', null, this.selectedServiceInvoice.supplier?.id, this.orderId).subscribe(confirm => {
      if (confirm) {
        this.getServicePayments();
      }
    });
  }

  onEditServicePayment() {
    this.servicePaymentService.openCreateEditServicePaymentForm('edit', this.selectedServicePayment).subscribe(payment => {
      if (payment) {
        this.getServicePayments();
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

  onCancelOrderMaterials() {
    this.modalService.confirm('danger', 'Confirm').subscribe(confirm => {
      if (confirm) {
        this.isCancellation = true;
        this.requestService.cancel(this.orderId).pipe(
          finalize(() => this.isCancellation = false)
        ).subscribe(() => {
          this.orderMaterials = [];
          this.products = [];
          this.selectedProduct = null;
          this.isLoadingProducts = true;
          this.getOrderProducts();
        });
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
    const query: QuerySearch[] = [];
    if (this.order.purchase_category?.is_material) {
      query.push({
        name: 'is_material', value: true
      })
    } else {
      query.push({
        name: 'is_material', value: false
      })
    }
    this.purchasingCategoryService.get(query).subscribe(categories => {
      this.purchasingCategories = categories;
      this.selectedPurchasingCategoryId = this.purchasingCategories.find(c => c.id === this.order.purchase_category?.id)?.id;
      this.isLoadingPurchasingCategories = false;
    });
  }

  onSelectPurchaseCategory() {
    const send = {
      purchase_category: this.selectedPurchasingCategoryId,
      id: this.order.id
    };

    this.orderService.updatePartly(send).subscribe();
  }

  onAddMaterial() {
    this.orderProductService.openAddPMaterialToOrder(this.selectedProduct.id).subscribe(request => {
      if (request) {
        this.getOrderProducts();
      }
    });
  }

  public checkIfIsBlockedToTenderTransform(): boolean {
    return this.proformaInvoices.length > 0 || this.invoices.length > 0;
  }

  public clearSupplierRelatedFields() {
    this.order.supplier = null;
    this.order.can_select_supplier = true;
  }
}

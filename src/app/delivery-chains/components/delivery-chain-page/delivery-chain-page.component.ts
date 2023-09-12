import {Component, OnInit} from '@angular/core';
import {DeliveryChain} from "../../models/delivery-chain";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, finalize, map, tap} from "rxjs/operators";
import {DeliveryChainService} from "../../../warehouse/services/delivery-chain.service";
import {SalesChainService} from "../../../sales/services/sales-chain-service";
import {environment} from "@env/environment";
import {Invoice} from "../../../procurement/models/invoice";
import {MenuItem} from "primeng/api";
import {InvoiceService} from "../../../procurement/services/invoice.service";
import {ModalService} from "@shared/services/modal.service";
import {OrderService} from "../../../procurement/services/order.service";
import {ServiceInvoiceService} from "@shared/services/service-invoice.service";
import {AdapterService} from "@shared/services/adapter.service";
import {Payment} from "../../../payments/models/payment";
import {PaymentService} from "../../../payments/services/payment.service";
import {ServiceInvoicePayment} from "../../../payments/models/service-invoice-payment";
import {ServiceInvoicePaymentService} from "../../../payments/services/service-invoice-payment.service";

@Component({
  selector: 'pek-delivery-chain-page',
  templateUrl: './delivery-chain-page.component.html',
  styleUrls: ['./delivery-chain-page.component.scss']
})
export class DeliveryChainPageComponent implements OnInit {
  isCreatingInvoice = false;
  isCreatingServiceInvoice = false;
  isCreatingProformaServiceInvoice = false;

  isLoading = true;
  isLoadingOffers = true;
  isLoadingProducts = true;
  isLoadingInvoices = true;
  isLoadingServiceInvoices = true;
  isLoadingFiles = true;
  isLoadingPayments = true;
  isLoadingServicePayments = true;
  chainId: number;
  selectedServicePayment: ServiceInvoicePayment;

  chain: DeliveryChain;
  offers: any[] = [];
  invoices: Invoice[] = [];

  files: any[] = [];
  selectedFile: any;

  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  serviceProformaInvoices: Invoice[] = [];
  serviceInvoices: Invoice[] = [];
  servicePayments: ServiceInvoicePayment[] = [];

  selectedServiceInvoice: Invoice;


  payments: Payment[] = [];
  selectedPayment: Payment;

  products: any[] = [];

  selectedInvoice: Invoice;

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

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly deliveryService: DeliveryChainService,
    private readonly salesChainService: SalesChainService,
    private readonly invoiceService: InvoiceService,
    private readonly modalService: ModalService,
    private readonly orderService: OrderService,
    private readonly serviceInvoiceService: ServiceInvoiceService,
    private readonly adapterService: AdapterService,
    private readonly paymentService: PaymentService,
    private readonly servicePaymentService: ServiceInvoicePaymentService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.chainId = +id)
    ).subscribe()

    this.getChain();
    this.getOrderedProducts();
    this.getInvoices();
    this.getServiceInvoices();
    this.getFiles();
    this.getPayments();
    this.getServicePayments();
  }

  onGoToInvoicePage() {
    this.router.navigate([`/reports/invoices/invoice/${this.selectedInvoice?.id}`])
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

  getInvoices() {
    this.invoices = [];
    this.isLoadingInvoices = true;
    this.invoiceService.get([{name: 'delivery_chain_id', value: this.chainId}]).subscribe(invoices => {
      this.invoices = invoices;
      this.isLoadingInvoices = false;
    });
  }

  getChain() {
    this.isLoading = true;

    this.deliveryService
      .getChainById(this.chainId)
      .subscribe(chain => {
        this.chain = chain;
        this.getOffers();
        this.isLoading = false;
      });
  }

  getOffers() {
    this.salesChainService.getConfirmedOffer(this.chain.sales_chain_id)
      .subscribe(offers => {
        this.offers = offers;
        this.isLoadingOffers = false;
      });
  }

  getOrderedProducts() {
    this.isLoadingProducts = true;
    this.deliveryService.getOrderedProducts(this.chainId)
      .subscribe(products => {
        this.products = products
        this.isLoadingProducts = false;
      });
  }

  editChain() {
    this.deliveryService.editChainModal(this.chain).pipe(
      filter(Boolean)
    ).subscribe(() => {
      this.getChain();
    })
  }

  getFileName(name: string) {
    let nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  onCreateInvoice() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        const data = {
          delivery_chain_id: this.chainId,
          supplier: this.chain?.customer?.id,
        };

        this.isCreatingInvoice = true;
        this.orderService.createDeliveryInvoice(data).pipe(
          finalize(() => this.isCreatingInvoice = false)
        ).subscribe(() => this.getInvoices());
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
          delivery_chain: this.chainId,
          invoice_date: this.adapterService.dateAdapter(new Date),
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

  getServiceInvoices() {
    this.isLoadingServiceInvoices = true;
    this.serviceInvoices = [];
    this.serviceProformaInvoices = [];
    this.serviceInvoiceService.get([{name: 'delivery_chain_id', value: this.chainId}]).subscribe(serviceInvoices => {
      this.serviceInvoices = serviceInvoices.filter(el => el.is_proforma === false);
      this.serviceProformaInvoices = serviceInvoices.filter(el => el.is_proforma === true);
      this.isLoadingServiceInvoices = false;
    });
  }

  onGoToServiceInvoicePage() {
    this.router.navigate([`/reports/invoices/service-invoice/${this.selectedServiceInvoice?.id}`])
  }

  openServiceInvoiceFilesModal() {
    this.serviceInvoiceService.openInvoiceFilesModal(this.selectedServiceInvoice.id).subscribe();
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

  getServicePayments() {
    this.servicePayments = [];
    this.selectedServicePayment = null;
    this.isLoadingServicePayments = true;
    this.servicePaymentService.get([{name: 'delivery_chain_id', value: this.chainId}]).subscribe(servicePayments => {
      this.servicePayments = servicePayments;
      this.isLoadingServicePayments = false;
    });
  }

  getFiles() {
    this.files = [];
    this.isLoadingFiles = true;
    this.deliveryService.getFiles(this.chainId).subscribe(files => {
      this.files = files;
      this.isLoadingFiles = false;
    });
  }

  openChainFilesModal() {
    this.deliveryService.openFilesModal(this.chainId).subscribe(confirm => {
      this.getFiles();
    });
  }

  getPayments() {
    this.payments = [];
    this.selectedPayment = null;
    this.isLoadingPayments = true;
    this.paymentService.get([{name: 'delivery_chain_id', value: this.chainId}]).subscribe(payments => {
      this.payments = payments;

      if (this.selectedPayment) this.selectedPayment = this.payments.find(p => p.id === this.selectedPayment.id);

      this.isLoadingPayments = false;
    });
  }

  onCreateServicePayment() {
    this.servicePaymentService.openCreateEditServicePaymentForm('create', null, this.selectedServiceInvoice.supplier?.id, this.chainId, true).subscribe(confirm => {
      if (confirm) {
        this.getServicePayments();
      }
    });
  }

  onEditServicePayment() {
    this.servicePaymentService.openCreateEditServicePaymentForm('edit', this.selectedServicePayment, null, null, true).subscribe(payment => {
      if (payment) {
        this.getServicePayments();
      }
    });
  }

  onDownloadFile(file: any) {
    this.addition.add(file.id);
    this.deliveryService.downloadFile(file.id).pipe(
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

        this.deliveryService.deleteFile(id).pipe(
          finalize(() => this.deletion.delete(id))
        ).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
        });
      }
    });
  }

  onCreatePayment() {
    this.paymentService.openCreateEditPaymentForm('create', null, this.chain.customer.id, this.chainId, true).subscribe(payment => {
      if (payment) {
        this.getPayments();
      }
    });
  }

  onEditPayment() {
    this.paymentService.openCreateEditPaymentForm('edit', this.selectedPayment, null, null, true).subscribe(payment => {
      if (payment) {
        this.getPayments();
      }
    });
  }

  protected readonly environment = environment;
}

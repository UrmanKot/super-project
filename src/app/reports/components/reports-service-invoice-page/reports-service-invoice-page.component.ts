import {Component, OnInit} from '@angular/core';
import {Invoice} from "../../../procurement/models/invoice";
import {ModalService} from "@shared/services/modal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicesService} from "../../services/services.service";
import {AdapterService} from "@shared/services/adapter.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceInvoiceService} from "@shared/services/service-invoice.service";
import {ServiceInvoiceProduct} from "../../models/service";
import {filter, finalize, tap} from "rxjs/operators";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'pek-reports-service-invoice-page',
  templateUrl: './reports-service-invoice-page.component.html',
  styleUrls: ['./reports-service-invoice-page.component.scss']
})
export class ReportsServiceInvoicePageComponent implements OnInit {
  isCompletingOrCancellation = false;

  isDeleteBinding = false;
  isBinding = false;

  selectedBindInvoice: Invoice;
  isLoadingBindedInvoices = false;

  isPureTotalChanged = false;

  invoiceServiceMenuItems: MenuItem[] = [{
    label: 'Selected Invoice Service',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editInvoiceService()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.removeInvoiceService()
      }
    ]
  }];

  readonly deletion = new Set<number>();
  readonly addition = new Set<number>();

  isLoading = true;
  isViewingMode = false;

  files: any[] = [];
  selectedFile: any;
  isLoadingFiles = true;

  invoiceServices: ServiceInvoiceProduct[];

  invoiceId = this.route.snapshot.paramMap.get('id');
  isLoadingRelated = true;

  form: FormGroup = this.fb.group({
    supplier_serial_number: [''],
    supplier: [{value: null}, Validators.required],
    supplier_total_price: [{value: 0, disabled: false}, Validators.required],
    total_price: [{value: 0, disabled: this.isViewingMode}],
    pure_total_price: [{value: 0, disabled: false}],
    id: [this.invoiceId, Validators.required],
    currency: [null, Validators.required],
    system_creation_date: [null],
    invoice_date: [null],
    items_reception_date: [null],
    due_date: [null],
    invoice_reception_date: [null],
    proformas: [[]],
    exchange_rate: [1.0],
  });

  invoice: Invoice;
  related: Invoice[] = [];

  isSaving = false;
  isLoadingServices = false;
  selectedService: any;

  constructor(
    private modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private servicesService: ServicesService,
    private adapterService: AdapterService,
    private invoiceService: ServiceInvoiceService,
    private readonly fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.getInvoice();
    this.getFiles();
    this.getServices();
  }

  getInvoice() {
    this.isPureTotalChanged = false;
    this.isLoading = true;
    this.isLoadingBindedInvoices = true;
    this.selectedBindInvoice = null;

    if (this.invoice) {
      this.invoice.to_invoices = [];
    }

    this.invoiceService.getById(+this.invoiceId).subscribe(res => {
      this.invoice = res;

      if (res.supplier) {
        this.invoiceService.get([{name: 'supplier', value: res.supplier.id}, {
          name: 'is_proforma',
          value: !res.is_proforma
        }]).subscribe(related => {
          this.related = related;
          this.isLoadingRelated = false;
        });
      } else {
        this.isLoadingRelated = false;
      }

      this.invoice.total_price = Math.round(this.invoice.total_price * 100) / 100;
      if (!this.invoice.order) {
        this.form.get('supplier').enable();
      }

      if (this.invoice.invoice_date != null) {
        this.invoice.invoice_date = new Date(this.invoice.invoice_date);
      }
      if (this.invoice.system_creation_date != null) {
        this.invoice.system_creation_date = new Date(this.invoice.system_creation_date);
      }
      if (this.invoice.due_date != null) {
        this.invoice.due_date = new Date(this.invoice.due_date);
      }
      if (this.invoice.invoice_reception_date != null) {
        this.invoice.invoice_reception_date = new Date(this.invoice.invoice_reception_date);
      }
      if (this.invoice.items_reception_date != null) {
        this.invoice.items_reception_date = new Date(this.invoice.items_reception_date);
      }


      this.form.patchValue(this.invoice);

      if (this.invoice.supplier) {
        this.form.get('supplier').patchValue(this.invoice.supplier.id);
      }
      if (this.invoice.currency) {
        this.form.get('currency').patchValue(this.invoice.currency.code);
      }

      if (this.invoice.proformas) {
        this.form.get('proformas').patchValue(this.invoice.proformas.map(x => x.id));
      }

      this.isLoading = false;
      this.isLoadingBindedInvoices = false;
    });
  }

  getServices() {
    this.selectedService = null;
    this.isLoadingServices = true;
    this.invoiceServices = [];
    this.servicesService.get([{name: 'service_invoice', value: this.invoiceId}]).subscribe(services => {
      // @ts-ignore
      this.invoiceServices = services;
      if (this.invoice?.pure_total_price) {
        this.form.get('pure_total_price').setValue((this.invoice.pure_total_price).toFixed(2));
      }
      this.isLoadingServices = false;
    });
  }

  onSelectCompany(id: number) {
    this.form.get('supplier').patchValue(id)
  }

  changeCurrency(value: any) {
    this.form.get('currency').patchValue(value?.code ?? null);

    this.invoice.currency.symbol = value?.symbol ?? 'None'

    if (this.form.get('currency').value === 'EUR') {
      this.form.get('exchange_rate').setValue(1);
      this.form.get('pure_total_price').setValue(this.form.get('pure_total_price').value.toFixed(2))
    }
  }

  calculatePureTotalPrice() {
    let sum = 0;

    this.invoiceServices.forEach(service => {
      const price = parseFloat(service.pure_price);
      const newPrice = price - (price * parseFloat(service.discount) / 100);
      // newPrice = newPrice + (newPrice / 100 * service.ddv);
      sum += newPrice;
    });

    sum = parseFloat(sum.toFixed(3));
    return sum;
  }

  saveInvoice() {
    if (this.form.valid) {
      this.isSaving = true;
      const sendData = this.form.value;
      sendData.system_creation_date = this.adapterService.dateAdapter(this.form.value.system_creation_date);
      sendData.due_date = this.adapterService.dateAdapter(this.form.value.due_date);
      sendData.invoice_reception_date = this.adapterService.dateAdapter(this.form.value.invoice_reception_date);
      sendData.invoice_date = this.adapterService.dateAdapter(this.form.value.invoice_date);

      if (this.isPureTotalChanged && this.invoice.pure_total_price !== this.form.get('pure_total_price').value) {
        sendData.manual_pure_total_price = this.form.get('pure_total_price').value;
      }

      this.invoiceService.updatePartly(sendData).pipe(
        finalize(() => this.isSaving = false)
      )
        .subscribe(() => {
          this.getInvoice();
        });
    }
  }

  changeRate() {
    // this.form.get('pure_total_price').setValue((this.invoice.pure_total_price * this.form.get('exchange_rate').value).toFixed(2));
  }

  getFileName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  onRemoveFile(id: number) {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.deletion.add(id);

        this.invoiceService.removeFile(id).pipe(
          finalize(() => this.deletion.delete(id))
        ).subscribe(() => {
          const index = this.files.findIndex(f => f.id === id);
          this.files.splice(index, 1);
        });
      }
    });
  }

  onDownloadFile(file: any) {
    this.addition.add(file.id);
    this.invoiceService.downloadFile(file.id).pipe(
      finalize(() => this.addition.delete(file.id))
    ).subscribe(response => {
      const filename = this.getFileName(file.file);
      this.adapterService.downloadFile(filename, response);
    });
  }

  openInvoiceFilesModal() {
    this.invoiceService.openInvoiceFilesModal(+this.invoiceId).subscribe(confirm => {
      this.getFiles();
    });
  }

  getFiles() {
    this.files = [];
    this.isLoadingFiles = true;

    this.invoiceService.getFiles(+this.invoiceId).subscribe(files => {
      this.files = files;
      this.isLoadingFiles = false;
    });
  }

  createInvoiceService() {
    this.servicesService.createEditServiceModal('create', +this.invoiceId, 'service').subscribe(service => {
      if (service) {
        this.getServices();
        this.getInvoice();
      }
    })
  }

  editInvoiceService() {
    this.servicesService.createEditServiceModal('edit', +this.invoiceId, 'service', this.selectedService).subscribe(service => {
      if (service) {
        this.getServices();
        this.getInvoice();
      }
    })
  }

  private removeInvoiceService() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.servicesService.delete(this.selectedService.id).subscribe(() => {
          this.getServices();
          this.getInvoice();
        })
      }
    })
  }

  cancellation() {
    this.modalService.confirm('success').pipe(
      filter(Boolean),
    ).subscribe(() => {
      this.isCompletingOrCancellation = true;
      const send = {
        id: this.invoice.id,
        completed: false,
      };

      this.invoiceService.cancellation(send).pipe(
        finalize(() => this.isCompletingOrCancellation = false),
        tap(() => this.invoice.completed = false),
        // tap(() => this.getInvoiceProducts()),
        // tap(() => this.getServices()),
      ).subscribe();
    })
  }

  complete() {
    this.modalService.confirm('success').pipe(
      filter(Boolean),
    ).subscribe(() => {
      this.isCompletingOrCancellation = true;
      const send = {id: this.invoice.id, completed: true};
      this.invoiceService.updatePartly(send as Invoice).pipe(
        finalize(() => this.isCompletingOrCancellation = false),
        // tap(() => this.getInvoice()),
        tap(() => this.invoice.completed = true),
        // tap(() => this.getInvoiceProducts()),
        // tap(() => this.getServices()),
      ).subscribe();
    })
  }

  bindInvoice() {
    this.invoiceService.bindInvoiceModal(this.invoice.is_proforma).subscribe(invoice => {
      if (invoice) {
        this.isBinding = true;
        const invoicesId = [];
        this.invoice.to_invoices.forEach(invoice => {
          invoicesId.push(invoice.id);
        });

        invoicesId.push(invoice.id);

        // this.invoice.to_invoices.push(invoiceId);

        const data = {
          to_invoices: invoicesId,
        };

        this.invoiceService.bindInvoice(this.invoice.id, data).pipe(
          finalize(() => this.isBinding = false)
        ).subscribe(() => {
          this.getInvoice();
        });
      }
    })
  }

  deleteBindInvoice() {
    this.modalService.confirm('danger').subscribe(res => {
      if (res) {
        this.isDeleteBinding = true;
        let invoicesId = [];
        this.invoice.to_invoices.forEach(invoice => {
          invoicesId.push(invoice.id);
        });

        invoicesId = invoicesId.filter(id => id !== this.selectedBindInvoice.id);

        const data = {
          to_invoices: invoicesId,
        };

        this.invoiceService.bindInvoice(this.invoice.id, data).pipe(
          finalize(() => this.isDeleteBinding = false)
        ).subscribe(() => {
          this.getInvoice();
        });
      }
    });
  }

  pureTotalChange() {
    this.isPureTotalChanged = true;
  }
}

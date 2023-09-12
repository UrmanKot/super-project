import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Invoice} from "../../../procurement/models/invoice";
import {forkJoin, Observable, of, Subject, switchMap} from "rxjs";
import {ColumnFilterService} from "@shared/services/column-filter.service";
import {debounceTime, finalize, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {QuerySearch} from "@shared/models/other";
import {Table} from "primeng/table";
import {AdapterService} from "@shared/services/adapter.service";
import {InvoiceService} from "../../../procurement/services/invoice.service";
import {ServiceInvoiceService} from "@shared/services/service-invoice.service";
import {MenuItem} from "primeng/api";
import {ModalService} from "@shared/services/modal.service";

export class AccountingNumber {
  title: string;
  accounting_number: number;
}

@UntilDestroy()
@Component({
  selector: 'pek-reports-invoices',
  templateUrl: './reports-invoices.component.html',
  styleUrls: ['./reports-invoices.component.scss'],
})
export class ReportsInvoicesComponent implements OnInit {
  @ViewChild('dt') dt: Table;
  @ViewChild('st') st: Table;

  isGenerating = false;
  isGeneratingProforma = false;

  reportItems = [
    {
      label: 'XML',
      icon: 'pi pi-file-edit',
      command: () => this.generateXmlForAll()
    },
    // {
    //   label: 'XML no ddv',
    //   icon: 'pi pi-file-edit',
    //   command: () => this.generateXmlNoDdvForAll(),
    // },
    {
      label: 'Intrastat',
      icon: 'pi pi-file-export',
      command: () => this.generateIntrastatForAll(),
    },
    {
      label: 'Excel',
      icon: 'pi pi-file-excel',
      command: () => this.generateExel()
    }
  ]


  tabIndex = 0;

  menuItems: MenuItem[] = [{
    label: 'Selected Invoice',
    items: [
      {
        label: 'Go To Order',
        icon: 'pi pi-angle-double-right',
        command: () => this.onGoToOrder()
      },
      {
        label: 'Files',
        icon: 'pi pi-file',
        command: () => this.onOpenFiles()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditInvoice()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveInvoice()
      }
    ]
  }];

  menuItemsProforma: MenuItem[] = [{
    label: 'Selected Proforma Invoice',
    items: [
      {
        label: 'Go To Order',
        icon: 'pi pi-angle-double-right',
        command: () => this.onGoToOrder()
      },
      {
        label: 'Files',
        icon: 'pi pi-file',
        command: () => this.onOpenFiles()
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditInvoice()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveInvoice()
      }
    ]
  }];

  invoicesTypes = [
    {value: false, name: 'Invoices'},
    {value: true, name: 'Auxiliary Invoices'},
  ];

  searchForm: FormGroup = this.fb.group({
    supplier: [null],
    supplier_category: [null],
    system_creation_date_after: [null],
    system_creation_date_before: [null],
    invoice_reception_date_after: [null],
    invoice_reception_date_before: [null],
    items_reception_date_after: [null],
    items_reception_date_before: [null],
    invoice_date_after: [null],
    invoice_date_before: [null],
    has_related: [null],
    is_paid: [null],
    completed: [null],
    purchase_categories: [null],
    accounting_type: [null],
    material_or_service: [null],
    supplier__accounting_number: [null],
    service_accounting_number: [null],
    supplier_serial_number: [null],
    type: [null] // 0 - invoices 1 - services,
  });

  searchFormProforma = this.fb.group({
    supplier: [null],
    supplier_category: [null],
    system_creation_date_after: [null],
    system_creation_date_before: [null],
    invoice_reception_date_after: [null],
    invoice_reception_date_before: [null],
    items_reception_date_after: [null],
    items_reception_date_before: [null],
    invoice_date_after: [null],
    invoice_date_before: [null],
    has_related: [null],
    is_paid: [null],
    completed: [null],
    purchase_categories: [null],
    accounting_type: [null],
    material_or_service: [null],
    supplier__accounting_number: [null],
    service_accounting_number: [null],
    supplier_serial_number: [null],
    type: [null] // 0 - invoices 1 - services
  });


  totals = {invoices: 0, proformasInvoices: 0};
  pureTotals = {invoices: 0, proformasInvoices: 0};

  accountingNumbers: AccountingNumber[] = [];

  search$: Subject<void> = new Subject<void>();
  searchProforma$: Subject<void> = new Subject<void>();

  allInvoices: Invoice[] = [];
  allProformasInvoices: Invoice[] = [];

  selectedInvoice: Invoice;
  selectedProformaInvoice: Invoice;

  isLoadingInvoices = false;
  isLoadingProformaInvoices = false;

  isLoadingAccountingNumbers = true;

  query: QuerySearch[] = [];
  queryProforma: QuerySearch[] = [];

  allInvoices$: Observable<any> = this.search$.pipe(
    debounceTime(150),
    tap(() => this.prepareForSearch()),
    switchMap(() => {
      if (this.query.length > 1) {
        if (this.searchForm.get('type').value === false) {
          return this.invoiceService.get(this.query).pipe(
            tap(invoices => {
              this.allInvoices = invoices;
              this.allInvoices = this.getFields(this.allInvoices);
              this.allInvoices.sort((a, b) => new Date(b.system_creation_date).getTime() - new Date(a.system_creation_date).getTime());
              this.countTotals(this.allInvoices, 'invoices')
              this.isLoadingInvoices = false;
            }),
            untilDestroyed(this)
          )
        } else if (this.searchForm.get('type').value === true) {
          return this.serviceInvoiceService.get(this.query).pipe(
            tap(invoices => {
              this.allInvoices = invoices;
              this.allInvoices = this.getFields(this.allInvoices);
              this.allInvoices.forEach(inv => inv.isAux = true);
              this.allInvoices.sort((a, b) => new Date(b.system_creation_date).getTime() - new Date(a.system_creation_date).getTime());
              this.countTotals(this.allInvoices, 'invoices')
              this.isLoadingInvoices = false;
            }),
            untilDestroyed(this)
          )
        } else {
          return forkJoin({
            invoices: this.invoiceService.get(this.query),
            serviceInvoices: this.serviceInvoiceService.get(this.query)
          }).pipe(
            tap(({invoices, serviceInvoices}) => {
              serviceInvoices = serviceInvoices.map(serviceInvoice => {
                serviceInvoice.isAux = true;
                return serviceInvoice;
              });

              invoices = invoices.map(invoice => {
                invoice.isAux = false;
                return invoice;
              });

              this.allInvoices = [...invoices, ...serviceInvoices];
              this.allInvoices = this.getFields(this.allInvoices);
              this.allInvoices.sort((a, b) => new Date(b.system_creation_date).getTime() - new Date(a.system_creation_date).getTime());
              this.countTotals(this.allInvoices, 'invoices')
              this.isLoadingInvoices = false;
            }),
            untilDestroyed(this)
          )
        }
      } else {
        return of([]).pipe(
          tap(() => this.countTotals([], 'invoices')),
          tap(() => this.isLoadingInvoices = false)
        )
      }
    }),
    untilDestroyed(this)
  )

  allInvoicesProforma$: Observable<any> = this.searchProforma$.pipe(
    debounceTime(150),
    tap(() => this.prepareForSearchProforma()),
    switchMap(() => {
      if (this.queryProforma.length > 1) {
        if (this.searchFormProforma.get('type').value === false) {
          return this.invoiceService.get(this.queryProforma).pipe(
            tap(invoices => {
              this.allProformasInvoices = invoices;
              this.allProformasInvoices = this.getFields(this.allProformasInvoices);
              this.allProformasInvoices.sort((a, b) => new Date(b.system_creation_date).getTime() - new Date(a.system_creation_date).getTime());
              this.countTotals(this.allProformasInvoices, 'proformasInvoices');
              this.isLoadingProformaInvoices = false;
            }),
            untilDestroyed(this)
          )
        } else if (this.searchFormProforma.get('type').value === true) {
          return this.serviceInvoiceService.get(this.queryProforma).pipe(
            tap(invoices => {
              this.allProformasInvoices = invoices;
              this.allProformasInvoices.forEach(inv => inv.isAux = true);
              this.allProformasInvoices = this.getFields(this.allProformasInvoices);
              this.allProformasInvoices.sort((a, b) => new Date(b.system_creation_date).getTime() - new Date(a.system_creation_date).getTime());
              this.countTotals(this.allProformasInvoices, 'proformasInvoices');
              this.isLoadingProformaInvoices = false;
            }),
            untilDestroyed(this)
          )
        } else {
          return forkJoin({
            invoices: this.invoiceService.get(this.queryProforma),
            serviceInvoices: this.serviceInvoiceService.get(this.queryProforma)
          }).pipe(
            tap(({invoices, serviceInvoices}) => {
              serviceInvoices = serviceInvoices.map(serviceInvoice => {
                serviceInvoice.isAux = true;
                return serviceInvoice;
              });

              invoices = invoices.map(invoice => {
                invoice.isAux = false;
                return invoice;
              });

              this.allProformasInvoices = [...invoices, ...serviceInvoices];
              this.allProformasInvoices = this.getFields(this.allProformasInvoices);
              this.allProformasInvoices.sort((a, b) => new Date(b.system_creation_date).getTime() - new Date(a.system_creation_date).getTime());
              this.countTotals(this.allProformasInvoices, 'proformasInvoices');
              this.isLoadingProformaInvoices = false;
            }),
            untilDestroyed(this)
          )
        }
      } else {
        return of([]).pipe(
          tap(() => this.countTotals([], 'proformasInvoices')),
          tap(() => this.isLoadingProformaInvoices = false)
        )
      }
    }),
    untilDestroyed(this)
  )

  countTotals(invoices, key: 'invoices' | 'proformasInvoices') {
    this.totals[key] = 0;
    invoices.forEach(el => {
      this.totals[key] += el.total_price_converted;
    });

    this.pureTotals[key] = 0;
    invoices.forEach(el => {
      this.pureTotals[key] += el.pure_total_price_converted;
    });

    // @ts-ignore
    this.totals[key] = this.adapterService.convertToMoneyFormat(this.totals[key]);
    // @ts-ignore
    this.pureTotals[key] = this.adapterService.convertToMoneyFormat(this.pureTotals[key]);
  }

  get invoicesHeader() {
    let type = '';

    if (this.searchForm.get('type').value === null) {
      type = 'All'
    } else if (this.searchForm.get('type').value) {
      type = 'Auxiliary'
    }

    return `${type} Invoices`
  }

  get invoicesProformaHeader() {
    let type = '';

    if (this.searchFormProforma.get('type').value === null) {
      type = 'All'
    } else if (this.searchFormProforma.get('type').value) {
      type = 'Auxiliary'
    }

    return `${type} Proforma Invoices`
  }

  constructor(
    private readonly fb: FormBuilder,
    public columnFilterService: ColumnFilterService,
    private readonly adapterService: AdapterService,
    private invoiceService: InvoiceService,
    private serviceInvoiceService: ServiceInvoiceService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.allInvoices$.pipe(
      untilDestroyed(this)
    ).subscribe()

    this.allInvoicesProforma$.pipe(
      untilDestroyed(this)
    ).subscribe()
  }

  getFields(invoices) {
    invoices.map(invoice => {
      invoice.otherCurrency = invoice.currency.code !== 'EUR' ? invoice.total_price : null;
      if (!invoice.is_proforma) {
        invoice.relatedStatus = invoice.proformas.length !== 0;
        if (invoice.proformas) {
          invoice.proformas.forEach(proforma => {
            if (invoice.invoiceId < proforma || !invoice.invoiceId) {
              invoice.relatedId = proforma.id;
            }
          });
        }
      } else {
        invoice.relatedStatus = invoice.general_invoices.length !== 0;

        if (invoice.general_invoices) {
          invoice.general_invoices.forEach(generalInvoice => {
            if (invoice.relatedId < generalInvoice || !invoice.relatedId) {
              invoice.relatedId = generalInvoice;
            }
          });
        }
      }
      invoice.paid_interest = parseFloat(invoice.paid_interest);
      return invoice;
    });

    return invoices;
  }

  onSelectCompany(id: number) {
    this.searchForm.get('supplier').patchValue(id);
    this.search$.next();
  }

  onSelectCategory(id: number) {
    this.searchForm.get('supplier_category').patchValue(id);
    this.search$.next();
  }

  getPaidStatus(value) {
    this.searchForm.get('is_paid').patchValue(value);
    this.search$.next();
  }

  getRelatedStatus(value) {
    this.searchForm.get('has_related').patchValue(value);
    this.search$.next();
  }

  getCompletedStatus(value) {
    this.searchForm.get('completed').patchValue(value);
    this.search$.next();
  }

  onSelectPurchasedCategories(values: any[]) {
    this.searchForm.get('accounting_type').patchValue(null);
    this.searchForm.get('material_or_service').patchValue(null);

    values.forEach(v => {
      if (v === 'mp') {
        this.searchForm.get('accounting_type').patchValue(1);
      } else if (v === 'ou') {
        this.searchForm.get('material_or_service').patchValue('material');
      } else if (v === 'os') {
        this.searchForm.get('material_or_service').patchValue('service');
      }
    });

    if (values.find(v => v === 'ou') && values.find(v => v === 'os')) {
      this.searchForm.get('material_or_service').patchValue('both');
    }

    values = values.filter(v => typeof (v) === 'number');
    this.searchForm.get('purchase_categories').patchValue(values.join(','));

    this.search$.next();
  }

  getServiceAccountingNumber(evt, isProforma) {
    const value = evt.target.value.replace(/\s/g, '');

    if (isProforma) {
      if (value) {
        this.searchFormProforma.get('service_accounting_number').patchValue(value);
      } else {
        this.searchFormProforma.get('service_accounting_number').patchValue(null);
      }

      this.searchProforma$.next();
    } else {
      if (value) {
        this.searchForm.get('service_accounting_number').patchValue(value);
      } else {
        this.searchForm.get('service_accounting_number').patchValue(null);
      }

      this.search$.next();
    }
  }

  getSupplierSerialNumber(event) {
    const value = event.target.value;
    this.searchForm.get('supplier_serial_number').patchValue(value);
    this.search$.next();
  }

  prepareForSearch() {
    this.dt._first = 0;

    this.allInvoices = [];
    this.isLoadingInvoices = true;

    this.query = [];

    this.query.push({name: 'is_proforma', value: false})

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null && this.searchForm.controls[key].value !== '') {

        if (this.searchForm.controls[key].value instanceof Date) {
          this.query.push({
            name: key,
            value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
          });
        } else {
          this.query.push({
            name: key,
            value: this.searchForm.controls[key].value
          });
        }
      }
    }
  }

  prepareForSearchProforma() {
    this.st._first = 0;

    this.allProformasInvoices = [];
    this.isLoadingProformaInvoices = true;

    this.queryProforma = [];

    this.queryProforma.push({name: 'is_proforma', value: true})

    for (const key in this.searchFormProforma.controls) {
      if (this.searchFormProforma.controls[key].value !== null && this.searchFormProforma.controls[key].value !== '') {

        if (this.searchFormProforma.controls[key].value instanceof Date) {
          this.queryProforma.push({
            name: key,
            value: this.adapterService.dateAdapter(this.searchFormProforma.controls[key].value)
          });
        } else {
          this.queryProforma.push({
            name: key,
            value: this.searchFormProforma.controls[key].value
          });
        }
      }
    }
  }

  onApplyFilter() {
    this.invoiceService.openFilterModal().subscribe(filter => {
      if (filter) {

        if (this.tabIndex === 0) {
          this.searchForm.patchValue(filter)
        } else {
          this.searchFormProforma.patchValue(filter)
        }
      }
    })
  }

  clearFilters() {
    if (this.tabIndex === 0) {
      this.searchForm.reset()
    } else {
      this.searchFormProforma.reset()
    }
  }

  onCreateAuxiliaryInvoice() {
    if (this.tabIndex === 0) {
      this.serviceInvoiceService.openCreateModal(false).subscribe();
    } else {
      this.serviceInvoiceService.openCreateModal(true).subscribe();
    }
  }

  private onEditInvoice() {
    if (this.tabIndex === 0) {
      window.open(`reports/invoices/${this.selectedInvoice.isAux ? ('service-invoice/' + this.selectedInvoice.id) : ('invoice/' + this.selectedInvoice.id)}`, '_blank')
    } else {
      window.open(`reports/invoices/${this.selectedProformaInvoice.isAux ? ('service-invoice/' + this.selectedProformaInvoice.id) : ('invoice/' + this.selectedProformaInvoice.id)}`, '_blank')
    }
  }

  private onRemoveInvoice() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (this.tabIndex === 0) {
        if (this.selectedInvoice.isAux) {
          this.serviceInvoiceService.delete(this.selectedInvoice.id).subscribe(() => {
            this.allInvoices = this.allInvoices.filter(x => x.id !== this.selectedInvoice.id);
            this.selectedInvoice = null;
          });
        } else {
          this.invoiceService.delete(this.selectedInvoice.id).subscribe(() => {
            this.allInvoices = this.allInvoices.filter(x => x.id !== this.selectedInvoice.id);
            this.selectedInvoice = null;
          });
        }
      } else {
        if (this.selectedProformaInvoice.isAux) {
          this.serviceInvoiceService.delete(this.selectedProformaInvoice.id).subscribe(() => {
            this.allProformasInvoices = this.allProformasInvoices.filter(x => x.id !== this.selectedProformaInvoice.id);
            this.selectedProformaInvoice = null;
          });
        } else {
          this.invoiceService.delete(this.selectedProformaInvoice.id).subscribe(() => {
            this.allProformasInvoices = this.allProformasInvoices.filter(x => x.id !== this.selectedProformaInvoice.id);
            this.selectedProformaInvoice = null;
          });
        }
      }
    })
  }

  private onGoToOrder() {
    if (this.tabIndex === 0) {
      if (this.selectedInvoice.order) {
        if (this.selectedInvoice.order.accounting_type === 1) {
          window.open(`/procurement/chains/order/${this.selectedInvoice.order.id}`, '_blank')
        } else if (this.selectedInvoice.order.accounting_type === 2) {
          window.open(`/outsourcing/chains/order/${this.selectedInvoice.order.id}`, '_blank')
        }
      }
    } else {
      if (this.selectedProformaInvoice.order) {
        if (this.selectedProformaInvoice.order.accounting_type === 1) {
          window.open(`/procurement/chains/order/${this.selectedProformaInvoice.order.id}`, '_blank')
        } else if (this.selectedProformaInvoice.order.accounting_type === 2) {
          window.open(`/outsourcing/chains/order/${this.selectedProformaInvoice.order.id}`, '_blank')
        }
      }
    }
  }

  private onOpenFiles() {
    if (this.tabIndex === 0) {
      if (this.selectedInvoice.isAux) {
        this.serviceInvoiceService.serviceInvoiceFiles(this.selectedInvoice).subscribe(res => {
          if (res) {
            this.selectedInvoice.related_files = !!res.invoiceLength;
          }
        });
      } else {
        this.invoiceService.invoiceFiles(this.selectedInvoice).subscribe(res => {
          if (res) {
            this.selectedInvoice.related_files = !!res.invoiceLength;
          }
        });
      }
    } else {
      if (this.selectedProformaInvoice.isAux) {
        this.serviceInvoiceService.serviceInvoiceFiles(this.selectedProformaInvoice).subscribe(res => {
          if (res) {
            this.selectedProformaInvoice.related_files = !!res.invoiceLength;
          }
        });
      } else {
        this.invoiceService.invoiceFiles(this.selectedProformaInvoice).subscribe(res => {
          if (res) {
            this.selectedProformaInvoice.related_files = !!res.invoiceLength;
          }
        });
      }
    }
  }


  onSelectCompanyProforma(id: number) {
    this.searchFormProforma.get('supplier').patchValue(id);
    this.searchProforma$.next();
  }

  onSelectCategoryProforma(id: number) {
    this.searchFormProforma.get('supplier_category').patchValue(id);
    this.searchProforma$.next();
  }

  getPaidStatusProforma(value) {
    this.searchFormProforma.get('is_paid').patchValue(value);
    this.searchProforma$.next();
  }

  getRelatedStatusProforma(value) {
    this.searchFormProforma.get('has_related').patchValue(value);
    this.searchProforma$.next();
  }

  getCompletedStatusProforma(value) {
    this.searchFormProforma.get('completed').patchValue(value);
    this.searchProforma$.next();
  }

  onSelectPurchasedCategoriesProforma(values: any[]) {
    this.searchFormProforma.get('accounting_type').patchValue(null);
    this.searchFormProforma.get('material_or_service').patchValue(null);

    values.forEach(v => {
      if (v === 'mp') {
        this.searchFormProforma.get('accounting_type').patchValue(1);
      } else if (v === 'ou') {
        this.searchFormProforma.get('material_or_service').patchValue('material');
      } else if (v === 'os') {
        this.searchFormProforma.get('material_or_service').patchValue('service');
      }
    });

    if (values.find(v => v === 'ou') && values.find(v => v === 'os')) {
      this.searchFormProforma.get('material_or_service').patchValue('both');
    }

    values = values.filter(v => typeof (v) === 'number');
    this.searchFormProforma.get('purchase_categories').patchValue(values.join(','));

    this.searchProforma$.next();
  }

  generateExel() {
    if (this.tabIndex === 0) {
      this.invoiceService.generateExel(this.allInvoices);
    } else {
      this.invoiceService.generateExel(this.allProformasInvoices);
    }
  }

  generateXmlForAll() {
    if (this.tabIndex === 0) {
      this.isGenerating = true;
      this.generateXML(this.allInvoices, this.dt._value);
    } else {
      this.isGeneratingProforma = true;
      this.generateXML(this.allProformasInvoices, this.st._value)
    }
  }

  generateXmlNoDdvForAll() {
    if (this.tabIndex === 0) {
      this.isGenerating = true;
      this.generateNoDdvXML(this.allInvoices, this.dt._value);
    } else {
      this.isGeneratingProforma = true;
      this.generateNoDdvXML(this.allProformasInvoices, this.st._value)
    }
  }

  generateIntrastatForAll() {
    if (this.tabIndex === 0) {
      this.isGenerating = true;
      this.generateIntrastatXML(this.allInvoices, this.dt._value);
    } else {
      this.isGeneratingProforma = true;
      this.generateIntrastatXML(this.allProformasInvoices, this.st._value)
    }
  }


  generateIntrastatXML(inv, invoices: Invoice[]) {
    invoices = JSON.parse(JSON.stringify(invoices));
    inv = JSON.parse(JSON.stringify(inv));

    invoices.sort((a, b) => new Date(a.invoice_date).getTime() - new Date(b.invoice_date).getTime());
    if (inv) {
      inv.sort((a, b) => new Date(a.invoice_date).getTime() - new Date(b.invoice_date).getTime());
    }

    let filteredInvoices: Invoice[] = [];

    if (inv) {
      filteredInvoices = inv;
    } else {
      filteredInvoices = invoices;
    }

    const xlmInvoices = [];
    filteredInvoices.forEach(invoice => {
      if (!invoice.isAux) {
        xlmInvoices.push({invoice_id: invoice.id});
      }
    });

    this.invoiceService.renderIntrastatXML(xlmInvoices).pipe(
      finalize(() => {
        this.isGenerating = false;
        this.isGeneratingProforma = false;
      })
    ).subscribe();
  }

  generateNoDdvXML(inv, invoices: Invoice[]) {
    invoices = JSON.parse(JSON.stringify(invoices));
    inv = JSON.parse(JSON.stringify(inv));

    invoices.sort((a, b) => new Date(a.invoice_date).getTime() - new Date(b.invoice_date).getTime());

    if (inv) {
      inv.sort((a, b) => new Date(a.invoice_date).getTime() - new Date(b.invoice_date).getTime());
    }

    let filteredInvoices: Invoice[] = [];

    if (inv) {
      filteredInvoices = inv;
    } else {
      filteredInvoices = invoices;
    }

    const xlmInvoices = [];

    filteredInvoices.forEach(invoice => {
      if (invoice.isAux) {
        xlmInvoices.push({
          service_invoice_id: invoice.id,
        });
      } else {
        xlmInvoices.push({
          invoice_id: invoice.id,
        });
      }
    });

    this.invoiceService.generateNoDdvXML(xlmInvoices).pipe(
      finalize(() => {
        this.isGenerating = false;
        this.isGeneratingProforma = false;
      })
    ).subscribe(data => {
      this.invoiceService.downloadXmlFile(data, 'no-ddv');
    });
  }

  generateXML(inv: any, invoices: Invoice[]) {
    invoices = JSON.parse(JSON.stringify(invoices));
    inv = JSON.parse(JSON.stringify(inv));

    invoices.sort((a, b) => new Date(a.invoice_date).getTime() - new Date(b.invoice_date).getTime());
    if (inv) {
      inv.sort((a, b) => new Date(a.invoice_date).getTime() - new Date(b.invoice_date).getTime());
    }

    this.invoiceService.renderXML().subscribe(startNumber => {
      if (startNumber) {
        let filteredInvoices: Invoice[] = [];

        if (inv) {
          filteredInvoices = inv;
        } else {
          filteredInvoices = invoices;
        }

        const xlmInvoices = [];

        filteredInvoices.forEach(invoice => {
          if (invoice.isAux) {
            xlmInvoices.push({
              service_invoice_id: invoice.id,
            });
          } else {
            xlmInvoices.push({
              invoice_id: invoice.id,
            });
          }
        });

        const send = {
          start_number: parseInt(startNumber, 10),
          ids: xlmInvoices,
        };

        this.invoiceService.generateXML(send).subscribe(
          data => {
            this.invoiceService.downloadXmlFile(data);
            this.isGenerating = false;
            this.isGeneratingProforma = false;
          },
          error => {
            this.invoiceService.editInvoiceToGenerateXml(error).subscribe(res => {
              if (res) {
                this.repeatGenerateXML(inv, invoices, startNumber);
              } else {
                this.isGenerating = false;
                this.isGeneratingProforma = false;
              }
            });
          }
        );
      }
    });
  }

  repeatGenerateXML(inv, invoices: Invoice[], startNumber: string) {
    let filteredInvoices: Invoice[] = [];

    if (inv) {
      filteredInvoices = inv;
    } else {
      filteredInvoices = invoices;
    }

    const xlmInvoices = [];

    filteredInvoices.forEach(invoice => {
      if (invoice.isAux) {
        xlmInvoices.push({
          service_invoice_id: invoice.id,
        });
      } else {
        xlmInvoices.push({
          invoice_id: invoice.id,
        });
      }
    });

    const send = {
      start_number: parseInt(startNumber, 10),
      ids: xlmInvoices,
    };

    this.invoiceService.generateXML(send).subscribe(
      data => {
        this.invoiceService.downloadXmlFile(data);
        this.isGenerating = false;
        this.isGeneratingProforma = false;
      },
      error => {
        this.invoiceService.editInvoiceToGenerateXml(error).subscribe(res => {
          if (res) {
            this.repeatGenerateXML(inv, invoices, startNumber);
          } else {
            this.isGenerating = false;
            this.isGeneratingProforma = false;
          }
        });
      }
    );
  }
}

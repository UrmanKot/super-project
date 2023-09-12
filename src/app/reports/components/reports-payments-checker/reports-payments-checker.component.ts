import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AdapterService} from "@shared/services/adapter.service";
import {ModalService} from "@shared/services/modal.service";
import {QuerySearch} from "@shared/models/other";
import {
  ExactEntriesInvoice,
  ExcludePayment,
  ExtraInvoice,
  ExtraPayment,
  PaymentChecker
} from "../../services/payment-checker";
import {PaymentCheckerService} from "../../services/payment-checker.service";

@Component({
  selector: 'pek-reports-payments-checker',
  templateUrl: './reports-payments-checker.component.html',
  styleUrls: ['./reports-payments-checker.component.scss']
})
export class ReportsPaymentsCheckerComponent implements OnInit {
  @ViewChild('addFileInput') inputFiles: ElementRef;

  @ViewChild('dtp') dateTablePayments: any;
  @ViewChild('trPayment') trPayment: ElementRef;

  @ViewChild('dts') dateTableInvoices: any;
  @ViewChild('trInvoices') trInvoices: ElementRef;

  files = [];
  isLoadForm = false;

  isFilesLoading = false;

  data: PaymentChecker;

  payments: ExtraPayment[] = [];
  invoices: ExtraInvoice[] = [];

  occurrences: ExactEntriesInvoice[] = [];
  selectedOccurrence: ExactEntriesInvoice;

  selectedPayment: ExtraPayment;
  selectedInvoice: ExtraInvoice;

  excludePayments: ExcludePayment[] = [];
  selectedExcludePayment: ExcludePayment;

  searchForm = this.fb.group({
    invoice_date_after: [null],
    invoice_date_before: [null],
  });

  paymentsCompanyDoubles: {company: string, count: number}[] = [];
  paymentsCompanies: string[] = [];

  invoicesCompanyDoubles: {company: string, count: number}[] = [];
  invoicesCompanies: string[] = [];

  isGroupedPayments = false;
  isGroupedInvoices = false;

  groupedPayments: ExtraPayment[] = [];
  groupedInvoices: ExtraInvoice[] = [];

  constructor(
    private accountingService: PaymentCheckerService,
    private fb: FormBuilder,
    private adapterService: AdapterService,
    private modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getFiles();
    this.getExcludePayments();
  }

  getMaxId() {
    let id = 0;
    this.occurrences.forEach(item => {
      if (id < item.id) {
        id = item.id;
      }
    });
    return id + 1;
  }

  generateTables() {
    this.selectedOccurrence = null;
    this.selectedPayment = null;
    this.selectedInvoice = null;

    this.payments = [];
    this.invoices = [];
    this.occurrences = [];

    this.data.exact_entries.invoices.forEach(entry => this.occurrences.push(entry));

    if (this.data.exact_entries.service_invoices) {
      this.data.exact_entries.service_invoices.forEach(entry => this.occurrences.push(entry));
    }

    this.data.similar_entries.invoices.forEach(entry => this.occurrences.push(entry));

    if (this.data.similar_entries.service_invoices) {
      this.data.similar_entries.service_invoices.forEach(entry => this.occurrences.push(entry));
    }

    if (this.data.extra_entries.xml_payments) {
      this.data.extra_entries.xml_payments.forEach(entry => {
        this.payments.push({
          ...entry,
          amount: parseFloat(entry.amount),
        });
      });
    }

    this.data.extra_entries.invoices.forEach(entry => {
      this.invoices.push({
        ...entry,
        rounded_converted_total_price: parseFloat(entry.rounded_converted_total_price),
      });
    });

    if (this.data.extra_entries.service_invoices) {
      this.data.extra_entries.service_invoices.forEach(entry => {
        this.invoices.push({
          ...entry,
          rounded_converted_total_price: parseFloat(entry.rounded_converted_total_price),
        });
      });
    }

    this.invoices.forEach(invoice => {
      if (!invoice.supplier) invoice.supplier = '';
    });

    this.payments.forEach(payment => {
      if (!payment.company_name) payment.company_name = '';
    });

    this.invoices.sort((x, y) => {
      if (x.supplier < y.supplier) return -1;
      if (x.supplier > y.supplier) return 1;
      return 0;
    });

    this.payments.sort((x, y) => {
      if (x.company_name < y.company_name) return -1;
      if (x.company_name > y.company_name) return 1;
      return 0;
    });

    this.getPaymentsCompanies();
    this.getInvoicesCompanies();
  }

  getPaymentsCompanies() {
    this.paymentsCompanies = [];
    this.paymentsCompanyDoubles = [];

    this.payments.forEach(payment => this.paymentsCompanies.push(payment.company_name));

    this.paymentsCompanies.forEach(company => {
      let count = 0;
      while (this.paymentsCompanies.includes(company)) {
        const index = this.paymentsCompanies.findIndex(c => c === company);
        this.paymentsCompanies.splice(index, 1);
        count++;
      }

      this.paymentsCompanyDoubles.push({company, count});
    });

    this.paymentsCompanyDoubles = this.paymentsCompanyDoubles.filter(c => c.count > 1);
  }

  getInvoicesCompanies() {
    this.invoicesCompanies = [];
    this.invoicesCompanyDoubles = [];

    this.invoices.forEach(invoice => this.invoicesCompanies.push(invoice.supplier));

    this.invoicesCompanies.forEach(company => {
      let count = 0;
      while (this.invoicesCompanies.includes(company)) {
        const index = this.invoicesCompanies.findIndex(c => c === company);
        this.invoicesCompanies.splice(index, 1);
        count++;
      }

      this.invoicesCompanyDoubles.push({company, count});
    });

    this.invoicesCompanyDoubles = this.invoicesCompanyDoubles.filter(c => c.count > 1);
  }

  getFiles() {
    if (localStorage.getItem('checker')) {
      this.data = JSON.parse(localStorage.getItem('checker'));
      this.isFilesLoading = true;
      this.generateTables();
    }
  }

  uploadAgain() {
    localStorage.removeItem('checker');
    this.data = null;
    this.isFilesLoading = false;
    this.files = [];

    this.paymentsCompanyDoubles = [];
    this.paymentsCompanies = [];

    this.invoicesCompanyDoubles = [];
    this.invoicesCompanies = [];

    this.isGroupedPayments = false;
    this.isGroupedInvoices = false;

    this.groupedPayments = [];
    this.groupedInvoices = [];

    this.searchForm.reset();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {

    event.preventDefault();

    const filesArr = Array.from(event.dataTransfer.files);

    filesArr.forEach(file => {
      if (file.type === 'text/xml') {
        this.files.push(file);
      }
    });
  }

  setFiles(files: FileList) {
    const filesArr = Array.from(files);
    filesArr.forEach(file => this.files.push(file));
  }

  setFile(file: File) {
    this.files.push(file);
  }

  removeFile(file: File) {
    const index = this.files.findIndex(f => f === file);
    this.files.splice(index, 1);
    this.removeFileFromFileList(index);
  }

  removeFileFromFileList(index) {
    const dt = new DataTransfer();

    const files = this.inputFiles.nativeElement.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (index !== i) {
        dt.items.add(file);
      }
    }

    this.inputFiles.nativeElement.files = dt.files;
  }


  generate() {
    this.isLoadForm = true;
    const formData = new FormData();
    this.files.forEach((file, idx) => {
      formData.append(`${idx + 1}.xml`, file, file.name);
    });

    const query: QuerySearch[] = [];

    if (this.searchForm.get('invoice_date_after').value) {
      query.push({name: 'invoice_date_after', value: this.adapterService.dateAdapter(this.searchForm.get('invoice_date_after').value)});
    }

    if (this.searchForm.get('invoice_date_before').value) {
      query.push({name: 'invoice_date_before', value: this.adapterService.dateAdapter(this.searchForm.get('invoice_date_before').value)});
    }

    this.accountingService.attachFiles(formData, query).subscribe(res => {
      res.exact_entries.invoices = res.exact_entries.invoices.map(entry => {
        return {
          full_entry: true,
          type: 'invoice',
          completed: false,
          ...entry
        };
      });

      res.exact_entries.service_invoices = res.exact_entries.service_invoices.map(entry => {
        return {
          full_entry: true,
          type: 'service-invoice',
          completed: false,
          ...entry
        };
      });

      res.similar_entries.invoices = res.similar_entries.invoices.map(entry => {
        return {
          full_entry: false,
          type: 'invoice',
          completed: false,
          ...entry
        };
      });

      res.similar_entries.service_invoices = res.similar_entries.service_invoices.map(entry => {
        return {
          full_entry: false,
          type: 'service-invoice',
          completed: false,
          ...entry
        };
      });

      localStorage.setItem('checker', JSON.stringify(res));
      this.data = {...res};
      this.generateTables();
      this.isLoadForm = false;
      this.isFilesLoading = true;
    });
  }

  splitIntoParts() {
    const payment: ExtraPayment = {
      id: this.selectedOccurrence.payment_id,
      company_name: this.selectedOccurrence.xml_company_name,
      date: this.selectedOccurrence.payment_date,
      amount: this.selectedOccurrence.payment_amount,
    };

    const invoice: ExtraInvoice = {
      id: this.selectedOccurrence.invoice_id,
      invoice_date: this.selectedOccurrence.invoice_invoice_date,
      supplier: this.selectedOccurrence.invoice_supplier_name,
      order_id: this.selectedOccurrence.order_id,
      rounded_converted_total_price: this.selectedOccurrence.invoice_total_price
    };

    this.payments.unshift(payment);
    this.invoices.unshift(invoice);

    this.getPaymentsCompanies();
    this.getInvoicesCompanies();

    if (this.isGroupedPayments) {
      this.groupingPayments();
    }

    if (this.isGroupedInvoices) {
      this.groupingInvoices();
    }

    this.occurrences = this.occurrences.filter(item => item.id !== this.selectedOccurrence.id);
    this.selectedOccurrence = null;

    this.update();
  }

  join() {
    this.occurrences.unshift({
      id: this.getMaxId(),
      type: 'invoice',
      completed: false,
      full_entry: true,
      payment_id: this.selectedPayment.id,
      order_id: this.selectedInvoice.order_id,
      invoice_id: this.selectedInvoice.id,
      invoice_invoice_date: this.selectedInvoice.invoice_date,
      invoice_total_price: this.selectedInvoice.rounded_converted_total_price,
      payment_amount: this.selectedPayment.amount,
      payment_date: this.selectedPayment.date,
      invoice_supplier_name: this.selectedInvoice.supplier,
      xml_company_name: this.selectedPayment.company_name,
    });

    this.payments = this.payments.filter(p => p.id !== this.selectedPayment.id);
    this.invoices = this.invoices.filter(inv => inv.id !== this.selectedInvoice.id);

    this.getPaymentsCompanies();
    this.getInvoicesCompanies();

    if (this.isGroupedPayments) {
      this.groupingPayments();
    }

    if (this.isGroupedInvoices) {
      this.groupingInvoices();
    }

    this.selectedPayment = null;
    this.selectedInvoice = null;

    this.update();
  }

  update() {
    const exactEntries = [];
    const similarEntries = [];
    const extraPayments = [];
    const extraInvoices = [];

    this.occurrences.forEach(occurrence => {
      if (occurrence.full_entry) {
        exactEntries.push(occurrence);
      } else {
        similarEntries.push(occurrence);
      }
    });

    this.payments.forEach(payment => {
      extraPayments.push(payment);
    });

    this.invoices.forEach(invoice => {
      extraInvoices.push(invoice);
    });

    const data = {
      exact_entries: {
        invoices: exactEntries
      },
      extra_entries: {
        invoices: extraInvoices,
        xml_payments: extraPayments,
      },
      similar_entries: {
        invoices: similarEntries
      },
    };

    localStorage.removeItem('checker');
    localStorage.setItem('checker', JSON.stringify(data));
  }

  excludePayment() {
    this.modalService.confirm('success').subscribe(res => {
      if (res) {
        const send = {name: this.selectedPayment.company_name};
        this.accountingService.excludePayment(send).subscribe(excludePayment => {
          this.payments = this.payments.filter(p => p.company_name !== excludePayment.name);
          this.excludePayments.push(excludePayment);
          this.selectedPayment = null;
          this.update();
        });
      }
    });
  }

  restorePayment() {
    this.modalService.confirm('success').subscribe(res => {
      if (res) {
        const send = {id: this.selectedExcludePayment.id};
        this.accountingService.restoreExcludePayment(send).subscribe(() => {
          const index = this.excludePayments.findIndex(p => p.id === this.selectedExcludePayment.id);
          this.excludePayments.splice(index, 1);
          this.selectedExcludePayment = null;
        });
      }
    });
  }

  getExcludePayments() {
    this.accountingService.getExcludePayments().subscribe(excludePayments => {
      this.excludePayments = excludePayments;
    });
  }

  unGroupingPayments() {
    this.isGroupedPayments = false;
    this.dateTablePayments._sortField = null;
    this.trPayment.nativeElement.querySelectorAll('th').forEach(s => s.classList.remove('p-highlight'));
  }

  unGroupingInvoices() {
    this.isGroupedInvoices = false;
    this.dateTablePayments._sortField = null;
    this.trInvoices.nativeElement.querySelectorAll('th').forEach(s => s.classList.remove('p-highlight'));
  }

  groupingPayments() {
    this.dateTablePayments._sortField = 'company_name';
    this.groupedPayments = [];
    if (!this.isGroupedPayments) this.isGroupedPayments = true;

    this.groupedPayments = JSON.parse(JSON.stringify(this.payments));

    let k = 1;
    let amount = 0;

    this.groupedPayments.forEach(payment => {
      if (this.paymentsCompanyDoubles.find(p => p.company === payment.company_name)) {
        if (k === 1) {
          payment.isFirst = true;
        }

        amount += payment.amount;
        payment.isGrouped = true;

        if (k === this.paymentsCompanyDoubles.find(p => p.company === payment.company_name).count) {
          payment.isLast = true;
          payment.totalAmount = amount;
          k = 1;
          amount = 0;
        } else {
          k++;
        }
      }
    });
  }

  groupingInvoices() {
    this.dateTableInvoices._sortField = 'supplier';
    this.groupedInvoices = [];
    if (!this.isGroupedInvoices) this.isGroupedInvoices = true;

    this.groupedInvoices = JSON.parse(JSON.stringify(this.invoices));

    let k = 1;
    let amount = 0;

    this.groupedInvoices.forEach(invoice => {
      if (this.invoicesCompanyDoubles.find(p => p.company === invoice.supplier)) {
        if (k === 1) {
          invoice.isFirst = true;
        }

        amount += invoice.rounded_converted_total_price;
        invoice.isGrouped = true;

        if (k === this.invoicesCompanyDoubles.find(p => p.company === invoice.supplier).count) {
          invoice.isLast = true;
          invoice.totalAmount = amount;
          k = 1;
          amount = 0;
        } else {
          k++;
        }
      }
    });
  }

}

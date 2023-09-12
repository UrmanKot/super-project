import {Component, Inject, OnInit} from '@angular/core';
import {InvoiceFilter} from "../../models/invoice-filter";
import {FormBuilder, Validators} from "@angular/forms";
import {CurrenciesService} from "../../services/currencies.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {ColumnFilterService} from "@shared/services/column-filter.service";
import {InvoiceFilterService} from "../../services/invoice-filter.service";
import {AdapterService} from "@shared/services/adapter.service";

@Component({
  selector: 'pek-create-edit-invoice-filter',
  templateUrl: './create-edit-invoice-filter.component.html',
  styleUrls: ['./create-edit-invoice-filter.component.scss']
})
export class CreateEditInvoiceFilterComponent implements OnInit {

  filter: InvoiceFilter;
  isSaving = false;

  invoicesTypes = [
    {value: null, name: 'All Invoices'},
    {value: '0', name: 'Invoices'},
    {value: '1', name: 'Auxiliary Invoices'},
  ];

  form = this.fb.group({
    name: [null, Validators.required],
    supplier: [null],
    supplier_category: [null],
    system_creation_date_after: [null],
    system_creation_date_before: [null],
    invoice_reception_date_after: [null],
    invoice_reception_date_before: [null],
    items_reception_date_after: [null],
    items_reception_date_before: [null],
    has_proformas: [null],
    is_paid: [null],
    completed: [null],
    type: [null]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    public readonly columnFilterService: ColumnFilterService,
    private readonly invoiceFilterService: InvoiceFilterService,
    private dialogRef: MatDialogRef<CreateEditInvoiceFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, invoiceFilter: InvoiceFilter }
  ) {
  }

  ngOnInit(): void {
    if (this.data?.type === 'edit') {
      this.getFilterValues();
    }
  }

  getFilterValues() {
    this.filter = {...this.data.invoiceFilter};

    if (this.filter.invoice_reception_date_after) {
      this.filter.invoice_reception_date_after = new Date(this.data.invoiceFilter.invoice_reception_date_after);
    }

    if (this.filter.invoice_reception_date_before) {
      this.filter.invoice_reception_date_before = new Date(this.data.invoiceFilter.invoice_reception_date_before);
    }

    if (this.filter.items_reception_date_after) {
      this.filter.items_reception_date_after = new Date(this.data.invoiceFilter.items_reception_date_after);
    }

    if (this.filter.items_reception_date_before) {
      this.filter.items_reception_date_before = new Date(this.data.invoiceFilter.items_reception_date_before);
    }

    if (this.filter.system_creation_date_after) {
      this.filter.system_creation_date_after = new Date(this.filter.system_creation_date_after);
    }

    if (this.filter.system_creation_date_before) {
      this.filter.system_creation_date_before = new Date(this.filter.system_creation_date_before);
    }

    if (!this.filter.type) {
      this.filter.type = null;
    }

    if (!this.filter.supplier_category) {
      this.filter.supplier_category = null;
    }

    this.filter.supplier = this.filter.supplier ? this.filter.supplier.id : null;
    this.filter.supplier_category = this.filter.supplier_category ? this.filter.supplier_category.id : null;
    this.form.patchValue(<any>this.filter);
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createInvoiceFilter();
        break;
      }
      case 'edit': {
        this.editInvoiceFilter();
        break;
      }
    }
  }

  createInvoiceFilter() {
    const filter: any = {...this.form.value};

    filter.system_creation_date_after = this.adapterService.dateAdapter(filter.system_creation_date_after);
    filter.system_creation_date_before = this.adapterService.dateAdapter(filter.system_creation_date_before);

    filter.invoice_reception_date_after = this.adapterService.dateAdapter(filter.invoice_reception_date_after);
    filter.invoice_reception_date_before = this.adapterService.dateAdapter(filter.invoice_reception_date_before);

    filter.items_reception_date_after = this.adapterService.dateAdapter(filter.items_reception_date_after);
    filter.items_reception_date_before = this.adapterService.dateAdapter(filter.items_reception_date_before);

    if (!filter.supplier_category) {
      delete filter.supplier_category;
    }

    if (!filter.type) {
      delete filter.type;
    }

    this.invoiceFilterService.createFilter(filter).subscribe({
      next: invoiceFilter => this.dialogRef.close(invoiceFilter),
      error: () => this.isSaving = false,
    });
  }

  editInvoiceFilter() {
    const filter: any = {...this.form.value};

    filter.system_creation_date_after = this.adapterService.dateAdapter(filter.system_creation_date_after);
    filter.system_creation_date_before = this.adapterService.dateAdapter(filter.system_creation_date_before);

    filter.invoice_reception_date_after = this.adapterService.dateAdapter(filter.invoice_reception_date_after);
    filter.invoice_reception_date_before = this.adapterService.dateAdapter(filter.invoice_reception_date_before);

    filter.items_reception_date_after = this.adapterService.dateAdapter(filter.items_reception_date_after);
    filter.items_reception_date_before = this.adapterService.dateAdapter(filter.items_reception_date_before);

    if (!filter.supplier_category) {
      delete filter.supplier_category;
    }

    if (!filter.type) {
      delete filter.type;
    }

    filter.id = this.data.invoiceFilter.id;

    this.invoiceFilterService.updateFilter(filter).subscribe({
      next: invoiceFilter => this.dialogRef.close(invoiceFilter),
      error: () => this.isSaving = false,
    });
  }

  onSelectCompany(id: number) {
    this.form.get('supplier').patchValue(id)
  }

  onSelectCompanyCategory(id: number) {
    this.form.get('supplier_category').patchValue(id)
  }

  togglePaidStatus(value) {
    this.form.get('is_paid').patchValue(value);
  }

  toggleRelatedStatus(value) {
    this.form.get('has_proformas').patchValue(value);
  }

  toggleCompletedStatus(value) {
    this.form.get('completed').patchValue(value);
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {ReportFilter} from "../../models/report-filter";
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdapterService} from "@shared/services/adapter.service";
import {ReportFilterService} from "../../services/report-filter.service";
import {ColumnFilterService} from "@shared/services/column-filter.service";
import {ModalActionType} from "@shared/models/modal-action";

@Component({
  selector: 'pek-create-edit-report-filter',
  templateUrl: './create-edit-report-filter.component.html',
  styleUrls: ['./create-edit-report-filter.component.scss']
})
export class CreateEditReportFilterComponent implements OnInit {

  filter: ReportFilter;
  isSaving = false;

  form = this.fb.group({
    name: [null, Validators.required],
    nomenclature_name: [''],
    nomenclature_code: [''],
    nomenclature_categories: [null],
    supplier: [null],
    supplier_category: [null],
    system_creation_date_after: [null],
    system_creation_date_before: [null],
    invoice_reception_date_after: [null],
    invoice_reception_date_before: [null],
    items_reception_date_after: [null],
    items_reception_date_before: [null],
    is_paid: [null],
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEditReportFilterComponent>,
    private adapterService: AdapterService,
    private reportFilterService: ReportFilterService,
    public readonly columnFilterService: ColumnFilterService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, filter: ReportFilter }
  ) {
  }

  ngOnInit(): void {
    if (this.data?.type === 'edit') {
      this.getFilterValues();
    }
  }

  getFilterValues() {
    this.filter = {...this.data.filter};

    // if (this.filter.nomenclature_categories) {
    //   this.categoriesService.selectNomenclatureCategories$.next(this.filter.nomenclature_categories);
    // }

    if (this.filter.invoice_reception_date_after) {
      this.filter.invoice_reception_date_after = new Date(this.data.filter.invoice_reception_date_after);
    }

    if (this.filter.invoice_reception_date_before) {
      this.filter.invoice_reception_date_before = new Date(this.data.filter.invoice_reception_date_before);
    }

    if (this.filter.items_reception_date_after) {
      this.filter.items_reception_date_after = new Date(this.data.filter.items_reception_date_after);
    }

    if (this.filter.items_reception_date_before) {
      this.filter.items_reception_date_before = new Date(this.data.filter.items_reception_date_before);
    }

    if (this.filter.system_creation_date_after) {
      this.filter.system_creation_date_after = new Date(this.filter.system_creation_date_after);
    }

    if (this.filter.system_creation_date_before) {
      this.filter.system_creation_date_before = new Date(this.filter.system_creation_date_before);
    }

    if (!this.filter.supplier_category) {
      this.filter.supplier_category = null;
    }

    this.filter.supplier = this.filter.supplier ? this.filter.supplier.id : null;
    this.filter.supplier_category = this.filter.supplier_category ? this.filter.supplier_category.id : null;
    this.filter.nomenclature_categories = this.filter.nomenclature_categories.split(',').map(id => +id);
    console.log(this.filter.nomenclature_categories)
    this.form.patchValue(<any>this.filter);
  }

  togglePaidStatus(value) {
    this.form.get('is_paid').patchValue(value);
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

    if (filter.nomenclature_categories && filter.nomenclature_categories.length > 0) {
      if (typeof filter.nomenclature_categories !== 'string') {
        filter.nomenclature_categories = filter.nomenclature_categories.join(',');
      }
    } else {
      filter.nomenclature_categories = '';
    }

    if (!filter.supplier_category) {
      delete filter.supplier_category;
    }

    this.reportFilterService.createFilter(filter).subscribe({
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

  editInvoiceFilter() {
    const filter: any = {...this.form.value};

    filter.system_creation_date_after = this.adapterService.dateAdapter(filter.system_creation_date_after);
    filter.system_creation_date_before = this.adapterService.dateAdapter(filter.system_creation_date_before);

    filter.invoice_reception_date_after = this.adapterService.dateAdapter(filter.invoice_reception_date_after);
    filter.invoice_reception_date_before = this.adapterService.dateAdapter(filter.invoice_reception_date_before);

    filter.items_reception_date_after = this.adapterService.dateAdapter(filter.items_reception_date_after);
    filter.items_reception_date_before = this.adapterService.dateAdapter(filter.items_reception_date_before);

    if (filter.nomenclature_categories && filter.nomenclature_categories.length > 0) {
      if (typeof filter.nomenclature_categories !== 'string') {
        filter.nomenclature_categories = filter.nomenclature_categories.join(',');
      }
    } else {
      filter.nomenclature_categories = '';
    }

    if (!filter.supplier_category) {
      delete filter.supplier_category;
    }

    filter.id = this.data.filter.id;

    this.reportFilterService.updateFilter(filter).subscribe({
      next: reportFilter => this.dialogRef.close(reportFilter),
      error: () => this.isSaving = false,
    });
  }

  getCategories(ids: number[]) {
    this.form.get('nomenclature_categories').patchValue(ids?.join(',') ?? null)
  }
}

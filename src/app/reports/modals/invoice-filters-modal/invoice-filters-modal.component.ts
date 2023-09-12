import {Component, OnInit} from '@angular/core';
import {InvoiceFilter} from "../../models/invoice-filter";
import {InvoiceFilterService} from "../../services/invoice-filter.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'pek-invoice-filters-modal',
  templateUrl: './invoice-filters-modal.component.html',
  styleUrls: ['./invoice-filters-modal.component.scss']
})
export class InvoiceFiltersModalComponent implements OnInit {

  invoiceFilters: InvoiceFilter[] = [];
  selectedFilter: InvoiceFilter;
  isLoadingInvoiceFilters = true;

  constructor(
    private invoiceFilterService: InvoiceFilterService,
    private readonly dialogRef: MatDialogRef<InvoiceFiltersModalComponent>
  ) {
  }

  ngOnInit(): void {
    this.invoiceFilterService.getFilters().subscribe(filters => {
      this.invoiceFilters = filters;
      this.isLoadingInvoiceFilters = false;
    });
  }

  onSave() {

    const filter = {
      supplier: this.selectedFilter.supplier ? this.selectedFilter.supplier.id : null,
      supplier_category: this.selectedFilter.supplier_category ? this.selectedFilter.supplier_category.id : null,
      system_creation_date_after:
        this.selectedFilter.system_creation_date_after ? new Date(this.selectedFilter.system_creation_date_after) : null,
      system_creation_date_before:
        this.selectedFilter.system_creation_date_before ? new Date(this.selectedFilter.system_creation_date_before) : null,
      invoice_reception_date_after:
        this.selectedFilter.invoice_reception_date_after ? new Date(this.selectedFilter.invoice_reception_date_after) : null,
      invoice_reception_date_before:
        this.selectedFilter.invoice_reception_date_before ? new Date(this.selectedFilter.invoice_reception_date_before) : null,
      items_reception_date_after:
        this.selectedFilter.items_reception_date_after ? new Date(this.selectedFilter.items_reception_date_after) : null,
      items_reception_date_before:
        this.selectedFilter.items_reception_date_before ? new Date(this.selectedFilter.items_reception_date_before) : null,
      has_related: this.selectedFilter.has_proformas,
      is_paid: this.selectedFilter.is_paid,
      completed: this.selectedFilter.completed,
      type: this.getIsAux(this.selectedFilter.type),
    };

    this.dialogRef.close(filter);
  }

  getIsAux(type) {
    switch (type) {
      case '': {
        return null;
      }
      case '0': {
        return false;
      }
      case '1': {
        return true;
      }
    }
  }
}

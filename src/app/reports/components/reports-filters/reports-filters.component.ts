import {Component, OnInit} from '@angular/core';
import {InvoiceFilterService} from "../../services/invoice-filter.service";
import {InvoiceFilter} from "../../models/invoice-filter";
import {MenuItem} from "primeng/api";
import {ModalService} from "@shared/services/modal.service";
import {ReportFilterService} from "../../services/report-filter.service";
import {ReportFilter} from "../../models/report-filter";
import {J} from "@angular/cdk/keycodes";

@Component({
  selector: 'pek-reports-filters',
  templateUrl: './reports-filters.component.html',
  styleUrls: ['./reports-filters.component.scss']
})
export class ReportsFiltersComponent implements OnInit {
  tabIndex = 0;

  menuItemsInvoiceFilter: MenuItem[] = [{
    label: 'Selected Invoice Filter',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditInvoiceFilter()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveInvoiceFilter()
      }
    ]
  }];

  menuItemsReportFilter: MenuItem[] = [{
    label: 'Selected Report Filter',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditReportFilter()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveReportFilter()
      }
    ]
  }];

  invoiceFilters: InvoiceFilter[] = [];
  selectedInvoiceFilter: InvoiceFilter;
  isLoadingInvoiceFilters = true;

  reportFilters: ReportFilter[] = [];
  selectedReportsFilter: ReportFilter;
  isLoadingReportFilters = true;

  constructor(
    private invoiceFilterService: InvoiceFilterService,
    private reportFilterService: ReportFilterService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getInvoiceFilters();
    this.getReportsFilters();
  }

  onCreate() {
    this.tabIndex === 0 ? this.createInvoiceFilter() : this.createReportFilter();
  }

  getInvoiceFilters() {
    this.isLoadingInvoiceFilters = true;
    this.selectedInvoiceFilter = null;
    this.invoiceFilters = [];

    this.invoiceFilterService.getFilters().subscribe(filters => {
      this.invoiceFilters = filters;
      this.isLoadingInvoiceFilters = false;
    });
  }

  private createInvoiceFilter() {
    this.invoiceFilterService.createEditInvoiceFilter('create').subscribe(filter => {
      if (filter) {
        this.getInvoiceFilters();
        // this.invoiceFilters.unshift(filter);
      }
    });
  }

  private onRemoveInvoiceFilter() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.invoiceFilterService.deleteFilter(this.selectedInvoiceFilter).subscribe(() => {
          // const index = this.invoiceFilters.findIndex(id => id.id === this.selectedInvoiceFilter.id);
          // this.invoiceFilters.splice(index, 1);
          // this.selectedInvoiceFilter = null;
          this.getInvoiceFilters();
        });
      }
    });
  }

  private onEditInvoiceFilter() {
    this.invoiceFilterService.createEditInvoiceFilter('edit', this.selectedInvoiceFilter).subscribe(filter => {
      if (filter) {
        // const index = this.invoiceFilters.findIndex(i => i.id === this.selectedInvoiceFilter.id);
        // this.invoiceFilters[index] = filter;
        // this.selectedInvoiceFilter= this.invoiceFilters[index];
        this.getInvoiceFilters();
      }
    });
  }


  getReportsFilters() {
    this.isLoadingReportFilters = true;
    this.selectedReportsFilter = null;
    this.reportFilters = [];

    this.reportFilterService.getFilters().subscribe(filters => {
      this.reportFilters = filters.map(f => {
        return {
          ...f,
          opened: false,
        }
      });
      this.isLoadingReportFilters = false;
    });
  }


  private createReportFilter() {
    this.reportFilterService.createEditReportFilter('create').subscribe(filter => {
      if (filter) {
        this.getReportsFilters();
        // this.reportFilters.unshift(filter);
      }
    });
  }

  private onEditReportFilter() {
    this.reportFilterService.createEditReportFilter('edit', this.selectedReportsFilter).subscribe(filter => {
      if (filter) {
        // const index = this.reportFilters.findIndex(i => i.id === this.selectedReportsFilter.id);
        // this.reportFilters[index] = filter;
        // this.selectedReportsFilter = this.reportFilters[index];
        this.getReportsFilters()
      }
    });
  }

  private onRemoveReportFilter() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.reportFilterService.deleteFilter(this.selectedReportsFilter).subscribe(() => {
          // const index = this.reportFilters.findIndex(id => id.id === this.selectedReportsFilter.id);
          // this.reportFilters.splice(index, 1);
          // this.selectedReportsFilter = null;
          this.getReportsFilters();
        });
      }
    })
  }

  getCategories(ids: string) {
    return ids.split(',').map(id => +id);
  }

  openFilter(filter: ReportFilter) {
    const opened = JSON.parse(JSON.stringify(filter.opened));

    this.reportFilters.forEach(f => f.opened = false);

    if (!opened) {
      filter.opened = true;
    }
  }
}

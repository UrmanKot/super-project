import {Component, OnInit} from '@angular/core';
import {ReportFilter} from "../../models/report-filter";
import {ReportFilterService} from "../../services/report-filter.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'pek-reports-filters-modal',
  templateUrl: './reports-filters-modal.component.html',
  styleUrls: ['./reports-filters-modal.component.scss']
})
export class ReportsFiltersModalComponent implements OnInit {

  reportFilters: ReportFilter[] = [];
  selectedReportsFilter: ReportFilter;
  isLoadingReportFilters = true;

  constructor(
    private reportFilterService: ReportFilterService,
    private readonly dialogRef: MatDialogRef<ReportsFiltersModalComponent>
  ) {
  }

  ngOnInit(): void {
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

  onSave() {
    this.dialogRef.close(this.selectedReportsFilter)
  }

  openFilter(filter: ReportFilter) {
    const opened = JSON.parse(JSON.stringify(filter.opened));

    this.reportFilters.forEach(f => f.opened = false);

    if (!opened) {
      filter.opened = true;
    }
  }

  getCategories(ids: string) {
    return ids.split(',').map(id => +id);
  }
}

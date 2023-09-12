import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ReportFilter} from "../models/report-filter";
import {ModalActionType} from "@shared/models/modal-action";
import {MatDialog} from "@angular/material/dialog";
import {CreateEditReportFilterComponent} from "../modals/create-edit-report-filter/create-edit-report-filter.component";

@Injectable({
  providedIn: 'root'
})
export class ReportFilterService {
  API_URL = environment.base_url + environment.accounting_url;
  private url = 'warehouse_balance_filters/'

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getFilters(): Observable<ReportFilter[]> {
    return this.httpClient.get<{ data: ReportFilter[] }>(this.API_URL + this.url).pipe(
      map(response => response.data)
    );
  }

  createFilter(filter: ReportFilter): Observable<ReportFilter> {
    return this.httpClient.post<{ data: ReportFilter }>(this.API_URL + this.url, filter).pipe(
      map(response => response.data)
    );
  }

  deleteFilter(filter: ReportFilter) {
    return this.httpClient.delete(this.API_URL + this.url + `${filter.id}/`);
  }

  updateFilter(filter: ReportFilter): Observable<ReportFilter> {
    return this.httpClient.patch<{
      data: ReportFilter
    }>(this.API_URL + this.url + `${filter.id}/`, filter).pipe(
      map(response => response.data)
    );
  }

  createEditReportFilter(type: ModalActionType, filter?: ReportFilter): Observable<ReportFilter> {
    return this.dialog
      .open<CreateEditReportFilterComponent>(CreateEditReportFilterComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, filter},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

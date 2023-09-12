import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdapterService} from "@shared/services/adapter.service";
import {BehaviorSubject, iif, Observable, Subject, switchMap} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {QuerySearch} from "@shared/models/other";
import {CostReportsService} from "../../services/cost-reports.service";
import {AccountingProduct} from "../../models/accounting-product";
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'pek-reports-cost-reports',
  templateUrl: './reports-cost-reports.component.html',
  styleUrls: ['./reports-cost-reports.component.scss']
})
export class ReportsCostReportsComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  currentPage = 1;
  isStartFirstPage = false;

  searchForm: FormGroup = this.fb.group({
    list_product__nomenclature__name: [null],
    name: [null],
    list_product__nomenclature__code: [null],
    code: [null],
    warehouse: [null],
    locator: [null]
  });

  name$: Subject<void> = new Subject<void>();
  code$: Subject<void> = new Subject<void>();
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  isShowAll = false;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];
  isLoading = true;

  reportsCount = 0;
  selectedReport: AccountingProduct = null;

  reports$: Observable<AccountingProduct[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.costReportsService.costReportsPagination(this.query).pipe(
          tap(response => this.reportsCount = response.count),
          map(response => response.results)
        ),
        this.costReportsService.costReports(this.query).pipe(
          tap(companies => this.reportsCount = companies.length)
        )
      )),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private fb: FormBuilder,
    private adapterService: AdapterService,
    private costReportsService: CostReportsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.name$.pipe(
      debounceTime(150),
      tap(() => this.searchForm.get('name').patchValue(this.searchForm.get('list_product__nomenclature__name').value)),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.code$.pipe(
      debounceTime(150),
      tap(() => this.searchForm.get('code').patchValue(this.searchForm.get('list_product__nomenclature__code').value)),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedReport = null;
    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'page', value: this.currentPage},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true},);
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null && this.searchForm.controls[key].value !== '') {

        this.query.push({
          name: key,
          value: this.searchForm.controls[key].value
        });

      }
    }
  }

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  onShowAll(value: boolean) {
    this.isShowAll = value;

    if (!this.isShowAll) {
      this.currentPage = 1;
    }

    this.search$.next();
  }

  private paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  onSelectWarehouse(id: number) {
    this.searchForm.get('warehouse').patchValue(id)
    this.search$.next()
  }

  onSelectLocator(id: number) {
    this.searchForm.get('locator').patchValue(id)
    this.search$.next()
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {BehaviorSubject, iif, Observable, switchMap, tap} from 'rxjs';
import {AdapterService} from '@shared/services/adapter.service';
import {filter, map} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';
import {Company} from "../../../crm/models/company";
import {CompanyService} from "../../../crm/services/company.service";

@UntilDestroy()
@Component({
  selector: 'pek-reports-company-accounting-number',
  templateUrl: './reports-company-accounting-number.component.html',
  styleUrls: ['./reports-company-accounting-number.component.scss']
})
export class ReportsCompanyAccountingNumberComponent implements OnInit {

  @ViewChild('paginator') paginator: Paginator;

  searchForm: FormGroup = this.fb.group({
    name: [null],
    category_id: [null],
  });

  currentPage = 1;
  isStartFirstPage = false;

  isShowAll = false;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];
  isLoading = true;

  companiesCount = 0;

  selectedCompany: Company = null;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  companies$: Observable<Company[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.companyService.getForPagination(this.query).pipe(
          tap(response => this.companiesCount = response.count),
          map(response => response.results)
        ),
        this.companyService.get(this.query).pipe(
          tap(companies => this.companiesCount = companies.length)
        )
      )),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private adapterService: AdapterService
  ) {
  }

  ngOnInit(): void {
  }


  prepareForSearch() {
    this.isLoading = true;
    this.selectedCompany = null;
    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'page', value: this.currentPage},
      {name: 'is_purchased_only', value: true},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true},);
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null) {

        this.query.push({
          name: key,
          value: this.searchForm.controls[key].value
        });

      }
    }
  }

  onSelectCompany(company: Partial<Company>) {
    this.searchForm.get('name').patchValue(company?.name ?? null);
    this.search$.next();
  }

  private paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
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

  onSelectCompanyCategory(id: number) {
    this.searchForm.get('category_id').patchValue(id);
    this.search$.next();
  }

  onEditCompanyAccountingNumber() {
    this.companyService.editCompanyAccountingNumberDialog(this.selectedCompany).pipe(
      filter(company => !!company)
    ).subscribe(() => this.search$.next());
  }
}

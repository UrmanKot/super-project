import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {Nomenclature} from '@shared/models/nomenclature';
import {QuerySearch} from '@shared/models/other';
import {AdapterService} from '@shared/services/adapter.service';
import {BehaviorSubject, Observable, Subject, switchMap, tap} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Paginator} from 'primeng/paginator';

@UntilDestroy()
@Component({
  selector: 'pek-reports-nomenclature-accounting-number',
  templateUrl: './reports-nomenclature-accounting-number.component.html',
  styleUrls: ['./reports-nomenclature-accounting-number.component.scss']
})
export class ReportsNomenclatureAccountingNumberComponent implements OnInit {

  @ViewChild('paginator') paginator: Paginator;


  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    categories: [''],
    order_by_accounting_number: [null],
    order_by_is_fixed_asset: [null],
    order_by_is_non_ressivable: [null],
    type: [0],
    accounting_number: [null],
    tariff_code: [''],
    tariff_code_checked: [''],
    weight: [''],
  });

  currentPage = 1;
  isStartFirstPage = false;
  isLoading = true;

  nomenclaturesCount = 0;

  selectedNomenclature: Nomenclature = null;

  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);
  query: QuerySearch[] = [];


  name$: Subject<void> = new Subject<void>();
  code$: Subject<void> = new Subject<void>();
  accountingNumber$: Subject<void> = new Subject<void>();
  tariffCode$: Subject<void> = new Subject<void>();

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  nomenclatures$: Observable<Nomenclature[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      this.nomenclatureService.getForPagination(this.query).pipe(
        tap(nomenclatures => this.nomenclaturesCount = nomenclatures.count),
        map(response => response.results)
      )),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );


  constructor(
    private fb: FormBuilder,
    private nomenclatureService: NomenclatureService,
    private adapterService: AdapterService
  ) {
  }

  ngOnInit(): void {
    this.name$.pipe(
      debounceTime(150),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.code$.pipe(
      debounceTime(150),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.accountingNumber$.pipe(
      debounceTime(150),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.tariffCode$.pipe(
      debounceTime(150),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();
  }

  onSelectCategories(ids: string) {
    this.searchForm.get('categories').patchValue(ids);
    this.search$.next();
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedNomenclature = null;
    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'page', value: this.currentPage},
      {name: 'is_purchased_only', value: true},
      {name: 'paginated', value: true},
    ];


    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null) {
        this.query.push({
          name: key,
          value: this.searchForm.controls[key].value
        });
      }
    }
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

  onAddAccountingNumber() {
    this.nomenclatureService.addAccountingNumberDialog().pipe(
      filter(nomenclature => !!nomenclature)
    ).subscribe(() => this.search$.next());
  }

  editNomenclatureAccountingNumber() {
    this.nomenclatureService.editNomenclatureAccountingNumber(this.selectedNomenclature)
      .pipe(
        filter(nomenclature => !!nomenclature)
      )
      .subscribe(() => this.search$.next());
  }
}

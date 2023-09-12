import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {Table} from "primeng/table";
import {ENomenclatureType, Nomenclature} from "@shared/models/nomenclature";
import {BehaviorSubject, iif, Observable, Subject, switchMap} from "rxjs";
import {QuerySearch} from "@shared/models/other";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdapterService} from "@shared/services/adapter.service";
import {debounceTime, distinctUntilChanged, filter, map, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {NomenclatureService} from "@shared/services/nomenclature.service";
import {B} from "@angular/cdk/keycodes";

@UntilDestroy()
@Component({
  selector: 'pek-sales-prices',
  templateUrl: './sales-prices.component.html',
  styleUrls: ['./sales-prices.component.scss']
})
export class SalesPricesComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('dt') dt: Table;

  isLoading = true;
  isShowAll = false;

  count = 0;
  currentPage = 1;
  isStartFirstPage = false;

  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    has_price: [null],
    type: [null],
  });

  nomenclatureTypes = [
    {label: 'Assembly', value: ENomenclatureType.ASSEMBLY},
    {label: 'Manufactured', value: ENomenclatureType.MANUFACTURED}
  ];

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.currentPage},
    {name: 'order_by_price', value: true},
  ];

  name$: Subject<void> = new Subject<void>();
  code$: Subject<void> = new Subject<void>();

  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  selectedNomenclature: Nomenclature;

  nomenclatures$: Observable<Nomenclature[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() =>
      iif(() =>
          !this.isShowAll,
        this.nomenclatureService.getForPagination(this.query).pipe(
          tap(response => this.count = response.count),
          map(response => response.results),
        ),
        this.nomenclatureService.get(this.query).pipe(
          tap(nomenclatures => this.count = nomenclatures.length),
        ),
      ),
    ),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    private readonly nomenclatureService: NomenclatureService,
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
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
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
      {name: 'order_by_price', value: true},
    ];

    if (!this.searchForm.get('type').value) {
      this.query.push({
        name: 'type_numbers',
        value: `${ENomenclatureType.MANUFACTURED},${ENomenclatureType.ASSEMBLY}`,
      });
    } else {
      this.query.push({
        name: 'type',
        value: this.searchForm.get('type').value,
      });
    }

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true});
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value && key !== 'type') {
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

  onEditNomenclaturePrice() {
    this.nomenclatureService.editNomenclaturePriceDialog(this.selectedNomenclature).pipe(
      filter(Boolean)
    ).subscribe(() => this.search$.next())
  }

}

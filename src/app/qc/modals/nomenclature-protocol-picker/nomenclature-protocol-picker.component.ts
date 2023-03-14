import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {Nomenclature} from '@shared/models/nomenclature';
import {QuerySearch} from '@shared/models/other';
import {AdapterService} from '@shared/services/adapter.service';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';

@UntilDestroy()
@Component({
  selector: 'pek-nomenclature-protocol-picker',
  templateUrl: './nomenclature-protocol-picker.component.html',
  styleUrls: ['./nomenclature-protocol-picker.component.scss']
})
export class NomenclatureProtocolPickerComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  nomenclatureFilterTypes = [
    {name: 'Manufactured', value: '2'},
    {name: 'Assembly', value: '1'},
    {name: 'Purchased', value: '0'}
  ];

  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    categories: [''],
    root_categories: [''],
    type: [null],
  });

  isLoading = true;

  currentPage = 1;
  isStartFirstPage = false;

  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];

  selectedProduct: Nomenclature;

  productsCount = 0;

  name$: Subject<void> = new Subject<void>();
  code$: Subject<void> = new Subject<void>();
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  products$: Observable<Nomenclature[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.nomenclatureService.getForPagination(this.query)),
    tap(response => this.productsCount = response.count),
    map(response => response.results),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private dialogRef: MatDialogRef<NomenclatureProtocolPickerComponent>,
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
    private readonly adapterService: AdapterService,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) { }

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

  prepareForSearch() {
    this.isLoading = true;
    this.selectedProduct = null;

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'paginated', value: true},
      {name: 'page', value: this.currentPage},
    ];

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value) {
        this.query.push({
          name: key,
          value: this.searchForm.controls[key].value
        });
      }
    }
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  onSelectProduct() {
    this.dialogRef.close(this.selectedProduct)
  }

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  onSelectCategories(ids: string) {
    this.searchForm.get('categories').patchValue(ids)
    this.search$.next()
  }

  onSelectRootCategories(ids: string) {
    this.searchForm.get('root_categories').patchValue(ids)
    this.search$.next()
  }
}

import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Paginator} from 'primeng/paginator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuerySearch} from '@shared/models/other';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {debounceTime, distinctUntilChanged, finalize, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {AdapterService} from '@shared/services/adapter.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@UntilDestroy()
@Component({
  selector: 'pek-manufacturing-picker-product',
  templateUrl: './manufacturing-picker-product.component.html',
  styleUrls: ['./manufacturing-picker-product.component.scss']
})
export class ManufacturingPickerProductComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  isSaving = false;

  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    type: [null],
  });

  isStartFirstPage = false;

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];

  isLoading = true;
  productsCount = 0;

  selectedProduct: Nomenclature;

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
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
    private readonly orderProductService: OrderProductService,
    private readonly adapterService: AdapterService,
    private dialogRef: MatDialogRef<ManufacturingPickerProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ENomenclatureType }
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

    this.searchForm.get('type').patchValue(this.data.type);
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
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

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  onAddProduct() {
    this.dialogRef.close(this.selectedProduct);
  }

  protected readonly ENomenclatureType = ENomenclatureType;
}

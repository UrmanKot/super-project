import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {AdapterService} from '@shared/services/adapter.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {QuerySearch} from '@shared/models/other';
import {ENomenclatureApproval, ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {BehaviorSubject, Observable, Subject, switchMap} from 'rxjs';
import {debounceTime, distinctUntilChanged, finalize, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';
import {OrderProductService} from '../../../procurement/services/order-product.service';

@UntilDestroy()
@Component({
  selector: 'pek-create-outsourcing-request',
  templateUrl: './create-outsourcing-request.component.html',
  styleUrls: ['./create-outsourcing-request.component.scss']
})
export class CreateOutsourcingRequestComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  nomenclatureFilterTypes = [
    {name: 'Manufactured', value: '2'},
    {name: 'Assembly', value: '1'}
  ];

  isSaving = false;

  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    type: ['2'],
  });

  createForm: FormGroup = this.fb.group({
    current_technology: [null, Validators.required],
    quantity: [0, [Validators.required, Validators.min(1)]],
    order: [null],
    nomenclature: [null, Validators.required],
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

  protected readonly ENomenclatureApproval = ENomenclatureApproval;
  protected readonly ENomenclatureType = ENomenclatureType;

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
    private readonly orderProductService: OrderProductService,
    private readonly adapterService: AdapterService,
    private dialogRef: MatDialogRef<CreateOutsourcingRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { orderId: number }
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

    this.createForm.get('order').patchValue(this.data.orderId);
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

    this.createForm.get('quantity').patchValue(null);
    this.createForm.get('current_technology').patchValue(null);

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

  onSelectProduct() {
    this.createForm.get('nomenclature').patchValue(this.selectedProduct?.id || null);
  }

  clearCreatForm() {
    this.createForm.get('quantity').patchValue(0);
    this.createForm.get('current_technology').patchValue(null);
  }

  onAddProduct() {
    this.isSaving = true;
    this.orderProductService.create(this.createForm.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(order => {
      this.dialogRef.close(order);
    });
  }

}

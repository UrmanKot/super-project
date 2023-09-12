import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, Subject, switchMap} from "rxjs";
import {QuerySearch} from "@shared/models/other";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Nomenclature} from "@shared/models/nomenclature";
import {debounceTime, distinctUntilChanged, finalize, map, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {NomenclatureService} from "@shared/services/nomenclature.service";
import {AdapterService} from "@shared/services/adapter.service";
import {Category} from "../../../product-structure/models/category";
import {Paginator} from "primeng/paginator";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InvoiceService} from "../../../procurement/services/invoice.service";
import {InvoiceProductService} from "../../../procurement/services/invoice-product.service";

@UntilDestroy()
@Component({
  selector: 'pek-new-invoice-product-modal',
  templateUrl: './new-invoice-product-modal.component.html',
  styleUrls: ['./new-invoice-product-modal.component.scss']
})
export class NewInvoiceProductModalComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  productsCount = 0;
  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    category: [null],
    type: ['0']
  });

  isLoading = true;

  createForm: FormGroup = this.fb.nonNullable.group({
    ddv: [22, []],
    discount: [0, []],
    fixed_discount: [false],
    invoice: [this.data.id],
    supplier_unit_price: [0, []],
    quantity: [0, [Validators.required, Validators.min(1)]],
  });

  defaultValues = {...this.createForm.value};

  name$: Subject<void> = new Subject<void>();
  code$: Subject<void> = new Subject<void>();
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  selectedProduct: Nomenclature;

  isStartFirstPage = false;

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];

  products$: Observable<Nomenclature[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.nomenclatureService.getForPagination(this.query)),
    tap(response => this.productsCount = response.count),
    map(response => response.results),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  isSaving = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
    private readonly adapterService: AdapterService,
    private readonly invoiceProductService: InvoiceProductService,
    private dialogRef: MatDialogRef<NewInvoiceProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number, }
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
    this.selectedProduct = null;

    this.createForm.reset();

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

  onSelectCategory(category: Category) {
    this.searchForm.get('category').patchValue(category?.name || null);
    this.search$.next();
  }

  onSelectProduct() {
    this.createForm.reset();
  }

  clearCreatForm() {
    this.createForm.reset();
  }

  onAdd() {
    const send = {...this.createForm.value};
    send.nomenclature = this.selectedProduct.id;

    this.isSaving = true;

    this.invoiceProductService.create(send).pipe(
      finalize(() => this.isSaving = false),
      tap(product => this.dialogRef.close(product))
    ).subscribe()
  }
}

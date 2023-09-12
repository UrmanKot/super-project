import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {QuerySearch} from "@shared/models/other";
import {Paginator} from "primeng/paginator";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BehaviorSubject, Observable, switchMap} from "rxjs";
import {Invoice} from "../../../procurement/models/invoice";
import {InvoiceService} from "../../../procurement/services/invoice.service";
import {AdapterService} from "@shared/services/adapter.service";
import {map, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'pek-select-bind-invoice-modal',
  templateUrl: './select-bind-invoice-modal.component.html',
  styleUrls: ['./select-bind-invoice-modal.component.scss']
})
export class SelectBindInvoiceModalComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  productsCount = 0;

  searchForm: FormGroup = this.fb.group({
    supplier: [null],
    system_creation_date_after: [null],
    system_creation_date_before: [null],
  });

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  selectedProduct: Invoice;

  isLoading = true;

  query: QuerySearch[] = [];

  isStartFirstPage = false;

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  products$: Observable<Invoice[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.invoiceService.getForPagination(this.query)),
    tap(response => this.productsCount = response.count),
    map(response => response.results),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { isProforma: boolean },
    private dialogRef: MatDialogRef<SelectBindInvoiceModalComponent>,
    private invoiceService: InvoiceService,
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
  ) {
  }

  ngOnInit(): void {
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
      {name: 'is_proforma', value: this.data.isProforma},
    ];

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null) {

        if (this.searchForm.controls[key].value instanceof Date) {
          this.query.push({
            name: key,
            value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
          });
        } else {
          this.query.push({
            name: key,
            value: this.searchForm.controls[key].value
          });
        }
      }
    }
  }

  paginate(event: any) {
    if (!this.isStartFirstPage) {
      this.currentPage = event.page + 1;
      this.search$.next();
    }
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  onSelect() {
    this.dialogRef.close(this.selectedProduct)
  }

  onSelectCompany(id: number) {
    this.searchForm.get('supplier').patchValue(id);
    this.search$.next();
  }
}

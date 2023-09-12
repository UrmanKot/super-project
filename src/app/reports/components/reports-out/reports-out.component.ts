import {Component, OnInit, ViewChild} from '@angular/core';
import {
  MultiProductCategoriesPickerComponent
} from "@shared/pickers/multi-product-categories-picker/multi-product-categories-picker.component";
import {Table} from "primeng/table";
import {QuerySearch} from "@shared/models/other";
import {Observable, of, startWith, Subject, switchMap} from "rxjs";
import {BalanceProduct} from "../../models/accounting-product";
import {debounceTime, distinctUntilChanged, filter, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ColumnFilterService} from "@shared/services/column-filter.service";
import {AccountingProductsService} from "../../services/accounting-products.service";
import {AdapterService} from "@shared/services/adapter.service";
import {List} from "../../../warehouse/models/list";
import {ListService} from "../../../warehouse/services/list.service";

@UntilDestroy()
@Component({
  selector: 'pek-reports-out',
  templateUrl: './reports-out.component.html',
  styleUrls: ['./reports-out.component.scss']
})
export class ReportsOutComponent implements OnInit {
  @ViewChild(MultiProductCategoriesPickerComponent) picker: MultiProductCategoriesPickerComponent;

  @ViewChild('dt') dt: Table;

  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    written_off_for_lists: [null],
    supplier: [null],
    supplier_category: [null],
    categories: [null],
    root_categories: [null],
    system_creation_date_after: [null],
    system_creation_date_before: [null],
    invoice_reception_date_after: [null],
    invoice_reception_date_before: [null],
    items_reception_date_after: [null],
    items_reception_date_before: [null],
    created_after: [null],
    created_before: [null],
    for_completed_lists: [null],
    is_paid: [null],
    purchase_categories: [null],
    invoice_date_after: [null],
    invoice_date_before: [null],
    nomenclature_accounting_numbers: [null],
    accounting_type: [null],
    material_or_service: [null],
    for_lists_in_progress: [null],
  });

  isLoadingLists = true;
  lists: Partial<List>[];

  isLoading = false;
  balanceProducts = [];

  query: QuerySearch[] = [];
  count = 0;

  supplierTotalCost = 0;
  supplierTotalPrice = 0;

  isGenerate = false;

  search$: Subject<void> = new Subject<void>();

  name$: Subject<string> = new Subject<string>();
  code$: Subject<string> = new Subject<string>();

  balanceProducts$: Observable<BalanceProduct[]> = this.search$.pipe(
    debounceTime(150),
    tap(() => this.prepareForSearch()),
    switchMap(() => this.query.length ? this.accountingProductService.out(this.query).pipe(
        tap(products => this.countTotals(products)),
        startWith([]),
        untilDestroyed(this)
      ) :
      of([]).pipe(
        tap(() => this.countTotals([]))
      )),
    untilDestroyed(this)
  )

  constructor(
    private readonly fb: FormBuilder,
    public columnFilterService: ColumnFilterService,
    private accountingProductService: AccountingProductsService,
    private readonly adapterService: AdapterService,
    private listsService: ListService,
  ) {
  }

  getLists() {
    this.listsService.getForFilter().subscribe(lists => {
      this.lists = lists;
      this.lists.forEach(list => list.fullName = `(${list.id}) ${list.nomenclature.code} ${list.nomenclature.name}`);
      this.lists.unshift(...[
        {
          id: -1,
          fullName: 'Sold Products'
        },
        {
          id: 0,
          fullName: 'Physical Inventory'
        }
      ]);

      this.isLoadingLists = false;
    });
  }

  ngOnInit(): void {
    this.name$.pipe(
      debounceTime(250),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.code$.pipe(
      debounceTime(250),
      tap(() => this.search$.next()),
      distinctUntilChanged(),
      untilDestroyed(this)
    ).subscribe();

    this.getLists();
  }

  clearFilters() {
    this.searchForm.reset();
    this.picker.fillSelected([])
  }

  countTotals(products: BalanceProduct[]) {
    this.supplierTotalCost = 0;
    this.supplierTotalPrice = 0;
    products.forEach(el => {
      this.supplierTotalCost += el.supplier_total_cost;
      // @ts-ignore
      this.supplierTotalPrice += parseFloat(el.supplier_total_price);

    });

    this.count = products.length
    this.balanceProducts = [...products];
    this.isLoading = false;
  }

  prepareForSearch() {
    this.dt._first = 0;

    this.isLoading = true;
    this.count = 0;

    this.query = [];

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null && this.searchForm.controls[key].value !== '') {

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

  exportToExcel() {
    this.isGenerate = true;
    this.accountingProductService.exportToExcel(this.balanceProducts, 'out').then(() => {
      this.isGenerate = false;
    });
  }

  onApplyFilter() {
    this.accountingProductService.openFilterModal().pipe(
      filter(filter => !!filter)
    ).subscribe(filter => {
      const newFilter: any = {...filter};

      if (newFilter.invoice_reception_date_after) {
        newFilter.invoice_reception_date_after = new Date(newFilter.invoice_reception_date_after);
      }

      if (newFilter.invoice_reception_date_before) {
        newFilter.invoice_reception_date_before = new Date(newFilter.invoice_reception_date_before);
      }

      if (newFilter.items_reception_date_after) {
        newFilter.items_reception_date_after = new Date(newFilter.items_reception_date_after);
      }

      if (newFilter.items_reception_date_before) {
        newFilter.items_reception_date_before = new Date(newFilter.items_reception_date_before);
      }

      if (newFilter.system_creation_date_after) {
        newFilter.system_creation_date_after = new Date(newFilter.system_creation_date_after);
      }

      if (newFilter.system_creation_date_before) {
        newFilter.system_creation_date_before = new Date(newFilter.system_creation_date_before);
      }

      newFilter.supplier = newFilter.supplier ? newFilter.supplier.id : null;
      newFilter.supplier_category = newFilter.supplier_category ? +newFilter.supplier_category.id : null;
      newFilter.categories = newFilter.nomenclature_categories.split(',').map(id => +id);

      newFilter.code = newFilter.nomenclature_code;
      newFilter.name = newFilter.nomenclature_name;

      this.searchForm.patchValue(newFilter);

      this.picker.fillSelected(newFilter.categories)
    })
  }

  onSelectCompany(id: number) {
    this.searchForm.get('supplier').patchValue(id);
    this.search$.next();
  }

  onSelectCategory(id: number) {
    this.searchForm.get('supplier_category').patchValue(id);
    this.search$.next();
  }

  onSelectCategories(ids: number[]) {
    this.searchForm.get('categories').patchValue(ids?.join(',') ?? null);
    this.search$.next();
  }

  onSelectPurchasedCategories(values: any[]) {
    this.searchForm.get('accounting_type').patchValue(null);
    this.searchForm.get('material_or_service').patchValue(null);

    values.forEach(v => {
      if (v === 'mp') {
        this.searchForm.get('accounting_type').patchValue(1);
      } else if (v === 'ou') {
        this.searchForm.get('material_or_service').patchValue('material');
      } else if (v === 'os') {
        this.searchForm.get('material_or_service').patchValue('service');
      }
    });

    if (values.find(v => v === 'ou') && values.find(v => v === 'os')) {
      this.searchForm.get('material_or_service').patchValue('both');
    }

    values = values.filter(v => typeof (v) === 'number');
    this.searchForm.get('purchase_categories').patchValue(values.join(','));
    this.search$.next();
  }

  getPaidFinishedProducts(value: any) {
    this.searchForm.get('for_completed_lists').patchValue(value);
    this.search$.next();
  }

  getProgressValue(value: any) {
    this.searchForm.get('for_lists_in_progress').patchValue(value);
    this.search$.next();
  }

  changeAccountingNumber(evt) {
    const value = evt.target.value.replace(/\s/g, '');

    if (value) {
      this.searchForm.get('nomenclature_accounting_numbers').patchValue(value);
    } else {
      this.searchForm.get('nomenclature_accounting_numbers').patchValue(null);
    }

    this.search$.next()
  }

  onSelectProductStructureCategories(ids: string) {
    this.searchForm.get('root_categories').patchValue(ids ?? null);
    this.search$.next();
  }
}

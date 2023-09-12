import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BalanceProduct} from "../../models/accounting-product";
import {ColumnFilterService} from "@shared/services/column-filter.service";
import {AccountingProductsService} from "../../services/accounting-products.service";
import {Observable, of, startWith, Subject, switchMap} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {QuerySearch} from "@shared/models/other";
import {debounceTime, distinctUntilChanged, filter, tap} from "rxjs/operators";
import {AdapterService} from "@shared/services/adapter.service";
import {Table} from "primeng/table";
import {
  MultiProductCategoriesPickerComponent
} from "@shared/pickers/multi-product-categories-picker/multi-product-categories-picker.component";

@UntilDestroy()
@Component({
  selector: 'pek-reports-in',
  templateUrl: './reports-in.component.html',
  styleUrls: ['./reports-in.component.scss']
})
export class ReportsInComponent implements OnInit {
  @ViewChild(MultiProductCategoriesPickerComponent) picker: MultiProductCategoriesPickerComponent;

  @ViewChild('dt') dt: Table;

  isLoading = false;
  balanceProducts: BalanceProduct[] = [];

  query: QuerySearch[] = [];
  count = 0;

  supplierTotalCost = 0;
  supplierTotalPrice = 0;

  isGenerate = false;
  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    supplier: [null],
    supplier_category: [null],
    categories: [null],
    system_creation_date_after: [null],
    system_creation_date_before: [null],
    invoice_reception_date_after: [null],
    invoice_reception_date_before: [null],
    items_reception_date_after: [null],
    items_reception_date_before: [null],
    is_paid: [null],
    purchase_categories: [null],
    invoice_date_after: [null],
    invoice_date_before: [null],
    nomenclature_accounting_numbers: [null],
    accounting_type: [null],
    material_or_service: [null],
  });

  search$: Subject<void> = new Subject<void>();

  name$: Subject<string> = new Subject<string>();
  code$: Subject<string> = new Subject<string>();

  balanceProducts$: Observable<BalanceProduct[]> = this.search$.pipe(
    debounceTime(150),
    tap(() => this.prepareForSearch()),
    switchMap(() => this.query.length ? this.accountingProductService.in(this.query).pipe(
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
  ) {
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

    this.balanceProducts$.pipe(
      untilDestroyed(this)
    ).subscribe()
  }

  clearFilters() {
    this.searchForm.reset();
    this.picker.fillSelected([])
  }

  countTotals(products: BalanceProduct[]) {
    this.supplierTotalCost = 0;
    this.supplierTotalPrice = 0;
    products.forEach(el => {
      if (el.accepted_by_invoices) {
        el.date = new Date(el?.accepted_by_invoices[0]?.document_creation_date);
        el?.accepted_by_invoices.sort((a, b) => new Date(a.document_creation_date).getTime() - new Date(b.document_creation_date).getTime());
        el?.accepted_by_invoices.forEach(element => {
          this.supplierTotalCost += element.supplier_total_cost;
          // @ts-ignore
          this.supplierTotalPrice += parseFloat(element.supplier_total_price);
        });
      }
    });

    const newProducts = [];

    let uid = 0;

    products.forEach(product => {
      product.accepted_by_orders?.forEach(item => {
        uid++;

        newProducts.push({
          id: uid,
          name: product.name,
          code: product.code,
          totalQuantity: product.quantity,
          category: product.category ? product.category.unit_of_measure?.symbol : 'Pcs',
          order: item.order,
          invoice: item.invoice,
          current_technology: item.current_technology ? item.current_technology : 'None',
          purchase_category: product.purchase_category ? product.purchase_category?.name : 'None',
          supplier: item.supplier,
          document_creation_date: item.document_creation_date,
          quantity: item.quantity,
          // @ts-ignore
          supplier_unit_price: parseFloat(item.supplier_unit_price),
          supplier_total_price: item.supplier_total_price,
          // @ts-ignore
          supplier_unit_cost: parseFloat(item.supplier_unit_cost),
          supplier_total_cost: item.supplier_total_cost,
          type: product.type,
        })
      })

      product.accepted_by_invoices?.forEach(item => {
        uid++;

        newProducts.push({
          id: uid,
          name: product.name,
          code: product.code,
          totalQuantity: product.quantity,
          category: product.category ? product.category.unit_of_measure?.symbol : 'Pcs',
          order: item.order,
          invoice: item.invoice,
          current_technology: item.current_technology ? item.current_technology : 'None',
          purchase_category: product.purchase_category ? product.purchase_category?.name : 'None',
          supplier: item.supplier,
          document_creation_date: item.document_creation_date,
          quantity: item.quantity,
          // @ts-ignore
          supplier_unit_price: parseFloat(item.supplier_unit_price),
          supplier_total_price: item.supplier_total_price,
          // @ts-ignore
          supplier_unit_cost: parseFloat(item.supplier_unit_cost),
          supplier_total_cost: item.supplier_total_cost,
          type: product.type,
        })
      })

      product.accepted_by_physical_inventories?.forEach(item => {
        uid++;

        console.log(item)
        newProducts.push({
          id: uid,
          name: product.name,
          code: product.code,
          totalQuantity: product.quantity,
          category: product.category ? product.category.unit_of_measure?.symbol : 'Pcs',
          order: item?.physical_inventory?.id,
          invoice: '',
          current_technology: item.current_technology ? item.current_technology : 'None',
          purchase_category: product.purchase_category ? product.purchase_category?.name : 'None',
          supplier: 'Physical Inventory',
          document_creation_date: item?.physical_inventory?.system_creation_date,
          quantity: item?.difference_quantity,
          supplier_unit_price: parseFloat(item.unit_price),
          supplier_total_price: parseFloat(item.total_price),
          supplier_unit_cost: parseFloat(item.unit_cost),
          supplier_total_cost: parseFloat(item.total_cost),
          type: 'physical-inventory',
        })
      })
    })

    this.count = newProducts.length
    newProducts.sort(function (a, b) {
      return new Date(b.document_creation_date).getTime() - new Date(a.document_creation_date).getTime() || a.code.localeCompare(b.code);
    });
    this.balanceProducts = newProducts.map(p => p);
    // this.balanceProducts = products.map(p => p)
    this.isLoading = false;
  }

  prepareForSearch() {
    this.dt._first = 0;

    this.balanceProducts = [];
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

  changeAccountingNumber(evt) {
    const value = evt.target.value.replace(/\s/g, '');

    if (value) {
      this.searchForm.get('nomenclature_accounting_numbers').patchValue(value);
    } else {
      this.searchForm.get('nomenclature_accounting_numbers').patchValue(null);
    }

    this.search$.next();
  }

  getPaidStatus(value) {
    this.searchForm.get('is_paid').patchValue(value);
    this.search$.next();
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

  exportToExcel() {
    this.isGenerate = true;
    this.accountingProductService.exportToExcel(this.balanceProducts, 'in').then(() => {
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
}

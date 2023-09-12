import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {BehaviorSubject, Observable, startWith, Subject, switchMap} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, tap} from "rxjs/operators";
import {WarehouseProductService} from "../../../warehouse/services/warehouse-product.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {FilterService} from "primeng/api";
import {WarehouseProduct} from "../../../warehouse/models/warehouse-product";
import {AccountingProductsService} from "../../services/accounting-products.service";

@UntilDestroy()
@Component({
  selector: 'pek-reports-item-card',
  templateUrl: './reports-item-card.component.html',
  styleUrls: ['./reports-item-card.component.scss']
})
export class ReportsItemCardComponent implements OnInit {
  isLoading = false;
  isStarted = false;

  selectedProduct: WarehouseProduct;

  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isLoadingNomenclatures = false;

  products$: Observable<WarehouseProduct[]> = this.search$.pipe(
    distinctUntilChanged(),
    debounceTime(150),
    tap(() => this.isLoadingNomenclatures = true),
    switchMap(name => this.warehouseProductService.getPagination([
      {name: 'type', value: '0'},
      {name: 'paginated', value: true},
      {name: 'page', value: 1},
      {name: 'name', value: name}
    ]).pipe(
      map(response => response.results.map(p => ({
        ...p,
        fullName: `(${p.nomenclature.code}) ${p.nomenclature.name}`
      }))),
      tap(() => this.isLoadingNomenclatures = false),
      startWith([]),
      untilDestroyed(this)
    )),
    untilDestroyed(this)
  )

  itemsCount = 0;

  loadHistory$: Subject<void> = new Subject<void>();

  items$: Observable<any> = this.loadHistory$.pipe(
    filter(() => !!this.selectedProduct),
    tap(() => this.isLoading = true),
    tap(() => this.isStarted = true),
    tap(() => this.itemsCount = 0),
    switchMap(() => this.accountingProductService.history(this.selectedProduct.nomenclature.id).pipe(
        map(history => {
          let historyArr = [];

          if (history.accepted.accepted_quantity !== null) {
            let qnt = history.accepted.accepted_quantity;

            history.out.forEach(product => {
              qnt -= product.quantity;
              product.remains = qnt;
              product.invoice = history.accepted.invoice;
              product.nomenclature = history.accepted.nomenclature;
              product.order = history.accepted.order;
              product.current_technology = history.accepted.current_technology;
              product.supplier = history.accepted.supplier;
              product.supplier_unit_price = history.accepted.supplier_unit_price;
              product.supplier_total_price = history.accepted.supplier_total_price;
              product.supplier_unit_cost = history.accepted.supplier_unit_cost;
              product.supplier_total_cost = history.accepted.supplier_total_cost;
              historyArr.push(product);
            });

            history.accepted.type = 'in';
            historyArr.unshift(history.accepted);
          } else {
            historyArr = [];
          }

          this.itemsCount = historyArr.length;

          console.log(historyArr)
          return historyArr
        }),
        tap(() => this.isLoading = false),
        startWith([]),
      )
    ),
    untilDestroyed(this)
  )

  constructor(
    private readonly fb: FormBuilder,
    private warehouseProductService: WarehouseProductService,
    private accountingProductService: AccountingProductsService,
    private filterService: FilterService
  ) {
  }

  ngOnInit(): void {
    this.filterService.register('empty', (value, filter): boolean => {
      return value
    });
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvoiceProduct} from '../../../../../procurement/models/invoice-product';
import {map, switchMap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {InvoiceProductService} from '../../../../../procurement/services/invoice-product.service';

@Component({
  selector: 'pek-warehouse-isolator-invoices',
  templateUrl: './warehouse-isolator-invoices.component.html',
  styleUrls: ['./warehouse-isolator-invoices.component.scss']
})
export class WarehouseIsolatorInvoicesComponent implements OnInit, OnDestroy {

  isLoading = true;
  invoiceProducts: InvoiceProduct[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly invoiceProductService: InvoiceProductService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.invoiceProductService.get(
        [
          {name: 'invoice', value: id},
          {name: 'not_passed_quantity__gt', value: 0}
        ]
      )),
      takeUntil(this.destroy$)
    ).subscribe(invoiceProducts => {
      this.invoiceProducts = invoiceProducts;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

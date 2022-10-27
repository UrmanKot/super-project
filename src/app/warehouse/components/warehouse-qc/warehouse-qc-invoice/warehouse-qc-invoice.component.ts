import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvoiceProduct} from '../../../../procurement/models/invoice-product';
import {InvoiceService} from '../../../../procurement/services/invoice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-warehouse-qc-invoice',
  templateUrl: './warehouse-qc-invoice.component.html',
  styleUrls: ['./warehouse-qc-invoice.component.scss']
})
export class WarehouseQcInvoiceComponent implements OnInit, OnDestroy {
  isLoading = true;

  invoiceId: number;
  invoiceProducts: InvoiceProduct[] = [];
  selectedInvoiceProducts: InvoiceProduct[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.invoiceId = +id),
      switchMap(() => this.invoiceService.getProductsToAccept(this.invoiceId)),
      takeUntil(this.destroy$)
    ).subscribe(invoiceProducts => {
      this.invoiceProducts = invoiceProducts;
      this.isLoading = false;
    });
  }

  onAcceptToWarehouse() {
    this.invoiceService.openAcceptToWarehouseModal(this.selectedInvoiceProducts, this.invoiceId).subscribe(response => {
      if (response) {
        this.selectedInvoiceProducts.forEach(product => {
          this.invoiceProducts = this.invoiceProducts.filter(p => p.id !== product.id);
        });

        if (this.invoiceProducts.length === 0) {
          this.router.navigate(['../../'], {relativeTo: this.route});
        }

        this.selectedInvoiceProducts = [];
      }
    });
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedInvoiceProducts[0].nomenclature.id, 1).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

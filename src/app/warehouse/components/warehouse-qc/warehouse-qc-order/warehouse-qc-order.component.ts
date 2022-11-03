import {Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {OrderProduct} from '../../../../procurement/models/order-product';
import {OrderService} from '../../../../procurement/services/order.service';

@Component({
  selector: 'pek-warehouse-qc-order',
  templateUrl: './warehouse-qc-order.component.html',
  styleUrls: ['./warehouse-qc-order.component.scss']
})
export class WarehouseQcOrderComponent implements OnInit {

  isLoading = true;

  orderId: number;
  orderProducts: OrderProduct[] = [];
  selectedOrderProducts: OrderProduct[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly orderService: OrderService,
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
      tap(id => this.orderId = +id),
      switchMap(() => this.orderService.getProductsToAccept(this.orderId)),
      takeUntil(this.destroy$)
    ).subscribe(orderProducts => {
      this.orderProducts = orderProducts;
      this.isLoading = false;
    });
  }

  onAcceptToWarehouse() {
    this.orderService.openAcceptToWarehouseModal(this.selectedOrderProducts, this.orderId).subscribe(response => {
      if (response) {
        this.selectedOrderProducts.forEach(product => {
          this.orderProducts = this.orderProducts.filter(p => p.id !== product.id);
        });

        if (this.orderProducts.length === 0) {
          this.router.navigate(['../../'], {relativeTo: this.route});
        }

        this.selectedOrderProducts = [];
      }
    });
  }

  onShowImages() {
    this.modalService.showImageGallery([], this.selectedOrderProducts[0].nomenclature.id, 1).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

import {Component, OnInit} from '@angular/core';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';
import {WarehouseProduct} from '../../../warehouse/models/warehouse-product';
import {ModalService} from '@shared/services/modal.service';
import {ENomenclatureBulk} from '@shared/models/nomenclature';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-reservation-confirmation',
  templateUrl: './reservation-confirmation.component.html',
  styleUrls: ['./reservation-confirmation.component.scss']
})
export class ReservationConfirmationComponent implements OnInit {
  nomenclatureBulk = ENomenclatureBulk;

  isLoading = true;
  selectedProducts: WarehouseProduct[] = [];
  products: WarehouseProduct[] = [];

  isPendingDecline = false;
  isPendingConfirm = false;

  constructor(
    private readonly warehouseProductsService: WarehouseProductService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.warehouseProductsService.getReservations().subscribe(products => {
      this.products = products;
      this.isLoading = false;
    });
  }

  onDecline() {
    this.modalService.confirm('danger', 'Decline').subscribe(confirm => {
      if (confirm) {
        this.isPendingDecline = true;
        const ids: number[] = this.selectedProducts.map(p => p.id);
        const send: { is_confirmed: boolean } = {
          is_confirmed: false,
        };

        this.warehouseProductsService.severalUpdateReservations(ids, send).pipe(
          finalize(() => this.isPendingDecline = false)
        ).subscribe(() => {
          ids.forEach(id => this.products = this.products.filter(product => product.id !== id));
          this.selectedProducts = [];
        });
      }
    });
  }

  onConfirm() {
    this.modalService.confirm('success').subscribe(confirm => {
      if (confirm) {
        this.isPendingConfirm = true;
        const ids: number[] = this.selectedProducts.map(p => p.id);
        const send: { is_confirmed: boolean } = {
          is_confirmed: true,
        };

        this.warehouseProductsService.severalUpdateReservations(ids, send).pipe(
          finalize(() => this.isPendingConfirm = false)
        ).subscribe(() => {
          ids.forEach(id => this.products = this.products.filter(product => product.id !== id));
          this.selectedProducts = [];
        });
      }
    });
  }
}

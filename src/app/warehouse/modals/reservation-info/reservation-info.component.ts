import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {WarehouseProductService} from '../../../warehouse/services/warehouse-product.service';
import {WarehouseProductExtraInfo, WarehouseProduct} from '../../models/warehouse-product';
import {environment} from '@env/environment';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-reservation-info',
  templateUrl: './reservation-info.component.html',
  styleUrls: ['./reservation-info.component.scss']
})
export class ReservationInfoComponent implements OnInit {

  link = environment.link_url;

  isLoading = true;
  products: WarehouseProduct[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly warehouseProductsService: WarehouseProductService,
    private dialogRef: MatDialogRef<ReservationInfoComponent>,
    private readonly router: Router,
    @Inject(MAT_DIALOG_DATA) public data: {extraInfo: WarehouseProductExtraInfo[]},
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.data.extraInfo = [...this.data.extraInfo]
    this.getProducts();
  }

  getProducts() {
    const ids = this.data.extraInfo.map(data => data.id);
    this.warehouseProductsService.getReservationInfo(ids).pipe(
      takeUntil(this.destroy$),
    ).subscribe(products => {
      this.products = products;
      this.isLoading = false;
    });
  }

  goToProductionList(productionListId: number) {
    const url = this.router.createUrlTree(['warehouse', 'production-lists', productionListId]);
    window.open(url.toString(), '_blank');
  }

}

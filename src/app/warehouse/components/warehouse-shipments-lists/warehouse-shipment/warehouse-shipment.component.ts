import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {ShipmentService} from '../../../services/shipment.service';
import {ShipmentProduct} from '../../../models/shipment-product';

@Component({
  selector: 'pek-warehouse-shipment',
  templateUrl: './warehouse-shipment.component.html',
  styleUrls: ['./warehouse-shipment.component.scss']
})
export class WarehouseShipmentComponent implements OnInit, OnDestroy {
  shipmentId: number;
  shipmentProducts: ShipmentProduct[] = [];
  selectedShipmentProduct: ShipmentProduct;

  isLoading = true;

  private destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly shipmentService: ShipmentService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.shipmentId = +id),
      switchMap(() => this.shipmentService.getProducts(this.shipmentId)),
      takeUntil(this.destroy$)
    ).subscribe(shipmentProducts => {
      this.shipmentProducts = shipmentProducts;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

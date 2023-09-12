import {Component, Input, OnInit} from '@angular/core';
import {OrderMaterial, OrderProduct} from '../../../../procurement/models/order-product';
import {AuthService} from '../../../../auth/auth.service';
import {Order} from '../../../../procurement/models/order';

export class PrintGroupedOrderProduct {
  orderProduct: OrderProduct;
  materials: OrderMaterial[];
}

@Component({
  selector: 'pek-manufacturing-order-products-info-print',
  templateUrl: './manufacturing-order-products-info-print.component.html',
  styleUrls: ['./manufacturing-order-products-info-print.component.scss']
})
export class ManufacturingOrderProductsInfoPrintComponent implements OnInit {
  @Input() order: Order;
  @Input() orderId: number;
  @Input() products: OrderProduct[] = [];
  @Input() materials: OrderMaterial[] = [];
  preparedForPrintInfo: PrintGroupedOrderProduct[] = [];
  currentDate = new Date();

  constructor(
    public readonly auth: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.products.sort((a, b) => a.id - b.id).forEach(product => {
      const materials = this.materials.filter(el => product.ids.findIndex(elId => elId === el.for_order_product.id) >= 0);

      this.preparedForPrintInfo.push({
        orderProduct: product,
        materials: materials
      });
    });
  }

}

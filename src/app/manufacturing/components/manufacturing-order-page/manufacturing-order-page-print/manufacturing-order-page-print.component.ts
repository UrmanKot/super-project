import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../../procurement/models/order';
import {OrderMachine, OrderMaterial, OrderProduct} from '../../../../procurement/models/order-product';
import {AuthService} from '../../../../auth/auth.service';

@Component({
  selector: 'pek-manufacturing-order-page-print',
  templateUrl: './manufacturing-order-page-print.component.html',
  styleUrls: ['./manufacturing-order-page-print.component.scss']
})
export class ManufacturingOrderPagePrintComponent implements OnInit {
  @Input() order: Order;
  @Input() orderId: number;
  @Input() products: OrderProduct[] = [];
  @Input() materials: OrderMaterial[] = [];
  @Input() machines: OrderMachine[] = [];

  currentDate = new Date()
  constructor(
    public readonly auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

}

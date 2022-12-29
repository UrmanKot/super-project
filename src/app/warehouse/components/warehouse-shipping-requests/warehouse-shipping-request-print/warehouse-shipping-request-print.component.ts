import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../../auth/auth.service';
import {Locator} from '../../../models/locator';
import {DeliveryChain} from '../../../models/delivery-chain';

@Component({
  selector: 'pek-warehouse-shipping-request-print',
  templateUrl: './warehouse-shipping-request-print.component.html',
  styleUrls: ['./warehouse-shipping-request-print.component.scss']
})
export class WarehouseShippingRequestPrintComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() locators: Locator[] = [];
  @Input() chain: DeliveryChain;

  currentDate = new Date();

  constructor(
    public readonly auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  translateLocator(id: number) {
    if (!this.locators) {
      return id;
    }
    const locator = this.locators.find(loc => loc.id === id);
    return `${locator.name} R:${locator.row} C:${locator.column} S:${locator.shelf} P:${locator.place}`;
  }

}

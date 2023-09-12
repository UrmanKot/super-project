import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {Locator} from '../../models/locator';
import {DeliveryChain} from "../../../delivery-chains/models/delivery-chain";

@Component({
  selector: 'pek-warehouse-delivery-chain-print',
  templateUrl: './warehouse-delivery-chain-print.component.html',
  styleUrls: ['./warehouse-delivery-chain-print.component.scss']
})
export class WarehouseDeliveryChainPrintComponent implements OnInit {
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

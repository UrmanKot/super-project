import {Component, Input, OnInit} from '@angular/core';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {AuthService} from '../../../auth/auth.service';
import {GroupedRequest} from '../../../warehouse/models/grouped-request';
import {OrderProductGroupedForPrint} from '../../../procurement/models/order-product';
import {OrderTechnicalEquipment} from '../../../warehouse/models/order-technical-equipment';
import {Locator} from '../../../warehouse/models/locator';
import {DeliveryChain} from "../../../delivery-chains/models/delivery-chain";

@Component({
  selector: 'pek-qc-delivery-chain-print-page',
  templateUrl: './qc-delivery-chain-print-page.component.html',
  styleUrls: ['./qc-delivery-chain-print-page.component.scss']
})
export class QcDeliveryChainPrintPageComponent implements OnInit {
  @Input() products: any[] = [];
  @Input() orderedProducts: OrderProductGroupedForPrint[];
  @Input() chain: DeliveryChain;
  @Input() chainId: number;
  @Input() customer: any;
  @Input() currentReqDate: Date = null;
  @Input() locators: Locator[] = [];

  currentDate = new Date();

  constructor(
    public readonly auth: AuthService
  ) { }

  ngOnInit(): void {

  }

  protected readonly Nomenclature = Nomenclature;

  getNomenclature(nomenclature: Nomenclature | number): Nomenclature {
    return nomenclature as Nomenclature;
  }

  translateLocator(id: number) {
    if (!this.locators) {
      return id;
    }
    const locator = this.locators.find(loc => loc.id === id);
    return `${locator.name} R:${locator.row} C:${locator.column} S:${locator.shelf} P:${locator.place}`;
  }
}

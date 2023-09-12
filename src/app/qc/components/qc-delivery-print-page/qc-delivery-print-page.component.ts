import {Component, Input, OnInit} from '@angular/core';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {AuthService} from '../../../auth/auth.service';
import {GroupedRequest} from '../../../warehouse/models/grouped-request';
import {OrderProductGroupedForPrint} from '../../../procurement/models/order-product';
import {OrderTechnicalEquipment} from '../../../warehouse/models/order-technical-equipment';
import {Locator} from '../../../warehouse/models/locator';

@Component({
  selector: 'pek-qc-delivery-print-page',
  templateUrl: './qc-delivery-print-page.component.html',
  styleUrls: ['./qc-delivery-print-page.component.scss']
})
export class QcDeliveryPrintPageComponent implements OnInit {
  @Input() requests: GroupedRequest[] = [];
  @Input() orderedProducts: OrderProductGroupedForPrint[];
  @Input() rootList: any;
  @Input() orderId: number;
  @Input() technologies: string[];
  @Input() outsourcer: any;
  @Input() currentReqDate: Date = null;
  @Input() technicalEquipments: OrderTechnicalEquipment[] = [];

  currentDate = new Date();

  constructor(
    public readonly auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log('technicalEquipments', this.technicalEquipments);
  }

  getType(type: ENomenclatureType) {
    switch (type) {
      case ENomenclatureType.ASSEMBLY:
        return 'Assembly'
      case ENomenclatureType.PURCHASED:
        return 'Outsourcing'
      case ENomenclatureType.MANUFACTURED:
        return 'Own Production'
    }
  }

  protected readonly Nomenclature = Nomenclature;

  getNomenclature(nomenclature: Nomenclature | number): Nomenclature {
    return nomenclature as Nomenclature;
  }

  getLocator(locator: string | Locator) {
    return locator as Locator;
  }
}

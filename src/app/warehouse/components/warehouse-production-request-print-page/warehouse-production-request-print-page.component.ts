import {Component, Input, OnInit} from '@angular/core';
import {ENomenclatureType} from '@shared/models/nomenclature';
import {AuthService} from '../../../auth/auth.service';
import {GroupedRequest} from '../../models/grouped-request';
import {OrderProductGroupedForPrint} from '../../../procurement/models/order-product';

@Component({
  selector: 'pek-warehouse-production-request-print-page',
  templateUrl: './warehouse-production-request-print-page.component.html',
  styleUrls: ['./warehouse-production-request-print-page.component.scss']
})
export class WarehouseProductionRequestPrintPageComponent implements OnInit {
  @Input() requests: GroupedRequest[] = [];
  @Input() orderedProducts: OrderProductGroupedForPrint[];
  @Input() rootList: any;
  @Input() orderId: number;
  @Input() technologies: string[];
  currentDate = new Date();
  @Input() currentReqDate: Date = null;

  constructor(
    public readonly auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log('initing');
    console.log('orderedProducts', this.orderedProducts);
    console.log('rootList', this.rootList);
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

}

import {Component, Input, OnInit} from '@angular/core';
import {Request} from '../../models/request';
import {ENomenclatureType} from '@shared/models/nomenclature';
import {AuthService} from '../../../auth/auth.service';
import {SerialNumber} from '../../../procurement/models/invoice';
import {GroupedRequest} from '../../models/grouped-request';

@Component({
  selector: 'pek-warehouse-production-request-print-page',
  templateUrl: './warehouse-production-request-print-page.component.html',
  styleUrls: ['./warehouse-production-request-print-page.component.scss']
})
export class WarehouseProductionRequestPrintPageComponent implements OnInit {
  @Input() requests: GroupedRequest[] = [];
  @Input() rootList: any;
  @Input() orderId: number;
  @Input() technologies: string[];
  currentDate = new Date();
  @Input() currentReqDate: Date = null;

  constructor(
    public readonly auth: AuthService
  ) { }

  ngOnInit(): void {
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

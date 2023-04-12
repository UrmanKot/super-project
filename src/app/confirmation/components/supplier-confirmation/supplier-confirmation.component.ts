import {Component, OnInit} from '@angular/core';
import {QuerySearch} from '@shared/models/other';

@Component({
  selector: 'pek-supplier-confirmation',
  templateUrl: './supplier-confirmation.component.html',
  styleUrls: ['./supplier-confirmation.component.scss']
})
export class SupplierConfirmationComponent implements OnInit {
  productionListQuery: QuerySearch[] = [
    {
      name: 'sent_to_confirmation',
      value: true
    },
    {
      name: 'has_purchase_category',
      value: false
    },
    {
      name: 'accounting_type__in',
      value: 1
    }
  ];

  generalProcurementQuery: QuerySearch[] = [
    {
      name: 'sent_to_confirmation',
      value: true
    },
    {
      name: 'has_purchase_category',
      value: true
    },
    {
      name: 'accounting_type__in',
      value: 1
    }
  ];

  outsourceQuery: QuerySearch[] = [
    {
      name: 'sent_to_confirmation',
      value: true
    },
    {
      name: 'accounting_type__in',
      value: 2
    }
  ];

  productListConfirmationsCount: string = '...';
  outsourceConfirmationsCount: string = '...';
  generalProcurementConfirmationsCount: string = '...';

  constructor(
  ) {
  }

  ngOnInit(): void {
  }
}

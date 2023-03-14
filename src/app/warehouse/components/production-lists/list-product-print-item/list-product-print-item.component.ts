import {Component, Input, OnInit} from '@angular/core';
import {TreePrint} from '../production-list/production-list.component';

@Component({
  selector: 'app-list-product-print-item',
  templateUrl: './list-product-print-item.component.html',
  styleUrls: ['./list-product-print-item.component.scss']
})
export class ListProductPrintItemComponent implements OnInit {
  @Input() product: TreePrint;
  @Input() last: boolean;
  statuses = {'0': 'Not Processed', '1': 'Completed', '2': 'Deficit', '3': 'Reserved'};

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {TreePrint} from '../production-list/production-list.component';
import {TreeNode} from 'primeng/api';
import {ListProduct} from '../../../models/list-product';

@Component({
  selector: 'app-list-product-print-item',
  templateUrl: './list-product-print-item.component.html',
  styleUrls: ['./list-product-print-item.component.scss']
})
export class ListProductPrintItemComponent implements OnInit {
  @Input() product: TreeNode<Partial<ListProduct>>;
  @Input() last: boolean;
  statuses = {'Not processed': 'Not Processed', 'Completed': 'Completed', 'Deficit': 'Deficit', 'Reserved': 'Reserved'};

  constructor() { }

  ngOnInit(): void {
  }

}

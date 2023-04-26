import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {GroupedToolRequest} from "../../models/grouped-tool-request";
import {ToolOrder} from "../../models/tool-order";


@Component({
  selector: 'pek-warehouse-tool-request-print-page',
  templateUrl: './warehouse-tool-request-print-page.component.html',
  styleUrls: ['./warehouse-tool-request-print-page.component.scss']
})
export class WarehouseToolRequestPrintPageComponent implements OnInit {
  @Input() toolOrder: ToolOrder;
  @Input() toolRequests: GroupedToolRequest[];
  currentDate = new Date();

  constructor(
    public readonly auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }

}

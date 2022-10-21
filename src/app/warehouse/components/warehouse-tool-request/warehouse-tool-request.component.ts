import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {ToolRequest} from '../../services/tool-request';
import {ActivatedRoute} from '@angular/router';
import {ToolOrder} from '../../models/tool-order';
import {map, switchMap, tap} from 'rxjs/operators';
import {ToolRequestService} from '../../services/tool-request.service';
import {ToolOrderService} from '../../services/tool-order.service';

@Component({
  selector: 'pek-warehouse-tool-request',
  templateUrl: './warehouse-tool-request.component.html',
  styleUrls: ['./warehouse-tool-request.component.scss']
})
export class WarehouseToolRequestComponent implements OnInit, OnDestroy {
  isLoading = true;
  requests: ToolRequest[] = [];
  selectedRequest: ToolRequest;

  orderId: number;
  order: ToolOrder;

  private destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private toolRequestService: ToolRequestService,
    private toolOrderService: ToolOrderService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.orderId = +id),
      tap(() => this.getToolOrder()),
      tap(() => this.getToolRequest()),
    ).subscribe();
  }

  getToolOrder() {
    this.toolOrderService.getById(this.orderId).subscribe(toolOrder => {
      this.order = toolOrder;
    });
  }

  getToolRequest() {
    this.toolRequestService.get([
        {name: 'tool_order', value: this.orderId},
        {name: 'is_completed', value: false}
      ]).subscribe(requests => {
      this.requests = requests;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

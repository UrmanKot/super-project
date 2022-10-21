import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolOrderService} from '../../services/tool-order.service';
import {ToolOrder} from '../../models/tool-order';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-warehouse-tool-requests',
  templateUrl: './warehouse-tool-requests.component.html',
  styleUrls: ['./warehouse-tool-requests.component.scss']
})
export class WarehouseToolRequestsComponent implements OnInit, OnDestroy {
  isLoading = true;
  toolRequests: ToolOrder[] = [];
  selectedRequest: ToolOrder;

  private destroy$ = new Subject();

  constructor(
    private toolRequestService: ToolOrderService,
  ) { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() {
    this.toolRequestService.get([{name: 'is_completed', value: false}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(toolRequests => {
      this.toolRequests = toolRequests;
      this.isLoading = false;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolOrder} from '../../../../warehouse/models/tool-order';
import {ActivatedRoute} from '@angular/router';
import {ToolRequestService} from '../../../../warehouse/services/tool-request.service';
import {ToolOrderService} from '../../../../warehouse/services/tool-order.service';
import {ToolRequest} from '../../../../warehouse/services/tool-request';
import {take, tap} from 'rxjs/operators';
import {Subject, takeUntil} from 'rxjs';
import {MenuItem} from 'primeng/api';
import {InstrumentAndToolsModalsService} from '../../../services/instrument-and-tools-modals.service';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-request-orders-list',
  templateUrl: './request-orders-list.component.html',
  styleUrls: ['./request-orders-list.component.scss']
})
export class RequestOrdersListComponent implements OnInit, OnDestroy {
  activeOrder: ToolOrder;
  orderId = this.route.snapshot.paramMap.get('orderId');
  selectedNode: ToolRequest;
  requests: ToolRequest[];
  private destroy$ = new Subject();

  menuItems: MenuItem[] = [{
    label: 'Selected',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.edit()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.delete()
      }
    ]
  }];
  constructor(
    private route: ActivatedRoute,
    private toolRequestService: ToolRequestService,
    private toolOrderService: ToolOrderService,
    private instrumentAndToolsService: InstrumentAndToolsModalsService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.getCurrentOrder();
  }

  getCurrentOrder() {
    this.toolOrderService.getById(+this.orderId).pipe(
      take(1),
      tap(res => this.activeOrder = res),
      takeUntil(this.destroy$)).subscribe();
  }

  add() {
    this.instrumentAndToolsService.createEditToolRequestNomenclatureModal('create', this.activeOrder.id).subscribe(() => {
      this.getAll();
    });
  }

  getAll() {
    this.selectedNode = null;
    this.toolRequestService.get([{name: 'tool_order', value: this.orderId}, {
      name: 'is_completed',
      value: false
    }]).pipe(
      take(1),
      takeUntil(this.destroy$)).subscribe(res => {
      this.requests = res;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private edit() {
    this.instrumentAndToolsService.createEditToolRequestNomenclatureModal('edit', this.activeOrder.id, this.selectedNode).subscribe(() => {
      this.getAll();
    });
  }

  private delete() {
    this.modalService.confirm('danger', 'Confirm').pipe(take(1), takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        this.toolRequestService.delete(this.selectedNode).pipe(take(1), takeUntil(this.destroy$)).subscribe(del => {
          this.getAll();
        })
      }
    });
  }
}

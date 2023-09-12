import { Component, OnInit } from '@angular/core';
import {SalesChainStatus, SalesStatus} from '../../models/sales-chain';
import {MenuItem} from 'primeng/api';
import {SalesStatusService} from '../../services/sales-status.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-sales-statuses',
  templateUrl: './sales-statuses.component.html',
  styleUrls: ['./sales-statuses.component.scss']
})
export class SalesStatusesComponent implements OnInit {
  menuItems: MenuItem[] = [{
    label: 'Selected Sales Status',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditSalesStatus()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveSalesStatus()
      }
    ]
  }];

  isLoading = true;
  statuses: SalesChainStatus[] = [];
  selectedSalesStatus: SalesChainStatus;

  constructor(
    private readonly salesStatusService: SalesStatusService,
    private readonly modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.salesStatusService.get().subscribe(statuses => {
      this.statuses = statuses;
      this.isLoading = false;
    })
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    if (event.previousIndex !== event.currentIndex) {
      const currentStatus = this.statuses[event.currentIndex];

      const newOrder = this.statuses.findIndex(s => s.id === currentStatus.id);
      this.salesStatusService.changeOrder(currentStatus, newOrder).subscribe();
    }
  }

  onAddSalesStatus() {
    this.salesStatusService.createEditSalesStatusModal('create').subscribe(status => {
      if (status) {
        this.statuses.push(status);
      }
    });
  }

  toggleLine(status) {
    if (this.selectedSalesStatus === status) {
      this.selectedSalesStatus = null;
    } else {
      this.selectedSalesStatus = status;
    }
  }

  onEditSalesStatus() {
    this.salesStatusService.createEditSalesStatusModal('edit', this.selectedSalesStatus).subscribe(status => {
      if (status) {
        const index = this.statuses.findIndex(t => t.id === this.selectedSalesStatus.id);
        this.statuses[index] = status;
        this.selectedSalesStatus = this.statuses[index];
      }
    });
  }

  onRemoveSalesStatus() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.salesStatusService.delete(this.selectedSalesStatus).subscribe(() => {
          const index = this.statuses.findIndex(w => w.id === this.selectedSalesStatus.id);
          this.statuses.splice(index, 1);
          this.selectedSalesStatus = null;
        });
      }
    });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Status} from '../../../procurement/models/status';
import {ActivatedRoute} from '@angular/router';
import {ModalService} from '@shared/services/modal.service';
import {StatusService} from '../../../procurement/services/status.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'pek-order-statuses',
  templateUrl: './order-statuses.component.html',
  styleUrls: ['./order-statuses.component.scss']
})
export class OrderStatusesComponent implements OnInit {
  @Input() isAutoStatus = false;
  @Input() statusType: number;

  isLoading = true;
  statuses: Status[] = [];
  selectedStatus: Status;

  constructor(
    private activatedRouter: ActivatedRoute,
    private modalService: ModalService,
    private statusesService: StatusService,
  ) {
  }

  menuItems: MenuItem[] = [{
    label: 'Selected Status',
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

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses() {
    this.statusesService.get([
      {name: 'is_auto_status', value: this.isAutoStatus},
      {name: 'accounting_type', value: this.statusType}
    ]).subscribe(statuses => {
      this.statuses = statuses;
      this.isLoading = false;
    });
  }

  create() {
    this.statusesService.createEditStatusModal('create', this.statusType, this.isAutoStatus).subscribe(status => {
      if (status) {
        this.statuses.push(status);
      }
    });
  }

  edit() {
    this.statusesService.createEditStatusModal('edit', this.statusType, this.isAutoStatus, this.selectedStatus).subscribe(status => {
      if (status) {
        const index = this.statuses.findIndex(s => s.id === status.id);
        this.statuses[index] = status;
        this.selectedStatus = this.statuses.find(s => s.id === status.id);
      }
    });
  }


  delete() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.statusesService.delete(this.selectedStatus.id).subscribe(() => {
          const index = this.statuses.findIndex(s => s.id === this.selectedStatus.id);
          this.statuses.splice(index, 1);
          this.selectedStatus = null;
        });
      }
    });
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

      if (event.currentIndex + 1 === this.statuses.length) {
        currentStatus.sort_value = this.statuses[event.currentIndex - 1].sort_value + 1;
      } else {
        currentStatus.sort_value = this.statuses[event.currentIndex + 1].sort_value;
      }

      const toUpdate = {
        id: currentStatus.id,
        sort_value: currentStatus.sort_value,
        value: currentStatus.value
      };
      // this.statusesService.update(toUpdate).subscribe(() => this.getStatuses());
    }
  }

  setFinishStep(status: Status) {
    const send = {
      id: status.id,
      value: status.value,
      is_final: status.is_final,
    };
    this.updateStatus(send);
  }

  updateStatus(data: any): void {
    this.statusesService.update(data).subscribe();
  }

  setActiveStatus(status: Status) {
    const send = {
      id: status.id,
      value: status.value,
      is_active: status.is_active,
    };

    this.updateStatus(send);
  }

  toggleLine(status) {
    if (this.selectedStatus === status) {
      this.selectedStatus = null;
    } else {
      this.selectedStatus = status;
    }
  }
}

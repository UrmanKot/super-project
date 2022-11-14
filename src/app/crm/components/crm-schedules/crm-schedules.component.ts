import {Component, OnInit} from '@angular/core';
import {Schedule} from '../../models/schedule';
import {MenuItem} from 'primeng/api';
import {CrmScheduleService} from '../../services/crm-schedule.service';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-crm-schedules',
  templateUrl: './crm-schedules.component.html',
  styleUrls: ['./crm-schedules.component.scss']
})

export class CrmSchedulesComponent implements OnInit {
  menuItems: MenuItem[] = [{
    label: 'Selected Schedule',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditSchedule()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveSchedule()
      }
    ]
  }];

  isLoading = true;
  schedules: Schedule[] = [];
  selectedSchedule: Schedule;

  constructor(
    private readonly crmSchedulesService: CrmScheduleService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.getSchedules();
  }

  getSchedules() {
    this.crmSchedulesService.get().subscribe(schedules => {
      this.schedules = schedules;
      this.isLoading = false;
    })
  }

  onAddSchedule() {
    this.crmSchedulesService.createEditScheduleModal('create').subscribe(schedules => {
      if (schedules) {
        this.schedules.unshift(schedules);
        this.renderTable();
      }
    });
  }

  onEditSchedule() {
    this.crmSchedulesService.createEditScheduleModal('edit', this.selectedSchedule).subscribe(schedule => {
      if (schedule) {
        const index = this.schedules.findIndex(t => t.id === this.selectedSchedule.id);
        this.schedules[index] = schedule;
        this.selectedSchedule = this.schedules[index];
        this.renderTable();
      }
    })
  }

  onRemoveSchedule() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.crmSchedulesService.delete(this.selectedSchedule).subscribe(() => {
          const index = this.schedules.findIndex(s => s.id === this.selectedSchedule.id);
          this.schedules.splice(index, 1);
          this.selectedSchedule = null;
          this.renderTable();
        });
      }
    });
  }

  renderTable() {
    this.schedules = this.schedules.map(el => el);
  }
}

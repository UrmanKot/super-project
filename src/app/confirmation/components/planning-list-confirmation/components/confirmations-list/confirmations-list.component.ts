import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from '@shared/services/task.service';
import {PlanningStatus, Task} from '@shared/models/task';
import {tap} from 'rxjs/operators';
import {environment} from '@env/environment';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'pek-confirmations-list',
  templateUrl: './confirmations-list.component.html',
  styleUrls: ['./confirmations-list.component.scss']
})
export class ConfirmationsListComponent implements OnInit {
  @Output() tasksCount: EventEmitter<string> = new EventEmitter<string>();
  tasks: Task[] = [];
  selectedTasks: Task[] = [];
  isPendingDecline: boolean;
  isPendingConfirm: boolean;
  isLoading: boolean = true;
  link = environment.link_url + 'dash/';

  constructor(
    private taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.taskService.getTaskConfirmationList().pipe(untilDestroyed(this)).subscribe(data => {
      data.forEach(task => {
        const existing = this.tasks.find(el => el.family_id === task.family_id);
        if (existing) {
          existing.serial_numbers.push(...task.serial_numbers);
        } else {
          this.tasks.push(task);
        }
      });
      this.tasks = [...this.tasks];
      this.isLoading = false;
      this.tasksCount.emit(this.tasks.length.toString());
    });
  }

  onConfirm() {
    this.selectedTasks.forEach(task => {
      this.taskService.approvePlan({
        planning_status: PlanningStatus.PLANNED,
        family_id: task.family_id
      }).pipe(tap(() => {
        this.isPendingConfirm = true;
      })).subscribe(() => {
        this.tasks = [...this.tasks.filter(product => product.id !== task.id)];
        this.tasksCount.emit(this.tasks.length.toString());
        this.selectedTasks = [];
        this.isPendingConfirm = false;
      });
    });
  }

  onDecline() {
    this.selectedTasks.forEach(task => {
      this.taskService.approvePlan({
        planning_status: PlanningStatus.REQUIRES_PLANNING,
        family_id: task.family_id
      }).pipe(tap(() => {
        this.isPendingDecline = true;
      })).subscribe(() => {
        this.tasks = [...this.tasks.filter(product => product.id !== task.id)];
        this.tasksCount.emit(this.tasks.length.toString());
        this.selectedTasks = [];
        this.isPendingDecline = false;
      });
    });
  }
}

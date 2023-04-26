import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '@shared/models/task';
import {TaskService} from '@shared/services/task.service';
import {tap} from 'rxjs/operators';
import {environment} from '@env/environment';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {PlanningStatus} from '../../../../../manufacturing/enums/planning-status.enum';

@UntilDestroy()
@Component({
  selector: 'pek-corrections-list',
  templateUrl: './corrections-list.component.html',
  styleUrls: ['./corrections-list.component.scss']
})
export class CorrectionsListComponent implements OnInit {
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
    this.taskService.getTaskRequestToEditDate().pipe(untilDestroyed(this)).subscribe(data => {
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
      this.taskService.approveDeclineEditDatesPlan({
        planning_status: PlanningStatus.REQUIRES_PLANNING,
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
      this.taskService.approveDeclineEditDatesPlan({
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

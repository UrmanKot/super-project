import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {forkJoin, from, Observable, of, Subject, toArray} from 'rxjs';
import {concatMap, map, tap} from 'rxjs/operators';
import {Task, TaskSet, TasksResponse} from '@shared/models/task';
import {MatDialog} from '@angular/material/dialog';
import {
  ManufacturingCreateOrderComponent
} from '../../manufacturing/modals/manufacturing-create-order/manufacturing-create-order.component';
import {UITask} from '../../manufacturing/components/manufacturing-chart/manufacturing-chart.component';
import {
  ManufacturingTaskEditComponent
} from '../../manufacturing/modals/manufacturing-task-edit/manufacturing-task-edit.component';
import {
  ManufacturingAddTechnologyComponent
} from '../../manufacturing/modals/manufacturing-add-technology/manufacturing-add-technology.component';
import {
  ManufacturingTasksEditComponent
} from '../../manufacturing/modals/manufacturing-tasks-edit/manufacturing-tasks-edit.component';
import {
  ManufacturingAddItemsComponent, NewItem
} from '../../manufacturing/modals/manufacturing-add-items/manufacturing-add-items.component';
import { Tasks} from '@shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  API_URL = environment.base_url + environment.production_url;
  readonly url = 'tasks/';

  delete$ = new Subject<TaskSet>();

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<Task[]> {
    let queryParams = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: Task[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getTaskConfirmationList(): Observable<Task[]> {
    return this.httpClient.get<{ data: Task[] }>(this.API_URL + this.url + 'confirmation_list/').pipe(
      map(response => response.data)
    );
  }

  approvePlan(data: {planning_status: PlanningStatus, family_id: number}) {
    return this.httpClient.post(this.API_URL + this.url + 'planning_confirmation/', data).pipe(
      map(response => response)
    );
  }

  approveDeclineEditDatesPlan(data: {planning_status?: PlanningStatus, family_id: number}) {
    return this.httpClient.post(this.API_URL + this.url + 'confirmation_request_to_edit_date/', data).pipe(
      map(response => response)
    );
  }

  getTaskRequestToEditDate(): Observable<Task[]> {
    return this.httpClient.get<{ data: Task[] }>(this.API_URL + this.url + 'list_of_requests_to_edit_date/').pipe(
      map(response => response.data)
    );
  }

  getForPagination(query?: QuerySearch[]): Observable<TasksResponse> {
    let queryParams = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: TasksResponse }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  update(set: Pick<TaskSet, 'tasks'>, data): Observable<any> { // Partial<TaskSet>
    return forkJoin(...set.tasks.map(task => this.httpClient.patch<{
      data: any
    }>(this.API_URL + this.url + task.id + '/', data)));
  }

  confirmEndDates(id: number, data: { is_unconfirmed_root_date: boolean } = null): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + `${id}/bulk_tasks_confirm_end_date/`, data);
  }

  sendToPlanningConfirmation(data: { family_id: number }): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + `send_to_planning_confirmation/`, data);
  }

  sendToPlanningCorrections(data: { family_id: number, change_request: boolean }): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + `request_to_edit_date/`, data);
  }

  delete(set: TaskSet): Observable<TaskSet> {
    return forkJoin(...set.tasks.map(task => this.httpClient.delete<Task>(this.API_URL + this.url + task.id + '/'))).pipe(
      map(() => set),
      tap(() => this.delete$.next(set)),
    );
  }

  getById(id): Observable<Task[]> {
    return this.httpClient.get<{ data: Task[] }>(this.API_URL + this.url + `${id}/`).pipe(
      map(response => response.data)
    );
  }

  createOutsource(data): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url + 'bulk_outsource_create/', data);
  }

  makeOrderDialog(tasks: Task[]): Observable<any> {
    return this.dialog
      .open(ManufacturingCreateOrderComponent, {
        width: '60rem',
        data: {tasks},
        disableClose: false,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }

  editTaskDialog(task: UITask, tasks: UITask[], rootTask: UITask) {
    return this.dialog
      .open<ManufacturingTaskEditComponent>(ManufacturingTaskEditComponent, {
        width: '80rem',
        data: {task, tasks, rootTask },
        disableClose: false,
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed()
      .pipe();
  }

  editTasksDialog(tasks: UITask[]) {
    return this.dialog
      .open<ManufacturingTasksEditComponent>(ManufacturingTasksEditComponent, {
        width: '80rem',
        data: { tasks },
        disableClose: false,
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed()
      .pipe();
  }

  addTechnologyToPlanModal(task: UITask) {
    return this.dialog
      .open<ManufacturingAddTechnologyComponent>(ManufacturingAddTechnologyComponent, {
        width: '30rem',
        data: {task},
        disableClose: false,
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed()
      .pipe();
  }

  addTechnologyToTask(id: number, send: any): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url + `${id}/add_technology/`, send);
  }

  addTasks(parentTasks: Task[], rootId: string): Observable<Task[]> {
    return of(parentTasks).pipe(
      concatMap(parentTasks => this.addTasksDialog(parentTasks)),
      concatMap(items => from(items)),
      concatMap(item => this.httpClient.post(this.API_URL + this.url + item.taskId + '/add_position/', item.data)),
      toArray(),
      concatMap((tasks) => tasks.length > 0 ? this.httpClient.get<{ data: Task[] }>(this.API_URL + this.url + '?for_root_id__in=' + rootId) : []),
      map(response => response.data),
    );
  }

  addTasksDialog(parentTasks: Task[]): Observable<any[]> {
    return this.dialog
      .open<ManufacturingAddItemsComponent>(ManufacturingAddItemsComponent, {
        width: '30rem',
        data: { parentTasks },
        disableClose: false,
        autoFocus: false,
      })
      .afterClosed()
      .pipe(
        concatMap((value) =>
          value
            ? of(value)
            : new Observable((subscriber) => subscriber.complete())
        )
      );
  }
}

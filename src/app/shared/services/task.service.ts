import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {forkJoin, Observable, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Task, TaskSet, TasksResponse} from '@shared/models/task';
import {MatDialog} from '@angular/material/dialog';
import {
  ManufacturingCreateOrderComponent
} from '../../manufacturing/modals/manufacturing-create-order/manufacturing-create-order.component';

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
}

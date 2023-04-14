import { Injectable } from '@angular/core';
import {ModalService} from '@shared/services/modal.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PlanningStatus, Task, Tasks} from '@shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  API_URL = environment.base_url + environment.production_url;
  readonly url = 'tasks/';

  constructor(
    private httpClient: HttpClient,
  ) { }

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
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Schedule} from '../models/schedule';
import {QuerySearch} from '@shared/models/other';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {CreateEditScheduleComponent} from '../modals/create-edit-schedule/create-edit-schedule.component';

@Injectable({
  providedIn: 'root'
})
export class CrmScheduleService {

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'schedules/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getById(id: number): Observable<Schedule> {
    return this.httpClient.get<{ data: Schedule }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  get(query?: QuerySearch[]): Observable<Schedule[]> {
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

    return this.httpClient.get<{ data: Schedule[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  create(schedule): Observable<Schedule> {
    return this.httpClient.post<{ data: Schedule }>(this.API_URL + this.url, schedule).pipe(
      map(response => response.data)
    );
  }

  update(schedule: Schedule): Observable<Schedule> {
    return this.httpClient.put<{ data: Schedule }>(this.API_URL + this.url + schedule.id + '/', schedule).pipe(
      map(response => response.data)
    );
  }

  delete(schedule: Schedule): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + schedule.id + '/');
  }

  createEditScheduleModal(type: ModalActionType, schedule?: Schedule): Observable<Schedule> {
    return this.dialog
      .open<CreateEditScheduleComponent>(CreateEditScheduleComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, schedule},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

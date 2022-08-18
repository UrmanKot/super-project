import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Technology} from '../models/technology';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditTechnologyComponent,
} from '../modals/create-edit-technology/create-edit-technology.component';
import {ModalActionType} from '@shared/models/modal-action';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'technologies/';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(): Observable<Technology[]> {
    return this.httpClient.get<{ data: Technology[] }>(this.API_URL + this.url).pipe(
      map(response => response.data));
  }

  create(technology: Partial<Technology>): Observable<Technology> {
    return this.httpClient.post<{ data: Technology }>(this.API_URL + this.url, technology).pipe(
      map(response => response.data)
    );
  }

  update(technology: Partial<Technology>): Observable<Technology> {
    return this.httpClient.put<{ data: Technology }>(this.API_URL + this.url + `${technology.id}/`, technology).pipe(
      map(response => response.data)
    );
  }

  delete(technology: Technology): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${technology.id}/`);
  };

  createEditTechnology(type: ModalActionType, technology?: Technology): Observable<Technology> {
    return this.dialog
      .open<CreateEditTechnologyComponent>(CreateEditTechnologyComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, technology},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

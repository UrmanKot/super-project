import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Locator} from '../models/locator';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {ModalActionType} from '@shared/models/modal-action';
import {CreateEditLocatorComponent} from '../modals/create-edit-locator/create-edit-locator.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class LocatorService {

  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'locators/';

  locators: Locator[];

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {

  }

  getAll(): Observable<Locator[]> {
    if (this.locators) {
      return of(this.locators);
    }

    return this.httpClient.get<{ data: Locator[] }>(this.API_URL + this.url).pipe(
      map(response => {
        const locators = response.data;
        this.locators = locators;
        return locators;
      })
    );
  }

  get(query?: QuerySearch[]): Observable<Locator[]> {
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

    return this.httpClient.get<{ data: Locator[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  create(locator: Partial<Locator>): Observable<Locator> {
    return this.httpClient.post<{ data: Locator }>(this.API_URL + this.url, locator).pipe(
      map(response => response.data)
    );
  }

  update(locator: Partial<Locator>): Observable<Locator> {
    return this.httpClient.put<{ data: Locator }>(this.API_URL + this.url + `${locator.id}/`, locator).pipe(
      map(response => response.data)
    );
  }

  delete(locator: Locator): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${locator.id}/`);
  };

  createEditLocatorModal(type: ModalActionType, locator?: Locator): Observable<Locator> {
    return this.dialog
      .open<CreateEditLocatorComponent>(CreateEditLocatorComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, locator},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

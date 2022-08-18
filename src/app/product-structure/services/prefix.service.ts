import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {ProductPrefix} from '../models/prefix';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {
  CreateEditTechnologyComponent,
} from '../modals/create-edit-technology/create-edit-technology.component';
import {MatDialog} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {CreateEditPrefixComponent} from '../modals/create-edit-prefix/create-edit-prefix.component';

@Injectable({
  providedIn: 'root'
})
export class PrefixService {
  readonly API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'xls_manufactured_prefixes/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(): Observable<ProductPrefix[]> {
    return this.httpClient.get<{ data: ProductPrefix[] }>(this.API_URL + this.url).pipe(
      map(response => response.data)
    );
  }

  create(prefix: Partial<ProductPrefix>): Observable<ProductPrefix> {
    return this.httpClient.post<{ data: ProductPrefix }>(this.API_URL + this.url, prefix).pipe(
      map(response => response.data)
    );
  }

  update(prefix: Partial<ProductPrefix>): Observable<ProductPrefix> {
    return this.httpClient.patch<{ data: ProductPrefix }>(this.API_URL + this.url + `${prefix.id}/`, prefix).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${id}/`);
  }

  createEditPrefix(type: ModalActionType, prefix?: ProductPrefix): Observable<ProductPrefix> {
    return this.dialog
      .open<CreateEditPrefixComponent>(CreateEditPrefixComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, prefix},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {PurchasingCategory} from '../models/purchasing-category';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {
  CreateEditPurchasingCategoryComponent
} from '../modals/create-edit-purchasing-category/create-edit-purchasing-category.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PurchasingCategoryService {
  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'purchase_categories/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<PurchasingCategory[]> {
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
    return this.httpClient.get<{ data: PurchasingCategory[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getAll(): Observable<PurchasingCategory[]> {
    return this.httpClient.get<{ data: PurchasingCategory[] }>(this.API_URL + this.url + 'all/').pipe(
      map(response => response.data)
    );
  }

  create(category: Partial<PurchasingCategory>): Observable<PurchasingCategory> {
    return this.httpClient.post<{ data: PurchasingCategory }>(this.API_URL + this.url, category).pipe(
      map(response => response.data)
    );
  }

  update(category: Partial<PurchasingCategory>, id: number): Observable<PurchasingCategory> {
    return this.httpClient.patch<{ data: PurchasingCategory }>(this.API_URL + this.url + `${id}/`, category).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${id}/`);
  }

  createEditCategory(type: ModalActionType, category?: PurchasingCategory): Observable<PurchasingCategory> {
    return this.dialog
      .open<CreateEditPurchasingCategoryComponent>(CreateEditPurchasingCategoryComponent, {
        width: '54rem',
        height: 'auto',
        data: {type, category},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

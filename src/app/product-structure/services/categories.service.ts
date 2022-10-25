import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Category} from '../models/category';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditWarehouseCategoryComponent
} from '../../warehouse/modals/create-edit-warehouse-category/create-edit-warehouse-category.component';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'categories/';

  categories: Category[];

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<Category[]> {
    if (this.categories) {
      return of(this.categories);
    }

    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: Category[] }>(this.API_URL + this.url + qString).pipe(map(response => {
      let categories = response.data;

      categories.forEach(category => {
        if (!category.parent) category.lft = category.tree_id;
      });

      categories.sort((a, b) => a.lft - b.lft);
      this.categories = categories;
      return categories;
    }));
  }

  create(category: Partial<Category>): Observable<Category> {
    return this.httpClient.post<{ data: Category }>(this.API_URL + this.url, category).pipe(
      map(response => response.data)
    );
  }

  updatePartly(category: Partial<Category>): Observable<Category> {
    return this.httpClient.patch<{ data: Category }>(this.API_URL + this.url + `${category.id}/`, category).pipe(
      map(response => response.data)
    );
  }

  delete(category: Category): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${category.id}/`);
  };

  move(move: any, categoryId: number): Observable<Category> {
    return this.httpClient.post<{ data: Category }>(this.API_URL + this.url + `${categoryId}/move/`, move).pipe(
      map(response => response.data)
    );
  }

  createEditWarehouseCategoryModal(type: ModalActionType, category?: Category): Observable<Category> {
    return this.dialog
      .open<CreateEditWarehouseCategoryComponent>(CreateEditWarehouseCategoryComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, category},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

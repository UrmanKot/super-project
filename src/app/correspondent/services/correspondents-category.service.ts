import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {CorrespondentsCategory} from '../models/correspondents-category';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditCorrespondnetCategoryComponent
} from '../modals/create-edit-correspondnet-category/create-edit-correspondnet-category.component';
import {CorrespondentTypes} from '../enum/correspondent-types.enum';

@Injectable({
  providedIn: 'root'
})

export class CorrespondentsCategoriesService {

  clearSelectedCategories$ = new Subject();
  selectCategories$ = new Subject();

  API_URL = environment.base_url;
  readonly url = 'correspondent/correspondents_categories/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {

  }

  get(query?: { name: string, value: any }[]): Observable<CorrespondentsCategory[]> {
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
    return this.httpClient.get<{ data: CorrespondentsCategory[] }>(this.API_URL + this.url +
      qString).pipe(map(response => {
      let categories = response.data;
      categories.forEach(category => {
        if (!category.parent) {
          category.lft = category.tree_id;
        }
      });
      categories = categories.sort((a, b) => a.lft - b.lft);
      return categories;
    }));
  }

  getAll(page: number | null = 1): Observable<CorrespondentsCategory[]> {
    return this.httpClient.get<{ data: { count: number, results: CorrespondentsCategory[] } }>(this.API_URL + this.url + '?page=' + page).pipe(map(response => {
      return response.data.results;
    }));
  }

  create(category: CorrespondentsCategory) {
    return this.httpClient.post(this.API_URL + this.url, category);
  }

  update(category: CorrespondentsCategory) {
    return this.httpClient.put(this.API_URL + this.url + category.id + '/', category);
  }

  delete(category: CorrespondentsCategory) {
    return this.httpClient.delete(this.API_URL + this.url + category.id + '/');
  }

  move(id, move) {
    return this.httpClient.post(this.API_URL + this.url + id + '/move/', move).pipe(map(response => {
      return response;
    }));
  }

  createEditCategory(type: ModalActionType, correspondentType: CorrespondentTypes, category?: CorrespondentsCategory): Observable<CorrespondentsCategory> {
    return this.dialog
      .open<CreateEditCorrespondnetCategoryComponent>(CreateEditCorrespondnetCategoryComponent, {
        width: '42rem',
        height: 'auto',
        panelClass: 'modal-picker',
        data: {type, category, correspondentType},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

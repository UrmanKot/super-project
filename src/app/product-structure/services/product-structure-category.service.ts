import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditProductStructureCategoryComponent
} from '../modals/create-edit-product-structure-category/create-edit-product-structure-category.component';
import {ProductStructureCategory} from '../models/product-structure-category';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductStructureCategoryService {

  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'root_categories/';

  rootCategories: ProductStructureCategory[];

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(): Observable<ProductStructureCategory[]> {
    if (this.rootCategories) {
      return of(this.rootCategories);
    }

    return this.httpClient.get<{ data: ProductStructureCategory[] }>(this.API_URL + 'root_categories/').pipe(map(response => {
      let categories = response.data;

      categories.forEach(category => {
        if (!category.parent) category.lft = category.tree_id;
      });

      categories.sort((a, b) => a.lft - b.lft);
      this.rootCategories = categories;
      return categories;
    }));
  }

  create(category: Partial<ProductStructureCategory>): Observable<ProductStructureCategory> {
    return this.httpClient.post<{ data: ProductStructureCategory }>(this.API_URL + this.url, category).pipe(
      map(response => response.data)
    );
  }

  updatePartly(category: Partial<ProductStructureCategory>): Observable<ProductStructureCategory> {
    return this.httpClient.patch<{ data: ProductStructureCategory }>(this.API_URL + this.url + `${category.id}/`, category).pipe(
      map(response => response.data)
    );
  }

  delete(category: ProductStructureCategory): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${category.id}/`);
  };

  move(move: any, categoryId: number): Observable<ProductStructureCategory> {
    return this.httpClient.post<{data: ProductStructureCategory}>(this.API_URL + this.url + `${categoryId}/move/`, move).pipe(
      map(response => response.data)
    );
  }

  createEditCategory(type: ModalActionType, category?: ProductStructureCategory): Observable<ProductStructureCategory> {
    return this.dialog
      .open<CreateEditProductStructureCategoryComponent>(CreateEditProductStructureCategoryComponent, {
        width: '42rem',
        height: 'auto',
        panelClass: 'modal-picker',
        data: {type, category},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

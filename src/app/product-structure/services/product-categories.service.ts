import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ProductCategory} from '../models/product-category';
import {QuerySearch} from '@shared/models/other';
import {map} from 'rxjs/operators';
import {ProductStructureCategory} from '../models/product-structure-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {
  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'categories/';

  categories: ProductCategory[];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(query?: QuerySearch[]): Observable<ProductStructureCategory[]> {
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

    return this.httpClient.get<{ data: ProductCategory[] }>(this.API_URL + this.url + qString).pipe(map(response => {
      let categories = response.data;

      categories.forEach(category => {
        if (!category.parent) category.lft = category.tree_id;
      });

      categories.sort((a, b) => a.lft - b.lft);
      this.categories = categories;
      return categories;
    }));
  }
}

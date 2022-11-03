import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {CompanyCategory} from '../models/company-category';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyCategoryService {

  categories: CompanyCategory[];

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'company_categories/';

  constructor(
    private httpClient: HttpClient) {
  }

  get(query?: { name: string, value: any }[]): Observable<CompanyCategory[]> {
    if (this.categories) {
     return of(this.categories);
    }

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

    return this.httpClient.get<{ data: CompanyCategory[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => {
        const categories = response.data;
        this.categories = categories;
        return categories;
      }));
  }
}

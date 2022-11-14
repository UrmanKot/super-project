import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {CompanyCategory, CompanyCategoryModule} from '../models/company-category';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditCompanyCategoryComponent
} from '../modals/create-edit-company-category/create-edit-company-category.component';
import {QuerySearch} from '@shared/models/other';

@Injectable({
  providedIn: 'root'
})
export class CompanyCategoryService {

  categories: CompanyCategory[];
  modules: CompanyCategoryModule[];

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'company_categories/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
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

  create(category: Partial<CompanyCategory>): Observable<CompanyCategory> {
    return this.httpClient.post<{ data: CompanyCategory }>(this.API_URL + this.url, category).pipe(
      map(response => response.data)
    );
  }

  update(category: Partial<CompanyCategory>): Observable<CompanyCategory> {
    return this.httpClient.put<{ data: CompanyCategory }>(this.API_URL + this.url + category.id + '/', category).pipe(
      map(response => response.data)
    );
  }

  getModules(query?: QuerySearch[]): Observable<CompanyCategoryModule[]> {
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

    return this.httpClient.get<{ data: CompanyCategoryModule[] }>(this.API_URL + 'modules/' + queryParams).pipe(
      map(response => {
        const modules = response.data;
        this.modules = modules;
        return modules;
      }));
  }

  delete(category: CompanyCategory): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + category.id + '/');
  }

  createEditWarehouseModal(type: ModalActionType, category?: CompanyCategory): Observable<CompanyCategory> {
    return this.dialog
      .open<CreateEditCompanyCategoryComponent>(CreateEditCompanyCategoryComponent, {
        width: '35rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, category},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CompanyFile} from '../models/company-file';
import {
  CreateEditLinkedCompanyComponent
} from '../modals/create-edit-linked-company/create-edit-linked-company.component';
import {MatDialog} from '@angular/material/dialog';
import {AddCompanyFileModalComponent} from '../modals/add-company-file-modal/add-company-file-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyFileService {
  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'company_files/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<CompanyFile[]> {
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

    return this.httpClient.get<{ data: CompanyFile[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<CompanyFile> {
    return this.httpClient.get<{ data: CompanyFile }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  create(file: FormData): Observable<CompanyFile> {
    return this.httpClient.post<{ data: CompanyFile }>(this.API_URL + this.url, file).pipe(
      map(response => response.data)
    );
  }

  update(file: CompanyFile): Observable<CompanyFile> {
    return this.httpClient.put<{ data: CompanyFile }>(this.API_URL + this.url + file.id + '/', file).pipe(
      map(response => response.data)
    );
  }

  downloadFile(file: CompanyFile): Observable<any> {
    return this.httpClient.get(this.API_URL + this.url + file.id + '/download/', {responseType: 'blob'});
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  openAddFileModal(companyId: number): Observable<any> {
    return this.dialog
      .open<AddCompanyFileModalComponent>(AddCompanyFileModalComponent, {
        width: '35rem',
        height: 'auto',
        data: {companyId},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

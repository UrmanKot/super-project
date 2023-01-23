import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {AddEventModalType, Companies, Company} from '../models/company';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {CreateEditCompanyComponent} from '../modals/create-edit-company/create-edit-company.component';
import {
  CreateEditLinkedCompanyComponent
} from '../modals/create-edit-linked-company/create-edit-linked-company.component';
import {AddCompanyToEventComponent} from '../modals/add-company-to-event/add-company-to-event.component';
import {AddEventToCompanyComponent} from '../modals/add-event-to-company/add-event-to-company.component';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  shortCompanies: Partial<Company>[];

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'companies/';
  shortsCompaniesResult: ReplaySubject<Partial<Company>[]> = new ReplaySubject<Partial<Company>[]>();
  isLoadingShortCompanies = false;

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<Company[]> {
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
    return this.httpClient.get<{ data: Company[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getForPagination(query?: QuerySearch[]): Observable<Companies> {
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
    return this.httpClient.get<{ data: Companies }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<Company> {
    return this.httpClient.get<{ data: Company }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  getShorts(): Observable<Partial<Company>[]> {
    if (this.isLoadingShortCompanies) {
      return this.shortsCompaniesResult;
    } else {
      this.isLoadingShortCompanies = true;
      return this.getShortsCompanies();
    }
  }

  getShortsCompanies(): Observable<Partial<Company>[]> {
    return this.httpClient.get<{ data: Partial<Company>[] }>(this.API_URL + this.url + 'get_short_companies_list/').pipe(
      map(response => {
        const shortCompanies = response.data;
        this.shortsCompaniesResult.next(shortCompanies);
        return shortCompanies;
      }));
  }

  create(company: Partial<Company>): Observable<Company> {
    return this.httpClient.post<{ data: Company }>(this.API_URL + this.url, company).pipe(
      map(response => response.data)
    );
  }

  updatePartial(company: Partial<Company>): Observable<Company> {
    return this.httpClient.patch<{ data: Company }>(this.API_URL + this.url + company.id + '/', company).pipe(
      map(response => response.data)
    );
  }

  deleteLinkedCompany(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + 'linked_companies/' + id + '/');
  }

  createEditLinkCompany(id: number, company: Partial<Company>): Observable<Company> {
    return this.httpClient.post<{ data: Company }>(this.API_URL + this.url + id + '/link_company/', company).pipe(
      map(response => response.data)
    );
  }

  createEditCompanyModal(type: ModalActionType, company?: Company): Observable<Company> {
    return this.dialog
      .open<CreateEditCompanyComponent>(CreateEditCompanyComponent, {
        width: '45rem',
        height: 'auto',
        data: {type, company},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  createEditLinkedCompanyModal(companyId: number, type: ModalActionType, company?: Company): Observable<Company> {
    return this.dialog
      .open<CreateEditLinkedCompanyComponent>(CreateEditLinkedCompanyComponent, {
        width: '45rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {companyId, type, company},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openAddEventToCompanyModal(type: AddEventModalType, company: Company): Observable<any> {
    return this.dialog
      .open<AddEventToCompanyComponent>(AddEventToCompanyComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, company},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

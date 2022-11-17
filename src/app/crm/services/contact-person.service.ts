import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {ContactPerson} from '@shared/models/contact-person';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditContactPersonComponent
} from '../modals/create-edit-contact-person/create-edit-contact-person.component';

@Injectable({
  providedIn: 'root'
})
export class ContactPersonService {
  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'contact_persons/';

  contactPersons: ContactPerson[];

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<ContactPerson[]> {
    if (this.contactPersons) {
      return of(this.contactPersons);
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

    return this.httpClient.get<{ data: ContactPerson[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => {
        const contactPersons = response.data.map(p => {
          return {
            ...p,
            fullName: `${p.first_name} ${p.last_name}`
          };
        });
        this.contactPersons = contactPersons;
        return contactPersons;
      })
    );
  }

  create(contactPerson: ContactPerson): Observable<ContactPerson> {
    return this.httpClient.post<{ data: ContactPerson }>(this.API_URL + this.url, contactPerson).pipe(
      map(response => response.data)
    );
  }

  update(contactPerson: ContactPerson): Observable<ContactPerson> {
    return this.httpClient.put<{ data: ContactPerson }>(this.API_URL + this.url + contactPerson.id + '/', contactPerson).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): any {
    return this.httpClient.delete(this.API_URL + this.url + id + '/');
  }

  createEditContactPersonModal(companyId: number, type: ModalActionType, contactPerson?: ContactPerson): Observable<ContactPerson> {
    return this.dialog
      .open<CreateEditContactPersonComponent>(CreateEditContactPersonComponent, {
        width: '50rem',
        height: 'auto',
        data: {companyId, type, contactPerson},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

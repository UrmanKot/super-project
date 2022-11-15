import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {ContactPerson} from '@shared/models/contact-person';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactPersonService {
  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'contact_persons/';

  contactPersons: ContactPerson[];

  constructor(
    private httpClient: HttpClient
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
        this.contactPersons = contactPersons
        return contactPersons;
      })
    );
  }
}

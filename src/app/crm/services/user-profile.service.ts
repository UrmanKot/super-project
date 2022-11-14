import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {UserProfile} from '../models/user-profile';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {EventType} from '../models/event-type';
import {CreateEditEventTypeComponent} from '../modals/create-edit-event-type/create-edit-event-type.component';
import {User} from '@shared/models/user';
import {CreateEditUserProfileComponent} from '../modals/create-edit-user-profile/create-edit-user-profile.component';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  API_URL = environment.base_url + environment.business_partners_url;
  readonly url = 'user_profile/';

  userProfiles: UserProfile[];

  constructor(
    private httpClient: HttpClient,
    private dialog: MatDialog
  ) {
  }

  get(query?: QuerySearch[]): Observable<UserProfile[]> {
    if (this.userProfiles) {
      return of(this.userProfiles);
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

    return this.httpClient.get<{ data: UserProfile[] }>(this.API_URL + this.url + 'all/' + queryParams).pipe(
      map(response => {
        const userProfile = response.data.map(p => {
          return {
            ...p,
            fullName: `${p.first_name} ${p.last_name}`
          }
        });
        this.userProfiles = userProfile;
        return userProfile;
      }));
  }

  create(userProfile): Observable<UserProfile> {
    return this.httpClient.post<{ data: UserProfile }>(this.API_URL + this.url, userProfile).pipe(
        map(response => response.data)
      );
  }

  update(entity: UserProfile): Observable<UserProfile> {
    return this.httpClient.put<{ data: UserProfile }>(this.API_URL + this.url + entity.id + '/', entity).pipe(
      map(response => response.data)
    );
  }

  delete(entity: UserProfile): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }

  createEditUserProfileModel(type: ModalActionType, userProfile?: UserProfile): Observable<UserProfile> {
    return this.dialog
      .open<CreateEditUserProfileComponent>(CreateEditUserProfileComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, userProfile},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

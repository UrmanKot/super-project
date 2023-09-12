import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {QuerySearch} from "@shared/models/other";
import {User, Users} from "../models/user";
import {Role} from "../models/role";
import {ModalActionType} from "@shared/models/modal-action";
import {Currency} from "@shared/models/currency";
import {CreateEditCurrencyComponent} from "../../reports/modals/create-edit-currency/create-edit-currency.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateEditUserComponent} from "../modals/create-edit-user/create-edit-user.component";
import {EditUserRolesComponent} from "../modals/edit-user-roles/edit-user-roles.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.base_url + environment.users_url;
  readonly url = 'users/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) { }

  getForPagination(query: QuerySearch[] = []): Observable<Users> {
    let queryString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryString += '&' + element.name + '=' + element.value;
        } else {
          queryString += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{data: Users}>(this.API_URL + 'users_with_groups/' + queryString).pipe(map(response => {
      return response.data;
    }));
  }

  get(query: QuerySearch[] = []): Observable<User[]> {
    let queryString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryString += '&' + element.name + '=' + element.value;
        } else {
          queryString += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{data: User[]}>(this.API_URL + 'users_with_groups/' + queryString).pipe(map(response => {
      return response.data;
    }));
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.httpClient.post<{data: User}>(this.API_URL + 'user_registration/', user).pipe(map(response => response.data));
  }

  editUser(user: Partial<User>): Observable<User> {
    return this.httpClient.patch<{data: User}>(this.API_URL + 'user_update/' + user.id + '/', user).pipe(map(response => response.data));
  }

  editUserPermissions(user: Partial<User>): Observable<User> {
    return this.httpClient.patch<{data: User}>(this.API_URL + 'users/' + user.id + '/', user).pipe(map(response => response.data));
  }

  deleteUser(user: User) {
    return this.httpClient.delete(this.API_URL + this.url + user.id + '/');
  }

  addRoleToUser(userId, send: any): Observable<Role> {
    return this.httpClient.post<{data: Role}>(this.API_URL + 'add_role_to_user/' + userId + '/', send).pipe(map(response => response.data));
  }

  update_can_verify_import(id, entity) {
    return this.httpClient.patch(this.API_URL + 'can_accept_changes_on_import/' + id + '/', entity);
  }

  createEditUserModal(type: ModalActionType, user?: User): Observable<User> {
    return this.dialog
      .open<CreateEditUserComponent>(CreateEditUserComponent, {
        width: '30rem',
        height: 'auto',
        data: {type, user},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  editUserRoles(user?: User): Observable<User>  {
    return this.dialog
      .open<EditUserRolesComponent>(EditUserRolesComponent, {
        width: '40rem',
        height: 'auto',
        data: {user},
        autoFocus: false,
        // panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

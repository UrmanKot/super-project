import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {QuerySearch} from "@shared/models/other";
import {Role, RolePermissions, Roles} from "../models/role";
import {ModalActionType} from "@shared/models/modal-action";
import {User} from "../models/user";
import {CreateEditUserComponent} from "../modals/create-edit-user/create-edit-user.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateEditRoleComponent} from "../modals/create-edit-role/create-edit-role.component";
import {EditRolePermissionsComponent} from "../modals/edit-role-permissions/edit-role-permissions.component";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  API_URL = environment.base_url + environment.users_url;
  readonly url = 'roles/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) { }

  getForPagination(query: QuerySearch[] = []): Observable<Roles> {
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
    return this.httpClient.get<{data: Roles}>(this.API_URL + this.url + queryString).pipe(map(response => {
      return response.data;
    }));
  }

  getRoles(query: QuerySearch[] = []): Observable<Role[]> {
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
    return this.httpClient.get<{data: Role[]}>(this.API_URL + this.url + queryString).pipe(map(response => {
      return response.data;
    }));
  }

  getRolePermissions(role: Role): Observable<RolePermissions> {
    return this.httpClient.get<{data: RolePermissions}>(this.API_URL + 'get_role_permissions/' + role.id + '/').pipe(map(response => {
      return response.data;
    }));
  }

  setRolePermissions(role: Role, permissions: any) {
    return this.httpClient.post<{data: any}>(this.API_URL + 'role_set_permissions/' + role.id + '/', permissions);
  }

  removeRolePermissions(role: Role, permissions: any) {
    return this.httpClient.post<{data: any}>(this.API_URL + 'role_remove_permissions/' + role.id + '/', permissions);
  }

  removeModuleFromRole(roleId: number, data) {
    return this.httpClient.post(this.API_URL + `remove_module_from_role/${roleId}/`, data);
  }

  createRole(role: Role): Observable<Role> {
    return this.httpClient.post<{data: Role}>(this.API_URL + this.url, role).pipe(map(response => response.data));
  }

  editRole(role: Role): Observable<Role> {
    return this.httpClient.patch<{data: Role}>(this.API_URL + this.url + role.id + '/', role).pipe(map(response => response.data));
  }

  deleteRole(role: Role) {
    return this.httpClient.delete(this.API_URL + this.url + role.id + '/');
  }

  createEditRoleModal(type: ModalActionType, role?: Role): Observable<Role> {
    return this.dialog
      .open<CreateEditRoleComponent>(CreateEditRoleComponent, {
        width: '30rem',
        height: 'auto',
        data: {type, role},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  editRolePermissions(role?: Role): Observable<Role> {
    return this.dialog
      .open<EditRolePermissionsComponent>(EditRolePermissionsComponent, {
        width: '40rem',
        height: 'auto',
        data: {role},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

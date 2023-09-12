import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {QuerySearch} from "@shared/models/other";
import {environment} from "@env/environment";
import {GroupSubModulePermission} from "../models/group-sub-module-permission";

@Injectable({
  providedIn: 'root'
})
export class GroupSubModulePermissionService {
  API_URL = environment.base_url + environment.users_url;
  readonly url = 'group_sub_module_permissions/';

  constructor(
    private httpClient: HttpClient,
  ) { }

  get(query?: QuerySearch[]): Observable<GroupSubModulePermission[]> {
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
    return this.httpClient.get<{ data: GroupSubModulePermission[] }>(this.API_URL + this.url + qString).pipe(map(response => {
      return response.data;
    }));
  }

  updateGroupSubModule(role: GroupSubModulePermission): Observable<GroupSubModulePermission> {
    return this.httpClient.patch<{data: GroupSubModulePermission}>(this.API_URL + this.url + role.id + '/', role).pipe(map(response => response.data));
  }

  createGroupSubRole(role: GroupSubModulePermission): Observable<GroupSubModulePermission> {
    return this.httpClient.post<{data: GroupSubModulePermission}>(this.API_URL + this.url, role).pipe(map(response => response.data));
  }
}

import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {QuerySearch} from "@shared/models/other";
import {ModulePermission} from "../models/permission";
import {Permission, Permissions} from "../models/permission";

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  API_URL = environment.base_url + environment.users_url;
  readonly url = 'permissions/';

  constructor(
    private httpClient: HttpClient,
  ) { }

  // getForPagination(query: QuerySearch[] = []): Observable<Permissions> {
  //   let queryString = '';
  //   if (query) {
  //     query.forEach((element, index) => {
  //       if (index > 0) {
  //         queryString += '&' + element.name + '=' + element.value;
  //       } else {
  //         queryString += '?' + element.name + '=' + element.value;
  //       }
  //
  //     });
  //   }
  //
  //   return this.httpClient.get<{data: Permissions}>(this.API_URL + this.url + queryString).pipe(map(response => {
  //     return response.data;
  //   }));
  // }

  getModulePermissions(query: QuerySearch[] = []): Observable<ModulePermission[]> {
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

    return this.httpClient.get<{data: ModulePermission[]}>(this.API_URL + 'module_permissions/' + queryString)
      .pipe(map(response => response.data));
  }

  getPermissionsForModules( modulesIds, query: QuerySearch[] = []): Observable<Permissions> {
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

    return this.httpClient.get<{data: Permissions}>(this.API_URL + 'get_permissions_for_module/' + modulesIds + '/' + queryString)
      .pipe(map(response => response.data));
  }
}

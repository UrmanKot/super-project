import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from "@env/environment";
import {QuerySearch} from "@shared/models/other";
import {SubModulePermission} from "../models/sub-module-permission";

@Injectable({
  providedIn: 'root'
})
export class SubModulePermissionService {
  API_URL = environment.base_url + environment.users_url;
  readonly url = 'sub_module_permissions/';

  constructor(
    private httpClient: HttpClient,
  ) { }

  get(query?: QuerySearch[]): Observable<SubModulePermission[]> {
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
    return this.httpClient.get<{ data: SubModulePermission[] }>(this.API_URL + this.url + qString).pipe(map(response => {
      return response.data;
    }));
  }
}

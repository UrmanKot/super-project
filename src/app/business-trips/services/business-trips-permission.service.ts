import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {QuerySearch} from "@shared/models/other";
import {BusinessTripPermission} from "./business-trip-permission";

@Injectable({
  providedIn: 'root'
})
export class BusinessTripsPermissionService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips-permissions/';

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

  get(query?: QuerySearch[]): Observable<BusinessTripPermission[]> {
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
    return this.httpClient
      .get<{ data: BusinessTripPermission[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity) {
    return this.httpClient.patch(this.API_URL + 'update_business_trip_employee_permissions/' + id + '/', entity);
  }

  update_verify_permission(id, entity) {
    return this.httpClient.patch(this.API_URL + 'update_business_trip_verification_permissions/' + id + '/', entity);
  }
}

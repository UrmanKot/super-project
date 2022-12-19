import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Vehicle, VehiclePaginated} from '../models/vehicle';
import {QuerySearch} from '@shared/models/other';
import {CreateUpdateVehicleComponent} from '../modals/create-update-vehicle/create-update-vehicle.component';
import {BusinessTripPaginated} from '../models/business-trip';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'vehicles/';

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

  get(query?: QuerySearch[]): Observable<Vehicle[]> {
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
      .get<{ data: Vehicle[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getPaginated(query?: QuerySearch[]): Observable<VehiclePaginated> {
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
      .get<{ data: VehiclePaginated }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getById(id): Observable<Vehicle> {
    return this.httpClient.get<{ data: Vehicle }>(this.API_URL + this.url + id + '/').pipe(map(response => {
      return response.data;
    }));
  }

  create(entity) {
    return this.httpClient
      .post<{ data: Vehicle }>(this.API_URL + this.url, entity)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  update(id, entity: Vehicle) {
    return this.httpClient.patch(this.API_URL + this.url + id + '/', entity);
  }

  delete(entity: Vehicle) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }

  createChangeVehicle(entity: Vehicle = null) {
    return this.dialog
      .open<CreateUpdateVehicleComponent>(CreateUpdateVehicleComponent, {
        width: '800px',
        data: {type: entity ? 'edit' : 'add', entity},
        disableClose: false,
      })
      .afterClosed()
      .pipe();
  }
}

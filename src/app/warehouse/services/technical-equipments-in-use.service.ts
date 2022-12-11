import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TechnicalEquipmentInUse} from '../models/technical-equipment-in-use';

@Injectable({
  providedIn: 'root'
})
export class TechnicalEquipmentsInUseService {
  API_URL = environment.base_url + environment.production_url;
  readonly url = 'order_technical_equipments_in_use/';

  constructor(private httpClient: HttpClient) {

  }

  get(query?: QuerySearch[]): Observable<TechnicalEquipmentInUse[]> {
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
    return this.httpClient.get<{ data: TechnicalEquipmentInUse[] }>(this.API_URL + this.url + qString).pipe(map(response => {
      return response.data;
    }));
  }
}

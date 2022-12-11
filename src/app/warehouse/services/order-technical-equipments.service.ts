import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {OrderTechnicalEquipment} from '../models/order-technical-equipment';

@Injectable({
  providedIn: 'root'
})
export class OrderTechnicalEquipmentsService {
  API_URL = environment.base_url + environment.production_url;
  readonly url = 'order_technical_equipments/';

  constructor(private httpClient: HttpClient) {

  }

  get(query?: QuerySearch[]): Observable<OrderTechnicalEquipment[]> {
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
    return this.httpClient.get<{ data: OrderTechnicalEquipment[] }>(this.API_URL + this.url + qString).pipe(map(response => {
      return response.data;
    }));
  }

  updatePartly(entity: OrderTechnicalEquipment) {
    return this.httpClient.patch<{ data: OrderTechnicalEquipment }>(this.API_URL + this.url + entity.id + '/', entity).pipe(map(response => {
      return response.data;
    }));
  }

  acceptSeveral(send: any[]): Observable<any> {
    return this.httpClient.post(this.API_URL + 'technical_equipment_to_warehouse/', send).pipe(
      map(response => response)
    );
  }

}

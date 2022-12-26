import {Injectable} from '@angular/core';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {HotelFiles} from '../models/hotel-files';

@Injectable({
  providedIn: 'root'
})
export class BusinessTripHotelFilesService {
  API_URL = environment.base_url + environment.business_trips_url;
  readonly url = 'business-trips-hotel-files/';
  constructor(
    private httpClient: HttpClient,
  ) { }

  get(query?: QuerySearch[]): Observable<HotelFiles[]> {
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
      .get<{ data: HotelFiles[] }>(this.API_URL + this.url + qString)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }


  delete(entity: HotelFiles) {
    return this.httpClient.delete(this.API_URL + this.url + entity.id + '/');
  }
}

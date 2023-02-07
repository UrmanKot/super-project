import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Request} from '../models/request';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  API_URL = environment.base_url + environment.production_url;
  API_URL_PROCUREMENT = environment.base_url + environment.procurement_url;

  readonly url = 'production_requests/';

  constructor(
    private http: HttpClient
  ) {
  }

  getByOrder(orderId: number): Observable<Request[]> {
    return this.http.get<{ data: Request[] }>(this.API_URL + this.url + '?order=' + orderId).pipe(
      map(response => response.data)
    );
  }

  cancelRequest(id: number): Observable<any> {
    return this.http.post<{ data: any }>(this.API_URL + this.url + `${id}/cancel/`, null).pipe(
      map(response => response.data)
    );
  }

  cancel(id: number): Observable<any> {
    return this.http.post<{ data: any }>(this.API_URL_PROCUREMENT + `orders/${id}/cancel_production_requests/`, null).pipe(
      map(response => response.data)
    );
  }

  create(data: any): Observable<any> {
    return this.http.post<{ data: Request[] }>(this.API_URL + this.url, data).pipe(
      map(response => response.data)
    );
  }

  complete(id: number): Observable<any> {
    return this.http.post(this.API_URL_PROCUREMENT + 'orders/' + id + '/' + 'complete/', id);
  }

  sendImageProductionRequests(id: string, data: any) {
    return this.http.post<{ data: any }>(this.API_URL + `production_requests/${id}/scan_product_request_item/`, data)
      .pipe(
        map(response => {
          return response.data;
        }));
  }
}

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DeliveryChain, DeliveryChains} from "../../delivery-chains/models/delivery-chain";

@Injectable({
  providedIn: 'root'
})
export class DeliveryChainService {

  API_URL = environment.base_url + environment.delivery_url;
  readonly chainUrl = 'chains/';
  readonly filesUrl = 'files/';

  constructor(private httpClient: HttpClient) {
  }

  get(query?: { name: string, value: any }[]): Observable<DeliveryChain[]> {
    let q_string = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          q_string += '&' + element.name + '=' + element.value;
        } else {
          q_string += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{ data: DeliveryChain[] }>(this.API_URL + this.chainUrl + q_string).pipe(map(response => {
      return response.data;
    }));
  }

  getForPagination(query?: { name: string, value: any }[]): Observable<DeliveryChains> {
    let q_string = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          q_string += '&' + element.name + '=' + element.value;
        } else {
          q_string += '?' + element.name + '=' + element.value;
        }

      });
    }
    return this.httpClient.get<{ data: DeliveryChains }>(this.API_URL + this.chainUrl + q_string).pipe(map(response => {
      return response.data;
    }));
  }

  getById(id) {
    const url = this.API_URL + this.chainUrl + id + '/';
    return this.httpClient.get(url).pipe(map((res: any) => {
      return res.data;
    }));
  }

  getStatuses() {
    const url = this.API_URL + this.chainUrl + 'statuses/';
    return this.httpClient.get(url).pipe(map((res: any) => {
      return res.data;
    }));
  }

  getReservedProducts() {
    const url = this.API_URL + this.chainUrl + 'reserved_products/';
    return this.httpClient.get(url).pipe(map((res: any) => {
      return res.data;
    }));
  }

  getOrderedProducts(deliveryChainId) {
    const url = this.API_URL + this.chainUrl + deliveryChainId + '/ordered_products/';
    return this.httpClient.get(url).pipe(map((res: any) => {
      return res.data;
    }));
  }

  updateStatus(id, data) {
    const url = this.API_URL + this.chainUrl + id + '/';
    return this.httpClient.patch(url, data);
  }

  getDeliveryItems(deliveryChainId) {
    const url = this.API_URL + this.chainUrl + deliveryChainId + '/items/';
    return this.httpClient.get(url).pipe(map((res: any) => res.data));
  }

  getFiles(deliveryChainId) {
    const url = this.API_URL + this.filesUrl + '?delivery_chain_id=' + deliveryChainId;
    return this.httpClient.get(url).pipe(map((res: any) => res.data));
  }

  create(data) {
    const url = this.API_URL + this.chainUrl;
    return this.httpClient.post(url, data).pipe(map((res: any) => {
      return res.data;
    }));
  }

  complete(deliveryChainId) {
    const url = this.API_URL + this.chainUrl + deliveryChainId + '/complete/';
    const data = {};
    return this.httpClient.post(url, data).pipe(map((res: any) => res.data));
  }

  delete(deliveryChainId) {
    const url = this.API_URL + this.chainUrl + deliveryChainId + '/';
    return this.httpClient.delete(url);
  }

  get_files() {
    return this.httpClient
      .get<{ data: any }>(this.API_URL + this.filesUrl)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  delete_file(file_id: number) {
    return this.httpClient
      .delete(this.API_URL + this.filesUrl + file_id + '/')
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  attach(deliveryChainId: number, file: FormData) {
    const headers = new HttpHeaders({
      "Content-Disposition": `attachment; filename=${(file.get("file") as File).name}`,
    });
    const url = this.API_URL + this.filesUrl + deliveryChainId + '/upload/';
    return this.httpClient
      .post<{ data: any }>(url, file, {headers})
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}

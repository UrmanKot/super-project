import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {environment} from '@env/environment';
import {map} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {DeliveryChain, DeliveryChains} from "../../delivery-chains/models/delivery-chain";
import {MatDialog} from "@angular/material/dialog";
import {
  EditDeliveryChainComponent
} from "../../delivery-chains/modals/edit-delivery-chain/edit-delivery-chain.component";
import {
  DeliveryChainFilesComponent
} from "../../delivery-chains/modals/delivery-chain-files/delivery-chain-files.component";

@Injectable({
  providedIn: 'root'
})
export class DeliveryChainService {

  API_URL = environment.base_url + environment.delivery_url;
  readonly url = 'procurement-chains/';
  readonly filesUrl = 'files/';
  readonly chainUrl = 'chains/';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<DeliveryChain[]> {
    let queryParams = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: DeliveryChain[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
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

  getForPagination(query: QuerySearch[] = []): Observable<DeliveryChains> {
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
    return this.httpClient.get<{
      data: DeliveryChains
    }>(this.API_URL + this.chainUrl + queryString).pipe(map(response => {
      return response.data;
    }));
  }

  delete(deliveryChainId) {
    const url = this.API_URL + this.chainUrl + deliveryChainId + '/';
    return this.httpClient.delete(url);
  }

  getById(id): Observable<DeliveryChain> {
    return this.httpClient.get<{ data: DeliveryChain }>(this.API_URL + this.url + `${id}/`).pipe(
      map(response => response.data)
    );
  }

  getChainById(id): Observable<DeliveryChain> {
    return this.httpClient.get<{ data: DeliveryChain }>(this.API_URL + this.chainUrl + `${id}/`).pipe(
      map(response => response.data)
    );
  }

  getDeliveryItems(id: number): Observable<any[]> {
    return this.httpClient.get<{ data: any[] }>(this.API_URL + this.chainUrl + id + '/items/').pipe(
      map(response => response.data)
    );
  }

  complete(id: number): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url + id + '/complete/', null).pipe(
      map(response => response.data)
    );
  }

  completeChain(id: number): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.chainUrl + id + '/complete/', null).pipe(
      map(response => response.data)
    );
  }

  updateStatus(id, data): Observable<any> {
    const url = this.API_URL + this.chainUrl + id + '/';
    return this.httpClient.patch(url, data);
  }

  editChainModal(chain: DeliveryChain): Observable<any> {
    return this.dialog
      .open<EditDeliveryChainComponent>(EditDeliveryChainComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {chain},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  deleteFile(file_id: number) {
    return this.httpClient
      .delete(this.API_URL + this.filesUrl + file_id + '/')
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  downloadFile(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + this.filesUrl + id + '/upload/', {responseType: 'blob'});
  }

  getFiles(id: number) {
    return this.httpClient
      .get<{ data: any }>(this.API_URL + this.filesUrl)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  getOrderedProducts(deliveryChainId) {
    const url = this.API_URL + this.chainUrl + deliveryChainId + '/ordered_products/';
    return this.httpClient.get(url).pipe(map((res: any) => {
      return res.data;
    }));
  }

  severalUploadFiles(id: number, files: File[]): Observable<any[]> {
    const arrayFormData: FormData[] = [];

    files.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      arrayFormData.push(formData);
    });

    return forkJoin(...arrayFormData.map(formData => {
        const headers = new HttpHeaders({
          "Content-Disposition": `attachment; filename=${(formData.get("file") as File).name}`,
        });

        return this.httpClient.post<{ data: any }>(this.API_URL + this.filesUrl + id + '/upload/', formData, {headers}).pipe(
          map(response => response.data)
        )
      }
    ));
  }

  create(data) {
    const url = this.API_URL + this.chainUrl;
    return this.httpClient.post(url, data).pipe(map((res: any) => {
      return res.data;
    }));
  }

  openFilesModal(chainId: number): Observable<any> {
    return this.dialog
      .open<DeliveryChainFilesComponent>(DeliveryChainFilesComponent, {
        width: '54rem',
        height: 'auto',
        data: {chainId},
        autoFocus: false,
        panelClass: 'modal-picker',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }


  materialsToQc(id: number): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + this.chainUrl + id + '/items_to_qc/', null);
  }

  completeDeliveryQc(id: number): Observable<any> {
    const now = new Date(Date.now());
    let data = {
      qc_delivery_closed_date: now.toISOString()
    };
    return this.httpClient.patch(this.API_URL + this.chainUrl + `${id}/`, data);
  }
}

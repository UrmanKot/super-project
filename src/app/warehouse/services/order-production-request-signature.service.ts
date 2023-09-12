import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {OrderProductionRequestSignature} from '../models/order-production-request-signature';
import {Product} from '../../product-structure/models/product';
import {
  PhysicalInventoryScanResultModalComponent
} from '../modals/physical-inventory-scan-result-modal/physical-inventory-scan-result-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {
  OrderProductionRequestsSignsListComponent
} from '../modals/order-production-requests-signs-list/order-production-requests-signs-list.component';
import {CorrespondentTypes} from '../../correspondent/enum/correspondent-types.enum';

@Injectable({
  providedIn: 'root'
})
export class OrderProductionRequestSignatureService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'order_production_request_signatures/';
  readonly filesUrl = 'files/';

  constructor(
    private readonly dialog: MatDialog,
    private readonly httpClient: HttpClient,
  ) {
  }

  get(query?: QuerySearch[]): Observable<OrderProductionRequestSignature[]> {
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

    return this.httpClient.get<{ data: OrderProductionRequestSignature[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  sign(signature: OrderProductionRequestSignature): Observable<any> {
    const formData = new FormData();
    for (const key in signature) {
      if (signature[key] !== null) {
        formData.append(key, signature[key]);
      }
    }
    return this.httpClient.post<{ data: any }>(this.API_URL + this.url, formData).pipe(
      map(response => response.data)
    );
  }

  signatureList(orderId: number): Observable<void> {
    return this.dialog
      .open<OrderProductionRequestsSignsListComponent>(OrderProductionRequestsSignsListComponent, {
        width: '40rem',
        data: {orderId},
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  download_file(signatureId: number) {
    return this.httpClient.get(this.API_URL + this.url + signatureId + '/download/', {responseType: 'blob'})
      .pipe(map(response => {
        return response;
      }));
  }
}

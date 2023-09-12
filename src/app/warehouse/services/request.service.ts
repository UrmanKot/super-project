import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Request} from '../models/request';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {map} from 'rxjs/operators';
import {ScanResultNoResultComponent} from '../modals/scan-result-no-result/scan-result-no-result.component';
import {
  CreatePhysicalInventoryComponent
} from '../modals/create-physical-inventory/create-physical-inventory.component';
import {MatDialog} from '@angular/material/dialog';
import {Nomenclature} from '@shared/models/nomenclature';
import {ScanResultWasFoundComponent} from '../modals/scan-result-was-found/scan-result-was-found.component';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  API_URL = environment.base_url + environment.production_url;
  API_URL_PROCUREMENT = environment.base_url + environment.procurement_url;

  readonly url = 'production_requests/';

  constructor(
    private readonly dialog: MatDialog,
    private http: HttpClient
  ) {
  }

  getByOrder(orderId: number): Observable<Request[]> {
    return this.http.get<{ data: Request[] }>(this.API_URL + this.url + '?order=' + orderId).pipe(
      map(response => response.data)
    );
  }

  getDeliveryByOrder(orderId: number): Observable<Request[]> {
    return this.http.get<{ data: Request[] }>(this.API_URL + this.url + 'delivery_list/' + '?order=' + orderId).pipe(
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

  cancelTechnicalEquipment(id: number): Observable<any> {
    return this.http.post<{ data: any }>(this.API_URL_PROCUREMENT + `orders/${id}/cancel_technical_equipments/`, null).pipe(
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

  completeMaterialQc(id: number): Observable<any> {
    const now = new Date(Date.now());
    let data = {
      qc_delivery_closed_date: now.toISOString()
    };
    return this.http.patch(this.API_URL_PROCUREMENT + 'orders/' + id + '/', data);
  }

  materialsToQc(id: number): Observable<any> {
    return this.http.post(this.API_URL_PROCUREMENT + 'orders/' + id + '/' + 'materials_to_qc/', id);
  }

  updateMaterial(data: any): Observable<any> {
    return this.http.post<{ data: Request[] }>(this.API_URL + this.url + 'complete_material_qc/', data).pipe(
      map(response => response.data)
    );
  }

  resetConfirmation(data: any): Observable<any> {
    return this.http.post<{ data: Request[] }>(this.API_URL + this.url + 'reset_material_qc_confirmation/', data).pipe(
      map(response => response.data)
    );
  }

  sendDataProductionRequests(id: string, data: any) {
    return this.http.post<{ data: any }>(this.API_URL + `production_requests/${id}/scan_product_request_item/`, data)
      .pipe(
        map(response => {
          return response.data;
        }));
  }

  noResultFoundModal(): Observable<any> {
    return this.dialog
      .open<ScanResultNoResultComponent>(ScanResultNoResultComponent, {
        width: '40rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  resultFoundModal(nomenclature: { code: string, name: string }): Observable<any> {
    return this.dialog
      .open<ScanResultWasFoundComponent>(ScanResultWasFoundComponent, {
        width: '40rem',
        data: {nomenclature},
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

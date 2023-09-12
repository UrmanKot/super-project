import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {Observable} from 'rxjs';
import {SalesChain, SalesChains, SalesFile, SalesReservation} from '../models/sales-chain';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {CreateSalesChainComponent} from '../modals/create-sales-chain/create-sales-chain.component';
import {MatDialog} from '@angular/material/dialog';
import {EditStatusesModalComponent} from "../modals/edit-statuses-modal/edit-statuses-modal.component";
import {
  CreateChoiceProductModalComponent
} from "../modals/create-choice-product-modal/create-choice-product-modal.component";
import {CreateSalesFileModalComponent} from "../modals/create-sales-file-modal/create-sales-file-modal.component";
import {CompanyFile} from "../../crm/models/company-file";
import {EditOfferPriceComponent} from "../modals/edit-offer-price/edit-offer-price.component";

@Injectable({
  providedIn: 'root'
})
export class SalesChainService {

  API_URL = environment.base_url + environment.sales_url;

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(query?: QuerySearch[]): Observable<SalesChain[]> {
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

    return this.httpClient.get<{ data: SalesChain[] }>(this.API_URL + 'sales_chains/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  getForPagination(query?: QuerySearch[]): Observable<SalesChains> {
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

    return this.httpClient.get<{ data: SalesChains }>(this.API_URL + 'sales_chains/' + queryParams).pipe(
      map(response => response.data)
    );
  }

  create(salesChain: Partial<SalesChain>): Observable<SalesChain> {
    return this.httpClient
      .post<{ data: SalesChain }>(this.API_URL + 'sales_chains/', salesChain).pipe(
        map(response => response.data)
      );
  }

  delete(salesChain: SalesChain): Observable<any> {
    return this.httpClient.delete(this.API_URL + 'sales_chains/' + salesChain.id + '/');
  }

  deleteProduct(id) {
    return this.httpClient.delete(this.API_URL + `sales_chain_reservation/${id}`)
  }

  getById(id: number): Observable<SalesChain> {
    return this.httpClient.get<{ data: SalesChain }>(this.API_URL + `sales_chains/${id}/`).pipe(
      map(response => response.data)
    )
  }

  getReservation(id: number): Observable<SalesReservation> {
    return this.httpClient.get<{ data: SalesReservation }>(this.API_URL + `sales_chain_reservation/?sales_chain=${id}`).pipe(
      map(response => response.data)
    )
  }

  updateItem(data: any): Observable<any> {
    return this.httpClient.post<{ data: Request[] }>(this.API_URL + 'sales_chain_reservation/complete_delivery_qc/', data).pipe(
      map(response => response.data)
    );
  }

  resetConfirmation(data: any): Observable<any> {
    return this.httpClient.post<{ data: Request[] }>(this.API_URL + 'sales_chain_reservation/reset_delivery_qc_confirmation/', data).pipe(
      map(response => response.data)
    );
  }

  updateStatus(id: number, salesChain):Observable<SalesChain> {
    return this.httpClient.patch<{data: SalesChain}>(this.API_URL + '' + `sales_chains/${id}/`, salesChain).pipe(
      map(response => response.data)
    )
  }

  getFile(): Observable<SalesFile[]> {
    return this.httpClient.get<{data: SalesFile[]}>(this.API_URL + `sales_chain_files/`).pipe(
      map(response => response.data)
    )
  }

  downloadFile(file: SalesFile): Observable<any> {
    return this.httpClient.get(this.API_URL+ `sales_chain_files/${file.id}/`, {responseType: 'blob'})
  }

  getGenerateOffer(id: number):Observable<any> {
    return this.httpClient.get(this.API_URL + `sales_chains/${id}/generate_offer/`, {observe: 'response', responseType: 'blob'})
  }
  removeGenerateOffer(id: number):Observable<any> {
    return this.httpClient.delete(this.API_URL + `sales_chains/${id}/generate_offer/`)
  }
  // generateOffer(id) {
  //   return this.httpClient.get(this.API_URL + 'sales_chains/' + id + '/generate_offer/', {observe: 'response', responseType: 'blob'});
  // }

  getConfirmedOffer(chainId) {
    const url = this.API_URL + 'sales_chains/' + chainId + '/confirmed_offers/'
    return this.httpClient.get<{data: any}>(url).pipe(map((response) => {
      return response.data;
    }));
  }

  generateOffer(id) {
    const url = this.API_URL + 'sales_chains/' + id + '/generate_offer/';
    const data = {};
    return this.httpClient.post(url, data);
  }

  deleteOffer(chainId, offerId) {
    const url = this.API_URL + 'sales_chains/' + chainId + '/delete_offer/' + offerId + '/';
    return this.httpClient.delete(url);
  }

  confirmOffer(offerId) {
    const url = this.API_URL + 'sales_chains/' + offerId + '/confirm_offer/';
    const data = {};
    return this.httpClient.post(url, data);
  }

  getOffers(id) {
    const url = this.API_URL + 'sales_chains/' + id + '/offers/';
    return this.httpClient.get<{data: any}>(url).pipe(map((response) => {
      return response.data;
    }));
  }

  getOfferItems(offerId) {
    const url = this.API_URL + 'sales_chains/' + offerId + '/get_offer_items/';
    return this.httpClient.get<{data: any}>(url).pipe(map((response) => {
      return response.data;
    }))
  }

  updateOffer(chainId, offerId, items) {
    const url = this.API_URL + 'sales_chains/' + chainId + '/update_offer/' + offerId + '/';
    return this.httpClient.patch(url, items);
  }

  editOfferPriceDialog(offer: any, chainId: number) {
    return this.dialog
      .open<EditOfferPriceComponent>(EditOfferPriceComponent, {
        width: '50rem',
        height: 'auto',
        data: {offer, chainId},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  createEditSalesChainModal(): Observable<SalesChain> {
    return this.dialog
      .open<CreateSalesChainComponent>(CreateSalesChainComponent, {
        width: '35rem',
        height: 'auto',
        autoFocus: false,
        panelClass: 'modal-overflow-visible',
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  editSalesChainStatus(salesChain: SalesChain): Observable<any> {
    return this.dialog
      .open<EditStatusesModalComponent>(EditStatusesModalComponent, {
        width: '50rem',
        panelClass: 'modal-overflow-visible',
        data: {type: 'edit', salesChain},
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }

  createChoiceProduct(selectedSalesReservation: SalesReservation): Observable<any> {
    return this.dialog
      .open<CreateChoiceProductModalComponent>(CreateChoiceProductModalComponent, {
        width: '80vw',
        data: {type: 'edit', selectedSalesReservation},
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }
  createSalesFileModal(saleChainId: number): Observable<any> {
    return this.dialog
      .open<CreateSalesFileModalComponent>(CreateSalesFileModalComponent, {
        width: '50rem',
        data: {type: 'edit', saleChainId},
        disableClose: true,
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }
}

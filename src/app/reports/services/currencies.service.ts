import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Currency} from '@shared/models/currency';
import {ModalActionType} from "@shared/models/modal-action";
import {CreateEditCurrencyComponent} from "../modals/create-edit-currency/create-edit-currency.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  API_URL = environment.base_url + environment.procurement_url;
  readonly url = 'currencies/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {

  }

  get(query?: { name: string, value: any }[]): Observable<Currency[]> {
    let q_string = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          q_string += '&' + element.name + '=' + element.value
        } else {
          q_string += '?' + element.name + '=' + element.value
        }
      });
    }
    return this.httpClient.get<{ data: Currency[] }>(this.API_URL + this.url + q_string).pipe(map(response => {
      return response.data;
    }))
  }

  create(entity): Observable<Currency> {
    return this.httpClient.post<{ data: Currency }>(this.API_URL + this.url, entity).pipe(map(response => {
      return response.data;
    }));
  }

  update(entity: Currency, last: string) {
    return this.httpClient.put(this.API_URL + this.url + last + '/', entity);
  }

  updatePartly(entity: Currency, last: string): Observable<Currency> {
    return this.httpClient.patch<{ data: Currency }>(this.API_URL + this.url + last + '/', entity).pipe(
      map(response => response.data)
    );
  }

  delete(entity: Currency) {
    return this.httpClient.delete(this.API_URL + this.url + entity.code + '/');
  }

  createEditCurrencyModal(type: ModalActionType, currency?: Currency): Observable<Currency> {
    return this.dialog
      .open<CreateEditCurrencyComponent>(CreateEditCurrencyComponent, {
        width: '50rem',
        height: 'auto',
        data: {type, currency},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

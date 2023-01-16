import { Injectable } from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {QuerySearch} from '@shared/models/other';
import {forkJoin, Observable} from 'rxjs';
import {
  NewNomenclature,
  Nomenclature,
  NomenclatureFile,
  NomenclatureImage,
  Nomenclatures
} from '@shared/models/nomenclature';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NomenclaturesFileService {

  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'nomenclature_files/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(query?: QuerySearch[]): Observable<NomenclatureFile[]> {
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
    return this.httpClient.get<{ data: NomenclatureFile[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<NomenclatureFile> {
    return this.httpClient.get<{ data: NomenclatureFile }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  create(send: { nomenclature: number, file: File }): Observable<NomenclatureFile> {
    const formData = new FormData();

    for (const key in send) {
      if (send[key] !== null) {
        formData.append(key, send[key]);
      }
    }

    return this.httpClient.post<{ data: NomenclatureFile }>(this.API_URL + this.url, formData).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${id}/`);
  }
}

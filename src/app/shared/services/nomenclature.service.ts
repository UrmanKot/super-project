import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {NewNomenclature, Nomenclature, NomenclatureImage, Nomenclatures} from '@shared/models/nomenclature';
import {map} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {QuerySearch} from '@shared/models/other';

@Injectable({
  providedIn: 'root'
})
export class NomenclatureService {
  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'nomenclatures/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(query?: QuerySearch[]): Observable<Nomenclature[]> {
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
    return this.httpClient.get<{ data: Nomenclature[] }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getForPagination(query?: QuerySearch[]): Observable<Nomenclatures> {
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
    return this.httpClient.get<{ data: Nomenclatures }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<Nomenclature> {
    return this.httpClient.get<{ data: Nomenclature }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  create(nomenclature: Partial<Nomenclature>): Observable<Nomenclature> {
    const formData = new FormData();

    if (nomenclature.technologies && nomenclature.technologies.length > 0) {
      nomenclature.technologies.forEach(technology => {
        formData.append('technologies', technology.id + '');
      });
    }

    for (const key in nomenclature) {
      if (nomenclature[key] !== null && key !== 'technologies') {
        formData.append(key, nomenclature[key]);
      }
    }

    if (nomenclature.category === null) {
      formData.append('category', '');
    }

    return this.httpClient.post<{ data: Nomenclature }>(this.API_URL + this.url, formData).pipe(
      map(response => response.data)
    );
  }

  updatePartly(nomenclature: Partial<Nomenclature>): Observable<Nomenclature> {
    return this.httpClient.patch<{ data: Nomenclature }>(this.API_URL + this.url + `${nomenclature.id}/`, nomenclature).pipe(
      map(response => response.data)
    );
  }

  update(nomenclature: Partial<Nomenclature>): Observable<Nomenclature> {
    const formData = new FormData();

    if (nomenclature.technologies && nomenclature.technologies.length > 0) {
      nomenclature.technologies.forEach(technology => {
        formData.append('technologies', technology.id + '');
      });
    }

    for (const key in nomenclature) {
      if (nomenclature[key] !== null && key !== 'technologies') {
        formData.append(key, nomenclature[key]);
      }
    }

    if (nomenclature.category === null) {
      formData.append('category', '');
    }

    return this.httpClient.put<{ data: Nomenclature }>(this.API_URL + this.url + `${nomenclature.id}/`, formData).pipe(
      map(response => response.data)
    );
  }

  searchWhereUsed(id: number): Observable<Nomenclature[]> {
    return this.httpClient.get<{ data: Nomenclature[] }>(this.API_URL + this.url + id + '/used_in_list/').pipe(
      map(response => response.data)
    );
  }

  // updateRoot(nomenclature: Partial<Nomenclature>): Observable<Nomenclature> {
  //   const formData = new FormData();
  //
  //   if (nomenclature.technologies && nomenclature.technologies.length > 0) {
  //     nomenclature.technologies.forEach(technology => {
  //       formData.append('technologies', technology.id + '');
  //     });
  //   }
  //
  //   for (const key in nomenclature) {
  //     if (nomenclature[key] !== null && key !== 'technologies') {
  //       formData.append(key, nomenclature[key]);
  //     }
  //   }
  //
  //   if (nomenclature.category === null) {
  //     formData.append('category', '');
  //   }
  //
  //   return this.httpClient.put<{ data: Nomenclature }>(this.API_URL + this.url + `${nomenclature.id}/`, formData).pipe(
  //     map(response => response.data)
  //   );
  // }

  // Nomenclatures for confirmation
  getNewNomenclatures(): Observable<NewNomenclature[]> {
    return this.httpClient.get<{ data: NewNomenclature[] }>(this.API_URL + 'products_new_nomenclatures/').pipe(
      map(response => response.data)
    );
  }

  updateSeveralPartly(nomenclatures: Partial<Nomenclature>[]): Observable<Nomenclature[]> {
    return forkJoin(...nomenclatures.map(nomenclature =>
      this.httpClient.patch<{ data: Nomenclature }>(this.API_URL + this.url + nomenclature.id + '/', nomenclature).pipe(
        map(response => response.data)
      ))
    );
  }

  uploadImage(send: any): Observable<NomenclatureImage> {
    const formData = new FormData();

    for (const key in send) {
      if (send[key] !== null) {
        formData.append(key, send[key]);
      }
    }

    return this.httpClient.post<{ data: NomenclatureImage }>(this.API_URL + 'nomenclature_images/', formData).pipe(
      map(response => response.data)
    );
  }

  loadImages(id: number): Observable<NomenclatureImage[]> {
    return this.httpClient.get<{ data: NomenclatureImage[] }>(this.API_URL + `nomenclature_images/?nomenclature=${id}`).pipe(
      map(response => response.data)
    );
  }

  uploadImagesSeveral(send: any[]): Observable<NomenclatureImage[]> {
    const data = [];

    send.forEach(s => {
      const formData = new FormData();

      for (const key in s) {
        if (s[key] !== null) {
          formData.append(key, s[key]);
        }
      }

      data.push(formData);
    });

    return forkJoin(...data.map(d => this.httpClient.post<{ data: NomenclatureImage }>(this.API_URL + 'nomenclature_images/', d).pipe(
      map(response => response.data)
    )));
  }

  removeImage(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + `nomenclature_images/${id}/`);
  }
}

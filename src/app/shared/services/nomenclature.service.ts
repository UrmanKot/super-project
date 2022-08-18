import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {NewNomenclature, Nomenclature} from '@shared/models/nomenclature';
import {map} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {Product} from '../../product-structure/models/product';

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

  create(nomenclature: Partial<Nomenclature>): Observable<Nomenclature> {
    // const formData = new FormData();

    // if (nomenclature.technologies?.length > 0) {
    //   nomenclature.technologies.forEach(technology => {
    //     formData.append('technologies', technology + '');
    //   });
    // }
    //
    // // tslint:disable-next-line:forin
    // for (const key in nomenclature) {
    //   if (nomenclature[key] !== null && key !== 'technologies') {
    //     formData.append(key, nomenclature[key]);
    //   }
    // }
    //
    // if (nomenclature.category === null) {
    //   formData.append('category', '');
    // }

    return this.httpClient.post<{ data: Nomenclature }>(this.API_URL + this.url, nomenclature).pipe(
      map(response => response.data)
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<{ data: Product }>(this.API_URL + this.url + `${product.id}/`, product).pipe(
      map(response => response.data)
    );
  }

  // Nomenclatures for confirmation
  getNewNomenclatures(): Observable<NewNomenclature[]> {
    return this.httpClient.get<{ data: NewNomenclature[] }>(this.API_URL + 'products_new_nomenclatures/').pipe(
      map(response => response.data)
    );
  }

  updateSeveralPartly(nomenclatures: Nomenclature[]): Observable<any[]> {
    return forkJoin(...nomenclatures.map(nomenclature => this.httpClient.patch<{ data: Nomenclature }>(this.API_URL + this.url + nomenclature.id + '/', nomenclature)));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Product} from '../models/product';
import {environment} from '@env/environment';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditProductComponent,
} from '../modals/create-edit-product/create-edit-product.component';
import {ModalActionType} from '@shared/models/modal-action';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'products/';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(): Observable<Product[]> {
    return this.httpClient.get<{ data: Product[] }>(this.API_URL + this.url).pipe(
      map(response => response.data)
    );
  }

  // TODO удалить all
  getRoots(): Observable<Product[]> {
    return this.httpClient.get<{ data: Product[] }>(this.API_URL + 'products_roots/all/').pipe(
      map(response => response.data)
    );
  }

  getTree(id: number): Observable<Product[]> {
    return this.httpClient.get<{ data: Product[] }>(this.API_URL + 'product_tree/' + `${id}/`).pipe(
      map(response => response.data)
    );
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<{ data: Product }>(this.API_URL + this.url, product).pipe(
      map(response => response.data)
    );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${id}/`);
  }

  copyStructure(send: { nomenclature_id: number, parent_id: number, name: string }): Observable<Product> {
    return this.httpClient.post<{ data: Product }>(this.API_URL + 'product_structure_copy/', send).pipe(
      map(response => response.data)
    );
  }

  move(move: any): Observable<any> {
    return this.httpClient.post(this.API_URL + 'product_move/', move);
  }

  makeRoot(productId: number, send: {category: number}) {
    return this.httpClient.post<{ data: any}>(this.API_URL + `products/${productId}/copy_tree_to_root/`, send).pipe(
      map(response => response.data)
    );
  }

  // TODO ПЕРЕНЕСТИ В ДРУГОЙ СЕРВИС
  makeProductionList(send: any): Observable<any> {
    return this.httpClient.post(environment.base_url + environment.production_url + 'list_creation_requests/', send)
  }

  createEditProduct(type: ModalActionType, product?: Product): Observable<Product> {
    return this.dialog
      .open<CreateEditProductComponent>(CreateEditProductComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, product},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

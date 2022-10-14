import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, map, Observable} from 'rxjs';
import {Product, ProductFile} from '../models/product';
import {environment} from '@env/environment';
import {MatDialog} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {AddProductComponent} from '../modals/add-product/add-product.component';
import {CreateEditRootProductComponent} from '../modals/create-edit-root-product/create-edit-root-product.component';
import {EditProductComponent} from '../modals/edit-product/edit-product.component';
import {Nomenclature} from '@shared/models/nomenclature';
import {UploadProductStructureComponent} from '../modals/upload-product-structure/upload-product-structure.component';
import {ProductFilesComponent} from '../modals/product-files/product-files.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = environment.base_url + environment.product_structure_url;
  private readonly url = 'products/';
  private readonly;

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

  updatePartly(product: Partial<Product>) {
    return this.httpClient.patch<{ data: Product }>(this.API_URL + this.url + product.id + '/', product).pipe(
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

  getProductFiles(productId: number): Observable<ProductFile[]> {
    return this.httpClient.get<{ data: ProductFile[] }>(this.API_URL + `product_files/${productId}/`).pipe(
      map(response => response.data)
    );
  }

  severalUploadFiles(productId: number, files: File[]): Observable<ProductFile[]> {
    const arrayFormData: FormData[] = [];

    files.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      arrayFormData.push(formData);
    });

    return forkJoin(...arrayFormData.map(formData => this.httpClient.post<{ data: ProductFile }>(this.API_URL + `product_files/${productId}/`, formData).pipe(
      map(response => response.data)
    )));
  }

  removeProductFile(fileId: number): Observable<any> {
    return this.httpClient.post(this.API_URL + `file_delete/${fileId}/`, null);
  }

  downloadProductFile(fileId: number): Observable<Blob> {
    return this.httpClient.get(this.API_URL + `file_download/${fileId}/`, {responseType: 'blob'});
  }

  uploadProductStructure(
    data: {
      file_xls: File,
      root_product_id: number,
      passed_codes: string[]
    }): Observable<any> {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    return this.httpClient.post(this.API_URL + 'products/import_products/', formData).pipe(
      map(response => response)
    );
  }

  makeRoot(productId: number, send: { category: number }): Observable<any> {
    return this.httpClient.post<{ data: any }>(this.API_URL + `products/${productId}/copy_tree_to_root/`, send).pipe(
      map(response => response.data)
    );
  }

  // TODO ПЕРЕНЕСТИ В ДРУГОЙ СЕРВИС
  makeProductionList(send: any): Observable<any> {
    return this.httpClient.post(environment.base_url + environment.production_url + 'list_creation_requests/', send);
  }

  addProduct(product: Partial<Product>): Observable<Product[]> {
    return this.httpClient.post<{ data: Product[] }>(this.API_URL + this.url, product).pipe(
      map(response => response.data)
    );
  }

  createEditRootProduct(type: ModalActionType, product?: Product): Observable<Product | Nomenclature> {
    return this.dialog
      .open<CreateEditRootProductComponent>(CreateEditRootProductComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, product},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  editProductModal(product: Product): Observable<{ nomenclature: Nomenclature, product: Partial<Product> }> {
    return this.dialog
      .open<EditProductComponent>(EditProductComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-edit-product',
        data: product,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  addProductModal(id: number): Observable<Product[]> {
    return this.dialog
      .open<AddProductComponent>(AddProductComponent, {
        width: 'auto',
        height: 'auto',
        panelClass: 'modal-picker',
        data: id,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  uploadProductStructureModal(productId: number): Observable<Product[]> {
    return this.dialog
      .open<UploadProductStructureComponent>(UploadProductStructureComponent, {
        width: '40rem',
        height: 'auto',
        data: productId,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  showProductFiles(productId: number): Observable<void> {
    return this.dialog
      .open<ProductFilesComponent>(ProductFilesComponent, {
        width: '40rem',
        height: 'auto',
        data: productId,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

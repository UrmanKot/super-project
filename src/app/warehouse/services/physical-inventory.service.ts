import {Injectable} from '@angular/core';
import {QuerySearch} from '@shared/models/other';
import {
  InventoryList,
  InventoryLists,
  InventoryProduct,
  PhysicalInventories,
  PhysicalInventory
} from '../models/physical-inventory';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {MatDialog} from '@angular/material/dialog';
import {
  CreatePhysicalInventoryComponent
} from '../modals/create-physical-inventory/create-physical-inventory.component';
import {
  MovePhysicalInventoryProductComponent
} from '../modals/move-physical-inventory-product/move-physical-inventory-product.component';
import {Product} from '../../product-structure/models/product';
import {
  AddProductToPhysicalInventoryComponent
} from '../modals/add-product-to-physical-inventory/add-product-to-physical-inventory.component';

@Injectable({
  providedIn: 'root'
})
export class PhysicalInventoryService {

  API_URL = environment.base_url + environment.warehouse_url;
  readonly url = 'physical_inventory/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getForPagination(query?: QuerySearch[]): Observable<PhysicalInventories> {
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

    return this.httpClient.get<{ data: PhysicalInventories }>(this.API_URL + this.url + queryParams).pipe(
      map(response => response.data)
    );
  }

  getById(id: number): Observable<PhysicalInventory> {
    return this.httpClient.get<{ data: PhysicalInventory }>(this.API_URL + this.url + id + '/').pipe(
      map(response => response.data)
    );
  }

  getInventoryProducts(id: number, query?: QuerySearch[]): Observable<InventoryList[]> {
    let queryParams = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '&' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: InventoryList[] }>(this.API_URL + 'physical_inventory_products_lists/?physical_inventory_id=' + id + queryParams).pipe(
      map(response => response.data)
    );
  }

  getInventoryProductsListsForPagination(id: number, query?: QuerySearch[]): Observable<InventoryLists> {
    let queryParams = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          queryParams += '&' + element.name + '=' + element.value;
        } else {
          queryParams += '&' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: InventoryLists }>(this.API_URL + 'physical_inventory_products_lists/?physical_inventory_id=' + id + queryParams).pipe(
      map(response => response.data)
    );
  }

  createPhysicalInventory(locatorsIds: string): Observable<PhysicalInventory[]> {
    return this.httpClient.post<{ data: PhysicalInventory[] }>(this.API_URL + this.url + '?locators_ids=' + locatorsIds, null).pipe(
      map(response => response.data)
    );
  }

  completePhysicalInventory(inventoryId: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + inventoryId + '/complete_physical_inventory/', null);
  }

  removePhysicalInventory(inventoryId: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + inventoryId + '/');
  }

  updateQuantityInventoryProduct(inventoryProduct: InventoryProduct): Observable<InventoryProduct> {
    const send = {
      is_scanned: inventoryProduct.is_scanned,
      new_quantity: inventoryProduct.new_quantity
    };
    return this.httpClient.put<{ data: InventoryProduct }>(this.API_URL + 'physical_inventory_products/' + inventoryProduct.id + '/', send).pipe(
      map(response => response.data)
    );
  }

  movePhysicalInventoryProduct(id: number, send: {new_locator_id: number}): Observable<InventoryProduct> {
    return this.httpClient.post<{data: InventoryProduct}>(this.API_URL + 'physical_inventory_products/' + id + '/move_to_locator/', send).pipe(
      map(response => response.data)
    );
  }

  addProductToInventory(inventoryId: number, send: any): Observable<InventoryProduct> {
    return this.httpClient.post<{data: InventoryProduct}>(this.API_URL + this.url + inventoryId + '/add_to_inventory/', send).pipe(
      map(response => response.data)
    );
  }

  openCreatePhysicalInventoryModal(): Observable<any> {
    return this.dialog
      .open<CreatePhysicalInventoryComponent>(CreatePhysicalInventoryComponent, {
        width: '40rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openPhysicalInventoryProductMoveModal(product: Product): Observable<any> {
    return this.dialog
      .open<MovePhysicalInventoryProductComponent>(MovePhysicalInventoryProductComponent, {
        width: '40rem',
        height: 'auto',
        data: product,
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openAddProductToPhysicalInventory(inventoryId: number): Observable<any> {
    return this.dialog
      .open<AddProductToPhysicalInventoryComponent>(AddProductToPhysicalInventoryComponent, {
        width: '40rem',
        height: 'auto',
        data: inventoryId,
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

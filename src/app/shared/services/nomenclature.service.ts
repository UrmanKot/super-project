import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {
  ENomenclatureType,
  NewNomenclature,
  Nomenclature,
  NomenclatureImage,
  Nomenclatures
} from '@shared/models/nomenclature';
import {map} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {TechnicalEquipment} from '../../product-structure/models/technical-equipment';
import {Product} from '../../product-structure/models/product';
import {MatDialog} from '@angular/material/dialog';
import {
  SerialConfirmationComponent
} from '../../product-structure/modals/serial-confirmation/serial-confirmation.component';
import {
  CreateOutsourcingRequestComponent
} from '../../outsourcing/modals/create-outsourcing-request/create-outsourcing-request.component';
import {
  ManufacturingPickerProductComponent
} from '../../manufacturing/modals/manufacturing-picker-product/manufacturing-picker-product.component';
import {
  AddAccountingNumberToCategoryComponent
} from "../../product-structure/modals/add-accounting-number-to-category/add-accounting-number-to-category.component";
import {
  EditNomenclatureAccountingNumberComponent
} from "../../product-structure/modals/edit-nomenclature-accounting-number/edit-nomenclature-accounting-number.component";
import {
  EditNomenclaturePriceComponent
} from "../../sales/modals/edit-nomenclature-price/edit-nomenclature-price.component";

@Injectable({
  providedIn: 'root'
})
export class NomenclatureService {
  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'nomenclatures/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
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

  getNomenclaturesImages(ids: number[]): Observable<NomenclatureImage[][]> {
    return forkJoin(ids.map(id => this.httpClient.get<{ data: NomenclatureImage[] }>(this.API_URL + `nomenclature_images/?nomenclature=${id}`).pipe(
      map(response => response.data)
    )));
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

  getWarehouseQuantity(id: number): Observable<any> {
    return this.httpClient.get<{ data: Nomenclature[] }>(this.API_URL + this.url + `${id}/total_warehouse_quantity/`).pipe(
      map(response => response.data)
    );
  }

  updateAccountingNumber(entity: any) {
    return this.httpClient.patch(this.API_URL + this.url + entity.id + '/', entity);
  }

  updateCountryOfOrigin(data) {
    return this.httpClient.patch(this.API_URL + this.url + data.id + '/', data);
  }

  updateTariffCode(data) {
    return this.httpClient.patch(this.API_URL + this.url + data.id + '/', data);
  }


  bulkCreateUpdateTechnicalEquipments(nomenclatureId: number, data): Observable<any> {
    return this.httpClient.post<{ data: TechnicalEquipment }>(this.API_URL + this.url + nomenclatureId + '/bulk_update_technical_equipments/', data).pipe(
      map(response => response.data)
    );
  }

  checkStructureForErrors(nomenclatureId: number): Observable<any> {
    return this.httpClient.post(this.API_URL + this.url + nomenclatureId + '/check_structure_for_errors/', nomenclatureId).pipe(
      map(response => response
      ));
  }

  showSerialConfirmationModal(product: Partial<Product>, warehouseQuantity: number) {
    return this.dialog
      .open<SerialConfirmationComponent>(SerialConfirmationComponent, {
        width: '30rem',
        height: 'auto',
        disableClose: true,
        data: {product, warehouseQuantity},
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  assemblyManufacturedPickerDialog(type: ENomenclatureType): Observable<Product> {
    return this.dialog
      .open<ManufacturingPickerProductComponent>(ManufacturingPickerProductComponent, {
        width: '70rem',
        height: 'auto',
        data: {type},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  addAccountingNumberDialog(): Observable<Nomenclature> {
    return this.dialog
      .open<AddAccountingNumberToCategoryComponent>(AddAccountingNumberToCategoryComponent, {
        width: '25rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  editNomenclatureAccountingNumber(nomenclature: Nomenclature): Observable<Nomenclature> {
    return this.dialog.open<EditNomenclatureAccountingNumberComponent>(EditNomenclatureAccountingNumberComponent, {
      width: '25rem',
      height: 'auto',
      panelClass: 'modal-overflow-visible',
      data: {nomenclature},
      autoFocus: false,
      enterAnimationDuration: '250ms'
    })
      .afterClosed();
  }

  editNomenclaturePriceDialog(nomenclature: Nomenclature): Observable<Nomenclature> {
    return this.dialog.open<EditNomenclaturePriceComponent>(EditNomenclaturePriceComponent, {
      width: '25rem',
      height: 'auto',
      panelClass: 'modal-overflow-visible',
      data: {nomenclature},
      autoFocus: false,
      enterAnimationDuration: '250ms'
    })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {QuerySearch} from '@shared/models/other';
import {ProductQcProtocol, QcProtocol, QcProtocols, QrProtocolParagraph} from '../models/protocol';
import {ModalActionType} from '@shared/models/modal-action';
import {Warehouse} from '../../warehouse/models/warehouse';
import {
  CreateEditWarehouseComponent
} from '../../warehouse/modals/create-edit-warehouse/create-edit-warehouse.component';
import {CreateEditProtocolComponent} from '../modals/create-edit-protocol/create-edit-protocol.component';
import {MatDialog} from '@angular/material/dialog';
import {Nomenclature} from '@shared/models/nomenclature';
import {
  NomenclatureProtocolPickerComponent
} from '../modals/nomenclature-protocol-picker/nomenclature-protocol-picker.component';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  API_URL = environment.base_url + environment.procurement_url;

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  getForPagination(query?: QuerySearch[]): Observable<QcProtocols> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: QcProtocols }>(this.API_URL + 'qc_protocols/' + qString).pipe(map(response => {
      return response.data;
    }));
  }

  get(query?: QuerySearch[]): Observable<QcProtocol[]> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: QcProtocol[] }>(this.API_URL + 'qc_protocols/' + qString).pipe(map(response => {
      return response.data;
    }));
  }

  getOne(id): Observable<QcProtocol> {
    return this.httpClient.get<{ data: QcProtocol }>(this.API_URL + `qc_protocols/${id}/`).pipe(map(response => {
      return response.data;
    }));
  }

  create(send): Observable<QcProtocol> {
    return this.httpClient.post<{ data: QcProtocol }>(this.API_URL + 'qc_protocols/', send).pipe(map(response => {
      return response.data;
    }));
  }

  update(send): Observable<QcProtocol> {
    return this.httpClient.patch<{ data: QcProtocol }>(this.API_URL + `qc_protocols/${send.id}/`, send).pipe(map(response => {
      return response.data;
    }));
  }

  addParagraphs(paragraphs): Observable<QrProtocolParagraph[]> {
    return forkJoin(...paragraphs.map(paragraph => this.httpClient.post<{ data: QrProtocolParagraph }>(this.API_URL + 'qc_protocol_paragraphs/', paragraph)));
  }

  updateParagraphs(paragraphs): Observable<QrProtocolParagraph[]> {
    return forkJoin(...paragraphs.map(paragraph => this.httpClient.patch<{ data: QrProtocolParagraph }>(this.API_URL + `qc_protocol_paragraphs/${paragraph.id}/`, paragraph)));
  }

  deleteParagraphs(ids): Observable<QrProtocolParagraph[]> {
    return forkJoin(...ids.map(id => this.httpClient.delete<{ data: QrProtocolParagraph }>(this.API_URL + `qc_protocol_paragraphs/${id}/`)));
  }

  getParagraphs(query?: QuerySearch[]): Observable<QrProtocolParagraph[]> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: QrProtocolParagraph[] }>(this.API_URL + 'qc_protocol_paragraphs/' + qString).pipe(map(response => {
      return response.data;
    }));
  }

  getWarehouseProducts(id: number): Observable<any> {
    return this.httpClient.get<{ data: any }>(this.API_URL + `warehouse_products_qc_protocols/${id}/`).pipe(map(response => {
      return response.data;
    }));
  }

  addNomenclature(send, id): Observable<any>  {
    return this.httpClient.post<{ data: QcProtocol }>(this.API_URL + `qc_protocols/${id}/add_protocol_to_nomenclature/`, send).pipe(map(response => {
      return response.data;
    }));
  }

  productsToQc(send): Observable<any>  {
    return this.httpClient.post<{ data: any }>(environment.base_url + 'procurement/warehouse_products_qc_protocols/', send).pipe(map(response => {
      return response.data;
    }));
  }

  deleteProtocol(id): Observable<any>  {
    return this.httpClient.delete(this.API_URL + 'qc_protocols/' + `${id}/`);
  }

  saveFile(file): Observable<any>  {
    return this.httpClient.post<{ data: any }>(this.API_URL + 'qc_protocols_files/', file).pipe(map(response => {
      return response.data;
    }));
  }

  deleteFile(id): Observable<any> {
    return this.httpClient.delete(this.API_URL + `qc_protocols_files/${id}/`);
  }

  getFiles(query?: QuerySearch[]) {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: any }>(this.API_URL + `qc_protocols_files/` + qString).pipe(map(response => {
      return response.data;
    }));
  }

  downloadFile(id): Observable<any> {
    return this.httpClient.get(this.API_URL + 'qc_protocols_files/' + id + '/download/', {responseType: 'blob'});
  }

  qcSerial(send): Observable<any> {
    return this.httpClient.post(this.API_URL + 'create_update_product_by_serial/', send);
  }

  qcSerialUpdate(send): Observable<any> {
    return this.httpClient.patch(this.API_URL + 'create_update_product_by_serial/', send);
  }

  getProductsQcProtocols(query?: QuerySearch[]): Observable<ProductQcProtocol[]> {
    let qString = '';
    if (query) {
      query.forEach((element, index) => {
        if (index > 0) {
          qString += '&' + element.name + '=' + element.value;
        } else {
          qString += '?' + element.name + '=' + element.value;
        }
      });
    }

    return this.httpClient.get<{ data: ProductQcProtocol[] }>(this.API_URL + 'warehouse_products_qc_protocols/' + qString).pipe(
      map(response =>
        response.data)
    );
  }

  updateProductProtocol(send: any, id: number) {
    return this.httpClient.patch<{ data: any[] }>(this.API_URL + `warehouse_products_qc_protocols/${id}/`, send).pipe(
      map(response => response.data)
    );
  }

  createEditProtocolModal(type: ModalActionType, protocol?: QcProtocol): Observable<QcProtocol> {
    return this.dialog
      .open<CreateEditProtocolComponent>(CreateEditProtocolComponent, {
        width: '60rem',
        height: 'auto',
        data: {type, protocol},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  addNomenclatureDialog(): Observable<Nomenclature> {
    return this.dialog
      .open<NomenclatureProtocolPickerComponent>(NomenclatureProtocolPickerComponent, {
        width: '70rem',
        height: 'auto',
        data: {},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TechnicalEquipment} from '../models/technical-equipment';
import {Nomenclature} from '@shared/models/nomenclature';
import {AddTechnicalEquipmentComponent} from '../modals/add-technical-equipment/add-technical-equipment.component';
import {QuerySearch} from '@shared/models/other';
import {
  EditTechnicalEquipmentComponent
} from '../components/create-edit-product-form/components/technical-equipments-table/edit-technical-equipment/edit-technical-equipment.component';
import {Technology} from '../models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnicalEquipmentService {
  readonly API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'technical_equipment/';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) { }

  get(query?: QuerySearch[]): Observable<TechnicalEquipment[]> {
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

    return this.httpClient.get<{ data: TechnicalEquipment[] }>(this.API_URL + this.url + qString).pipe(
      map(response => response.data)
    );
  }

  create(technicalEquipment: Partial<TechnicalEquipment>): Observable<TechnicalEquipment> {
    return this.httpClient.post<{ data: TechnicalEquipment }>(this.API_URL + this.url, technicalEquipment).pipe(
      map(response => response.data)
    );
  }

  update(technicalEquipment: Partial<TechnicalEquipment>): Observable<TechnicalEquipment> {
    return this.httpClient.patch<{ data: TechnicalEquipment }>(this.API_URL + this.url + `${technicalEquipment.id}/`, technicalEquipment).pipe(
      map(response => response.data)
    );
  }

  bulk_update(nomenclatureId: number, technical_quipment: TechnicalEquipment[]): Observable<any> {
    return this.httpClient.post<{ data: TechnicalEquipment }>(this.API_URL + 'nomenclatures/', technical_quipment).pipe(
      map(response => response.data)
    );
  //  bulk_update_technical_equipments
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${id}/`);
  }

  openAddTechnicalEquipment(technologies: Technology[]): Observable<{ nomenclature_in_use: Nomenclature, quantity: number, technology: Technology }> {
    return this.dialog
      .open<AddTechnicalEquipmentComponent>(AddTechnicalEquipmentComponent, {
        width: '110rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {technologies},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  openEditTechnicalEquipment(technicalEquipment: TechnicalEquipment, technologies: Technology[]): Observable<{ nomenclature_in_use: Nomenclature, quantity: number, technology: Technology }> {
    return this.dialog
      .open<EditTechnicalEquipmentComponent>(EditTechnicalEquipmentComponent, {
        width: '50rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {technicalEquipment: technicalEquipment, technologies},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

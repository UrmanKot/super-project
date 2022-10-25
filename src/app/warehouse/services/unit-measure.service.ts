import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {UnitMeasure} from '../../product-structure/models/unit-measure';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ModalActionType} from '@shared/models/modal-action';
import {MatDialog} from '@angular/material/dialog';
import {CreateEditUnitMeasureComponent} from '../modals/create-edit-unit-measure/create-edit-unit-measure.component';

@Injectable({
  providedIn: 'root'
})
export class UnitMeasureService {

  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'units_of_measure/';

  measureUnits: UnitMeasure[];

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
  ) {
  }

  get(): Observable<UnitMeasure[]> {
    if (this.measureUnits) {
      return of(this.measureUnits);
    }

    return this.httpClient.get<{ data: UnitMeasure[] }>(this.API_URL + this.url + 'all/').pipe(
      map(response => {
        const measureUnits = response.data.map(m => {
          return {
            ...m,
            label: `${m.name} (${m.symbol})`
          };
        });
        this.measureUnits = measureUnits;

        return measureUnits;
      })
    );
  }

  create(unitMeasure: Partial<UnitMeasure>): Observable<UnitMeasure> {
    return this.httpClient.post<{ data: UnitMeasure }>(this.API_URL + this.url, unitMeasure).pipe(
      map(response => response.data)
    );
  }

  update(unitMeasure: Partial<UnitMeasure>): Observable<UnitMeasure> {
    return this.httpClient.put<{ data: UnitMeasure }>(this.API_URL + this.url + `${unitMeasure.id}/`, unitMeasure).pipe(
      map(response => response.data)
    );
  }

  delete(unitMeasure: UnitMeasure): Observable<any> {
    return this.httpClient.delete(this.API_URL + this.url + `${unitMeasure.id}/`);
  };

  createEditUnitMeasureModal(type: ModalActionType, unitMeasure?: UnitMeasure): Observable<UnitMeasure> {
    return this.dialog
      .open<CreateEditUnitMeasureComponent>(CreateEditUnitMeasureComponent, {
        width: '35rem',
        height: 'auto',
        data: {type, unitMeasure},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

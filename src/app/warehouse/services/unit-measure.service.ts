import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {UnitMeasure} from '../../product-structure/models/unit-measure';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitMeasureService {

  API_URL = environment.base_url + environment.product_structure_url;
  readonly url = 'units_of_measure/';

  measureUnits: UnitMeasure[];

  constructor(
    private httpClient: HttpClient
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
          }
        });
        this.measureUnits = measureUnits;

        return measureUnits;
      })
    );
  }

}

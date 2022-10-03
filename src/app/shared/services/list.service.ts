import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {Observable} from 'rxjs';
import {List} from '@shared/models/production-list';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  API_URL = environment.base_url + environment.production_url;
  readonly url = 'lists/';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getProductionLists(): Observable<List[]> {
    return this.httpClient.get<{ data: List[] }>(this.API_URL + 'list_creation_requests/').pipe(
      map(response => response.data)
    );
  }

  updateList(list: List): Observable<List> {
    return this.httpClient.patch<{ data: List }>(this.API_URL + 'list_creation_requests/' + list.id + '/', list).pipe(
      map(response => response.data)
    );
  }
}

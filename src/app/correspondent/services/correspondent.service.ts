import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '@env/environment';
import {Correspondent, Correspondents} from '../models/correspondent';
import {CorrespondentTypes} from '../enum/correspondent-types.enum';
import {ModalActionType} from '@shared/models/modal-action';
import {CorrespondentsCategory} from '../models/correspondents-category';
import {
  CreateEditCorrespondnetCategoryComponent
} from '../modals/create-edit-correspondnet-category/create-edit-correspondnet-category.component';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateEditCorrespondentComponent
} from '../modals/create-edit-correspondent/create-edit-correspondent.component';
import {
  UploadedDataViewerComponent
} from '../../business-trips/modals/uploaded-data-viewer/uploaded-data-viewer.component';
import {Schedule} from '../../crm/models/schedule';

@Injectable({
  providedIn: 'root'
})

export class CorrespondentService {

  clearSelectedCategories$ = new Subject();
  selectNomenclatureCategories$ = new Subject();

  API_URL = environment.base_url;
  readonly url = 'correspondent/';
  typeUrl = '';
  typeFilesUrl = '';

  constructor(
    private httpClient: HttpClient,
    private readonly dialog: MatDialog,
    ) {

  }

  get(correspondentType: CorrespondentTypes, query?: { name: string, value: any }[]): Observable<Correspondents> {
    this.setTypeUrl(correspondentType);
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
    return this.httpClient.get<{ data: Correspondents }>(this.API_URL + this.url + this.typeUrl +
      qString).pipe(map(response => {
      return response.data;
    }));
  }

  getById(correspondentType: CorrespondentTypes, id: number): Observable<Correspondent> {
    this.setTypeUrl(correspondentType);
    return this.httpClient.get<{ data: Correspondent }>(this.API_URL + this.url + this.typeUrl + id + '/').pipe(
      map(response => response.data)
    );
  }

  create(correspondentType: CorrespondentTypes, correspondent: Correspondent) {
    this.setTypeUrl(correspondentType);
    return this.httpClient.post<{ data: Correspondent }>(this.API_URL + this.url + this.typeUrl, correspondent);
  }

  update(correspondentType: CorrespondentTypes, correspondent: Correspondent) {
    this.setTypeUrl(correspondentType);
    return this.httpClient.put<{ data: Correspondent }>(this.API_URL + this.url +  this.typeUrl + correspondent.id + '/', correspondent);
  }

  delete(correspondentType: CorrespondentTypes, correspondent: Correspondent) {
    this.setTypeUrl(correspondentType);
    return this.httpClient.delete(this.API_URL + this.url +  this.typeUrl + correspondent.id + '/');
  }


  get_files(correspondentType: CorrespondentTypes, correspondentId: number) {
    this.setTypeUrl(correspondentType);
    return this.httpClient.get<{ data: any }>(this.API_URL + this.url + this.typeFilesUrl + correspondentId + '/')
      .pipe(map(response => {
      return response.data;
    }));
  }

  attach(correspondentType: CorrespondentTypes, file: FormData) {
    this.setTypeUrl(correspondentType);
    return this.httpClient
      .post<{ data: any }>(this.API_URL + this.url + this.typeFilesUrl, file)
      .pipe(map(response => {
      return response.data;
    }));
  }

  delete_file(correspondentType: CorrespondentTypes, fileId: number) {
    this.setTypeUrl(correspondentType);
    return this.httpClient.delete(this.API_URL + this.url + this.typeFilesUrl + fileId + '/');
  }

  download_file(correspondentType: CorrespondentTypes, fileId: number) {
    this.setTypeUrl(correspondentType);
    return this.httpClient.get(this.API_URL + this.url + this.typeFilesUrl + fileId + '/download/', {responseType: 'blob'})
      .pipe(map(response => {
      return response;
    }));
  }

  setTypeUrl(correspondentType: CorrespondentTypes): void {
    correspondentType === CorrespondentTypes.INCOMING ?
      this.typeUrl = 'incoming_correspondents/' :
      this.typeUrl = 'outgoing_correspondents/';

    correspondentType === CorrespondentTypes.INCOMING ?
      this.typeFilesUrl = 'incoming_correspondent_files/' :
      this.typeFilesUrl = 'outgoing_correspondent_files/';
  }

  createEditCorrespondent(type: ModalActionType, correspondentType: CorrespondentTypes, correspondent?: Correspondent): Observable<CorrespondentsCategory> {
    return this.dialog
      .open<CreateEditCorrespondentComponent>(CreateEditCorrespondentComponent, {
        width: '80rem',
        height: 'auto',
        panelClass: 'modal-overflow-visible',
        data: {type, correspondent, correspondentType},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  viewFiles(files) {
    return this.dialog
      .open<UploadedDataViewerComponent>(UploadedDataViewerComponent, {
        width: 'auto',
        height: 'auto',
        data: files,
        panelClass: 'gallery-modal',
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }
}

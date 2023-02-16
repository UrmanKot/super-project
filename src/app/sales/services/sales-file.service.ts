import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {SalesFile} from "../models/sales-chain";
import {map} from "rxjs/operators";
import {environment} from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class SalesFileService {

  API_URL = environment.base_url + environment.sales_url;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  upload(files: File[]): Observable<SalesFile[]> {
    const arrayFormData: FormData[] = [];

    files.forEach(file => {
      const formData = new FormData()
      formData.append('file', file);
      arrayFormData.push(formData)
    })

    return forkJoin(...arrayFormData.map(formData => this.httpClient.post<{ data: SalesFile }>(this.API_URL + `sales_chain_files/`, formData).pipe(
      map(response => response.data)
    )));
  }

  remove(fileId: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + `sales_chain_files/${fileId}`)
  }
}

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {InvoiceProduct} from '../../procurement/models/invoice-product';
import {OrderProduct} from '../../procurement/models/order-product';

@Injectable({
  providedIn: 'root'
})
export class QcListModalService {
  notCompatibleItems$ = new Subject<InvoiceProduct[] | OrderProduct[]>();

  constructor() { }

  updateOrderInvoiceList(items: InvoiceProduct[] | OrderProduct[]): void {
    this.notCompatibleItems$.next(items);
  }
}

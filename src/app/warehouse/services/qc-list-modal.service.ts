import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {InvoiceProduct} from '../../procurement/models/invoice-product';
import {OrderProduct} from '../../procurement/models/order-product';
import {OrderTechnicalEquipment} from '../models/order-technical-equipment';

@Injectable({
  providedIn: 'root'
})
export class QcListModalService {
  notCompatibleItems$ = new Subject<InvoiceProduct[] | OrderProduct[]>();
  notCompatibleTechnicalEquipments$ = new Subject<OrderTechnicalEquipment[]>();

  constructor() { }

  updateOrderInvoiceList(items: InvoiceProduct[] | OrderProduct[]): void {
    this.notCompatibleItems$.next(items);
  }

  updateTechnicalEquipmentList(items: OrderTechnicalEquipment[]): void {
    this.notCompatibleTechnicalEquipments$.next(items);
  }
}

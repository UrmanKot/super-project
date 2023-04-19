import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {QualityControlModalComponent} from '../modals/quality-control-modal/quality-control-modal.component';
import {
  QualityControlTechnicalEquipmentComponent
} from '../modals/quality-control-technical-equipment/quality-control-technical-equipment.component';
import {MoveQcWithSerialComponent} from '../modals/move-qc-with-serial/move-qc-with-serial.component';
import {InvoiceProduct} from '../../procurement/models/invoice-product';
import {MoveQcWithProtocolComponent} from '../modals/move-qc-with-protocol/move-qc-with-protocol.component';
import {OrderProduct} from '../../procurement/models/order-product';

@Injectable({
  providedIn: 'root'
})
export class QcService {

  constructor(
    private readonly dialog: MatDialog,
  ) {
  }

  controlProduct(entity: any, isOwnProduction = false) {
    return this.dialog
      .open<QualityControlModalComponent>(QualityControlModalComponent, {
        width: '50rem',
        data: {type: 'edit', entity, isOwnProduction},
        disableClose: true,
        autoFocus: false
      })
      .afterClosed()
      .pipe();
  }

  serializedControlProduct(product: InvoiceProduct | OrderProduct, currentCount: number, count: number, type: 'invoice' | 'order') {
    return this.dialog
      .open<MoveQcWithSerialComponent>(MoveQcWithSerialComponent, {
        width: '60rem',
        data: {product, currentCount, count, type},
        disableClose: true,
        autoFocus: false
      })
      .afterClosed()
      .pipe();
  }

  withProtocolControlProduct(product: InvoiceProduct | OrderProduct, currentCount: number, count: number, type: 'invoice' | 'order') {
    return this.dialog
      .open<MoveQcWithProtocolComponent>(MoveQcWithProtocolComponent, {
        width: '60rem',
        data: {product, currentCount, count, type},
        disableClose: true,
        autoFocus: false
      })
      .afterClosed()
      .pipe();
  }

  controlTechnicalEquipment(entity: any, isOwnProduction = false) {
    return this.dialog
      .open<QualityControlTechnicalEquipmentComponent>(QualityControlTechnicalEquipmentComponent, {
        width: '50rem',
        data: {type: 'edit', entity, isOwnProduction},
        disableClose: true,
        autoFocus: false
      })
      .afterClosed()
      .pipe();
  }
}

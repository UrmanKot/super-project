import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {QualityControlModalComponent} from '../modals/quality-control-modal/quality-control-modal.component';

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
}

import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmComponent, ConfirmType} from '@shared/modals/confirm/confirm.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private dialog: MatDialog
  ) {
  }

  confirm(type: ConfirmType = 'default', btnConfirmText: string = ''): Observable<boolean> {
    return this.dialog
      .open<ConfirmComponent>(ConfirmComponent, {
        width: '25rem',
        height: '22.5rem',
        data: {type, btnConfirmText},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }
}

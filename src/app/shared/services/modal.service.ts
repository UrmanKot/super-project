import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmComponent, ConfirmType} from '@shared/modals/confirm/confirm.component';
import {Observable} from 'rxjs';
import {GuideComponent} from '../../guide/guide/guide.component';

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

  showGuide() {
    return this.dialog
      .open<GuideComponent>(GuideComponent, {
        width: '100%',
        height: '77%',
        autoFocus: false,
        disableClose: true,
        backdropClass: 'guide-modalbox',
      })
      .afterClosed()
      .pipe();
  }
}

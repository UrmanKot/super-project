import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmComponent, ConfirmType} from '@shared/modals/confirm/confirm.component';
import {Observable} from 'rxjs';
import {GuideComponent} from '../../guide/guide/guide.component';
import {PasteImageComponent} from '@shared/modals/paste-image/paste-image.component';
import {ENomenclatureType, Nomenclature, NomenclatureImage} from '@shared/models/nomenclature';
import {ImageGalleryComponent} from '@shared/modals/image-gallery/image-gallery.component';
import {
  NomenclaturePickerModalComponent
} from '@shared/modals/nomenclature-picker-modal/nomenclature-picker-modal.component';
import {CompleteListComponent} from '@shared/modals/refactoring/complete-list/complete-list.component';
import {ListProductsComponent} from '@shared/modals/refactoring/list-products/list-products.component';
import {Overlay} from '@angular/cdk/overlay';

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

  showPasteImageModal(imageSrc: string | ArrayBuffer) {
    return this.dialog
      .open<PasteImageComponent>(PasteImageComponent, {
        width: 'auto',
        height: 'auto',
        data: imageSrc,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed()
      .pipe();
  }

  showImageGallery(images?: NomenclatureImage[], nomenclatureId?: number, activeIdx = 1) {
    return this.dialog
      .open<ImageGalleryComponent>(ImageGalleryComponent, {
        width: 'auto',
        height: 'auto',
        panelClass: 'gallery-modal',
        data: {images, nomenclatureId, activeIdx},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed()
      .pipe();
  }

  showGuide(): Observable<any> {
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

  choiceNomenclatureModal(type: ENomenclatureType = null): Observable<Nomenclature> {
    return this.dialog
      .open<NomenclaturePickerModalComponent>(NomenclaturePickerModalComponent, {
        width: '90rem',
        height: 'auto',
        data: {type},
        autoFocus: false,
        enterAnimationDuration: '250ms',
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed()
      .pipe();
  }

  completeList(entity) {
    return this.dialog
      .open<CompleteListComponent>(CompleteListComponent, {
        width: '800px',
        data: { type: 'edit', entity: entity },
        disableClose: true,
        panelClass: 'modal-overflow-visible'
      })
      .afterClosed()
      .pipe();
  }

  editListProduct(entity) {
    return this.dialog
      .open<ListProductsComponent>(ListProductsComponent, {
        width: '800px',
        data: { type: 'edit', entity: entity },
        disableClose: true,
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed()
      .pipe();
  }
}

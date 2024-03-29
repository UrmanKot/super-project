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
import {AddFileToOrderComponent} from '@shared/modals/add-file-to-order/add-file-to-order.component';
import {ChoiceDateComponent} from '@shared/modals/choice-date/choice-date.component';
import {ChoicePeriodDateComponent} from '@shared/modals/choice-period-date/choice-period-date.component';
import {ConfirmWithDetailsComponent} from '@shared/modals/confirm-with-details/confirm-with-details.component';
import {ScanNextComponent} from '@shared/modals/scan-next/scan-next.component';
import {SignatureModalComponent} from '@shared/modals/signature-modal/signature-modal.component';

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

  confirmWithDetails( itemsToDelete: string[], type: ConfirmType = 'default', btnConfirmText: string = ''): Observable<boolean> {
    return this.dialog
      .open<ConfirmWithDetailsComponent>(ConfirmWithDetailsComponent, {
        width: '30rem',
        height: 'auto',
        data: {type, btnConfirmText, itemsToDelete},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  signDocument(headerTitle: string = ''): Observable<{ result: { fullName: string, signature: File } }> {
    return this.dialog
      .open<SignatureModalComponent>(SignatureModalComponent, {
        width: '25rem',
        height: 'auto',
        data: {headerTitle},
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  scanNext(): Observable<boolean> {
    return this.dialog
      .open<ScanNextComponent>(ScanNextComponent, {
        width: '25rem',
        height: 'auto',
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  showPasteImageModal(imageSrc: string | ArrayBuffer, file: File) {
    return this.dialog
      .open<PasteImageComponent>(PasteImageComponent, {
        width: 'auto',
        height: 'auto',
        data: {imageSrc, file},
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

  showBusinessGuide(): Observable<any> {
    return this.dialog
      .open<GuideComponent>(GuideComponent, {
        width: '100%',
        height: '77%',
        autoFocus: false,
        disableClose: false,
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
        width: '54rem',
        data: {type: 'edit', entity: entity},
        disableClose: false,
        panelClass: 'modal-overflow-visible'
      })
      .afterClosed()
      .pipe();
  }

  editListProduct(entity) {
    return this.dialog
      .open<ListProductsComponent>(ListProductsComponent, {
        width: '54rem',
        data: {type: 'edit', entity: entity},
        disableClose: false,
        panelClass: 'modal-overflow-visible',
      })
      .afterClosed()
      .pipe();
  }

  openAddFileToOrderModal(orderId: number) {
    return this.dialog
      .open<AddFileToOrderComponent>(AddFileToOrderComponent, {
        width: '54rem',
        data: {orderId},
      })
      .afterClosed()
      .pipe();
  }

  openChoiceDateDialog(title: string): Observable<Date> {
    return this.dialog
      .open<ChoiceDateComponent>(ChoiceDateComponent, {
        width: '35rem',
        data: {title},
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }

  openChoicePeriodDateDialog(): Observable<{ startDate: Date, endDate: Date }> {
    return this.dialog
      .open<ChoicePeriodDateComponent>(ChoicePeriodDateComponent, {
        width: '35rem',
        panelClass: 'modal-overflow-visible',
        autoFocus: false,
      })
      .afterClosed()
      .pipe();
  }
}

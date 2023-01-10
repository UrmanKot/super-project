import {ElementRef, EventEmitter, Injectable, Output, Renderer2} from '@angular/core';
import {ModalService} from '@shared/services/modal.service';

@Injectable({
  providedIn: 'root'
})
export class PasteScreenImageService {
  @Output() imageAdded: EventEmitter<File> = new EventEmitter<File>();
  constructor(
    private readonly modalService: ModalService,
    private renderer: Renderer2
  ) { }

  pasteImage() {
    this.renderer.listen(document, 'paste', (event) => {
        const item = event.clipboardData.items[0];

        if (item.type.indexOf('image') === 0) {
          const blob = item.getAsFile();

          const reader = new FileReader();
          reader.onload = (event) => {
            this.modalService.showPasteImageModal(event.target.result, blob).subscribe(file => {
              if (file) {
                this.imageAdded.emit(file);
              }
            });
          };
          reader.readAsDataURL(blob);
        }
    });
  }
}

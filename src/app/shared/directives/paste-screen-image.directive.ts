import {Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, Renderer2} from '@angular/core';
import {ModalService} from '@shared/services/modal.service';
import {fromEventPattern, Observable, Subject, takeUntil} from 'rxjs';

@Directive({
  selector: '[pekPasteScreenImage]'
})
export class PasteScreenImageDirective implements OnDestroy{
  @Output() imageAdded: EventEmitter<File> = new EventEmitter<File>();
  @Input() trackMousePosition = true;
  isMouseOver = false;
  private destroy$ = new Subject();
  onPaste$: Observable<any>;
  constructor(
    private readonly modalService: ModalService,
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.createOnPastObservable(renderer);
    this.onPaste$.subscribe(event => {
      if (!this.trackMousePosition || this.trackMousePosition && this.isMouseOver) {
        const item = event.clipboardData.items[0];
        if (item.type.indexOf('image') === 0) {
          const blob = item.getAsFile();
          const reader = new FileReader();
          reader.onload = (event) => {
            this.modalService.showPasteImageModal(event.target.result, blob).pipe(takeUntil(this.destroy$)).subscribe(file => {
              if (file) {
                this.imageAdded.emit(file);
              }
            });
          };
          reader.readAsDataURL(blob);
        }
      }
    });
  }

  private createOnPastObservable(renderer: Renderer2) {
    let removePastEventListener: () => void;
    const createPastEventListener = (
      handler: (e: Event) => boolean | void
    ) => {
      removePastEventListener = renderer.listen("document", "paste", handler);
    };

    this.onPaste$ = fromEventPattern<Event>(createPastEventListener, () =>
      removePastEventListener()
    ).pipe(takeUntil(this.destroy$));
  }

  @HostListener('mouseenter') onMouseover() {
    this.isMouseOver = true;
  }

  @HostListener('mouseleave') onMouseLeve() {
    this.isMouseOver = false;
  }

  ngOnDestroy(): void {
    this.renderer.destroy();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

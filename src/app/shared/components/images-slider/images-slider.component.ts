import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {NomenclatureImage} from '@shared/models/nomenclature';
import {ModalService} from '@shared/services/modal.service';
import {fromEventPattern, Observable, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.scss']
})
export class ImagesSliderComponent implements OnInit, AfterViewInit {
  @Output() choiceImages: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() removeImage: EventEmitter<number> = new EventEmitter<number>();

  @Input() images: NomenclatureImage[] = [];
  @Input() width: string;
  @Input() height: string;

  @ViewChild('inputFile') inputFile: ElementRef;
  @ViewChild('slider') slider: ElementRef;
  onPaste$: Observable<any>;
  private destroy$ = new Subject();
  isImagePasteOpened = false;
  activeSlideIndex = 1;
  isInit = false;

  sliderWidth = 0;
  offsetSlider = 0;

  constructor(
    private readonly modalService: ModalService,
    private renderer: Renderer2
  ) {
    // this.createOnPastObservable(renderer);
  }

  ngOnInit(): void {
    // this.onPasteImage();
  }

  ngAfterViewInit() {
    if (this.images.length > 0) {
      this.sliderWidth = this.slider.nativeElement.offsetWidth;
    }

    setTimeout(() => this.isInit = true);
  }

  onSlideNext() {
    if (this.activeSlideIndex === this.images.length) {
      this.offsetSlider = 0;
      this.activeSlideIndex = 1;
    } else {
      this.offsetSlider = this.sliderWidth * this.activeSlideIndex;
      this.activeSlideIndex++;
    }
  }

  onSlidePrev() {
    if (this.activeSlideIndex === 1) {
      this.offsetSlider = this.sliderWidth * (this.images.length - 1);
      this.activeSlideIndex = this.images.length;
    } else {
      this.offsetSlider = (this.activeSlideIndex - 2) * this.sliderWidth;
      this.activeSlideIndex--;
    }
  }

  onImageManipulation($event: Event, files: EventTarget) {
    // @ts-ignore
    const newFiles: File[] = Array.from(files.files);

    if (newFiles.length > 0) {
      if (this.images.length === 0) {
        this.activeSlideIndex = 1;
        this.sliderWidth = this.slider.nativeElement.offsetWidth;
      }

      this.choiceImages.emit(newFiles);
      this.inputFile.nativeElement.value = '';
    }
  }

  onRemoveImage() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.removeImage.emit(this.activeSlideIndex - 1);
        if (this.activeSlideIndex !== 1) {
          this.onSlidePrev();
          this.inputFile.nativeElement.value = '';
        }
      }
    });
  }

  onPasteImage() {
    this.onPaste$.subscribe(event => {
      if (!this.isImagePasteOpened) {
        this.isImagePasteOpened = true;
        const item = event.clipboardData.items[0];

        if (item.type.indexOf('image') === 0) {
          const blob = item.getAsFile();

          const reader = new FileReader();
          reader.onload = (event) => {

            this.modalService.showPasteImageModal(event.target.result, blob).subscribe(confirm => {
              this.isImagePasteOpened = false;
              if (confirm) {

                if (this.images.length === 0) {
                  this.activeSlideIndex = 1;
                  this.sliderWidth = this.slider.nativeElement.offsetWidth;
                }

                let send: File[] = [confirm];
                this.choiceImages.emit(send);
                this.inputFile.nativeElement.value = '';
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

  ngOnDestroy(): void {
    this.renderer.destroy();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onShowFullImage() {
    this.modalService.showImageGallery(this.images, null, this.activeSlideIndex).subscribe();
  }

  fileAdded(file: File) {
    this.choiceImages.emit([file]);
  }
}

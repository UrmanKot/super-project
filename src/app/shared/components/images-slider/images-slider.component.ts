import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NomenclatureImage} from '@shared/models/nomenclature';
import {ModalService} from '@shared/services/modal.service';

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

  activeSlideIndex = 1;
  isInit = false;

  sliderWidth = 0;
  offsetSlider = 0;

  constructor(
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.onPasteImage();
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
        this.removeImage.emit(this.images[this.activeSlideIndex - 1].id);
        if (this.activeSlideIndex !== 1) {
          this.onSlidePrev();
          this.inputFile.nativeElement.value = '';
        }
      }
    });
  }

  onPasteImage() {
    document.onpaste = (pasteEvent) => {
      const item = pasteEvent.clipboardData.items[0];

      if (item.type.indexOf('image') === 0) {
        const blob = item.getAsFile();

        const reader = new FileReader();
        reader.onload = (event) => {

          this.modalService.showPasteImageModal(event.target.result).subscribe(confirm => {
            if (confirm) {
              if (this.images.length === 0) {
                this.activeSlideIndex = 1;
                this.sliderWidth = this.slider.nativeElement.offsetWidth;
              }

              const send: File[] = [blob];
              this.choiceImages.emit(send);
              this.inputFile.nativeElement.value = '';
            }
          });
        };

        reader.readAsDataURL(blob);
      }
    };
  }

  onShowFullImage() {
    this.modalService.showImageGallery(this.images, null, this.activeSlideIndex).subscribe();
  }
}

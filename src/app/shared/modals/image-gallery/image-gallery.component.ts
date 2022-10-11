import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NomenclatureImage} from '@shared/models/nomenclature';

@Component({
  selector: 'pek-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  images: NomenclatureImage[] = [];
  offsetSlider = 0;
  activeSlideIndex = 1;
  galleryWidth = 1300;

  isLoading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { images: NomenclatureImage[], nomenclatureId: number, activeIdx: number },
  ) {
  }

  ngOnInit(): void {
    if (this.data.images) {
      this.images = this.data.images;
      this.activeSlideIndex = this.data.activeIdx;

      if (this.activeSlideIndex > 1) {
        this.offsetSlider = this.galleryWidth * (this.activeSlideIndex - 1);
      }

      this.isLoading = false;
    }
  }

  onSlideNext() {
    if (this.activeSlideIndex === this.images.length) {
      this.offsetSlider = 0;
      this.activeSlideIndex = 1;
    } else {
      this.offsetSlider = this.galleryWidth * this.activeSlideIndex;
      this.activeSlideIndex++;
    }
  }

  onSlidePrev() {
    if (this.activeSlideIndex === 1) {
      this.offsetSlider = this.galleryWidth * (this.images.length - 1);
      this.activeSlideIndex = this.images.length;
    } else {
      this.offsetSlider = (this.activeSlideIndex - 2) * this.galleryWidth;
      this.activeSlideIndex--;
    }
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {environment} from '@env/environment';
import {saveAs} from 'file-saver';

export class ViewerFile {
  file: any;
  type?: 'loaded' | 'uploaded';
  extension?: 'image' | 'pdf' | 'noSupported';
}

@Component({
  selector: 'pek-uploaded-data-viewer',
  templateUrl: './uploaded-data-viewer.component.html',
  styleUrls: ['./uploaded-data-viewer.component.scss']
})
export class UploadedDataViewerComponent implements OnInit {
  dataToDisplay: ViewerFile[] = [];
  url = environment.image_path;

  offsetSlider = 0;
  activeSlideIndex = 0;
  isLoading = false;

  galleryWidth = 1300;
  constructor(
    private dialogRef: MatDialogRef<UploadedDataViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { links: any[], files: any[] },
  ) { }

  ngOnInit(): void {
    this.activeSlideIndex = 1;
    this.prepareFiles();
  }


  prepareFiles() {
    if (this.data.links) {
      this.data.links.forEach(link => {
        const imageExtensions = ['png', 'jpg', 'jpeg'];
        const pdfExtension = ['pdf'];
        const splited = link.file.split('.');
        const ext = splited[splited.length - 1];

        let extension: 'image' | 'pdf' | 'noSupported' = 'noSupported';
        if (imageExtensions.includes(ext)) {
          extension = 'image';
        }
        if (pdfExtension.includes(ext)) {
          extension = 'pdf';
        }

        this.dataToDisplay.push({file: link, type: 'uploaded', extension});
      });
    }

    if (this.data.files) {
      this.data.files.forEach(file => {
        let extension: 'image' | 'pdf' | 'noSupported' = 'noSupported';
        if (file.file.includes('image/png') || file.file.includes('image/jpeg')) {
          extension = 'image';
        }
        if (file.file.includes('application/pdf')) {
          extension = 'pdf';
        }
        this.dataToDisplay.push({file, type: 'loaded', extension});
      });
    }
  }

  onSlideNext() {
    if (this.activeSlideIndex === this.dataToDisplay.length) {
      this.offsetSlider = 0;
      this.activeSlideIndex = 1;
    } else {
      this.offsetSlider = this.galleryWidth * this.activeSlideIndex;
      this.activeSlideIndex++;
    }
  }

  onSlidePrev() {
    if (this.activeSlideIndex === 1) {
      this.offsetSlider = this.galleryWidth * (this.dataToDisplay.length - 1);
      this.activeSlideIndex = this.dataToDisplay.length;
    } else {
      this.offsetSlider = (this.activeSlideIndex - 2) * this.galleryWidth;
      this.activeSlideIndex--;
    }
  }

  downloadMyFile() {
    const currentFile = this.dataToDisplay[this.activeSlideIndex - 1];
    const url = currentFile.type === 'uploaded' ? this.url : '';
    const link = url + currentFile.file.file;
    saveAs(link);
  }

  getUrl(filePath: string): string {
    return filePath.startsWith('http') ? filePath : this.url + filePath;
  }
}

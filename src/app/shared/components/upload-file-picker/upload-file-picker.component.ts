import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BusinessTripService} from '../../../business-trips/services/business-trip.service';

@Component({
  selector: 'pek-upload-file-picker',
  templateUrl: './upload-file-picker.component.html',
  styleUrls: ['./upload-file-picker.component.scss']
})
export class UploadFilePickerComponent implements OnInit {
  @Input() files: File[] = [];
  @Input() showLabel = true;
  uploadedFiles: any[] = [];
  @Output() fileChanged: EventEmitter<File[]> = new EventEmitter<File[]>();
  constructor(
    private businessService: BusinessTripService,
  ) { }

  ngOnInit(): void {
  }

  filesSelected(files: any) {
    this.files = files.currentFiles;
    this.fileChanged.emit(this.files);
  }

  removeFile(file: any) {
  }

  clearFiles() {
    this.files = [];
    this.fileChanged.emit(this.files);
  }

  onBasicUpload($event: any) {

  }

  takePhoto() {
    this.businessService.takePhotoModal().subscribe(file => {
      if (file) {
        this.addPhotoToList(file);
      }
    });
  }

  addPhotoToList(file: File) {
    let tempFiles = [...this.files, file];
    this.files = null;
    this.files = [...tempFiles];
    tempFiles = null;
    this.fileChanged.emit(this.files);
  }
}

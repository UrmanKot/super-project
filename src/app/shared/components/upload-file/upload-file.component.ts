import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

type FileFormat = 'excel' | 'image' | 'all';

@Component({
  selector: 'pek-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Output() selectFile: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() removeFile: EventEmitter<void> = new EventEmitter<void>();
  @Input() fileFormat: FileFormat = 'all';
  @Input() multiple: boolean = false;
  @ViewChild('addFileInput') addFileInput: ElementRef;

  uploadFiles: File[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files: File[] = Array.from(event.dataTransfer.files);
    this.onSelectFile(files);
  }

  onChangeFile(files: FileList) {
    const filesArr = Array.from(files);
    this.onSelectFile(filesArr);
  }

  onSelectFile(files: File[]) {
    if (this.multiple) {
      this.uploadFiles = [...this.uploadFiles, ...files];
    } else {
      this.uploadFiles = [...files];
    }

    this.selectFile.emit(this.uploadFiles);
    this.addFileInput.nativeElement.value = '';
  }

  onRemoveFile(idx: number) {
    this.uploadFiles.splice(idx, 1);

    if (this.multiple) {
      this.selectFile.emit(this.uploadFiles);
    } else {
      this.removeFile.emit();
    }
  }

  getFileSize(size: number) {
    return Math.round(size / 1000);
  }

  getAcceptFileFormat() {
    switch (this.fileFormat) {
      case 'excel':
        return '.xls, .xlsx';
      default:
        return '';
    }
  }
}

import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {WebcamImage} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';
import {debounceTime, tap} from 'rxjs/operators';

@Component({
  selector: 'pek-take-photo-modal',
  templateUrl: './take-photo-modal.component.html',
  styleUrls: ['./take-photo-modal.component.scss']
})
export class TakePhotoModalComponent implements OnInit, AfterViewInit, OnDestroy {
  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private photoTaken: Subject<File> = new Subject<File>();
  sysImage = '';
  isPhotoTaken = false;
  constructor(
    private dialogRef: MatDialogRef<TakePhotoModalComponent>,
  ) { }

  ngOnInit(): void {
    this.photoTaken.pipe(tap(() => this.isPhotoTaken = true), debounceTime(200)).subscribe(file => {
      this.dialogRef.close(file);
    });
  }

  ngAfterViewInit() {
  }

  public getSnapshot(): void {
    this.trigger.next(void 0);
  }
  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    const file = this.makeDataUrlAsFile(this.sysImage, 'snapshot.png');
    this.photoTaken.next(file);
  }
  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  ngOnDestroy() {
  }

  makeDataUrlAsFile(dataUrl, filename) {
    const arr = dataUrl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]);

    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  fileAdded(file: File) {
    this.photoTaken.next(file);
  }

  closeCamera() {
    this.dialogRef.close(null);
  }

  loaded() {
  }
}

import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import QrScanner from 'qr-scanner';
import {auditTime, Subject} from 'rxjs';

@Component({
  selector: 'pek-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.scss']
})
export class QrCodeScannerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() scanned: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('scanner') video: ElementRef;

  scanner: QrScanner;
  isScanned = false;
  isPending = true;

  stream$ = new Subject<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.stream$.pipe(
      auditTime(1000),
    ).subscribe(data => {
      this.scanned.next(data);
    });
  }

  ngAfterViewInit() {
    document.body.style.overflow = 'hidden';
    document.querySelector<HTMLElement>('.layout').style.overflow = 'hidden';

    setTimeout(() => this.initScanner());
  }

  initScanner() {
    this.scanner = new QrScanner(this.video.nativeElement, result => this.setResult(result), {
      highlightScanRegion: true,
      highlightCodeOutline: true,
    });

    this.scanner.start().then();
  }

  setResult(result) {
    try {
      this.stream$.next(JSON.parse(result.data));
    } catch (e) {
      console.log('Not valid data found');
    }
  }

  getFrame = () => {
    const canvas = document.createElement('canvas');
    canvas.width = this.video.nativeElement.videoWidth;
    canvas.height = this.video.nativeElement.videoHeight;
    canvas.getContext('2d', {willReadFrequently: true}).drawImage(this.video.nativeElement, 0, 0);
    return canvas.toDataURL('image/png');
  };

  onCancel() {
    this.cancel.emit(true)
  }

  ngOnDestroy() {
    document.body.style.overflow = 'initial';
    document.querySelector<HTMLElement>('.layout').style.overflow = 'initial';
    this.scanner.stop();
    this.scanner.destroy();
    this.stream$.next(true);
    this.stream$.complete();
  }
}

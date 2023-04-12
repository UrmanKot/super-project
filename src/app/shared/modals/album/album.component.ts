import {Component, HostListener, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AlbumItem} from '@shared/services/album.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'pek-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlbumComponent implements OnInit, OnDestroy {

  constructor(
    private dialogRef: MatDialogRef<AlbumComponent>,
    @Inject(MAT_DIALOG_DATA) public album: AlbumItem[],
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    console.log(this.album);
  }

  print() {
    this.document.documentElement.classList.remove('cdk-global-scrollblock');
    this.document.documentElement.classList.add('print-album-page');
    window.print();
  }

  @HostListener('window:afterprint', [])
  onWindowAfterPrint() {
    this.document.documentElement.classList.remove('print-album-page');
    this.document.documentElement.classList.add('cdk-global-scrollblock');
  }

  ngOnDestroy(): void {
    this.document.documentElement.classList.remove('cdk-global-scrollblock');
  }
}

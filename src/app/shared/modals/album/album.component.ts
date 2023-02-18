import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AlbumItem} from '@shared/services/album.service';

@Component({
  selector: 'pek-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AlbumComponent>,
    @Inject(MAT_DIALOG_DATA) public album: AlbumItem[]
  ) {
  }

  ngOnInit(): void {
    console.log(this.album);
  }

}

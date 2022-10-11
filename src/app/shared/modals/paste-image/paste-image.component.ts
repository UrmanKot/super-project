import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'pek-paste-image',
  templateUrl: './paste-image.component.html',
  styleUrls: ['./paste-image.component.scss']
})
export class PasteImageComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PasteImageComponent>,
    @Inject(MAT_DIALOG_DATA) public imageSrc: string | ArrayBuffer
  ) { }

  ngOnInit(): void {
  }
}

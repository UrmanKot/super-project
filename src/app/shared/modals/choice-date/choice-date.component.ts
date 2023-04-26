import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'pek-choice-date',
  templateUrl: './choice-date.component.html',
  styleUrls: ['./choice-date.component.scss']
})
export class ChoiceDateComponent implements OnInit {
  date: Date = new Date();

  constructor(
    private dialogRef: MatDialogRef<ChoiceDateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {title: string}
  ) {
  }

  ngOnInit(): void {
  }

  onChoice() {
    this.dialogRef.close(this.date);
  }

}

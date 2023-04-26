import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'pek-choice-period-date',
  templateUrl: './choice-period-date.component.html',
  styleUrls: ['./choice-period-date.component.scss']
})
export class ChoicePeriodDateComponent implements OnInit {

  startDate: Date;
  endDate: Date;

  constructor(
    private dialogRef: MatDialogRef<ChoicePeriodDateComponent>,
  ) { }

  ngOnInit(): void {
  }

  showError() {
    return Boolean(this.startDate && this.endDate && this.startDate.getTime() > this.endDate.getTime())
  }

  onChoice() {
    const data = {
      startDate: this.startDate,
      endDate: this.endDate,
    };
    this.dialogRef.close(data);
  }

}

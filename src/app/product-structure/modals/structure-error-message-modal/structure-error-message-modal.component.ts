import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'pek-structure-error-message-modal',
  templateUrl: './structure-error-message-modal.component.html',
  styleUrls: ['./structure-error-message-modal.component.scss']
})
export class StructureErrorMessageModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<StructureErrorMessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { errorMessage: string },
  ) { }

  ngOnInit(): void {
  }

}

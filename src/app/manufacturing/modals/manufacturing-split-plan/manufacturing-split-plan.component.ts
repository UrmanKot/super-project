import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'pek-manufacturing-split-plan',
  templateUrl: './manufacturing-split-plan.component.html',
  styleUrls: ['./manufacturing-split-plan.component.scss']
})
export class ManufacturingSplitPlanComponent implements OnInit {

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<ManufacturingSplitPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {
  }

  ngOnInit(): void {
  }

}

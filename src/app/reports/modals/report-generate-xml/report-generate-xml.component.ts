import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'pek-report-generate-xml',
  templateUrl: './report-generate-xml.component.html',
  styleUrls: ['./report-generate-xml.component.scss']
})
export class ReportGenerateXmlComponent implements OnInit {

  form: FormGroup = this.fb.group({
    start_number: [null, Validators.required]
  });

  constructor(
    private dialogRef: MatDialogRef<ReportGenerateXmlComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onGenerate() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.get('start_number').value);
    }
  }
}

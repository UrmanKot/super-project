import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {finalize} from 'rxjs';
import {TechnologyService} from '../../services/technology.service';
import {Technology} from '../../models/technology';

@Component({
  selector: 'pek-edit-technology-accounting-number',
  templateUrl: './edit-technology-accounting-number.component.html',
  styleUrls: ['./edit-technology-accounting-number.component.scss']
})
export class EditTechnologyAccountingNumberComponent implements OnInit {
  form: FormGroup = this.fb.group({
    accountingNumber: [null, Validators.maxLength(8)],
  });

  isSaving = false;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { technology: Technology },
    private technologyService: TechnologyService,
    private dialogRef: MatDialogRef<EditTechnologyAccountingNumberComponent>,
  ) {
  }

  ngOnInit(): void {
    this.form.get('accountingNumber').patchValue(this.data.technology.accounting_number);
  }

  onSave() {
    this.isSaving = true;

    const send = {
      id: this.data.technology.id,
      accounting_number: this.form.get('accountingNumber').value ?? '',
    };
    this.technologyService.editAccountingNumber(send).pipe(
      finalize(() => this.isSaving = false))
      .subscribe(() => this.dialogRef.close(send));
  }

  changeNumber() {
    const value = JSON.parse(JSON.stringify(this.form.get('accountingNumber').value + ''));
    if (value.length > 8) {
      this.form.get('accountingNumber').patchValue(value.slice(0, -1));
    }
  }
}

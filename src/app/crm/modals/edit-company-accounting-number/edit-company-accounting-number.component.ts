import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Company} from '../../models/company';
import {CompanyService} from '../../services/company.service';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-edit-company-accounting-number',
  templateUrl: './edit-company-accounting-number.component.html',
  styleUrls: ['./edit-company-accounting-number.component.scss']
})
export class EditCompanyAccountingNumberComponent implements OnInit {

  form: FormGroup = this.fb.group({
    accountingNumber: [null, Validators.maxLength(8)],
  });

  isSaving = false;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { company: Company },
    private companyService: CompanyService,
    private dialogRef: MatDialogRef<EditCompanyAccountingNumberComponent>,
  ) {
  }

  ngOnInit(): void {
    this.form.get('accountingNumber').patchValue(this.data.company.accounting_number);
  }

  onSave() {
    this.isSaving = true;

    const send = {
      id: this.data.company.id,
      accounting_number: this.form.get('accountingNumber').value ?? '',
      contact_persons: [],
      categories: this.data.company.categories,
    };

    this.companyService.updateAccountingNumber(send).pipe(
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

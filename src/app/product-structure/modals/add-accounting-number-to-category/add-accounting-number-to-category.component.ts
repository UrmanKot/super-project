import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountingTypeService} from '../../../reports/services/accounting-type.service';
import {MatDialogRef} from '@angular/material/dialog';
import {finalize} from 'rxjs';

export class DescendantCategoryData {
  accounting_number: string;
  is_fixed_asset: boolean;
  is_non_ressivable: boolean;
}

@Component({
  selector: 'pek-add-accounting-number-to-category',
  templateUrl: './add-accounting-number-to-category.component.html',
  styleUrls: ['./add-accounting-number-to-category.component.scss']
})
export class AddAccountingNumberToCategoryComponent implements OnInit {

  form: FormGroup = this.fb.group({
    accountingNumber: [null, [Validators.maxLength(8), Validators.required]],
    categoryId: [null, Validators.required],
    is_fixed_asset: [false],
    is_non_ressivable: [false],
  });

  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private accountingTypeService: AccountingTypeService,
    private dialogRef: MatDialogRef<AddAccountingNumberToCategoryComponent>
  ) {
  }

  ngOnInit(): void {
  }

  getNomenclatureCategories(id: number) {
    this.form.get('categoryId').patchValue(id);
  }

  changeNumber() {
    const value = JSON.parse(JSON.stringify(this.form.get('accountingNumber').value + ''));
    if (value.length > 8) {
      this.form.get('accountingNumber').patchValue(value.slice(0, -1));
    }
  }

  onSave() {
    this.isSaving = true;
    const send: any = {
      accounting_number: this.form.get('accountingNumber').value,
      is_fixed_asset: this.form.get('is_fixed_asset').value,
      is_non_ressivable: this.form.get('is_non_ressivable').value,
    };
    this.accountingTypeService.addAccountingNumberToCategory(this.form.get('categoryId').value, send)
      .pipe(finalize(() => this.isSaving = false))
      .subscribe(() => this.dialogRef.close(true));
  }
}

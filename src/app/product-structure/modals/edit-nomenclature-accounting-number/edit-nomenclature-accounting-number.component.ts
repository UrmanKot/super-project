import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Nomenclature} from '@shared/models/nomenclature';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {CountryService} from '@shared/services/country.service';
import {finalize} from 'rxjs';
import {Country} from '@shared/models/country';

@Component({
  selector: 'pek-edit-nomenclature-accounting-number',
  templateUrl: './edit-nomenclature-accounting-number.component.html',
  styleUrls: ['./edit-nomenclature-accounting-number.component.scss']
})
export class EditNomenclatureAccountingNumberComponent implements OnInit {

  form: FormGroup = this.fb.group({
    accounting_number: [null, Validators.maxLength(8)],
    is_fixed_asset: [false],
    is_non_ressivable: [false],
    country_of_origin_default: [null],
    tariff_code: [''],
    tariff_code_checked: [''],
    weight: [0],
  });

  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private nomenclatureService: NomenclatureService,
    private countriesService: CountryService,
    @Inject(MAT_DIALOG_DATA) public data: { nomenclature: Nomenclature },
    private dialogRef: MatDialogRef<EditNomenclatureAccountingNumberComponent>
  ) {
  }

  ngOnInit(): void {
    this.form.patchValue(this.data.nomenclature);
    this.form.get('country_of_origin_default').patchValue(this.data.nomenclature.country_of_origin_default.id);
  }


  changeNumber() {
    const value = JSON.parse(JSON.stringify(this.form.get('accounting_number').value + ''));
    if (value.length > 8) {
      this.form.get('accounting_number').patchValue(value.slice(0, -1));
    }
  }

  onSave() {
    this.isSaving = true;
    const send = {
      id: this.data.nomenclature.id,
      accounting_number: this.form.get('accounting_number').value ? this.form.get('accounting_number').value.toString() : '',
      is_non_ressivable: this.form.get('is_non_ressivable').value,
      is_fixed_asset: this.form.get('is_fixed_asset').value,
      country_of_origin_default: this.form.get('country_of_origin_default').value !== null ? this.form.get('country_of_origin_default').value : null,
      tariff_code: this.form.get('tariff_code').value,
      tariff_code_checked: this.form.get('tariff_code_checked').value,
      weight: this.form.get('weight').value,
      contact_persons: []

    };
    this.nomenclatureService.updateAccountingNumber(send)
      .pipe(finalize(() => this.isSaving = false))
      .subscribe(() => this.dialogRef.close(send));
  }

  changeCountry(country: Country) {
    this.form.get('country_of_origin_default').patchValue(country?.id ?? null);
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, MaxLengthValidator, MaxValidator, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Country} from '@shared/models/country';
import {CountryService} from '@shared/services/country.service';
import {finalize} from "rxjs/operators";

@Component({
  selector: 'pek-create-edit-country',
  templateUrl: './create-edit-country.component.html',
  styleUrls: ['./create-edit-country.component.scss']
})
export class CreateEditCountryComponent implements OnInit {

  form = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
    alpha2_code: ['', [Validators.required]],
  });
  isSaving = false;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEditCountryComponent>,
    private readonly countryService: CountryService,
    @Inject(MAT_DIALOG_DATA) public data: { country: Country }
  ) { }

  ngOnInit(): void {
    if (this.data.country) {
      this.form.patchValue(this.data.country);
    }
  }

  onSave() {
    this.isSaving = true;
    if (this.form.value.id) {
      this.countryService.update(this.form.value).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.countryService.create(this.form.value).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}

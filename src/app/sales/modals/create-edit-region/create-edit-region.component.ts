import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Region} from '@shared/models/region';
import {CountryService} from '@shared/services/country.service';
import {RegionService} from '@shared/services/region.service';

@Component({
  selector: 'pek-create-edit-region',
  templateUrl: './create-edit-region.component.html',
  styleUrls: ['./create-edit-region.component.scss']
})
export class CreateEditRegionComponent implements OnInit {
  form = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
    country: [null],
  });
  isSaving: any;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEditRegionComponent>,
    private readonly regionService: RegionService,
    @Inject(MAT_DIALOG_DATA) public data: { region: Region, selectedCountry: number }
  ) {
    if (this.data.region) {
      this.form.get('id').setValue(this.data.region.id);
      this.form.get('name').setValue(this.data.region.name);
      if (this.data.region.country) {
        this.form.get('country').setValue(this.data.region.country.id);
      }
    }

    if (this.data.selectedCountry) {
      this.form.get('country').setValue(this.data.selectedCountry);
    }
  }

  ngOnInit(): void {
  }

  onSave() {
    if (this.form.value.id) {
      this.regionService.update(this.form.value).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.regionService.create(this.form.value).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}

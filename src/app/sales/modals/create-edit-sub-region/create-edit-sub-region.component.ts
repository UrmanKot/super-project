import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubRegionService} from '@shared/services/sub-region.service';
import {SubRegion} from '@shared/models/sub-region';

@Component({
  selector: 'pek-create-edit-sub-region',
  templateUrl: './create-edit-sub-region.component.html',
  styleUrls: ['./create-edit-sub-region.component.scss']
})
export class CreateEditSubRegionComponent implements OnInit {
  form = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
    subRegion: [null],
    region: [null],
    country: [null],
  });
  isSaving: any;

  constructor(
    private readonly fb: FormBuilder,
    private readonly subRegionService: SubRegionService,
    private dialogRef: MatDialogRef<CreateEditSubRegionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { countrySelected: number, subRegion: SubRegion, selectedRegion: number }
  ) { }

  ngOnInit(): void {
    if (this.data.subRegion) {
      this.form.get('id').setValue(this.data.subRegion.id);
      this.form.get('name').setValue(this.data.subRegion.name);
      if (this.data.selectedRegion) {
        this.form.get('region').setValue(this.data.selectedRegion);
      }

    }
    if (this.data.selectedRegion) {
      this.form.get('region').setValue(this.data.selectedRegion);
    }


    if (this.data.countrySelected) {
      this.form.get('country').setValue(this.data.countrySelected);
    }
  }

  onSave() {
    if (this.form.value.id) {
      this.subRegionService.update(this.form.value).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.subRegionService.create(this.form.value).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  regionSelected(regionId: number) {
      this.form.get('region').patchValue(regionId, { emitEvent: false });
  }
}

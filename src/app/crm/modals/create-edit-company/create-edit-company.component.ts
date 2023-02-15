import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../models/company';
import {Region} from '@shared/models/region';
import {Country} from '@shared/models/country';
import {SubRegion} from '@shared/models/sub-region';

@Component({
  selector: 'pek-create-edit-company',
  templateUrl: './create-edit-company.component.html',
  styleUrls: ['./create-edit-company.component.scss']
})
export class CreateEditCompanyComponent implements OnInit {
  isSaving = false;

  currentCategoriesIds = [];

  form = this.fb.group({
    name: ['', Validators.required],
    address: [''],
    comment: [''],
    tax_number: [''],
    registration_number: [''],
    categories: [[], Validators.required],
    email: [''],
    phone_number: [''],
    website: [''],
    supplier_nomenclature: [''],
    contact_persons: [[]],
    has_not_vat: [false],
    country: [null],
    region: [null],
    sub_region: [null],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly companyService: CompanyService,
    private dialogRef: MatDialogRef<CreateEditCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  { type: ModalActionType, company: Company}
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.company.id));
      this.form.patchValue(this.data.company);

      this.form.get('categories').patchValue(this.data.company.categories?.map(c => c.id));
      this.currentCategoriesIds = this.data.company.categories?.map(c => c.id);

      this.form.get('contact_persons').patchValue(this.data.company.contact_persons?.map(c => c.id));
      console.log('this.form. EDIT', this.form.value);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createCompany();
        break;
      }
      case 'edit': {
        this.editCompany();
        break;
      }
    }
  }

  createCompany() {
    let country = this.form.get('country').value;
    if (country) {
      this.form.get('country').setValue(country.id);
    }
    let region = this.form.get('region').value;
    if (region) {
      this.form.get('region').setValue(region.id);
    }
    let subRegion = this.form.get('sub_region').value;
    if (subRegion) {
      this.form.get('sub_region').setValue(subRegion.id);
    }
    let send = <Partial<Company>>this.form.value;
    this.companyService.create(send).subscribe({
      next: company => this.dialogRef.close(company),
      error: () => this.isSaving = false,
    });
  }

  editCompany() {
    let country = this.form.get('country').value;
    if (country) {
      this.form.get('country').setValue(country.id);
    }
    let region = this.form.get('region').value;
    if (region) {
      this.form.get('region').setValue(region.id);
    }
    let subRegion = this.form.get('sub_region').value;
    if (subRegion) {
      this.form.get('sub_region').setValue(subRegion.id);
    }

    const send = <Partial<Company>>this.form.value;

    this.companyService.updatePartial(send).subscribe({
      next: company => this.dialogRef.close(company),
      error: () => this.isSaving = false,
    });
  }


  onSelectCompanyCategories(ids: string) {
    if (ids) {
      this.form.get('categories').patchValue(ids.split(',').map(id => +id));
    } else {
      this.form.get('categories').patchValue(null);
    }
  }

  countrySelected(country: Country) {
    if (country) {
      this.form.get('country').setValue(country);
      this.form.get('sub_region').setValue(null);
      this.form.get('region').setValue(null);
    }
  }

  regionSelected(region: Partial<Region>) {
    this.form.get('region').setValue(region);
    this.form.get('sub_region').setValue(null);
  }

  regionSubSelected(subRegion: Partial<SubRegion>) {
    if (subRegion) {
      this.form.get('sub_region').setValue(subRegion);
    }
  }
}

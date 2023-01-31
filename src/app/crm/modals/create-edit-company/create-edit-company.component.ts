import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../models/company';
import {Region} from '@shared/models/region';

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
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly companyService: CompanyService,
    private dialogRef: MatDialogRef<CreateEditCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, company: Company }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.company.id));
      this.form.patchValue(this.data.company);

      this.form.get('categories').patchValue(this.data.company.categories?.map(c => c.id));
      this.currentCategoriesIds = this.data.company.categories?.map(c => c.id);

      this.form.get('contact_persons').patchValue(this.data.company.contact_persons?.map(c => c.id));
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
    const region = this.form.get('region').value;
    if (region) {
      this.form.get('region').setValue(region.id);
    }
    let send = <Partial<Company>>this.form.value;
    this.companyService.create(send).subscribe({
      next: company => this.dialogRef.close(company),
      error: () => this.isSaving = false,
    });
  }

  editCompany() {
    let region = this.form.get('region').value;
    if (region) {
      this.form.get('region').setValue(region.id);
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

  regionSelected(region: Region) {
    // console.log('this.form.get(\'region\')', this.form.get('region').value);
    this.form.get('region').setValue(region);
    // console.log('this.form.get(\'region\')', this.form.get('region').value);
  }
}

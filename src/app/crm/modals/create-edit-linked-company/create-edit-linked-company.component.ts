import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../models/company';
import {ContactPerson} from '@shared/models/contact-person';

@Component({
  selector: 'pek-create-edit-linked-company',
  templateUrl: './create-edit-linked-company.component.html',
  styleUrls: ['./create-edit-linked-company.component.scss']
})
export class CreateEditLinkedCompanyComponent implements OnInit {
  isSaving = false;
  isLoading = false;

  contactPersons: ContactPerson[] = [];

  form = this.fb.group({
    to_company_id: [null, [Validators.required]],
    contact_person_id: [{ value: null, disabled: true }, Validators.required],
    link_weight: [0, [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly companyService: CompanyService,
    private dialogRef: MatDialogRef<CreateEditLinkedCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {companyId: number, type: ModalActionType, company: Company }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.get('link_weight').patchValue(this.data.company.link_weight);
      this.form.get('to_company_id').patchValue(<any>this.data.company.to_company.id);
      this.form.get('contact_person_id').patchValue(<any>this.data.company.contact_person.id);

      this.form.get('contact_person_id').enable();

      this.searchContactPersons();
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createLinkedCompany();
        break;
      }
      case 'edit': {
        this.editLinkedCompany();
        break;
      }
    }
  }

  createLinkedCompany() {
    const send = <any>this.form.value;
    this.companyService.createEditLinkCompany(this.data.companyId, send).subscribe({
      next: company => this.dialogRef.close(company),
      error: () => this.isSaving = false,
    });
  }

  editLinkedCompany() {
    const send = <any>this.form.value;
    this.companyService.createEditLinkCompany(this.data.company.to_company.id, send).subscribe({
      next: company => this.dialogRef.close(company),
      error: () => this.isSaving = false,
    });
  }

  searchContactPersons() {
    const companyId = this.form.get('to_company_id').value;

    if (companyId) {
      this.isLoading = true;
      this.companyService.getById(+companyId).subscribe(company => {
        this.contactPersons = company.contact_persons.map(c => {
          return {
            ...c,
            fullName: `${c.first_name} ${c.last_name}`
          };
        });
        this.isLoading = false;
      });
    }
  }

  onSelectCompany(id: number) {
    if (id) {
      this.form.get('to_company_id').patchValue(<any>id);
      this.form.get('contact_person_id').enable();
      this.searchContactPersons();
      console.log(this.form.value);
    } else {
      this.form.get('to_company_id').patchValue(null);
      this.form.get('contact_person_id').disable();
      this.form.get('contact_person_id').patchValue(null);
      this.contactPersons = [];
    }
  }
}

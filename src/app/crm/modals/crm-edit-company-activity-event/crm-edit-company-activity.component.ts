import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventCompanyService} from '../../services/event-company.service';
import {EventCompany} from '../../models/event-company';
import {finalize} from 'rxjs';
import {CompanyActivity} from '../../models/company-activity';

@Component({
  selector: 'pek-crm-edit-company-activity-event',
  templateUrl: './crm-edit-company-activity.component.html',
  styleUrls: ['./crm-edit-company-activity.component.scss']
})
export class CrmEditCompanyActivityComponent implements OnInit {

  isSaving = false;

  form: FormGroup = this.fb.group({
    comment: ['']
  });

  constructor(
    private dialogRef: MatDialogRef<CrmEditCompanyActivityComponent>,
    private readonly fb: FormBuilder,
    private readonly eventCompanyService: EventCompanyService,
    @Inject(MAT_DIALOG_DATA) public companyActivity: CompanyActivity,
  ) {
  }

  ngOnInit(): void {
    this.form.patchValue(this.companyActivity);
  }

  onSave() {
    if (this.form.valid) {
      this.isSaving = true;

      this.eventCompanyService.update(this.companyActivity.id, this.form.value).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(eventCompany => {
        this.dialogRef.close(eventCompany);
      });
    }
  }

}

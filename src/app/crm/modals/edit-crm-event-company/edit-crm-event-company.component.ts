import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventCompany} from '../../models/event-company';
import {EventCompanyService} from '../../services/event-company.service';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-crm-edit-card-event-company',
  templateUrl: './edit-crm-event-company.component.html',
  styleUrls: ['./edit-crm-event-company.component.scss']
})
export class EditCrmEventCompanyComponent implements OnInit {
  isSaving = false;

  form: FormGroup = this.fb.group({
    comment: ['']
  });

  constructor(
    private dialogRef: MatDialogRef<EditCrmEventCompanyComponent>,
    private readonly fb: FormBuilder,
    private readonly eventCompanyService: EventCompanyService,
    @Inject(MAT_DIALOG_DATA) public eventCompany: EventCompany,
  ) {
  }

  ngOnInit(): void {
    this.form.patchValue(this.eventCompany);
  }

  onSave() {
    if (this.form.valid) {
      this.isSaving = true;

      this.eventCompanyService.update(this.eventCompany.id, this.form.value).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(eventCompany => {
        this.dialogRef.close(eventCompany);
      });
    }
  }
}

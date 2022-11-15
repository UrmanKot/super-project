import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {finalize} from 'rxjs';
import {EventContactPerson} from '../../models/event-contact-person';
import {EventContactPersonService} from '../../services/event-contact-person.service';

@Component({
  selector: 'pek-edit-crm-event-contact-person',
  templateUrl: './edit-crm-event-contact-person.component.html',
  styleUrls: ['./edit-crm-event-contact-person.component.scss']
})
export class EditCrmEventContactPersonComponent implements OnInit {

  isSaving = false;

  form: FormGroup = this.fb.group({
    comment: ['']
  });

  constructor(
    private dialogRef: MatDialogRef<EditCrmEventContactPersonComponent>,
    private readonly fb: FormBuilder,
    private readonly eventContactPersonService: EventContactPersonService,
    @Inject(MAT_DIALOG_DATA) public eventContactPerson: EventContactPerson,
  ) {
  }

  ngOnInit(): void {
    this.form.patchValue(this.eventContactPerson);
  }

  onSave() {
    if (this.form.valid) {
      this.isSaving = true;

      this.eventContactPersonService.update(this.eventContactPerson.id, this.form.value).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(eventCompany => {
        this.dialogRef.close(eventCompany);
      });
    }
  }

}

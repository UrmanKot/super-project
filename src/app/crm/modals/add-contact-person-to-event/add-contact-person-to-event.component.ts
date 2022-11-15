import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventsListService} from '../../services/events-list.service';
import {EventItem} from '../../models/event-item';
import {finalize} from 'rxjs';

@Component({
  selector: 'pek-add-contact-person-to-event',
  templateUrl: './add-contact-person-to-event.component.html',
  styleUrls: ['./add-contact-person-to-event.component.scss']
})
export class AddContactPersonToEventComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    contact_person_id: [null, [Validators.required]],
    comment: [null],
    company: [null],
  });

  constructor(
    private dialogRef: MatDialogRef<AddContactPersonToEventComponent>,
    @Inject(MAT_DIALOG_DATA) private eventId: number,
    private readonly fb: FormBuilder,
    private readonly eventListService: EventsListService,
  ) {
  }

  ngOnInit(): void {
  }

  onSave() {
    this.isSaving = true;

    this.eventListService.addContact(this.eventId, [this.form.value as Partial<EventItem>]).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(event => {
      this.dialogRef.close(event);
    });
  }

  onSelectCompany(id: number) {
    this.form.get('company').patchValue(id as any);
  }

  onSelectContactPerson(id: number) {
    this.form.get('contact_person_id').patchValue(id as any);
  }
}

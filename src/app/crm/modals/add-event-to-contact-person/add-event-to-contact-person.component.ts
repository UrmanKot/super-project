import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventsListService} from '../../services/events-list.service';
import {AdapterService} from '@shared/services/adapter.service';
import {AddEventModalType, Company} from '../../models/company';
import {finalize} from 'rxjs';
import {ContactPerson} from '@shared/models/contact-person';

@Component({
  selector: 'pek-add-event-to-contact-person',
  templateUrl: './add-event-to-contact-person.component.html',
  styleUrls: ['./add-event-to-contact-person.component.scss']
})
export class AddEventToContactPersonComponent implements OnInit {

  isSaving = false;

  form: FormGroup = this.fb.group({
    event_type: [null, [Validators.required]],
    start: [null, Validators.required],
    end: [null, Validators.required],
    contact_person_ids: [[this.data.contactPerson.id]],
    description: [''],
    company_ids: [[]],
    contact_ids: [[this.data.contactPerson.id]],
    employee_ids: [[]],
  });

  constructor(
    private dialogRef: MatDialogRef<AddEventToContactPersonComponent>,
    private readonly fb: FormBuilder,
    private readonly eventListService: EventsListService,
    private readonly adapterService: AdapterService,
    @Inject(MAT_DIALOG_DATA) public data: { type: AddEventModalType, contactPerson: ContactPerson },
  ) {
  }

  ngOnInit(): void {

  }

  onSave() {
    if (this.form.valid) {
      this.isSaving = true;
      const send = this.form.value;
      send.start = this.adapterService.dateTimeAdapter(this.form.value.start);
      send.end = this.adapterService.dateTimeAdapter(this.form.value.end);
      this.eventListService.create(send).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe(event => this.dialogRef.close(event));
    }
  }

  onSelectEventType(id: number) {
    this.form.get('event_type').patchValue(id);
  }

  onSelectEmployees(ids: number[]) {
    if (ids) {
      this.form.get('employee_ids').patchValue(ids);
    } else {
      this.form.get('employee_ids').patchValue([]);
    }
  }

  onOpenDatesEmployees() {
    this.eventListService.openEditEmployeeEventDatesModal(this.form.get('employee_ids').value, this.form.value).subscribe(data => {
      if (data) {
        this.form.patchValue(data);
      }
    })
  }

  onSetStartDate(date: Date) {
    this.form.get('start').patchValue(date);
  }

  onSetEndDate(date: Date) {
    this.form.get('end').patchValue(date);
  }

  onClearStartDate() {
    this.form.get('start').patchValue(null);
  }

  onClearEndDate() {
    this.form.get('end').patchValue(null);
  }
}

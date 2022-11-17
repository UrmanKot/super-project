import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AddEventToCompanyModalType, Company} from '../../models/company';
import {EventsListService} from '../../services/events-list.service';
import {AdapterService} from '@shared/services/adapter.service';
import {finalize} from 'rxjs';
import {CRMEmployee} from '../../models/crm-employee';

@Component({
  selector: 'pek-add-event-to-company',
  templateUrl: './add-event-to-company.component.html',
  styleUrls: ['./add-event-to-company.component.scss']
})
export class AddEventToCompanyComponent implements OnInit {

  isSaving = false;

  form: FormGroup = this.fb.group({
    event_type: [null, [Validators.required]],
    start: [null, [Validators.required]],
    end: [null, [Validators.required]],
    company_ids: [[this.data.company.id]],
    description: [''],
    // employee_ids: [[], [Validators.required]],
    contact_ids: [[]],
    is_locked_by_company: [true],
  });

  constructor(
    private dialogRef: MatDialogRef<AddEventToCompanyComponent>,
    private readonly fb: FormBuilder,
    private readonly eventListService: EventsListService,
    private readonly adapterService: AdapterService,
    @Inject(MAT_DIALOG_DATA) public data: { type: AddEventToCompanyModalType, company: Company },
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'withEmployee') {
      this.form.addControl('employee_ids', new FormControl([], Validators.required));
    }
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

  onSelectContactPersons(contactPersonsIds: number[]) {
    if (contactPersonsIds) {
      this.form.get('contact_ids').patchValue(contactPersonsIds);
    } else {
      this.form.get('contact_ids').patchValue([]);
    }
  }

  onSelectEmployees(ids: CRMEmployee[]) {
    if (ids) {
      this.form.get('employee_ids').patchValue(ids);
    } else {
      this.form.get('employee_ids').patchValue([]);
    }
  }

  onOpenDatesEmployees() {
    this.eventListService.openEditEmployeeEventDatesModal(this.form.get('employee_ids').value).subscribe(data => {
      if (data) {
        this.form.patchValue(data);
      }
    })
  }
}

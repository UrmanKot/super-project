import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventsListService} from '../../services/events-list.service';
import {AdapterService} from '@shared/services/adapter.service';
import {AddEventModalType} from '../../models/company';
import {CRMEmployee} from '../../models/crm-employee';
import {ModalActionType} from '@shared/models/modal-action';
import {EventItem} from '../../models/event-item';
import {finalize, Observable} from 'rxjs';
import {MessageService} from 'primeng/api';
import {map} from 'rxjs/operators';

@Component({
  selector: 'pek-create-edit-event',
  templateUrl: './create-edit-event.component.html',
  styleUrls: ['./create-edit-event.component.scss']
})
export class CreateEditEventComponent implements OnInit {

  isSaving = false;

  eventsLists: EventItem[] = [];
  eventId = -1;

  scheduleDays = [
    {value: 0, name: 'Monday'},
    {value: 1, name: 'Tuesday'},
    {value: 2, name: 'Wednesday'},
    {value: 3, name: 'Thursday'},
    {value: 4, name: 'Friday'},
    {value: 5, name: 'Saturday'},
    {value: 6, name: 'Sunday'},
  ];

  form: FormGroup = this.fb.group({
    id: [null],
    event_type: [null, [Validators.required]],
    start: [null, [Validators.required]],
    end: [null, [Validators.required]],
    company_ids: [[]],
    description: [''],
    contact_ids: [[]],
    employee_ids: [[]],
    is_locked_by_company: [false],
    is_scheduled: [false],
    parent: [null],
  });

  scheduleForm = this.fb.group({
    schedule_id: [null],
    start: [null, [Validators.required]],
    end: [null, [Validators.required]],
    schedule_values: [[], [Validators.required]]
  });

  constructor(
    private dialogRef: MatDialogRef<CreateEditEventComponent>,
    private readonly fb: FormBuilder,
    private readonly eventListService: EventsListService,
    private readonly adapterService: AdapterService,
    private readonly messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: { modalType: ModalActionType,
      type: AddEventModalType,
      event: EventItem,
      companyId: number,
      isLinkedEvent:boolean },
  ) {
  }

  ngOnInit(): void {
    if (this.data.companyId) {
      this.form.get('company_ids').patchValue([this.data.companyId]);
    }

    if (this.data.isLinkedEvent) {
      this.form.get('parent').patchValue(this.data.event.id);
    }

    if (this.data.modalType === 'edit') {
      this.eventId = this.data.event.id;
      this.form.get('id').patchValue(this.data.event.id);
      this.form.get('event_type').patchValue(this.data.event.event_type?.id);
      this.form.get('contact_ids').patchValue(this.data.event.on_contacts.map(el => +el.contact_person_id));
      this.form.get('company_ids').patchValue(this.data.event.on_companies.map(el => +el.company_id));
      this.form.get('is_locked_by_company').patchValue(this.data.event.is_locked_by_company);
      this.form.get('description').patchValue(this.data.event.description);
      this.form.get('start').patchValue(new Date(this.data.event.start));
      this.form.get('end').patchValue(new Date(this.data.event.end));
      this.form.get('employee_ids').patchValue(this.data.event.employee?.map(e => e.id));

      if (this.data.event.scheduler) {
        this.scheduleForm.get('schedule_values').patchValue(this.data.event.scheduler.values);
        this.scheduleForm.get('schedule_id').patchValue(this.data.event.scheduler.id);
        this.scheduleForm.get('start').patchValue(<any>new Date(this.data.event.scheduler.start));
        this.scheduleForm.get('end').patchValue(<any>new Date(this.data.event.scheduler.end));
        this.form.get('is_scheduled').patchValue(true);

        this.form.get('is_scheduled').disable();
        this.scheduleForm.get('start').disable();
        this.scheduleForm.get('end').disable();
        this.scheduleForm.get('schedule_values').disable();
      }
    }
  }

  onSave() {
    if (this.form.valid) {
      switch (this.data.modalType) {
        case 'create':
          this.onCreateEvent();
          break;
        case 'edit':
          this.onEdit();
      }
    }
  }

  onEdit() {
    if (this.form.get('employee_ids').value.length > 0) {
      this.checkEmployeesDatesBeforeAddingUpdating().subscribe(res => {
        if (res) {
          this.messageService.add({
            severity: 'error',
            summary: 'Dates colliding.',
            detail: `Check for colliding dates!`
          });
          return;
        } else {
          this.onEditEvent();
        }
      });
    } else {
      this.onEditEvent();
    }
  }

  onCreateEvent() {
    if (this.form.get('employee_ids').value.length > 0) {
      this.checkEmployeesDatesBeforeAddingUpdating().subscribe(res => {
        if (res) {
          this.messageService.add({
            severity: 'error',
            summary: 'Dates colliding.',
            detail: `Check for colliding dates!`
          });
          return;
        } else {
          this.addEvent();
        }
      });
    } else {
      this.addEvent();
    }
  }

  addEvent() {
    this.isSaving = true;
    const send = this.form.value;
    send.start = this.adapterService.dateTimeAdapter(this.form.value.start);
    send.end = this.adapterService.dateTimeAdapter(this.form.value.end);
    this.eventListService.create(send).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(event => {
      if (this.form.get('is_scheduled').value && !this.scheduleForm.get('schedule_id').value) {
        this.createScheduleFromEvent(event.id);
      } else {
        this.dialogRef.close(event);
      }
    });
  }

  checkEmployeesDatesBeforeAddingUpdating(): Observable<boolean> {
    const start = this.form.get('start').value;
    const end = this.form.get('end').value;

    if (this.form.get('employee_ids').value.length > 0) {
      const query = [
        {name: 'employee_ids', value: this.form.get('employee_ids').value},
        {name: 'get_colliding_events_events', value: true},
        {
          name: 'from_datetime',
          value: this.adapterService.dateTimeAdapter(start ?
            new Date(new Date(start).setHours(12, 0, 0)) : new Date())
        }
      ];

      if (end) {
        query.push(
          {
            name: 'to_datetime', value: this.adapterService.dateTimeAdapter(end ?
              new Date(new Date(end).setHours(12, 0, 0)) : new Date())
          }
        );
      }
      const res = this.eventListService.getShorts(query).pipe(
        map(events => {
          this.eventsLists = events;
          this.eventsLists = this.eventsLists.filter(event => event.id !== this.eventId);
          this.eventsLists.forEach(event => {
            if (start) {
              const eventStartDate = new Date(event.start);
              const eventEndDate = new Date(event.end);

              event.isDatesColliding = start <= eventEndDate && end >= eventStartDate;
            } else {
              event.isDatesColliding = false;
            }
          });
          console.log('this.eventsLists', this.eventsLists);
          return this.eventsLists.filter(el => el.isDatesColliding).length > 0;
        }));
      return res;
    }
  }

  onEditEvent() {
    if (this.form.get('is_scheduled').value) {
      const startDate = new Date(<any>this.scheduleForm.get('start').value);
      const endDate = new Date(<any>this.scheduleForm.get('end').value);
      if (startDate.getTime() >= endDate.getTime()) {
        this.messageService.add({
          severity: 'error',
          summary: 'Validation Error',
          detail: `Start time date cannot be greater than End time`
        });
        return;
      }
    }

    this.isSaving = true;
    this.eventListService.changeEvent(this.data.event.id, this.form.value).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe((res) => {
      if (this.form.get('is_scheduled').value && !this.scheduleForm.get('schedule_id').value) {
        this.createScheduleFromEvent(res.id);
      } else {
        this.dialogRef.close(res);
      }
    });
  }

  createScheduleFromEvent(eventId: number): void {
    if (!this.scheduleForm.valid) {
      return;
    }

    this.isSaving = true;

    const data = {
      schedule_values: this.scheduleForm.get('schedule_values').value,
      start: this.scheduleForm.get('start').value,
      end: this.scheduleForm.get('end').value,
    };

    this.eventListService.createScheduleFromEvent(eventId, data).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(res => {
      this.dialogRef.close(res);
    });
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
    });
  }

  onSelectCompanies(ids: string) {
    if (ids) {
      this.form.get('company_ids').patchValue(ids.split(',').map(id => +id));
    } else {
      this.form.get('company_ids').patchValue([]);
    }
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

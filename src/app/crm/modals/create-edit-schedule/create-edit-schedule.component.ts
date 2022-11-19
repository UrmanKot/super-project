import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {CrmScheduleService} from '../../services/crm-schedule.service';
import {Schedule} from '../../models/schedule';
import {CRMEmployee} from '../../models/crm-employee';

@Component({
  selector: 'pek-create-edit-schedule',
  templateUrl: './create-edit-schedule.component.html',
  styleUrls: ['./create-edit-schedule.component.scss']
})
export class CreateEditScheduleComponent implements OnInit {
  isSaving = false;

  scheduleDays = [
    {value: 0, name: 'Monday'},
    {value: 1, name: 'Tuesday'},
    {value: 2, name: 'Wednesday'},
    {value: 3, name: 'Thursday'},
    {value: 4, name: 'Friday'},
    {value: 5, name: 'Saturday'},
    {value: 6, name: 'Sunday'},
  ];

  form = this.fb.group({
    start: [null, [Validators.required]],
    end: [null, [Validators.required]],
    schedule_values: [[], [Validators.required]],
    event_type: [null, [Validators.required]],
    employee: [[]],
    description: [null, [Validators.required]],
  });

  constructor(
    private dialogRef: MatDialogRef<CreateEditScheduleComponent>,
    private crmScheduleService: CrmScheduleService,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, schedule: Schedule }
  ) {
  }

  ngOnInit(): void {

    if (this.data.type === 'edit') {
      this.form.addControl(<any>'id', new FormControl(this.data.schedule.id));
      this.form.get('start').patchValue(<any>new Date(this.data.schedule.start));
      this.form.get('end').patchValue(<any>new Date(this.data.schedule.end));
      this.form.get('description').patchValue(<any>this.data.schedule.description);
      this.form.get('event_type').patchValue(<any>this.data.schedule.event_type?.id);
      this.form.get('schedule_values').patchValue(<any>this.data.schedule.values);
      this.form.get('employee').patchValue(<any>this.data.schedule.employee.map(e => e.id));
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createSchedule();
        break;
      }
      case 'edit': {
        this.editSchedule();
        break;
      }
    }
  }

  createSchedule() {
    const send = <any>this.form.value;
    this.crmScheduleService.create(send).subscribe({
      next: schedule => this.dialogRef.close(schedule),
      error: () => this.isSaving = false,
    });
  }

  editSchedule() {
    const send = <any>this.form.value;
    this.crmScheduleService.update(send).subscribe({
      next: schedule => this.dialogRef.close(schedule),
      error: () => this.isSaving = false,
    });
  }

  onSelectEventType(id: number) {
    this.form.get('event_type').patchValue(<any>id);
  }

  onSelectEmployees(ids: number[]) {
    if (ids) {
      this.form.get('employee').patchValue(ids);
    } else {
      this.form.get('employee').patchValue([]);
    }
  }
}

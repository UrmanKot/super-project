import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventTypesService} from '../../services/event-types.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ModalActionType} from '@shared/models/modal-action';
import {EventType} from '../../models/event-type';

@Component({
  selector: 'pek-create-edit-external-event-type',
  templateUrl: './create-edit-external-event-type.component.html',
  styleUrls: ['./create-edit-external-event-type.component.scss']
})
export class CreateEditExternalEventTypeComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    google_calendar_id: [null, [Validators.required]],
    google_owner_first_name: [null],
    google_owner_last_name: [null],
    color_hex: ['#3788d8'],
    profiles_ids: [[]],
    google_owner_gmail: [null, [Validators.email]],
  });

  constructor(
    private dialogRef: MatDialogRef<CreateEditExternalEventTypeComponent>,
    private eventTypesService: EventTypesService,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, eventType: EventType }
  ) { }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.data.eventType.color_hex = this.data.eventType.color_hex ? this.data.eventType.color_hex : '#3788d8';
      this.form.addControl(<any>'id', new FormControl(this.data.eventType.id));
      this.form.patchValue(<any>this.data.eventType);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createEventType();
        break;
      }
      case 'edit': {
        this.editEventType();
        break;
      }
    }
  }

  createEventType() {
    const send = <any>this.form.value;
    this.eventTypesService.addCalendarFromGoogle(send).subscribe({
      next: type => this.dialogRef.close(type),
      error: () => this.isSaving = false,
    });
  }

  editEventType() {
    const send = <any>this.form.value;
    this.eventTypesService.update(send).subscribe({
      next: type => this.dialogRef.close(type),
      error: () => this.isSaving = false,
    });
  }

}

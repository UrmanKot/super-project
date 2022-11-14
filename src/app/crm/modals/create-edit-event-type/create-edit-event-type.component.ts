import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {EventTypesService} from '../../services/event-types.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {EventType} from '../../models/event-type';
import {CRMEmployee} from '../../models/crm-employee';

@Component({
  selector: 'pek-create-edit-event-type',
  templateUrl: './create-edit-event-type.component.html',
  styleUrls: ['./create-edit-event-type.component.scss']
})
export class CreateEditEventTypeComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    name: [null, [Validators.required]],
    description: [null, Validators.required],
    google_calendar_id: [null],
    google_owner_first_name: [null],
    google_owner_last_name: [null],
    google_owner_gmail: [null],
    profiles_ids: this.fb.array([
      // this.fb.group({
      //   profile_id: [null, Validators.required],
      //   employees_ids: [null, Validators.required],
      // })
    ], Validators.required),
    is_inner: [true],
    color_hex: ['#3788d8', Validators.required]
  });

  constructor(
    private dialogRef: MatDialogRef<CreateEditEventTypeComponent>,
    private eventTypesService: EventTypesService,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, eventType: EventType }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.data.eventType.color_hex = this.data.eventType.color_hex ? this.data.eventType.color_hex : '#3788d8';
      this.form.addControl(<any>'id', new FormControl(this.data.eventType.id));
      this.form.patchValue(<any>this.data.eventType);

      if (this.data.eventType.access_users.length > 0) {
        this.data.eventType.access_users.forEach(user => {
          (this.form.get('profiles_ids') as FormArray).push(this.fb.group({
            // @ts-ignore
            profile_id: [user.user_profile.id, Validators.required],
            // @ts-ignore
            employees_ids: [user.access_users_employees.map(u => u.employee.id), Validators.required],
          }));
        });
      }
    }

    if (this.data.type === 'create') {
      (this.form.get('profiles_ids') as FormArray).push(this.fb.group({
        profile_id: [null, Validators.required],
        employees_ids: [[], Validators.required],
      }));
    }
  }

  get users() {
    return this.form.get('profiles_ids') as FormArray;
  }

  addUser() {
    (this.form.get('profiles_ids') as FormArray).push(this.fb.group({
      profile_id: [null, Validators.required],
      employees_ids: [[], Validators.required],
    }));
  }

  removeUser(index: number) {
    (this.form.get('profiles_ids') as FormArray).removeAt(index);
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
    this.eventTypesService.create(send).subscribe({
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


  onSelectUserProfile(userProfileId: number, user: AbstractControl<any>) {
    user.get('profile_id').patchValue(userProfileId);
  }

  onSelectEmployees(employees: CRMEmployee[], user: AbstractControl<any>) {
    if (employees) {
      user.get('employees_ids').patchValue(employees.map(e => e.id));
    } else {
      user.get('employees_ids').patchValue(null);
    }
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventTypesService} from '../../services/event-types.service';
import {ModalActionType} from '@shared/models/modal-action';
import {EventType} from '../../models/event-type';
import {UserProfile} from '../../models/user-profile';
import {UserProfileService} from '../../services/user-profile.service';

@Component({
  selector: 'pek-create-edit-user-profile',
  templateUrl: './create-edit-user-profile.component.html',
  styleUrls: ['./create-edit-user-profile.component.scss']
})
export class CreateEditUserProfileComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    first_name: [null, Validators.required],
    last_name: [null, Validators.required],
    gmail: [null, Validators.required],
  });

  constructor(
    private dialogRef: MatDialogRef<CreateEditUserProfileComponent>,
    private userProfileService: UserProfileService,
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, userProfile: UserProfile }
  ) { }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl(<any>'id', new FormControl(this.data.userProfile.id));
      this.form.patchValue(<any>this.data.userProfile);
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
    this.userProfileService.create(send).subscribe({
      next: userProfile => this.dialogRef.close(userProfile),
      error: () => this.isSaving = false,
    });
  }

  editEventType() {
    const send = <any>this.form.value;
    this.userProfileService.update(send).subscribe({
      next: userProfile => this.dialogRef.close(userProfile),
      error: () => this.isSaving = false,
    });
  }

}

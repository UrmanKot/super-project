import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'pek-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    username: ['', Validators.required],
    email: [''],
    first_name: [''],
    last_name: ['',],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private dialogRef: MatDialogRef<CreateEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, user: User }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('password' as any, this.fb.control(''))
      this.form.addControl('id' as any, new FormControl(this.data.user.id));
      this.form.patchValue(<any>this.data.user);
      this.form.get('username').disable();
    } else {
      this.form.addControl('password' as any, this.fb.control(null, Validators.required))
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createUser();
        break;
      }
      case 'edit': {
        this.editUser();
        break;
      }
    }
  }

  createUser() {
    const send = <any>this.form.value;
    this.userService.createUser(send).subscribe({
      next: user => this.dialogRef.close(true),
      error: () => this.isSaving = false,
    });
  }

  editUser() {
    const send = <any>this.form.value;

    if (!send.password) {
      delete send.password
    }

    if (!send.first_name && !this.data.user.first_name) {
      delete send.first_name
    }

    if (!send.email && !this.data.user.email) {
      delete send.email
    }

    if (!send.last_name && !this.data.user.last_name) {
      delete send.last_name
    }

    this.userService.editUser(send).subscribe({
      next: user => this.dialogRef.close(true),
      error: () => this.isSaving = false,
    });
  }
}

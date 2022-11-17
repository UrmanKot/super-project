import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {ContactPerson} from '@shared/models/contact-person';
import {ContactPersonService} from '../../services/contact-person.service';

@Component({
  selector: 'pek-create-edit-contact-person',
  templateUrl: './create-edit-contact-person.component.html',
  styleUrls: ['./create-edit-contact-person.component.scss']
})
export class CreateEditContactPersonComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    first_name: [null, [Validators.required]],
    last_name: [null, [Validators.required]],
    email: ['', [Validators.email]],
    position: [''],
    phone_number: [''],
    comment: [''],
    company: [this.data.companyId],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly contactPersonService: ContactPersonService,
    private dialogRef: MatDialogRef<CreateEditContactPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { companyId: number, type: ModalActionType, contactPerson: ContactPerson }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.addControl('id' as any, new FormControl(this.data.contactPerson.id));
      this.form.patchValue(<any>this.data.contactPerson);
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createContactPerson();
        break;
      }
      case 'edit': {
        this.editContactPerson();
        break;
      }
    }
  }

  createContactPerson() {
    const send = <any>this.form.value;
    this.contactPersonService.create(send).subscribe({
      next: contactPerson => this.dialogRef.close(contactPerson),
      error: () => this.isSaving = false,
    });
  }

  editContactPerson() {
    const send = <any>this.form.value;
    this.contactPersonService.update(send).subscribe({
      next: contactPerson => this.dialogRef.close(contactPerson),
      error: () => this.isSaving = false,
    });
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModalActionType} from '@shared/models/modal-action';
import {ContactPerson} from '@shared/models/contact-person';
import {ContactPersonService} from '../../services/contact-person.service';

@Component({
  selector: 'pek-create-edit-linked-contact',
  templateUrl: './create-edit-linked-contact.component.html',
  styleUrls: ['./create-edit-linked-contact.component.scss']
})
export class CreateEditLinkedContactComponent implements OnInit {

  isSaving = false;

  form = this.fb.group({
    to_contact: [null, [Validators.required]],
    link_weight: [0, [Validators.required]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateEditLinkedContactComponent>,
    private readonly contactPersonService: ContactPersonService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, person: ContactPerson, contactPerson: any }
  ) {
  }

  ngOnInit(): void {
    if (this.data.type === 'edit') {
      this.form.get('link_weight').patchValue(this.data.contactPerson.link_weight);
      this.form.get('to_contact').patchValue(this.data.contactPerson.to_contact);
      this.form.addControl(<any>'from_contact', new FormControl(this.data.contactPerson.from_contact.id));
    }
  }

  onSave() {
    this.isSaving = true;

    switch (this.data.type) {
      case 'create': {
        this.createLinkedContact();
        break;
      }
      case 'edit': {
        this.editLinkedContact();
        break;
      }
    }
  }

  createLinkedContact() {
    const send = <Partial<ContactPerson>>this.form.value;
    this.contactPersonService.linkContact(this.data.person.id, send).subscribe({
      next: contactPerson => this.dialogRef.close(contactPerson),
      error: () => this.isSaving = false,
    });
  }

  editLinkedContact() {
    const send = <Partial<ContactPerson>>this.form.value;
    this.contactPersonService.linkContact(this.data.person.id, send).subscribe({
      next: contactPerson => this.dialogRef.close(contactPerson),
      error: () => this.isSaving = false,
    });
  }

  onSelectContactPerson(id: number) {
    this.form.get('to_contact').patchValue(<any>id);
  }

  onSelectContactPersonFromContact(id: number) {
    this.form.get('from_contact').patchValue(<never>id);
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventCompany, Impression} from '../../models/event-company';
import {EventCompanyService} from '../../services/event-company.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'pek-event-company-set-state',
  templateUrl: './event-company-set-state.component.html',
  styleUrls: ['./event-company-set-state.component.scss']
})
export class EventCompanySetStateComponent implements OnInit {
  disabled: boolean;
  Impression = Impression;

  form: FormGroup
  constructor(
    private readonly fb: FormBuilder,
    private readonly eventCompanyService: EventCompanyService,
    private dialogRef: MatDialogRef<EventCompanySetStateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { eventCompany: EventCompany },
  ) {
    this.form = this.fb.group({
      id: [null, Validators.required],
      impression: [null, Validators.required],
    });
    this.form.get('id').setValue(this.data.eventCompany.id)
  }

  ngOnInit(): void {
  }

  update() {

  }

  onAccept() {
    if(this.form.valid) {
      this.data.eventCompany.impression = this.form.get('impression').value;
      this.eventCompanyService.update(this.data.eventCompany.id, {is_done: true, impression: this.form.get('impression').value})
        .subscribe(() => this.dialogRef.close(({ eventCompany: this.data.eventCompany})));
    }
  }
}

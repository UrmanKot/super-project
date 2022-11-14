import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EventsListService} from '../../services/events-list.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {finalize} from 'rxjs';
import {EventItem} from '../../models/event-item';

@Component({
  selector: 'pek-add-company-to-event',
  templateUrl: './add-company-to-event.component.html',
  styleUrls: ['./add-company-to-event.component.scss']
})
export class AddCompanyToEventComponent implements OnInit {
  isSaving = false;

  form = this.fb.group({
    company_id: [null, Validators.required],
    comment: [null],
  });

  constructor(
    private dialogRef: MatDialogRef<AddCompanyToEventComponent>,
    @Inject(MAT_DIALOG_DATA) private eventId: number,
    private readonly fb: FormBuilder,
    private readonly eventListService: EventsListService,
  ) {
  }

  ngOnInit(): void {
    console.log(this.eventId);
  }

  onSave() {
    this.isSaving = true;

    this.eventListService.addCompany(this.eventId, [this.form.value as Partial<EventItem>]).pipe(
      finalize(() => this.isSaving = false)
    ).subscribe(event => {
      this.dialogRef.close(event);
    });
  }

  onSelectCompany(id: number) {
    this.form.get('company_id').patchValue(id as any);
  }
}

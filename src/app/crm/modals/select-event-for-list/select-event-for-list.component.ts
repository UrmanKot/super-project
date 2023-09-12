import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventsListService} from '../../services/events-list.service';
import {takeUntil} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {AdapterService} from '@shared/services/adapter.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {EventItem} from '../../models/event-item';
import {ENomenclatureApproval, ENomenclatureType} from '@shared/models/nomenclature';
import {debounceTime} from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'pek-select-event-for-list',
  templateUrl: './select-event-for-list.component.html',
  styleUrls: ['./select-event-for-list.component.scss']
})
export class SelectEventForListComponent implements OnInit {
  date: Date;
  isLoading = true;

  query: QuerySearch[] = [];
  eventsList: EventItem[] = [];
  selectedEvent: EventItem;

  searchForm: FormGroup = this.fb.group({
    page: [1],
    date: []
  });
  constructor(
    private readonly fb: FormBuilder,
    private eventsListService: EventsListService,
    private adapterService: AdapterService,
    private dialogRef: MatDialogRef<SelectEventForListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { event?: EventItem },
  ) { }

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(untilDestroyed(this), debounceTime(200)).subscribe(() => {
        this.dateChanged();
    });
  }

  getEvents() {
    this.eventsListService.get(this.query).pipe(
      untilDestroyed(this)
    ).subscribe(eventsList => {
      eventsList.sort((a, b) => {
        b.start = new Date(b.start);
        a.start = new Date(a.start);
        return b.start.getTime() - a.start.getTime();
      });

      this.eventsList = eventsList.filter(event => event.on_companies.length > 0);
      this.isLoading = false;
    });
  }

  dateChanged() {
    this.query = [];
    this.isLoading = true;
    this.query.push({
      name: 'start_end_range_after',
      value: this.adapterService.dateAdapter(this.searchForm.get('date').value),
    });

    this.query.push({
      name: 'start_end_range_before',
      value: this.adapterService.dateAdapter(this.searchForm.get('date').value),
    });

    this.query.push({
      name: 'hide_auto_events',
      value: true,
    });

    this.getEvents();
  }

  onAccept() {
    this.dialogRef.close({event: this.selectedEvent})
  }
}

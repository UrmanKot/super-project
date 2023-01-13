import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {Status} from '../../models/status';
import {StatusService} from '../../services/status.service';

@Component({
  selector: 'pek-statuses-picker',
  templateUrl: './statuses-picker.component.html',
  styleUrls: ['./statuses-picker.component.scss']
})
export class StatusesPickerComponent implements OnInit {
  @Output() selectStatuses: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() accountingType: number;

  isLoading = true;
  statuses: Status[] = [];
  selectedStatuses: Status[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly statusService: StatusService,
  ) {
  }

  ngOnInit(): void {
    this.statusService.get([
      {name: 'accounting_type', value: this.accountingType}
    ]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(statuses => {
      this.statuses = statuses;
      this.isLoading = false;
    });
  }

  onSelectStatuses(statuses: Status[]) {
    if (statuses) {
      this.selectStatuses.emit(statuses.map(s => s.id));
    } else {
      this.selectStatuses.emit(null);
    }
  }
}

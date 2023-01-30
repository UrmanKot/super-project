import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {Status} from '../../../procurement/models/status';
import {StatusService} from '../../../procurement/services/status.service';

@Component({
  selector: 'pek-multi-statuses-picker',
  templateUrl: './multi-statuses-picker.component.html',
  styleUrls: ['./multi-statuses-picker.component.scss']
})
export class MultiStatusesPickerComponent implements OnInit {
  @Output() selectStatuses: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() isFinalStatusSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
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
      console.log('statuses', this.statuses);
      this.isLoading = false;
    });
  }

  onSelectStatuses(statuses: Status[]) {
    if (statuses) {
      const isOnStockSelected = statuses.findIndex(status => status.is_final) > -1;
      this.isFinalStatusSelected.emit(isOnStockSelected);
      this.selectStatuses.emit(statuses.map(s => s.id));
    } else {
      this.isFinalStatusSelected.emit(false);
      this.selectStatuses.emit(null);
    }
  }
}

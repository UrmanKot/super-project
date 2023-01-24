import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject, switchMap} from 'rxjs';
import {Status} from '../../../procurement/models/status';
import {StatusService} from '../../../procurement/services/status.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'pek-statuses-picker',
  templateUrl: './statuses-picker.component.html',
  styleUrls: ['./statuses-picker.component.scss']
})
export class StatusesPickerComponent implements OnInit {
  @Output() selectStatus: EventEmitter<number> = new EventEmitter<number>();
  @Input() currentStatusId: number;
  @Input() accountingType: number;
  isLoading = true;
  statuses: Status[] = [];
  selectedStatusId: number;

  get$ = new BehaviorSubject('');

  constructor(
    private readonly statusService: StatusService,
  ) {
  }

  ngOnInit(): void {
    if (this.currentStatusId) {
      this.selectedStatusId = this.currentStatusId;
    }

    this.get$.pipe(
      switchMap(() => this.statusService.get([
        {name: 'accounting_type', value: this.accountingType}
      ])),
      tap(statuses => this.statuses = statuses),
      tap(() => this.isLoading = false)
    ).subscribe();
  }

  onSelectStatus() {
    this.selectStatus.emit(this.selectedStatusId);
  }
}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {SalesStatus} from '../../../sales/models/sales-chain';
import {SalesStatusService} from '../../../sales/services/sales-status.service';

@Component({
  selector: 'pek-multi-sales-status-picker',
  templateUrl: './multi-sales-status-picker.component.html',
  styleUrls: ['./multi-sales-status-picker.component.scss']
})
export class MultiSalesStatusPickerComponent implements OnInit, OnChanges {

  @Input() isDisabled = false;
  @Input() showNew = false;
  @Input() currentSelectedStatuses: number[];
  @Output() selectStatuses: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectNumericStatuses: EventEmitter<number[]> = new EventEmitter<number[]>();

  isLoading = true;
  statuses: Partial<SalesStatus>[] = [];
  selectedStatuses: Partial<SalesStatus>[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly salesStatusService: SalesStatusService,
  ) {
  }

  ngOnInit(): void {
    this.salesStatusService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(statuses => {
      this.statuses = statuses;
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('currentSelectedStatuses' && this.statuses) {
      this.selectedStatuses = [];
      this.findStatuses();
    }
  }

  onSelectStatuses() {
    if (this.selectedStatuses === null || this.selectedStatuses?.length === 0) {
      this.selectStatuses.emit(null);
      this.selectNumericStatuses.emit(null);
      this.currentSelectedStatuses = null;
    } else {
      this.selectStatuses.emit(this.selectedStatuses.map(c => c.id).join(','));
      this.currentSelectedStatuses = this.selectedStatuses.map(c => c.id);
      this.selectNumericStatuses.emit(this.selectedStatuses.map(c => c.id));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private findStatuses() {
    if (this.currentSelectedStatuses?.length > 0) {
      this.currentSelectedStatuses.forEach(id => {
        const foundStatus = this.statuses.find(t => t.id === id);

        if (foundStatus) {
          this.selectedStatuses.push(foundStatus);
        }
      });
    }
  }
}

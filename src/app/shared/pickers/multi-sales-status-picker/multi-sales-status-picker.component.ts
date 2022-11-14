import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {SalesStatus} from '../../../sales/models/sales-chain';
import {SalesStatusService} from '../../../sales/services/sales-status.service';

@Component({
  selector: 'pek-multi-sales-status-picker',
  templateUrl: './multi-sales-status-picker.component.html',
  styleUrls: ['./multi-sales-status-picker.component.scss']
})
export class MultiSalesStatusPickerComponent implements OnInit {

  @Input() isDisabled = false;
  @Output() selectStatuses: EventEmitter<string> = new EventEmitter<string>();

  isLoading = true;
  companies: Partial<SalesStatus>[] = [];
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
      this.companies = statuses;
      this.isLoading = false;
    });
  }

  onSelectStatuses() {
    if (this.selectedStatuses === null || this.selectedStatuses?.length === 0) {
      this.selectStatuses.emit(null);
    } else {
      this.selectStatuses.emit(this.selectedStatuses.map(c => c.id).join(','));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

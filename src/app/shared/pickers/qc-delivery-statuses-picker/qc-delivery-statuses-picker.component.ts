import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {QcDeliveryStatus} from '../../../procurement/models/qc-delivery-status';
import {QcDeliveryStatusService} from '../../../procurement/services/qc-delivery-status.service';

@Component({
  selector: 'pek-qc-delivery-statuses-picker',
  templateUrl: './qc-delivery-statuses-picker.component.html',
  styleUrls: ['./qc-delivery-statuses-picker.component.scss']
})
export class QcDeliveryStatusesPickerComponent implements OnInit {
  @Output() selectStatuses: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() isFinalStatusSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() accountingType: number;

  isLoading = true;
  qcDeliveryStatuses: QcDeliveryStatus[] = [];
  selectedStatuses: QcDeliveryStatus[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly qcDeliveryStatusService: QcDeliveryStatusService,
  ) {
  }

  ngOnInit(): void {
    this.qcDeliveryStatusService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(qcDeliveryStatuses => {
      this.qcDeliveryStatuses = qcDeliveryStatuses;
      this.isLoading = false;
    });
  }

  onChoiceQcDeliveryStatuses(qcDeliveryStatuses: any) {
    if (qcDeliveryStatuses) {
      this.selectStatuses.emit(qcDeliveryStatuses.map(s => s.id));
    } else {
      this.selectStatuses.emit(null);
    }
  }
}
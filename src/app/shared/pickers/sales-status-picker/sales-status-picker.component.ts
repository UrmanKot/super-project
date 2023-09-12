import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {take} from 'rxjs/operators';
import {SalesStatusService} from '../../../sales/services/sales-status.service';
import {SalesChainStatus, SalesStatus} from '../../../sales/models/sales-chain';

@Component({
  selector: 'pek-sales-status-picker',
  templateUrl: './sales-status-picker.component.html',
  styleUrls: ['./sales-status-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SalesStatusPickerComponent), multi: true}]
})
export class SalesStatusPickerComponent implements OnInit, ControlValueAccessor {
  @Output() valueChange = new EventEmitter<number>();
  @Input() status: number;
  @Input() isDisabled = false;

  statuses: SalesChainStatus[];
  isLoading = true;

  constructor(
    private readonly salesStatusService: SalesStatusService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.salesStatusService
      .get()
      .pipe(take(1))
      .subscribe((res) => {
        this.statuses = res;
        this.isLoading = false;
      });
  }

  onChange(status: number) {
    this.setValue(status);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(status: number) {
    this.status = status;
    this.valueChange.emit(this.status);
  }

  writeValue(obj: any): void {
    this.status = obj;
  }
}

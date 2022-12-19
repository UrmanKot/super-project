import {Component, EventEmitter, forwardRef, OnInit, Output} from '@angular/core';
import {BusinessTripStatus} from '../../../models/business-trip-status.enum';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'pek-business-trips-multi-status-picker',
  templateUrl: './business-trips-multi-status-picker.component.html',
  styleUrls: ['./business-trips-multi-status-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => BusinessTripsMultiStatusPickerComponent), multi: true}]
})
export class BusinessTripsMultiStatusPickerComponent implements OnInit, ControlValueAccessor {

  @Output() valueChange = new EventEmitter<string[]>();
  selectedStatuses: string[];

  statuses = [
    {
      value: BusinessTripStatus.VERIFIED,
      title: 'Verified'
    },
    {
      value: BusinessTripStatus.NEED_VERIFICATION,
      title: 'Need Verified'
    },
    {
      value: BusinessTripStatus.NEW,
      title: 'In Progress'
    },
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onChange(employees: string[]) {
    this.setValue(employees);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(employees: string[]) {
    this.selectedStatuses = employees;
    this.valueChange.emit(this.selectedStatuses);
  }

  writeValue(obj: any): void {
    this.selectedStatuses = obj;
  }
}

import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'pek-vehicle-type-picker',
  templateUrl: './vehicle-type-picker.component.html',
  styleUrls: ['./vehicle-type-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => VehicleTypePickerComponent),
    multi: false
  }]
})
export class VehicleTypePickerComponent implements OnInit, ControlValueAccessor {
  @Input() type: string;
  @Output() valueChange = new EventEmitter<string>();
  types = [
    {
      id: '0',
      value: 'Without'
    },
    {
      id: '1',
      value: 'Private'
    },
    {
      id: '2',
      value: 'Rent'
    },
    {
      id: '3',
      value: 'Company Car'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onChange(position: string) {
    this.setValue(position);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(type: string) {
    this.type = type;
    this.valueChange.emit(this.type);
  }

  writeValue(obj: any): void {
    this.type = obj;
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShiftTypes} from '../../enums/shift-types.enum';

@Component({
  selector: 'pek-shift-by-types',
  templateUrl: './shift-by-types.component.html',
  styleUrls: ['./shift-by-types.component.scss']
})
export class ShiftByTypesComponent implements OnInit {

  @Output() valueChange  = new EventEmitter<string>();
  types: { value: string, name: string }[] = [
    {
      value: ShiftTypes.HOURS,
      name: 'HOURS'
    },
    {
      value: ShiftTypes.DAYS,
      name: 'DAYS'
    },
    {
      value: ShiftTypes.WEEKS,
      name: 'WEEKS'
    },
    {
      value: ShiftTypes.MONTHS,
      name: 'MONTHS'
    },
  ];
  @Input() type: string;
  @Input() isDisabled = false;

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
    console.log('this.type', this.type);
    this.valueChange.emit(this.type);
  }

  writeValue(obj: any): void {
    this.type = obj;
  }

}

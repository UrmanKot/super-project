import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CompanyService} from "../../../crm/services/company.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'pek-accounting-number-picker',
  templateUrl: './accounting-number-picker.component.html',
  styleUrls: ['./accounting-number-picker.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AccountingNumberPickerComponent), multi: true},
  ]
})
export class AccountingNumberPickerComponent implements OnInit, ControlValueAccessor {
  @Input() value: number;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  isLoading = true;
  numbers: any[] = [];
  number: number;

  constructor(
    private readonly companyService: CompanyService
  ) {
  }

  ngOnInit(): void {
    this.companyService.getAccountingNumbers().pipe(
      tap(numbers => this.numbers = numbers.map(n => {
        return {id: n};
      })),
      tap(() => this.isLoading = false)
    ).subscribe()
  }

  writeValue(id: number) {
    this.setValue(id)
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  private setValue(id: number) {
    this.number = id;
    this.valueChange.emit(this.number);
  }

  onChange(id: number) {
    this.setValue(id);
  }

}

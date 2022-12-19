import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {take} from 'rxjs/operators';
import {Currency} from '@shared/models/currency';
import {CurrenciesService} from '@shared/services/currencies.service';

@Component({
  selector: 'pek-currency-picker',
  templateUrl: './currency-picker.component.html',
  styleUrls: ['./currency-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CurrencyPickerComponent), multi: true}]
})
export class CurrencyPickerComponent implements OnInit, ControlValueAccessor {
  @Output() valueChange = new EventEmitter<Currency>();
  @Input() currency: string;
  @Input() showClear: boolean;
  @Input() isDisabled: boolean;

  currencies: Currency[];
  isLoading = true;

  constructor(
    private currencyService: CurrenciesService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.currencyService
      .get()
      .pipe(take(1))
      .subscribe((res) => {
        this.currencies = res;
        this.isLoading = false;
      });
  }

  onChange(value: string) {
    this.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(value: string) {
    this.currency = value;
    this.valueChange.emit(this.currencies.find(currency => currency.code === this.currency));
  }

  writeValue(obj: any): void {
    this.currency = obj;
  }
}

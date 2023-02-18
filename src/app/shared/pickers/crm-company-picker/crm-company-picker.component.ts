import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {take} from 'rxjs/operators';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Country} from '@shared/models/country';
import {CountryService} from '@shared/services/country.service';

@Component({
  selector: 'pek-crm-company-picker',
  templateUrl: './crm-company-picker.component.html',
  styleUrls: ['./crm-company-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CrmCompanyPickerComponent), multi: false}]
})
export class CrmCompanyPickerComponent implements OnInit, ControlValueAccessor {

  @Output() valueChange = new EventEmitter<Country>();
  @Input() country: number;
  @Input() selectedCountry: Country;
  @Input() placeholder = 'Choose Country';
  @Input() showClear: boolean = true;

  countries: Country[];
  isLoading = true;

  constructor(
    private countryService: CountryService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.countryService
      .get()
      .pipe(take(1))
      .subscribe((res) => {
        this.countries = res;
        if (this.country) {
          this.selectedCountry = this.countries.find(currency => currency.id === this.country);
          console.log('this.selectedCountry', this.selectedCountry);
        }
        this.isLoading = false;
      });
  }

  onChange(value: number) {
    this.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(value: number) {
    this.country = value;
    this.selectedCountry = this.countries.find(currency => currency.id === this.country);
    this.valueChange.emit(this.selectedCountry);
  }

  writeValue(obj: any): void {
    this.country = obj;
  }

}

import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {BusinessTripCountry} from '../../../models/business-trip-country';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BusinessTripCountryService} from '../../../services/business-trip-country.service';

@Component({
  selector: 'pek-business-trip-country-picker',
  templateUrl: './business-trip-country-picker.component.html',
  styleUrls: ['./business-trip-country-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BusinessTripCountryPickerComponent),
    multi: false
  }]
})
export class BusinessTripCountryPickerComponent implements OnInit, ControlValueAccessor {
  @Input() countries: BusinessTripCountry[];
  @Input() country: string;
  @Input() countrySelected: BusinessTripCountry;
  @Input() preloadedCountries: boolean;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() valueChangeFull: EventEmitter<BusinessTripCountry> = new EventEmitter<BusinessTripCountry>();

  constructor(
    private businessCountryService: BusinessTripCountryService,
  ) {
  }

  ngOnInit(): void {
    this.getCompaniesFilters();
  }

  getCompaniesFilters() {
    if (!this.preloadedCountries) {
      this.businessCountryService.get().subscribe(companies => {
        this.countries = companies;
      });
    }
  }

  onChange(country: string) {
    this.setValue(country);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(country: string) {
    this.country = country;
    this.valueChange.emit(this.country);
    this.countrySelected = this.countries.find(country => country.code === this.country);
    this.valueChangeFull.emit(this.countrySelected);
  }

  writeValue(obj: any): void {
    this.country = obj;
  }
}

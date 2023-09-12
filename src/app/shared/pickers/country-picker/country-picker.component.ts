import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Country} from '@shared/models/country';
import {CountryService} from '@shared/services/country.service';

@Component({
  selector: 'pek-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.scss']
})
export class CountryPickerComponent implements OnInit {
  @Input() currentCountryIds: number = null;
  @Input() showClear: boolean = true;
  @Output() selectCountry: EventEmitter<Country> = new EventEmitter<Country>();

  isLoading = true;
  countries: Country[] = [];
  selectedCountry: Country = null;


  constructor(
    private countryService: CountryService,
  ) {
  }

  ngOnInit(): void {
    this.countryService.get().pipe(
    ).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
      this.findCountries();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentTechnologiesIds' in changes) {
      this.selectedCountry = null;
    }
  }

  onSelectCountry(country: Country) {
    if (country) {
      this.selectCountry.emit(country);
    } else {
      this.selectCountry.emit(null);
    }
  }

  findCountries() {
    if (this.currentCountryIds) {
      const findCountry = this.countries.find(t => t.id === this.currentCountryIds);
      if (findCountry) {
        this.selectedCountry = findCountry;
      }
    }
  }
}

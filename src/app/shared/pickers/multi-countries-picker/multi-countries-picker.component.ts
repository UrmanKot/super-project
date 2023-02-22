import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Technology} from '../../../product-structure/models/technology';
import {Subject, takeUntil} from 'rxjs';
import {TechnologyService} from '../../../product-structure/services/technology.service';
import {Country} from '@shared/models/country';
import {CountryService} from '@shared/services/country.service';

@Component({
  selector: 'pek-multi-countries-picker',
  templateUrl: './multi-countries-picker.component.html',
  styleUrls: ['./multi-countries-picker.component.scss']
})
export class MultiCountriesPickerComponent implements OnInit {
  @Input() currentCountriesIds: number[] = [];
  @Output() selectCountries: EventEmitter<Country[]> = new EventEmitter<Country[]>();

  isLoading = true;
  countries: Country[] = [];
  selectedCountries: Country[] = [];


  constructor(
    private countryService: CountryService,
  ) {
  }

  ngOnInit(): void {
    this.countryService.get().pipe(
    ).subscribe(countries => {
      this.countries = countries;
      this.findCountries();
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentTechnologiesIds' in changes) {
      this.selectedCountries = [];
      this.findCountries();
    }
  }

  onSelectCountries(countries: Country[]) {
    if (countries) {
      this.selectCountries.emit(countries);
    } else {
      this.selectCountries.emit(null);
    }
  }

  findCountries() {
    if (this.currentCountriesIds.length > 0) {
      this.currentCountriesIds.forEach(id => {
        const findTechnology = this.countries.find(t => t.id === id);

        if (findTechnology) {
          this.selectedCountries.push(findTechnology);
        }
      });
    }
  }
}

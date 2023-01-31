import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {forkJoin, Subject, takeUntil} from 'rxjs';
import {Country} from '@shared/models/country';
import {RegionService} from '@shared/services/region.service';
import {CountryService} from '@shared/services/country.service';
import {Region} from '@shared/models/region';

@Component({
  selector: 'pek-crm-tree-company-picker',
  templateUrl: './crm-tree-company-picker.component.html',
  styleUrls: ['./crm-tree-company-picker.component.scss']
})
export class CrmTreeCompanyPickerComponent implements OnInit, OnDestroy {
  @Input() selectedRegion: Region;
  @Output() regionSelected: EventEmitter<Region> = new EventEmitter<Region>();
  regions: Region[] = [];
  countries: Country[] = [];
  tree: any[];

  selectedNode: any;
  private destroy$ = new Subject();
  constructor(
    private readonly regionService: RegionService,
    private readonly countryService: CountryService,
  ) { }

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    this.selectedNode = null;
    forkJoin({
      regions: this.regionService.get(),
      countries: this.countryService.get()
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe(({regions, countries}) => {
      this.regions = regions;
      this.countries = countries;
      this.tree = [];
      this.createTree();
    });
  }

  createTree() {
    this.tree.push({
      label: 'Not Country',
      selectable: false,
      data: {country: {name: 'Not Country'}},
      children: this.regions.filter(r => !r.country).map(region => {
        return {
          label: region.name,
          data: {region: region},
          children: [],
        };
      })
    });

    this.countries.forEach(country => {
      this.tree.push({
        label: country.name + ' (' + country.alpha2_code + ')',
        selectable: false,
        data: {country: country},
        children: this.regions.filter(r => r.country).filter(r => (r.country as Country).id === country.id).map(region => {
          return {
            label: region.name,
            data: {region: region},
            children: [],
          };
        })
      });
    });

    if (this.selectedRegion) {
      this.tree.forEach(country => {
        country.children.forEach(region => {
          if (region.data.region.id === this.selectedRegion.id) {
            this.selectedNode = region;
          }
        });
      });
    }

    this.tree = this.tree.map(n => n);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  changed($event: any) {
    this.regionSelected.emit($event.data.region);
  }
}

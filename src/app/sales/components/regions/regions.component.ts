import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, TreeNode} from 'primeng/api';
import {RegionService} from '@shared/services/region.service';
import {CountryService} from '@shared/services/country.service';
import {forkJoin, Subject, takeUntil} from 'rxjs';
import {Region} from '@shared/models/region';
import {Country} from '@shared/models/country';
import {CountryRegionService} from '../../services/country-region.service';

@Component({
  selector: 'pek-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit, OnDestroy {

  tree: TreeNode[] = [];
  selected: TreeNode;

  regions: Region[] = [];
  countries: Country[] = [];

  private destroy$ = new Subject();

  menuItemsCountry: MenuItem[] = [{
    label: 'Selected Country',
    items: [
      {
        label: 'Edit Country',
        icon: 'pi pi-pencil',
        command: () => this.editCountry()
      },
      {
        label: 'Add Region',
        icon: 'pi pi-plus',
        command: () => this.addRegion()
      },
      {
        label: 'Remove Country',
        icon: 'pi pi-trash',
        command: () => this.deleteCountry()
      },
    ]
  }];

  menuItemsRegion: MenuItem[] = [{
    label: 'Selected Region',
    items: [
      {
        label: 'Edit Region',
        icon: 'pi pi-pencil',
        command: () => this.editRegion()
      },
      {
        label: 'Remove Region',
        icon: 'pi pi-trash',
        command: () => this.deleteRegion()
      }
    ]
  }];

  constructor(
    private readonly regionService: RegionService,
    private readonly countryService: CountryService,
    private countryRegionService: CountryRegionService
  ) {
  }

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    this.selected = null;
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
      data: {country: {name: 'Not Country'}},
      children: this.regions.filter(r => !r.country).map(region => {
        return {
          data: {region: region},
          children: [],
        };
      })
    });

    this.countries.forEach(country => {
      this.tree.push({
        data: {country: country},
        children: this.regions.filter(r => r.country).filter(r => (r.country as Country).id === country.id).map(region => {
          return {
            data: {region: region},
            children: [],
          };
        })
      });
    });

    this.tree = this.tree.map(n => n);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  createCountry() {
    this.countryRegionService.createEditCountryModal().subscribe(res => {
      if (res) {
        this.loadInfo();
      }
    });
  }

  private editCountry() {
    this.countryRegionService.createEditCountryModal(this.selected.data.country).subscribe(res => {
      if (res) {
        this.loadInfo();
      }
    });
  }

  private deleteCountry() {
    this.countryService.delete(this.selected.data.country).subscribe(res => {
        this.loadInfo();
    });
  }

  private editRegion() {
    this.countryRegionService.createEditRegionModal(this.selected.data.region).subscribe(res => {
      if (res) {
        this.loadInfo();
      }
    });
  }

  private deleteRegion() {
    this.regionService.delete(this.selected.data.region).subscribe(res => {
      this.loadInfo();
    });
  }

  private addRegion() {
    this.countryRegionService.createEditRegionModal(null, this.selected.data.country.id).subscribe(res => {
      if (res) {
        this.loadInfo();
      }
    });
  }
}

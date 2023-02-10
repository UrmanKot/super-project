import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, TreeNode} from 'primeng/api';
import {RegionService} from '@shared/services/region.service';
import {CountryService} from '@shared/services/country.service';
import {forkJoin, Subject, takeUntil} from 'rxjs';
import {Region} from '@shared/models/region';
import {Country} from '@shared/models/country';
import {CountryRegionService} from '../../services/country-region.service';
import {SubRegionService} from '@shared/services/sub-region.service';
import {SubRegion} from '@shared/models/sub-region';
import {take} from 'rxjs/operators';
import {ModalService} from '@shared/services/modal.service';

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
  subRegions: SubRegion[] = [];

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
        label: 'Add Sub Region',
        icon: 'pi pi-plus',
        command: () => this.addSubRegion()
      },
      {
        label: 'Remove Region',
        icon: 'pi pi-trash',
        command: () => this.deleteRegion()
      }
    ]
  }];

  menuItemsSubRegion: MenuItem[] = [{
    label: 'Selected Region',
    items: [
      {
        label: 'Edit Sub Region',
        icon: 'pi pi-pencil',
        command: () => this.editSubRegion()
      },
      {
        label: 'Remove Sub Region',
        icon: 'pi pi-trash',
        command: () => this.deleteSubRegion()
      }
    ]
  }];

  constructor(
    private readonly regionService: RegionService,
    private readonly countryService: CountryService,
    private readonly subRegionService: SubRegionService,
    private countryRegionService: CountryRegionService,
    private modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    this.selected = null;
    forkJoin({
      regions: this.regionService.get(),
      countries: this.countryService.get(),
      subRegion: this.subRegionService.get(),
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe(({regions, countries, subRegion}) => {
      this.regions = regions;
      this.countries = countries;
      this.subRegions = subRegion;
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
    this.tree.forEach(node => {
      node.children.forEach(child => {
        const regionSubRegions = this.subRegions.filter(el => el.region === child.data.region.id);

        if (regionSubRegions.length > 0) {
          child.children.push(
            ...regionSubRegions.map(subRegion => {
              return {
                data: {subRegion: subRegion, countryRegionId: child.data.region.country.id},
                children: [],
                parent: child
              };
            })
          );
          console.log('CHILD.children', child.children);
          console.log('CHILD', child);
        }


        // if (child.data.region.id === this.subRegions
      });
    });
    // console.log('this.tree', this.tree);
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
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((confirm) => {
        if (confirm) {
          this.countryService.delete(this.selected.data.country).subscribe(res => {
            this.loadInfo();
          });
        }
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
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((confirm) => {
        if (confirm) {
          this.regionService.delete(this.selected.data.region).subscribe(res => {
            this.loadInfo();
          });
        }
      });

  }

  private addRegion() {
    this.countryRegionService.createEditRegionModal(null, this.selected.data.country.id).subscribe(res => {
      if (res) {
        this.loadInfo();
      }
    });
  }

  private addSubRegion() {
    this.countryRegionService.createEditSubRegionModal(this.selected.data.region.country?.id, null, this.selected.data.region.id).subscribe(res => {
      if (res) {
        this.loadInfo();
      }
    });
  }

  private editSubRegion() {
    this.countryRegionService.createEditSubRegionModal(this.selected.data.countryRegionId, this.selected.data.subRegion, this.selected.data.subRegion.region).subscribe(res => {
      if (res) {
        this.loadInfo();
      }
    });
  }

  updateInfo(type: 'country' | 'region' | 'subRegion') {
    console.log('TREE', this.tree);
  }

  private deleteSubRegion() {
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((confirm) => {
        if (confirm) {
          this.subRegionService.delete(this.selected.data.subRegion).subscribe(res => {
            this.loadInfo();
          });
        }
      });
  }
}

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
  expanseMapCountry = {};
  expanseMapRegion = {};
  expanseMapSubRegion = {};

  isLoading = true;

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
    this.isLoading = true;
    this.selected = null;
    this.tree = [];
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

      this.createTree();
      this.isLoading = false;
    });
  }

  createTree() {
    if (this.tree) {
      this.mapExpansion();
    }
    const tree = [];
    let expanded = false;
    if (this.expanseMapCountry) {
      expanded = this.expanseMapCountry[9_000_000];
    }
    tree.push({
      data: {country: {name: 'Not Country', id: 9_000_000}},
      expanded: expanded,
      children: this.regions.filter(r => !r.country).map(region => {
        let expanded = false;
        if (this.expanseMapRegion) {
          expanded = this.expanseMapRegion[region.id];
        }
        return {
          data: {region: region},
          expanded: expanded,
          children: [],
        };
      })
    });

    this.countries.forEach(country => {
      let expanded = false;
      if (this.expanseMapCountry) {
        expanded = this.expanseMapCountry[country.id];
      }
      tree.push({
        data: {country: country},
        expanded: expanded,
        children: this.regions.filter(r => r.country).filter(r => (r.country as Country).id === country.id).map(region => {
          let expanded = false;
          if (this.expanseMapRegion) {
            expanded = this.expanseMapRegion[region.id];
          }
          return {
            data: {region: region},
            expanded: expanded,
            children: [],
          };
        })
      });
    });
    tree.forEach(node => {
      node.children.forEach(child => {
        const regionSubRegions = this.subRegions.filter(el => el.region === child.data.region.id);

        if (regionSubRegions.length > 0) {
          child.children.push(
            ...regionSubRegions.map(subRegion => {
              let expanded = false;
              if (this.expanseMapCountry) {
                expanded = this.expanseMapSubRegion[subRegion.id];
              }
              return {
                data: {subRegion: subRegion, countryRegionId: child.data.region.country.id},
                children: [],
                expanded: expanded,
                parent: child
              };
            })
          );
        }
      });
    });
    this.tree = tree.map(n => n);
  }

  mapExpansion() {
    this.tree.forEach(element => {
      this.createExpanseMap(element);
    });
  }

  createExpanseMap(node) {
    if (node.expanded) {
      if (node.data.country) {
        this.expanseMapCountry[node.data.country.id] = node.expanded;
      } else if (node.data.region) {
        this.expanseMapRegion[node.data.region.id] = node.expanded;
      } else if (node.data.subRegion) {
        this.expanseMapSubRegion[node.data.subRegion.id] = node.expanded;
      }
    } else {
      if (node.data.country) {
        this.expanseMapCountry[node.data.country.id] = false;
      } else if (node.data.region) {
        this.expanseMapRegion[node.data.region.id] = false;
      } else if (node.data.subRegion) {
        this.expanseMapSubRegion[node.data.subRegion.id] = false;
      }
    }
    if (node.children) {
      node.children.forEach(element => {
        this.createExpanseMap(element);
      });
    }
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

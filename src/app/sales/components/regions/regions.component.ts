import {Component, OnDestroy, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {RegionService} from '@shared/services/region.service';
import {CountryService} from '@shared/services/country.service';
import {forkJoin, Subject, takeUntil} from 'rxjs';
import {Region} from '@shared/models/region';

@Component({
  selector: 'pek-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit, OnDestroy {

  tree: TreeNode[] = [];
  selected: TreeNode

  regions: Region[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly regionService: RegionService,
    private readonly countryService: CountryService
  ) { }

  ngOnInit(): void {
    forkJoin({
      regions: this.regionService.get(),
      countries: this.countryService.get()
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe(({regions, countries}) => {
      this.regions = regions;
      console.log(regions);
      console.log(countries);

      this.createTree();
    })
  }

  createTree() {
    this.tree.push({
      data: {
        name: 'Not Country'
      },
      children: this.regions.filter(r => !r.country).map(region => {
        return {
          data: region,
          children: [],
        }
      })
    })

    this.tree = this.tree.map(n => n);
    console.log(this.tree);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

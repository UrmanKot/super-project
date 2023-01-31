import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Company} from '../../../crm/models/company';
import {Subject, takeUntil} from 'rxjs';
import {CompanyService} from '../../../crm/services/company.service';
import {Region} from '@shared/models/region';
import {RegionService} from '@shared/services/region.service';

@Component({
  selector: 'pek-region-picker',
  templateUrl: './region-picker.component.html',
  styleUrls: ['./region-picker.component.scss']
})
export class RegionPickerComponent implements OnInit, OnChanges {

  @Output() selectRegion: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectRegionFull: EventEmitter<Partial<Region>> = new EventEmitter<Partial<Region>>();
  @Input() countrySelected: number;
  @Input() isDisabled: boolean;
  isLoading = true;
  regions: Partial<Region>[] = [];
  @Input() selectedRegionId: number;

  private destroy$ = new Subject();

  constructor(
    private readonly regionService: RegionService,
  ) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.regions = [];
    let query;

    if (this.countrySelected) {
      query = [{
          name: 'country_ids',
          value: [this.countrySelected]
        }];
    }

    this.regionService.get(query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(regions => {
      this.regions = regions;
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('countrySelected' in changes) {
      this.getRegions();
    }
  }

  onSelectRegion() {
    this.selectRegion.emit(this.selectedRegionId);
    const region = this.regions.find(region => region.id === this.selectedRegionId);
    this.selectRegionFull.emit(region);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {RegionService} from '@shared/services/region.service';
import {SubRegion} from '@shared/models/sub-region';
import {SubRegionService} from '@shared/services/sub-region.service';

@Component({
  selector: 'pek-sub-region-picker',
  templateUrl: './sub-region-picker.component.html',
  styleUrls: ['./sub-region-picker.component.scss']
})
export class SubRegionPickerComponent implements OnInit {
  @Output() selectSubRegion: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectSubRegionFull: EventEmitter<Partial<SubRegion>> = new EventEmitter<Partial<SubRegion>>();
  @Input() regionSelected: number;
  @Input() isDisabled: boolean;
  isLoading = true;
  regions: Partial<SubRegion>[] = [];
  @Input() selectedSubRegionId: number;

  private destroy$ = new Subject();

  constructor(
    private readonly subRegionService: SubRegionService,
  ) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.regions = [];
    let query;

    if (this.regionSelected) {
      query = [{
        name: 'region',
        value: this.regionSelected
      }];
    }

    this.subRegionService.get(query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(regions => {
      this.regions = regions;
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('regionSelected' in changes) {
      this.getRegions();
    }
  }

  onSelectRegion() {
    this.selectSubRegion.emit(this.selectedSubRegionId);
    const region = this.regions.find(region => region.id === this.selectedSubRegionId);
    this.selectSubRegionFull.emit(region);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

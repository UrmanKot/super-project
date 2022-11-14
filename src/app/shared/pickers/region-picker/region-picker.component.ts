import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
export class RegionPickerComponent implements OnInit {
  @Output() selectRegion: EventEmitter<number> = new EventEmitter<number>();
  isLoading = true;
  regions: Partial<Region>[] = [];
  selectedRegionId: number;

  private destroy$ = new Subject();

  constructor(
    private readonly regionService: RegionService,
  ) { }

  ngOnInit(): void {
    this.regionService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(regions => {
      this.regions = regions;
      this.isLoading = false;
    });
  }

  onSelectCompany() {
    this.selectRegion.emit(this.selectedRegionId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

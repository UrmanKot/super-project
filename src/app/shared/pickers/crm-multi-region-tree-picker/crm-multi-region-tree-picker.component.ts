import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Region} from '@shared/models/region';
import {TreeNode} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';
import {CategoriesService} from '../../../product-structure/services/categories.service';
import {RegionService} from '@shared/services/region.service';
import {debounceTime} from 'rxjs/operators';
import {SubRegion} from '@shared/models/sub-region';
import {SubRegionService} from '@shared/services/sub-region.service';
import {Country} from '@shared/models/country';

@Component({
  selector: 'pek-crm-multi-region-tree-picker',
  templateUrl: './crm-multi-region-tree-picker.component.html',
  styleUrls: ['./crm-multi-region-tree-picker.component.scss']
})
export class CrmMultiRegionTreePickerComponent implements OnInit, OnChanges {
  @Output() choiceCategories: EventEmitter<string> = new EventEmitter<string>();

  @Output() subRegionsSelected: EventEmitter<SubRegion[]> = new EventEmitter<SubRegion[]>();
  @Input() isDisabled: boolean;
  @Input() regionsSelected: Region[] = [];
  @Input() countriesSelected: Country[] = [];
  isLoading = false;
  subRegions: SubRegion[] = [];
  regionsTree: TreeNode<SubRegion>[] = [];

  selectedSubRegions: TreeNode<SubRegion>[] = [];

  private destroy$ = new Subject();
  recreateTree: Subject<void> = new Subject<void>();

  constructor(
    private readonly productCategoriesService: CategoriesService,
    private readonly regionService: RegionService,
    private readonly subRegionService: SubRegionService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('regionsSelected' in changes) {
      this.recreateTree.next();
    }
  }

  ngOnInit(): void {
    this.recreateTree.pipe(debounceTime(200)).subscribe(() => {
      this.loadRegions();
    });
  }

  loadRegions() {
    const regionIds = this.regionsSelected ? this.regionsSelected.map(country => country.id) : [];
    this.subRegionService.get([{name: 'region_ids', value: regionIds}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(regions => {
      this.selectedSubRegions = [];
      this.subRegions = regions;

      if (this.regionsSelected && this.regionsSelected.length > 0) {
        this.createTree();
      }
      this.isLoading = false;
    });
  }

  createTree() {
    const countries = this.regionsSelected.filter((region, index, self) => self.findIndex(innerRegion => innerRegion.country.id === region.country.id) === index).map(region => region.country);
    const treeCountries: TreeNode<any>[] = [];
    countries.forEach(country => {
      const countryNode = {
        label: country.name,
        data: <Country>country,
        expanded: true,
        styleClass: 'country',
        selectable: false,
        children: [],
      }
      treeCountries.push(countryNode);

      const regions = this.regionsSelected.filter(c => c.country.id === country.id);
      regions.forEach(region => {
        const hasChildren = this.subRegions.filter(c => c.region === region.id).length > 0;
        if (hasChildren) {
          const regionNode = {
            label: region.name,
            data: <Region>region,
            expanded: true,
            styleClass: 'region',
            selectable: false,
            children: [],
          };
          countryNode.children.push(regionNode);

          const regions = this.subRegions.filter(c => c.region === region.id);
          regions.forEach(subRegion => {
            const subRegionNode = {
              label: subRegion.name,
              data: <SubRegion>subRegion,
              expanded: true,
              styleClass: 'subRegion',
              children: [],
            };
            this.selectedSubRegions.push(subRegionNode)
            regionNode.children.push(subRegionNode);
          });
        }
      });

    });

    this.subRegionsSelected.next(this.selectedSubRegions.map(c=> c.data));
    this.regionsTree = [...treeCountries];
  }

  onChoiceCategories() {
    if (!this.selectedSubRegions || this.selectedSubRegions.length === 0) {
      this.subRegionsSelected.next(null)
    } else {
      this.subRegionsSelected.next(this.selectedSubRegions.filter(c => c.data.region).map(c=> c.data));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

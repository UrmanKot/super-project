import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {Category} from '../../../product-structure/models/category';
import {Subject, takeUntil} from 'rxjs';
import {CategoriesService} from '../../../product-structure/services/categories.service';
import {Country} from '@shared/models/country';
import {Region} from '@shared/models/region';
import {RegionService} from '@shared/services/region.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'pek-crm-multi-region-picker',
  templateUrl: './crm-multi-region-picker.component.html',
  styleUrls: ['./crm-multi-region-picker.component.scss']
})
export class CrmMultiRegionPickerComponent implements OnInit, OnChanges {
  @Output() choiceCategories: EventEmitter<string> = new EventEmitter<string>();

  @Output() regionsSelected: EventEmitter<Region[]> = new EventEmitter<Region[]>();
  @Input() isDisabled: boolean;
  @Input() countrySelected: Country[] = [];
  isLoading = false;
  regions: Region[] = [];
  regionsTree: TreeNode<Category>[] = [];

  selectedRegions: TreeNode<Region>[] = [];

  private destroy$ = new Subject();
  recreateTree: Subject<void> = new Subject<void>();

  constructor(
    private readonly productCategoriesService: CategoriesService,
    private readonly regionService: RegionService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
        if ('countrySelected' in changes) {
          this.recreateTree.next();
        }
    }

  ngOnInit(): void {
    this.recreateTree.pipe(debounceTime(200)).subscribe(() => {
      this.loadRegions();
    });
  }

  loadRegions() {
    const countryIds = this.countrySelected.map(country => country.id);
    this.regionService.get([{name: 'country_ids', value: countryIds}]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(regions => {
      this.selectedRegions = [];
      this.regions = regions;

      this.createTree();
      this.isLoading = false;
    });
  }

  createTree() {
    const getChildren = (nodes: TreeNode<Region>[]) => {
      nodes.forEach(node => {
        const children = this.regions.filter(c => c.country.id === node.data.id);

        if (children.length > 0) {
          node.children = children.map(region => {

            return {
              label: region.name,
              data: region,
              children: []
            };
          });
          this.selectedRegions.push(...node.children);
          getChildren(node.children);
        }
      });
    };

    const tree: TreeNode<any>[] = [];

    this.countrySelected.forEach(country => {
      const hasChildren = this.regions.filter(c => c.country.id === country.id).length > 0;
      if (hasChildren) {
        tree.push({
          label: country.name,
          data: <Country>country,
          expanded: true,
          styleClass: 'country',
          selectable: false,
          children: [],
        });
      }
    });

    getChildren(tree);
    this.regionsSelected.next(this.selectedRegions.map(c => c.data));
    this.regionsTree = [...tree];
  }

  onChoiceCategories() {
    if (!this.selectedRegions || this.selectedRegions.length === 0) {
      this.regionsSelected.next(null)
    } else {
      this.regionsSelected.next(this.selectedRegions.filter(c => c.data.country).map(c => c.data));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

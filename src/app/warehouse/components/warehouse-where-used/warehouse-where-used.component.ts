import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {fromEvent, Subject, takeUntil} from 'rxjs';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {QuerySearch} from '@shared/models/other';
import {Paginator} from 'primeng/paginator';
import {debounceTime, map, tap} from 'rxjs/operators';

@Component({
  selector: 'pek-warehouse-where-used',
  templateUrl: './warehouse-where-used.component.html',
  styleUrls: ['./warehouse-where-used.component.scss']
})
export class WarehouseWhereUsedComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;

  isStartOnePage = false;
  isLoadingNomenclatures = true;
  isLoadingUsedNomenclatures = false;

  nomenclatureList: Nomenclature[] = [];
  usedNomenclatures: Nomenclature[] = [];

  whereUsedNomenclature: Nomenclature;
  selectedNomenclature: Nomenclature;

  countNomenclatures = 0;

  searchForm: FormGroup = this.fb.group({
    name: [''],
    code: [''],
    category: [''],
    root_categories: [''],
    page: [1]
  });

  queryKey = 'name:/code:/categories:/root_categories:';

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'paginated', value: true}
  ];

  private destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private nomenclatureService: NomenclatureService,
  ) {
  }

  ngAfterViewInit() {
    fromEvent(this.searchBoxName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedNomenclature = null),
        map(() => this.searchBoxName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchNomenclatures();
    });

    fromEvent(this.searchBoxCode.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedNomenclature = null),
        map(() => this.searchBoxCode.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchNomenclatures();
    });
  }

  ngOnInit(): void {
    this.getNomenclatures();
  }

  getNomenclatures() {
    this.nomenclatureService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(nomenclatures => {
      this.nomenclatureList = nomenclatures.results;
      this.countNomenclatures = nomenclatures.count;

      if (this.isStartOnePage) {
        this.paginator.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoadingNomenclatures = false;
    });
  }

  getType(type: ENomenclatureType) {
    switch (type) {
      case ENomenclatureType.PURCHASED:
        return 'Purchased';
      case ENomenclatureType.ASSEMBLY:
        return 'Assembly';
      case ENomenclatureType.MANUFACTURED:
        return 'Manufactured';
    }
  }

  onSearchWhereUsed() {
    if (this.selectedNomenclature) {
      this.whereUsedNomenclature = this.selectedNomenclature;
      this.isLoadingUsedNomenclatures = true;
      this.usedNomenclatures = [];
      this.destroy$.next(true);
      this.nomenclatureService.searchWhereUsed(this.selectedNomenclature.id).pipe(
        takeUntil(this.destroy$)
      ).subscribe(usedNomenclatures => {
        this.usedNomenclatures = usedNomenclatures;
        this.isLoadingUsedNomenclatures = false;
      });
    } else {
      this.whereUsedNomenclature = null;
      this.usedNomenclatures = [];
    }
  }

  searchNomenclatures() {
    this.destroy$.next(true);
    this.isLoadingNomenclatures = true;
    this.selectedNomenclature = null;

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/categories:${this.searchForm.get('category').value}/root_categories:${this.searchForm.get('root_categories').value}`;

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [
      {name: 'page', value: this.searchForm.get('page').value},
      {name: 'paginated', value: true}
    ];

    if (this.searchForm.get('name').value !== '') {
      this.query.push({name: 'name', value: this.searchForm.get('name').value});
    }

    if (this.searchForm.get('code').value !== '') {
      this.query.push({name: 'code', value: encodeURIComponent(this.searchForm.get('code').value)});
    }

    if (this.searchForm.get('category').value) {
      this.query.push({name: 'categories', value: this.searchForm.get('category').value});
    }

    if (this.searchForm.get('root_categories').value) this.query.push({
      name: 'root_categories',
      value: this.searchForm.get('root_categories').value
    });

    this.getNomenclatures();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchNomenclatures();
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  onSelectCategory(ids: number[]) {
    if (ids) {
      this.searchForm.get('category').patchValue(ids.join(','));
    } else {
      this.searchForm.get('category').patchValue('');
    }
    this.searchNomenclatures();
  }

  onSelectRootCategory(ids: number[]) {
    if (ids) {
      this.searchForm.get('root_categories').patchValue(ids.join(','));
    } else {
      this.searchForm.get('root_categories').patchValue('');
    }

    this.searchNomenclatures();
  }
}

import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Paginator} from 'primeng/paginator';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ENomenclatureType, Nomenclature} from '@shared/models/nomenclature';
import {fromEvent, Subject, Subscription, takeUntil} from 'rxjs';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {debounceTime, map, tap} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';

@Component({
  selector: 'pek-nomenclature-price',
  templateUrl: './nomenclature-price.component.html',
  styleUrls: ['./nomenclature-price.component.scss']
})
export class NomenclaturePriceComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;

  nomenclatureType = ENomenclatureType;

  nomenclatures: Nomenclature[] = [];
  selectedNomenclature: Nomenclature;

  tableScrollHeight = '24.125rem';
  isHideFilters = false;

  isStartOnePage = false;
  isShowAll = false;
  isLoading = true;

  count = 0;

  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    page: [1],
    type_numbers: [null],
    has_price: [null],
  });

  queryKey = 'name:null/code:null/type_numbers:null/has_price:null';

  query: QuerySearch[] = [
    {name: 'page', value: this.searchForm.get('page').value},
    {name: 'type_numbers', value: `${ENomenclatureType.MANUFACTURED},${ENomenclatureType.ASSEMBLY}`},
    {name: 'paginated', value: true},
    {name: 'order_by_price', value: true},
  ];

  private destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
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
    this.getNomenclaturesForPagination();
  }

  getNomenclaturesForPagination() {
    this.nomenclatureService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(nomenclatures => {
      this.nomenclatures = nomenclatures.results;
      this.count = nomenclatures.count;

      if (this.isStartOnePage) {
        this.paginator.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  getNomenclatures() {
    this.nomenclatureService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(nomenclatures => {
      this.nomenclatures = nomenclatures;

      this.count = nomenclatures.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  searchNomenclatures() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.selectedNomenclature = null;

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/type_numbers:${this.searchForm.get('type_numbers').value}/has_price:${this.searchForm.get('has_price').value}`;

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [
      {name: 'order_by_price', value: true},
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: 'true'})
      this.query.push({name: 'page', value: this.searchForm.get('page').value})
    }

    if (this.searchForm.get('name').value) {
      this.query.push({name: 'name', value: this.searchForm.get('name').value})
    }

    if (this.searchForm.get('code').value) {
      this.query.push({name: 'code', value: this.searchForm.get('code').value})
    }

    if (this.searchForm.get('has_price').value !== null) {
      this.query.push({name: 'has_price', value: this.searchForm.get('has_price').value})
    }

    if (this.searchForm.get('type_numbers').value !== null) {
      this.query.push({name: 'type_numbers', value: this.searchForm.get('type_numbers').value})
    } else {
      this.query.push({name: 'type_numbers', value: `${ENomenclatureType.MANUFACTURED},${ENomenclatureType.ASSEMBLY}`})
    }

    if (!this.isShowAll) {
      this.getNomenclaturesForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getNomenclatures();
    }
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.875rem';
      return;
    }

    if (this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '18.75rem';
      return;
    }

    if (!this.isHideFilters && this.isShowAll) {
      this.tableScrollHeight = '21.875rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '24.125rem';
      return;
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.setTableScrollHeight();
    this.searchNomenclatures();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.setTableScrollHeight();
    this.searchNomenclatures();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchNomenclatures();
    }
  }

  onChoiceNomenclatureType(type: ENomenclatureType) {
    this.searchForm.get('type_numbers').patchValue(type);
    this.searchNomenclatures();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Table} from 'primeng/table';
import {Nomenclature} from '@shared/models/nomenclature';
import {finalize, fromEvent, Subject, takeUntil} from 'rxjs';
import {QuerySearch} from '@shared/models/other';
import {debounceTime, map, tap} from 'rxjs/operators';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {Paginator} from 'primeng/paginator';
import {ListService} from '../../../warehouse/services/list.service';
import {SalesChainService} from '../../services/sales-chain-service';

@Component({
  selector: 'pek-sales-lists',
  templateUrl: './sales-lists.component.html',
  styleUrls: ['./sales-lists.component.scss']
})
export class SalesListsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('dt') dt: Table;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;

  private destroy$ = new Subject();

  isSaving = false;

  searchForm: FormGroup = this.fb.group({
    name: [null],
    code: [null],
    page: [1]
  });

  tableScrollHeight = '24.125rem';
  isHideFilters = false;

  form: FormGroup = this.fb.group({
    nomenclature: [null, Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]],
    is_grouped: [false]
  });

  isStartOnePage = false;
  isShowAll = false;

  nomenclatures: Nomenclature[] = [];
  selectedNomenclature: Nomenclature;
  isLoading = true;
  countNomenclatures = 0;

  queryKey = 'name:null/code:null';

  query: QuerySearch[] = [
    {name: 'type', value: '1'},
    {name: 'paginated', value: 'true'},
    {name: 'page', value: this.searchForm.get('page').value},
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly nomenclatureService: NomenclatureService,
    private readonly listService: ListService,
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

  getNomenclatures() {
    this.nomenclatureService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(nomenclatures => {
      this.nomenclatures = nomenclatures;

      this.countNomenclatures = nomenclatures.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  getNomenclaturesForPagination() {
    this.nomenclatureService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(nomenclatures => {
      this.nomenclatures = nomenclatures.results;
      this.countNomenclatures = nomenclatures.count;

      if (this.isStartOnePage) {
        this.paginator.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  searchNomenclatures() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.selectedNomenclature = null;

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}`;

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
      this.searchForm.get('page').patchValue(1);
      this.isStartOnePage = true;
    }

    this.query = [];

    if (!this.isShowAll) {
      this.query = [
        {name: 'paginated', value: 'true'},
        {name: 'page', value: this.searchForm.get('page').value},
      ];
    }

    this.query.push({name: 'type', value: '1'});

    if (this.searchForm.get('code').value) {
      this.query.push({name: 'code', value: this.searchForm.get('code').value});
    }

    if (this.searchForm.get('name').value) this.query.push({name: 'name', value: this.searchForm.get('name').value});

    if (!this.isShowAll) {
      this.getNomenclaturesForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getNomenclatures();
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

  onSelectionChange() {
    if (this.selectedNomenclature) {
      this.form.get('nomenclature').patchValue(this.selectedNomenclature.id);
    } else {
      this.form.get('nomenclature').patchValue(null);
    }
  }

  onMakeProductionList() {
    if (this.form.valid) {
      this.isSaving = true;
      this.listService.makeProductionList(this.form.value).pipe(
        finalize(() => this.isSaving = false)
      ).subscribe();
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

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModalService} from '@shared/services/modal.service';
import {Paginator} from 'primeng/paginator';
import {ListService} from '../../services/list.service';
import {QuerySearch} from '@shared/models/other';
import {fromEvent, Subject, takeUntil} from 'rxjs';
import {List} from '../../models/list';
import {AdapterService} from '@shared/services/adapter.service';
import {debounceTime, map, tap} from 'rxjs/operators';

export enum ViewMode {
  LIST = 0,
  HIERARCHY = 1
}

@Component({
  selector: 'pek-production-lists',
  templateUrl: './production-lists.component.html',
  styleUrls: ['./production-lists.component.scss']
})
export class ProductionListsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('searchBoxName') searchBoxName;
  @ViewChild('searchBoxCode') searchBoxCode;

  isShowAll = false;
  isStartOnePage = false;
  isLoading = true;

  tableScrollHeight = '29.625rem';
  isHideFilters = false;

  viewModeType = ViewMode;
  viewMode: ViewMode = ViewMode.LIST;
  queryKey = 'name:/code:/responsible_employee_id:null/date_created_after:null/date_created_before:null/category_ids:null/root_categories:null';

  searchForm: FormGroup = this.fb.group({
    page: [1],
    name: [''],
    code: [''],
    responsible_employee_id: [null],
    date_created_after: [null],
    date_created_before: [null],
    category_ids: null,
    root_categories: null,
  });

  selectedList: List;
  lists: List[] = [];
  count = 0;

  query: QuerySearch[] = [
    {name: 'paginated', value: true},
    {name: 'page', value: this.searchForm.get('page').value},
  ];

  private destroy$ = new Subject();

  constructor(
    private modalService: ModalService,
    private listService: ListService,
    private readonly adapterService: AdapterService,
    private fb: FormBuilder,
  ) {
  }

  ngAfterViewInit() {
    fromEvent(this.searchBoxName.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedList = null),
        map(() => this.searchBoxName.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchLists();
    });

    fromEvent(this.searchBoxCode.nativeElement, 'keyup')
      .pipe(
        tap(() => this.selectedList = null),
        map(() => this.searchBoxCode.nativeElement.value),
        debounceTime(350),
      ).subscribe(() => {
      this.searchLists();
    });
  }

  ngOnInit(): void {
    this.getProductionListsForPagination();
  }

  getProductionListsForPagination() {
    this.listService.getForPagination(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(lists => {
      this.lists = lists.results;
      this.count = lists.count;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  getProductionLists() {
    this.listService.get(this.query).pipe(
      takeUntil(this.destroy$)
    ).subscribe(lists => {
      this.lists = lists;
      this.count = lists.length;

      if (this.isStartOnePage) {
        this.paginator?.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  searchLists() {
    this.isLoading = true;
    this.destroy$.next(true);
    this.selectedList = null;

    const newQueryKey = `name:${this.searchForm.get('name').value}/code:${this.searchForm.get('code').value}/responsible_employee_id:${this.searchForm.get('responsible_employee_id').value}/date_created_after:${this.searchForm.get('date_created_after').value}/date_created_before:${this.searchForm.get('date_created_before').value}/category_ids:${this.searchForm.get('category_ids').value}/root_categories:${this.searchForm.get('root_categories').value}`;

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

    if (this.searchForm.get('name').value) {
      this.query.push({name: 'name', value: this.searchForm.get('name').value});
    }

    if (this.searchForm.get('code').value) {
      this.query.push({name: 'code', value: this.searchForm.get('code').value});
    }

    if (this.searchForm.get('responsible_employee_id').value) {
      this.query.push({name: 'responsible_employee_id', value: this.searchForm.get('responsible_employee_id').value});
    }

    if (this.searchForm.get('root_categories').value) {
      this.query.push({name: 'root_categories', value: this.searchForm.get('root_categories').value});
    }

    if (this.searchForm.get('date_created_after').value) {
      this.query.push({
        name: 'date_created_after',
        value: this.adapterService.dateAdapter(this.searchForm.get('date_created_after').value)
      });
    }

    if (this.searchForm.get('date_created_before').value) {
      this.query.push({
        name: 'date_created_before',
        value: this.adapterService.dateAdapter(this.searchForm.get('date_created_before').value)
      });
    }

    if (this.searchForm.get('category_ids').value) {
      this.query.push({name: 'category_ids', value: this.searchForm.get('category_ids').value});
    }

    if (!this.isShowAll) {
      this.getProductionListsForPagination();
    } else {
      this.searchForm.get('page').patchValue(1);
      this.getProductionLists();
    }
  }

  onShowAll() {
    this.isShowAll = true;
    this.setTableScrollHeight();
    this.searchLists();
  }

  onShowPartial() {
    this.isShowAll = false;
    this.setTableScrollHeight();
    this.searchLists();
  }

  paginate(evt: any) {
    if (!this.isStartOnePage) {
      this.searchForm.get('page').patchValue(evt.page + 1);
      this.searchLists();
    }
  }

  onSelectProductStructureCategories(ids: string) {
    this.searchForm.get('root_categories').patchValue(ids);
    this.searchLists();
  }

  onSelectCategories(ids: string) {
    this.searchForm.get('category_ids').patchValue(ids);
    this.searchLists();
  }

  onSelectEmployee(id: number) {
    this.searchForm.get('responsible_employee_id').patchValue(id);
    this.searchLists();
  }

  onChoiceViewType(mode: ViewMode) {
    this.viewMode = mode;
    this.selectedList = null;
  }

  onSetListLocator() {
    this.listService.openSetProductionListLocatorModal(this.selectedList.id).subscribe(response => {
      if (response) {
        this.searchLists();
      }
    });
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
      this.tableScrollHeight = '27.5rem';
      return;
    }

    if (!this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '29.625rem';
      return;
    }
  }

  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;

    this.setTableScrollHeight();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Correspondent} from '../../models/correspondent';
import {CorrespondentTypes} from '../../enum/correspondent-types.enum';
import {Paginator} from 'primeng/paginator';
import {AdapterService} from '@shared/services/adapter.service';
import {ActivatedRoute} from '@angular/router';
import {CorrespondentService} from '../../services/correspondent.service';
import {ModalService} from '@shared/services/modal.service';
import {QuerySearch} from '@shared/models/other';
import {take} from 'rxjs/operators';
import {MenuItem} from 'primeng/api';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-correspondent-list',
  templateUrl: './correspondent-list.component.html',
  styleUrls: ['./correspondent-list.component.scss']
})
export class CorrespondentListComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: Paginator;

  type: CorrespondentTypes;
  types = CorrespondentTypes;
  isShowAll: boolean;
  isLoading: boolean;
  countCorrespondents = 0;
  searchForm: FormGroup = this.fb.group({
    id: [null],
    externalId: [null],
    date_received_after: [null],
    date_received_before: [null],
    categories: [null],
    page: [1],
  });
  correspondents: Correspondent[] = [];
  isStartOnePage = false;
  selectedNode: Correspondent;
  minDate = null;
  maxDate = null;
  rangeCalendar: any = [new Date(), new Date()];
  isHideFilters = false;
  tableScrollHeight = '29.625rem';

  private destroy$ = new Subject();

  menuItems: MenuItem[] = [{
    label: 'Selected Correspondent',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.edit()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.delete()
      }
    ]
  }];
  constructor(
    private activatedRouter: ActivatedRoute,
    private modalService: ModalService,
    private correspondentService: CorrespondentService,
    private adapterService: AdapterService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.activatedRouter.data.pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.type = res['type'];
      this.search();
    });
  }


  search(): void {
    const query: QuerySearch[] = [];

    query.push({name: 'paginated', value: true});
    query.push({name: 'page', value: this.searchForm.get('page').value});
    const startDateValue = this.searchForm.get('date_received_after').value;
    const endDateValue = this.searchForm.get('date_received_before').value;
    if (startDateValue && endDateValue) {
      query.push({
        name: 'date_received_after',
        value: this.adapterService.dateAdapter(new Date(startDateValue))
      });
      query.push({
        name: 'date_received_before',
        value: this.adapterService.dateAdapter(new Date(endDateValue))
      });
    }

    if (this.searchForm.get('id').value) {
      query.push({
        name: 'id',
        value: this.searchForm.get('id').value
      });
    }

    if (this.searchForm.get('externalId').value) {
      query.push({
        name: 'external_id',
        value: this.searchForm.get('externalId').value
      });
    }

    if (this.searchForm.get('categories').value) {
      query.push({
        name: 'categories',
        value: this.searchForm.get('categories').value
      });
    }

    this.searchCorrespondents(query);
  }

  searchCorrespondents(query: QuerySearch[]): void {
    this.correspondentService.get(this.type, query).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.correspondents = res.results;
      this.countCorrespondents = res.count;

      if (this.isStartOnePage) {
        this.paginator.changePage(0);
      }

      this.isStartOnePage = false;
      this.isLoading = false;
    });
  }

  paginate(evt: any) {
    this.searchForm.get('page').patchValue(evt.page + 1);
    this.search();
  }

  showAll() {

  }

  closeShowAll() {

  }

  add() {
    this.correspondentService.createEditCorrespondent('create', this.type).pipe(take(1), takeUntil(this.destroy$)).subscribe(
      (response) => {
        if (response) {
          this.correspondents = [];
          this.search();
        }
      }
    );
  }

  edit(): void {
    this.correspondentService.createEditCorrespondent('edit', this.type, this.selectedNode).pipe(take(1), takeUntil(this.destroy$)).subscribe(
      (response) => {
        if (response) {
          this.correspondents = [];
          this.search();
        }
      }
    );
  }

  delete() {
    const correspondent = this.selectedNode
    this.modalService.confirm().pipe(take(1), takeUntil(this.destroy$)).subscribe(confirm => {
      if (confirm) {
        this.correspondentService.delete(this.type, correspondent).pipe(take(1)).subscribe(del => {
          this.selectedNode = null;
          this.correspondents = [];
          this.search();
        });
      }
    });
  }

  getName(name) {
    const nameArr = name.split('/');
    return nameArr[nameArr.length - 1];
  }

  downloadFile(file: any) {
    this.correspondentService.download_file(this.type, file.id).pipe(takeUntil(this.destroy$)).subscribe(response => {
      const filename = this.getName(file.file);
      this.adapterService.downloadFile(filename, response);
    });
  }


  changeCorrespondentStart(startDate: Date) {
    this.minDate = startDate;
    this.searchByDate();
  }

  changeCorrespondentEnd(endDate: Date) {
    this.maxDate = endDate;
    this.searchByDate();
  }


  searchByDate(): void {
    const startDateValue = this.searchForm.get('date_received_after').value;
    const endDateValue = this.searchForm.get('date_received_before').value;

    if (startDateValue && endDateValue) {
      this.paginator.changePage(0);
      this.searchForm.get('page').patchValue(1);
      this.rangeCalendar = [this.searchForm.get('date_received_after').value, this.searchForm.get('date_received_before').value];
      this.search();
    }
  }


  toggleFilterVisibility() {
    this.isHideFilters = !this.isHideFilters;
    this.setTableScrollHeight();
  }

  setTableScrollHeight() {
    if (this.isHideFilters && !this.isShowAll) {
      this.tableScrollHeight = '20.9125rem';
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

  searchByCategories(ids: number[]) {
    if (ids.length > 0) {
      this.searchForm.get('categories').patchValue(ids);
    } else {
      this.searchForm.get('categories').patchValue(null);
    }
    this.search();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

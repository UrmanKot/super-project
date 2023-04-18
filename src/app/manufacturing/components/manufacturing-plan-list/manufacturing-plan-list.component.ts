import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {Task} from '@shared/models/task';
import {map, tap} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrderProductService} from '../../../procurement/services/order-product.service';
import {OrderService} from '../../../procurement/services/order.service';
import {AdapterService} from '@shared/services/adapter.service';
import {QuerySearch} from '@shared/models/other';
import {TaskService} from '@shared/services/task.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Paginator} from 'primeng/paginator';

@UntilDestroy()
@Component({
  selector: 'pek-manufacturing-plan-list',
  templateUrl: './manufacturing-plan-list.component.html',
  styleUrls: ['./manufacturing-plan-list.component.scss']
})
export class ManufacturingPlanListComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;

  searchForm: FormGroup = this.fb.group({
    nomenclature__name: [null],
    nomenclature__code: [null],
    request_date: [null],
    technologies_ids: [null],
  });

  currentPage = 1;
  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);

  query: QuerySearch[] = [];
  isLoading = true;
  selectedTasks: Task[];

  isStartFirstPage = false;
  isShowAll = false;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  tasks$: Observable<Task[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.taskService.getForPagination(this.query)),
    tap(response => this.tasksCount = response.count),
    map(response => response.results),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  )

  tasksCount = 0;

  constructor(
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    private readonly taskService: TaskService,
  ) { }

  ngOnInit(): void {
  }

  paginateToFistPage() {
    if (this.isStartFirstPage) {
      this.paginator?.changePage(0);
    }

    this.isStartFirstPage = false;
  }

  prepareForSearch() {
    this.isLoading = true;
    this.selectedTasks = [];

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.currentPage = 1;
      this.queryKey = newQueryKey;
      this.isStartFirstPage = true;
    }

    this.query = [
      {name: 'is_root', value: true},
      {name: 'page', value: this.currentPage},
      {name: 'statuses', value: [0, 1, 2, 3]}
    ];

    if (!this.isShowAll) {
      this.query.push({name: 'paginated', value: true},)
    }

    for (const key in this.searchForm.controls) {
      if (this.searchForm.controls[key].value !== null) {

        if (this.searchForm.controls[key].value instanceof Date) {
          this.query.push({
            name: key,
            value: this.adapterService.dateAdapter(this.searchForm.controls[key].value)
          });
        } else {
          this.query.push({
            name: key,
            value: this.searchForm.controls[key].value
          });
        }
      }
    }
  }

  paginate($event: any) {

  }

  onShowAll(b: boolean) {

  }
}

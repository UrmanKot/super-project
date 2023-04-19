import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {Task} from '@shared/models/task';
import {map, tap} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
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

  tasks: Task[] = [];

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
    map(response => this.filterTasks(response.results)),
    tap(() => this.paginateToFistPage()),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  tasksCount = 0;

  constructor(
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    private readonly taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
  }

  filterTasks(tasks: Task[]) {
    let newTasks: Task[] = [];

    tasks.forEach(task => {
      if (!newTasks.find(t => t.family_id === task.family_id && t.list_product.nomenclature.id === task.list_product.nomenclature.id
        && t.technology === task.technology)) {
        const count = tasks.filter(t => t.family_id === task.family_id && t.list_product.nomenclature.id === task.list_product.nomenclature.id
          && t.technology === task.technology).length;
        task.required_quantity = task.required_quantity * count;
        task.serials = [];

        const filteredTasks = tasks.filter(t => t.family_id === task.family_id && t.list_product.nomenclature.id
          === task.list_product.nomenclature.id && t.technology === task.technology);

        filteredTasks.forEach(t => {
          if (task.serial_numbers.length > 0) {
            t.serial_numbers.forEach(serial => {
              task.serials.push(serial);
            });
          } else if (task.serial_products.length > 0) {
            t.serial_products.forEach(serial => {
              task.serials.push(serial.serial_number);
            });
          }
        });

        newTasks.push(task);
      }
    })

    newTasks.sort((a, b) => new Date(a.created).getTime() > new Date(b.created).getTime() ? -1 : 1);

    return newTasks;
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
      this.query.push({name: 'paginated', value: true},);
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

  getStatus(status: string): string {
    switch (status) {
      case '0':
        return 'Not processed';
      case '1':
        return 'Deficit';
      case '2':
        return 'Rework';
      case '3':
        return 'Ordered';
      case '4':
        return 'On stock';
    }
  }

  paginate($event: any) {

  }

  onShowAll(b: boolean) {

  }
}

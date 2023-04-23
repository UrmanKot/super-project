import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Task} from '@shared/models/task';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {AdapterService} from '@shared/services/adapter.service';
import {TaskService} from '@shared/services/task.service';
import {QuerySearch} from '@shared/models/other';
import {Paginator} from 'primeng/paginator';
import {ModalService} from '@shared/services/modal.service';
import {Table} from 'primeng/table';
import {Employee} from '@shared/models/employee';
import {Nomenclature} from '@shared/models/nomenclature';
import {MenuItem} from 'primeng/api';

@UntilDestroy()
@Component({
  selector: 'pek-manufacturing-slice-tasks',
  templateUrl: './manufacturing-slice-tasks.component.html',
  styleUrls: ['./manufacturing-slice-tasks.component.scss']
})
export class ManufacturingSliceTasksComponent implements OnInit {
  @ViewChild('paginator') paginator: Paginator;
  @ViewChild('dt') table: Table;

  taskStatuses = [
    {id: 0, name: 'Not processed'},
    {id: 1, name: 'Deficit'},
    {id: 2, name: 'Rework'},
    {id: 3, name: 'Ordered'},
    {id: 4, name: 'On Stock'},
  ];

  employees: Employee[] = [];

  currentDate: Date = new Date();

  startDate: Date;
  endDate: Date;

  lists: Nomenclature[] = [];

  isStartFirstPage = false;
  isPeriod: boolean = false;

  searchForm: FormGroup = this.fb.group({
    employees_id: [null],
    status: [null],
    technology_id: [null],
    product_list_origin_id: [null],
  });

  queryKey: string = this.adapterService.generateQueryKey(this.searchForm);
  query: QuerySearch[] = [];

  tasks: Task[] = [];

  tasksCount = 0;

  isLoading = true;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  tasks$: Observable<Task[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.taskService.get(this.query)),
    tap(response => this.tasksCount = response.length),
    tap(tasks => this.filterTasks(tasks)),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  isLoadingFilters = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly adapterService: AdapterService,
    private readonly taskService: TaskService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.tasks$.subscribe();
  }

  onChoiceDate() {
    this.modalService.openChoiceDateDialog('Select the day for which you want to view the tasks').pipe(
      filter(response => !!response),
      tap(() => this.isLoadingFilters = false),
      tap(() => this.isPeriod = false),
      tap(date => this.currentDate = date),
      tap(() => this.search$.next())
    ).subscribe();
  }


  onChoicePeriod() {
    this.modalService.openChoicePeriodDateDialog()
      .pipe(
        filter(response => !!response),
        tap(() => this.isLoadingFilters = false),
        tap(dates => {
          this.isPeriod = true;
          this.startDate = dates.startDate;
          this.endDate = dates.endDate;
        }),
        tap(() => this.search$.next())
      )
      .subscribe();
  }

  prepareForSearch() {
    this.isLoading = true;
    this.tasks = [];

    const newQueryKey = this.adapterService.generateQueryKey(this.searchForm);

    if (newQueryKey !== this.queryKey) {
      this.queryKey = newQueryKey;
    }

    this.query = [];

    if (!this.isPeriod) {
      this.query.push({name: 'date', value: this.convertDate(this.currentDate)});
    } else {
      this.query.push({name: 'start_date__gte', value: this.adapterService.dateAdapter(this.startDate)});
      this.query.push({name: 'end_date__lte', value: this.adapterService.dateAdapter(this.endDate)});
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

  convertDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  private filterTasks(tasks: Task[]) {
    this.tasks = tasks.filter(t => t.list_product.nomenclature.type !== '0');

    if (!this.isLoadingFilters) {
      this.generateTasksEmployees();
      this.generateLists();
      this.isLoadingFilters = true;
    }

  }

  generateTasksEmployees() {
    this.employees = [];

    this.tasks.forEach(task => {
      task.employees.forEach(employee => {
        if (!this.employees.find(e => e.id === employee.employee.id)) {
          employee.employee.fullName = `${employee.employee.first_name} ${employee.employee.last_name}`;
          this.employees.push(employee.employee);
        }
      });
    });
  }

  onSelectEmployees(evt: any) {
    this.searchForm.get('employees_id').patchValue(evt?.value?.join(',').length > 0 ? evt.value.join(',') : null);
    this.search$.next();
  }

  private generateLists() {
    this.lists = [];

    this.tasks.forEach(task => {
      if (task.root_nomenclature && !this.lists.find(l => l.id === task.root_nomenclature.id)) {
        task.root_nomenclature.fullName = `(${task.production_list_id}) ${task.root_nomenclature.name}`
        // @ts-ignore
        task.root_nomenclature.production_list_id = task.production_list_id;
        this.lists.push(task.root_nomenclature);
      }
    });
  }
}

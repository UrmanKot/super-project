import {Component, OnInit} from '@angular/core';
import {Employee} from '@shared/models/employee';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {EmployeeService} from '@shared/services/employee.service';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';

@UntilDestroy()
@Component({
  selector: 'pek-manufacturing-employees',
  templateUrl: './manufacturing-employees.component.html',
  styleUrls: ['./manufacturing-employees.component.scss']
})
export class ManufacturingEmployeesComponent implements OnInit {

  menuItems: MenuItem[] = [{
    label: 'Selected Employee',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditEmployee()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.onRemoveEmployee()
      }
    ]
  }];

  employees: Employee[] = [];
  selectedEmployee: Employee;
  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  isLoading = false;


  employees$: Observable<Employee[]> = this.search$.pipe(
    tap(() => this.prepareForSearch()),
    switchMap(() => this.employeeService.get()),
    map(employees => this.convertEmployees(employees)),
    tap(employees => this.employees = employees),
    tap(() => this.isLoading = false),
    untilDestroyed(this)
  );

  constructor(
    private employeeService: EmployeeService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.employees$.subscribe();
  }

  convertEmployees(employees: Employee[]): Employee[] {
    return employees.map(employee => {
      return {
        ...employee,
        start_time: employee.start_time.split(':').splice(-3, 2).join(':'),
        max_working_time: employee.max_working_time.split(':').splice(-3, 2).join(':'),
      };
    });
  }

  onAddEmployee() {
    this.employeeService.createEditEmployeeModal('create').pipe(
      filter(employee => !!employee)
    ).subscribe(employee => this.employees.unshift(employee));
  }

  private prepareForSearch() {
    this.isLoading = true;
    this.selectedEmployee = null;
    this.employees = [];
  }

  private onEditEmployee() {
    this.employeeService.createEditEmployeeModal('edit', this.selectedEmployee).pipe(
      filter(employee => !!employee)
    ).subscribe(employee => {
      const index = this.employees.findIndex(t => t.id === this.selectedEmployee.id);
      this.employees[index] = employee;
      this.selectedEmployee = this.employees[index];
    });
  }

  private onRemoveEmployee() {
    this.modalService.confirm('danger').pipe(
      filter(confirm => confirm)
    ).subscribe(confirm => {
      this.employeeService.delete(this.selectedEmployee.id).subscribe(() => {
        const index = this.employees.findIndex(e => e.id === this.selectedEmployee.id);
        this.employees.splice(index, 1);
        this.selectedEmployee = null;
      });
    });
  }
}

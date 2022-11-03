import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EmployeeService} from '@shared/services/employee.service';
import {Employee} from '@shared/models/employee';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'pek-employee-picker',
  templateUrl: './employee-picker.component.html',
  styleUrls: ['./employee-picker.component.scss']
})
export class EmployeePickerComponent implements OnInit, OnDestroy {
  @Output() selectEmployee: EventEmitter<number> = new EventEmitter<number>();
  @Input() isDisabled: boolean = false;

  selectEmployeeId: number;
  isLoading = true;

  employees: Employee[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly employeeService: EmployeeService
  ) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAll().pipe(
      takeUntil(this.destroy$)
    ).subscribe(employees => {
      this.employees = employees;
      this.isLoading = false;
    });
  }

  onSelectTechnology() {
    this.selectEmployee.emit(this.selectEmployeeId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

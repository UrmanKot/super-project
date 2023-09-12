import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {CrmEmployeeService} from '../../services/crm-employee.service';
import {CRMEmployee} from '../../models/crm-employee';

@Component({
  selector: 'pek-crm-employee-picker',
  templateUrl: './crm-employee-picker.component.html',
  styleUrls: ['./crm-employee-picker.component.scss']
})
export class CrmEmployeePickerComponent implements OnInit, OnDestroy {
  @Input() currentEmployeeIds: number[] = [];
  @Output() selectEmployees: EventEmitter<number[]> = new EventEmitter<number[]>();

  isLoading = true;
  employees: CRMEmployee[] = [];
  selectedEmployees: CRMEmployee[] = [];

  private destroy$ = new Subject();

  constructor(
    private readonly crmEmployeeService: CrmEmployeeService,
  ) {
  }

  ngOnInit(): void {
    this.crmEmployeeService.get().pipe(
      takeUntil(this.destroy$)
    ).subscribe(employees => {
      this.employees = employees;
      this.findEmployees();
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('currentEmployeeIds' in changes) {
      this.selectedEmployees = [];
      this.findEmployees();
    }
  }

  onSelectEmployees(employees: CRMEmployee[]) {
    if (employees) {
      this.selectEmployees.emit(employees.map(e => e.id));
    } else {
      this.selectEmployees.emit(null);
    }
  }

  findEmployees() {
    if (this.currentEmployeeIds?.length > 0) {
      this.currentEmployeeIds.forEach(id => {
        const findEmployee = this.employees.find(t => t.id === id);

        if (findEmployee) {
          this.selectedEmployees.push(findEmployee);
        }
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

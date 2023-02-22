import {Component, EventEmitter, forwardRef, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CustomEmployeesService} from '../../../models/custom-employees.service';
import {map} from 'rxjs/operators';
import {CRMEmployee} from '../../../../crm/models/crm-employee';
import {CrmEmployeeService} from '../../../../crm/services/crm-employee.service';
import {merge} from 'rxjs';
import {QuerySearch} from '@shared/models/other';

export class EmployeeWithCustom {
  employee?: CRMEmployee;
  customEmployee?: CRMEmployee;
  order: number;
  id: string;
}

@Component({
  selector: 'pek-business-trips-multi-employee-with-custom',
  templateUrl: './business-trips-multi-employee-with-custom.component.html',
  styleUrls: ['./business-trips-multi-employee-with-custom.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BusinessTripsMultiEmployeeWithCustomComponent), multi: true
    }
  ]
})
export class BusinessTripsMultiEmployeeWithCustomComponent implements OnInit {

  @Output() valueChange = new EventEmitter<EmployeeWithCustom[]>();
  employees: CRMEmployee[];
  customEmployees: EmployeeWithCustom[] = [];
  selectedEmployees: string[];
  employeeFilter: [QuerySearch] = [{name: 'by_user_trip_permissions', value: true}];

  constructor(
    private crmEmployeeService: CrmEmployeeService,
    private customEmployeesService: CustomEmployeesService,
  ) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getContactPersons() {
    return this.crmEmployeeService.get(this.employeeFilter).pipe(map(employees => {
      return employees.map(employee => {
        return {
          employee, order: 1, id: 'e' + employee.id
        };
      });
    }));
  }

  getCustomEmployees() {
    return this.customEmployeesService.get().pipe(map(employees => {
      return employees.map(employee => {
        console.log(employee);
        return {
          customEmployee: employee, order: 2, id: 'c' + employee.id
        };
      });
    }));
  }

  getEmployees() {
    merge(
      this.getContactPersons(),
      this.getCustomEmployees()
    ).subscribe(res => {
      this.customEmployees.push(...res);
      console.log(this.customEmployees);
      this.customEmployees.sort((a, b) => a.order - b.order);
    });
  }

  onChange(employees: string[]) {
    this.setValue(employees);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  private setValue(employees: string[]) {
    this.selectedEmployees = employees;

    if (this.selectedEmployees) {
      const selectedEmployees = this.customEmployees.filter(filterEmployee => {
        return this.selectedEmployees.findIndex(employee => filterEmployee.id === employee) > -1;
      });
      this.valueChange.emit(selectedEmployees);
    } else {
      this.valueChange.emit(null);
    }
  }

  writeValue(obj: any): void {
    this.selectedEmployees = obj;
  }
}

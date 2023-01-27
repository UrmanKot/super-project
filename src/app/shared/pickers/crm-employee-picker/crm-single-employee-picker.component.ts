import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {take} from 'rxjs/operators';
import {QuerySearch} from '@shared/models/other';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CRMEmployee} from '../../../crm/models/crm-employee';
import {CrmEmployeeService} from '../../../crm/services/crm-employee.service';

@Component({
  selector: 'pek-crm-single-employee-picker',
  templateUrl: './crm-single-employee-picker.component.html',
  styleUrls: ['./crm-single-employee-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CrmSingleEmployeePickerComponent), multi: true}]
})
export class CrmSingleEmployeePickerComponent implements OnInit, ControlValueAccessor {

  @Output() valueChange = new EventEmitter<CRMEmployee>();
  @Input() employee: number;
  @Input() selectedEmployee: CRMEmployee;
  @Input() placeholder = 'Choose Employee';
  @Input() showProfession = false;
  @Input() filters: QuerySearch[];
  @Input() showClear: boolean;

  employees: CRMEmployee[];
  isLoading = true;

  constructor(
    private crmEmployeeService: CrmEmployeeService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.crmEmployeeService
      .get(this.filters)
      .pipe(take(1))
      .subscribe((res) => {
        this.employees = res;
        if (this.employee) {
          this.selectedEmployee = this.employees.find(currency => currency.id === this.employee);
        }
        this.isLoading = false;
      });
  }

  onChange(employee: number) {
    this.setValue(employee);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(employee: number) {
    this.employee = employee;
    this.selectedEmployee = this.employees.find(currency => currency.id === this.employee);
    delete this.selectedEmployee.fullName;
    this.valueChange.emit(this.selectedEmployee);
  }

  writeValue(obj: any): void {
    this.employee = obj;
  }

}

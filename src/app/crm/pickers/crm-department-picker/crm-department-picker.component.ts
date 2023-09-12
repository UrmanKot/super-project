import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {take} from 'rxjs/operators';
import {CrmDepartment} from '../../../business-trips/models/crm-department';
import {CrmDepartmentService} from '../../services/crm-department.service';

@Component({
  selector: 'pek-crm-department-picker',
  templateUrl: './crm-department-picker.component.html',
  styleUrls: ['./crm-department-picker.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CrmDepartmentPickerComponent), multi: true}]
})
export class CrmDepartmentPickerComponent implements OnInit, ControlValueAccessor {
  @Output() valueChange = new EventEmitter<CrmDepartment>();
  @Input() department: number;
  @Input() selectedDepartment: CrmDepartment;
  @Input() placeholder = 'Choose Department';
  @Input() showClear: boolean;

  departments: CrmDepartment[];
  isLoading = true;

  constructor(
    private crmDepartmentService: CrmDepartmentService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.crmDepartmentService
      .get()
      .pipe(take(1))
      .subscribe((res) => {
        this.departments = res;
        if (this.department) {
          this.selectedDepartment = this.departments.find(department => department.id === this.department);
        }
        this.isLoading = false;
      });
  }

  onChange(department: number) {
    this.setValue(department);
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // okay
  }

  private setValue(department: number) {
    this.department = department;
    this.selectedDepartment = this.departments.find(foundDepartment => foundDepartment.id === this.department);
    this.valueChange.emit(this.selectedDepartment);
  }

  writeValue(obj: any): void {
    this.department = obj;
  }
}

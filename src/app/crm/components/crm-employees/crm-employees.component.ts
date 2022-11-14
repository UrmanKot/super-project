import {Component, OnDestroy, OnInit} from '@angular/core';
import {CrmEmployeeService} from '../../services/crm-employee.service';
import {Subject} from 'rxjs';
import {CRMEmployee} from '../../models/crm-employee';
import {MenuItem} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';

@Component({
  selector: 'pek-crm-employees',
  templateUrl: './crm-employees.component.html',
  styleUrls: ['./crm-employees.component.scss']
})
export class CrmEmployeesComponent implements OnInit, OnDestroy {

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

  private destroy$ = new Subject();

  employees: CRMEmployee[] = [];
  selectedEmployee: CRMEmployee;
  isLoading = true;

  constructor(
    private readonly crmEmployeeService: CrmEmployeeService,
    private readonly modalService: ModalService,
  ) {
  }

  ngOnInit(): void {
    this.crmEmployeeService.get().subscribe(employees => {
      this.employees = employees;
      this.isLoading = false;
    });
  }

  onAddEmployee() {
    this.crmEmployeeService.createEditEmployeeModal('create').subscribe(employee => {
      if (employee) {
        this.employees.unshift(employee);
        this.renderTable();
      }
    });
  }

  onEditEmployee() {
    this.crmEmployeeService.createEditEmployeeModal('edit', this.selectedEmployee).subscribe(employee => {
      if (employee) {
        const index = this.employees.findIndex(t => t.id === this.selectedEmployee.id);
        this.employees[index] = employee;
        this.selectedEmployee = this.employees[index];
        this.renderTable();
      }
    })
  }

  onRemoveEmployee() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.crmEmployeeService.delete(this.selectedEmployee).subscribe(() => {
          const index = this.employees.findIndex(w => w.id === this.selectedEmployee.id);
          this.employees.splice(index, 1);
          this.selectedEmployee = null;
          this.renderTable();
        });
      }
    });
  }

  renderTable() {
    this.employees = this.employees.map(el => el);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

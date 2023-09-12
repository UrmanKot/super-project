import {Component, OnDestroy, OnInit} from '@angular/core';
import {CrmEmployeeService} from '../../services/crm-employee.service';
import {forkJoin, Subject} from 'rxjs';
import {CRMEmployee} from '../../models/crm-employee';
import {MenuItem, TreeNode} from 'primeng/api';
import {ModalService} from '@shared/services/modal.service';
import {CrmPosition} from '../../../business-trips/models/crm-position';
import {CrmDepartment} from '../../../business-trips/models/crm-department';
import {CrmPositionsService} from '../../services/crm-positions.service';
import {CrmDepartmentService} from '../../services/crm-department.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import * as cloneDeep from 'lodash/cloneDeep';


@UntilDestroy()
@Component({
  selector: 'pek-crm-employees',
  templateUrl: './crm-employees.component.html',
  styleUrls: ['./crm-employees.component.scss']
})
export class CrmEmployeesComponent implements OnInit, OnDestroy {
  tree: TreeNode[] = [];
  selected: TreeNode;
  expanseMapDepartments = {};
  expanseMapPositions = {};

  positions: CrmPosition[] = [];
  departments: CrmDepartment[] = [];

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
    private crmPositionService: CrmPositionsService,
    private crmDepartmentService: CrmDepartmentService,
  ) {
  }

  ngOnInit(): void {
    // this.crmEmployeeService.get().subscribe(employees => {
    //   this.employees = employees;
    //   this.isLoading = false;
    // });
    this.prepareTree();
  }

  prepareTree() {
    forkJoin({
      departments: this.crmDepartmentService.get(),
      positions: this.crmPositionService.get(),
      employees: this.crmEmployeeService.get()
    }).pipe(untilDestroyed(this)).subscribe(({departments, positions, employees}) => {
      this.departments = departments;
      this.positions = positions;
      this.employees = employees;
      this.createTree();
    });
  }

  createTree() {
    if (this.tree) {
      this.mapExpansion();
    }
    const tree = [];

    let expandedEmptyPosition = false;
    // Filling tree with employees without positions assigned
    if (this.expanseMapPositions) {
      expandedEmptyPosition = this.expanseMapPositions[95_000_000];
    }
    tree.push({
      data: {position: {title: 'Without Position', id: 95_000_000}},
      expanded: expandedEmptyPosition,
      children: this.employees.filter(r => !r.position).map(employee => {

        return {
          data: {employee: employee},
          expanded: false,
          children: [],
        };
      })
    });

    // Filling tree with Positions and employees without Departments
    let expanded = false;
    if (this.expanseMapDepartments) {
      expanded = this.expanseMapDepartments[90_000_000];
    }
    tree.push({
      data: {department: {title: 'Without Department', id: 90_000_000}},
      expanded: expanded,
      children: this.positions.filter(r => !r.department).map(position => {
        let expanded = false;
        if (this.expanseMapPositions) {
          expanded = this.expanseMapPositions[position.id];
        }
        return {
          data: {position: position},
          expanded: expanded,
          children: this.employees.filter(r => r.position).filter(r => (r.position as CrmPosition).id === position.id).map(employee => {

            return {
              data: {employee: employee},
              expanded: false,
              children: [],
            };
          }),
        };
      })
    });

    // Filling tree with Positions and employees to corresponding Departments
    this.departments.forEach(department => {
      let expanded = false;
      if (this.expanseMapDepartments) {
        expanded = this.expanseMapDepartments[department.id];
      }
      tree.push({
        data: {department: department},
        expanded: expanded,
        children: this.positions.filter(r => r.department).filter(r => (r.department as CrmDepartment).id === department.id).map(position => {
          let expanded = false;
          if (this.expanseMapPositions) {
            expanded = this.expanseMapPositions[position.id];
          }
          return {
            data: {position: position},
            expanded: expanded,
            children: this.employees.filter(r => r.position).filter(r => (r.position as CrmPosition).id === position.id).map(employee => {

              return {
                data: {employee: employee},
                expanded: false,
                children: [],
              };
            }),
          };
        })
      });
    });
    this.tree = tree.map(n => n);
  }

  mapExpansion() {
    this.tree.forEach(element => {
      this.createExpanseMap(element);
    });
  }

  createExpanseMap(node) {
    if (node.expanded) {
      if (node.data.department) {
        this.expanseMapDepartments[node.data.department.id] = node.expanded;
      }
      if (node.data.position) {
        this.expanseMapPositions[node.data.position.id] = node.expanded;
      }
    } else {
      if (node.data.department) {
        this.expanseMapDepartments[node.data.department.id] = false;
      }
      if (node.data.position) {
        this.expanseMapPositions[node.data.position.id] = false;
      }
    }
    if (node.children) {
      node.children.forEach(element => {
        this.createExpanseMap(element);
      });
    }
  }


  onAddEmployee() {
    this.crmEmployeeService.createEditEmployeeModal('create').subscribe(employee => {
      if (employee) {
        this.prepareTree();
      }
    });
  }

  onEditEmployee() {
    this.crmEmployeeService.createEditEmployeeModal('edit', this.selected.data.employee).subscribe(employee => {
      if (employee) {
        this.prepareTree();
      }
    });
  }

  onRemoveEmployee() {
    this.modalService.confirm('danger').subscribe(confirm => {
      if (confirm) {
        this.crmEmployeeService.delete(this.selected.data.employee).subscribe(() => {
          this.prepareTree();
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

  expandCollapseRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandCollapseRecursive(childNode, isExpand);
      });
    }
  }

  expandCollapse(isToExpand = true): void {
    const temp = cloneDeep(this.tree);
    temp.forEach(node => {
      this.expandCollapseRecursive(node, isToExpand);
    });
    this.tree = temp;
  }
}

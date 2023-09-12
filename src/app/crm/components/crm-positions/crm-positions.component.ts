import {Component, OnInit} from '@angular/core';
import {CrmPositionsService} from '../../services/crm-positions.service';
import {take} from 'rxjs/operators';
import {CrmPosition} from '../../../business-trips/models/crm-position';
import {ModalService} from '@shared/services/modal.service';
import {MenuItem, TreeNode} from 'primeng/api';
import {CrmDepartmentService} from '../../services/crm-department.service';
import {forkJoin} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {CrmDepartment} from '../../../business-trips/models/crm-department';
import * as cloneDeep from 'lodash/cloneDeep';


@UntilDestroy()
@Component({
  selector: 'pek-crm-positions',
  templateUrl: './crm-positions.component.html',
  styleUrls: ['./crm-positions.component.scss']
})
export class CrmPositionsComponent implements OnInit {
  tree: TreeNode[] = [];
  selected: TreeNode;

  expanseMapDepartments = {};

  positions: CrmPosition[] = [];
  departments: CrmDepartment[] = [];
  isLoading = true;

  menuItemsPositions: MenuItem[] = [{
    label: 'Selected Position',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editPosition()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deletePosition()
      }
    ]
  }];

  menuItemsDepartments: MenuItem[] = [{
    label: 'Selected Department',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editDepartment()
      },
      {
        label: 'Remove',
        icon: 'pi pi-trash',
        command: () => this.deleteDepartment()
      }
    ]
  }];

  constructor(
    private crmPositionService: CrmPositionsService,
    private crmDepartmentService: CrmDepartmentService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.prepareTree();
  }

  prepareTree() {
    forkJoin({
      departments: this.crmDepartmentService.get(),
      positions: this.crmPositionService.get(),
    }).pipe(untilDestroyed(this)).subscribe(({departments, positions}) => {
      this.departments = departments;
      this.positions = positions;
      this.createTree();
    });
  }

  createTree() {
    if (this.tree) {
      this.mapExpansion();
    }
    const tree = [];
    let expanded = false;
    if (this.expanseMapDepartments) {
      expanded = this.expanseMapDepartments[90_000_000];
    }
    tree.push({
      data: {department: {title: 'Without Department', id: 90_000_000}},
      expanded: expanded,
      children: this.positions.filter(r => !r.department).map(position => {
        return {
          data: {position: position},
          expanded: false,
          children: [],
        };
      })
    });
    this.departments.forEach(department => {
      let expanded = false;
      if (this.expanseMapDepartments) {
        expanded = this.expanseMapDepartments[department.id];
      }
      tree.push({
        data: {department: department},
        expanded: expanded,
        children: this.positions.filter(r => r.department).filter(r => (r.department as CrmDepartment).id === department.id).map(position => {
          return {
            data: {position: position},
            expanded: false,
            children: [],
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
    } else {
      if (node.data.department) {
        this.expanseMapDepartments[node.data.department.id] = false;
      }
    }
    if (node.children) {
      node.children.forEach(element => {
        this.createExpanseMap(element);
      });
    }
  }

  addPosition() {
    this.crmPositionService
      .createEditCrmPositionModal('create')
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.prepareTree();
        }
      });
  }

  editPosition() {
    this.crmPositionService
      .createEditCrmPositionModal('edit', this.selected.data.position)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.prepareTree();
        }
      });
  }

  deletePosition() {
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1))
      .subscribe((confirm) => {
        if (confirm) {
          this.crmPositionService
            .delete(this.selected.data.position)
            .pipe(take(1))
            .subscribe((del) => {
              this.prepareTree();
            });
        }
      });
  }

  addDepartment() {
    this.crmDepartmentService
      .createEditCrmDepartmentModal('create')
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.prepareTree();
        }
      });
  }

  private editDepartment() {
    this.crmDepartmentService
      .createEditCrmDepartmentModal('edit', this.selected.data.department)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          this.prepareTree();
        }
      });
  }

  private deleteDepartment() {
    this.modalService
      .confirm('danger', 'Confirm')
      .pipe(take(1))
      .subscribe((confirm) => {
        if (confirm) {
          this.crmDepartmentService
            .delete(this.selected.data.department)
            .pipe(take(1))
            .subscribe((del) => {
              this.prepareTree();
            });
        }
      });
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

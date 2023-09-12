import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../../models/user";
import {Role} from "../../models/role";
import {RoleService} from "../../services/role.service";
import {BehaviorSubject, Observable, of, startWith, switchMap} from "rxjs";
import {QuerySearch} from "@shared/models/other";
import {finalize, map, tap} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {CompanyCategory} from "../../../crm/models/company-category";
import {EventTypesService} from "../../../crm/services/event-types.service";
import {EventType} from "../../../crm/models/event-type";
import {CompanyCategoryService} from "../../../crm/services/company-category.service";
import {BusinessTripsPermissionService} from "../../../business-trips/services/business-trips-permission.service";
import {CrmEmployeeService} from "../../../crm/services/crm-employee.service";
import {CRMEmployee} from "../../../crm/models/crm-employee";
import {CategoriesService} from "../../../product-structure/services/categories.service";
import {CorrespondentTypes} from "../../../correspondent/enum/correspondent-types.enum";
import {TreeService} from "@shared/services/tree.service";
import {CorrespondentsCategoriesService} from "../../../correspondent/services/correspondents-category.service";
import {AdapterService} from "@shared/services/adapter.service";

@UntilDestroy()
@Component({
  selector: 'pek-edit-user-roles',
  templateUrl: './edit-user-roles.component.html',
  styleUrls: ['./edit-user-roles.component.scss']
})
export class EditUserRolesComponent implements OnInit {

  isSaving = false;
  isLoading = false;

  roles: Role[];
  selectedRoles: any[] = [];

  form = this.fb.group({
    categories: [[]],
    eventTypes: [[]],
    externalEventTypes: [[]],
    incomingCorrespondentCategoryPermissions: [[]],
    outgoingCorrespondentCategoryPermissions: [[]],
  });

  categories: CompanyCategory[];

  currentPage = 1;

  count = 0;

  search$: BehaviorSubject<void> = new BehaviorSubject<void>(null);
  query: QuerySearch[] = [];

  eventTypes: EventType[];
  externalEventTypes: EventType[];

  businessTripEmployeesIds: number[];

  isLoadingEventTypes = true;
  isLoadingExternalEventTypes = true;
  isLoadingCategories = true;
  isLoadingPermissions = true;
  isLoadingEmployees = true;

  isLoadingIncomingCategories = true;
  isLoadingOutgoingCategories = true;

  incomingCategoriesTree = [];
  outgoingCategoriesTree = [];

  incomingIds = [];
  outgoingIds = [];

  roles$: Observable<Role[]> = this.search$.pipe(
    tap(() => this.isLoading = true),
    switchMap(() => this.roleService.getForPagination([{name: 'page', value: this.currentPage}]).pipe(
        tap(response => this.count = response.count),
        map(response => response.results),
        tap(() => this.isLoading = false),
        startWith([]),
        untilDestroyed(this)
      ),
    ),
    untilDestroyed(this)
  )

  employees: CRMEmployee[] = [];

  canVerifyTripExpenses = false;
  canAcceptChangesOnImport = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly roleService: RoleService,
    private readonly eventTypesService: EventTypesService,
    private readonly treeService: TreeService,
    private readonly companyCategoryService: CompanyCategoryService,
    private readonly categoryService: CategoriesService,
    private readonly businessTripPermissionService: BusinessTripsPermissionService,
    private readonly crmEmployeeService: CrmEmployeeService,
    private readonly correspondentsCategoriesService: CorrespondentsCategoriesService,
    private readonly adapterService: AdapterService,
    private dialogRef: MatDialogRef<EditUserRolesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {
  }

  ngOnInit(): void {
    this.canVerifyTripExpenses = this.data.user.can_verify_expenses;
    this.canAcceptChangesOnImport = this.data.user.can_accept_changes_on_import;
    this.data.user.groups.forEach(group => this.selectedRoles.push({id: group.id}));
    this.form.get('categories').patchValue(this.data.user.company_categories.map(c => c.id));
    this.getEventTypes();
    this.getExternalEventTypes();
    this.getCategories();
    this.getPermissions();
    this.getEmployees();
    this.getIncomingCategories();
    this.getOutgoingCategories();
    this.prepareCorrespondentCategories();
  }

  onSave() {
    const send = {
      group_ids: []
    };
    send.group_ids = this.selectedRoles.map(role => role.id);
    // send.group_ids = send.group_ids.slice(0, -1);

    this.isSaving = true;
    this.userService.addRoleToUser(this.data.user.id, send).pipe(
      switchMap(() => this.saveCategoriesPermissions()),
      switchMap(() => this.updateBusinessTripPermissions()),
      switchMap(() => this.updateBusinessTripVerifyPermissions()),
      switchMap(() => this.updateCanAcceptChangesOnImportPermissions()),
      finalize(() => this.isSaving = false)
    ).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  updateBusinessTripVerifyPermissions(): Observable<any> {
    const data = {can_verify: this.canVerifyTripExpenses};
    if (this.data.user.can_verify_expenses !== this.canVerifyTripExpenses) {
      return this.businessTripPermissionService.update_verify_permission(this.data.user.id, data);
    } else {
      return of(true);
    }
  }

  updateCanAcceptChangesOnImportPermissions(): Observable<any> {
    const data = {can_accept: this.canAcceptChangesOnImport};
    if (this.data.user.can_accept_changes_on_import !== this.canAcceptChangesOnImport) {
      return this.userService.update_can_verify_import(this.data.user.id, data);
    } else {
      return of(true);
    }
  }

  saveCategoriesPermissions(): Observable<any> {
    const innerEventTypes = this.form.get('eventTypes').value;
    const externalEventTypes = this.form.get('externalEventTypes').value;
    const allowedAccessEventTypes = [...innerEventTypes, ...externalEventTypes];

    const incomingCorrespondentPermissions = this.form.get('incomingCorrespondentCategoryPermissions').value;
    const outgoingCorrespondentPermissions = this.form.get('outgoingCorrespondentCategoryPermissions').value;
    const allCorrespondentCategoriesPermissions = [...incomingCorrespondentPermissions, ...outgoingCorrespondentPermissions];
    const send: Partial<any> = {
      id: this.data.user.id,
      companycategory_set: this.form.get('categories').value,
      eventtype_set: allowedAccessEventTypes,
      correspondentcategory_set: allCorrespondentCategoriesPermissions.map(c => c.data.id),
    };

    return this.userService.editUserPermissions(send);
  }

  updateBusinessTripPermissions(): Observable<any> {
    const data = {employees_ids: this.businessTripEmployeesIds ? this.businessTripEmployeesIds : []};
    return this.businessTripPermissionService.update(this.data.user.id, data);
  }

  getIncomingCategories() {
    this.correspondentsCategoriesService.get([{name: 'type', value: CorrespondentTypes.INCOMING}]).pipe(
      untilDestroyed(this)
    ).subscribe(categories => {
      const fill = (nodes: any[]) => {
        nodes.forEach(n => {
          n.label = n.data.name;

          if (n.children?.length) {
            fill(n.children)
          }
        })
      }

      this.incomingCategoriesTree = this.adapterService.treeAdapter(categories, false, false, true);

      fill(this.incomingCategoriesTree);

      this.choiceIncomingCategories(this.incomingIds)

      this.isLoadingIncomingCategories = false;
    })
  }

  getOutgoingCategories() {
    this.correspondentsCategoriesService.get([{name: 'type', value: CorrespondentTypes.OUTGOING}]).pipe(
      untilDestroyed(this)
    ).subscribe(categories => {
      const fill = (nodes: any[]) => {
        nodes.forEach(n => {
          n.label = n.data.name;

          if (n.children?.length) {
            fill(n.children)
          }
        })
      }

      this.outgoingCategoriesTree = this.adapterService.treeAdapter(categories, false, false, true);

      fill(this.outgoingCategoriesTree);

      this.choiceOutgoingCategories(this.outgoingIds)

      this.isLoadingOutgoingCategories = false;
    })
  }

  choiceIncomingCategories(ids) {
    const categoryNodes = [];

    ids.forEach(id => {
      this.incomingCategoriesTree.forEach(item => {
        searchTree(item, id);
      });
    });

    function searchTree(node, matchingTitle) {
      if (node.data.id === matchingTitle) {
        categoryNodes.push(node);
        return node;
      } else if (node.children) {
        let result = null;

        node.children.forEach(item => {
          result = searchTree(item, matchingTitle);
        });
      }
      return null;
    }

    this.incomingCategoriesTree = this.incomingCategoriesTree.map(c => c);
    this.form.get('incomingCorrespondentCategoryPermissions').patchValue(categoryNodes)
  }

  choiceOutgoingCategories(ids) {
    const categoryNodes = [];

    ids.forEach(id => {
      this.outgoingCategoriesTree.forEach(item => {
        searchTree(item, id);
      });
    });

    function searchTree(node, matchingTitle) {
      if (node.data.id === matchingTitle) {
        categoryNodes.push(node);
        return node;
      } else if (node.children) {
        let result = null;

        node.children.forEach(item => {
          result = searchTree(item, matchingTitle);
        });
      }
      return null;
    }

    this.outgoingCategoriesTree = this.outgoingCategoriesTree.map(c => c);
    this.form.get('outgoingCorrespondentCategoryPermissions').patchValue(categoryNodes)
  }

  prepareCorrespondentCategories() {
    const outgoingCategories = this.data.user.correspondent_category_permissions
      .filter(cat => cat.type === CorrespondentTypes.OUTGOING).map(cat => cat.id);
    const incomingCategories = this.data.user.correspondent_category_permissions
      .filter(cat => cat.type === CorrespondentTypes.INCOMING).map(cat => cat.id);
    this.incomingIds = incomingCategories;
    this.outgoingIds = outgoingCategories;
  }

  getPermissions(): void {
    this.businessTripPermissionService.get([{name: 'user_id', value: this.data.user.id}]).pipe(
      untilDestroyed(this)
    ).subscribe(res => {
      this.businessTripEmployeesIds = res.map(permission => permission.employee);
      this.isLoadingPermissions = false;
    });
  }

  getEmployees() {
    this.crmEmployeeService.get().pipe(
      untilDestroyed(this)
    ).subscribe(employees => {
      this.employees = employees;
      this.isLoadingEmployees = false;
    })
  }

  getCategories() {
    this.companyCategoryService.get().pipe(
      untilDestroyed(this)
    ).subscribe(categories => {
      this.categories = categories;
      this.isLoadingCategories = false;
    });
  }

  getEventTypes() {
    this.eventTypesService.getNoneCache([{name: 'is_inner', value: true}]).pipe(
      untilDestroyed(this)
    ).subscribe(eventTypes => {
      this.eventTypes = eventTypes;
      const innerIds = this.data.user.event_types.filter(type => eventTypes.findIndex(evType => evType.id === type.id) >= 0);
      this.form.get('eventTypes').patchValue(innerIds.map(c => c.id));
      this.isLoadingEventTypes = false;
    });
  }

  getExternalEventTypes() {
    this.eventTypesService.getNoneCache([{name: 'is_inner', value: false}]).pipe(
      untilDestroyed(this)
    ).subscribe(eventTypes => {
      this.externalEventTypes = eventTypes;
      const externalIds = this.data.user.event_types.filter(type => eventTypes.findIndex(evType => evType.id === type.id) >= 0);
      this.form.get('externalEventTypes').patchValue(externalIds.map(c => c.id));
      this.isLoadingExternalEventTypes = false;
    });
  }

  paginate(evt: any) {
    this.currentPage = evt.page + 1;
    this.search$.next();
  }
}

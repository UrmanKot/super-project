import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleService} from "../../services/role.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ModalActionType} from "@shared/models/modal-action";
import {Role} from "../../models/role";
import {QuerySearch} from "@shared/models/other";
import {ModulePermission, Permission, Permissions} from "../../models/permission";
import {SubModulePermission} from "../../models/sub-module-permission";
import {GroupSubModulePermission} from "../../models/group-sub-module-permission";
import {PermissionsService} from "../../services/permissions.service";
import {GroupSubModulePermissionService} from "../../services/group-sub-module-permission.service";
import {SubModulePermissionService} from "../../services/sub-module-permission.service";
import {forkJoin} from "rxjs";

const QC_MODULE_PERMISSION_ID = 5;

@Component({
  selector: 'pek-edit-role-permissions',
  templateUrl: './edit-role-permissions.component.html',
  styleUrls: ['./edit-role-permissions.component.scss']
})
export class EditRolePermissionsComponent implements OnInit {

  subModules: SubModulePermission[] = [];

  permissions: Permission[];
  rolePermissions: Permission[];
  role: Role;
  selectedPermissions: any[] = [];

  countPermissions = 0;
  searchForm: FormGroup = this.fb.group({
    offset: [0],
    limit: [1000]
  });

  modulesPermission: ModulePermission[];
  selectedModulesPermission: ModulePermission[] = [];

  isLoadingModulesPermissions = true;
  isLoadingPermissions = false;

  isSelectModulesMode = true;

  query: QuerySearch[] = [
    {name: 'limit', value: this.searchForm.get('limit').value},
    {name: 'offset', value: this.searchForm.get('offset').value}
  ];
  selectedModules: number[] = [];
  isQCModulePermissionSelected = false;
  groupSubModule: GroupSubModulePermission;

  isSaving = false;

  constructor(
    private readonly fb: FormBuilder,
    private permissionsService: PermissionsService,
    private rolesService: RoleService,
    private dialogRef: MatDialogRef<EditRolePermissionsComponent>,
    private groupSubModuleService: GroupSubModulePermissionService,
    private subModulePermissionService: SubModulePermissionService,
    @Inject(MAT_DIALOG_DATA) public data: { type: ModalActionType, role: Role }
  ) {
  }

  ngOnInit(): void {
    this.role = this.data.role;
    this.getModules();
    this.getSubModuleInfo();
  }

  getModules() {
    const query: QuerySearch[] = [{name: 'role_id', value: this.role.id}];
    this.permissionsService.getModulePermissions(query).subscribe(modulePermission => {
      this.modulesPermission = modulePermission;
      this.selectedModulesPermission = modulePermission.filter(m => m?.is_module_permissions_selected_in_role);
      this.isQCModulePermissionSelected = this.selectedModulesPermission.findIndex(module => module.id === QC_MODULE_PERMISSION_ID) > -1;
      this.isLoadingModulesPermissions = false;
    });
  }

  getGroupSubModuleInfo() {
    this.groupSubModuleService.get([{name: 'role', value: this.role.id}]).subscribe(groupSubModules => {
      if (groupSubModules.length > 0) {
        this.groupSubModule = groupSubModules[0];
        groupSubModules.forEach(module => {
          this.selectedModules.push(...module.module_permission);
        });
      }
    });
  }

  getSubModuleInfo() {
    this.subModulePermissionService.get().subscribe(subModules => {
      this.subModules = subModules;
      this.getGroupSubModuleInfo();
    });
  }

  goToSelectionPermissions() {
    this.isSelectModulesMode = false;
    this.getPermissions();
  }

  getPermissions() {
    this.isLoadingPermissions = true;
    let modulesIds = '';

    this.selectedModulesPermission.forEach(permission => modulesIds += permission.id + ',');
    modulesIds = modulesIds.slice(0, -1);
    this.isQCModulePermissionSelected = this.selectedModulesPermission.findIndex(module => module.id === QC_MODULE_PERMISSION_ID) > -1;
    forkJoin({
      modulesPermissions: this.permissionsService.getPermissionsForModules(modulesIds, this.query),
      rolePermissions: this.rolesService.getRolePermissions(this.role)
    }).subscribe(({modulesPermissions, rolePermissions}) => {
      this.permissions = modulesPermissions.data;
      this.rolePermissions = rolePermissions.permissions;
      this.selectedPermissions = rolePermissions.permissions;
      this.isLoadingPermissions = false;
    });
  }

  getModulesPermissions() {
    this.isLoadingPermissions = true;
    let modulesIds = '';

    this.selectedModulesPermission.forEach(permission => modulesIds += permission.id + ',');
    modulesIds = modulesIds.slice(0, -1);

    this.permissionsService.getPermissionsForModules(modulesIds, this.query).subscribe(permissions => {
      this.permissions = permissions.data;
      this.countPermissions = permissions.total;
      this.isLoadingPermissions = false;
    });
  }

  getRolePermissions() {
    this.rolesService.getRolePermissions(this.role).subscribe(res => {
      this.selectedPermissions = res.permissions;
    });
  }

  saveRolePermission() {
    const rolePermissions: Permission[] = JSON.parse(JSON.stringify(this.rolePermissions));
    this.selectedPermissions.forEach(selectedPermission => {
      const index = rolePermissions.findIndex(p => p.id === selectedPermission.id);
      if (index !== -1) rolePermissions.splice(index, 1);
      else rolePermissions.push(selectedPermission);
    });

    const addedPermissions = {
      permissions_ids: '',
      modules_ids: ''
    };

    const removedPermissions = {
      permissions_ids: '',
      modules_ids: '',
    };

    rolePermissions.forEach(permission => {
      if (this.rolePermissions.find(p => p.id === permission.id)) removedPermissions.permissions_ids += permission.id + ',';
      else addedPermissions.permissions_ids += permission.id + ',';
    });

    addedPermissions.permissions_ids = addedPermissions.permissions_ids.slice(0, -1);
    addedPermissions.modules_ids = this.selectedModulesPermission.map(m => m.id).join(',');
    removedPermissions.permissions_ids = removedPermissions.permissions_ids.slice(0, -1);
    removedPermissions.modules_ids = this.selectedModulesPermission.map(m => m.id).join(',');

    const findPermissions = [];

    this.permissions.forEach(p => {
      if (this.selectedPermissions.find(sp => sp.id === p.id)) {
        findPermissions.push(p);
      }
    });

    const send = {
      modules_ids: this.selectedModulesPermission.map(m => m.id)
    };

    if (findPermissions.length === 0) {
      this.rolesService.removeModuleFromRole(this.role.id, send).subscribe();
    }

    if (addedPermissions.permissions_ids) this.addPermissions(addedPermissions);
    if (removedPermissions.permissions_ids) this.removePermissions(removedPermissions);

    if (this.isQCModulePermissionSelected) {
      this.updateRoleSubModulePermission();
    }
  }

  addPermissions(addedPermissions: {
    permissions_ids: string,
    modules_ids: string
  }): void {
    this.isSaving = true;
    this.rolesService.setRolePermissions(this.role, addedPermissions).subscribe(() => {
      this.dialogRef.close(true);
      this.isSaving = false;
    });
  }

  removePermissions(removedPermissions: {
    permissions_ids: string,
    modules_ids: string
  }): void {
    this.isSaving = true;
    this.rolesService.removeRolePermissions(this.role, removedPermissions).subscribe(() => {
      this.dialogRef.close(true);
      this.isSaving = false
    });
  }

  searchPermissions() {
    this.query = [
      {name: 'limit', value: this.searchForm.get('limit').value},
      {name: 'offset', value: this.searchForm.get('offset').value}
    ];
    this.permissions = [];
    this.getModulesPermissions();
  }

  paginate(evt: any) {
    this.searchForm.get('limit').patchValue(evt.page * 10);
    this.searchPermissions();
  }

  updateRoleSubModulePermission() {
    const sendData: GroupSubModulePermission = {
      id: null,
      role: this.role.id,
      module_permission: this.selectedModules
    };
    this.isSaving = true;
    if (this.groupSubModule) {
      sendData.id = this.groupSubModule.id;
      this.groupSubModuleService.updateGroupSubModule(sendData).subscribe(() => {
        this.isSaving = false;
        this.dialogRef.close(true);
      });
    } else {
      this.groupSubModuleService.createGroupSubRole(sendData).subscribe(() => {
        this.dialogRef.close(true);
        this.isSaving = false;
      });
    }
  }

  onSave() {

  }
}

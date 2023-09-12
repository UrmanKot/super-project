import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRouting } from './administration.routing';
import { AdministrationUserListComponent } from './components/administration-user-list/administration-user-list.component';
import { AdministrationLayoutComponent } from './components/administration-layout/administration-layout.component';
import {LayoutModule} from "../layout/layout.module";
import { AdministrationRolesComponent } from './components/administration-roles/administration-roles.component';
import {ButtonModule} from "primeng/button";
import {SharedModule} from "@shared/shared.module";
import { CreateEditUserComponent } from './modals/create-edit-user/create-edit-user.component';
import { EditUserRolesComponent } from './modals/edit-user-roles/edit-user-roles.component';
import {BusinessTripsModule} from "../business-trips/business-trips.module";
import {CrmModule} from "../crm/crm.module";
import {TreeSelectModule} from "primeng/treeselect";
import { CreateEditRoleComponent } from './modals/create-edit-role/create-edit-role.component';
import { EditRolePermissionsComponent } from './modals/edit-role-permissions/edit-role-permissions.component';


@NgModule({
  declarations: [
    AdministrationUserListComponent,
    AdministrationLayoutComponent,
    AdministrationRolesComponent,
    CreateEditUserComponent,
    EditUserRolesComponent,
    CreateEditRoleComponent,
    EditRolePermissionsComponent
  ],
  imports: [
    CommonModule,
    AdministrationRouting,
    LayoutModule,
    ButtonModule,
    SharedModule,
    BusinessTripsModule,
    CrmModule,
    TreeSelectModule
  ]
})
export class AdministrationModule { }

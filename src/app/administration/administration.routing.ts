import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  AdministrationUserListComponent
} from "./components/administration-user-list/administration-user-list.component";
import {AdministrationLayoutComponent} from "./components/administration-layout/administration-layout.component";
import {AdministrationRolesComponent} from "./components/administration-roles/administration-roles.component";

const routes: Routes = [
  {
    path: '',
    component: AdministrationLayoutComponent, children: [
      {path: '', redirectTo: 'user-list', pathMatch: 'full'},
      {path: 'user-list', component: AdministrationUserListComponent},
      {path: 'roles', component: AdministrationRolesComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRouting {
}

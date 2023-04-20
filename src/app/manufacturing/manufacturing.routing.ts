import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManufacturingLayoutComponent} from './components/manufacturing-layout/manufacturing-layout.component';
import {ManufacturingPlanListComponent} from './components/manufacturing-plan-list/manufacturing-plan-list.component';
import {
  ManufacturingSliceTasksComponent
} from './components/manufacturing-slice-tasks/manufacturing-slice-tasks.component';
import {ManufacturingEmployeesComponent} from './components/manufacturing-employees/manufacturing-employees.component';

const routes: Routes = [
  {
    path: '',
    component: ManufacturingLayoutComponent,
    children: [
      {path: '', redirectTo: 'plans', pathMatch: 'full'},
      {path: 'plans', title: 'Plans', component: ManufacturingPlanListComponent},
      {path: 'slice-tasks', title: 'Slice Tasks', component: ManufacturingSliceTasksComponent},
      {path: 'employees', title: 'Employees', component: ManufacturingEmployeesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingRouting { }

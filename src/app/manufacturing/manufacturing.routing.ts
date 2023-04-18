import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManufacturingLayoutComponent} from './components/manufacturing-layout/manufacturing-layout.component';
import {ManufacturingPlanListComponent} from './components/manufacturing-plan-list/manufacturing-plan-list.component';

const routes: Routes = [
  {
    path: '',
    component: ManufacturingLayoutComponent,
    children: [
      {path: '', redirectTo: 'plans', pathMatch: 'full'},
      {path: 'plans', title: 'Plans', component: ManufacturingPlanListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingRouting { }

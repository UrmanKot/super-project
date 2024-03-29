import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManufacturingLayoutComponent} from './components/manufacturing-layout/manufacturing-layout.component';
import {ManufacturingPlanListComponent} from './components/manufacturing-plan-list/manufacturing-plan-list.component';
import {
  ManufacturingSliceTasksComponent
} from './components/manufacturing-slice-tasks/manufacturing-slice-tasks.component';
import {ManufacturingEmployeesComponent} from './components/manufacturing-employees/manufacturing-employees.component';
import {ManufacturingPositionsComponent} from './components/manufacturing-positions/manufacturing-positions.component';
import {ManufacturingMachinesComponent} from './components/manufacturing-machines/manufacturing-machines.component';
import {
  ManufacturingOrderStatusesComponent
} from './components/manufacturing-order-statuses/manufacturing-order-statuses.component';
import {ManufacturingOrdersComponent} from './components/manufacturing-orders/manufacturing-orders.component';
import {
  ManufacturingOrderPageComponent
} from './components/manufacturing-order-page/manufacturing-order-page.component';
import {ManufacturingPlanComponent} from './components/manufacturing-plan/manufacturing-plan.component';
import {ManufacturingAllPlansComponent} from './components/manufacturing-all-plans/manufacturing-all-plans.component';
import {
  ManufacturingProductionCalendarComponent
} from './components/manufacturing-production-calendar/manufacturing-production-calendar.component';

const routes: Routes = [
  {
    path: '',
    component: ManufacturingLayoutComponent,
    children: [
      {path: '', redirectTo: 'plans', pathMatch: 'full'},
      {
        path: 'plans',
        children: [
          {path: '', title: 'Plans', component: ManufacturingPlanListComponent},
          {path: 'plan/:rootId', title: 'Plan', component: ManufacturingPlanComponent},
          {path: 'all', title: 'All Plans', component: ManufacturingAllPlansComponent},
        ]
      },
      {
        path: 'orders',
        children: [
          {path: '', title: 'Execution Orders', component: ManufacturingOrdersComponent},
          {path: 'order/:id', title: 'Order', component: ManufacturingOrderPageComponent},
        ]
      },
      {path: 'slice-tasks', title: 'Slice Tasks', component: ManufacturingSliceTasksComponent},
      {path: 'employees', title: 'Employees', component: ManufacturingEmployeesComponent},
      {path: 'positions', title: 'Positions', component: ManufacturingPositionsComponent},
      {path: 'machines', title: 'Machines', component: ManufacturingMachinesComponent},
      {path: 'order-statuses', title: 'Order Statuses', component: ManufacturingOrderStatusesComponent},
      {path: 'production-calendar', title: 'Production Calendar', component: ManufacturingProductionCalendarComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingRouting {
}

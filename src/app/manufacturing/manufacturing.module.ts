import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingRouting } from './manufacturing.routing';
import {ManufacturingLayoutComponent} from './components/manufacturing-layout/manufacturing-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '@shared/shared.module';
import {ManufacturingPlanListComponent} from './components/manufacturing-plan-list/manufacturing-plan-list.component';
import { ManufacturingSliceTasksComponent } from './components/manufacturing-slice-tasks/manufacturing-slice-tasks.component';
import { ManufacturingEmployeesComponent } from './components/manufacturing-employees/manufacturing-employees.component';
import { CreateEditEmployeeComponent } from './modals/create-edit-employee/create-edit-employee.component';
import { ManufacturingPositionsComponent } from './components/manufacturing-positions/manufacturing-positions.component';
import { CreateEditPositionComponent } from './modals/create-edit-position/create-edit-position.component';
import { ManufacturingMachinesComponent } from './components/manufacturing-machines/manufacturing-machines.component';
import { CreateEditMachineComponent } from './modals/create-edit-machine/create-edit-machine.component';
import { ManufacturingOrderStatusesComponent } from './components/manufacturing-order-statuses/manufacturing-order-statuses.component';
import { ManufacturingOrdersComponent } from './components/manufacturing-orders/manufacturing-orders.component';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { ManufacturingOrderPageComponent } from './components/manufacturing-order-page/manufacturing-order-page.component';
import { ManufacturingOrderPagePrintComponent } from './components/manufacturing-order-page/manufacturing-order-page-print/manufacturing-order-page-print.component';


@NgModule({
  declarations: [
    ManufacturingLayoutComponent,
    ManufacturingPlanListComponent,
    ManufacturingSliceTasksComponent,
    ManufacturingEmployeesComponent,
    CreateEditEmployeeComponent,
    ManufacturingPositionsComponent,
    CreateEditPositionComponent,
    ManufacturingMachinesComponent,
    CreateEditMachineComponent,
    ManufacturingOrderStatusesComponent,
    ManufacturingOrdersComponent,
    ManufacturingOrderPageComponent,
    ManufacturingOrderPagePrintComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ManufacturingRouting,
    LayoutModule,
    TriStateCheckboxModule
  ]
})
export class ManufacturingModule { }

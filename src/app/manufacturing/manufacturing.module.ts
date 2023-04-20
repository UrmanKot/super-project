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


@NgModule({
  declarations: [
    ManufacturingLayoutComponent,
    ManufacturingPlanListComponent,
    ManufacturingSliceTasksComponent,
    ManufacturingEmployeesComponent,
    CreateEditEmployeeComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ManufacturingRouting,
    LayoutModule
  ]
})
export class ManufacturingModule { }

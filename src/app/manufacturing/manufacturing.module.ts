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
import { ManufacturingChartComponent } from './components/manufacturing-chart/manufacturing-chart.component';
import {ResizableModule} from 'angular-resizable-element';
import { ManufacturingListProductProductionComponent } from './components/manufaturing-list-product-production/manufacturing-list-product-production.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ManufacturingPlanComponent } from './components/manufacturing-plan/manufacturing-plan.component';
import { ManufacturingCreateOrderComponent } from './modals/manufacturing-create-order/manufacturing-create-order.component';
import { ManufacturingMaterialPickerComponent } from './pickers/manufacturing-material-picker/manufacturing-material-picker.component';
import { ManufacturingTaskEditComponent } from './modals/manufacturing-task-edit/manufacturing-task-edit.component';
import {AccordionModule} from 'primeng/accordion';
import { ManufacturingAddTechnologyComponent } from './modals/manufacturing-add-technology/manufacturing-add-technology.component';
import { ManufacturingTasksEditComponent } from './modals/manufacturing-tasks-edit/manufacturing-tasks-edit.component';
import { ShiftByTypesComponent } from './pickers/shift-by-types/shift-by-types.component';
import { ManufacturingAddItemsComponent } from './modals/manufacturing-add-items/manufacturing-add-items.component';
import { ManufacturingPickerProductComponent } from './modals/manufacturing-picker-product/manufacturing-picker-product.component';
import { ManufacturingAllPlansComponent } from './components/manufacturing-all-plans/manufacturing-all-plans.component';


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
    ManufacturingChartComponent,
    ManufacturingListProductProductionComponent,
    ManufacturingPlanComponent,
    ManufacturingCreateOrderComponent,
    ManufacturingMaterialPickerComponent,
    ManufacturingTaskEditComponent,
    ManufacturingAddTechnologyComponent,
    ManufacturingTasksEditComponent,
    ShiftByTypesComponent,
    ManufacturingAddItemsComponent,
    ManufacturingPickerProductComponent,
    ManufacturingAllPlansComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ManufacturingRouting,
    LayoutModule,
    TriStateCheckboxModule,
    ResizableModule,
    DragDropModule,
    AccordionModule
  ]
})
export class ManufacturingModule { }

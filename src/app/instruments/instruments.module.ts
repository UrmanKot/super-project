import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentsRoutingModule } from './instruments-routing.module';
import { InstrumentsLayoutComponent } from './components/instruments-layout/instruments-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {
  InstrumentsAndToolsListComponent
} from './components/instruments-and-tools-list/instruments-and-tools-list.component';
import {ToolRequestsListComponent} from './components/tool-requests-list/tool-requests-list.component';
import {
  RequestOrdersListComponent
} from './components/tool-requests-list/request-orders-list/request-orders-list.component';
import {AreaListComponent} from './components/area-list/area-list.component';
import {LocatorsListComponent} from './components/area-list/components/locators-list/locators-list.component';
import {SharedModule} from '@shared/shared.module';
import {CreateEditAreaComponent} from './modals/create-edit-area/create-edit-area.component';
import { CreateEditAreaLocatorComponent } from './modals/create-edit-area-locator/create-edit-area-locator.component';
import { CreateEditToolRequestComponent } from './modals/create-edit-tool-request/create-edit-tool-request.component';
import { CreateUpdateToolOrderRequestComponent } from './modals/create-update-tool-order-request/create-update-tool-order-request.component';
import { ProductMoveToAreaLocatorComponent } from './modals/product-move-to-area-locator/product-move-to-area-locator.component';
import {
  InstrumentsAndToolsWriteOffReturnComponent
} from './modals/instrumentr-and-tools-writeoff-return/instruments-and-tools-write-off-return.component';


@NgModule({
  declarations: [
    InstrumentsLayoutComponent,
    InstrumentsAndToolsListComponent,
    ToolRequestsListComponent,
    RequestOrdersListComponent,
    AreaListComponent,
    LocatorsListComponent,
    CreateEditAreaComponent,
    CreateEditAreaLocatorComponent,
    CreateEditToolRequestComponent,
    CreateUpdateToolOrderRequestComponent,
    ProductMoveToAreaLocatorComponent,
    InstrumentsAndToolsWriteOffReturnComponent,
  ],
  imports: [
    CommonModule,
    InstrumentsRoutingModule,
    LayoutModule,
    SharedModule
  ]
})
export class InstrumentsModule { }

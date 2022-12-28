import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstrumentsLayoutComponent} from './components/instruments-layout/instruments-layout.component';
import {
  InstrumentsAndToolsListComponent
} from './components/instruments-and-tools-list/instruments-and-tools-list.component';
import {AreaListComponent} from './components/area-list/area-list.component';
import {ToolRequestsListComponent} from './components/tool-requests-list/tool-requests-list.component';
import {
  RequestOrdersListComponent
} from './components/tool-requests-list/request-orders-list/request-orders-list.component';
import {LocatorsListComponent} from './components/area-list/components/locators-list/locators-list.component';

const routes: Routes = [
  {
    path: '',
    title: 'Instruments',
    component: InstrumentsLayoutComponent,
    children: [
      {
        path: 'instruments-and-tools',
        title: 'Instruments And Tools',
        component: InstrumentsAndToolsListComponent
      },
      {
        path: 'areas',
        title: 'Areas',
        component: AreaListComponent
      },
      {
        path: 'areas/locators/:areaId',
        title: 'Areas',
        component: LocatorsListComponent
      },
      {path: 'tool-request',
        component: ToolRequestsListComponent},
      {path: 'tool-request/requests/:orderId',
        component: RequestOrdersListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentsRoutingModule { }

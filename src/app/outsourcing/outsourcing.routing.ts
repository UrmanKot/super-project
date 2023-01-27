import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProcurementLayoutComponent} from '../procurement/components/procurement-layout/procurement-layout.component';
import {ProcurementChainsComponent} from '../procurement/components/procurement-chains/procurement-chains.component';
import {
  ProcurementOrderPageComponent
} from '../procurement/components/procurement-order-page/procurement-order-page.component';
import {
  AuxiliaryInvoicesTypesListComponent
} from '../procurement/components/auxiliary-invoices-types-list/auxiliary-invoices-types-list.component';
import {
  ProcurementChainCreationListComponent
} from '../procurement/components/procurement-chain-creation-list/procurement-chain-creation-list.component';
import {
  ProcurementOrderStatusesComponent
} from '../procurement/components/procurement-order-statuses/procurement-order-statuses.component';
import {OutsourcingLayoutComponent} from './components/outsourcing-layout/outsourcing-layout.component';
import {OutsourcingChainsComponent} from './components/outsourcing-chains/outsourcing-chains.component';
import {OutsourcingOrderPageComponent} from './components/outsourcing-order-page/outsourcing-order-page.component';
import {
  OutsourcingOrderStatusesComponent
} from './components/outsourcing-order-statuses/outsourcing-order-statuses.component';
import {
  OutsourcingChainCreationListComponent
} from './components/outsourcing-chain-creation-list/outsourcing-chain-creation-list.component';
import {OutsourcingRequestsComponent} from './components/outsourcing-requests/outsourcing-requests.component';

const routes: Routes = [
  {
    path: '',
    component: OutsourcingLayoutComponent,
    children: [
      {path: '', redirectTo: 'chains', pathMatch: 'full'},
      {
        path: 'chains',
        children: [
          {path: '', title: 'Outsourcing Chains', component: OutsourcingChainsComponent},
          {path: 'order/:id', title: 'Outsourcing Order', component: OutsourcingOrderPageComponent},
        ]
      },
      {path: 'order-products', title: 'Outsourcing Chain Creation', component: OutsourcingChainCreationListComponent},
      {path: 'statuses', title: 'Order Statuses', component: OutsourcingOrderStatusesComponent},
      {path: 'requests', title: 'Assembly & Manufactured Requests', component: OutsourcingRequestsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsourcingRouting { }

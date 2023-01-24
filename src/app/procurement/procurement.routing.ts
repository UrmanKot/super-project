import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProcurementLayoutComponent} from './components/procurement-layout/procurement-layout.component';
import {ProcurementChainsComponent} from './components/procurement-chains/procurement-chains.component';
import {ProcurementOrderPageComponent} from './components/procurement-order-page/procurement-order-page.component';
import {
  AuxiliaryInvoicesTypesListComponent
} from './components/auxiliary-invoices-types-list/auxiliary-invoices-types-list.component';
import {
  ProcurementOrderStatusesComponent
} from './components/procurement-order-statuses/procurement-order-statuses.component';
import {
  ProcurementChainCreationListComponent
} from './components/procurement-chain-creation-list/procurement-chain-creation-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProcurementLayoutComponent,
    children: [
      {path: '', redirectTo: 'chains', pathMatch: 'full'},
      {
        path: 'chains',
        children: [
          {path: '', title: 'Procurement Chains', component: ProcurementChainsComponent},
          {path: 'order/:id', title: 'Procurement Order', component: ProcurementOrderPageComponent},
        ]
      },
      {path: 'services', title: 'Auxiliary Invoices Types', component: AuxiliaryInvoicesTypesListComponent},
      {path: 'order-products', title: 'Procurement Chain Creation', component: ProcurementChainCreationListComponent},
      {path: 'statuses', title: 'Order Statuses', component: ProcurementOrderStatusesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRouting {
}

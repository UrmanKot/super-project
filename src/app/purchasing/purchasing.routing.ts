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
import {PurchasingLayoutComponent} from './components/purchasing-layout/purchasing-layout.component';
import {PurchasingChainsComponent} from './components/purchasing-chains/purchasing-chains.component';
import {PurchasingOrderPageComponent} from './components/purchasing-order-page/purchasing-order-page.component';
import {
  PurchasingOrderStatusesComponent
} from './components/purchasing-order-statuses/purchasing-order-statuses.component';
import {PurchasingCategoriesComponent} from './components/purchasing-categories/purchasing-categories.component';
import {
  PurchasingChainCreationListComponent
} from './components/purchasing-chain-creation-list/purchasing-chain-creation-list.component';
import {PurchasingRequestsComponent} from './components/purchasing-requests/purchasing-requests.component';

const routes: Routes = [
  {
    path: '',
    component: PurchasingLayoutComponent,
    children: [
      {path: '', redirectTo: 'chains', pathMatch: 'full'},
      {
        path: 'chains',
        children: [
          {path: '', title: 'Procurement Chains', component: PurchasingChainsComponent},
          {path: 'order/:id', title: 'Procurement Order', component: PurchasingOrderPageComponent},
        ]
      },
      {path: 'order-products', title: 'Procurement Chain Creation', component: PurchasingChainCreationListComponent},
      {path: 'statuses', title: 'Order Statuses', component: PurchasingOrderStatusesComponent},
      {path: 'categories', title: 'Procurement Categories', component: PurchasingCategoriesComponent},
      {path: 'requests', title: 'Procurement Requests', component: PurchasingRequestsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingRouting { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProcurementLayoutComponent} from './components/procurement-layout/procurement-layout.component';
import {ChainsComponent} from './components/chains/chains.component';
import {ProcurementOrderPageComponent} from './components/procurement-order-page/procurement-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProcurementLayoutComponent,
    children: [
      {path: '', redirectTo: 'chains', pathMatch: 'full'},
      {
        path: 'chains',
        children: [
          {path: '', title: 'Procurement Chains', component: ChainsComponent},
          {path: 'order/:id', title: 'Procurement Order', component: ProcurementOrderPageComponent},
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRouting { }

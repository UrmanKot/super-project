import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QcLayoutComponent} from './components/qc-layout/qc-layout.component';
import {QcListComponent} from './components/qc-list/qc-list.component';
import {QcOrderComponent} from './components/qc-order/qc-order.component';
import {QcInvoiceComponent} from './components/qc-invoice/qc-invoice.component';
import {ProtocolsComponent} from './components/protocols/protocols.component';

const routes: Routes = [
  {
    path: '',
    component: QcLayoutComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', title: 'Quality Control', component: QcListComponent},
      {path: 'invoice/:id', title: 'Invoice Quality Control', component: QcInvoiceComponent},
      {path: 'order/:id', title: 'Order Quality Control', component: QcOrderComponent},
      {path: 'protocols', title: 'Protocols', component: ProtocolsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QcRouting { }

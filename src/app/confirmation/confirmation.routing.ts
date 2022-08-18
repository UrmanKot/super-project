import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NomenclatureConfirmationComponent
} from './components/nomenclature-confirmation/nomenclature-confirmation.component';
import {PaymentConfirmationComponent} from './components/payment-confirmation/payment-confirmation.component';

const routes: Routes = [
  {path: '', redirectTo: 'nomenclature', pathMatch: 'full'},
  {path: 'nomenclature', component: NomenclatureConfirmationComponent},
  {path: 'payment', component: PaymentConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationRouting { }

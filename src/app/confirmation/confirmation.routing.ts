import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NomenclatureConfirmationComponent
} from './components/nomenclature-confirmation/nomenclature-confirmation.component';
import {PaymentConfirmationComponent} from './components/payment-confirmation/payment-confirmation.component';
import {ConfirmationLayoutComponent} from './components/confirmation-layout/confirmation-layout.component';
import {WriteOffConfirmationComponent} from './components/write-off-confirmation/write-off-confirmation.component';
import {
  ProductionListConfirmationComponent
} from './components/production-list-confirmation/production-list-confirmation.component';
import {SupplierConfirmationComponent} from './components/supplier-confirmation/supplier-confirmation.component';
import {
  ReservationConfirmationComponent
} from './components/reservation-confirmation/reservation-confirmation.component';
import {
  PlanningListConfirmationComponent
} from './components/planning-list-confirmation/planning-list-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationLayoutComponent, children: [
      {path: '', redirectTo: 'nomenclature', pathMatch: 'full'},
      {path: 'nomenclature', title: 'Nomenclature Confirmation', component: NomenclatureConfirmationComponent},
      {path: 'payments', title: 'Payments Confirmation', component: PaymentConfirmationComponent},
      {path: 'write-off', title: 'Write Off Confirmation', component: WriteOffConfirmationComponent},
      {path: 'production-lists', title: 'Production Lists Confirmation', component: ProductionListConfirmationComponent},
      {path: 'suppliers', title: 'Suppliers Confirmation', component: SupplierConfirmationComponent},
      {path: 'reservations', title: 'Reservations Confirmation', component: ReservationConfirmationComponent},
      {path: 'planning', title: 'Planning Confirmation', component: PlanningListConfirmationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationRouting { }

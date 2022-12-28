import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PaymentLayoutComponent} from "./components/payment-layout/payment-layout.component";
import {PaymentListsComponent} from "./components/payment-lists/payment-lists.component";
import {DeliveryPaymentListComponent} from "./components/delivery-payment-list/delivery-payment-list.component";

const routes: Routes = [{
  path: '', component: PaymentLayoutComponent, children: [
    {path: 'payments', component: PaymentListsComponent},
    {path: 'delivery', component: DeliveryPaymentListComponent},
    {path: '', redirectTo: 'payments', pathMatch: 'full'},
    //{path: '**', redirectTo: '', pathMatch: 'full'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRouting {


}

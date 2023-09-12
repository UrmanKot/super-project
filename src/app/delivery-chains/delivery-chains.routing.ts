import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeliveryChainsComponent} from "./components/delivery-chains/delivery-chains.component";
import {DeliveryChainsLayoutComponent} from "./components/delivery-chains-layout/delivery-chains-layout.component";
import {DeliveryChainPageComponent} from "./components/delivery-chain-page/delivery-chain-page.component";

const routes: Routes = [
  {
    path: '',
    component: DeliveryChainsLayoutComponent,
    children: [
      {path: 'chains', title: 'Delivery Chains', component: DeliveryChainsComponent},
      {path: 'chains/:id', title: 'Delivery Chain', component: DeliveryChainPageComponent},
      {path: '', redirectTo: 'chains', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryChainsRouting {
}

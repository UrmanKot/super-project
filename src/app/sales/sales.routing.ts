import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalesLayoutComponent} from './components/sales-layout/sales-layout.component';
import {NomenclaturePriceComponent} from './components/configs/nomenclature-price/nomenclature-price.component';
import {SalesStatusesComponent} from './components/sales-statuses/sales-statuses.component';
import {RegionsComponent} from './components/regions/regions.component';
import {SalesChainsComponent} from "./components/sales-chains/sales-chains.component";
import {SalesChainPageComponent} from "./components/sales-chain-page/sales-chain-page.component";

const routes: Routes = [
  {
    path: '',
    component: SalesLayoutComponent,
    children: [
      {path: '', redirectTo: 'sales-procurement-chains', pathMatch: 'full'},
      {
        path: 'sales-procurement-chains',
        children: [
          {path: '', title: 'Sales Chains', component: SalesChainsComponent},
          {path: 'chain-page/:id', title: 'Sales Chain', component: SalesChainPageComponent}
        ]
      },

      {path: 'statuses', title: 'Statuses Type', component: SalesStatusesComponent},
      {path: 'regions', title: 'Countries & Regions', component: RegionsComponent},
      {
        path: 'configs',
        children: [
          {path: '', redirectTo: 'nomenclature-price', pathMatch: 'full'},
          {path: 'nomenclature-price', title: 'Nomenclature Price', component: NomenclaturePriceComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRouting {
}

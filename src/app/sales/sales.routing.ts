import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalesListsComponent} from './components/sales-lists/sales-lists.component';
import {SalesLayoutComponent} from './components/sales-layout/sales-layout.component';
import {SalesChainsComponent} from './components/sales-chains/sales-chains.component';
import {NomenclaturePriceComponent} from './components/configs/nomenclature-price/nomenclature-price.component';
import {SalesStatusesComponent} from './components/sales-statuses/sales-statuses.component';
import {RegionsComponent} from './components/regions/regions.component';

const routes: Routes = [
  {
    path: '',
    component: SalesLayoutComponent,
    children: [
      {path: '', redirectTo: 'sales-chains', pathMatch: 'full'},
      // {path: 'lists', title: 'Make Production List', component: SalesListsComponent},
      {path: 'sales-chains', title: 'Sales Chains', component: SalesChainsComponent},
      {path: 'statuses', title: 'Statuses Type', component: SalesStatusesComponent},
      {path: 'regions', title: 'Countries & Regions', component: RegionsComponent},
      {
        path: 'configs',
        children: [
          {path: '', redirectTo: 'nomenclature-price', pathMatch: 'full'},
          {path: 'nomenclature-price', title: 'Nomenclature Price', component: NomenclaturePriceComponent}
        ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRouting {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WarehouseItemsComponent} from './components/warehouse-items/warehouse-items.component';
import {WarehouseLayoutComponent} from './components/warehouse-layout/warehouse-layout.component';
import {WarehouseWarehousesComponent} from './components/warehouse-warehouses/warehouse-warehouses.component';

const routes: Routes = [
  {
    path: '', component: WarehouseLayoutComponent, children: [
      {path: '', redirectTo: 'items', pathMatch: 'full'},
      {path: 'items', title: 'Warehouse Items', component: WarehouseItemsComponent},
      {path: 'warehouses', title: 'Warehouses', component: WarehouseWarehousesComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRouting {
}

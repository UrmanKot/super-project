import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WarehouseItemsComponent} from './components/warehouse-items/warehouse-items.component';
import {WarehouseLayoutComponent} from './components/warehouse-layout/warehouse-layout.component';
import {WarehouseWarehousesComponent} from './components/warehouse-warehouses/warehouse-warehouses.component';
import {WarehouseLocatorsComponent} from './components/warehouse-locators/warehouse-locators.component';
import {WarehouseUnitsMeasureComponent} from './components/warehouse-units-measure/warehouse-units-measure.component';
import {WarehouseSerialTypesComponent} from './components/warehouse-serial-types/warehouse-serial-types.component';
import {WarehouseInsulatorComponent} from './components/warehouse-insulator/warehouse-insulator.component';
import {
  WarehouseInsulatorInvoicesComponent
} from './components/warehouse-insulator/components/warehouse-insulator-invoices/warehouse-insulator-invoices.component';
import {
  WarehouseInsulatorOrdersComponent
} from './components/warehouse-insulator/components/warehouse-insulator-orders/warehouse-insulator-orders.component';
import {WarehouseCategoriesComponent} from './components/warehouse-categories/warehouse-categories.component';
import {WarehouseWhereUsedComponent} from './components/warehouse-where-used/warehouse-where-used.component';
import {PhysicalInventoryComponent} from './components/physical-inventory/physical-inventory.component';

const routes: Routes = [
  {
    path: '', component: WarehouseLayoutComponent, children: [
      {path: '', redirectTo: 'items', pathMatch: 'full'},
      {path: 'items', title: 'Warehouse Items', component: WarehouseItemsComponent},
      {
        path: 'warehouses',
        children: [
          {path: '', title: 'Warehouses', component: WarehouseWarehousesComponent},
          {path: ':id/locators', title: 'Locators', component: WarehouseLocatorsComponent},
        ]
      },
      {path: 'measure', title: 'Units of Measure', component: WarehouseUnitsMeasureComponent},
      {path: 'serial-types', title: 'Serial Types', component: WarehouseSerialTypesComponent},
      {path: 'categories', title: 'Warehouse Categories', component: WarehouseCategoriesComponent},
      {path: 'where-used', title: 'Where Used', component: WarehouseWhereUsedComponent},
      {path: 'physical-inventory', title: 'Physical Inventory', component: PhysicalInventoryComponent},
      {
        path: 'insulator', children: [
          {path: '', title: 'Insulator', component: WarehouseInsulatorComponent},
          {path: 'invoices/:id', title: 'Insulator Invoices', component: WarehouseInsulatorInvoicesComponent},
          {path: 'orders/:id', title: 'Insulator Orders', component: WarehouseInsulatorOrdersComponent}
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRouting {
}

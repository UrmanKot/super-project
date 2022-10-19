import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WarehouseRouting} from './warehouse.routing';
import {WarehouseItemsComponent} from './components/warehouse-items/warehouse-items.component';
import {WarehouseLayoutComponent} from './components/warehouse-layout/warehouse-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '@shared/shared.module';
import { WarehouseWarehousesComponent } from './components/warehouse-warehouses/warehouse-warehouses.component';
import {TreeModule} from 'primeng/tree';


@NgModule({
  declarations: [
    WarehouseItemsComponent,
    WarehouseLayoutComponent,
    WarehouseWarehousesComponent
  ],
  imports: [
    CommonModule,
    WarehouseRouting,
    LayoutModule,
    SharedModule,
    TreeModule
  ]
})
export class WarehouseModule {
}

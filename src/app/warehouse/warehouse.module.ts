import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WarehouseRouting} from './warehouse.routing';
import {WarehouseItemsComponent} from './components/warehouse-items/warehouse-items.component';
import {WarehouseLayoutComponent} from './components/warehouse-layout/warehouse-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '@shared/shared.module';
import { WarehouseWarehousesComponent } from './components/warehouse-warehouses/warehouse-warehouses.component';
import {TreeModule} from 'primeng/tree';
import { WarehouseLocatorsComponent } from './components/warehouse-locators/warehouse-locators.component';
import {WarehouseUnitsMeasureComponent} from './components/warehouse-units-measure/warehouse-units-measure.component';
import { WarehouseSerialTypesComponent } from './components/warehouse-serial-types/warehouse-serial-types.component';
import { WarehouseInsulatorComponent } from './components/warehouse-insulator/warehouse-insulator.component';
import { WarehouseInsulatorInvoicesComponent } from './components/warehouse-insulator/components/warehouse-insulator-invoices/warehouse-insulator-invoices.component';
import { WarehouseInsulatorOrdersComponent } from './components/warehouse-insulator/components/warehouse-insulator-orders/warehouse-insulator-orders.component';
import { WarehouseCategoriesComponent } from './components/warehouse-categories/warehouse-categories.component';
import { WarehouseWhereUsedComponent } from './components/warehouse-where-used/warehouse-where-used.component';
import { PhysicalInventoryComponent } from './components/physical-inventory/physical-inventory.component';
import { PhysicalInventoryProductsComponent } from './components/physical-inventory/physical-inventory-products/physical-inventory-products.component';
import { WarehouseToolRequestsComponent } from './components/warehouse-tool-requests/warehouse-tool-requests.component';
import { WarehouseToolRequestComponent } from './components/warehouse-tool-request/warehouse-tool-request.component';
import { WarehouseProductionRequestsComponent } from './components/warehouse-production-requests/warehouse-production-requests.component';
import { WarehouseProductionRequestComponent } from './components/warehouse-production-request/warehouse-production-request.component';


@NgModule({
  declarations: [
    WarehouseItemsComponent,
    WarehouseLayoutComponent,
    WarehouseWarehousesComponent,
    WarehouseLocatorsComponent,
    WarehouseUnitsMeasureComponent,
    WarehouseSerialTypesComponent,
    WarehouseInsulatorComponent,
    WarehouseInsulatorInvoicesComponent,
    WarehouseInsulatorOrdersComponent,
    WarehouseCategoriesComponent,
    WarehouseWhereUsedComponent,
    PhysicalInventoryComponent,
    PhysicalInventoryProductsComponent,
    WarehouseToolRequestsComponent,
    WarehouseToolRequestComponent,
    WarehouseProductionRequestsComponent,
    WarehouseProductionRequestComponent
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

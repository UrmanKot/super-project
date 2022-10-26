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
import { CreatePhysicalInventoryComponent } from './modals/create-physical-inventory/create-physical-inventory.component';
import { MovePhysicalInventoryProductComponent } from './modals/move-physical-inventory-product/move-physical-inventory-product.component';
import { AddProductToPhysicalInventoryComponent } from './modals/add-product-to-physical-inventory/add-product-to-physical-inventory.component';
import { CreateEditWarehouseComponent } from './modals/create-edit-warehouse/create-edit-warehouse.component';
import { CreateEditLocatorComponent } from './modals/create-edit-locator/create-edit-locator.component';
import { CreateEditWarehouseCategoryComponent } from './modals/create-edit-warehouse-category/create-edit-warehouse-category.component';
import {CreateEditUnitMeasureComponent} from './modals/create-edit-unit-measure/create-edit-unit-measure.component';
import { CreateEditSerialTypeComponent } from './modals/create-edit-serial-type/create-edit-serial-type.component';
import { CreateEditWarehouseProductComponent } from './modals/create-edit-warehouse-item/create-edit-warehouse-product.component';
import {ProductStructureModule} from '../product-structure/product-structure.module';


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
    WarehouseProductionRequestComponent,
    CreatePhysicalInventoryComponent,
    MovePhysicalInventoryProductComponent,
    AddProductToPhysicalInventoryComponent,
    CreateEditWarehouseComponent,
    CreateEditLocatorComponent,
    CreateEditWarehouseCategoryComponent,
    CreateEditUnitMeasureComponent,
    CreateEditSerialTypeComponent,
    CreateEditWarehouseProductComponent
  ],
  imports: [
    CommonModule,
    WarehouseRouting,
    LayoutModule,
    SharedModule,
    TreeModule,
    ProductStructureModule
  ]
})
export class WarehouseModule {
}

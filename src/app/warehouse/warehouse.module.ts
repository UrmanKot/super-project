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
import { WarehouseSerialTypesComponent } from '../product-structure/components/warehouse-serial-types/warehouse-serial-types.component';
import { WarehouseCategoriesComponent } from './components/warehouse-categories/warehouse-categories.component';
import { WarehouseWhereUsedComponent } from './components/warehouse-where-used/warehouse-where-used.component';
import { PhysicalInventoryComponent } from './components/physical-inventory/physical-inventory.component';
import { PhysicalInventoryProductsComponent } from './components/physical-inventory/physical-inventory-products/physical-inventory-products.component';
import { WarehouseToolRequestsComponent } from './components/warehouse-tool-requests/warehouse-tool-requests.component';
import { WarehouseToolRequestComponent } from './components/warehouse-tool-request/warehouse-tool-request.component';
import { WarehouseProductionRequestsComponent } from './components/warehouse-production-requests/warehouse-production-requests.component';
import { WarehouseProductionRequestComponent } from './components/warehouse-production-request/warehouse-production-request.component';
import { WarehouseDeliveryRequestsComponent } from './components/warehouse-delivery-requests/warehouse-delivery-requests.component';
import { WarehouseDeliveryRequestComponent } from './components/warehouse-delivery-request/warehouse-delivery-request.component';
import { WarehouseDeliveryChainComponent } from './components/warehouse-delivery-chain/warehouse-delivery-chain.component';
import { CreatePhysicalInventoryComponent } from './modals/create-physical-inventory/create-physical-inventory.component';
import { MovePhysicalInventoryProductComponent } from './modals/move-physical-inventory-product/move-physical-inventory-product.component';
import { AddProductToPhysicalInventoryComponent } from './modals/add-product-to-physical-inventory/add-product-to-physical-inventory.component';
import { CreateEditWarehouseComponent } from './modals/create-edit-warehouse/create-edit-warehouse.component';
import { CreateEditLocatorComponent } from './modals/create-edit-locator/create-edit-locator.component';
import { CreateEditWarehouseCategoryComponent } from './modals/create-edit-warehouse-category/create-edit-warehouse-category.component';
import {CreateEditUnitMeasureComponent} from './modals/create-edit-unit-measure/create-edit-unit-measure.component';
import { CreateEditWarehouseProductComponent } from './modals/create-edit-warehouse-item/create-edit-warehouse-product.component';
import {ProductStructureModule} from '../product-structure/product-structure.module';
import { MoveWarehouseProductComponent } from './modals/move-warehouse-product/move-warehouse-product.component';
import { ProductionListsComponent } from './components/production-lists/production-lists.component';
import { ProductionListComponent } from './components/production-lists/production-list/production-list.component';
import { SetProductionListLocatorComponent } from './modals/set-production-list-locator/set-production-list-locator.component';
import {
  ListProductPrintItemComponent
} from './components/production-lists/list-product-print-item/list-product-print-item.component';
import { WarehouseQcComponent } from './components/warehouse-qc/warehouse-qc.component';
import { WarehouseQcInvoiceComponent } from './components/warehouse-qc/warehouse-qc-invoice/warehouse-qc-invoice.component';
import { QcAcceptToWarehouseComponent } from './modals/qc-accept-to-warehouse/qc-accept-to-warehouse.component';
import { IsolatorAcceptToWarehouseComponent } from './modals/isolator-accept-to-warehouse/isolator-accept-to-warehouse.component';
import { WarehouseQcOrderComponent } from './components/warehouse-qc/warehouse-qc-order/warehouse-qc-order.component';
import {WarehouseIsolatorComponent} from './components/warehouse-isolator/warehouse-isolator.component';
import {
  WarehouseIsolatorInvoicesComponent
} from './components/warehouse-isolator/components/warehouse-isolator-invoices/warehouse-isolator-invoices.component';
import {
  WarehouseIsolatorOrdersComponent
} from './components/warehouse-isolator/components/warehouse-isolator-orders/warehouse-isolator-orders.component';
import { WarehouseProductionRequestPrintPageComponent } from './components/warehouse-production-request-print-page/warehouse-production-request-print-page.component';
import { WarehouseDeliveryRequestPrintPageComponent } from './components/warehouse-delivery-request-print-page/warehouse-delivery-request-print-page.component';
import {
  QcAcceptTechnicalEquipmentComponent
} from './modals/qc-accept-technical-equipment/qc-accept-technical-equipment.component';
import { NomenclatureSerialInfoComponent } from './modals/nomenclature-serial-info/nomenclature-serial-info.component';
import { ReservationInfoComponent } from './modals/reservation-info/reservation-info.component';
import {QrCodeModule} from '../qr-code/qr-code.module';
import { PhysicalInventoryProductsChangesComponent } from './modals/physical-inventory-products-changes/physical-inventory-products-changes.component';
import {RippleModule} from 'primeng/ripple';
import { WarehouseDeliveryChainPrintComponent } from './components/warehouse-delivery-chain-print/warehouse-delivery-chain-print.component';
import { ProductionListChainsStatisticsComponent } from './modals/production-list-chains-statistics/production-list-chains-statistics.component';
import { WarehouseToolRequestPrintPageComponent } from './components/warehouse-tool-request-print-page/warehouse-tool-request-print-page.component';
import { ProductionListSetActualQuantityDialogComponent } from './modals/production-list-set-actual-quantity-dialog/production-list-set-actual-quantity-dialog.component';
import { IsolatorWriteOffInvoiceProductComponent } from './modals/isolator-write-off-invoice-product/isolator-write-off-invoice-product.component';
import { IsolatorWriteOffOrderProductComponent } from './modals/isolator-write-off-order-product/isolator-write-off-order-product.component';
import { ScanResultNoResultComponent } from './modals/scan-result-no-result/scan-result-no-result.component';
import { ScanResultWasFoundComponent } from './modals/scan-result-was-found/scan-result-was-found.component';
import { ScanNextComponent } from './modals/scan-next/scan-next.component';
import { RmaCommentDialogComponent } from './modals/rma-comment-dialog/rma-comment-dialog.component';
import { PhysicalInventoryScanResultModalComponent } from './modals/physical-inventory-scan-result-modal/physical-inventory-scan-result-modal.component';
import { OrderProductionRequestsSignsListComponent } from './modals/order-production-requests-signs-list/order-production-requests-signs-list.component';
import { AddIsolatorProductComponent } from './modals/add-isolator-product/add-isolator-product.component';


@NgModule({
  declarations: [
    WarehouseItemsComponent,
    WarehouseLayoutComponent,
    WarehouseWarehousesComponent,
    WarehouseLocatorsComponent,
    WarehouseUnitsMeasureComponent,
    WarehouseSerialTypesComponent,
    WarehouseIsolatorComponent,
    WarehouseIsolatorInvoicesComponent,
    WarehouseIsolatorOrdersComponent,
    WarehouseCategoriesComponent,
    WarehouseWhereUsedComponent,
    PhysicalInventoryComponent,
    PhysicalInventoryProductsComponent,
    WarehouseToolRequestsComponent,
    WarehouseToolRequestComponent,
    WarehouseProductionRequestsComponent,
    WarehouseProductionRequestComponent,
    WarehouseDeliveryRequestsComponent,
    WarehouseDeliveryRequestComponent,
    WarehouseDeliveryChainComponent,
    CreatePhysicalInventoryComponent,
    MovePhysicalInventoryProductComponent,
    AddProductToPhysicalInventoryComponent,
    CreateEditWarehouseComponent,
    CreateEditLocatorComponent,
    CreateEditWarehouseCategoryComponent,
    CreateEditUnitMeasureComponent,
    CreateEditWarehouseProductComponent,
    MoveWarehouseProductComponent,
    ProductionListsComponent,
    ProductionListComponent,
    SetProductionListLocatorComponent,
    ListProductPrintItemComponent,
    WarehouseQcComponent,
    WarehouseQcInvoiceComponent,
    QcAcceptToWarehouseComponent,
    IsolatorAcceptToWarehouseComponent,
    QcAcceptTechnicalEquipmentComponent,
    WarehouseQcOrderComponent,
    WarehouseProductionRequestPrintPageComponent,
    WarehouseDeliveryRequestPrintPageComponent,
    NomenclatureSerialInfoComponent,
    ReservationInfoComponent,
    PhysicalInventoryProductsChangesComponent,
    WarehouseDeliveryChainPrintComponent,
    ProductionListChainsStatisticsComponent,
    WarehouseToolRequestPrintPageComponent,
    ProductionListSetActualQuantityDialogComponent,
    IsolatorWriteOffInvoiceProductComponent,
    IsolatorWriteOffOrderProductComponent,
    ScanResultNoResultComponent,
    ScanResultWasFoundComponent,
    ScanNextComponent,
    RmaCommentDialogComponent,
    PhysicalInventoryScanResultModalComponent,
    OrderProductionRequestsSignsListComponent,
    AddIsolatorProductComponent,
  ],
  exports: [
    WarehouseCategoriesComponent
  ],
  imports: [
    CommonModule,
    WarehouseRouting,
    LayoutModule,
    SharedModule,
    TreeModule,
    ProductStructureModule,
    QrCodeModule,
    RippleModule,
  ]
})
export class WarehouseModule {
}

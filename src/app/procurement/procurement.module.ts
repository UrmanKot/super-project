import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementRouting } from './procurement.routing';
import { ProcurementChainsComponent } from './components/procurement-chains/procurement-chains.component';
import { ProcurementLayoutComponent } from './components/procurement-layout/procurement-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '@shared/shared.module';
import {WarehouseModule} from '../warehouse/warehouse.module';
import { ProcurementOrderPageComponent } from './components/procurement-order-page/procurement-order-page.component';
import { EditOrderProductQuantityComponent } from './modals/edit-order-product-quantity/edit-order-product-quantity.component';
import { EditOrderProductDeliveryDateComponent } from './modals/edit-order-product-delivery-date/edit-order-product-delivery-date.component';
import { AddOrderProductToOrderComponent } from './modals/add-order-product-to-order/add-order-product-to-order.component';
import { InvoiceFilesComponent } from './modals/invoice-files/invoice-files.component';
import { ServiceInvoiceFilesComponent } from './modals/service-invoice-files/service-invoice-files.component';
import { AuxiliaryInvoicesTypesListComponent } from './components/auxiliary-invoices-types-list/auxiliary-invoices-types-list.component';
import { CreateEditAuxiliaryInvoiceTypeComponent } from './modals/create-edit-auxiliary-invoice-type/create-edit-auxiliary-invoice-type.component';
import { ProcurementOrderStatusesComponent } from './components/procurement-order-statuses/procurement-order-statuses.component';
import { ProcurementChainCreationListComponent } from './components/procurement-chain-creation-list/procurement-chain-creation-list.component';

@NgModule({
  declarations: [
    ProcurementChainsComponent,
    ProcurementLayoutComponent,
    ProcurementOrderPageComponent,
    EditOrderProductQuantityComponent,
    EditOrderProductDeliveryDateComponent,
    AddOrderProductToOrderComponent,
    InvoiceFilesComponent,
    ServiceInvoiceFilesComponent,
    AuxiliaryInvoicesTypesListComponent,
    CreateEditAuxiliaryInvoiceTypeComponent,
    ProcurementOrderStatusesComponent,
    ProcurementChainCreationListComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ProcurementRouting,
    LayoutModule,
    SharedModule,
    WarehouseModule
  ]
})
export class ProcurementModule { }

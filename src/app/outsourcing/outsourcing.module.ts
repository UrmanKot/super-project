import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsourcingRouting } from './outsourcing.routing';
import { OutsourcingLayoutComponent } from './components/outsourcing-layout/outsourcing-layout.component';
import { OutsourcingChainsComponent } from './components/outsourcing-chains/outsourcing-chains.component';
import { OutsourcingOrderStatusesComponent } from './components/outsourcing-order-statuses/outsourcing-order-statuses.component';
import {LayoutModule} from '../layout/layout.module';
import { OutsourcingOrderPageComponent } from './components/outsourcing-order-page/outsourcing-order-page.component';
import {SharedModule} from '@shared/shared.module';
import { AddSupplierToOrderComponent } from './modals/add-supplier-to-order/add-supplier-to-order.component';
import { EditOrderSupplierComponent } from './modals/edit-order-supplier/edit-order-supplier.component';
import { OutsourcingChainCreationListComponent } from './components/outsourcing-chain-creation-list/outsourcing-chain-creation-list.component';
import { OutsourcingRequestsComponent } from './components/outsourcing-requests/outsourcing-requests.component';
import { CreateOutsourcingRequestComponent } from './modals/create-outsourcing-request/create-outsourcing-request.component';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { SearchProductInWarehouseComponent } from './modals/search-product-in-warehouse/search-product-in-warehouse.component';
import { AddMaterialToOrderComponent } from './modals/add-material-to-order/add-material-to-order.component';


@NgModule({
  declarations: [
    OutsourcingLayoutComponent,
    OutsourcingChainsComponent,
    OutsourcingOrderStatusesComponent,
    OutsourcingOrderPageComponent,
    AddSupplierToOrderComponent,
    EditOrderSupplierComponent,
    OutsourcingChainCreationListComponent,
    OutsourcingRequestsComponent,
    CreateOutsourcingRequestComponent,
    SearchProductInWarehouseComponent,
    AddMaterialToOrderComponent
  ],
  imports: [
    CommonModule,
    OutsourcingRouting,
    SharedModule,
    LayoutModule,
    TriStateCheckboxModule,
  ]
})
export class OutsourcingModule { }

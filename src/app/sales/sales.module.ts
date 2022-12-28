import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRouting } from './sales.routing';
import { SalesListsComponent } from './components/sales-lists/sales-lists.component';
import { SalesLayoutComponent } from './components/sales-layout/sales-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '@shared/shared.module';
import { SalesChainsComponent } from './components/sales-chains/sales-chains.component';
import { NomenclaturePriceComponent } from './components/configs/nomenclature-price/nomenclature-price.component';
import { SalesStatusesComponent } from './components/sales-statuses/sales-statuses.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreateEditSalesStatusComponent } from './modals/create-edit-sales-status/create-edit-sales-status.component';
import { EditNomenclaturePriceModalComponent } from './modals/edit-nomenclature-price-modal/edit-nomenclature-price-modal.component';
import { CreateSalesChainComponent } from './modals/create-sales-chain/create-sales-chain.component';
import { RegionsComponent } from './components/regions/regions.component';


@NgModule({
  declarations: [
    SalesListsComponent,
    SalesLayoutComponent,
    SalesChainsComponent,
    NomenclaturePriceComponent,
    SalesStatusesComponent,
    CreateEditSalesStatusComponent,
    EditNomenclaturePriceModalComponent,
    CreateSalesChainComponent,
    RegionsComponent
  ],
  imports: [
    CommonModule,
    SalesRouting,
    SharedModule,
    LayoutModule,
    DragDropModule
  ]
})
export class SalesModule { }

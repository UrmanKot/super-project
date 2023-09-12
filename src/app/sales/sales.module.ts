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
import { SalesChainPageComponent } from './components/sales-chain-page/sales-chain-page.component';
import { EditEventModalComponent } from './modals/edit-event-modal/edit-event-modal.component';
import { EditStatusesModalComponent } from './modals/edit-statuses-modal/edit-statuses-modal.component';
import { CreateChoiceProductModalComponent } from './modals/create-choice-product-modal/create-choice-product-modal.component';
import { CreateSalesFileModalComponent } from './modals/create-sales-file-modal/create-sales-file-modal.component';
import {MultiSelectModule} from "primeng/multiselect";
import { CreateEditCountryComponent } from './modals/create-edit-country/create-edit-country.component';
import { CreateEditRegionComponent } from './modals/create-edit-region/create-edit-region.component';
import { CreateEditSubRegionComponent } from './modals/create-edit-sub-region/create-edit-sub-region.component';
import { SalesPricesComponent } from './components/sales-prices/sales-prices.component';
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import { EditNomenclaturePriceComponent } from './modals/edit-nomenclature-price/edit-nomenclature-price.component';
import { EditOfferPriceComponent } from './modals/edit-offer-price/edit-offer-price.component';


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
    RegionsComponent,
    SalesChainPageComponent,
    EditEventModalComponent,
    EditStatusesModalComponent,
    CreateChoiceProductModalComponent,
    CreateSalesFileModalComponent,
    CreateEditCountryComponent,
    CreateEditRegionComponent,
    CreateEditSubRegionComponent,
    SalesPricesComponent,
    EditNomenclaturePriceComponent,
    EditOfferPriceComponent,
  ],
    imports: [
        CommonModule,
        SalesRouting,
        SharedModule,
        LayoutModule,
        DragDropModule,
        MultiSelectModule,
        TriStateCheckboxModule
    ]
})
export class SalesModule { }

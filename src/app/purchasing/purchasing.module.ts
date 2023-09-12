import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasingRouting } from './purchasing.routing';
import { PurchasingLayoutComponent } from './components/purchasing-layout/purchasing-layout.component';
import { PurchasingOrderStatusesComponent } from './components/purchasing-order-statuses/purchasing-order-statuses.component';
import { PurchasingChainsComponent } from './components/purchasing-chains/purchasing-chains.component';
import { PurchasingOrderPageComponent } from './components/purchasing-order-page/purchasing-order-page.component';
import {LayoutModule} from '../layout/layout.module';
import { PurchasingCategoriesComponent } from './components/purchasing-categories/purchasing-categories.component';
import {SharedModule} from '@shared/shared.module';
import { CreateEditPurchasingCategoryComponent } from './modals/create-edit-purchasing-category/create-edit-purchasing-category.component';
import { PurchasingChainCreationListComponent } from './components/purchasing-chain-creation-list/purchasing-chain-creation-list.component';
import { PurchasingRequestsComponent } from './components/purchasing-requests/purchasing-requests.component';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { CreateEmptyPurchaseChainComponent } from './modals/create-empty-purchase-chain/create-empty-purchase-chain.component';
import { EditPurchasingCategoryAccountingNumberComponent } from './modals/edit-purchasing-category-accounting-number/edit-purchasing-category-accounting-number.component';


@NgModule({
  declarations: [
    PurchasingLayoutComponent,
    PurchasingOrderStatusesComponent,
    PurchasingChainsComponent,
    PurchasingOrderPageComponent,
    PurchasingCategoriesComponent,
    CreateEditPurchasingCategoryComponent,
    PurchasingChainCreationListComponent,
    PurchasingRequestsComponent,
    CreateEmptyPurchaseChainComponent,
    EditPurchasingCategoryAccountingNumberComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PurchasingRouting,
    LayoutModule,
    TriStateCheckboxModule
  ]
})
export class PurchasingModule { }

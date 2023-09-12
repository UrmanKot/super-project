import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryChainsRouting } from './delivery-chains.routing';
import {SharedModule} from '@shared/shared.module';
import { DeliveryChainsComponent } from './components/delivery-chains/delivery-chains.component';
import { DeliveryChainsLayoutComponent } from './components/delivery-chains-layout/delivery-chains-layout.component';
import {LayoutModule} from "../layout/layout.module";
import {LeftPadPipe} from "@shared/pipes/pad.pipe";
import { DeliveryChainPageComponent } from './components/delivery-chain-page/delivery-chain-page.component';
import { EditDeliveryChainComponent } from './modals/edit-delivery-chain/edit-delivery-chain.component';
import { DeliveryChainFilesComponent } from './modals/delivery-chain-files/delivery-chain-files.component';


@NgModule({
  declarations: [
    DeliveryChainsComponent,
    DeliveryChainsLayoutComponent,
    DeliveryChainPageComponent,
    EditDeliveryChainComponent,
    DeliveryChainFilesComponent
  ],
  imports: [
    CommonModule,
    DeliveryChainsRouting,
    SharedModule,
    LayoutModule,
    LeftPadPipe,
  ]
})
export class DeliveryChainsModule { }

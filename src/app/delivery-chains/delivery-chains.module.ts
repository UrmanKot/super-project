import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryChainsRouting } from './delivery-chains.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    DeliveryChainsRouting,
    SharedModule
  ]
})
export class DeliveryChainsModule { }

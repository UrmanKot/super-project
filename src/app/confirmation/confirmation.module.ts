import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationRouting } from './confirmation.routing';
import { NomenclatureConfirmationComponent } from './components/nomenclature-confirmation/nomenclature-confirmation.component';
import {SharedModule} from '@shared/shared.module';
import { PaymentConfirmationComponent } from './components/payment-confirmation/payment-confirmation.component';
import { ConfirmationLayoutComponent } from './components/confirmation-layout/confirmation-layout.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  declarations: [
    NomenclatureConfirmationComponent,
    PaymentConfirmationComponent,
    ConfirmationLayoutComponent
  ],
  imports: [
    CommonModule,
    ConfirmationRouting,
    SharedModule,
    LayoutModule,
  ]
})
export class ConfirmationModule { }

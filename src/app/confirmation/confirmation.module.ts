import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationRouting } from './confirmation.routing';
import { NomenclatureConfirmationComponent } from './components/nomenclature-confirmation/nomenclature-confirmation.component';
import {SharedModule} from '@shared/shared.module';
import { PaymentConfirmationComponent } from './components/payment-confirmation/payment-confirmation.component';

@NgModule({
  declarations: [
    NomenclatureConfirmationComponent,
    PaymentConfirmationComponent
  ],
  imports: [
    CommonModule,
    ConfirmationRouting,
    SharedModule,
  ]
})
export class ConfirmationModule { }

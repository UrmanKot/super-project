import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationRouting } from './confirmation.routing';
import { NomenclatureConfirmationComponent } from './components/nomenclature-confirmation/nomenclature-confirmation.component';
import {SharedModule} from '@shared/shared.module';
import { PaymentConfirmationComponent } from './components/payment-confirmation/payment-confirmation.component';
import { ConfirmationLayoutComponent } from './components/confirmation-layout/confirmation-layout.component';
import {LayoutModule} from '../layout/layout.module';
import { WriteOffConfirmationComponent } from './components/write-off-confirmation/write-off-confirmation.component';
import { ProductionListConfirmationComponent } from './components/production-list-confirmation/production-list-confirmation.component';
import { SupplierConfirmationComponent } from './components/supplier-confirmation/supplier-confirmation.component';
import { ReservationConfirmationComponent } from './components/reservation-confirmation/reservation-confirmation.component';

@NgModule({
  declarations: [
    NomenclatureConfirmationComponent,
    PaymentConfirmationComponent,
    ConfirmationLayoutComponent,
    WriteOffConfirmationComponent,
    ProductionListConfirmationComponent,
    SupplierConfirmationComponent,
    ReservationConfirmationComponent,
  ],
  imports: [
    CommonModule,
    ConfirmationRouting,
    SharedModule,
    LayoutModule,
  ]
})
export class ConfirmationModule { }

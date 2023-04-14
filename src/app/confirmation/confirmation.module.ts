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
import { PaymentConfirmationLimitComponent } from './modals/payment-confirmation-limit/payment-confirmation-limit.component';
import { PlanningListConfirmationComponent } from './components/planning-list-confirmation/planning-list-confirmation.component';
import { CorrectionsListComponent } from './components/planning-list-confirmation/components/corrections-list/corrections-list.component';
import { ConfirmationsListComponent } from './components/planning-list-confirmation/components/confirmations-list/confirmations-list.component';

@NgModule({
    declarations: [
        NomenclatureConfirmationComponent,
        PaymentConfirmationComponent,
        ConfirmationLayoutComponent,
        WriteOffConfirmationComponent,
        ProductionListConfirmationComponent,
        SupplierConfirmationComponent,
        ReservationConfirmationComponent,
        PaymentConfirmationLimitComponent,
        PlanningListConfirmationComponent,
        CorrectionsListComponent,
        ConfirmationsListComponent,
    ],
    exports: [
        SupplierConfirmationComponent
    ],
    imports: [
        CommonModule,
        ConfirmationRouting,
        SharedModule,
        LayoutModule,
    ]
})
export class ConfirmationModule { }

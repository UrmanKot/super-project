import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListsComponent } from './components/payment-lists/payment-lists.component';
import { PaymentLayoutComponent } from './components/payment-layout/payment-layout.component';
import {RouterModule} from "@angular/router";
import {LayoutModule} from "../layout/layout.module";
import {PaymentsRouting} from "./payments.routing";
import {SharedModule} from "@shared/shared.module";
import { CreateEditPaymentFormComponent } from './modals/create-edit-payment-form/create-edit-payment-form.component';
import {MultiSelectModule} from "primeng/multiselect";
import { CreateEditServicePaymentFormComponent } from './modals/create-edit-service-payment-form/create-edit-service-payment-form.component';
import { PaymentFileFormComponent } from './modals/payment-file-form/payment-file-form.component';
import { ServicePaymentFileFormComponent } from './modals/service-payment-file-form/service-payment-file-form.component';
import { DeliveryPaymentListComponent } from './components/delivery-payment-list/delivery-payment-list.component';




@NgModule({
  declarations: [
    PaymentListsComponent,
    PaymentLayoutComponent,
    CreateEditPaymentFormComponent,
    CreateEditServicePaymentFormComponent,
    PaymentFileFormComponent,
    ServicePaymentFileFormComponent,
    DeliveryPaymentListComponent,

  ],
    imports: [
        CommonModule,
        RouterModule,
        LayoutModule,
        PaymentsRouting,
        SharedModule,
        MultiSelectModule
    ]
})
export class PaymentsModule { }

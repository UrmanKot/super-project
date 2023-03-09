import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QcRouting } from './qc.routing';
import { QcListComponent } from './components/qc-list/qc-list.component';
import { QcLayoutComponent } from './components/qc-layout/qc-layout.component';
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import { QcInvoiceComponent } from './components/qc-invoice/qc-invoice.component';
import { QcOrderComponent } from './components/qc-order/qc-order.component';
import { QualityControlModalComponent } from './modals/quality-control-modal/quality-control-modal.component';


@NgModule({
  declarations: [
    QcListComponent,
    QcLayoutComponent,
    QcInvoiceComponent,
    QcOrderComponent,
    QualityControlModalComponent
  ],
  imports: [
    CommonModule,
    QcRouting,
    SharedModule,
    LayoutModule
  ]
})
export class QcModule { }

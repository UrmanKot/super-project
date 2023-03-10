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
import { ProtocolsComponent } from './components/protocols/protocols.component';
import { CreateEditProtocolComponent } from './modals/create-edit-protocol/create-edit-protocol.component';
import { NomenclatureProtocolPickerComponent } from './modals/nomenclature-protocol-picker/nomenclature-protocol-picker.component';
import { QualityControlTechnicalEquipmentComponent } from './modals/quality-control-technical-equipment/quality-control-technical-equipment.component';


@NgModule({
  declarations: [
    QcListComponent,
    QcLayoutComponent,
    QcInvoiceComponent,
    QcOrderComponent,
    QualityControlModalComponent,
    ProtocolsComponent,
    CreateEditProtocolComponent,
    NomenclatureProtocolPickerComponent,
    QualityControlTechnicalEquipmentComponent
  ],
  imports: [
    CommonModule,
    QcRouting,
    SharedModule,
    LayoutModule
  ]
})
export class QcModule { }

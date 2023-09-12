import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QcRouting } from './qc.routing';
import { QcListComponent } from './components/qc-list/qc-list.component';
import { QcDeliveryListComponent } from './components/qc-delivery-list/qc-delivery-list.component';
import { QcLayoutComponent } from './components/qc-layout/qc-layout.component';
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '../layout/layout.module';
import { QcInvoiceComponent } from './components/qc-invoice/qc-invoice.component';
import { QcOrderComponent } from './components/qc-order/qc-order.component';
import { QcDeliveryComponent } from './components/qc-delivery/qc-delivery.component';
import { QcDeliveryChainComponent } from './components/qc-delivery-chain/qc-delivery-chain.component';
import { QualityControlModalComponent } from './modals/quality-control-modal/quality-control-modal.component';
import { ProtocolsComponent } from './components/protocols/protocols.component';
import { CreateEditProtocolComponent } from './modals/create-edit-protocol/create-edit-protocol.component';
import { NomenclatureProtocolPickerComponent } from './modals/nomenclature-protocol-picker/nomenclature-protocol-picker.component';
import { QualityControlTechnicalEquipmentComponent } from './modals/quality-control-technical-equipment/quality-control-technical-equipment.component';
import { MoveQcWithSerialComponent } from './modals/move-qc-with-serial/move-qc-with-serial.component';
import { MoveQcWithProtocolComponent } from './modals/move-qc-with-protocol/move-qc-with-protocol.component';
import {QrCodeModule} from '../qr-code/qr-code.module';
import { FoundProductInQcComponent } from './modals/found-product-in-qc/found-product-in-qc.component';
import { QcDeliveryPrintPageComponent } from './components/qc-delivery-print-page/qc-delivery-print-page.component';
import { QcDeliveryChainPrintPageComponent } from './components/qc-delivery-chain-print-page/qc-delivery-chain-print-page.component';


@NgModule({
  declarations: [
    QcListComponent,
    QcDeliveryListComponent,
    QcLayoutComponent,
    QcInvoiceComponent,
    QcOrderComponent,
    QcDeliveryComponent,
    QcDeliveryChainComponent,
    QualityControlModalComponent,
    ProtocolsComponent,
    CreateEditProtocolComponent,
    NomenclatureProtocolPickerComponent,
    QualityControlTechnicalEquipmentComponent,
    MoveQcWithSerialComponent,
    MoveQcWithProtocolComponent,
    FoundProductInQcComponent,
    QcDeliveryPrintPageComponent,
    QcDeliveryChainPrintPageComponent
  ],
    imports: [
        CommonModule,
        QcRouting,
        SharedModule,
        LayoutModule,
        QrCodeModule
    ]
})
export class QcModule { }

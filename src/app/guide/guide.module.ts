import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '@shared/shared.module';
import {GuideComponent} from './guide/guide.component';
import {GuideButtonComponent} from './guide-button/guide-button.component';
import {GuideRouting} from './guide.routing';
import {GuideSalesComponent} from './guide-sales/guide-sales.component';
import {GuideOutsourcingComponent} from './guide-outsourcing/guide-outsourcing.component';
import {GuideProcurementComponent} from './guide-procurement/guide-procurement.component';
import {GuideProductionComponent} from './guide-production/guide-production.component';
import {SalesInstructionComponent} from './guide-instructions/sales-instruction/sales-instruction.component';
import {MainInstructionComponent} from './guide-instructions/main-instruction/main-instruction.component';
import {GuideWarehouseComponent} from './guide-schemes/guide-warehouse/guide-warehouse.component';
import {
  WarehouseInstructionComponent
} from './guide-instructions/warehouse-instruction/warehouse-instruction.component';
import {GuideConfirmationComponent} from './guide-schemes/guide-confirmation/guide-confirmation.component';
import {
  ConfirmationInstructionComponent
} from './guide-instructions/confirmation-instruction/confirmation-instruction.component';
import {
  ProductStructureInstructionComponent
} from './guide-instructions/product-structure-instruction/product-structure-instruction.component';
import {GuideGlossaryComponent} from './guide-glossary/guide-glossary.component';
import {GuideMapComponent} from './guide-map/guide-map.component';
import {
  GuideMapManufacturingProcessComponent
} from './guide-map/components/guide-map-manufacturing-process/guide-map-manufacturing-process.component';
import {
  GuideMapOutsoursingProcurementComponent
} from './guide-map/components/guide-map-outsoursing-procurement/guide-map-outsoursing-procurement.component';
import {
  GuideMapProductionListPreparationByWarehouseComponent
} from './guide-map/components/guide-map-production-list-preparation-by-warehouse/guide-map-production-list-preparation-by-warehouse.component';
import { GuideMapProductionListProcurementComponent } from './guide-map/components/guide-map-production-list-procurement/guide-map-production-list-procurement.component';
import { GuideMapProductionRequestProcessingComponent } from './guide-map/components/guide-map-production-request-processing/guide-map-production-request-processing.component';
import { OutsourceInstructionComponent } from './guide-instructions/outsource-instruction/outsource-instruction.component';
import { ProcurementInstructionComponent } from './guide-instructions/procurement-instruction/procurement-instruction.component';
import { ProductionInstructionComponent } from './guide-instructions/production-instruction/production-instruction.component';
import { QcInstructionComponent } from './guide-instructions/qc-instruction/qc-instruction.component';
import {ResizableModule} from "angular-resizable-element";
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [GuideComponent, GuideButtonComponent, GuideSalesComponent, GuideOutsourcingComponent, GuideProcurementComponent, GuideProductionComponent, SalesInstructionComponent, MainInstructionComponent, GuideWarehouseComponent, WarehouseInstructionComponent, GuideConfirmationComponent, ConfirmationInstructionComponent, ProductStructureInstructionComponent, GuideGlossaryComponent, GuideMapComponent, GuideMapManufacturingProcessComponent, GuideMapOutsoursingProcurementComponent, GuideMapProductionListPreparationByWarehouseComponent, GuideMapProductionListProcurementComponent, GuideMapProductionRequestProcessingComponent, OutsourceInstructionComponent, ProcurementInstructionComponent, ProductionInstructionComponent, QcInstructionComponent],
  exports: [
    GuideComponent
  ],
  imports: [
    CommonModule,
    GuideRouting,
    SharedModule,
    ResizableModule,
    DragDropModule
  ]
})
export class GuideModule {
}

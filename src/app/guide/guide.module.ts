import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '@shared/shared.module';
import {GuideComponent} from './guide/guide.component';
import {GuideButtonComponent} from './guide-button/guide-button.component';
import {GuideRouting} from './guide.routing';
import {GuideSalesComponent} from './guide-sales/guide-sales.component';
import {GuideOutsourcingComponent} from './guide-outsourcing/guide-outsourcing.component';
import {GuideProcurementComponent} from './guide-procurement/guide-procurement.component';
import {GuideProductionComponent} from './guide-production/guide-production.component';
import { SalesInstructionComponent } from './guide-instructions/sales-instruction/sales-instruction.component';
import { MainInstructionComponent } from './guide-instructions/main-instruction/main-instruction.component';
import { GuideWarehouseComponent } from './guide-schemes/guide-warehouse/guide-warehouse.component';
import { WarehouseInstructionComponent } from './guide-instructions/warehouse-instruction/warehouse-instruction.component';
import { GuideConfirmationComponent } from './guide-schemes/guide-confirmation/guide-confirmation.component';
import { ConfirmationInstructionComponent } from './guide-instructions/confirmation-instruction/confirmation-instruction.component';
import { ProductStructureInstructionComponent } from './guide-instructions/product-structure-instruction/product-structure-instruction.component';


@NgModule({
  declarations: [GuideComponent, GuideButtonComponent, GuideSalesComponent, GuideOutsourcingComponent, GuideProcurementComponent, GuideProductionComponent, SalesInstructionComponent, MainInstructionComponent, GuideWarehouseComponent, WarehouseInstructionComponent, GuideConfirmationComponent, ConfirmationInstructionComponent, ProductStructureInstructionComponent],
  exports: [
    GuideComponent
  ],
    imports: [
        CommonModule,
        GuideRouting,
        SharedModule
    ]
})
export class GuideModule { }

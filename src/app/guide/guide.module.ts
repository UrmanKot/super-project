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


@NgModule({
  declarations: [GuideComponent, GuideButtonComponent, GuideSalesComponent, GuideOutsourcingComponent, GuideProcurementComponent, GuideProductionComponent],
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingRouting } from './manufacturing.routing';
import {ManufacturingLayoutComponent} from './components/manufacturing-layout/manufacturing-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '@shared/shared.module';
import {ManufacturingPlanListComponent} from './components/manufacturing-plan-list/manufacturing-plan-list.component';


@NgModule({
  declarations: [
    ManufacturingLayoutComponent,
    ManufacturingPlanListComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ManufacturingRouting,
    LayoutModule
  ]
})
export class ManufacturingModule { }

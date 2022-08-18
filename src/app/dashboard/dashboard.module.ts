import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    SharedModule
  ]
})
export class DashboardModule { }

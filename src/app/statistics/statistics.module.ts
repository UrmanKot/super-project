import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRouting } from './statistics.routing';
import { StatisticsComponent } from './components/statistics/statistics.component';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRouting,
    ButtonModule
  ]
})
export class StatisticsModule { }

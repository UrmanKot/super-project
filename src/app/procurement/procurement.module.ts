import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementRouting } from './procurement.routing';
import { ChainsComponent } from './components/chains/chains.component';
import { ProcurementLayoutComponent } from './components/procurement-layout/procurement-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {SharedModule} from '@shared/shared.module';
import { StatusesPickerComponent } from './pickers/statuses-picker/statuses-picker.component';
import {WarehouseModule} from '../warehouse/warehouse.module';
import { ProcurementOrderPageComponent } from './components/procurement-order-page/procurement-order-page.component';

@NgModule({
  declarations: [
    ChainsComponent,
    ProcurementLayoutComponent,
    StatusesPickerComponent,
    ProcurementOrderPageComponent,
  ],
  imports: [
    CommonModule,
    ProcurementRouting,
    LayoutModule,
    SharedModule,
    WarehouseModule
  ]
})
export class ProcurementModule { }

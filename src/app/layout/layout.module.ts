import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '@shared/shared.module';
import {InputSwitchModule} from 'primeng/inputswitch';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LogoComponent,
  ],
  exports: [
    LogoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    InputSwitchModule,
  ]
})
export class LayoutModule { }

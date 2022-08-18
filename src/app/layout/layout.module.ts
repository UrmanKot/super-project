import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavigationComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
  ]
})
export class LayoutModule { }

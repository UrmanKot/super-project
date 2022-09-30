import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleIconComponent } from './icons/module-icon/module-icon.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TreeTableModule} from 'primeng/treetable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import { ConfirmComponent } from './modals/confirm/confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ProductCategoryPickerComponent } from './pickers/product-category-picker/product-category-picker.component';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabViewModule} from 'primeng/tabview';
import {MoneyFormatPipe} from '@shared/pipes/money-format.pipe';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { InIconComponent } from './icons/in-icon/in-icon.component';


@NgModule({
  declarations: [
    ModuleIconComponent,
    ConfirmComponent,
    ProductCategoryPickerComponent,
    MoneyFormatPipe,
    InIconComponent,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    TreeTableModule,
    ReactiveFormsModule,
    MenubarModule,
    MatDialogModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    ProductCategoryPickerComponent,
    TableModule,
    RadioButtonModule,
    ModuleIconComponent,
    TabViewModule,
    MoneyFormatPipe,
    TieredMenuModule,
    InIconComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TreeTableModule,
    ReactiveFormsModule,
    MenubarModule,
    MatDialogModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    TableModule,
    RadioButtonModule,
    TabViewModule,
    TieredMenuModule,
  ]
})
export class SharedModule { }

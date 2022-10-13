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
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabViewModule} from 'primeng/tabview';
import {MoneyFormatPipe} from '@shared/pipes/money-format.pipe';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { InIconComponent } from './icons/in-icon/in-icon.component';
import { NomenclaturePickerComponent } from './components/nomenclature-picker/nomenclature-picker.component';
import {
  ProductRootCategoryPickerComponent
} from '@shared/pickers/product-root-category-picker/product-root-category-picker.component';
import { ProductCategoryPickerComponent } from './pickers/product-category-picker/product-category-picker.component';
import {TreeSelectModule} from 'primeng/treeselect';
import {PaginatorModule} from 'primeng/paginator';
import { PasteImageComponent } from './modals/paste-image/paste-image.component';
import {ImagesSliderComponent} from '@shared/components/images-slider/images-slider.component';
import { ImageGalleryComponent } from './modals/image-gallery/image-gallery.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {
  MultiTechnologyPickerComponent
} from '@shared/pickers/multi-technology-picker/multi-technology-picker.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { WarehousePickerComponent } from './pickers/warehouse-picker/warehouse-picker.component';
import { LocatorPickerComponent } from './pickers/locator-picker/locator-picker.component';
import { NomenclatureTypePickerComponent } from './pickers/nomenclature-type-picker/nomenclature-type-picker.component';


@NgModule({
  declarations: [
    ModuleIconComponent,
    ConfirmComponent,
    ProductRootCategoryPickerComponent,
    MoneyFormatPipe,
    InIconComponent,
    NomenclaturePickerComponent,
    ProductCategoryPickerComponent,
    ImagesSliderComponent,
    PasteImageComponent,
    ImageGalleryComponent,
    MultiTechnologyPickerComponent,
    UploadFileComponent,
    WarehousePickerComponent,
    LocatorPickerComponent,
    NomenclatureTypePickerComponent
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
    ProductRootCategoryPickerComponent,
    TableModule,
    RadioButtonModule,
    ModuleIconComponent,
    TabViewModule,
    MoneyFormatPipe,
    TieredMenuModule,
    InIconComponent,
    NomenclaturePickerComponent,
    PaginatorModule,
    ProductCategoryPickerComponent,
    ImagesSliderComponent,
    MultiTechnologyPickerComponent,
    UploadFileComponent,
    WarehousePickerComponent,
    LocatorPickerComponent,
    NomenclatureTypePickerComponent
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
    TreeSelectModule,
    PaginatorModule,
    MultiSelectModule,
  ]
})
export class SharedModule { }

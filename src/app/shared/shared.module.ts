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
import {
  ProductStructureCategoryPickerComponent
} from '@shared/pickers/product-structure-category-picker/product-structure-category-picker.component';
import { UnitMeasurePickerComponent } from './pickers/unit-measure-picker/unit-measure-picker.component';
import { AcceptedTypePickerComponent } from './pickers/accepted-type-picker/accepted-type-picker.component';
import {MultiWarehousePickerComponent} from '@shared/pickers/multi-warehouse-picker/multi-warehouse-picker.component';
import { MultiLocatorPickerComponent } from './pickers/multi-locator-picker/multi-locator-picker.component';
import { GroupLocatorPickerComponent } from './pickers/group-locator-picker/group-locator-picker.component';
import { TechnologyPickerComponent } from './pickers/technology-picker/technology-picker.component';
import { NomenclaturePickerModalComponent } from './modals/nomenclature-picker-modal/nomenclature-picker-modal.component';
import {CalendarModule} from 'primeng/calendar';
import { EmployeePickerComponent } from './pickers/employee-picker/employee-picker.component';
import {CompleteListComponent} from '@shared/modals/refactoring/complete-list/complete-list.component';
import {ListProductsComponent} from '@shared/modals/refactoring/list-products/list-products.component';
import {AccountingTypePickerComponent} from '@shared/pickers/accounting-type-picker/accounting-type-picker.component';
import { MultiCategoriesPickerComponent } from './pickers/multi-categories-picker/multi-categories-picker.component';
import { MultiProductStructureCategoriesPickerComponent } from './pickers/multi-product-structure-categories-picker/multi-product-structure-categories-picker.component';


@NgModule({
  declarations: [
    ModuleIconComponent,
    ConfirmComponent,
    ProductStructureCategoryPickerComponent,
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
    NomenclatureTypePickerComponent,
    UnitMeasurePickerComponent,
    AcceptedTypePickerComponent,
    MultiWarehousePickerComponent,
    MultiLocatorPickerComponent,
    GroupLocatorPickerComponent,
    TechnologyPickerComponent,
    NomenclaturePickerModalComponent,
    EmployeePickerComponent,
    CompleteListComponent,
    ListProductsComponent,
    AccountingTypePickerComponent,
    MultiCategoriesPickerComponent,
    MultiProductStructureCategoriesPickerComponent
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
    ProductStructureCategoryPickerComponent,
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
    NomenclatureTypePickerComponent,
    UnitMeasurePickerComponent,
    AcceptedTypePickerComponent,
    MultiWarehousePickerComponent,
    MultiLocatorPickerComponent,
    GroupLocatorPickerComponent,
    TechnologyPickerComponent,
    CalendarModule,
    EmployeePickerComponent,
    AccountingTypePickerComponent,
    MultiCategoriesPickerComponent,
    MultiProductStructureCategoriesPickerComponent
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
    CalendarModule
  ]
})
export class SharedModule { }

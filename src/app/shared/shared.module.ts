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
import { MultiCompanyPickerComponent } from './pickers/multi-company-picker/multi-company-picker.component';
import { MultiSalesStatusPickerComponent } from './pickers/multi-sales-status-picker/multi-sales-status-picker.component';
import { MultiCompanyCategoryPickerComponent } from './pickers/multi-company-category-picker/multi-company-category-picker.component';
import { CompanyPickerComponent } from './pickers/company-picker/company-picker.component';
import { CompanyCategoryPickerComponent } from './pickers/company-category-picker/company-category-picker.component';
import { RegionPickerComponent } from './pickers/region-picker/region-picker.component';
import { CompanyCategoryModulePickerComponent } from './pickers/company-category-module-picker/company-category-module-picker.component';
import { UserProfilePickerComponent } from './pickers/user-profile-picker/user-profile-picker.component';
import { SortIconComponent } from './icons/sort-icon/sort-icon.component';
import { DateTimePickerComponent } from './pickers/date-time-picker/date-time-picker.component';
import {NgxMaskModule} from 'ngx-mask';
import { CategoriesTreePickerComponent } from './components/categories-tree-picker/categories-tree-picker.component';
import { CompanyCategorizedMultiPickerComponent } from './pickers/company-categorized-multi-picker/company-categorized-multi-picker.component';
import {CrmSingleEmployeePickerComponent} from '@shared/pickers/crm-employee-picker/crm-single-employee-picker.component';
import { MultiContactsPickerComponent } from './pickers/multi-contacts-picker/multi-contacts-picker.component';
import { UploadFilePickerComponent } from './components/upload-file-picker/upload-file-picker.component';
import {FileUploadModule} from 'primeng/fileupload';
import {CurrencyPickerComponent} from '@shared/pickers/currency-picker/currency-picker.component';
import { AreaPickerComponent } from './pickers/area-picker/area-picker.component';
import { AreaLocatorPickerComponent } from './pickers/area-locator-picker/area-locator-picker.component';
import { WarehouseSearchComponent } from './modals/warehouse-search/warehouse-search.component';
import { PasteScreenImageDirective } from './directives/paste-screen-image.directive';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { AddFileToOrderComponent } from './modals/add-file-to-order/add-file-to-order.component';
import { EditOrderComponent } from './modals/edit-order/edit-order.component';
import {ProcurementModule} from '../procurement/procurement.module';
import {MultiStatusesPickerComponent} from '@shared/pickers/multi-statuses-picker/multi-statuses-picker.component';
import { StatusesPickerComponent } from './pickers/statuses-picker/statuses-picker.component';
import { OrderStatusesComponent } from './components/order-statuses/order-statuses.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreateEditStatusComponent } from './modals/create-edit-status/create-edit-status.component';
import { CreateChainComponent } from './modals/create-chain/create-chain.component';
import { AddProductsToChainComponent } from './modals/add-products-to-chain/add-products-to-chain.component';
import { MultiProductCategoriesPickerComponent } from './pickers/multi-product-categories-picker/multi-product-categories-picker.component';
import { MultiPurchaseCategoryPickerComponent } from './pickers/multi-purchase-category-picker/multi-purchase-category-picker.component';
import { CrmCompanyPickerComponent } from './pickers/crm-company-picker/crm-company-picker.component';
import { CrmTreeCompanyPickerComponent } from './pickers/crm-tree-company-picker/crm-tree-company-picker.component';
import { SubRegionPickerComponent } from './pickers/sub-region-picker/sub-region-picker.component';
import { OrderStatusesTableComponent } from './components/order-statuses-table/order-statuses-table.component';
import { OrderStatusesChartComponent } from './components/order-statuses-chart/order-statuses-chart.component';
import { SearchPipe } from './pipes/search.pipe';
import { AlbumComponent } from './modals/album/album.component';


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
    MultiProductStructureCategoriesPickerComponent,
    MultiCompanyPickerComponent,
    MultiSalesStatusPickerComponent,
    MultiCompanyCategoryPickerComponent,
    CompanyPickerComponent,
    CompanyCategoryPickerComponent,
    RegionPickerComponent,
    CompanyCategoryModulePickerComponent,
    UserProfilePickerComponent,
    SortIconComponent,
    DateTimePickerComponent,
    CategoriesTreePickerComponent,
    CompanyCategorizedMultiPickerComponent,
    CrmSingleEmployeePickerComponent,
    MultiContactsPickerComponent,
    UploadFilePickerComponent,
    CurrencyPickerComponent,
    AreaPickerComponent,
    AreaLocatorPickerComponent,
    WarehouseSearchComponent,
    PasteScreenImageDirective,
    OrderPageComponent,
    AddFileToOrderComponent,
    EditOrderComponent,
    MultiStatusesPickerComponent,
    StatusesPickerComponent,
    OrderStatusesComponent,
    CreateEditStatusComponent,
    CreateChainComponent,
    AddProductsToChainComponent,
    MultiProductCategoriesPickerComponent,
    MultiPurchaseCategoryPickerComponent,
    CrmCompanyPickerComponent,
    CrmTreeCompanyPickerComponent,
    SubRegionPickerComponent,
    OrderStatusesTableComponent,
    OrderStatusesChartComponent,
    SearchPipe,
    AlbumComponent,
  ],
  exports: [
    MultiStatusesPickerComponent,
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
    MultiProductStructureCategoriesPickerComponent,
    MultiCompanyPickerComponent,
    MultiSalesStatusPickerComponent,
    MultiCompanyCategoryPickerComponent,
    CompanyPickerComponent,
    CompanyCategoryPickerComponent,
    RegionPickerComponent,
    CompanyCategoryModulePickerComponent,
    UserProfilePickerComponent,
    SortIconComponent,
    NomenclaturePickerModalComponent,
    DateTimePickerComponent,
    CategoriesTreePickerComponent,
    CompanyCategorizedMultiPickerComponent,
    CrmSingleEmployeePickerComponent,
    MultiContactsPickerComponent,
    UploadFilePickerComponent,
    CurrencyPickerComponent,
    AreaPickerComponent,
    AreaLocatorPickerComponent,
    PasteScreenImageDirective,
    MultiSelectModule,
    OrderPageComponent,
    OrderStatusesComponent,
    MultiProductCategoriesPickerComponent,
    MultiPurchaseCategoryPickerComponent,
    CrmCompanyPickerComponent,
    CrmTreeCompanyPickerComponent,
    SubRegionPickerComponent,
    OrderStatusesTableComponent,
    SearchPipe,
  ],
  imports: [
    MultiSelectModule,
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
    CalendarModule,
    NgxMaskModule.forRoot(),
    FileUploadModule,
    DragDropModule,
  ]
})
export class SharedModule { }

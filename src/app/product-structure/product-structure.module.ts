import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductStructureRouting} from './product-structure.routing';
import {
  ProductStructureProductsListComponent
} from './components/product-structure-products-list/product-structure-products-list.component';
import {SharedModule} from '@shared/shared.module';
import {
  ProductStructureProductComponent
} from './components/product-structure-product/product-structure-product.component';
import {MakeRootProductComponent} from './modals/make-root-product/make-root-product.component';
import {MakeProductionListComponent} from './modals/make-production-list/make-production-list.component';
import {TechnologiesComponent} from './components/technologies/technologies.component';
import {PrefixesComponent} from './components/prefixes/prefixes.component';
import {CreateEditTechnologyComponent} from './modals/create-edit-technology/create-edit-technology.component';
import {CreateEditPrefixComponent} from './modals/create-edit-prefix/create-edit-prefix.component';
import {
  ProductStructureLayoutComponent
} from './components/product-structure-layout/product-structure-layout.component';
import {LayoutModule} from '../layout/layout.module';
import {AddProductComponent} from './modals/add-product/add-product.component';
import {CreateEditRootProductComponent} from './modals/create-edit-root-product/create-edit-root-product.component';
import { EditProductComponent } from './modals/edit-product/edit-product.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { UploadProductStructureComponent } from './modals/upload-product-structure/upload-product-structure.component';
import { ProductFilesComponent } from './modals/product-files/product-files.component';
import {CreateEditProductFormComponent} from './components/create-edit-product-form/create-edit-product-form.component';
import { ProductStructureCategoriesComponent } from './components/product-structure-categories/product-structure-categories.component';
import {
  CreateEditProductStructureCategoryComponent
} from './modals/create-edit-product-structure-category/create-edit-product-structure-category.component';
import {AddTechnicalEquipmentComponent} from './modals/add-technical-equipment/add-technical-equipment.component';
import { TechnicalEquipmentsTableComponent } from './components/create-edit-product-form/components/technical-equipments-table/technical-equipments-table.component';
import { EditTechnicalEquipmentComponent } from './components/create-edit-product-form/components/technical-equipments-table/edit-technical-equipment/edit-technical-equipment.component';
import { NomenclatureFilesComponent } from './components/create-edit-product-form/components/nomenclature-files/nomenclature-files.component';

@NgModule({
  declarations: [
    ProductStructureProductsListComponent,
    CreateEditRootProductComponent,
    ProductStructureProductComponent,
    MakeRootProductComponent,
    MakeProductionListComponent,
    TechnologiesComponent,
    PrefixesComponent,
    CreateEditTechnologyComponent,
    CreateEditPrefixComponent,
    ProductStructureLayoutComponent,
    AddProductComponent,
    EditProductComponent,
    UploadProductStructureComponent,
    ProductFilesComponent,
    CreateEditProductFormComponent,
    ProductStructureCategoriesComponent,
    CreateEditProductStructureCategoryComponent,
    AddTechnicalEquipmentComponent,
    TechnicalEquipmentsTableComponent,
    EditTechnicalEquipmentComponent,
    NomenclatureFilesComponent,
  ],
  exports: [
    CreateEditProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductStructureRouting,
    SharedModule,
    LayoutModule,
    DragDropModule,
  ]
})
export class ProductStructureModule {
}

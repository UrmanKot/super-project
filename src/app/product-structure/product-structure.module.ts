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
    ProductFilesComponent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductStructureRouting } from './product-structure.routing';
import { ProductStructureProductsListComponent } from './components/product-structure-products-list/product-structure-products-list.component';
import {SharedModule} from '@shared/shared.module';
import { CreateEditProductComponent } from './modals/create-edit-product/create-edit-product.component';
import { ProductStructureProductComponent } from './components/product-structure-product/product-structure-product.component';
import { MakeRootProductComponent } from './modals/make-root-product/make-root-product.component';
import { MakeProductionListComponent } from './modals/make-production-list/make-production-list.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { PrefixesComponent } from './components/prefixes/prefixes.component';
import { CreateEditTechnologyComponent } from './modals/create-edit-technology/create-edit-technology.component';
import { CreateEditPrefixComponent } from './modals/create-edit-prefix/create-edit-prefix.component';


@NgModule({
  declarations: [
    ProductStructureProductsListComponent,
    CreateEditProductComponent,
    ProductStructureProductComponent,
    MakeRootProductComponent,
    MakeProductionListComponent,
    TechnologiesComponent,
    PrefixesComponent,
    CreateEditTechnologyComponent,
    CreateEditPrefixComponent
  ],
  imports: [
    CommonModule,
    ProductStructureRouting,
    SharedModule,
  ]
})
export class ProductStructureModule { }

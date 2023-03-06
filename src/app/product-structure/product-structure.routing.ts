import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ProductStructureProductsListComponent
} from './components/product-structure-products-list/product-structure-products-list.component';
import {
  ProductStructureProductComponent
} from './components/product-structure-product/product-structure-product.component';
import {TechnologiesComponent} from './components/technologies/technologies.component';
import {PrefixesComponent} from './components/prefixes/prefixes.component';
import {
  ProductStructureLayoutComponent
} from './components/product-structure-layout/product-structure-layout.component';
import {
  ProductStructureCategoriesComponent
} from './components/product-structure-categories/product-structure-categories.component';
import {WarehouseSerialTypesComponent} from './components/warehouse-serial-types/warehouse-serial-types.component';

const routes: Routes = [
  {
    path: '',
    component: ProductStructureLayoutComponent,
    children: [
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {
        path: 'products', children: [
          {path: '', title: 'Products', component: ProductStructureProductsListComponent},
          {path: 'structure/:id', title: 'Products', component: ProductStructureProductComponent}
        ]
      },
      {path: 'technologies', title: 'Technologies', component: TechnologiesComponent},
      {path: 'prefixes', title: 'Prefixes', component: PrefixesComponent},
      {path: 'categories', title: 'Categories', component: ProductStructureCategoriesComponent},
      {path: 'serial-types', title: 'Serial Number Types', component: WarehouseSerialTypesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductStructureRouting {
}

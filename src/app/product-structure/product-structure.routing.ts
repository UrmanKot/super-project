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

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {
    path: 'products', children: [
      {path: '', title: 'Products', component: ProductStructureProductsListComponent},
      {path: 'structure/:id', title: 'Products', component: ProductStructureProductComponent}
    ]
  },
  {path: 'technologies', title: 'Technologies', component: TechnologiesComponent},
  {path: 'prefixes', title: 'Prefixes', component: PrefixesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductStructureRouting {
}
